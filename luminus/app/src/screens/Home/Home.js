import React from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets//images/logo-luminus.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onExistentPatientsPress = () => {
    console.warn('ExistentPatientsPress');
  };

  const onPatientRegistrationPress = () => {
    navigation.navigate('PatientRegistration');
  };

  const onSeeAccountPress = () => {
    console.warn('onSeeAccountPress');
  };

  const onHelpPress = () => {
    console.warn('onHelpPress');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomButton text="Ver pacientes" onPress={onExistentPatientsPress} />

      <CustomButton
        text="Cadastrar paciente"
        onPress={onPatientRegistrationPress}
      />

      <CustomButton
        text="Sua conta"
        onPress={onSeeAccountPress}
        type="SECONDARY"
      />

      <CustomButton
        text="Está tendo algum problema? Nós podemos te ajudar"
        onPress={onHelpPress}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color: '#FDB075',
  },

  logo: {
    width: '30%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default Home;
