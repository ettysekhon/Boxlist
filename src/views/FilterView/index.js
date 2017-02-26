import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { connect } from 'react-redux';

// Components
import BasketCount from '../../common/BasketCount';
import SimpleListView from '../../common/SimpleListView';
import NavBarContainer from '../../common/NavBarContainer';
import NavBarBackButton from '../../common/NavBarBackButton';

import constants from '../../utils/constants';
import styles from './styles';

/* eslint-disable react/no-multi-comp */
class FilterView extends Component {
  constructor(props) {
    super(props);
    this.selectCategory = this.selectCategory.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }
  selectCategory(category) {
    const { navigator } = this.props;
    if (navigator) {
      requestAnimationFrame(() => {
        return navigator.replace({
          route: constants.routes.CATEGORY,
          category
        });
      });
    }
  }
  renderRow(rowData) {
    return (
      <TouchableHighlight
        onPress={() => {
          this.selectCategory(rowData);
        }}
      >
        <View>
          <View style={styles.row}>
            <EvilIcons
              color={'#CCC'}
              name={'eye'}
              size={32}
              style={styles.thumb}
            />
            <Text style={styles.text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    const leftItem = {
      content: (<NavBarBackButton />),
      onPress: () => {
        const { navigator } = this.props;
        if (navigator) {
          requestAnimationFrame(() => {
            return navigator.pop();
          });
        }
      }
    };
    const rightItem = {
      content: (<BasketCount />),
      onPress: () => {
        const { navigator } = this.props;
        if (navigator) {
          requestAnimationFrame(() => {
            return navigator.push({
              route: constants.routes.BASKET
            });
          });
        }
      }
    };
    return (
      <NavBarContainer
        leftItem={leftItem}
        rightItem={rightItem}
        title={'Categories'}
      >
        <ScrollView>
          <View
            style={styles.list}
          >
            <SimpleListView
              data={this.props.categories}
              renderRow={this.renderRow}
            />
          </View>
        </ScrollView>
      </NavBarContainer>
    );
  }
}

FilterView.displayName = 'FilterView';

FilterView.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  navigator: PropTypes.object.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    categories: state.categories.categories,
    navigator: ownProps.navigator
  };
}, null)(FilterView);

/* eslint-enable react/no-multi-comp */
