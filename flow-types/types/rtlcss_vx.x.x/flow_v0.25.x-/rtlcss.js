declare module "rtlcss" {
  declare export interface MapOptions {
    scope: string;
    ignoreCase: boolean;
    greedy?: boolean;
  }
  declare export interface StringMap {
    name: string;
    priority: number;
    exclusive?: boolean;
    search: string | string[];
    replace: string | string[];
    options: MapOptions;
  }
  declare export interface ConfigOptions {
    /**
     * Applies to CSS rules containing no directional properties,
     * it will update the selector by applying String Map.
     */
    autoRename: boolean;

    /**
     * Ensures autoRename is applied only if pair exists.
     */
    autoRenameStrict: boolean;

    /**
     * An object map of disabled plugins directives,
     * where keys are plugin names and value are object
     * hash of disabled directives. e.g. {'rtlcss':{'config':true}}.
     */
    blacklist: { [key: string]: any };

    /**
     * Removes directives comments from output CSS.
     */
    clean: boolean;

    /**
     * Fallback value for String Map options.
     */
    greedy: boolean;

    /**
     * Applies String Map to URLs. You can also target specific node types using an object literal.
     * e.g. {'atrule': true, 'decl': false}.
     */
    processUrls: boolean | { [key: string]: any };

    /**
     * The default array of String Map.
     */
    stringMap: StringMap[];

    /**
     * When enabled, flips background-position expressed in length units using calc.
     */
    useCalc: boolean;
  }
  declare export interface HookOptions {
    /**
     * The function to be called before processing the CSS.
     */
    pre: () => void;

    /**
     * The function to be called after processing the CSS.
     */
    post: () => void;
  }

  /**
   * Creates a new RTLCSS instance, process the input and return its result.
   */
  declare export function process(
    css: string,
    options?: { [key: string]: any },
    plugins?: { [key: string]: any } | string[],
    hooks?: HookOptions
  ): string;

  /**
   * Creates a new instance of RTLCSS using the passed configuration object.
   */
  declare export function configure(
    config: ConfigOptions
  ): { [key: string]: any };
}
