import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, Alert, TouchableOpacity, Platform,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ButtonIcon from '../core/ButtonIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  bgButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 9,
  },
  colorSuccess: {
    backgroundColor: '#28a745',
  },
  colorPrimary: {
    backgroundColor: '#007bff',
  },
  colorSecondary: {
    backgroundColor: '#6c757d',
  },
  colorInfo: {
    backgroundColor: '#17a2b8',
  },
  colorWarning: {
    backgroundColor: '#ffc107',
  },
  colorDanger: {
    backgroundColor: '#dc3545',
  },
  colorLight: {
    backgroundColor: '#f8f9fa',
  },
  colorDark: {
    backgroundColor: '#343a40',
  },
  textLight: {
    color: '#f8f9fa',
  },
  textDark: {
    color: '#343a40',
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
    margin: 20,
  },
});

class AuthSignOrRegister extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    const { navigation } = this.props;
    navigation.navigate('AuthFormScreen');
  }

  regist() {
    Alert.alert('Sorry, this option is temporary not avalible');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgButton}>
          <TouchableOpacity onPress={this.login} style={[styles.button, styles.colorSuccess, styles.textLight]}>
            <ButtonIcon
              name={Platform.OS === 'ios' ? 'ios-key' : 'md-key'}
              color="#f8f9fa"
            />
            <Text style={[styles.text, styles.textLight]}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>or</Text>
        <View style={styles.bgButton}>
          <TouchableOpacity onPress={this.regist} style={styles.button}>
            <ButtonIcon
              name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'}
              color="#343a40"
            />
            <Text style={styles.text}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AuthSignOrRegister.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withNavigation(AuthSignOrRegister);
