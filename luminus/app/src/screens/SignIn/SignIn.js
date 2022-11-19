import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import Logo from '../../../assets//images/logo2-luminus.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SignIn = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm();

  const onSignInPress = data => {
    console.log(data);
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
        name="username"
        placeholder="Nome de usuário"
        control={control}
        rules={{required: 'É necessário inserir nome de usuário'}}
      />
      <CustomInput
        name="password"
        placeholder="Senha"
        control={control}
        secureTextEntry={true}
        rules={{
          required: 'É necessário inserir sua senha',
          minLength: {
            value: 3,
            message: 'A senha deve ser maior',
          },
        }}
      />

      <CustomButton text="Entrar" onPress={handleSubmit(onSignInPress)} />

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

export default SignIn;
