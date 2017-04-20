import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Image,
  InteractionManager,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { connect } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// Components
import BasketCount from '../../common/BasketCount';
import NavBarContainer from '../../common/NavBarContainer';
import GridListView from '../../common/GridListView';
import BLButton from '../../common/BLButton';
import ModalSpinner from '../../common/ModalSpinner';

// Actions
import {
  selectProduct
} from '../../actions/basket';
import loadProducts from '../../actions/products';
import { trackScreenView } from '../../common/Tracker';

import constants from '../../utils/constants';
import styles from './styles';

class ProductsView extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }
  componentDidMount() {
    trackScreenView('ProductsView');
    InteractionManager.runAfterInteractions(() => {
      this.props.loadProducts(0, '', '');
    });
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
          const { navigator } = this.props;
          if (navigator) {
            requestAnimationFrame(() => {
              return navigator.push({
                route: constants.routes.PRODUCT
              });
            });
          }
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
              this.props.loadProducts(0, '', '');
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
            {'Retry'}
          </BLButton>
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
        onTabClick={(tab) => {
          const routeParams = tab === 'Offers'
            ? {
              route: constants.routes.CATEGORY,
              category: 'OFFERS'
            }
            : {
              route: constants.routes.FILTER
            };
          const { navigator } = this.props;
          if (navigator) {
            requestAnimationFrame(() => {
              return navigator.push(routeParams);
            });
          }
        }}
        rightItem={rightItem}
        simple={false}
        tabs={['Categories', 'Offers']}
        title={'BOXLIST'}
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
    loadProducts: (page, category, query) => {
      dispatch(loadProducts(page, category, query));
    }
  };
})(ProductsView);
