import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import FormInput from '../../organisms/Form/Form';
import {HeaderFourLabel, HeaderOneLabel} from '../../atoms/Labels/Labels';
import GeneralHeader from '../../organisms/Header/Header';
import {appImages} from '../../../assets/images';
import {appColors, appMargin} from '../../../utils/styleGuide';

export const AuthCode = ({
  code,
  setCode,
}: {
  code: string;
  setCode: React.Dispatch<string>;
}) => {
  const inputRef = useRef<TextInputProps | null>();

  const loopArray = ['', '', '', '', ''];

  return (
    <>
      <HeaderOneLabel propStyle={{marginBottom: appMargin.sm}}>
        Authentication code
      </HeaderOneLabel>

      <HeaderFourLabel
        propStyle={{
          color: appColors.text,
          fontWeight: '400',
          marginBottom: appMargin.lg,
        }}>
        We have sent a verification code to your mail
        <Text style={{color: appColors.black, fontWeight: '600'}}>
          {' '}
          prytula22@gmail.com
        </Text>
      </HeaderFourLabel>

      <TextInput
        style={{width: 0, height: 0}}
        ref={inputRef}
        onChangeText={e => (e.length <= 5 ? setCode(e) : null)}
      />

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: appMargin.md,
        }}
        onPress={() => inputRef.current?.focus()}>
        {loopArray.map((el, index) => {
          return (
            <View
              key={index}
              style={{
                width: '18%',
                height: 65,
                backgroundColor: appColors.bg,
                borderWidth: 1,
                borderColor:
                  code.length === index
                    ? appColors.primary
                    : appColors.secondary,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <HeaderFourLabel>{code[index]}</HeaderFourLabel>
            </View>
          );
        })}
      </TouchableOpacity>
    </>
  );
};

export const EnterEmail = ({
  email,
  setText,
}: {
  email: string;
  setText: React.Dispatch<string>;
}) => {
  return (
    <View>
      <HeaderOneLabel propStyle={{marginBottom: appMargin.sm}}>
        Please enter you email
      </HeaderOneLabel>

      <HeaderFourLabel
        propStyle={{
          color: appColors.text,
          fontWeight: '400',
          marginBottom: appMargin.xxl,
        }}>
        We will send you a confirmation email
      </HeaderFourLabel>

      <FormInput
        label="Email Address"
        keyboardType="default"
        text={email}
        placeholder="hello@example.c"
        setText={e => setText(e)}
        containerStyle={{marginBottom: appMargin.md}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
