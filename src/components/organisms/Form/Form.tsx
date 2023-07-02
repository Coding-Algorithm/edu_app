import {StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {appColors, appFontSize, appMargin} from '../../../utils/styleGuide';
import {BodySmallLabel} from '../../atoms/Labels/Labels';
import {OneLineInput} from '../../atoms/Textboxes/Inputs';
import {InputPropsTypes} from '../../../types/components/InputsTypes';

interface FormInputPropType {
  errorText?: string;
  containerStyle?: object;
  // setText: Dispatch<SetStateAction<string | number>>;
  elementStore?: {
    rightIcon: {
      icon: JSX.Element;
      action: () => void;
    };
    leftIcon?: {
      icon: JSX.Element;
      action: () => void;
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
  elementStore,
  label,
  placeholder,
  isPassword = false,
}: FormInputPropType & InputPropsTypes) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <BodySmallLabel
        propsStyle={{color: appColors.black, marginBottom: appMargin.xsm}}>
        {label}
      </BodySmallLabel>

      <View>
        <OneLineInput
          isTrue={isTrue}
          rightIcon={elementStore?.rightIcon}
          leftIcon={elementStore?.leftIcon}
          text={text}
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
