declare module "serialize-error" {
  declare function SerializeError(
    error: any
  ): SerializeError$SerializeError$ErrorObject;

  declare interface SerializeError$ErrorObject {
    name: string;
    stack: string;
    message: string;
    [keyof: string]: string;
  }
  declare module.exports: typeof SerializeError;
}
