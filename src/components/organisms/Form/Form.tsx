import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {appColors, appFontSize, appMargin} from '../../../utils/styleGuide';
import {BodyLabel} from '../../atoms/Labels/Labels';
import {OneLineInput} from '../../atoms/Textboxes/Inputs';
import {InputPropsTypes} from '../../../types/components/InputsTypes';

interface FormInputPropType {
  errorText?: string;
  containerStyle?: object;
  // setText: Dispatch<SetStateAction<string | number>>;
  keyboardType: string;
  elementStore?: {
    rightIcon: {
      icon: JSX.Element;
      action: () => void;
      iconStyle: ViewStyle;
    };
    leftIcon?: {
      icon: JSX.Element;
      action: () => void;
      iconStyle: ViewStyle;
    };
  };
  label: string;
  placeholder: string;
}

const FormInput = ({
  text,
  errorText,
  setText,
  containerStyle,
  isTrue,
  keyboardType,
  elementStore,
  label,
  placeholder,
  isPassword = false,
}: FormInputPropType & InputPropsTypes) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <BodyLabel
        propStyle={{color: appColors.black, marginBottom: appMargin.xsm}}>
        {label}
      </BodyLabel>

      <View>
        <OneLineInput
          isTrue={isTrue}
          rightIcon={elementStore?.rightIcon}
          leftIcon={elementStore?.leftIcon}
          text={text}
          keyboardType={keyboardType}
          setText={setText}
          placeholder={placeholder}
          isPassword={isPassword}
        />
      </View>

      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  errorText: {
    color: appColors.error,
    fontSize: appFontSize.bodySmallest,
  },
});
