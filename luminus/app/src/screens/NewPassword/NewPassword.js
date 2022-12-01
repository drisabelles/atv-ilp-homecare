import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgotPassword = () => {
  const {handleSubmit, control} = useForm();

  const navigation = useNavigation();

  const onChangePasswordPress = data => {
    console.warn(data);
    navigation.navigate('Home');
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

      <CustomInput
        control={control}
        name="code"
        placeholder="Digite seu código de confirmação"
        rules={{require: 'Insira o código'}}
      />

      <CustomInput
        control={control}
        name="password"
        placeholder="Digite a sua nova senha"
        secureTextEntry={true}
        rules={{
          required: 'É necessário inserir uma senha',
          minLength: {
            value: 8,
            message: 'A senha deve ter pelo menos 8 caracteres',
          },
        }}
      />

      <CustomButton
        text="Mudar senha"
        onPress={handleSubmit(onChangePasswordPress)}
      />

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

export default ForgotPassword;
