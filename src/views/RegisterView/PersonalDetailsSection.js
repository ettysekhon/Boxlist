import React, {
  Component
} from 'react';

import {
  View
} from 'react-native';

import { TextInput } from '../../common/TextInput';
import FormSection from '../../common/Section';

/* eslint-disable react/prefer-stateless-function */
class PersonalDetailsSection extends Component {
  render() {
    return (<FormSection title='Personal Details'>
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
          placeholder={'Full name'}
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
          placeholder={'Email address'}
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
          placeholder={'Password'}
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
          placeholder={'Phone number'}
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

PersonalDetailsSection.displayName = 'PersonalDetailsSection';

export default PersonalDetailsSection;
