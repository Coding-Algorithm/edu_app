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

export const appFontWeight = {
  // bold:
  // regular:
};

export const appBorder = {
  xsm: moderateScale(1),
  sm: moderateScale(2),
};

const paddingBase = 5;

export const appPadding = {
  xsm: moderateScale(paddingBase),
  sm: moderateScale(paddingBase * 2),
  md: moderateScale(paddingBase * 4),
  lg: moderateScale(paddingBase * 6),
  xl: moderateScale(paddingBase * 8),
  xxl: moderateScale(paddingBase * 10),
};
