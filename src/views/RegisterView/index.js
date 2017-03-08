import React, {
  Component,
  PropTypes
} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import SimpleNavBarContainer from '../../common/SimpleNavBarContainer';
import NavBarTextLeftButton from '../../common/NavBarTextLeftButton';
import NavBarCloseIcon from '../../common/NavBarCloseIcon';
import PersonalDetailsSection from './PersonalDetailsSection';
import CompanyRegistrationSection from './CompanyRegistrationSection';

/* eslint-disable react/prefer-stateless-function */
class RegisterView extends Component {
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
      }
    };
    const content = (
      <View>
        <View style={{ marginBottom: 20 }}>
          <PersonalDetailsSection />
        </View>
        <CompanyRegistrationSection />
      </View>);

    return (
      <SimpleNavBarContainer
        leftItem={leftItem}
        rightItem={rightItem}
      >
        <View
          style={styles.container}
        >
          {
            content
          }
        </View>
      </SimpleNavBarContainer>
    );
  }
}

RegisterView.displayName = 'RegisterView';

RegisterView.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  navigator: PropTypes.object.isRequired
  /* eslint-enable react/forbid-prop-types */
};

const styles = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }
});

export default RegisterView;
