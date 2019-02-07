declare module "jade" {
  declare export type JadeCustomFilterFunction = (
    text: string,
    options: {
      [key: string]: boolean
    }
  ) => string;
  declare export interface JadeOptions {
    filename?: string;
    basedir?: string;
    doctype?: string;
    pretty?: boolean | string;
    filters?: {
      [key: string]: JadeCustomFilterFunction
    };
    self?: boolean;
    debug?: boolean;
    compileDebug?: boolean;
    globals?: string[];
    cache?: boolean;
    inlineRuntimeFunctions?: boolean;
    name?: string;
  }
  declare export interface TemplateLocals {
    [key: string]: any;
  }
  declare export type JadeGenerationFunction = (
    locals?: TemplateLocals
  ) => string;
  declare export function compile(
    template: string,
    options?: JadeOptions
  ): JadeGenerationFunction;

  declare export function compileFile(
    path: string,
    options?: JadeOptions
  ): JadeGenerationFunction;

  declare export function compileClient(
    template: string,
    options?: JadeOptions
  ): JadeGenerationFunction;

  declare export function compileClientWithDependenciesTracked(
    template: string,
    options?: JadeOptions
  ): {
    body: JadeGenerationFunction,
    dependencies: string[]
  };

  declare export function render(
    template: string,
    options?: JadeOptions
  ): string;

  declare export function renderFile(
    path: string,
    options?: JadeOptions
  ): string;
}
