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

    if (item.title) {
      headerContent = (
        <Text
          style={styles.text}
        >
          {
            item.title
          }
        </Text>);
    } else if (item.content) {
      headerContent = (item.content);
    }

    return (
      <TouchableOpacity
        accessibilityLabel={item.title}
        accessibilityTraits={'button'}
        onPress={item.onPress}
        style={styles.itemWrapper}
      >
        {headerContent}
      </TouchableOpacity>
    );
  }
}

HeaderItem.displayName = 'HeaderItem';

HeaderItem.propTypes = {
  item: PropTypes.object,
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
