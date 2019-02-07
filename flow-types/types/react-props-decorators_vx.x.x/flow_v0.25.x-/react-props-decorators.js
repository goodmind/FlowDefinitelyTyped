declare module "react-props-decorators" {
  import typeof * as React from "react";

  declare export interface ClassDecorator {
    <TFunction: Function>(target: TFunction): TFunction | void;
  }
  declare var propTypes: (map: React.ValidationMap<any>) => ClassDecorator;
  declare var defaultProps: (defaultProps: any) => ClassDecorator;
  declare export { propTypes, defaultProps };
}
