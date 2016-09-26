import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// Components
import BLButton from '../common/BLButton';
import BasketCount from '../common/BasketCount';
import NavBarContainer from '../common/NavBarContainer';

// Actions
import {
  addProduct
} from '../../actions/basket';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import constants from '../../constants';

/* eslint-disable react/no-multi-comp */
class ProductView extends Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
  }
  addProduct() {
    const { navigator } = this.props;
    this.props.addProduct(this.props.product);
    if (navigator) {
      requestAnimationFrame(() => {
        return navigator.pop();
      });
    }
  }
  render() {
    const leftItem = {
      content: (
        <View
          style={styles.leftItem}
        >
          <Icon
            color={colors.primary}
            name={'ios-arrow-back'}
            size={17.5}
            style={styles.icon}
          />
          <Text style={styles.leftText}>Back</Text>
        </View>),
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
      content: (
        <View
          style={styles.rightItem}
        >
          <EvilIcons
            color={colors.dark.color}
            name={'cart'}
            size={30}
          />
          <BasketCount />
        </View>),
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
    const { product } = this.props;

    /* eslint-disable global-require */
    const image = product.images === 'http://www.halladeys.co.uk/photo_uploads/thumbs/nopic.png'
      ? (<Image
        source={require('../../images/no_image.png')}
        style={styles.productImage}
      />)
      : (
      <Image
        resizeMode={'contain'}
        source={{ uri: product.images }}
        style={styles.productImage}
      />
    );
    /* eslint-enable global-require */

    const content = product.id ? (
      <View>
        {
          image
        }
        <Text
          style={styles.productTitle}
        >{product.title}</Text>
        <Text
          style={styles.productPrice}
        >{`£${product.price}`}</Text>
        <BLButton
          onPress={() => {
            this.addProduct();
          }}
          style={{
            marginTop: 20,
            paddingLeft: 7.5,
            paddingRight: 7.5,
            backgroundColor: 'rgb(80,227,194)'
          }}
          text={'Add to Basket'}
          textStyle={{
            fontSize: 14
          }}
        />
        <Text
          style={styles.productSupplier}
        >{`Supplied By: ${product.supplier}`}</Text>
      </View>
    )
    : (<Text>Loading Product</Text>);
    return (
      <NavBarContainer
        leftItem={leftItem}
        rightItem={rightItem}
        title={'Product'}
      >
        <View
          style={styles.container}
        >
          {
            content
          }
        </View>
      </NavBarContainer>
    );
  }
}

ProductView.displayName = 'ProductView';

ProductView.propTypes = {
  addProduct: PropTypes.func.isRequired,
  /* eslint-disable react/forbid-prop-types */
  navigator: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    product: state.basket.selectedProduct,
    navigator: ownProps.navigator
  };
}, (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(addProduct(product));
    }
  };
})(ProductView);

/* eslint-enable react/no-multi-comp */
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  leftItem: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 15
  },
  rightItem: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 15
  },
  leftText: {
    fontSize: fonts.size.s,
    color: colors.primary,
    marginLeft: 5
  },
  productImage: {
    alignSelf: 'center',
    height: 175,
    width: 125
  },
  productTitle: {
    marginTop: 20,
    fontSize: 22.5,
    color: 'rgb(74,74,74)',
    alignItems: 'flex-start',
  },
  productPrice: {
    marginTop: 10,
    fontSize: 25,
    color: 'red',
    alignItems: 'flex-start'
  },
  productSupplier: {
    marginTop: 10,
    fontSize: 10,
    color: 'rgb(204,204,204)',
    alignSelf: 'center',
  },
});
