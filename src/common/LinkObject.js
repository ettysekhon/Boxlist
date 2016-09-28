import React, {
  PropTypes,
} from 'react';

import {
  TouchableHighlight,
} from 'react-native';

const LinkObject = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor={'transparent'}
    >
      {
        props.children
      }
    </TouchableHighlight>
  );
};

LinkObject.displayName = 'LinkObject';

const propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired,
};

LinkObject.propTypes = propTypes;

export default LinkObject;
