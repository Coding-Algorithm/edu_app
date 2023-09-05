import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';

const index = () => {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthNavigator /> : null}
    </NavigationContainer>
  );
};

export default index;
