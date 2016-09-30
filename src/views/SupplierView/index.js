import React, {
  PropTypes,
} from 'react';

import {
  ScrollView,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';

// Components
import NavBarContainer from '../../common/NavBarContainer';
import NavBarBackButton from '../../common/NavBarBackButton';
import Map from '../../common/Map';

import styles from './styles';

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
          <Map />
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
