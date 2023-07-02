/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  appBorder,
  appBorderRadius,
  appColors,
  appPadding,
} from '../../../utils/styleGuide';
import {InputPropsTypes} from '../../../types/components/InputsTypes';

export const OneLineInput = ({
  placeholder,
  text,
  setText,
  propsStyle,
  isTrue,
  rightIcon,
  leftIcon,
  isPassword = false,
}: InputPropsTypes) => {
  const [hidePassword, setHidePassword] = useState(false);

  const IconButton = ({
    iconElement,
  }: {
    iconElement?: {icon: JSX.Element; action: () => void};
  }) => {
    const onPressHandler = () => {
      isPassword ? setHidePassword(prev => !prev) : iconElement?.action();
    };

    console.log(isPassword);

    return (
      <TouchableOpacity onPress={onPressHandler}>
        {iconElement?.icon}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isTrue?.showLeftIcon ? <IconButton iconElement={leftIcon} /> : null}

      <TextInput
        style={[styles.textInput, propsStyle]}
        onChangeText={e => setText(e)}
        placeholder={placeholder}
        value={isPassword && hidePassword ? '*********' : text}
      />

      {isTrue?.showRightIcon ? <IconButton iconElement={rightIcon} /> : null}
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
