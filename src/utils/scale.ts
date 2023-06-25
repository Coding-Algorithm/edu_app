import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from 'react-native-responsive-screen';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

//
/* Horizontal - Vertical & Moderate Scaling */
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};

//
/* Width - Height Screen Reponsiveness */
const customWidth = 375;
const customHeight = 812;

export const wp = (value: number) => {
  const dimension = (value / customWidth) * 100;
  return wdp(`${dimension}%`);
};
export const hp = (value: number) => {
  const dimension = (value / customHeight) * 100;
  return hdp(`${dimension}%`);
};
