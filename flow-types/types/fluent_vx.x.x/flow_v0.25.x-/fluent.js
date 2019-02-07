declare module "fluent" {
  declare export interface FluentBundleContructorOptions {
    functions?: { [key: string]: any };
    useIsolating?: boolean;
    transform?: (...args: any[]) => any;
  }
  declare export class FluentType {
    constructor(value: any, opts: { [key: string]: any }): this;
    toString(bundle: FluentBundle): string;
    valueOf(): any;
  }
  declare export class FluentNone mixins FluentType {}
  declare export class FluentNumber mixins FluentType {}
  declare export class FluentDateTime mixins FluentType {}
  declare export type FluentNode = FluentType | string;
  declare export class FluentResource mixins Map {
    static fromString(source: string): FluentResource;
  }
  declare export class FluentBundle {
    constructor(
      locales: string | string[],
      options?: FluentBundleContructorOptions
    ): this;
    addMessages(source: string): string[];
    getMessage(id: string): FluentNode[];
    format(
      message: FluentNode[],
      args?: { [key: string]: any },
      errors?: string[]
    ): string;
    addResource(res: FluentResource): string[];
  }
  declare export function ftl(strings: TemplateStringsArray): string;
}
