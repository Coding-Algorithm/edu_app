import {ViewStyle} from 'react-native';

export type InputPropsTypes = {
  placeholder?: string;
  text?: string | number | any;
  propsStyle?: object;
  setText: (e: string | number) => any;
  isTrue?: {
    showRightIcon?: boolean;
    showLeftIcon?: boolean;
  };
  keyboardType: string;
  rightIcon?: {icon: JSX.Element; action: () => void; iconStyle: ViewStyle};
  leftIcon?: {icon: JSX.Element; action: () => void; iconStyle: ViewStyle};
  isPassword?: boolean;
};

export type TextBoxPropsTypes = InputPropsTypes & {lineHeight: number};

/*

- passing type input
- 



*/ 



