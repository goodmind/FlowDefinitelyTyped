declare module "react-native-qrcode" {
  import typeof * as React from "react";

  declare export default class QRCode
    mixins React.Component<QRCodeProperties> {}
  declare export interface QRCodeProperties {
    value?: string;
    size?: number;
    bgColor?: string;
    fgColor?: string;
  }
}
