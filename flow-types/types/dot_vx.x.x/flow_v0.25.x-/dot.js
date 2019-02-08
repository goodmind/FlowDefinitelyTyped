declare module "global" {
  declare interface String {
    encodeHTML(): string;
  }
}
declare module "dot" {
  /**
   * Version number
   */
  declare export var version: string;

  /**
   * Template settings
   */
  declare export var templateSettings: TemplateSettings;
  declare export type RenderFunction = (...args: any[]) => string;

  /**
   * Compile template
   */
  declare export function template(
    tmpl: string,
    c?: TemplateSettings,
    def?: {}
  ): RenderFunction;

  /**
   * For express
   */
  declare export function compile(tmpl: string, def?: {}): RenderFunction;

  declare export interface TemplateSettings {
    evaluate: RegExp;
    interpolate: RegExp;
    encode: RegExp;
    use: RegExp;
    useParams: RegExp;
    define: RegExp;
    defineParams: RegExp;
    conditional: RegExp;
    iterate: RegExp;
    varname: string;
    strip: boolean;
    append: boolean;
    selfcontained: boolean;
  }
}
