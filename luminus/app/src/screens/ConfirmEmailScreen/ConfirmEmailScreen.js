import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const onConfirmPress = () => {
    console.warn('Confirm');
  };

  const onResendPress = () => {
    console.warn('onResendPress');
  };

  const onSignInPress = () => {
    console.warn('onSignInPress');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <Text style={styles.label}>Code</Text>
      <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
      />

      <CustomButton text="Confirm" onPress={onConfirmPress} />

      <CustomButton
        text="Resend confirmation code"
        onPress={onResendPress}
        type="SECONDARY"
      />

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

export default ConfirmEmailScreen;
