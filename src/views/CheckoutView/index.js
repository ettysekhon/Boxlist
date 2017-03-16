import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import objectAssign from 'object-assign';
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
import placeOrder from '../../actions/checkout';
import {
  removeProduct
} from '../../actions/basket';

import styles from './styles';

/* eslint-disable react/no-multi-comp */
class CheckoutView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      mobile: '',
      message: '',
      name: '',
      disabled: true,
      validEmail: true,
      validMobile: true
    };
    this.renderRow = this.renderRow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.renderValidMessage = this.renderValidMessage.bind(this);
  }
  placeOrder() {
    const order = objectAssign({}, {
      name: this.state.name,
      mobile: this.state.mobile,
      message: this.state.message,
      emailAddress: this.state.emailAddress,
      basketItems: this.props.basketItems,
      basketTotal: this.props.basketTotal
    });
    this.props.placeOrder(order, this.props.navigator);
  }
  handleChange(name, e) {
    /* eslint-disable max-len */
    const mobileRegEx = /(^\+(?!44)[0-9]{7,15}$)|(^(\+440?|0)(([27][0-9]{9}$)|(1[1-9][0-9]{7,8}$)))/;
    /* eslint-disable no-useless-escape */
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /* eslint-enable no-useless-escape */
    /* eslint-enable max-len */
    const value = {};
    value[name] = e.nativeEvent.text;
    const state = objectAssign({}, this.state, value);
    const validMobile = state.mobile === '' || mobileRegEx.test(state.mobile);
    const validEmail = state.emailAddress === '' || emailRegEx.test(state.emailAddress);
    const isEmpty = state.emailAddress === '' ||
      state.mobile === '' || state.name === '';
    state.disabled = isEmpty || !validEmail || !validMobile;
    state.validEmail = validEmail;
    state.validMobile = validMobile;
    /* eslint-disable react/no-set-state */
    this.setState(state);
    /* eslint-enable react/no-set-state */
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
  renderValidMessage() {
    if (this.state.validEmail && this.state.validMobile) {
      return null;
    }
    const invalidMessage = (message) => {
      return (<Text style={styles.error}>{message}</Text>);
    };
    if (!this.state.validEmail) {
      return invalidMessage('Please enter valid email address');
    }
    if (!this.state.validMobile) {
      return invalidMessage('Please enter valid mobile phone number');
    }
    return null;
  }
  render() {
    if (this.props.basketItems.length === 0) {
      return (
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
                  return navigator.popToTop(0);
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
      );
    }

    const deliveryOptions = this.props.deliveryOptions.map((d, i) => {
      return (
        <RadioButton
          isChecked={d.selected}
          key={i}
          title={d.title}
        />
      );
    });

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
        // we pop here as we assume only way to
        // checkout is via basket page
        const { navigator } = this.props;
        if (navigator) {
          requestAnimationFrame(() => {
            return navigator.pop();
          });
        }
      }
    };
    return (
      <NavBarContainer
        leftItem={leftItem}
        rightItem={rightItem}
        title={'Checkout'}
      >
        <ScrollView>
          <View
            style={styles.list}
          >
            <Text
              style={styles.listHeader}
            >Checkout Items</Text>
            <SimpleListView
              data={this.props.basketItems}
              renderRow={this.renderRow}
            />
            <View
              style={styles.deliveryOptions}
            >
              {
                deliveryOptions
              }
              <Text
                style={[styles.supplier, {
                  paddingTop: 0
                }]}
              >{'FG Halladeys & Sons, Unit 11'}</Text>
              <Text
                style={styles.supplier}
              >{'Orient Ind Park, Simonds Rd,'}</Text>
              <Text
                style={styles.supplier}
              >{'London. E10 7DE'}</Text>
            </View>
            <View
              style={styles.deliveryInstructions}
            >
              <Text
                style={styles.header}
              >Delivery/Collection Instruction</Text>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType={'default'}
                multiline
                onChange={this.handleChange.bind(this, 'message')}
                placeholder={'Enter short message (140 characters) for supplier...'}
                placeholderTextColor={'rgb(155,155,155)'}
                style={styles.textArea}
                value={this.state.message}
              />
              <Text
                style={styles.header}
              >Name</Text>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType={'default'}
                onChange={this.handleChange.bind(this, 'name')}
                placeholder={'Enter name'}
                placeholderTextColor={'rgb(155,155,155)'}
                style={styles.textInput}
                value={this.state.name}
              />
              <Text
                style={styles.header}
              >Mobile</Text>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType={'numeric'}
                onChange={this.handleChange.bind(this, 'mobile')}
                placeholder={'Enter mobile phone number'}
                placeholderTextColor={'rgb(155,155,155)'}
                style={styles.textInput}
                value={this.state.mobile}
              />
              <Text
                style={styles.header}
              >Email</Text>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType={'email-address'}
                onChange={this.handleChange.bind(this, 'emailAddress')}
                placeholder={'Enter email address'}
                placeholderTextColor={'rgb(155,155,155)'}
                style={styles.textInput}
                value={this.state.emailAddress}
              />
            </View>
            <View
              style={styles.totalSection}
            >
              <View
                style={styles.totalRow}
              >
                <Text
                  style={styles.totalText}
                >Sub Total</Text>
                <Text
                  style={styles.totalValue}
                >{`£${this.props.basketTotal}`}</Text>
              </View>
              <View
                style={styles.totalRow}
              >
                <Text
                  style={styles.totalText}
                >VAT (20%)</Text>
                <Text
                  style={styles.totalValue}
                >{`£${Number(this.props.basketTotal * 0.2).toFixed(2)}`}</Text>
              </View>
              <View
                style={styles.totalRow}
              >
                <Text
                  style={styles.totalText}
                >Processing Fee</Text>
                <Text
                  style={styles.totalValue}
                >{'£2.00'}</Text>
              </View>
              <View
                style={[styles.totalRow, {
                  paddingTop: 15
                }]}
              >
                <Text
                  style={[styles.totalText, {
                    fontSize: 16
                  }]}
                >Total</Text>
                <Text
                  style={[styles.totalValue, {
                    fontSize: 16
                  }]}
                >{`£${Number((Number(this.props.basketTotal) * 1.2) + 2).toFixed(2)}`}</Text>
              </View>
            </View>
            {
              this.renderValidMessage()
            }
            <BLButton
              isDisabled={this.state.disabled || this.props.placingOrder}
              onPress={() => {
                this.placeOrder();
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
              {'Place order'}
            </BLButton>
          </View>
        </ScrollView>
      </NavBarContainer>
    );
  }
}

CheckoutView.displayName = 'CheckoutView';

CheckoutView.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  basketItems: PropTypes.array,
  basketTotal: PropTypes.string,
  deliveryOptions: PropTypes.array,
  navigator: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  removeProduct: PropTypes.func.isRequired,
  placeOrder: PropTypes.func.isRequired,
  placingOrder: PropTypes.bool
};

export default connect((state, ownProps) => {
  return {
    deliveryOptions: state.basket.deliveryOptions,
    basketItems: state.basket.basketItems,
    basketTotal: state.basket.total,
    navigator: ownProps.navigator,
    placingOrder: state.checkout.isLoading,
  };
}, (dispatch) => {
  return {
    placeOrder: (contactDetails, navigator) => {
      dispatch(placeOrder(contactDetails, navigator));
    },
    removeProduct: (product) => {
      dispatch(removeProduct(product));
    }
  };
})(CheckoutView);

/* eslint-enable react/no-multi-comp */
