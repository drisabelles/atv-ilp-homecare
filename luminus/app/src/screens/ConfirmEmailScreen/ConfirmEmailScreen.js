import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const onConfirmPress = () => {
    navigation.navigate('Home');
  };

  const onResendPress = () => {
    console.warn('Um novo código foi enviado para seu email!');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirme seu email</Text>

      <Text style={styles.label}>Código</Text>
      <CustomInput
        placeholder="Digite o seu código de confirmação"
        value={code}
        setValue={setCode}
      />

      <CustomButton text="Confirmar" onPress={onConfirmPress} />

      <CustomButton
        text="Reenviar código de confirmação"
        onPress={onResendPress}
        type="SECONDARY"
      />

      <CustomButton
        text="Voltar para login"
        onPress={onSignInPress}
        type="TERTIARY"
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
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color: '#FDB075',
  },

  label: {
    color: '#FDB075',
    fontWeight: 'bold',
  },
});

export default ConfirmEmailScreen;
