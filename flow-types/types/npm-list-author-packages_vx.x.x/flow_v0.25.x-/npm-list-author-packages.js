declare module "npm-list-author-packages" {
  declare var list: typeof npm$namespace$list;

  declare var npm$namespace$list: {
    factory: typeof list$factory
  };
  declare interface list$Options {
    /**
     * registry port. Default: 443 (HTTPS) or 80 (HTTP).
     */
    port?: 443 | 80;

    /**
     * registry protocol. Default: 'https'.
     */
    protocol?: "http" | "https";

    /**
     * registry. Default: 'registry.npmjs.org'.
     */
    registry?: string;

    /**
     * author username (required).
     */
    username: string;
  }

  declare type list$Callback = (error: Error | null, data: string[]) => void;

  declare function list$factory(
    opts: list$Options,
    callback: list$Callback
  ): () => void;

  declare function list(opts: list$Options, callback: list$Callback): void;

  declare export default typeof list;
}
