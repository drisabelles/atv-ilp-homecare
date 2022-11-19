import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&´*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUp = () => {
  const {handleSubmit, watch, control} = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPress = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onTermsOfUsePress = () => {
    console.warn('onTermsOfUse');
  };

  const onPrivacyPress = () => {
    console.warn('onPrivacy');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Crie uma conta</Text>

      <CustomInput
        control={control}
        name="username"
        placeholder="Nome de usuário"
        rules={{
          required: 'É necessário inserir nome de usuário',
          minLength: {
            value: 5,
            message: 'O nome de usuário deve pelo menos 5 caracteres',
          },
          maxLength: {
            value: 20,
            message: 'O nome de usuário deve ter até 20 caracteres',
          },
        }}
      />

      <CustomInput
        control={control}
        name="email"
        placeholder="Email"
        rules={{pattern: {value: EMAIL_REGEX, message: 'O email é inválido'}}}
      />

      <CustomInput
        control={control}
        name="password"
        placeholder="Senha"
        secureTextEntry={true}
        rules={{
          required: 'É necessário inserir uma senha',
          minLength: {
            value: 8,
            message: 'A senha deve ter pelo menos 8 caracteres',
          },
        }}
      />

      <CustomInput
        control={control}
        name="password-repeat"
        placeholder="Repita sua senha"
        secureTextEntry={true}
        rules={{
          validate: value =>
            value == pwd ? true : 'As senhas devem ser iguais',
        }}
      />

      <CustomButton text="Cadastrar" onPress={handleSubmit(onRegisterPress)} />

      <Text style={styles.text}>
        Ao se cadastrar, você concorda em aceitar nossos{' '}
        <Text style={styles.link} onPress={onTermsOfUsePress}>
          Termos de Uso
        </Text>{' '}
        e{' '}
        <Text style={styles.link} onPress={onPrivacyPress}>
          Políticas de Privacidade
        </Text>
        .
      </Text>

      <SocialSignInButtons />

      <CustomButton
        text="Já tem uma conta? Faça login"
        onPress={onSignInPress}
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

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7864ed',
    margin: 10,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color: '#FDB075',
  },
});

export default SignUp;
