import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../../assets//images/logo2-luminus.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPress = () => {
    //validate the user before

    navigation.navigate('Home');
  };

  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Nome de usuário"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Senha"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton text="Entrar" onPress={onSignInPress} />

      <CustomButton
        text="Esqueceu sua senha? Crie uma nova"
        onPress={onForgotPasswordPress}
        type="TERTIARY"
      />

      <SocialSignInButtons />

      <CustomButton
        text="Não tem uma conta? Cadastre-se"
        onPress={onSignUpPress}
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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
