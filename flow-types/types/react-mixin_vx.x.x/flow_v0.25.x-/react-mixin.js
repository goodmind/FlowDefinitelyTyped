declare module "react-mixin" {
  import typeof * as React from "react";

  declare export interface reactMixin$ClassDecorator {
    <TFunction: Function>(target: TFunction): TFunction | void;
  }

  declare interface reactMixin$ReactMixin {
    decorate(mixin: React.Mixin<any, any>): reactMixin$ClassDecorator;
    onClass<S>(
      clazz: any,
      mixin: React.Mixin<any, any>
    ): React.ComponentClass<S>;
    <S>(clazz: any, mixin: React.Mixin<any, any>): React.ComponentClass<S>;
  }
  declare var reactMixin: reactMixin$reactMixin$ReactMixin;
  declare module.exports: typeof reactMixin;
}
