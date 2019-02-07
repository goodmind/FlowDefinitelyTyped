declare module "teddy" {
  declare export function compile(template: string): string;

  declare export function render(
    template: string,
    model: { [key: string]: any }
  ): string;

  declare export function setTemplateRoot(path: string): void;

  declare export function setVerbosity(n: number | string): void;

  declare export function cacheRenders(b: boolean): void;

  declare export function setDefaultCaches(n: number): void;

  declare export function setMaxCaches(template: string, n: number): void;

  declare export function setCacheWhitelist(o: { [key: string]: any }): void;

  declare export function setCacheBlacklist(
    templateArray: $ReadOnlyArray<string>
  ): void;

  declare export function setDefaultParams(): void;

  declare export function flushCache(
    template: string,
    model?: { [key: string]: any }
  ): void;

  declare export function setMaxPasses(n: number): void;

  declare export function compileAtEveryRender(b: boolean): void;

  declare export function minify(b: boolean): void;

  declare export var params: { [key: string]: any };
  declare export var templates: { [key: string]: any };
  declare export var renderedTemplates: { [key: string]: any };
}
