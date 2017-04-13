import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ScrollView,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import Map from '../../common/Map';

// Components
import BLButton from '../../common/BLButton';
import NavBarContainer from '../../common/NavBarContainer';
import NavBarBackButton from '../../common/NavBarBackButton';

// Actions
import {
  clearBasket
} from '../../actions/basket';

import styles from './styles';

const displayAddress = (companyName, address) => {
  const cmnpyName = companyName ? `${companyName}, ` : '';
  const street1 = address.street2 ? `${address.street1}, ` : '';
  const street2 = address.street2 ? `${address.street2}, ` : '';
  const townCity = address.townCity ? `${address.townCity}, ` : '';
  const postalCode = address.postalCode ? `${address.postalCode}` : '';
  return `${cmnpyName}${street1}${street2}${townCity}${postalCode}`;
};

/* eslint-disable react/no-multi-comp */
class ConfirmationView extends Component {
  render() {
    const leftItem = {
      content: (<NavBarBackButton />),
      onPress: () => {
        this.props.clearBasket();
        const { navigator } = this.props;
        if (navigator) {
          requestAnimationFrame(() => {
            return navigator.popToTop(0);
          });
        }
      }
    };

    /* eslint-disable max-len */
    const description = this.props.selectedDeliveryOption === 'Order online & collect in store'
      ? 'Your order has been placed with the supplier and will be confirmed shortly, you will receive a message to let you know order is ready for pickup.'
      : 'Your order has been placed with the supplier and will be confirmed shortly, you will receive a message to let you know order is ready to deliver.';
    /* eslint-disable max-len */
    const deliveryCollectionTitle = this.props.selectedDeliveryOption === 'Order online & collect in store'
      ? 'Collection Details'
      : 'Delivery Details';
    const collectionDetails = this.props.selectedDeliveryOption === 'Order online & collect in store'
      ? (
        <View>
          <Text
            style={styles.subHeading}
          >Phone</Text>
          <Text
            style={styles.description}
          >0208 558 0263</Text>
          <Text
            style={styles.subHeading}
          >Opening Hours</Text>
          <View
            style={styles.openingHoursRow}
          >
            <Text
              style={styles.description}
            >Monday to Friday</Text>
            <Text
              style={styles.description}
            >10:00 - 18:00</Text>
          </View>
          <View
            style={styles.openingHoursRow}
          >
            <Text
              style={styles.description}
            >Saturday</Text>
            <Text
              style={styles.description}
            >11:00 - 17:00</Text>
          </View>
          <View
            style={styles.openingHoursRow}
          >
            <Text
              style={styles.description}
            >Sunday</Text>
            <Text
              style={styles.description}
            >Closed</Text>
          </View>
        </View>
      )
      : null;
    const addressTitle = this.props.selectedDeliveryOption === 'Order online & collect in store'
      ? 'Address'
      : 'Shipping Address';
    const mapTitle = this.props.selectedDeliveryOption === 'Order online & collect in store'
      ? { title: 'FG Halladeys & Sons', subtitle: 'supplier' }
      : { title: 'Shipping Address', subtitle: 'location' };
    return (
      <NavBarContainer
        leftItem={leftItem}
        title={'Confirmation'}
      >
        <ScrollView>
          <View
            style={styles.container}
          >
            <Text
              style={styles.header}
            >Order placed successfully</Text>
            <Text
              style={styles.description}
            >{description}</Text>
            <Map
              latitude={this.props.addressLocation.latitude}
              longitude={this.props.addressLocation.longitude}
              subtitle={mapTitle.subtitle}
              title={mapTitle.title}
            />
            <BLButton
              onPress={() => {
                this.props.clearBasket();
                const { navigator } = this.props;
                if (navigator) {
                  requestAnimationFrame(() => {
                    return navigator.popToTop(0);
                  });
                }
              }}
              style={{
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
            <Text
              style={styles.header}
            >{ deliveryCollectionTitle }</Text>
            <Text
              style={styles.subHeading}
            >{addressTitle}</Text>
            <Text
              style={styles.description}
            >{displayAddress(this.props.companyName, this.props.address)}</Text>
            {
              collectionDetails
            }
          </View>
        </ScrollView>
      </NavBarContainer>
    );
  }
}

ConfirmationView.displayName = 'ConfirmationView';

ConfirmationView.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  address: PropTypes.object.isRequired,
  addressLocation: PropTypes.object.isRequired,
  clearBasket: PropTypes.func,
  companyName: PropTypes.string,
  navigator: PropTypes.object.isRequired,
  selectedDeliveryOption: PropTypes.string
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    navigator: ownProps.navigator,
    selectedDeliveryOption: state.checkout.selectedDeliveryOption,
    companyName: state.checkout.companyName,
    address: state.checkout.address,
    addressLocation: state.checkout.addressLocation
  };
}, (dispatch) => {
  return {
    clearBasket: () => {
      dispatch(clearBasket());
    }
  };
})(ConfirmationView);

/* eslint-enable react/no-multi-comp */
