declare module "read-pkg-up" {
  declare var npm$namespace$ReadPkgUp: {
    sync: typeof ReadPkgUp$sync
  };
  declare function ReadPkgUp$sync(
    options: ReadPkgUp$Options & {
      normalize: false
    }
  ): {
    path: string,
    pkg: {
      [k: string]: any
    }
  };

  declare function ReadPkgUp$sync(
    options?: ReadPkgUp$Options
  ): {
    path: string,
    pkg: ReadPkgUp$Package
  };

  declare interface ReadPkgUp$Options {
    /**
     * Directory to start looking for a package.json file.
     * @default 'process.cwd()'
     */
    cwd?: string;

    /**
     * [Normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) the package data.
     * @default true
     */
    normalize?: boolean;
  }

  declare type ReadPkgUp$Package = normalize.Package;
  declare function ReadPkgUp(
    options: ReadPkgUp$Options & {
      normalize: false
    }
  ): Promise<{
    path: string,
    pkg: {
      [k: string]: any
    }
  }>;

  declare function ReadPkgUp(
    options?: ReadPkgUp$Options
  ): Promise<{
    path: string,
    pkg: normalize.Package
  }>;

  declare export default typeof ReadPkgUp;
}
