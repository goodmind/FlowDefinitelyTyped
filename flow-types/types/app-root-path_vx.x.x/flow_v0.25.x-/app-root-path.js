declare module "app-root-path" {
  declare interface RootPath {
    /**
     * Application root directory absolute path
     * @type {string}
     */
    path: string;

    /**
     * Resolves relative path from root to absolute path
     * @param {string} pathToModule
     * @returns {string}
     */
    resolve(pathToModule: string): string;

    /**
     * Resolve module by relative addressing from root
     * @param {string} pathToModule
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
     */
    require(pathToModule: string): any;

    /**
     * Explicitly set root path
     * @param {string} explicitlySetPath
     */
    setPath(explicitlySetPath: string): void;
    toString(): string;
  }
  declare var RootPath: RootPath;
  declare module.exports: typeof RootPath;
}
