import {Text} from 'react-native';
import React from 'react';
import {appFontSize} from '../../../utils/styleGuide';
import type {PropsWithChildren} from 'react';

interface LabelProps {
  // children?: React.ReactNode;
  propsStyle?: object;
}

export const HeaderOneLabel = ({
  propsStyle,
  children,
}: PropsWithChildren<LabelProps>) => {
  return (
    <Text style={[{fontSize: appFontSize.h1}, propsStyle]}>{children}</Text>
  );
};

export const BodySmallLabel = ({
  propsStyle,
  children,
}: PropsWithChildren<LabelProps>) => {
  return (
    <Text style={[propsStyle, {fontSize: appFontSize.bodySmall}]}>
      {children}
    </Text>
  );
};
