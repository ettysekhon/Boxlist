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
class CompanyRegistrationSection extends Component {
  render() {
    const {
      companyName,
      registrationNumber,
      onChange
    } = this.props;
    return (<FormSection title='Company'>
      <View
        style={{
          borderColor: '#ccc',
          borderTopWidth: 1,
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={onChange.bind(this, 'companyName')}
          placeholder={'Name'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={companyName}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={onChange.bind(this, 'registrationNumber')}
          placeholder={'Registration No. (optional)'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={registrationNumber}
        />
      </View>
    </FormSection>);
  }
}

CompanyRegistrationSection.displayName = 'CompanyRegistrationSection';

CompanyRegistrationSection.propTypes = {
  companyName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  registrationNumber: PropTypes.string.isRequired
};

export default CompanyRegistrationSection;
