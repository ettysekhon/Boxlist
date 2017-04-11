import React, {
  Component,
  PropTypes
} from 'react';

import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import objectAssign from 'object-assign';
import { setAccount } from '../../actions/account';

import BLButton from '../../common/BLButton';
import SimpleNavBarContainer from '../../common/SimpleNavBarContainer';
import NavBarTextLeftButton from '../../common/NavBarTextLeftButton';
import NavBarCloseIcon from '../../common/NavBarCloseIcon';
import PersonalDetailsSection from './PersonalDetailsSection';
import CompanyRegistrationSection from './CompanyRegistrationSection';
import PrimaryBusinessAddressSection from './PrimaryBusinessAddressSection';

const isValid = (state) => {
  /* eslint-disable max-len */
  const mobileRegEx = /(^\+(?!44)[0-9]{7,15}$)|(^(\+440?|0)(([27][0-9]{9}$)|(1[1-9][0-9]{7,8}$)))/;
  /* eslint-disable no-useless-escape */
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const postalCodeRegEx = /^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/;
  /* eslint-enable no-useless-escape */
  /* eslint-enable max-len */
  const {
    fullName,
    emailAddress,
    mobile,
    street1,
    townCity,
    postalCode
  } = state;

  const validEmail = emailAddress === '' || emailRegEx.test(emailAddress);
  const validMobile = mobile === '' || mobileRegEx.test(mobile);
  const validPostalCode = postalCode === '' || postalCodeRegEx.test(postalCode);
  const isEmpty = fullName === '' || emailAddress === '' || mobile === '' ||
    street1 === '' || townCity === '' || postalCode === '';
  return {
    validEmail,
    validMobile,
    validPostalCode,
    isEmpty,
    disabled: isEmpty || !validEmail || !validMobile || !validPostalCode
  };
};

/* eslint-disable react/prefer-stateless-function */
class RegisterView extends Component {
  constructor(props) {
    super(props);
    let fullName = '';
    let emailAddress = '';
    let companyName = '';
    let registrationNumber = '';
    let mobile = '';
    let street1 = '';
    let street2 = '';
    let townCity = '';
    let county = '';
    let postalCode = '';
    let phoneNumber = '';
    if (props.account) {
      fullName = props.account.fullName;
      emailAddress = props.account.emailAddress;
      companyName = props.account.companyName;
      registrationNumber = props.account.registrationNumber;
      mobile = props.account.mobile;
      street1 = props.account.street1;
      street2 = props.account.street2;
      townCity = props.account.townCity;
      county = props.account.county;
      postalCode = props.account.postalCode;
      phoneNumber = props.account.phoneNumber;
    }
    const state = {
      fullName,
      emailAddress,
      mobile,
      companyName,
      registrationNumber,
      street1,
      street2,
      townCity,
      county,
      postalCode,
      phoneNumber,
      disabled: true,
      validEmail: true,
      validMobile: true,
      validPostalCode: true
    };
    const valid = isValid(state);
    state.disabled = valid.disabled;
    state.validEmail = valid.validEmail;
    state.validMobile = valid.validMobile;
    state.validPostalCode = valid.validPostalCode;
    this.state = state;
    this.onChange = this.onChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
    this.renderValidMessage = this.renderValidMessage.bind(this);
  }
  onRegister() {
    const {
      fullName,
      emailAddress,
      companyName,
      registrationNumber,
      mobile,
      street1,
      street2,
      townCity,
      county,
      postalCode,
      phoneNumber
    } = this.state;
    const account = {
      fullName,
      emailAddress,
      companyName,
      registrationNumber,
      mobile,
      street1,
      street2,
      townCity,
      county,
      postalCode,
      phoneNumber
    };
    this.props.setAccount(account, this.props.navigator);
  }
  onChange(name, e) {
    const value = {};
    value[name] = e;
    const state = objectAssign({}, this.state, value);
    const valid = isValid(state);
    state.disabled = valid.disabled;
    state.validEmail = valid.validEmail;
    state.validMobile = valid.validMobile;
    state.validPostalCode = valid.validPostalCode;
    /* eslint-disable react/no-set-state */
    this.setState(state);
    /* eslint-enable react/no-set-state */
  }
  renderValidMessage() {
    const { validEmail, validMobile, validPostalCode } = this.state;
    if (validEmail && validMobile && validPostalCode) {
      return null;
    }
    const invalidMessage = (message) => {
      return (<Text style={styles.error}>{message}</Text>);
    };
    if (!validEmail) {
      return invalidMessage('Please enter valid email address');
    }
    if (!validMobile) {
      return invalidMessage('Please enter valid mobile phone number');
    }
    if (!validPostalCode) {
      return invalidMessage('Please enter valid postal code');
    }
    return null;
  }
  render() {
    const leftItem = {
      content: (<NavBarTextLeftButton />),
      onPress: () => {
        const { navigator } = this.props;
        if (navigator) {
          requestAnimationFrame(() => {
            return navigator.pop();
          });
        }
      }
    };
    const rightItem = {
      content: (<NavBarCloseIcon />),
      onPress: () => {
        const { navigator } = this.props;
        if (navigator) {
          requestAnimationFrame(() => {
            return navigator.pop();
          });
        }
      }
    };
    const { disabled, emailAddress, fullName, mobile, companyName, registrationNumber,
      county, phoneNumber, postalCode, street1, street2, townCity } = this.state;
    const content = (
      <View>
        <View style={{ marginBottom: 20 }}>
          <PersonalDetailsSection
            emailAddress={emailAddress}
            fullName={fullName}
            mobile={mobile}
            onChange={this.onChange}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <CompanyRegistrationSection
            companyName={companyName}
            onChange={this.onChange}
            registrationNumber={registrationNumber}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <PrimaryBusinessAddressSection
            county={county}
            onChange={this.onChange}
            phoneNumber={phoneNumber}
            postalCode={postalCode}
            street1={street1}
            street2={street2}
            townCity={townCity}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 10
          }}
        >
          {
            this.renderValidMessage()
          }
          <BLButton
            isDisabled={disabled}
            onPress={() => {
              this.onRegister();
            }}
            style={{
              marginTop: 20,
              paddingLeft: 7.5,
              paddingRight: 7.5,
              backgroundColor: 'rgb(80,227,194)'
            }}
            textStyle={{
              fontSize: 14
            }}
          >
            {
              'Submit'
            }
          </BLButton>
        </View>
      </View>);
    return (
      <SimpleNavBarContainer
        leftItem={leftItem}
        rightItem={rightItem}
      >
        <ScrollView>
          <View
            style={styles.container}
          >
            {
              content
            }
          </View>
        </ScrollView>
      </SimpleNavBarContainer>
    );
  }
}

RegisterView.displayName = 'RegisterView';

RegisterView.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  account: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  setAccount: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  error: {
    paddingTop: 15,
    color: 'red'
  }
});

export default connect((state, ownProps) => {
  return {
    account: state.app.account,
    navigator: ownProps.navigator
  };
}, (dispatch) => {
  return {
    setAccount: (account, navigator) => {
      dispatch(setAccount(account, navigator));
    }
  };
})(RegisterView);
