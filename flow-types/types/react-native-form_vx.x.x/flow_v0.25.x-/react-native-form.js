declare module "react-native-form" {
  import type { Component } from "react";

  import type { ViewProps } from "react-native";

  declare export type FormProps = {
    customFields?: {
      [key: string]: {
        callbackProp: string,
        controlled: boolean,
        valueProp: string
      }
    },
    ref: string
  } & ViewProps;

  declare export default class Form mixins Component<FormProps> {}
}
