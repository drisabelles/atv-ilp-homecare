import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const PatientRegistration = () => {
  const navigation = useNavigation();

  const {handleSubmit, control} = useForm();

  const onRegisterPatientPress = data => {
    console.warn(data);
    navigation.navigate('HealthRegistration');
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Cadastro de Paciente</Text>

      <Text style={styles.text}>Nome completo:</Text>
      <CustomInput
        control={control}
        name="name"
        placeholder=""
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Idade:</Text>
      <CustomInput
        control={control}
        name="age"
        placeholder=""
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Gênero:</Text>
      <CustomInput
        control={control}
        name="gender"
        placeholder="Feminino ou Masculino"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Endereço:</Text>
      <CustomInput
        control={control}
        name="street"
        placeholder="Rua, número e bairro"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>CEP:</Text>
      <CustomInput
        control={control}
        name="postalCode"
        placeholder=""
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Cidade:</Text>
      <CustomInput
        control={control}
        name="city"
        placeholder=""
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Estado:</Text>
      <CustomInput
        control={control}
        name="state"
        placeholder=""
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Telefone de contato:</Text>
      <CustomInput
        control={control}
        name="phone"
        placeholder="Telefone ou celular"
        rules={{required: 'Esse campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Telefone de contato alternativo:</Text>
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
