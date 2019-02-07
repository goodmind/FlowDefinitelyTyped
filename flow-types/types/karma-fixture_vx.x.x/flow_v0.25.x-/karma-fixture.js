declare module "karma-fixture" {
  declare var npm$namespace$fixture: {
    load: typeof fixture$load,
    set: typeof fixture$set,
    cleanup: typeof fixture$cleanup,
    setBase: typeof fixture$setBase,
    el: typeof fixture$el,
    json: typeof fixture$json
  };
  declare var fixture$el: HTMLElement;

  declare var fixture$json: any[];

  declare function fixture$load(...files: string[]): any;

  declare function fixture$load(file1: string, append?: boolean): any;

  declare function fixture$load(
    file1: string,
    file2: string,
    append?: boolean
  ): any;

  declare function fixture$load(
    file1: string,
    file2: string,
    file3: string,
    append?: boolean
  ): any;

  declare function fixture$load(
    file1: string,
    file2: string,
    file3: string,
    file4: string,
    append?: boolean
  ): any;

  declare function fixture$load(
    file1: string,
    file2: string,
    file3: string,
    file4: string,
    file5: string,
    append?: boolean
  ): any;

  declare function fixture$set(
    ...htmlStrs: string[]
  ): HTMLElement | HTMLElement[];

  declare function fixture$set(
    htmlStr1: string,
    append?: boolean
  ): HTMLElement | HTMLElement[];

  declare function fixture$set(
    htmlStr1: string,
    htmlStr2: string,
    append?: boolean
  ): HTMLElement | HTMLElement[];

  declare function fixture$set(
    htmlStr1: string,
    htmlStr2: string,
    htmlStr3: string,
    append?: boolean
  ): HTMLElement | HTMLElement[];

  declare function fixture$set(
    htmlStr1: string,
    htmlStr2: string,
    htmlStr3: string,
    htmlStr4: string,
    append?: boolean
  ): HTMLElement | HTMLElement[];

  declare function fixture$set(
    htmlStr1: string,
    htmlStr2: string,
    htmlStr3: string,
    htmlStr4: string,
    htmlStr5: string,
    append?: boolean
  ): HTMLElement | HTMLElement[];

  declare function fixture$cleanup(): void;

  declare function fixture$setBase(fixtureBasePath: string): void;
}
