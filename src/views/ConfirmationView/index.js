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
import MapView from 'react-native-maps';

// Components
import BLButton from '../../common/BLButton';
import NavBarContainer from '../../common/NavBarContainer';
import NavBarBackButton from '../../common/NavBarBackButton';

// Actions
import {
  clearBasket
} from '../../actions/basket';

import styles from './styles';

/* eslint-disable react/no-multi-comp */
class ConfirmationView extends Component {
  componentDidMount() {
    this.props.clearBasket();
  }
  render() {
    const leftItem = {
      content: (<NavBarBackButton />),
      onPress: () => {
        const { navigator } = this.props;
        if (navigator) {
          requestAnimationFrame(() => {
            return navigator.popToTop(0);
          });
        }
      }
    };

    /* eslint-disable max-len */
    const description = 'Your order has been placed with the supplier and will be confirmed shortly, you will receive a notification message to let you know order is ready for pickup.';
    /* eslint-disable max-len */
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
            <MapView
              annotations={[{
                latitude: 51.5639151,
                longitude: -0.024304,
                title: 'FG Halladeys & Sons',
                subtitle: 'supplier'
              }]}
              region={{
                latitude: 51.56391,
                longitude: -0.02430,
                latitudeDelta: 0.0692,
                longitudeDelta: 0.0316
              }}
              style={{
                height: 200,
                marginVertical: 10
              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: 51.5639151,
                  longitude: -0.024304,
                }}
                description={'supplier'}
                title={'FG Halladeys & Sons'}
              />
            </MapView>
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
                paddingLeft: 7.5,
                paddingRight: 7.5,
                backgroundColor: 'rgb(80,227,194)'
              }}
              text={'Continue Shopping'}
              textStyle={{
                fontSize: 14
              }}
            />
            <Text
              style={styles.header}
            >Collection details</Text>
            <Text
              style={styles.subHeading}
            >Address</Text>
            <Text
              style={styles.description}
            >FG. Halladeys & Sons, Unit 11 Orient Ind Park, Simonds Rd, London. E10 7DE</Text>
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
        </ScrollView>
      </NavBarContainer>
    );
  }
}

ConfirmationView.displayName = 'ConfirmationView';

ConfirmationView.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  clearBasket: PropTypes.func,
  navigator: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    navigator: ownProps.navigator
  };
}, (dispatch) => {
  return {
    clearBasket: () => {
      dispatch(clearBasket());
    }
  };
})(ConfirmationView);

/* eslint-enable react/no-multi-comp */
