declare module "duplicate-package-checker-webpack-plugin" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof DuplicatePackageCheckerWebpackPlugin;

  declare class DuplicatePackageCheckerWebpackPlugin mixins Plugin {
    constructor(
      options?: DuplicatePackageCheckerWebpackPlugin$DuplicatePackageCheckerWebpackPlugin$Options
    ): this;
  }

  /**
   * The properties of the instance of a package
   */
  declare interface DuplicatePackageCheckerWebpackPlugin$PackageInstanceProperties {
    /**
     * The name of the package
     */
    name: string;

    /**
     * The version of the package
     */
    version: string;

    /**
     * Absolute path to the package
     */
    path: string;

    /**
     * Absolute path to the module that requested the package
     */
    issuer?: string;
  }

  /**
   * The configurable options for the plugin
   */
  declare interface DuplicatePackageCheckerWebpackPlugin$Options {
    /**
     * Also show module that is requiring each duplicate package (default: false)
     */
    verbose?: boolean;

    /**
     * Emit errors instead of warnings (default: false)
     */
    emitError?: boolean;

    /**
     * Show help message if duplicate packages are found (default: true)
     */
    showHelp?: boolean;

    /**
     * Warn also if major versions differ (default: true)
     */
    strict?: boolean;

    /**
     * Exclude instances of packages from the results.
     * If all instances of a package are excluded, or all instances except one,
     * then the package is no longer considered duplicated and won't be emitted as a warning/error.
     * @param instance The instance of a package being evaluated for exclusion.
     * @returns true to exclude the instance, false otherwise
     */
    exclude?: (
      instance: DuplicatePackageCheckerWebpackPlugin$PackageInstanceProperties
    ) => boolean;
  }
}
