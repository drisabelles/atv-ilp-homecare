import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

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
        placeholder="Nome de usuário"
        value={username}
        setValue={setUsername}
      />

      <CustomInput placeholder="Email" value={email} setValue={setEmail} />

      <CustomInput
        placeholder="Senha"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomInput
        placeholder="Repita sua senha"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />

      <CustomButton text="Cadastrar" onPress={onRegisterPress} />

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

export default SignUpScreen;
