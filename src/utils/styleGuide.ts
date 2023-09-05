import {TextStyleAndroid} from 'react-native';
import {moderateScale} from './scale';

export const appColors = {
  primary: 'rgba(89, 86, 233, 1)',
  secondary: 'rgba(235, 235, 249, 1)',
  yellow: 'rgba(255, 220, 96, 1)',
  pink: 'rgba(255, 173, 173, 1)',
  blue: 'rgba(130, 206, 253, 1)',
  darkBlue: 'rgba(10, 88, 202, 1)',
  taintYellow: 'rgba(253, 253, 242, 1)',
  taintPink: 'rgba(253, 242, 250, 1)',
  taintBlue: 'rgba(238, 244, 255, 1)',
  taintDarkBlue: 'rgba(249, 245, 255, 1)',
  error: 'rgba(255, 59, 48, 1)',
  attention: 'rgba(255, 204, 0, 1)',
  success: 'rgba(52, 199, 89, 1)',
  info: 'rgba(0, 122, 255, 1)',
  white: 'rgba(255, 255, 255, 1)',
  bg: 'rgba(247, 248, 253, 1)',
  divider: 'rgba(241, 243, 246, 1)',
  text: 'rgba(138, 144, 162, 1)',
  primaryText: 'rgba(138, 144, 162, 1)',
  black: 'rgba(41, 41, 48, 1)',
  border: 'rgba(216, 218, 220, 1)',
};

export const appFontSize = {
  bodySmallest: moderateScale(12),
  bodySmall: moderateScale(14),
  bodyMain: moderateScale(16),
  bodyBig: moderateScale(18),
  h4: moderateScale(18),
  h3: moderateScale(20),
  h2: moderateScale(24),
  h1: moderateScale(28),
};


export const appFonts = {
  bold: 'DMSans-Bold',
  boldItalic: 'DMSans-BoldItalic',
  italic: 'DMSans-Italic',
  medium: 'DMSans-Medium',
  mediumItalic: 'DMSans-MediumItalic',
  regular: 'DMSans-Regular',
};

export const appBorder = {
  xsm: moderateScale(1),
  sm: moderateScale(2),
  md: moderateScale(4),
  lg: moderateScale(6),
  xl: moderateScale(8),
  xxl: moderateScale(10),
};

export const appBorderRadius = {
  xsm: moderateScale(5),
  sm: moderateScale(8),
  md: moderateScale(16),
};

const paddingBase = 5;
const marginBase = 6;

export const appPadding = {
  xsm: moderateScale(paddingBase),
  sm: moderateScale(paddingBase * 2),
  ssm: moderateScale(paddingBase * 2.9),
  md: moderateScale(paddingBase * 4),
  lg: moderateScale(paddingBase * 6),
  xl: moderateScale(paddingBase * 8),
  xxl: moderateScale(paddingBase * 10),
  '3xl': moderateScale(paddingBase * 20),
  '4xl': moderateScale(paddingBase * 25),
  '5xl': moderateScale(paddingBase * 30),
  '6xl': moderateScale(paddingBase * 40),
};

export const appMargin = {
  xsm: moderateScale(marginBase),
  sm: moderateScale(marginBase * 2),
  md: moderateScale(marginBase * 4),
  lg: moderateScale(marginBase * 6),
  xl: moderateScale(marginBase * 8),
  xxl: moderateScale(marginBase * 10),
  '3xl': moderateScale(marginBase * 20),
  '4xl': moderateScale(marginBase * 30),
  '5xl': moderateScale(marginBase * 40),
};
