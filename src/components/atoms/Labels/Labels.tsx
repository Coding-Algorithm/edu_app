import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {appColors, appFontSize, appFontWeight} from '../../../utils/styleGuide';
import type {PropsWithChildren} from 'react';

interface LabelProps {
  // children?: React.ReactNode;
  text?: string;
  propsStyle?: object;
}

export const LabelHOC = ({
  LabelComp,
  type,
}: {
  LabelComp: JSX.Element;
  type: string;
}) => {
  const style = styles[`${type}`];

  return <LabelComp />;
};

export const HeaderOneLabel = ({
  propsStyle,
  text,
  children,
}: PropsWithChildren<LabelProps>) => {
  return (
    <Text style={[styles.headerOneLabelText, propsStyle]}>
      {children ? children : text}
    </Text>
  );
};

export const BodySmallLabel = ({
  propsStyle,
  text,
  children,
}: PropsWithChildren<LabelProps>) => {
  return (
    <Text style={[propsStyle, {fontSize: appFontSize.bodySmall}]}>
      {children ? children : text}
    </Text>
  );
};

const styles = StyleSheet.create({
  headerOneLabelText: {
    fontSize: appFontSize.h1,
    color: appColors.black,
    fontWeight: `${appFontWeight.bolder}`,
  },
});
