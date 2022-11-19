import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ConfirmEmail from '../screens/ConfirmEmail';
import ForgotPassword from '../screens/ForgotPassword';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import NewPassword from '../screens/NewPassword';
import Home from '../screens/Home';
import PatientRegistration from '../screens/PatientRegistration';
import HealthRegistration from '../screens/HealthRegistration';
import MedicalRegistration from '../screens/MedicalRegistration';
import MedicineRegistration from '../screens/MedicineRegistration';
import RelativeRegistration from '../screens/RelativeRegistration';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="PatientRegistration"
          component={PatientRegistration}
        />
        <Stack.Screen
          name="HealthRegistration"
          component={HealthRegistration}
        />
        <Stack.Screen
          name="MedicalRegistration"
          component={MedicalRegistration}
        />
        <Stack.Screen
          name="MedicineRegistration"
          component={MedicineRegistration}
        />
        <Stack.Screen
          name="RelativeRegistration"
          component={RelativeRegistration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
