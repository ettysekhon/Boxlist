import React, {
  Component
} from 'react';

import {
  View
} from 'react-native';

import { TextInput } from '../../common/TextInput';
import FormSection from '../../common/Section';

/* eslint-disable react/prefer-stateless-function */
class CompanyRegistrationSection extends Component {
  render() {
    return (<FormSection title='Company Registration'>
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
          placeholder={'Registration No.'}
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

CompanyRegistrationSection.displayName = 'CompanyRegistrationSection';

export default CompanyRegistrationSection;
