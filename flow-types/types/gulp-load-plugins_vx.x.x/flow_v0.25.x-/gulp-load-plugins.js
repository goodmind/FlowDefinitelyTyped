declare module "gulp-load-plugins" {
  declare interface IOptions {
    /**
     * the glob(s) to search for, default ['gulp-*', 'gulp.*']
     */
    pattern?: string[];

    /**
     * where to find the plugins, searched up from process.cwd(), default 'package.json'
     */
    config?: string;

    /**
     * which keys in the config to look within, default ['dependencies', 'devDependencies', 'peerDependencies']
     */
    scope?: string[];

    /**
     * what to remove from the name of the module when adding it to the context, default /^gulp(-|\.)/
     */
    replaceString?: RegExp;

    /**
     * if true, transforms hyphenated plugin names to camel case, default true
     */
    camelize?: boolean;

    /**
     * whether the plugins should be lazy loaded on demand, default true
     */
    lazy?: boolean;

    /**
     * a mapping of plugins to rename, the key being the NPM name of the package, and the value being an alias you define
     */
    rename?: IPluginNameMappings;
  }
  declare interface IPluginNameMappings {
    [npmPackageName: string]: string;
  }

  /**
   * Loads in any gulp plugins and attaches them to an object, freeing you up from having to manually require each gulp plugin.
   */
  declare function gulpLoadPlugins<T: IGulpPlugins>(options?: IOptions): T;

  declare export default typeof gulpLoadPlugins;
}

/**
 * Extend this interface to use Gulp plugins in your gulpfile.js
 */
declare interface IGulpPlugins {}
