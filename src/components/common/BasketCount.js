import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';

const BasketCount = (props) => {
  const { count } = props;
  return count === 0
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

const SIZE = 15;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  countContainer: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
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
});

export default connect((state) => {
  return {
    count: state.basket.notificationsBadge
  };
}, null)(BasketCount);
