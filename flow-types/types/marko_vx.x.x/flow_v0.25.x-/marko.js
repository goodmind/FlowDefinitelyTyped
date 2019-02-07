declare module "marko" {
  import type { AsyncStream, Template } from "./src/runtime/html";

  declare export function createOut(globalData: any): AsyncStream;

  declare export interface TemplateOptions {
    buffer?: boolean;
    writeToDisk?: boolean;
  }
  declare export function load(
    templatePath: string,
    options?: TemplateOptions
  ): Template;

  declare export function load(
    templatePath: string,
    templateSrc: string,
    options?: TemplateOptions
  ): Template;
}
