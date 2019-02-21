import React, { PureComponent } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { APP_STACK, AUTH_STACK } from '../constants/Routes';
import { isLoggedIn } from '../helpers/authHelpers';

class AuthLoadingScreen extends PureComponent {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const { navigation } = this.props;
    isLoggedIn(user => {
      navigation.navigate(user ? APP_STACK : AUTH_STACK);
    });
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AuthLoadingScreen;
