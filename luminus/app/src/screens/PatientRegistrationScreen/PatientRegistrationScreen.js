import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CheckBox from '../../components/CheckBox';

const PatientRegistrationScreen = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [street, setStreet] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [secondaryPhone, setSecondaryPhone] = useState('');

  const optionsGender = [
    {text: 'Feminino', id: 1},
    {text: 'Masculino', id: 2},
  ];

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

      <View style={styles.container}>
        <Text style={styles.text}>Gênero:</Text>
        <CheckBox options={optionsGender} />
      </View>

      <CustomInput
        placeholder="Rua e número"
        value={street}
        setValue={setStreet}
      />

      <CustomInput
        placeholder="CEP"
        value={postalCode}
        setValue={setPostalCode}
      />

      <CustomInput placeholder="Cidade" value={city} setValue={setCity} />

      <CustomInput placeholder="Estado" value={state} setValue={setState} />

      <CustomInput
        placeholder="Telefone ou celular"
        value={phone}
        setValue={setPhone}
      />

      <CustomInput
        placeholder="Telefone ou celular secundário"
        value={secondaryPhone}
        setValue={setSecondaryPhone}
      />

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

export default PatientRegistrationScreen;
