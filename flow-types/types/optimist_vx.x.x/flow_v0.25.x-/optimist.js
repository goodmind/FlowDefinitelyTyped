declare module "optimist" {
  declare interface optimist$Opt {
    alias?: string | string[];
    default?: any;
    demand?: string | number | string[];
    describe?: string;
    type?: string;
  }

  declare interface optimist$Parser {
    /**
     * Implicitly use process.argv array to construct the argv object
     */
    argv: any;

    /**
     * Pass in the process.argv yourself
     */
    (args: string[]): any;

    /**
     * Use .parse() to do the same thing as treating optimist as a function
     */
    parse(args: string[]): any;

    /**
     * Set key names as equivalent such that updates to a key will propagate to aliases and vice-versa.
     */
    alias(key: string, alias: string | string[]): optimist$Parser;

    /**
     * Take an object that maps keys to aliases.
     */
    alias(aliases: {
      [index: string]: string | string[]
    }): optimist$Parser;

    /**
     * Set argv[key] to value if no option was specified on process.argv
     */
    default(key: string, value: any): optimist$Parser;

    /**
     * Take an object that maps keys to default values
     */
    default(defaults: {
      [index: string]: any
    }): optimist$Parser;

    /**
     * Show the usage information and exit if key wasn't specified in process.argv
     */
    demand(key: string): optimist$Parser;

    /**
     * Demand at least as many non-option arguments, which show up in argv._
     */
    demand(key: number): optimist$Parser;

    /**
     * Demand each element in key
     */
    demand(key: string[]): optimist$Parser;

    /**
     * Describe a key for the generated usage information
     */
    describe(key: string, desc: string): optimist$Parser;

    /**
     * Take an object that maps keys to descriptions
     */
    describe(descriptions: {
      [index: string]: string
    }): optimist$Parser;

    /**
     * Instead of chaining together, e.g. optimist.alias().demand().default()...,
     * you can specify keys in opt for each of the chainable methods.
     */
    options(key: string, opt: optimist$Opt): optimist$Parser;

    /**
     * Take an object that maps keys to opt parameters
     */
    options(options: {
      [index: string]: optimist$Opt
    }): optimist$Parser;

    /**
     * Set a usage message to show which commands to use. Inside message,
     * the string $0 will get interpolated to the current script name or node
     * command for the present script similar to how $0 works in bash or perl.
     */
    usage(message: string): optimist$Parser;

    /**
     * Check that certain conditions are met in the provided arguments. If fn
     * throws or returns false, show the thrown error, usage information, and exit.
     */
    check(fn: (argv: any) => any): optimist$Parser;

    /**
     * Interpret key as a boolean. If a non-flag option follows key in process.argv,
     * that string won't get set as the value of key. If key never shows up as a
     * flag in process.arguments, argv[key] will be false.
     */
    boolean(key: string): optimist$Parser;

    /**
     * Interpret all the elements as booleans.
     */
    boolean(key: string[]): optimist$Parser;

    /**
     * Tell the parser logic not to interpret key as a number or boolean. This can be useful if you need to preserve leading zeros in an input.
     */
    string(key: string): optimist$Parser;

    /**
     * Interpret all the elements as strings
     */
    string(key: string[]): optimist$Parser;

    /**
     * Format usage output to wrap at columns many columns.
     */
    wrap(columns: number): optimist$Parser;

    /**
     * Return the generated usage string.
     */
    help(): string;

    /**
     * Print the usage data using fn for printing (defaults to console.error).
     */
    showHelp(fn?: (message: string) => void): void;
  }
  declare var optimist: optimist$optimist$Parser;
  declare module.exports: typeof optimist;
}
