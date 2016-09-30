import React from 'react';

import {
  Dimensions,
  StyleSheet
} from 'react-native';

import MapView from 'react-native-maps';

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

const Map = () => {
  return (
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
  );
};

Map.displayName = 'Map';

const styles = StyleSheet.create({
  map: {
    height: 200,
    marginVertical: 10
  }
});

export default Map;
