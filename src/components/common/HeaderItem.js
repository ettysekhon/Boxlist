import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

class HeaderItem extends Component {
  render() {
    const { item } = this.props;
    if (!item) {
      return null;
    }

    let headerContent = null;
    const { title, content, onPress } = item;

    if (title) {
      headerContent = (
        <Text
          style={styles.text}
        >
        {
          title
        }
        </Text>);
    } else if (content) {
      headerContent = (content);
    }

    return (
      <TouchableOpacity
        accessibilityLabel={title}
        accessibilityTraits={'button'}
        onPress={onPress}
        style={styles.itemWrapper}
      >
        {headerContent}
      </TouchableOpacity>
    );
  }
}

HeaderItem.displayName = 'HeaderItem';

HeaderItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.node,
    onPress: PropTypes.func,
  }),
};

export default HeaderItem;

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
  },
});
