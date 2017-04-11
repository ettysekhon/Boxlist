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
class PersonalDetailsSection extends Component {
  render() {
    const {
      emailAddress,
      fullName,
      mobile,
      onChange
    } = this.props;
    return (<FormSection title='Guest Account Details'>
      <View
        style={{
          borderColor: '#ccc',
          borderTopWidth: 1,
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={onChange.bind(this, 'fullName')}
          onSubmitEditing={() => {}}
          placeholder={'Full name'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={fullName}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={onChange.bind(this, 'emailAddress')}
          placeholder={'Email address'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={emailAddress}
        />
      </View>
      <View
        style={{
          borderColor: '#ccc',
          borderBottomWidth: 1
        }}
      >
        <TextInput
          onChangeText={onChange.bind(this, 'mobile')}
          placeholder={'Mobile'}
          placeholderTextColor={'#ccc'}
          style={{
            borderWidth: 0
          }}
          value={mobile}
        />
      </View>
    </FormSection>);
  }
}

PersonalDetailsSection.displayName = 'PersonalDetailsSection';

PersonalDetailsSection.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PersonalDetailsSection;
