declare module "find-java-home" {
  declare function findJavaHome(
    callback: (err: Error | void, home: string) => void
  ): void;

  declare function findJavaHome(
    options: {
      allowJre?: boolean
    },
    callback: (err: Error | void, home: string) => void
  ): void;

  declare var npm$namespace$findJavaHome: {
    __promisify__: typeof findJavaHome$__promisify__
  };
  declare function findJavaHome$__promisify__(options?: {
    allowJre?: boolean
  }): Promise<string>;

  declare module.exports: typeof findJavaHome;
}
