declare interface NodeJS$Process {
  addListener(
    event: "deprecation",
    listener: (deprecationError: depd$depd$DeprecationError) => void
  ): this;
  emit(event: "deprecation", code: depd$depd$DeprecationError): boolean;
  on(
    event: "deprecation",
    listener: (deprecationError: depd$depd$DeprecationError) => void
  ): this;
  once(
    event: "deprecation",
    listener: (deprecationError: depd$depd$DeprecationError) => void
  ): this;
  prependListener(
    event: "deprecation",
    listener: (deprecationError: depd$depd$DeprecationError) => void
  ): this;
  prependOnceListener(
    event: "deprecation",
    listener: (deprecationError: depd$depd$DeprecationError) => void
  ): this;
  listeners(event: "deprecation"): depd$depd$DeprecationError[];
}
declare module "global" {
}
declare module "depd" {
  declare module.exports: typeof depd;

  declare function depd(namespace: string): depd$depd$Deprecate;

  declare interface depd$Deprecate {
    (message: string): void;
    function<T: Function>(fn: T, message?: string): T;
    property<T: { [key: string]: any }>(
      obj: T,
      prop: $Keys<T>,
      message: string
    ): void;
  }

  declare type depd$DeprecationError = {
    +name: "DeprecationError",
    namespace: string,
    stack: string
  } & Error;
}
