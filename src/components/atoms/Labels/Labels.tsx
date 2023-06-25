import {Text} from 'react-native';
import React from 'react';
import {appFontSize} from '../../../utils/styleGuide';
import type {PropsWithChildren} from 'react';

interface LabelProps {
  // children?: React.ReactNode;
  text?: string;
  propsStyle?: object;
}

export const HeaderOneLabel = ({
  propsStyle,
  text,
  children,
}: PropsWithChildren<LabelProps>) => {
  return (
    <Text style={[{fontSize: appFontSize.h1}, propsStyle]}>
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
