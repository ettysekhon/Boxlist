import React, {
  Component,
  PropTypes
} from 'react';

import {
  View
} from 'react-native';

import { TextInput } from '../../common/TextInput';
import FormSection from '../../common/Section';

/* eslint-disable react/prefer-stateless-function */
class PrimaryBusinessAddressSection extends Component {
  render() {
    const {
      county,
      onChange,
      phoneNumber,
      postalCode,
      street1,
      street2,
      townCity
    } = this.props;
    return (<FormSection title='Delivery Address'>
      <View
        style={{
          borderColor: '#ccc',
          borderTopWidth: 1,
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={onChange.bind(this, 'street1')}
          placeholder={'Street 1'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={street1}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={onChange.bind(this, 'street2')}
          onSubmitEditing={() => {}}
          placeholder={'Street 2 (optional)'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={street2}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={onChange.bind(this, 'townCity')}
          placeholder={'Town/City'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={townCity}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={onChange.bind(this, 'county')}
          placeholder={'County (optional)'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={county}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={onChange.bind(this, 'postalCode')}
          placeholder={'Postal Code'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={postalCode}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={onChange.bind(this, 'phoneNumber')}
          placeholder={'Phone (optional)'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={phoneNumber}
        />
      </View>
    </FormSection>);
  }
}

PrimaryBusinessAddressSection.displayName = 'PrimaryBusinessAddressSection';

PrimaryBusinessAddressSection.propTypes = {
  county: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  street1: PropTypes.string.isRequired,
  street2: PropTypes.string.isRequired,
  townCity: PropTypes.string.isRequired
};

export default PrimaryBusinessAddressSection;
