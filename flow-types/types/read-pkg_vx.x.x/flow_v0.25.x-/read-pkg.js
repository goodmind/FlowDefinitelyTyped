declare module "read-pkg" {
  declare var npm$namespace$ReadPkg: {
    sync: typeof ReadPkg$sync
  };
  declare function ReadPkg$sync(
    path: string,
    options: ReadPkg$Options & {
      normalize: false
    }
  ): {
    [k: string]: any
  };

  declare function ReadPkg$sync(
    options: ReadPkg$Options & {
      normalize: false
    }
  ): {
    [k: string]: any
  };

  declare function ReadPkg$sync(options?: ReadPkg$Options): normalize.Package;

  declare function ReadPkg$sync(
    path?: string,
    options?: ReadPkg$Options
  ): normalize.Package;

  declare interface ReadPkg$Options {
    /**
     * [Normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) the package data.
     * @default true
     */
    normalize?: boolean;
  }

  declare type ReadPkg$Package = normalize.Package;
  declare function ReadPkg(
    path: string,
    options: ReadPkg$Options & {
      normalize: false
    }
  ): Promise<{
    [k: string]: any
  }>;

  declare function ReadPkg(
    options: ReadPkg$Options & {
      normalize: false
    }
  ): Promise<{
    [k: string]: any
  }>;

  declare function ReadPkg(
    options?: ReadPkg$Options
  ): Promise<normalize.Package>;

  declare function ReadPkg(
    path?: string,
    options?: ReadPkg$Options
  ): Promise<normalize.Package>;

  declare export default typeof ReadPkg;
}
