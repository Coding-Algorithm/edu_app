import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonPropsTypes} from '../../../types/components/atoms/types';
import {
  appBorder,
  appBorderRadius,
  appColors,
  appFontSize,
  appPadding,
} from '../../../utils/styleGuide';

export const FullWidthButton = ({
  onPress,
  buttonText = 'Sign in',
  wrapperStyle,
}: ButtonPropsTypes) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.fullWidthButtonContainer, wrapperStyle]}>
      <Text style={styles.fullWidthButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export const IconButton = ({onPress, wrapperStyle, icon}: ButtonPropsTypes) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.IconButton, wrapperStyle]}>
      {icon}
    </TouchableOpacity>
  );
};

export const TextButton = ({
  onPress,
  wrapperStyle,
  buttonText,
}: ButtonPropsTypes) => {
  return (
    <TouchableOpacity onPress={onPress} style={wrapperStyle}>
      <Text style={styles.textButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fullWidthButtonContainer: {
    width: '100%',
    paddingVertical: appPadding.md,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.primary,
    borderRadius: appBorderRadius.sm,
  },
  fullWidthButtonText: {
    color: appColors.white,
    fontSize: appFontSize.h4,
    fontWeight: '700',
  },

  IconButton: {
    paddingVertical: appPadding.ssm,
    // paddingHorizontal: appPadding.xl,
    borderWidth: appBorder.sm,
    borderColor: appColors.border,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: appBorderRadius.sm,
  },
  textButtonText: {
    color: appColors.primary,
    fontSize: appFontSize.h4,
    fontWeight: '700',
  },
});
