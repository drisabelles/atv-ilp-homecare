import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CheckBox from '../../components/CheckBox';

const RelativeInformationRegistrationScreen = () => {
  const [relativeName, setRelativeName] = useState('');
  const [kinship, setKinship] = useState('');
  const [relativePhone, setRelativePhone] = useState('');
  const [relativeSecondaryPhone, setRelativeSecondaryPhone] = useState('');
  const [relativeEmail, setRelativeEmail] = useState('');

  const onRegisterRelativeInformationPress = () => {
    console.warn('Informações médicas cadastradas com sucesso!');
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Cadastro de parentes do paciente</Text>

      <Text style={styles.text}>Parente 1</Text>
      <CustomInput
        placeholder="Nome do parente"
        value={relativeName}
        setValue={setRelativeName}
      />
      <CustomInput
        placeholder="Parentesco"
        value={kinship}
        setValue={setKinship}
      />
      <CustomInput
        placeholder="Telefone ou celular"
        value={relativePhone}
        setValue={setRelativePhone}
      />
      <CustomInput
        placeholder="Telefone ou celular secundário"
        value={relativeSecondaryPhone}
        setValue={setRelativeSecondaryPhone}
      />
      <CustomInput
        placeholder="Email"
        value={relativeEmail}
        setValue={setRelativeEmail}
      />

      <CustomButton
        text="Cadastrar"
        onPress={onRegisterRelativeInformationPress}
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

export default RelativeInformationRegistrationScreen;
