import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import _ from 'lodash';

import loadProducts from '../actions/products';
import HeaderItem from './HeaderItem';
import Tabs from './Tabs';
import {
  SearchTextInput
} from './TextInput';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.loadProducts = _.debounce(this.loadProducts.bind(this), 200);
    this.state = {
      query: ''
    };
  }
  onSearchChange(text) {
    const state = { ...this.state, query: text };
    /* eslint-disable react/no-set-state */
    this.setState(state);
    /* eslint-enable react/no-set-state */
    if (text === '') {
      this.loadProducts(0, '', '');
    }
  }
  loadProducts() {
    this.props.loadProducts(0, '', this.state.query);
  }
  render() {
    const { tabs, onTabClick, leftItem, title, rightItem } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.leftItem}>
            <HeaderItem
              item={leftItem}
            />
          </View>
          <View
            accessibilityLabel={title}
            accessibilityTraits={'header'}
            accessible
            style={styles.centerItem}
          >
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.rightItem}>
            <HeaderItem
              item={rightItem}
            />
          </View>
        </View>
        <SearchTextInput
          onChangeText={this.onSearchChange}
          onSubmitEditing={this.loadProducts}
          placeholder={'Search for products'}
          placeholderTextColor={'#ccc'}
          style={{
            marginHorizontal: 20,
            borderColor: '#ccc',
            marginBottom: 10
          }}
          value={this.state.query}
        />
        {
          <Tabs
            onTabClick={(t) => {
              onTabClick(t);
            }}
            tabs={tabs}
          />
        }
      </View>
    );
  }
}

Header.displayName = 'Header';

Header.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  /* eslint-disable react/forbid-prop-types */
  leftItem: PropTypes.object,
  rightItem: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  tabs: PropTypes.arrayOf(PropTypes.string),
  onTabClick: PropTypes.func,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: colors.dark.backgroundColor,
    paddingTop: 23,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: colors.primary
  },
  innerContainer: {
    flex: 0,
    flexDirection: 'row'
  },
  titleText: {
    color: 'black',
    fontSize: fonts.size.s
  },
  leftItem: {
    flex: 1,
    height: 61,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  centerItem: {
    flex: 2,
    height: 61,
    marginTop: -3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightItem: {
    flex: 1,
    height: 61,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});

export default connect(null, (dispatch) => {
  return {
    loadProducts: (page, category, query) => {
      dispatch(loadProducts(page, category, query));
    }
  };
})(Header);
