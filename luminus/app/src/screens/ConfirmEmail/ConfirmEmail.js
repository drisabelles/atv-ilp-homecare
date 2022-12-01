import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ConfirmEmail = () => {
  const {handleSubmit, control} = useForm();

  const navigation = useNavigation();

  const onConfirmPress = data => {
    console.warn(data);
    navigation.navigate('Home');
  };

  const onResendPress = () => {
    console.warn('Um novo código foi enviado para seu email!');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirme seu email</Text>

      <CustomInput
        control={control}
        name="code"
        placeholder="Digite o seu código de confirmação"
        rules={{required: 'É necessário inserir um código de confirmação'}}
      />

      <CustomButton text="Confirmar" onPress={handleSubmit(onConfirmPress)} />

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

export default ConfirmEmail;
