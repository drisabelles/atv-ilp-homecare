import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const MedicineRegistration = () => {
  const navigation = useNavigation();

  const {handleSubmit, control} = useForm();

  const onRegisterRelativeInformationPress = data => {
    console.warn(data);
    navigation.navigate('RelativeRegistration');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Cadastro de medicamentos do paciente</Text>

      <CustomInput
        control={control}
        name="medicineName"
        placeholder="Nome do medicamento"
        rules={{required: 'Este campo não pode ficar em branco'}}
      />
      <CustomInput
        control={control}
        name="dosage"
        placeholder="Qual a dosagem do medicamento?"
        rules={{required: 'Este campo não pode ficar em branco'}}
      />
      <CustomInput
        control={control}
        name="howManyTimes"
        placeholder="Quantas vezes ao dia deve ser tomado?"
        rules={{required: 'Este campo não pode ficar em branco'}}
      />
      <CustomInput
        control={control}
        name="howManyPills"
        placeholder="Quantos comprimidos por dose?"
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <CustomButton
        text="Cadastrar"
        onPress={handleSubmit(onRegisterRelativeInformationPress)}
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

export default MedicineRegistration;
