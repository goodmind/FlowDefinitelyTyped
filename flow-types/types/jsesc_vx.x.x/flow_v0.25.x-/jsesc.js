declare module "jsesc" {
  declare function jsesc(str: string, opts?: any): string;

  declare var npm$namespace$jsesc: {
    version: typeof jsesc$version
  };
  declare var jsesc$version: string;

  declare interface jsesc$Opts {
    quotes?: string;
    wrap?: boolean;
    es6?: boolean;
    escapeEverything?: boolean;
    compact?: boolean;
    indent?: string;
    json?: boolean;
  }
  declare module.exports: typeof jsesc;
}
