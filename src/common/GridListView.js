import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  ListView
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

class GridListView extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      getRowData: (dataBlob, sid, rid) => {
        return dataBlob[sid][rid];
      },
      rowHasChanged: (row1, row2) => {
        return row1 !== row2;
      }
    });

    this.state = {
      dataSource: cloneWithData(dataSource, props.data),
    };
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
  render() {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        enableEmptySections
        initialListSize={21}
        pageSize={3} // should be a multiple of the no. of visible cells per row
        removeClippedSubviews={false}
        renderRow={this.props.renderRow}
        scrollRenderAheadDistance={500}
      />
    );
  }
}

GridListView.displayName = 'GridListView';

GridListView.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  /* eslint-enable react/forbid-prop-types */
  renderRow: PropTypes.func,
};

GridListView.defaultProps = {
  data: []
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 10
  },
});

export default GridListView;
