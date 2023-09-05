import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {appColors, appFontSize} from '../../../utils/styleGuide';
import type {PropsWithChildren} from 'react';

interface LabelProps {
  // children?: React.ReactNode;
  text?: string;
  propStyle?: object;
}

export const LabelHOC = ({
  LabelComp,
  type,
}: {
  LabelComp: JSX.Element;
  type: string;
}) => {
  const style = styles[`${type}` as keyof typeof styles];

  return <LabelComp />;
};

export const HeaderOneLabel = ({
  propStyle,
  text,
  children,
}: PropsWithChildren<LabelProps>) => {
  return (
    <Text style={[styles.headerLabelText, propStyle]}>
      {children ? children : text}
    </Text>
  );
};

export const HeaderFourLabel = ({
  propStyle,
  text,
  children,
}: PropsWithChildren<LabelProps>) => {
  return (
    <Text
      style={[styles.headerLabelText, propStyle, {fontSize: appFontSize.h4}]}>
      {children ? children : text}
    </Text>
  );
};

export const BodyLabel = ({
  propStyle,
  text,
  children,
}: PropsWithChildren<LabelProps>) => {
  return (
    <Text style={[{fontSize: appFontSize.bodySmall}, propStyle]}>
      {children ? children : text}
    </Text>
  );
};

const styles = StyleSheet.create({
  headerLabelText: {
    fontSize: appFontSize.h1,
    color: appColors.black,
    fontWeight: '700',
  },
});
