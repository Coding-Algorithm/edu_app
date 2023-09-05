import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import WrapperLayout from '../../layout/WrapperLayout';
import {
  appColors,
  appFontSize,
  appMargin,
  appPadding,
} from '../../utils/styleGuide';
import {
  BodyLabel,
  BodySmallLabel,
  HeaderFourLabel,
  HeaderOneLabel,
} from '../../components/atoms/Labels/Labels';
import FormInput from '../../components/organisms/Form/Form';
import {appImages} from '../../assets/images';
import {
  FullWidthButton,
  IconButton,
  TextButton,
} from '../../components/atoms/Buttons/Buttons';

const Login = () => {
  const [userInfo, setUserInfo] = useState<{
    email: string | null;
    password: string | null;
  }>({email: null, password: null});

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
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 200,
        }}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <HeaderOneLabel propStyle={{marginBottom: appMargin.sm}}>
          Welcome back
        </HeaderOneLabel>

        <HeaderFourLabel
          propStyle={{
            color: appColors.text,
            fontWeight: '400',
            marginBottom: appMargin.lg,
          }}>
          Welcome back. Enter your credentials to access your account
        </HeaderFourLabel>

        <FormInput
          label="Email Address"
          keyboardType="email-address"
          text={userInfo.email}
          placeholder="hello@example.c"
          setText={e => handleOnChangeText(e, 'email')}
          containerStyle={{marginBottom: appMargin.sm}}
        />

        <FormInput
          label="Password"
          text={userInfo.password}
          placeholder="Password"
          keyboardType="password"
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
        />

        <TextButton
          onPress={() => console.log('forgotPassword')}
          buttonText="Forgot Password?"
          wrapperStyle={{
            marginTop: appMargin.md,
            marginBottom: appMargin.lg,
            alignItems: 'flex-end',
          }}
        />

        <FullWidthButton
          onPress={() => console.log('Sign in')}
          wrapperStyle={{
            marginBottom: appMargin.md,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: appMargin.lg,
          }}>
          <View
            style={{
              width: '35%',
              height: 1,
              backgroundColor: appColors.border,
            }}
          />
          <BodyLabel
            text="or login with"
            propStyle={{
              color: appColors.black,
            }}
          />
          <View
            style={{
              width: '35%',
              height: 1,
              backgroundColor: appColors.border,
            }}
          />
        </View>

        <View style={styles.altLogin}>
          <IconButton
            onPress={() => console.log('login with google..')}
            wrapperStyle={{width: '30%'}}
            icon={
              <Image
                source={appImages.fbIcon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            }
          />

          <IconButton
            onPress={() => console.log('login with google..')}
            wrapperStyle={{width: '30%'}}
            icon={
              <Image
                source={appImages.googleIcon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            }
          />

          <IconButton
            onPress={() => console.log('login with google..')}
            wrapperStyle={{width: '30%'}}
            icon={
              <Image
                source={appImages.appleIcon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            }
          />
        </View>

        <View style={styles.redirect}>
          <BodyLabel
            propStyle={{
              fontSize: appFontSize.bodyMain,
            }}>
            Don’t have an Account?{' '}
          </BodyLabel>

          <TextButton
            onPress={() => console.log('Sign up here')}
            buttonText="Sign up here"
            wrapperStyle={{
              alignItems: 'flex-end',
            }}
          />
        </View>
      </ScrollView>
    </WrapperLayout>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: appPadding['3xl'],
  },
  altLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: appMargin.xxl,
  },
  redirect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
