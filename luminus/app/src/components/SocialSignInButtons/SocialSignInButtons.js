import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAA0A0"
        fgColor="black"
      />

      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#E7EAF4"
        fgColor="black"
      />
    </>
  );
};

export default SocialSignInButtons;
