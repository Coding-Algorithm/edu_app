import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  appColors,
  appFontSize,
  appMargin,
  appPadding,
} from '../../../utils/styleGuide';
import {
  BodyLabel,
  HeaderFourLabel,
  HeaderOneLabel,
} from '../../../components/atoms/Labels/Labels';
import FormInput from '../../../components/organisms/Form/Form';
import {appImages} from '../../../assets/images';
import {FullWidthButton} from '../../../components/atoms/Buttons/Buttons';
import {useNavigation} from '@react-navigation/native';
import GeneralHeader from '../../../components/organisms/Header/Header';
import WrapperLayout from '../../../layout/WrapperLayout';

const NewPassword = () => {
  const navigation: any = useNavigation();

  const [userInfo, setUserInfo] = useState<{
    email: string | null;
    password: string | null;
    fullName: string | null;
  }>({email: null, password: null, fullName: null});

  const [errors, setErrors] = useState<{
    email: string[];
    password: string[];
  }>({email: [], password: []});

  const handleOnChangeText = (newValue: string | number, tag: string) => {
    setUserInfo(prev => {
      return {...prev, [tag]: newValue};
    });
  };

  return (
    <WrapperLayout bgColor={appColors.white}>
      <GeneralHeader title="" icon={appImages.goBackIcon} />

      <HeaderOneLabel propStyle={{marginBottom: appMargin.sm}}>
        Please enter new password
      </HeaderOneLabel>

      <HeaderFourLabel
        propStyle={{
          color: appColors.text,
          fontWeight: '400',
          marginBottom: appMargin.xxl,
        }}>
        At least one capital letter and Latin alphabet
      </HeaderFourLabel>

      <FormInput
        label="Password"
        text={userInfo.password}
        placeholder="Password"
        keyboardType="default"
        elementStore={{
          rightIcon: {
            icon: appImages.passwordEye,
            action: () => null,
            iconStyle: {width: 20, height: 20},
          },
        }}
        isTrue={{
          showRightIcon: true,
        }}
        setText={e => handleOnChangeText(e, 'password')}
        isPassword={true}
        containerStyle={{marginBottom: appMargin.sm}}
      />

      <FormInput
        label="Confirm Password"
        text={userInfo.password}
        placeholder="Password"
        keyboardType="default"
        elementStore={{
          rightIcon: {
            icon: appImages.passwordEye,
            action: () => null,
            iconStyle: {width: 20, height: 20},
          },
        }}
        isTrue={{
          showRightIcon: true,
        }}
        setText={e => handleOnChangeText(e, 'password')}
        isPassword={true}
        containerStyle={{marginBottom: appMargin.md}}
      />

      <FullWidthButton
        onPress={() => console.log('Sign in')}
        buttonText="Continue"
        wrapperStyle={{
          marginBottom: appMargin.md,
        }}
      />
    </WrapperLayout>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  header: {
    marginBottom: appMargin.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: appPadding.ssm,
  },
});
