declare module "css" {
    /**
     * CSS parser / stringifier for Node.js
     * css.parse options
     */
    declare export interface ParserOptions {
        /**
         * Silently fail on parse errors
         */
        silent?: boolean;

        /**
         * The path to the file containing css. Makes errors and source maps more helpful, by letting them know where code comes from.
         */
        source?: string;
    }

    /**
     * css.stringify options
     */
    declare export interface StringifyOptions {
        /**
         * The string used to indent the output. Defaults to two spaces.
         */
        indent?: string;

        /**
         * Omit comments and extraneous whitespace.
         */
        compress?: boolean;

        /**
         * Return a sourcemap along with the CSS output.
         * Using the source option of css.parse is strongly recommended
         * when creating a source map. Specify sourcemap: 'generator'
         * to return the SourceMapGenerator object instead of serializing the source map.
         */
        sourcemap?: string;

        /**
         * (enabled by default, specify false to disable)
         * Reads any source maps referenced by the input files
         * when generating the output source map. When enabled,
         * file system access may be required for reading the referenced source maps.
         */
        inputSourcemaps?: boolean;
    }

    /**
     * Error thrown during parsing.
     */
    declare export interface ParserError {
        /**
         * The full error message with the source position.
         */
        message?: string;

        /**
         * The error message without position.
         */
        reason?: string;

        /**
         * The value of options.source if passed to css.parse. Otherwise undefined.
         */
        filename?: string;
        line?: number;
        column?: number;

        /**
         * The portion of code that couldn't be parsed.
         */
        source?: string;
    }

    /**
     * Information about a position in the code.
     * The line and column numbers are 1-based: The first line is 1 and the first column of a line is 1 (not 0).
     */
    declare export interface Position {
        line?: number;
        column?: number;
    }

    /**
     * Base AST Tree Node.
     */
    declare export interface Node {
        /**
         * The possible values are the ones listed in the Types section on https://github.com/reworkcss/css page.
         */
        type?: string;

        /**
         * A reference to the parent node, or null if the node has no parent.
         */
        parent?: Node;

        /**
         * Information about the position in the source string that corresponds to the node.
         */
        position?: {
            start?: Position,
            end?: Position,

            /**
             * The value of options.source if passed to css.parse. Otherwise undefined.
             */
            source?: string,

            /**
             * The full source string passed to css.parse.
             */
            content?: string
        };
    }
    declare export type Rule = {
        /**
         * The list of selectors of the rule, split on commas. Each selector is trimmed from whitespace and comments.
         */
        selectors?: Array<string>,

        /**
         * Array of nodes with the types declaration and comment.
         */
        declarations?: Array<Declaration | Comment>
    } & Node;

    declare export type Declaration = {
        /**
         * The property name, trimmed from whitespace and comments. May not be empty.
         */
        property?: string,

        /**
         * The value of the property, trimmed from whitespace and comments. Empty values are allowed.
         */
        value?: string
    } & Node;

    /**
     * A rule-level or declaration-level comment. Comments inside selectors, properties and values etc. are lost.
     */
    declare export type Comment = {
        comment?: string
    } & Node;

    /**
     * The @charset at-rule.
     */
    declare export type Charset = {
        /**
         * The part following @charset.
         */
        charset?: string
    } & Node;

    /**
     * The @custom-media at-rule
     */
    declare export type CustomMedia = {
        /**
         * The ---prefixed name.
         */
        name?: string,

        /**
         * The part following the name.
         */
        media?: string
    } & Node;

    /**
     * The @document at-rule.
     */
    declare export type Document = {
        /**
         * The part following @document.
         */
        document?: string,

        /**
         * The vendor prefix in @document, or undefined if there is none.
         */
        vendor?: string,

        /**
         * Array of nodes with the types rule, comment and any of the at-rule types.
         */
        rules?: Array<Rule | Comment | AtRule>
    } & Node;

    /**
     * The @font-face at-rule.
     */
    declare export type FontFace = {
        /**
         * Array of nodes with the types declaration and comment.
         */
        declarations?: Array<Declaration | Comment>
    } & Node;

    /**
     * The @host at-rule.
     */
    declare export type Host = {
        /**
         * Array of nodes with the types rule, comment and any of the at-rule types.
         */
        rules?: Array<Rule | Comment | AtRule>
    } & Node;

    /**
     * The @import at-rule.
     */
    declare export type Import = {
        /**
         * The part following @import.
         */
        import?: string
    } & Node;

    /**
     * The @keyframes at-rule.
     */
    declare export type KeyFrames = {
        /**
         * The name of the keyframes rule.
         */
        name?: string,

        /**
         * The vendor prefix in @keyframes, or undefined if there is none.
         */
        vendor?: string,

        /**
         * Array of nodes with the types keyframe and comment.
         */
        keyframes?: Array<KeyFrame | Comment>
    } & Node;

    declare export type KeyFrame = {
        /**
         * The list of "selectors" of the keyframe rule, split on commas. Each “selector” is trimmed from whitespace.
         */
        values?: Array<string>,

        /**
         * Array of nodes with the types declaration and comment.
         */
        declarations?: Array<Declaration | Comment>
    } & Node;

    /**
     * The @media at-rule.
     */
    declare export type Media = {
        /**
         * The part following @media.
         */
        media?: string,

        /**
         * Array of nodes with the types rule, comment and any of the at-rule types.
         */
        rules?: Array<Rule | Comment | AtRule>
    } & Node;

    /**
     * The @namespace at-rule.
     */
    declare export type Namespace = {
        /**
         * The part following @namespace.
         */
        namespace?: string
    } & Node;

    /**
     * The @page at-rule.
     */
    declare export type Page = {
        /**
         * The list of selectors of the rule, split on commas. Each selector is trimmed from whitespace and comments.
         */
        selectors?: Array<string>,

        /**
         * Array of nodes with the types declaration and comment.
         */
        declarations?: Array<Declaration | Comment>
    } & Node;

    /**
     * The @supports at-rule.
     */
    declare export type Supports = {
        /**
         * The part following @supports.
         */
        supports?: string,

        /**
         * Array of nodes with the types rule, comment and any of the at-rule types.
         */
        rules?: Array<Rule | Comment | AtRule>
    } & Node;

    /**
     * All at-rules.
     */
    declare export type AtRule =
        | Charset
        | CustomMedia
        | Document
        | FontFace
        | Host
        | Import
        | KeyFrames
        | Media
        | Namespace
        | Page
        | Supports;

    /**
     * A collection of rules
     */
    declare export interface StyleRules {
        /**
         * Array of nodes with the types rule, comment and any of the at-rule types.
         */
        rules: Array<Rule | Comment | AtRule>;

        /**
         * Array of Errors. Errors collected during parsing when option silent is true.
         */
        parsingErrors?: Array<ParserError>;
    }

    /**
     * The root node returned by css.parse.
     */
    declare export type Stylesheet = {
        stylesheet?: StyleRules
    } & Node;

    /**
     * Accepts a CSS string and returns an AST object.
     * @param {string} code - CSS code.
     * @param {ParserOptions} options - CSS parser options.
     * @return {Stylesheet} AST object built using provides CSS code.
     */
    declare export function parse(
        code: string,
        options?: ParserOptions
    ): Stylesheet;

    /**
     * Accepts an AST object (as css.parse produces) and returns a CSS string.
     * @param {Stylesheet} stylesheet - AST tree.
     * @param {StringifyOptions} options - AST tree to string serializaiton options.
     * @return {string} CSS code.
     */
    declare export function stringify(
        stylesheet: Stylesheet,
        options?: StringifyOptions
    ): string;
}
