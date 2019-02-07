declare module "envify" {
  declare var envify: (
    file: string,
    environment: {
      [name: string]: any
    }
  ) => NodeJS.ReadWriteStream;
  declare module.exports: typeof envify;
}
declare module "envify/custom" {
  declare function envify(environment: {
    [name: string]: any
  }): (
    file: string,
    environment: {
      [name: string]: any
    }
  ) => NodeJS.ReadWriteStream;

  declare module.exports: typeof envify;
}
