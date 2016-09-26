import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ScrollView,
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
import RadioButton from '../common/RadioButton';
import LinkObject from '../common/LinkObject';
import SimpleListView from '../common/SimpleListView';
import NavBarContainer from '../common/NavBarContainer';

// Actions
import {
  removeProduct
} from '../../actions/basket';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import constants from '../../constants';

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
      }
    };
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
          text={'Continue Shopping'}
          textStyle={{
            fontSize: 14
          }}
        />
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
            <RadioButton
              isChecked
              title={'Order online & collect in store'}
            />
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
              >{'> View supplier details for collection'}</Text>
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
              this.props.navigator.push({
                route: constants.routes.CHECKOUT
              });
            }}
            style={{
              marginTop: 20,
              paddingLeft: 7.5,
              paddingRight: 7.5,
              backgroundColor: 'rgb(80,227,194)'
            }}
            text={'Checkout securely'}
            textStyle={{
              fontSize: 14
            }}
          />
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
  navigator: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  removeProduct: PropTypes.func.isRequired
};

export default connect((state, ownProps) => {
  return {
    basketItems: state.basket.basketItems,
    basketTotal: state.basket.total,
    navigator: ownProps.navigator
  };
}, (dispatch) => {
  return {
    removeProduct: (product) => {
      dispatch(removeProduct(product));
    }
  };
})(BasketView);

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
  totalSection: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  totalText: {
    paddingRight: 20,
    fontSize: 16
  },
  totalPrice: {
    alignSelf: 'flex-end',
    fontSize: 16
  },
  totalExcludingVAT: {
    paddingTop: 2,
    fontSize: 9,
    color: 'rgb(155,155,155)'
  },
  deliveryOptions: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgb(223,223,223)'
  },
  header: {
    fontSize: 16
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
  supplierLink: {
    color: colors.primary,
    fontSize: 14
  },
  supplier: {
    color: 'rgb(155,155,155)',
    fontSize: 10,
    paddingTop: 5,
    paddingLeft: 15
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
    flexDirection: 'row',
  },
  productQuantityLabel: {
    color: 'rgb(155,155,155)',
    marginRight: 15
  },
  rowMiddleSection: {
    paddingLeft: 5,
    flex: 1,
  },
  productImage: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    marginRight: 10
  }
});
