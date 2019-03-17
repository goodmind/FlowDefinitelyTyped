declare module "turndown" {
  declare class TurndownService {
    constructor(options?: TurndownService$Options): this;
    addRule(key: string, rule: TurndownService$Rule): this;
    keep(filter: TurndownService$Filter): this;
    remove(filter: TurndownService$Filter): this;
    use(plugins: TurndownService$Plugin | TurndownService$Plugin[]): this;
    escape(str: string): string;
    turndown(html: string | TurndownService$Node): string;
    options: TurndownService$Options;
    rules: TurndownService$Rules;
  }
  declare export default typeof TurndownService;

  declare interface TurndownService$Options {
    headingStyle?: "setext" | "atx";
    hr?: string;
    br?: string;
    bulletListMarker?: "-" | "+" | "*";
    codeBlockStyle?: "indented" | "fenced";
    emDelimiter?: "_" | "*";
    fence?: "```" | "~~~";
    strongDelimiter?: "__" | "**";
    linkStyle?: "inlined" | "referenced";
    linkReferenceStyle?: "full" | "collapsed" | "shortcut";
    keepReplacement?: TurndownService$ReplacementFunction;
    blankReplacement?: TurndownService$ReplacementFunction;
    defaultReplacement?: TurndownService$ReplacementFunction;
  }

  declare interface TurndownService$Rule {
    filter: TurndownService$Filter;
    replacement?: TurndownService$ReplacementFunction;
  }

  declare interface TurndownService$Rules {
    options: TurndownService$Options;
    array: TurndownService$Rule[];
    blankRule: TurndownService$ReplacementFunction;
    defaultRule: TurndownService$ReplacementFunction;
    keepReplacement: TurndownService$ReplacementFunction;
    add(key: TurndownService$Filter, rule: TurndownService$Rule): void;
    forEach(callback: (rule: TurndownService$Rule, index: number) => any): void;
    forNode(node: TurndownService$Node): TurndownService$Rule;
    keep(filter: TurndownService$Filter): void;
    remove(filter: TurndownService$Filter): void;
  }

  declare type TurndownService$Plugin = (service: TurndownService) => void;

  declare type TurndownService$Node = HTMLElement | Document | DocumentFragment;

  declare type TurndownService$Filter =
    | TurndownService$TagName
    | TurndownService$TagName[]
    | TurndownService$FilterFunction;

  declare type TurndownService$FilterFunction = (
    node: HTMLElement,
    options: TurndownService$Options
  ) => boolean;

  declare type TurndownService$ReplacementFunction = (
    content: string,
    node: TurndownService$Node,
    options: TurndownService$Options
  ) => string;

  declare type TurndownService$TagName = $Keys<HTMLElementTagNameMap>;
}
