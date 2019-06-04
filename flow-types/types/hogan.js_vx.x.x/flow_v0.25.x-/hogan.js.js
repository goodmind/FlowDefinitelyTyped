declare module "hogan.js" {
  declare export interface Context {
    [key: string]: any;
  }
  declare export interface SectionTags {
    o: string;
    c: string;
  }
  declare export interface HoganOptions {
    asString?: boolean;
    sectionTags?: $ReadOnlyArray<SectionTags>;
    delimiters?: string;
    disableLambda?: boolean;
  }
  declare export interface Token {
    tag: string;
    otag?: string;
    ctag?: string;
    i?: number;
    n?: string;
    text?: string;
  }
  declare export type Leaf = {
    end: number,
    nodes: Token[]
  } & Token;

  declare export type Tree = Leaf[];
  declare export interface Partials {
    [symbol: string]: HoganTemplate;
  }
  declare class HoganTemplate {
    /**
     * Renders the template to a string.
     * @param context - The data to render the template with.
     * @param partials - The partials to render the template with.
     * @param indent - The string to indent when rendering the template.
     * @returns A rendered template.
     */
    render(context: Context, partials?: Partials, indent?: string): string;
  }
  declare export { HoganTemplate as Template, HoganTemplate as template };

  declare export function compile(
    text: string,
    options?: HoganOptions & {
      asString: false
    }
  ): HoganTemplate;

  declare export function compile(
    text: string,
    options?: HoganOptions & {
      asString: true
    }
  ): string;

  /**
   * Compiles templates to HoganTemplate objects, which have a render method.
   * @param text - Raw mustache string to compile.
   * @param options - Options to use when compiling. See https://github.com/twitter/hogan.js#compilation-options.
   * @returns A HoganTemplate.
   */
  declare export function compile(
    text: string,
    options?: HoganOptions
  ): HoganTemplate | string;

  /**
   * Scans templates returning an array of found tokens.
   * @param text - Raw mustache string to scan.
   * @param delimiters - A string that overrides the default delimiters. Example: "<% %>".
   * @returns Found tokens.
   */
  declare export function scan(text: string, delimiters?: string): Token[];

  /**
   * Structures tokens into a tree.
   * @param tokens - An array of scanned tokens.
   * @param text - Unused pass undefined.
   * @param options - Options to use when parsing. See https://github.com/twitter/hogan.js#compilation-options.
   * @returns The tree structure of the given tokens.
   */
  declare export function parse(
    tokens: $ReadOnlyArray<Token>,
    text?: void,
    options?: HoganOptions
  ): Tree;
}
