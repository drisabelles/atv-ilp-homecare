import React from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets//images/logo-luminus.png';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignUpScreen = () => {
  const {height} = useWindowDimensions();

  const onExistentPacientsPress = () => {
    console.warn('ExistentPacientsPress');
  };

  const onPacientRegistrationPress = () => {
    console.warn('PacientRegistrationPress');
  };

  const onSeeAccountPress = () => {
    console.warn('onSeeAccountPress');
  };

  const onHelpPress = () => {
    console.warn('onHelpPress');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomButton
        text="See existent pacients"
        onPress={onExistentPacientsPress}
      />

      <CustomButton
        text="Pacient registration"
        onPress={onPacientRegistrationPress}
      />

      <CustomButton
        text="See your account"
        onPress={onSeeAccountPress}
        type="SECONDARY"
      />

      <CustomButton
        text="Having any problems? We can help you"
        onPress={onHelpPress}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color: '#FDB075',
  },

  logo: {
    width: '30%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignUpScreen;
