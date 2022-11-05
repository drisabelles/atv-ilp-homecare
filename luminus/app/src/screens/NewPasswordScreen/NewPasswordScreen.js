import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  const onChangePasswordPress = () => {
    console.warn('Sua senha foi modificada!');
  };

  const onResendPress = () => {
    console.warn('Um novo código de confirmação foi enviado para seu email');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Crie uma nova senha</Text>

      <Text style={styles.label}>Código</Text>
      <CustomInput
        placeholder="Digite seu código de confirmação"
        value={code}
        setValue={setCode}
      />

      <Text style={styles.label}>Nova senha</Text>
      <CustomInput
        placeholder="Digite a sua nova senha"
        value={newPassword}
        setValue={setNewPassword}
        secureTextEntry={true}
      />

      <CustomButton text="Mudar senha" onPress={onChangePasswordPress} />

      <CustomButton
        text="Reenviar código de confirmação"
        onPress={onResendPress}
        type="SECONDARY"
      />

      <CustomButton
        text="Voltar para login"
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
