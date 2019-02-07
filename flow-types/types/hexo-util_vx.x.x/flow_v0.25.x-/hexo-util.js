declare module "hexo-util" {
  import type { Transform } from "stream";

  import type { SpawnOptions, StdioOptions } from "child_process";

  declare export class CacheStream mixins Transform {
    destroy(): void;
    getCache(): Buffer;
  }
  declare export function camelCaseKeys(obj: {
    [x: string]: any
  }): {
    [x: string]: any
  };

  declare export function escapeRegExp(str: string): string;

  declare export function escapeDiacritic(str: string): string;

  declare export function escapeHTML(str: string): string;

  declare export function hash(str: string | ArrayBufferView): Buffer;

  declare export class HashStream mixins Transform {}
  declare export function highlight(
    str: string,
    options?: {
      hljs?: boolean,
      gutter?: boolean,
      wrap?: boolean,
      firstLine?: number,
      caption?: string,
      mark?: number[],
      tab?: string,
      lang?: string,
      autoDetect?: boolean
    }
  ): string;

  declare export function htmlTag(
    tag: string,
    attrs?:
      | string[]
      | ArrayLike<string>
      | {
          [x: string]: any
        },
    text?: string | null
  ): string;

  declare export interface Pattern<T> {
    test(str: string): boolean;
    match(str: string): T;
  }
  declare export var Pattern: {
    new<T>(rule: Pattern<T> | ((str: string) => T)): Pattern<T>,
    new(rule: RegExp): Pattern<RegExpMatchArray | null>,
    new(
      rule: string
    ): Pattern<
      | ({
          0: string,
          [index: number]: any
        } & {
          [name: string]: any
        })
      | void
    >
  };
  declare export class Permalink {
    constructor(
      rule: string,
      options?: {
        segments?: {
          [name: string]: string | RegExp
        }
      }
    ): this;
    rule: string;
    regex: RegExp;
    params: string[];
    test(str: string): boolean;
    parse(
      str: string
    ): {
      [param: string]: any
    } | void;
    stringify(data: {
      [name: string]: string
    }): string;
  }
  declare export function slugize(
    str: string,
    options?: {
      separator?: string,
      transform?: 1 | 2
    }
  ): string;

  declare export type hexoSpawnOptions = {
    verbose?: boolean,
    encoding?: BufferEncoding
  } & SpawnOptions;

  declare export type hexoSpawnDisableEncodingOptions = {
    verbose?: boolean,
    encoding: "" | false | null
  } & SpawnOptions;

  declare export type hexoSpawnOverrideStdioOptions = {
    stdio: StdioOptions
  } & hexoSpawnOptions;

  declare export type hexoSpawnDisableEncodingAndOverrideStdioOptions = {
    stdio: StdioOptions
  } & hexoSpawnDisableEncodingOptions;

  declare export function spawn(
    command: string,
    args: string[],
    options: hexoSpawnDisableEncodingAndOverrideStdioOptions
  ): Promise<Buffer | void>;

  declare export function spawn(
    command: string,
    args: string[],
    options: hexoSpawnOverrideStdioOptions
  ): Promise<string | void>;

  declare export function spawn(
    command: string,
    args: string[],
    options: hexoSpawnDisableEncodingOptions
  ): Promise<Buffer>;

  declare export function spawn(
    command: string,
    args: string[],
    options?: hexoSpawnOptions
  ): Promise<string>;

  declare export function spawn(
    command: string,
    options: hexoSpawnDisableEncodingAndOverrideStdioOptions
  ): Promise<Buffer | void>;

  declare export function spawn(
    command: string,
    options: hexoSpawnOverrideStdioOptions
  ): Promise<string | void>;

  declare export function spawn(
    command: string,
    options: hexoSpawnDisableEncodingOptions
  ): Promise<Buffer>;

  declare export function spawn(
    command: string,
    options?: hexoSpawnOptions
  ): Promise<string>;

  declare export function stripHTML(str: string): string;

  declare export function wordWrap(
    str: string,
    options?: {
      width?: number
    }
  ): string;

  declare export function truncate(
    str: string,
    options?: {
      length?: number,
      omission?: string,
      separator?: string
    }
  ): string;
}
