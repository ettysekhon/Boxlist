import React, {
  PropTypes,
} from 'react';

import {
  Dimensions,
  ScrollView,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import MapView from 'react-native-maps';

// Components
import NavBarContainer from '../../common/NavBarContainer';
import NavBarBackButton from '../../common/NavBarBackButton';

import styles from './styles';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 51.5639151;
const LONGITUDE = -0.024304;
const LATITUDE_DELTA = 0.0692;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const TITLE = 'FG Halladeys & Sons';
const SUBTITLE = 'supplier';

const region = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const annotations = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  title: TITLE,
  subtitle: SUBTITLE
};

/* eslint-disable react/no-multi-comp */
const SupplierView = (props) => {
  const leftItem = {
    content: (<NavBarBackButton />),
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
            annotations={[annotations]}
            initialRegion={region}
            style={styles.map}
          >
            <MapView.Marker
              coordinate={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
              }}
              description={SUBTITLE}
              title={TITLE}
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
