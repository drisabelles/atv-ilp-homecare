/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import ConfirmEmailScreen from './app/src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './app/src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import SignInScreen from './app/src/screens/SignInScreen';
import SignUpScreen from './app/src/screens/SignUpScreen';
import NewPasswordScreen from './app/src/screens/NewPasswordScreen';
import HomeScreen from './app/src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
