declare module "npm-registry-package-info" {
  declare var pkginfo: typeof npm$namespace$pkginfo;

  declare var npm$namespace$pkginfo: {
    factory: typeof pkginfo$factory
  };
  declare interface pkginfo$Options {
    /**
     * Boolean indicating whether to return only the latest package information from a registry.
     */
    latest?: boolean;

    /**
     * Array of package names (required).
     */
    packages: string[];

    /**
     * Registry port. Default: 443 (HTTPS) or 80 (HTTP).
     */
    port?: number;

    /**
     * Registry protocol. Default: 'https'.
     */
    protocol?: "http" | "https";

    /**
     * Registry. Default: 'registry.npmjs.org'.
     */
    registry?: string;
  }

  declare interface pkginfo$Data {
    data: any;
    meta: {
      failure: number,
      success: number,
      total: number
    };
  }

  declare type pkginfo$Callback = (
    error: Error | null,
    data: pkginfo$Data
  ) => void;

  declare function pkginfo$factory(
    opts: pkginfo$Options,
    callback: pkginfo$Callback
  ): () => void;

  declare function pkginfo(
    opts: pkginfo$Options,
    callback: pkginfo$Callback
  ): void;

  declare export default typeof pkginfo;
}
