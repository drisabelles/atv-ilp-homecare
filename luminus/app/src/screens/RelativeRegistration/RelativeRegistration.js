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

      <Text style={styles.text}>Nome completo:</Text>
      <CustomInput
        control={control}
        name="relativeName"
        placeholder=""
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Parentesco:</Text>
      <CustomInput
        control={control}
        name="kinship"
        placeholder="Exemplo: filha, irmã, sobrinha, mãe e etc"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Telefone de contato:</Text>
      <CustomInput
        control={control}
        name="relativePhone"
        placeholder="Residencial ou celular"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Telefone de contato secundário:</Text>
      <CustomInput
        control={control}
        name="relativeSecondaryPhone"
        placeholder="Residencial ou celular"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Email:</Text>
      <CustomInput
        control={control}
        name="email"
        placeholder=""
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
