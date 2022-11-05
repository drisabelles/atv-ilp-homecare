import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CheckBox from '../../components/CheckBox';

const PatientAnamnesis = () => {
  const optionsYesOrNo = [
    {text: 'Sim', id: 1},
    {text: 'Não', id: 2},
  ];

  const optionsDeficiency = [
    {text: 'Auditiva', id: 1},
    {text: 'Visual', id: 2},
    {text: 'Física', id: 3},
    {text: 'Fala ou voz', id: 4},
    {text: 'Cognitiva ou memória', id: 5},
  ];

  const optionsLocomotion = [
    {text: 'Caminha sozinho em segurança', id: 1},
    {text: 'Ajuda ocasional', id: 2},
    {text: 'Ajuda frequente', id: 3},
    {text: 'Muleta ou bengala', id: 4},
    {text: 'Andador', id: 5},
    {text: 'Cadeira de rodas', id: 6},
    {text: 'Imobilidade completa (acamado)', id: 7},
  ];

  const optionsBasicActivities = [
    {text: 'Tomar banho', id: 1},
    {text: 'Vestir-se', id: 2},
    {text: 'Usar o vaso sanitário', id: 3},
    {text: 'Transferir-se', id: 4},
    {text: 'Controlar esfincter uruário e/ou fecal', id: 5},
    {text: 'Alimentar-se', id: 6},
  ];

  const optionsIntrumentalActivities = [
    {text: 'Preparar Refeições', id: 1},
    {text: 'Tomar remédio corretamente', id: 2},
    {text: 'Fazer compras', id: 3},
    {text: 'Controlar seu dinheiro', id: 4},
    {text: 'Usar o telefone', id: 5},
    {text: 'Arrumar a casa', id: 6},
    {text: 'Lavar roupa', id: 7},
    {text: 'Sair sozinho para lugares distantes', id: 8},
    {text: 'Manter-se em dia com as atualidades', id: 9},
    {
      text: 'Prestar atenção, entender e discutir um programa, jornal ou revista',
      id: 10,
    },
    {text: 'Lembrar-se de compromissos, acontecimentos e familiares', id: 10},
  ];

  return (
    <View style={styles.root}>
      <Text style={styles.text}>O paciente possui alguma deficiência?</Text>
      <CheckBox
        options={optionsDeficiency}
        onChange={option => alert(option)}
        multiple="true"
      />

      <Text style={styles.text}>Como é a locomoção do paciente?</Text>
      <CheckBox
        options={optionsLocomotion}
        onChange={option => alert(option)}
      />

      <Text style={styles.text}>
        Assinale as atividades básicas de autocuidado que o paciente consegue
        executar sozinho:
      </Text>
      <CheckBox
        options={optionsBasicActivities}
        onChange={option => alert(option)}
        multiple="true"
      />

      <Text style={styles.text}>
        Assinale as atividades instrumentais que o paciente consegue executar
        sozinho:
      </Text>
      <CheckBox
        options={optionsIntrumentalActivities}
        onChange={option => alert(option)}
        multiple="true"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
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
