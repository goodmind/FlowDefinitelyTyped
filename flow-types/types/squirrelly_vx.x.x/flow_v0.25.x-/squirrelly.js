declare module "squirrelly" {
  declare export interface Options {
    $cache?: boolean;
    $file?: string;
    $name?: string;
  }
  declare export interface NativeHelper {
    blocks?: Blocks;
    helperEnd?: () => string;
    helperStart?: (param?: string, id?: string) => string;
    selfClosing?: (param?: string) => string;
  }
  declare export type Blocks = Record<string, () => string>;
  declare export type SqrlFn = (options: TemplateOptions, Sqrl: any) => string;
  declare export type TemplateOptions = Record<string, string | number>;
  declare export function __express(
    filePath: string,
    options: TemplateOptions,
    callback: (...args: any[]) => any
  ): void;

  declare export function autoEscaping<T: boolean>(bool: T): T;

  declare export function Compile(str: string): SqrlFn;

  declare export function defaultTags(tagArray: string[]): void;

  declare export function defineFilter(
    name: string,
    callback: (str: string) => string
  ): void;

  declare export function defineHelper(
    name: string,
    callback: (args: string[], content: () => string, blocks: Blocks) => string
  ): void;

  declare export function defineNativeHelper(
    name: string,
    obj: NativeHelper
  ): void;

  declare export function definePartial(name: string, str: string): void;

  declare export function load(options: Options, str?: string): SqrlFn;

  declare export function Render(
    template: string | SqrlFn,
    options: TemplateOptions
  ): string;

  declare export function renderFile(
    filePath: string,
    options: TemplateOptions
  ): string;

  declare export function setDefaultFilters(
    obj: "clear" | Record<string, boolean>
  ): void;

  declare var F: typeof npm$namespace$F;

  declare var npm$namespace$F: {
    e: typeof F$e
  };
  declare function F$e(str: string): string;
}
