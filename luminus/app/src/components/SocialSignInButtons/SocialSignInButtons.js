import React from 'react';
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
        text="Entrar com sua conta Google"
        onPress={onSignInGoogle}
        bgColor="#FAA0A0"
        fgColor="black"
      />

      <CustomButton
        text="Entrar com sua conta Apple"
        onPress={onSignInApple}
        bgColor="#0A0708"
        fgColor="white"
      />
    </>
  );
};

export default SocialSignInButtons;
