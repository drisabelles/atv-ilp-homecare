import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';

import CheckBox from '../../components/CheckBox';
import CustomInput from '../CustomInput/CustomInput';

const PatientAnamnesis = () => {
  const {control} = useForm();

  const optionsBloodType = [
    {text: 'A', id: 1},
    {text: 'B', id: 2},
    {text: 'O', id: 3},
    {text: 'AB', id: 4},
  ];

  const optionsRhFactor = [
    {text: '-', id: 5},
    {text: '+', id: 6},
  ];

  const optionsYesOrNo = [
    {text: 'Sim', id: 7},
    {text: 'Não', id: 8},
  ];

  const optionsDeficiency = [
    {text: 'Auditiva', id: 9},
    {text: 'Visual', id: 10},
    {text: 'Física', id: 11},
    {text: 'Fala ou voz', id: 12},
    {text: 'Cognitiva ou memória', id: 13},
  ];

  const optionsLocomotion = [
    {text: 'Caminha sozinho em segurança', id: 14},
    {text: 'Ajuda ocasional', id: 15},
    {text: 'Ajuda frequente', id: 16},
    {text: 'Muleta ou bengala', id: 17},
    {text: 'Andador', id: 18},
    {text: 'Cadeira de rodas', id: 19},
    {text: 'Imobilidade completa (acamado)', id: 20},
  ];

  const optionsBasicActivities = [
    {text: 'Tomar banho', id: 21},
    {text: 'Vestir-se', id: 22},
    {text: 'Usar o vaso sanitário', id: 23},
    {text: 'Transferir-se', id: 24},
    {text: 'Controlar esfincter uruário e/ou fecal', id: 25},
    {text: 'Alimentar-se', id: 26},
  ];

  const optionsIntrumentalActivities = [
    {text: 'Preparar Refeições', id: 27},
    {text: 'Tomar remédio corretamente', id: 28},
    {text: 'Fazer compras', id: 29},
    {text: 'Controlar seu dinheiro', id: 30},
    {text: 'Usar o telefone', id: 31},
    {text: 'Arrumar a casa', id: 32},
    {text: 'Lavar roupa', id: 33},
    {text: 'Sair sozinho para lugares distantes', id: 34},
    {text: 'Manter-se em dia com as atualidades', id: 35},
    {
      text: 'Prestar atenção, entender e discutir um programa, jornal ou revista',
      id: 36,
    },
    {text: 'Lembrar-se de compromissos, acontecimentos e familiares', id: 37},
  ];

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Tipo sanguíneo: </Text>
      <CheckBox options={optionsBloodType} />

      <Text style={styles.text}>Fator RH:</Text>
      <CheckBox options={optionsRhFactor} />

      <Text style={styles.text}>Mora sozinho(a)?</Text>
      <CheckBox options={optionsYesOrNo} />

      <Text style={styles.text}>O(A) paciente possui alguma deficiência?</Text>
      <CheckBox options={optionsDeficiency} multiple="true" />

      <Text style={styles.text}>Como é a locomoção do/da paciente?</Text>
      <CheckBox options={optionsLocomotion} />

      <Text style={styles.text}>
        Assinale as atividades básicas de autocuidado que o(a) paciente consegue
        executar sozinho(a):
      </Text>
      <CheckBox options={optionsBasicActivities} multiple="true" />

      <Text style={styles.text}>
        Assinale as atividades instrumentais que o(a) paciente consegue executar
        sozinho(a):
      </Text>
      <CheckBox options={optionsIntrumentalActivities} multiple="true" />

      <Text style={styles.text}>Fuma?</Text>
      <CheckBox options={optionsYesOrNo} />

      <Text style={styles.text}>Ingere bebida alcóolica?</Text>
      <CheckBox options={optionsYesOrNo} />

      <Text style={styles.text}>
        Faz atividade física (inclui fisioterapia, pilates e afins)?
      </Text>
      <CheckBox options={optionsYesOrNo} />

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
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 5,
  },

  text: {
    color: 'black',
    marginVertical: 5,
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PatientAnamnesis;
