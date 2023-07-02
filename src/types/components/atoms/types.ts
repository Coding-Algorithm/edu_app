import type {
  ViewStyle,
  TextStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type ButtonPropsTypes = {
  onPress: () => void;
  wrapperStyle?: ViewStyle | TextStyle;
  icon?: JSX.Element;
  buttonText?: string;
};

export type InputPropsTypes = {
  placeholder?: string;
  text?: string | number | any;
  propsStyle?: object;
  setText: (e: string | number) => any;
  isTrue?: {
    showRightIcon?: boolean;
    showLeftIcon?: boolean;
  };
  rightIcon?: {icon: JSX.Element; action: () => void};
  leftIcon?: {icon: JSX.Element; action: () => void};
  isPassword?: boolean;
};

export type TextBoxPropsTypes = InputPropsTypes & {lineHeight: number};
