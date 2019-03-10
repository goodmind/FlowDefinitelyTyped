declare module "jss" {
  import type { Style } from "./css";

  declare export type Styles<Name: string = any> = Record<Name, Style>;
  declare export type Classes<Name: string = any> = Record<Name, string>;
  declare export interface ToCssOptions {
    indent?: number;
  }
  declare export interface Rule {
    className: string;
    selector: string;
    applyTo(element: HTMLElement): void;
    prop(key: string): string;
    prop(key: string, value: any): this;
    toJSON(): string;
  }
  declare export interface StyleSheet<RuleName: string = any> {
    classes: Classes<RuleName>;
    options: RuleOptions;
    linked: boolean;
    attached: boolean;

    /**
     * Attach renderable to the render tree.
     */
    attach(): this;

    /**
     * Remove renderable from render tree.
     */
    detach(): this;

    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */
    addRule(style: Style, options?: $Shape<RuleOptions>): Rule;
    addRule(name: RuleName, style: Style, options?: $Shape<RuleOptions>): Rule;

    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */
    addRules(
      styles: $Shape<Styles<RuleName>>,
      options?: $Shape<RuleOptions>
    ): Rule[];

    /**
     * Get a rule by name.
     */
    getRule(name: RuleName): Rule;

    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */
    deleteRule(name: RuleName): boolean;

    /**
     * Get index of a rule.
     */
    indexOf(rule: Rule): number;

    /**
     * Update the function values with a new data.
     */
    update(data?: {}): this;
    update(name: RuleName, data: {}): this;

    /**
     * Convert rules to a CSS string.
     */
    toString(options?: ToCssOptions): string;
  }
  declare export type GenerateClassName<Name: string = any> = (
    rule: Rule,
    sheet?: StyleSheet<Name>
  ) => string;
  declare export interface JSSPlugin {
    [key: string]: $Shape<{
      onCreateRule(name: string, style: Style, options: RuleOptions): Rule,
      onProcessRule(rule: Rule, sheet: StyleSheet<>): void,
      onProcessStyle(style: Style, rule: Rule, sheet: StyleSheet<>): Style,
      onProcessSheet(sheet: StyleSheet<>): void,
      onChangeValue(value: any, prop: string, rule: Rule): any,
      onUpdate(data: {}, rule: Rule, sheet: StyleSheet<>): void
    }>;
  }
  declare export interface JSSOptions {
    createGenerateClassName(): GenerateClassName<>;
    plugins: $ReadOnlyArray<JSSPlugin>;
    virtual: boolean;
    insertionPoint: string | HTMLElement;
  }
  declare export interface RuleFactoryOptions<Name: string = any> {
    selector: string;
    classes: Classes<Name>;
    sheet: StyleSheet<Name>;
    index: number;
    jss: JSS;
    generateClassName: GenerateClassName<Name>;
  }
  declare export interface RuleOptions {
    index: number;
    className: string;
  }
  declare export class SheetsRegistry {
    constructor(): this;
    registry: $ReadOnlyArray<StyleSheet<>>;
    index: number;
    add(sheet: StyleSheet<>): void;
    reset(): void;
    remove(sheet: StyleSheet<>): void;
    toString(options?: ToCssOptions): string;
  }
  declare export type CreateStyleSheetOptions<Name: string = any> = $Shape<{
    media: string,
    meta: string,
    link: boolean,
    element: HTMLStyleElement,
    index: number,
    generateClassName: GenerateClassName<Name>,
    classNamePrefix: string
  }>;
  declare export class JSS {
    constructor(options?: $Shape<JSSOptions>): this;
    createStyleSheet<Name: string>(
      styles: $Shape<Styles<Name>>,
      options?: CreateStyleSheetOptions<Name>
    ): StyleSheet<Name>;
    removeStyleSheet(sheet: StyleSheet<>): this;
    setup(options?: $Shape<JSSOptions>): this;
    use(...plugins: JSSPlugin[]): this;
    createRule(style: Style, options?: RuleFactoryOptions<>): Rule;
    createRule<Name: string>(
      name: Name,
      style: Style,
      options?: RuleFactoryOptions<Name>
    ): Rule;
  }

  /**
   * Creates a new instance of JSS.
   */
  declare export function create(options?: $Shape<JSSOptions>): JSS;

  declare export function createGenerateClassName(): GenerateClassName<>;

  declare var sharedInstance: JSS;
  declare export default typeof sharedInstance;
}
