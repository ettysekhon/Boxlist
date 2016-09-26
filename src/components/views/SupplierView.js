import React, {
  PropTypes,
} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

// Components
import NavBarContainer from '../common/NavBarContainer';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

/* eslint-disable react/no-multi-comp */
const SupplierView = (props) => {
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
        <Text style={styles.leftText}>Home</Text>
      </View>),
    onPress: () => {
      const { navigator } = props;
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
      title={'Supplier'}
    >
      <ScrollView>
        <View
          style={styles.container}
        >
          <Text
            style={styles.header}
          >FG Halladeys & Sons</Text>
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
};

SupplierView.displayName = 'SupplierView';

SupplierView.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  navigator: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    navigator: ownProps.navigator
  };
}, null)(SupplierView);

/* eslint-enable react/no-multi-comp */
const styles = StyleSheet.create({
  container: {
    flex: -1,
    padding: 10
  },
  header: {
    fontSize: 18,
    paddingTop: 5
  },
  subHeading: {
    paddingVertical: 3
  },
  description: {
    color: 'rgb(204,204,204)'
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
  openingHoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
