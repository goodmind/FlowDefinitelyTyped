declare module "react-better-password" {
  import typeof * as React from "react";

  declare export interface PasswordProps {
    className?: string;
    mask?: "•" | string;
    onChange?: (value: string) => void;
    placeholder?: string;
    show?: boolean;
    timeout?: number;
    value?: string;
  }
  declare export default class Password mixins React.Component<PasswordProps> {}
}
