import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ScrollView,
  Text,
  View,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// Components
import BLButton from '../../common/BLButton';
import BasketCount from '../../common/BasketCount';
import RadioButton from '../../common/RadioButton';
import LinkObject from '../../common/LinkObject';
import SimpleListView from '../../common/SimpleListView';
import NavBarContainer from '../../common/NavBarContainer';
import NavBarBackButton from '../../common/NavBarBackButton';

// Actions
import {
  removeProduct,
  selectDeliveryOption
} from '../../actions/basket';

import constants from '../../utils/constants';
import styles from './styles';

/* eslint-disable react/no-multi-comp */
class BasketView extends Component {
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
      <View style={styles.rowContainer}>
        {
          image
        }
        <View style={styles.rowMiddleSection}>
          <Text
            style={styles.productTitle}
          >{rowData.title}</Text>
          <LinkObject
            onPress={() => {
              this.props.removeProduct(rowData);
            }}
          >
            <Text
              style={styles.productRemoveLink}
            >Remove</Text>
          </LinkObject>
          <View
            style={styles.productQuantitySection}
          >
            <Text
              style={styles.productQuantityLabel}
            >Qty</Text>
            <Text>{rowData.qty}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.productPrice}>{`£${rowData.total}`}</Text>
        </View>
      </View>
    );
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
      }
    };
    const deliveryOptions = this.props.deliveryOptions.map((d, i) => {
      return (
        <RadioButton
          isChecked={d.selected}
          key={i}
          onToggle={() => {
            this.props.selectDeliveryOption(d.title);
          }}
          title={d.title}
        />
      );
    });
    const supplierDetails = this.props.selectedDeliveryOption === 'Order online & collect in store'
      ? '> View supplier details for collection'
      : '> View supplier details';
    const basketContent = this.props.basketItems.length === 0
    ? (
      <View
        style={styles.container}
      >
        <EvilIcons
          color={'#CCC'}
          name={'cart'}
          size={90}
          style={{
            marginTop: -100
          }}
        />
        <Text style={styles.emptyBasketText}>Your shopping basket is empty, fill it up!</Text>
        <BLButton
          onPress={() => {
            const { navigator } = this.props;
            if (navigator) {
              requestAnimationFrame(() => {
                return navigator.pop();
              });
            }
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
          {'Continue Shopping'}
        </BLButton>
      </View>
    )
    : (
      <ScrollView>
        <View
          style={styles.list}
        >
          <Text
            style={styles.header}
          >Basket Summary</Text>

          <SimpleListView
            data={this.props.basketItems}
            renderRow={this.renderRow}
          />
          <View
            style={styles.deliveryOptions}
          >
            <Text
              style={styles.header}
            >Delivery Options</Text>
            {
              deliveryOptions
            }
            <LinkObject
              onPress={() => {
                const { navigator } = this.props;
                if (navigator) {
                  requestAnimationFrame(() => {
                    return navigator.push({
                      route: constants.routes.SUPPLIER
                    });
                  });
                }
              }}
            >
              <Text
                style={styles.supplierLink}
              >{supplierDetails}</Text>
            </LinkObject>
            <Text
              style={styles.supplier}
            >{'Supplied By: FG Halladeys & Sons'}</Text>
          </View>
          <View
            style={styles.totalSection}
          >
            <Text
              style={styles.totalText}
            >Total</Text>
            <View>
              <Text
                style={styles.totalPrice}
              >{`£${this.props.basketTotal}`}</Text>
              <Text
                style={styles.totalExcludingVAT}
              >excluding VAT</Text>
            </View>
          </View>
          <BLButton
            onPress={() => {
              const { navigator, selectedDeliveryOption } = this.props;
              if (navigator) {
                requestAnimationFrame(() => {
                  if (selectedDeliveryOption === 'Order online & collect in store') {
                    return navigator.push({
                      route: constants.routes.CHECKOUT
                    });
                  }
                  return navigator.push({
                    route: constants.routes.REGISTER
                  });
                });
              }
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
            {'Checkout securely'}
          </BLButton>
        </View>
      </ScrollView>
    );

    return (
      <NavBarContainer
        leftItem={leftItem}
        rightItem={rightItem}
        title={'Basket'}
      >
        {
          basketContent
        }
      </NavBarContainer>
    );
  }
}

BasketView.displayName = 'BasketView';

BasketView.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  basketItems: PropTypes.array,
  basketTotal: PropTypes.string,
  deliveryOptions: PropTypes.array,
  navigator: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  removeProduct: PropTypes.func.isRequired,
  selectDeliveryOption: PropTypes.func.isRequired,
  selectedDeliveryOption: PropTypes.string,
};

export default connect((state, ownProps) => {
  return {
    basketItems: state.basket.basketItems,
    basketTotal: state.basket.total,
    deliveryOptions: state.basket.deliveryOptions,
    navigator: ownProps.navigator,
    selectedDeliveryOption: state.basket.selectedDeliveryOption
  };
}, (dispatch) => {
  return {
    removeProduct: (product) => {
      dispatch(removeProduct(product));
    },
    selectDeliveryOption: (deliveryOption) => {
      dispatch(selectDeliveryOption(deliveryOption));
    }
  };
})(BasketView);
/* eslint-enable react/no-multi-comp */
