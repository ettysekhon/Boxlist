import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../styles/colors';

const BasketCount = (props) => {
  const { count } = props;
  const basketCount = count === 0
    ? null
    : (
      <View
        style={[styles.container, props.style]}
      >
        <View style={styles.countContainer}>
          <Text style={styles.count}>
            {count}
          </Text>
        </View>
      </View>
  );

  return (
    <View
      style={styles.rightItem}
    >
      <EvilIcons
        color={colors.dark.color}
        name={'cart'}
        size={30}
      />
      {
        basketCount
      }
    </View>
  );
};

BasketCount.propTypes = {
  count: PropTypes.number,
  /* eslint-disable react/forbid-prop-types */
  style: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
};

BasketCount.defaultProps = {
  count: 0
};

const size = 15;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  countContainer: {
    width: size,
    height: size,
    borderRadius: size / 2,
    marginTop: -5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  count: {
    fontSize: 10,
    color: 'white',
    flex: 1,
    alignItems: 'center',
  },
  rightItem: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 15
  },
});

export default connect((state) => {
  return {
    count: state.basket.count
  };
}, null)(BasketCount);
