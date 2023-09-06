import {StyleSheet, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {appPadding} from '../utils/styleGuide';
import {SafeAreaView} from 'react-native-safe-area-context';

const WrapperLayout = ({
  children,
  bgColor,
}: PropsWithChildren<{bgColor: string}>) => {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: bgColor}]}>
      {children}
    </SafeAreaView>
  );
};

export default WrapperLayout;

const styles = StyleSheet.create({
  container: {
    paddingVertical: appPadding.sm,
    paddingHorizontal: appPadding.md,
    flex: 1,
    // justifyContent: 'center',
  },
});
