declare module 'node-getopt' {
        
/**
 * Type Script Declaration for node-getopt
 */
declare interface OptionMap {
[index: string]: string | string[] | boolean
} 
	
/**
 * Parsed options.
 */
declare class ParsedOption  {
argv: string[];
options: OptionMap;
constructor(argv: string[], options: OptionMap): this;
empty(): boolean
}
	declare interface EventCallback {
(args: string[], options: OptionMap): void
} 
	declare interface ErrorFunc {
(exception: Error): void
} 
	declare interface OptionConfigurationArray {
[index: number]: string[]
} 
	declare class Getopt  {
static HAS_ARGUMENT: boolean;
static NO_ARGUMENT: boolean;
static MULTI_SUPPORTED: boolean;
static SINGLE_ONLY: boolean;
static VERSION: string;

/**
 * options is a set of option. each option contains 3 fields.
 *     [short_name, long_name_with_definition, comment]
 *     Definition:
 *     * '=ARG':   has argument
 *     * '[=ARG]': has argument but optional
 *     * '+':      multiple option supported
 * 
 *     ARG can be replaced by any word.
 * @param options
 */
constructor(options: any[]): this;

/**
 * after parsing, trigger the action if optionName is found.
 * the 'this' in action will be the instance of Getopt.
 * @param name
 * @param cb
 */
on(name: string, cb: EventCallback): Getopt;
emit(name: string, cb: EventCallback): Getopt;

/**
 * parse argv
 * 
 * Returns: {argv: '...', options: {...}}
 */
parse(argv: string[]): ParsedOption;

/**
 * alias of parse(process.argv.slice(2))
 */
parse_system(): ParsedOption;
parseSystem(): ParsedOption;

/**
 * Set help template. the placeholders will be replaced by getopt.
 * 
 * Placeholders:
 *     * [[OPTIONS]] - The options list
 * 
 * Returns: String
 * @param help
 */
setHelp(help: string): Getopt;

/**
 * console.info(getopt.getHelp());
 */
showHelp(): Getopt;

/**
 * Get the help generated.
 */
getHelp(): string;

/**
 * set help template to HELP if HELP is not empty.
 * bind 'help' option to default action, show help and exit with 0.
 * @param help
 */
bindHelp(help?: string): Getopt;
getVersion(): string;
static getVersion(): string;

/**
 * when parse failed callback will be trigger. default is display error message and exit with 1.
 * @param errorFunc
 */
error(errorFunc: ErrorFunc): Getopt;

/**
 * equals new Getopt(options)
 * @param options
 */
static create(options: string[][]): Getopt
}
	declare module.exports: typeof Getopt

    }
