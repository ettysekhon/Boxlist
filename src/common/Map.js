import React from 'react';

import {
  Dimensions,
  StyleSheet
} from 'react-native';

import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0692;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = (props) => {
  const region = {
    latitude: props.latitude,
    longitude: props.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  const annotations = {
    latitude: props.latitude,
    longitude: props.longitude,
    title: props.title,
    subtitle: props.subtitle
  };
  return (
    <MapView
      annotations={[annotations]}
      initialRegion={region}
      style={styles.map}
    >
      <MapView.Marker
        coordinate={{
          latitude: props.latitude,
          longitude: props.longitude,
        }}
        description={props.subtitle}
        title={props.title}
      />
    </MapView>
  );
};

Map.displayName = 'Map';

Map.defaultProps = {
  title: 'FG Halladeys & Sons',
  subtitle: 'supplier',
  latitude: 51.5639151,
  longitude: -0.024304
};

Map.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number
};

const styles = StyleSheet.create({
  map: {
    height: 200,
    marginVertical: 10
  }
});

export default Map;
