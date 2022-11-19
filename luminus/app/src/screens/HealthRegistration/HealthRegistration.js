import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import CustomButton from '../../components/CustomButton/CustomButton';
import PatientAnamnesis from '../../components/PatientAnamnesis';

const HealthRegistration = () => {
  const navigation = useNavigation();

  const {handleSubmit} = useForm();

  const onRegisterHealthInformationPress = data => {
    console.warn(data);
    navigation.navigate('MedicalRegistration');
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>
        Cadastro de informações de saúde do paciente
      </Text>

      <PatientAnamnesis />

      <CustomButton
        text="Cadastrar"
        onPress={handleSubmit(onRegisterHealthInformationPress)}
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

export default HealthRegistration;
