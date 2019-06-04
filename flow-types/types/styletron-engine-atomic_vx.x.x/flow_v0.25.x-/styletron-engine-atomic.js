declare module "styletron-engine-atomic" {
  import type {
    KeyframesObject,
    FontFace as FontFaceObject,
    StandardEngine,
    StyleObject
  } from "styletron-standard";

  declare export class SequentialIDGenerator {
    prefix: string;
    count: number;
    offset: number;
    msb: number;
    power: number;
    constructor(prefix: string): this;
    next(): string;
    increment(): number;
  }
  declare export class Cache<T> {
    cache: {
      [key: string]: string
    };
    idGenerator: SequentialIDGenerator;
    key: string;
    onNewValue: (cache: Cache<T>, id: string, value: any) => any;
    constructor(
      idGenerator: SequentialIDGenerator,
      onNewValue: (cache: Cache<T>, id: string, value: any) => any
    ): this;
    addValue(key: string, value: T): number;
  }
  declare export class MultiCache<T> {
    caches: {
      [key: string]: Cache<T>
    };
    idGenerator: SequentialIDGenerator;
    onNewCache: (key: string, cache: Cache<T>, insertAtIndex: number) => any;
    onNewValue: (cache: Cache<T>, id: string, value: T) => any;
    sortedCacheKeys: string[];
    constructor(
      idGenerator: SequentialIDGenerator,
      onNewCache: () => any,
      onNewValue: () => any
    ): this;
    getCache(key: string): Cache<T>;
    getSortedCacheKeys(): string[];
  }
  declare export type hydrateType =
    | HTMLCollectionOf<HTMLStyleElement>
    | HTMLStyleElement[]
    | NodeListOf<HTMLStyleElement>;
  declare export interface Sheet {
    css: string;
    attrs: {
      [key: string]: string
    };
  }
  declare export interface ClientOptions {
    hydrate?: hydrateType;
    container?: Element;
    prefix?: string;
  }
  declare export interface ServerOptions {
    prefix?: string;
  }
  declare export class Client mixins StandardEngine {
    constructor(opts?: ClientOptions): this;
    styleElements: {
      [key: string]: HTMLStyleElement
    };
    fontFaceSheet: HTMLStyleElement;
    keyframesSheet: HTMLStyleElement;
    styleCache: MultiCache<{
      pseudo: string,
      block: string
    }>;
    keyframesCache: Cache<KeyframesObject>;
    fontFaceCache: Cache<FontFaceObject>;
    renderStyle(style: StyleObject): string;
    renderKeyframes(keyframes: KeyframesObject): string;
    renderFontFace(fontFace: FontFaceObject): string;
  }
  declare export class Server mixins StandardEngine {
    constructor(opts?: ServerOptions): this;
    styleRules: {
      [key: string]: string
    };
    keyframesRules: string;
    fontFaceRules: string;
    getStylesheets(): Sheet[];
    getStylesheetsHtml(className?: string): string;
    getCss(): string;
    renderStyle(style: StyleObject): string;
    renderKeyframes(keyframes: KeyframesObject): string;
    renderFontFace(fontFace: FontFaceObject): string;
  }
}
