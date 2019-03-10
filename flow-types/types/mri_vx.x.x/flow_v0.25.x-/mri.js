declare module "mri" {
  declare export default typeof mri;

  declare function mri(
    args: $ReadOnlyArray<string>,
    options?: mri$Options
  ): mri$Argv;

  declare var npm$namespace$mri: {
    prototype: typeof mri$prototype
  };
  declare var mri$prototype: {};

  /**
   * A string or array of strings
   */
  declare type mri$ArrayOrString = string | $ReadOnlyArray<string>;

  /**
   * An object with any keys whose values conform to a specific type
   */
  declare interface mri$DictionaryObject<T = any> {
    [key: string]: T;
  }

  declare interface mri$Options {
    /**
     * Additional aliases for specific flags
     */
    alias?: mri$DictionaryObject<mri$ArrayOrString>;

    /**
     * A flag or array of flags whose values are boolean
     */
    boolean?: mri$ArrayOrString;

    /**
     * Default values for flags
     */
    default?: mri$DictionaryObject<>;
    string?: mri$ArrayOrString;
    unknown?: (flag: string) => void;
  }

  declare type mri$Argv = {
    /**
     * anything after `--` or between options
     */
    _: $ReadOnlyArray<string>
  } & mri$DictionaryObject;
}
