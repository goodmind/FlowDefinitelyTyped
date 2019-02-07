declare interface Mixto$IMixinStatic {
  includeInto(constructor: any): void;
  extend(object: any): void;
}
declare module "mixto" {
  declare var _tmp: Mixto$Mixto$IMixinStatic;
  declare module.exports: typeof _tmp;
}
