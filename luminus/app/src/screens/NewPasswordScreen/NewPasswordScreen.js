import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ForgotPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onChangePasswordPress = () => {
    console.warn('ChangePasswordPress');
  };

  const onSignInPress = () => {
    console.warn('onSignInPress');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create you new password</Text>

      <Text style={styles.label}>Code</Text>
      <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
      />

      <Text style={styles.label}>New Password</Text>
      <CustomInput
        placeholder="Enter your new password"
        value={newPassword}
        setValue={setNewPassword}
        secureTextEntry={true}
      />

      <CustomButton text="Change password" onPress={onChangePasswordPress} />

      <CustomButton
        text="Back to sign in"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7864ed',
    margin: 10,
    textAlign: 'center',
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color: '#FDB075',
  },

  label: {
    color: '#FDB075',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
