import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import PatientAnamnesis from '../../components/PatientAnamnesis';

const PatientRegistrationScreen = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const onRegisterPatientPress = () => {
    console.warn('Paciente cadastrado com sucesso!');
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Cadastro de Paciente</Text>

      <CustomInput placeholder="Nome" value={name} setValue={setName} />

      <CustomInput
        placeholder="Sobrenome"
        value={lastname}
        setValue={setLastname}
      />

      <CustomInput placeholder="Idade" value={age} setValue={setAge} />

      <CustomInput
        placeholder="Endereço"
        value={address}
        setValue={setAddress}
      />

      <CustomInput placeholder="Telefone" value={phone} setValue={setPhone} />

      <PatientAnamnesis />

      <CustomButton text="Cadastrar" onPress={onRegisterPatientPress} />
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
});

export default PatientRegistrationScreen;
