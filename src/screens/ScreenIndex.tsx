/* eslint-disable react-native/no-inline-styles */
import {Image, View} from 'react-native';
import React, {useState} from 'react';
import FormInput from '../components/organisms/Form/Form';
import {appImages} from '../assets/images';
import WrapperLayout from '../layout/WrapperLayout';
import {appMargin} from '../utils/styleGuide';
import {
  FullWidthButton,
  TextButton,
  IconButton,
} from '../components/atoms/Buttons/Buttons';
import {HeaderOneLabel} from '../components/atoms/Labels/Labels';

const ScreenIndex = () => {
  const [text, setText] = useState<string | number>('');

  const passwordIcon = (
    <Image
      source={appImages.passwordEye}
      resizeMode="contain"
      style={{
        width: 20,
        height: 20,
      }}
    />
  );

  return (
    <WrapperLayout>
      <HeaderOneLabel text="Welcome back" />

      <FormInput
        label="Email Address"
        text={text}
        setText={setText}
        placeholder="sample here"
        containerStyle={{
          marginBottom: appMargin.sm,
        }}
      />

      <FullWidthButton onPress={() => console.log('button pressed')} />

      <IconButton
        onPress={() => console.log('button pressed')}
        icon={
          <View>
            <Image
              source={appImages.fbIcon}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
        }
        wrapperStyle={{
          width: '25%',
        }}
      />

      <IconButton
        onPress={() => console.log('button pressed')}
        icon={
          <View>
            <Image
              source={appImages.googleIcon}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                paddingBottom: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
        }
        wrapperStyle={{
          width: '25%',
        }}
      />
      <TextButton
        buttonText="Forgot Password?"
        wrapperStyle={{
          width: '100%',
          alignItems: 'flex-end',
        }}
        onPress={() => console.log('button pressed')}
      />
    </WrapperLayout>
  );
};

export default ScreenIndex;
