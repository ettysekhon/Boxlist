import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Text,
  View,
  Image
} from 'react-native';

import { connect } from 'react-redux';

// Components
import BLButton from '../../common/BLButton';
import BasketCount from '../../common/BasketCount';
import NavBarContainer from '../../common/NavBarContainer';
import NavBarBackButton from '../../common/NavBarBackButton';

// Actions
import {
  addProduct
} from '../../actions/basket';

import constants from '../../utils/constants';
import styles from './styles';

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
          textStyle={{
            fontSize: 14
          }}
        >
          {'Add to Basket'}
        </BLButton>
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
