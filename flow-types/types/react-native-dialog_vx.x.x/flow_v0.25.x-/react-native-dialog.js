declare module "react-native-dialog" {
  import type { Ref, PureComponent, Node } from "react";

  import type {
    ViewProps,
    TextProps,
    StyleProp,
    TextInputProps,
    ViewStyle
  } from "react-native";

  declare interface ButtonProps {
    label: string;

    /**
     * default:
     *       ios     #007ff9
     *       android #169689
     */
    color?: string;
    bold?: boolean;

    /**
     * default: false
     */
    disabled?: boolean;
    onPress: () => void;
  }
  declare interface ContainerProps {
    blurComponentIOS?: Node;
    children: React.Node[];

    /**
     * default: false
     */
    visible?: boolean;
  }
  declare interface TitleProps {
    children: string;
  }
  declare interface InputProps<T> {
    label?: string;
    textInputRef?: Ref<T>;
    wrapperStyle?: StyleProp<ViewStyle>;
  }
  declare interface DescriptionProps {
    children: string;
  }
  declare var Dialog: typeof npm$namespace$Dialog;

  declare var npm$namespace$Dialog: {
    Button: typeof Dialog$Button,
    Container: typeof Dialog$Container,
    Title: typeof Dialog$Title,
    Input: typeof Dialog$Input,
    Description: typeof Dialog$Description
  };
  declare class Dialog$Button
    mixins PureComponent<ButtonProps & ViewProps & TextProps> {}

  declare class Dialog$Container
    mixins PureComponent<ContainerProps & ViewProps> {}

  declare class Dialog$Title
    mixins PureComponent<TitleProps & ViewProps & TextProps> {}

  declare class Dialog$Input<T>
    mixins PureComponent<InputProps<T> & ViewProps & TextInputProps> {}

  declare class Dialog$Description
    mixins PureComponent<DescriptionProps & ViewProps & TextProps> {}
  declare export default typeof Dialog;
}
