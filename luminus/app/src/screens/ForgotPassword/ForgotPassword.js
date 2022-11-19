import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgotPassword = () => {
  const {handleSubmit, control} = useForm();

  const navigation = useNavigation();

  const onSendPress = data => {
    console.warn(data);
    navigation.navigate('NewPassword');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Redefina sua senha</Text>

      <CustomInput
        control={control}
        name="username"
        placeholder="Digite seu nome de usuário"
        rules={{required: 'É necessário informar o nome de usuário'}}
      />

      <CustomButton text="Enviar" onPress={handleSubmit(onSendPress)} />

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

export default ForgotPassword;
