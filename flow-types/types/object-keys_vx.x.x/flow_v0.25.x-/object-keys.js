declare module "object-keys" {
  declare function objectKeys(object: { [key: string]: any }): string[];

  declare var npm$namespace$objectKeys: {
    shim: typeof objectKeys$shim
  };
  declare function objectKeys$shim(): typeof objectKeys;

  declare module.exports: typeof objectKeys;
}
