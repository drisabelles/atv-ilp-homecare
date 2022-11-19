import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const RelativeRegistration = () => {
  const navigation = useNavigation();

  const {handleSubmit, control} = useForm();

  const onRegisterRelativeInformationPress = data => {
    console.warn(data);
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Cadastro de parente do paciente</Text>

      <CustomInput
        control={control}
        name="relativeName"
        placeholder="Nome do parente"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />
      <CustomInput
        control={control}
        name="kinship"
        placeholder="Parentesco"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />
      <CustomInput
        control={control}
        name="relativePhone"
        placeholder="Telefone ou celular"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />
      <CustomInput
        control={control}
        name="relativeSecondaryPhone"
        placeholder="Telefone ou celular secundário"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />
      <CustomInput
        control={control}
        name="email"
        placeholder="Email"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <CustomButton
        text="Cadastrar"
        onPress={handleSubmit(onRegisterRelativeInformationPress)}
      />
    </ScrollView>
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
    color: 'black',
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },

  container: {
    padding: 5,
  },
});

export default RelativeRegistration;
