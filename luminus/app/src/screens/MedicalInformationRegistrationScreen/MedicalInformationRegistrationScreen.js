import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CheckBox from '../../components/CheckBox';

const MedicalInformationRegistrationScreen = () => {
  const [doctorName, setDoctorName] = useState('');
  const [doctorPhone, setDoctorPhone] = useState('');
  const [medicalInsuranceName, setMedicalInsuranceName] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [howManyTimes, setHowManyTimes] = useState('');
  const [howManyPills, setHowManyPills] = useState('');

  const onRegisterRelativeInformationPress = () => {
    console.warn('Informações médicas cadastradas com sucesso!');
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Cadastro médico do paciente</Text>

      <Text style={styles.text}>Nome do médico</Text>
      <CustomInput placeholder="" value={doctorName} setValue={setDoctorName} />

      <Text style={styles.text}>Telefone do médico ou consultório</Text>
      <CustomInput
        placeholder=""
        value={doctorPhone}
        setValue={setDoctorPhone}
      />

      <Text style={styles.text}>
        Digite o nome do convênio do paciente. Se ele não tiver digite "não
        possui".
      </Text>
      <CustomInput
        placeholder=""
        value={medicalInsuranceName}
        setValue={setMedicalInsuranceName}
      />

      <Text style={styles.text}>Medicamento 1</Text>
      <CustomInput
        placeholder="Nome do medicamento"
        value={medicineName}
        setValue={setMedicineName}
      />
      <CustomInput
        placeholder="Qual a dosagem do medicamento?"
        value={dosage}
        setValue={setDosage}
      />
      <CustomInput
        placeholder="Quantas vezes ao dia deve ser tomado?"
        value={howManyTimes}
        setValue={setHowManyTimes}
      />
      <CustomInput
        placeholder="Quantos comprimidos por dose?"
        value={howManyPills}
        setValue={setHowManyPills}
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

export default MedicalInformationRegistrationScreen;
