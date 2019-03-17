declare module "ink-text-input" {
  import type { Component } from "ink";

  declare interface TextInputProps {
    focus?: boolean;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    placeholder?: string;
    value?: string;
  }
  declare class TextInput mixins Component<TextInputProps> {}
  declare export default typeof TextInput;
}
