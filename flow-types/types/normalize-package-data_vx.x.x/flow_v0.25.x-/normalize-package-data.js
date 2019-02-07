declare module "normalize-package-data" {
  declare module.exports: typeof normalize;

  declare function normalize(
    data: normalize$normalize$Input,
    warn?: normalize$normalize$WarnFn,
    strict?: boolean
  ): void;

  declare function normalize(
    data: normalize$normalize$Input,
    strict?: boolean
  ): void;

  declare type normalize$WarnFn = (msg: string) => void;

  declare interface normalize$Input {
    [k: string]: any;
  }

  declare interface normalize$Person {
    name?: string;
    email?: string;
    url?: string;
  }

  declare interface normalize$Package {
    [k: string]: any;
    name: string;
    version: string;
    files?: string[];
    bin?: {
      [k: string]: string
    };
    man?: string[];
    keywords?: string[];
    author?: normalize$Person;
    maintainers?: normalize$Person[];
    contributors?: normalize$Person[];
    bundleDependencies?: {
      [name: string]: string
    };
    dependencies?: {
      [name: string]: string
    };
    devDependencies?: {
      [name: string]: string
    };
    optionalDependencies?: {
      [name: string]: string
    };
    description?: string;
    engines?: {
      [type: string]: string
    };
    license?: string;
    repository?: {
      type: string,
      url: string
    };
    bugs?:
      | {
          url: string,
          email?: string
        }
      | {
          url?: string,
          email: string
        };
    homepage?: string;
    scripts?: {
      [k: string]: string
    };
    readme: string;
    _id: string;
  }
}
