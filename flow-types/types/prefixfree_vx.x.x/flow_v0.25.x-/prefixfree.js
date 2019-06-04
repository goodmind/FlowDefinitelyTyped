declare module "prefixfree" {
  declare type StyleFix$StyleFixer = (
    css: string,
    raw: boolean,
    element: Element
  ) => string;
  declare interface StyleFix {
    fix: StyleFix$StyleFixer;
    fixers?: StyleFix$StyleFixer[];
    optIn: boolean;
    camelCase(str: string): string;
    deCamelCase(str: string): string;
    link(link: HTMLLinkElement): void;
    process(): void;
    register(fixer: StyleFix$StyleFixer, index?: number): void;
    styleAttribute(element: ElementCSSInlineStyle): void;
    styleElement(style: HTMLStyleElement): void;
  }
  declare var StyleFix: StyleFix;

  /**
   * The known prefixes used for CSS properties.
   */
  declare type PrefixFree$KnownPrefixCSS =
    | "-moz-"
    | "-ms-"
    | "-o-"
    | "-webkit-";

  /**
   * The known prefixes used for CSS properties in `CSSStyleDeclaration`.
   */
  declare type PrefixFree$KnownPrefixJS = "Moz" | "Ms" | "O" | "Webkit";
  declare interface PrefixFree {
    /**
     * The prefix used for CSS properties.
     *
     * Eg.: `-moz-`, `-ms-`, `-o-` or `-webkit-`.
     */
    prefix: PrefixFree$KnownPrefixCSS | string;

    /**
     * The prefix used for CSS properties in `CSSStyleDeclaration`.
     *
     * Eg.: `Moz`, `Ms`, `O` or `Webkit`.
     */
    Prefix: PrefixFree$KnownPrefixJS | string;
    atrules: string[];
    functions: string[];
    keywords: string[];
    properties: string[];
    selectorMap: {
      [selector: string]: string
    };
    selectors: string[];
    valueProperties: string[];
    prefixCSS: StyleFix$StyleFixer;
    prefixProperty(property: string, camelCase?: boolean): string;
    prefixSelector(selector: string): string;
    property(property: string): string;
    value(value: string, property?: string): string;
  }
  declare var PrefixFree: PrefixFree;
  declare interface Window {
    StyleFix: StyleFix;
    PrefixFree: PrefixFree;
  }
}
