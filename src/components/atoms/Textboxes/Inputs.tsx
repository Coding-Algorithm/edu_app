import {StyleSheet, TextInput, Text, View} from 'react-native';
import React from 'react';
import {BodySmallLabel} from '../Labels/Labels';
import {appBorder, appPadding} from '../../../utils/styleGuide';

const OneLineInput = () => {
  return (
    <View style={styles.container}>
      <BodySmallLabel>Password</BodySmallLabel>
      <TextInput></TextInput>

      {/* error display */}
      <Text></Text>
    </View>
  );
};

export default OneLineInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: appPadding.sm,
    borderRadius: appBorder.xsm,
  },
});
