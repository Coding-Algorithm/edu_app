import {StyleSheet, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {appPadding} from '../utils/styleGuide';

const WrapperLayout = ({children}: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

export default WrapperLayout;

const styles = StyleSheet.create({
  container: {
    padding: appPadding.sm,
    flex: 1,
    justifyContent: 'center',
  },
});
