import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {HeaderFourLabel} from '../../atoms/Labels/Labels';
import {appColors, appMargin, appPadding} from '../../../utils/styleGuide';
import {useNavigation} from '@react-navigation/native';

const GeneralHeader = ({
  title,
  icon,
  onPress,
}: {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => any;
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => onPress()}>
        <Image
          source={icon}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </TouchableOpacity>

      <HeaderFourLabel>{title}</HeaderFourLabel>
    </View>
  );
};

export default GeneralHeader;

const styles = StyleSheet.create({
  header: {
    paddingRight: '35%',
    marginBottom: appMargin.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: appPadding.ssm,
    borderBottomWidth: 1,
    borderBottomColor: appColors.divider,
  },
});
