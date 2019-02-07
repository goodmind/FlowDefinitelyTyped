declare module "command-line-args" {
  /**
   * Returns an object containing option values parsed from the command line. By default it parses the global `process.argv` array.
   * Parsing is strict by default. To be more permissive, enable `partial` or `stopAtFirstUnknown` modes.
   */
  declare function commandLineArgs(
    optionDefinitions: commandLineArgs$commandLineArgs$OptionDefinition[],
    options?: commandLineArgs$commandLineArgs$ParseOptions
  ): commandLineArgs$commandLineArgs$CommandLineOptions;

  declare interface commandLineArgs$CommandLineOptions {
    /**
     * Command-line arguments not parsed by `commandLineArgs`.
     */
    _unknown?: string[];
    [propName: string]: any;
  }

  declare interface commandLineArgs$ParseOptions {
    /**
     * An array of strings which if present will be parsed instead of `process.argv`.
     */
    argv?: string[];

    /**
     * If `true`, `commandLineArgs` will not throw on unknown options or values, instead returning them in the `_unknown` property of the output.
     */
    partial?: boolean;

    /**
     * If `true`, `commandLineArgs` will not throw on unknown options or values. Instead, parsing will stop at the first unknown argument
     * and the remaining arguments returned in the `_unknown` property of the output. If set, `partial: true` is implied.
     */
    stopAtFirstUnknown?: boolean;

    /**
     * If `true`, options with hypenated names (e.g. `move-to`) will be returned in camel-case (e.g. `moveTo`).
     */
    camelCase?: boolean;
  }

  declare interface commandLineArgs$OptionDefinition {
    /**
     * The long option name.
     */
    name: string;

    /**
     * A setter function (you receive the output from this) enabling you to be specific about the type and value received. Typical values
     * are `String` (the default), `Number` and `Boolean` but you can use a custom function. If no option value was set you will receive `null`.
     */
    type?: (input: string) => any;

    /**
     * A getopt-style short option name. Can be any single character except a digit or hyphen.
     */
    alias?: string;

    /**
     * Set this flag if the option accepts multiple values. In the output, you will receive an array of values each passed through the `type` function.
     */
    multiple?: boolean;

    /**
     * Identical to `multiple` but with greedy parsing disabled.
     */
    lazyMultiple?: boolean;

    /**
     * Any values unaccounted for by an option definition will be set on the `defaultOption`. This flag is typically set
     * on the most commonly-used option to enable more concise usage.
     */
    defaultOption?: boolean;

    /**
     * An initial value for the option.
     */
    defaultValue?: any;

    /**
     * One or more group names the option belongs to.
     */
    group?: string | string[];
  }
  declare module.exports: typeof commandLineArgs;
}
