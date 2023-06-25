import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {appBorder, appBorderRadius, appColors, appPadding} from '../../../utils/styleGuide';
import {appImages} from '../../../assets/images';

interface OneLineInputProps {
  placeholder?: string;
  text?: string | number | any;
  propsStyle?: object;
  setText: (e: string | number) => any;
  isTrue: {
    showRightIcon: boolean;
  };
  rightIcon: JSX.Element;
  // isReDefine?: {
  //   onChangeText?: true;
  // };
  // reDefine?: {
  //   onChangeText?: () => void;
  // };
}

export const OneLineInput = ({
  placeholder,
  text,
  setText,
  propsStyle,
  isTrue,
  rightIcon,
}: // isReDefine,
// reDefine,
// setText,
OneLineInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, propsStyle]}
        onChangeText={e => setText(e)}
        placeholder={placeholder}
        value={text}
      />

      {isTrue?.showRightIcon ? rightIcon : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: appPadding.xsm,
    borderColor: appColors.secondary,
    borderWidth: appBorder.sm,
    borderRadius: appBorderRadius.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '80%',
  },
});
