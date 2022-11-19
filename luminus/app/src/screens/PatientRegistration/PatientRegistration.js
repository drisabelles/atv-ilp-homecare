import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CheckBox from '../../components/CheckBox';

const PatientRegistration = () => {
  const navigation = useNavigation();

  const {handleSubmit, control} = useForm();

  const optionsGender = [
    {text: 'Feminino', id: 1},
    {text: 'Masculino', id: 2},
  ];

  const onRegisterPatientPress = data => {
    console.warn(data);
    navigation.navigate('HealthRegistration');
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Cadastro de Paciente</Text>

      <CustomInput
        control={control}
        name="name"
        placeholder="Nome Completo"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <CustomInput
        control={control}
        name="age"
        placeholder="Idade"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <View style={styles.container}>
        <Text style={styles.text}>Gênero:</Text>
        <CheckBox options={optionsGender} />
      </View>

      <CustomInput
        control={control}
        name="street"
        placeholder="Rua e número"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <CustomInput
        control={control}
        name="postalCode"
        placeholder="CEP"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <CustomInput
        control={control}
        name="city"
        placeholder="Cidade"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <CustomInput
        control={control}
        name="state"
        placeholder="Estado"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <CustomInput
        control={control}
        name="phone"
        placeholder="Telefone ou celular"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <CustomInput
        control={control}
        name="secondaryPhone"
        placeholder="Telefone ou celular secundário"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <CustomButton
        text="Cadastrar"
        onPress={handleSubmit(onRegisterPatientPress)}
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

export default PatientRegistration;
