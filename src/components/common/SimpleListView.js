import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  ListView,
  View
} from 'react-native';

const cloneWithData = (dataSource, data) => {
  if (!data) {
    return dataSource.cloneWithRows([]);
  }
  if (Array.isArray(data)) {
    return dataSource.cloneWithRows(data);
  }
  // https://github.com/facebook/react-native/issues/1831
  // used removeClippedSubviews={false} hack !
  return dataSource.cloneWithRowsAndSections(data);
};

class SimpleListView extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      getRowData: (dataBlob, sid, rid) => {
        return dataBlob[sid][rid];
      },
      getSectionHeaderData: (dataBlob, sid) => {
        return dataBlob[sid];
      },
      rowHasChanged: (row1, row2) => {
        return row1 !== row2;
      },
      sectionHeaderHasChanged: (s1, s2) => {
        return s1 !== s2;
      },
    });

    this.state = {
      dataSource: cloneWithData(dataSource, props.data),
    };

    this.renderFooter = this.renderFooter.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      /* eslint-disable react/no-set-state */
      this.setState({
        dataSource: cloneWithData(this.state.dataSource, nextProps.data),
      });
      /* eslint-enable react/no-set-state */
    }
  }
  renderFooter() {
    if (this.state.dataSource.getRowCount() === 0) {
      return this.props.renderEmptyList && this.props.renderEmptyList();
    }

    return this.props.renderFooter && this.props.renderFooter();
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          enableEmptySections
          removeClippedSubviews={false}
          renderFooter={this.renderFooter}
          renderRow={this.props.renderRow}
          renderSectionHeader={this.props.renderSectionHeader}
        />
      </View>
    );
  }
}

SimpleListView.displayName = 'SimpleListView';

SimpleListView.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  /* eslint-enable react/forbid-prop-types */
  renderEmptyList: PropTypes.func,
  renderFooter: PropTypes.func,
  renderRow: PropTypes.func,
  renderSectionHeader: PropTypes.func
};

SimpleListView.defaultProps = {
  data: []
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SimpleListView;
