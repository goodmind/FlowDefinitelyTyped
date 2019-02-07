declare module "react-icon-base" {
  import typeof * as React from "react";

  declare export type IconBaseProps = {
    size?: string | number,
    style?: any,
    color?: string
  } & React.SVGProps<React.ReactSVGElement>;

  declare export default class IconBaseClass
    mixins React.Component<IconBaseProps> {}
}
