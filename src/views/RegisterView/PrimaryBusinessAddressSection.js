import React, {
  Component
} from 'react';

import {
  View
} from 'react-native';

import { TextInput } from '../../common/TextInput';
import FormSection from '../../common/Section';

/* eslint-disable react/prefer-stateless-function */
class PrimaryBusinessAddressSection extends Component {
  render() {
    return (<FormSection title='Primary Business Address'>
      <View
        style={{
          borderColor: '#ccc',
          borderTopWidth: 1,
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={() => {}}
          onSubmitEditing={() => {}}
          placeholder={'Street 1'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={''}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={() => {}}
          onSubmitEditing={() => {}}
          placeholder={'Street 2 (optional)'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={''}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={() => {}}
          onSubmitEditing={() => {}}
          placeholder={'Town/City'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={''}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={() => {}}
          onSubmitEditing={() => {}}
          placeholder={'County (optional)'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={''}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={() => {}}
          onSubmitEditing={() => {}}
          placeholder={'Postal Code'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={''}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={() => {}}
          onSubmitEditing={() => {}}
          placeholder={'Phone (optional)'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={''}
        />
      </View>
    </FormSection>);
  }
}

PrimaryBusinessAddressSection.displayName = 'PrimaryBusinessAddressSection';

export default PrimaryBusinessAddressSection;
