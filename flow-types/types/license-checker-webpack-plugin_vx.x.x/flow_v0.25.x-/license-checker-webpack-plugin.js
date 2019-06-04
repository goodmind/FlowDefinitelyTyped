declare module "license-checker-webpack-plugin" {
  import type { Plugin } from "webpack";

  declare class LicenseCheckerWebpackPlugin mixins Plugin {
    constructor(options?: $Shape<LicenseCheckerWebpackPlugin$Options>): this;
  }
  declare interface LicenseCheckerWebpackPlugin$Dependency {
    name: string;
    version: string;
    repository: string;
    licenseName: string;
    licenseText: string;
  }

  declare interface LicenseCheckerWebpackPlugin$Options {
    /**
     * Regular expression that matches the file paths of dependencies to check.
     */
    filter: RegExp;

    /**
     * SPDX expression with allowed licenses.
     *
     * Default: `"(Apache-2.0 OR BSD-2-Clause OR BSD-3-Clause OR MIT)"`
     */
    allow: string;

    /**
     * Array of dependencies to ignore, in the format `["<dependency name>@<version range>"]`.
     * For example, `["assignment@^2.0.0"]`.
     *
     * Default: `[]`
     */
    ignore: string[];

    /**
     * Object of dependencies to override, in the format `{"<dependency name>@<version range>": { ... }}`.
     * For example, `{"assignment@^2.0.0": { licenseName: "MIT" }}`.
     *
     * Default: `{}`
     */
    override: Record<string, $Shape<LicenseCheckerWebpackPlugin$Dependency>>;

    /**
     * Whether to emit errors instead of warnings.
     *
     * Default: `false`
     */
    emitError: boolean;

    /**
     * Path to a `.ejs` template, or function that will generate the contents
     * of the third-party notices file.
     */
    outputWriter:
      | string
      | ((dependencies: LicenseCheckerWebpackPlugin$Dependency[]) => string);

    /**
     * Name of the third-party notices file with all licensing information.
     *
     * Default: `"ThirdPartyNotices.txt"`
     */
    outputFilename: string;
  }
  declare export default typeof LicenseCheckerWebpackPlugin;
}
