import {Text, View} from 'react-native';
import React from 'react';
import OneLineInput from '../components/atoms/Textboxes/Inputs';

const ScreenIndex = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <OneLineInput />
      <Text>ScreenIndex</Text>
    </View>
  );
};

export default ScreenIndex;
