import {Image, View} from 'react-native';
import React, {useState} from 'react';
import FormInput from '../components/organisms/Form/Form';
import {appImages} from '../assets/images';
import WrapperLayout from '../layout/WrapperLayout';

const ScreenIndex = () => {
  const [text, setText] = useState<string | number>('');

  console.log(text);

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
      {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> */}
      <FormInput
        label="Email Address"
        text={text}
        setText={setText}
        isTrue={{showRightIcon: true}}
        placeholder="sample here"
        elementStore={{
          rightIcon: passwordIcon,
        }}
      />

      <FormInput
        label="Email Address"
        text={text}
        setText={setText}
        isTrue={{showRightIcon: true}}
        placeholder="sample here"
        elementStore={{
          rightIcon: passwordIcon,
        }}
      />
      {/* </View> */}
    </WrapperLayout>
  );
};

export default ScreenIndex;
