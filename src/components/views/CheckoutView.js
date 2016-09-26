import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import objectAssign from 'object-assign';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// Components
import BLButton from '../common/BLButton';
import BasketCount from '../common/BasketCount';
import RadioButton from '../common/RadioButton';
import LinkObject from '../common/LinkObject';
import SimpleListView from '../common/SimpleListView';
import colors from '../../styles/colors';
import NavBarContainer from '../common/NavBarContainer';

// Actions
import placeOrder from '../../actions/checkout';
import {
  removeProduct
} from '../../actions/basket';

import fonts from '../../styles/fonts';

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
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
            text={'Continue Shopping'}
            textStyle={{
              fontSize: 14
            }}
          />
        </View>
      );
    }

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
              <RadioButton
                isChecked
                title={'Collect in store'}
              />
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
              text={'Place order'}
              textStyle={{
                fontSize: 14
              }}
            />
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
  navigator: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  removeProduct: PropTypes.func.isRequired,
  placeOrder: PropTypes.func.isRequired,
  placingOrder: PropTypes.bool
};

export default connect((state, ownProps) => {
  return {
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  list: {
    flex: -1,
    padding: 10
  },
  error: {
    paddingTop: 15,
    color: 'red'
  },
  totalSection: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor: 'rgb(250,250,250)'
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalText: {
    color: 'rgb(155,155,155)',
    fontSize: 14
  },
  totalValue: {
    color: 'rgb(0,0,0)',
    fontSize: 14
  },
  totalPrice: {
    alignSelf: 'flex-end',
    fontSize: 16
  },
  totalIncludingVAT: {
    paddingTop: 2,
    fontSize: 9,
    color: 'rgb(155,155,155)'
  },
  deliveryInstructions: {
    paddingTop: 10,
    paddingBottom: 10
  },
  listHeader: {
    fontSize: 16
  },
  header: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10
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
  emptyBasketText: {
    marginTop: 10,
    fontSize: 20,
    color: '#CCC'
  },
  rowContainer: {
    flex: -1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderColor: 'rgb(223,223,223)'
  },
  supplier: {
    color: 'rgb(204,204,204)',
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 35
  },
  textArea: {
    height: 66,
    padding: 10,
    fontSize: 14,
    color: 'rgb(155,155,155)',
    borderWidth: 1,
    borderColor: 'rgb(204,204,204)',
    marginBottom: 5
  },
  textInput: {
    height: 44,
    padding: 10,
    fontSize: 14,
    color: 'rgb(155,155,155)',
    borderWidth: 1,
    borderColor: 'rgb(204,204,204)',
    marginBottom: 5
  },
  productTitle: {
    color: 'rgb(74,74,74)'
  },
  productPrice: {
    color: 'rgb(0,0,0)',
    fontSize: 14
  },
  productRemoveLink: {
    paddingTop: 10,
    color: 'rgb(155,155,155)',
    fontSize: 14
  },
  productQuantitySection: {
    marginTop: 10,
    flexDirection: 'row'
  },
  productQuantityLabel: {
    color: 'rgb(155,155,155)',
    marginRight: 15
  },
  rowMiddleSection: {
    paddingLeft: 5,
    flex: 1
  },
  productImage: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    marginRight: 10
  }
});
