import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { connect } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// Components
import BasketCount from '../common/BasketCount';
import NavBarContainer from '../common/NavBarContainer';
import GridListView from '../common/GridListView';
import BLButton from '../common/BLButton';
import ModalSpinner from '../common/ModalSpinner';

// Actions
import {
  selectProduct
} from '../../actions/basket';
import loadProducts from '../../actions/products';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

class ProductsView extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }
  renderRow(rowData) {
    /* eslint-disable global-require */
    const image = rowData.images === 'http://www.halladeys.co.uk/photo_uploads/thumbs/nopic.png'
      ? (<Image
        source={require('../../images/no_image.png')}
        style={styles.productImage}
      />)
      : (
      <Image
        resizeMode={'contain'}
        source={{ uri: rowData.images }}
        style={styles.productImage}
      />
    );
    /* eslint-enable global-require */
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.selectProduct(rowData);
          this.props.navigator.push({
            product: 'product'
          });
        }}
        style={styles.row}
      >
        {
          image
        }
        <Text
          style={styles.productTitle}
        >{rowData.title}</Text>
        <Text
          style={styles.productPrice}
        >{`£${rowData.price}`}</Text>
      </TouchableOpacity>
    );
  }
  render() {
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
              basket: 'basket'
            });
          });
        }
      }
    };
    /* eslint-disable max-len */
    const productsErrorMessage = 'No products found, please check your connection or signal strength before you retry.';
    /* eslint-enable max-len */
    let content = null;
    if (this.props.productsLoading) {
      content = null;
    } else if (this.props.productsError) {
      content = (
        <View
          style={styles.container}
        >
          <EvilIcons
            color={'#CCC'}
            name={'refresh'}
            size={90}
            style={{
              marginTop: -100
            }}
          />
          <Text style={styles.emptyBasketText}>{productsErrorMessage}</Text>
          <BLButton
            onPress={() => {
              this.props.loadProducts();
            }}
            style={{
              marginTop: 20,
              paddingLeft: 7.5,
              paddingRight: 7.5,
              backgroundColor: 'rgb(80,227,194)'
            }}
            text={'Retry'}
            textStyle={{
              fontSize: 14
            }}
          />
        </View>
      );
    } else {
      content = (
        <ScrollView
          automaticallyAdjustContentInsets={false}
          style={styles.contentContainer}
        >
          <GridListView
            data={this.props.products}
            renderRow={this.renderRow}
          />
        </ScrollView>
      );
    }
    return (
      <NavBarContainer
        rightItem={rightItem}
        title={'Offers'}
      >
        <ModalSpinner
          visible={this.props.productsLoading}
        />
        {
          content
        }
      </NavBarContainer>
    );
  }
}

ProductsView.displayName = 'ProductsView';

ProductsView.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  loadProducts: PropTypes.func.isRequired,
  navigator: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  products: PropTypes.oneOfType([
    PropTypes.array
  ]),
  productsError: PropTypes.bool,
  productsLoading: PropTypes.bool,
  selectProduct: PropTypes.func.isRequired
};

export default connect((state, ownProps) => {
  return {
    navigator: ownProps.navigator,
    products: state.products.products,
    productsLoading: state.products.isLoading,
    productsError: state.products.error
  };
}, (dispatch) => {
  return {
    selectProduct: (product) => {
      dispatch(selectProduct(product));
    },
    loadProducts: () => {
      dispatch(loadProducts());
    }
  };
})(ProductsView);

const styles = StyleSheet.create({
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
  contentContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 120
  },
  row: {
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    width: 335 / 3,
    height: 175,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEE'
  },
  productImage: {
    alignSelf: 'center',
    height: 60,
    width: 60
  },
  productTitle: {
    marginTop: 10,
    fontSize: 10,
    color: 'rgb(74,74,74)',
    flex: 1,
    alignItems: 'flex-start',
  },
  productPrice: {
    flex: 1,
    alignItems: 'flex-start',
    bottom: 10,
    left: 10,
    right: 0,
    position: 'absolute',
    fontSize: 16,
    color: 'red'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  emptyBasketText: {
    marginTop: 10,
    fontSize: 20,
    color: '#CCC'
  },
});
