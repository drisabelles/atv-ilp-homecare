import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const HealthRegistration = () => {
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm();

  const onRegisterHealthInformationPress = data => {
    console.warn(data);
    navigation.navigate('MedicalRegistration');
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>
        Cadastro de informações de saúde do paciente
      </Text>

      <Text style={styles.text}>Tipo Sanguíneo </Text>
      <CustomInput
        control={control}
        name="bloodType"
        placeholder="A, B, O ou AB"
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Fator RH</Text>
      <CustomInput
        control={control}
        name="rhFactor"
        placeholder="+ (positivo) ou - (negativo)"
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Mora sozinho? </Text>
      <CustomInput
        control={control}
        name="livesAlone"
        placeholder="Escreva sim ou não"
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>
        O(A) paciente possui alguma deficiência? Se sim, descreva-as
      </Text>
      <CustomInput
        control={control}
        name="deficiency"
        placeholder="Exemplo: Física, auditiva, visual, de fala, cognitiva, etc."
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Como é a locomoção do/da paciente?</Text>
      <CustomInput
        control={control}
        name="locomotion"
        placeholder="Exemplo: anda sozinho, anda com ajuda, acamado e etc."
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>
        Quais as atividades básicas de autocuidado que o(a) paciente consegue
        executar sozinho(a)?
      </Text>
      <CustomInput
        control={control}
        name="basicActvities"
        placeholder="Escreva-as separadas por vírgula."
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>
        Quais as atividades instrumentais que o(a) paciente consegue executar
        sozinho(a)?
      </Text>
      <CustomInput
        control={control}
        name="instrumentalActivities"
        placeholder="Escreva-as separadas por vírgula."
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Fuma? </Text>
      <CustomInput
        control={control}
        name="smoke"
        placeholder="Escreva sim ou não"
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>Ingere bebida alcóolica?</Text>
      <CustomInput
        control={control}
        name="drink"
        placeholder="Escreva sim ou não"
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>
        Faz atividade física (inclui fisioterapia, pilates e afins)?
      </Text>
      <CustomInput
        control={control}
        name="fisicalActivities"
        placeholder="Escreva sim ou não"
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

      <Text style={styles.text}>
        O paciente possui alguma doença? Se sim digite ela(s), caso contrário
        escreva que não.
      </Text>
      <CustomInput
        control={control}
        name="diseases"
        placeholder="Exemplo: diabetes, hipertensão, colesterol alto, alzheimer e etc."
        rules={{required: 'Este campo não pode ficar em branco'}}
      />

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
