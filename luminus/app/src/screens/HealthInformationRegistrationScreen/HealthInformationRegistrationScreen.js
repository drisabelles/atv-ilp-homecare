import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import PatientAnamnesis from '../../components/PatientAnamnesis';

const HealthInformationRegistrationScreen = () => {
  const onRegisterHealthInformationPress = () => {
    console.warn('Informações de saúde cadastradas com sucesso!');
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>
        Cadastro de informações de saúde do paciente
      </Text>

      <PatientAnamnesis />

      <CustomButton
        text="Cadastrar"
        onPress={onRegisterHealthInformationPress}
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

export default HealthInformationRegistrationScreen;
