declare module "pretty-format" {
  /**
   * Stringify any JavaScript value.
   */
  declare function prettyFormat(
    value: any,
    options?: prettyFormat$Options
  ): string;

  declare var npm$namespace$prettyFormat: {
    plugins: typeof prettyFormat$plugins
  };
  declare interface prettyFormat$Options {
    /**
     * Call `toJSON()` on passed object.
     */
    callToJSON?: boolean;

    /**
     * Escape special characters in regular expressions.
     */
    escapeRegex?: boolean;

    /**
     * Highlight syntax for terminal (works only with `ReactTestComponent` and `ReactElement` plugins.
     */
    highlight?: boolean;

    /**
     * Number of spaces for indentation.
     */
    indent?: number;

    /**
     * Print only this number of levels.
     */
    maxDepth?: number;

    /**
     * Print without whitespace.
     */
    min?: boolean;

    /**
     * plugins to serialize application-specific data types
     */
    plugins?: prettyFormat$Plugin[];

    /**
     * Print function names or just [Function].
     */
    printFunctionName?: boolean;

    /**
     * Syntax highlight theme.
     * Uses [ansi-styles colors](https://github.com/chalk/ansi-styles#colors) + `reset` for no color.
     */
    theme?: prettyFormat$Theme;
  }

  declare interface prettyFormat$Plugin {
    test(value: any): boolean;
    print(
      value: any,
      serialize: prettyFormat$Print,
      indent: prettyFormat$Indent,
      options: prettyFormat$Options,
      colors: prettyFormat$Colors
    ): string;
  }

  declare var prettyFormat$plugins: Record<
    | "AsymmetricMatcher"
    | "ConvertAnsi"
    | "HTMLElement"
    | "Immutable"
    | "ReactElement"
    | "ReactTestComponent",
    prettyFormat$Plugin
  >;

  declare type prettyFormat$Print = (value: any) => string;

  declare type prettyFormat$Indent = (value: string) => string;

  declare interface prettyFormat$Colors {
    comment: {
      close: string,
      open: string
    };
    content: {
      close: string,
      open: string
    };
    prop: {
      close: string,
      open: string
    };
    tag: {
      close: string,
      open: string
    };
    value: {
      close: string,
      open: string
    };
  }

  declare interface prettyFormat$Theme {
    comment?: string;
    content?: string;
    prop?: string;
    tag?: string;
    value?: string;
  }
  declare export default typeof prettyFormat;
}
