declare module "react-input-autosize" {
  import typeof * as React from "react";

  declare export type AutosizeInputProps = {
    inputClassName?: string,
    inputRef?: React.Ref<HTMLInputElement>,
    inputStyle?: React.CSSProperties,
    minWidth?: string | number,
    onAutosize?: (inputWidth: string | number) => void,
    placeholderIsMinWidth?: boolean
  } & React.InputHTMLAttributes<HTMLInputElement> &
    React.ClassAttributes<HTMLInputElement>;

  declare class AutosizeInput mixins React.Component<AutosizeInputProps> {
    getInput(): HTMLInputElement;
  }
  declare export default typeof AutosizeInput;
}
