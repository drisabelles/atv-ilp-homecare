import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const MedicalRegistration = () => {
  const navigation = useNavigation();

  const {handleSubmit, control} = useForm();

  const onRegisterMedicalPress = data => {
    console.warn(data);
    navigation.navigate('MedicineRegistration');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Cadastro médico do paciente</Text>

      <Text style={styles.text}>Nome do médico</Text>
      <CustomInput
        control={control}
        name="doctorName"
        placeholder=""
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Telefone do médico ou consultório</Text>
      <CustomInput
        control={control}
        name="doctorPhone"
        placeholder=""
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>
        Digite o nome do convênio do paciente. Se ele não tiver digite "não
        possui".
      </Text>
      <CustomInput
        control={control}
        name="medicalInsuranceName"
        placeholder=""
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <CustomButton
        text="Cadastrar"
        onPress={handleSubmit(onRegisterMedicalPress)}
      />
    </View>
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

export default MedicalRegistration;
