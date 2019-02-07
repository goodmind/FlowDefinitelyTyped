declare module "webpack-subresource-integrity" {
  import type { Plugin } from "webpack";

  declare interface WebpackSubresourceIntegrityPlugin$Options {
    /**
     * Default value: true
     * When this value is falsy, the plugin doesn't run and no integrity values are calculated. It is recommended to disable the plugin in development mode.
     */
    enabled?: boolean;

    /**
     * An array of strings, each specifying the name of a hash function to be used for calculating integrity hash values. For example, ['sha256', 'sha512'].
     */
    hashFuncNames: string[];
  }
  declare class WebpackSubresourceIntegrityPlugin mixins Plugin {
    constructor(
      options?: WebpackSubresourceIntegrityPlugin$WebpackSubresourceIntegrityPlugin$Options
    ): this;
  }
  declare module.exports: typeof WebpackSubresourceIntegrityPlugin;
}
