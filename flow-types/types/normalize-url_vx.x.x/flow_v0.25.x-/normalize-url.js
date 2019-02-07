declare module "normalize-url" {
  declare interface normalizeUrl$Options {
    defaultProtocol?: string;
    forceHttp?: boolean;
    forceHttps?: boolean;
    normalizeProtocol?: boolean;
    normalizeHttps?: boolean;
    sortQueryParameters?: boolean;
    stripFragment?: boolean;
    stripHash?: boolean;
    stripWWW?: boolean;
    removeQueryParameters?: Array<RegExp | string>;
    removeTrailingSlash?: boolean;
    removeDirectoryIndex?: Array<RegExp | string>;
  }
  declare function normalizeUrl(
    url: string,
    options?: normalizeUrl$normalizeUrl$Options
  ): string;

  declare module.exports: typeof normalizeUrl;
}
