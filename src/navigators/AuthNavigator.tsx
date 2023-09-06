import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import ForgotPassword from '../screens/auth/ForgotPassword';
import NewPassword from '../components/screens/ForgotPassword/NewPassword';

type AuthStackParamsList = {
  login: undefined;
  signup: undefined;
  forgotPassword: undefined;
  newPassword: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="signup" component={SignUp} />
      <AuthStack.Screen name="forgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="newPassword" component={NewPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
