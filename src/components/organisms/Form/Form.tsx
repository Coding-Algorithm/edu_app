import {StyleSheet, Text, View, Image} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {
  appBorder,
  appColors,
  appFontSize,
  appMargin,
  appPadding,
} from '../../../utils/styleGuide';
import {BodySmallLabel} from '../../atoms/Labels/Labels';
import {OneLineInput} from '../../atoms/Textboxes/Inputs';
import {appImages} from '../../../assets/images';

interface FormInputPropType {
  text: string | number;
  errorText?: string;
  containerStyle?: object;
  setText: Dispatch<SetStateAction<string | number>>;
  isTrue: {
    showRightIcon: boolean;
  };
  elementStore: {
    rightIcon: JSX.Element;
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
}: FormInputPropType) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <BodySmallLabel
        propsStyle={{color: appColors.black, marginBottom: appMargin.xsm}}>
        {label}
      </BodySmallLabel>

      <View>
        <OneLineInput
          isTrue={isTrue}
          rightIcon={elementStore.rightIcon}
          text={text}
          setText={setText}
          placeholder={placeholder}
        />
      </View>

      {/* error display */}
      <Text style={styles.errorText}>{errorText}</Text>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // padding: appPadding.sm,
  },
  errorText: {
    color: appColors.error,
    fontSize: appFontSize.bodySmallest,
  },
});
