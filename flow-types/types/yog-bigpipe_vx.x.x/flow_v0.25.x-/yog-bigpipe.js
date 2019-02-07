declare module "yog-bigpipe" {
  import type { EventEmitter } from "events";

  import type { Readable } from "stream";

  import type { RequestHandler } from "express";

  declare interface BigPipeOption {
    skipAnalysis?: boolean;
    tpl?: {
      _default?: string,
      quickling?: string
    };
  }
  declare type Callback = (done: (err: any, data: any) => any) => any;
  declare interface AddPageletConfig {
    id: string;
    lazy?: boolean;
    Pagelet$mode?: yogBigpipe$yogBigpipe$Pagelet.Pagelet$mode;
  }
  declare function yogBigpipe(option?: BigPipeOption): RequestHandler;

  declare module.exports: typeof yogBigpipe;

  declare class yogBigpipe$BigPipe mixins Readable {
    constructor(option?: BigPipeOption): this;
    map: {
      [key: string]: yogBigpipe$Pagelet
    };
    pagelets: yogBigpipe$Pagelet[];
    pipelines: yogBigpipe$Pagelet[];
    rendered: yogBigpipe$Pagelet[];
    sources: {};
    state: yogBigpipe$Pagelet.Pagelet$status;
    quicklings: {};
    parentQuicklings: string[];
    yogBigpipe$Pagelet: yogBigpipe$PageletConstructor<yogBigpipe$Pagelet>;
    pageletData: {};
    bind(id: string, fn: Callback): yogBigpipe$BigPipe;
    bindPageOnly(fn: Callback): void;
    addQuicklingPagelets(pagelets: string[]): void;
    isQuicklingMode(): boolean;
    isQuickingMode(): boolean;
    addPagelet(obj: AddPageletConfig): void;
    isQuicklingWidget(item: {
      mode: yogBigpipe$Pagelet.Pagelet$mode,
      [key: string]: any
    }): void;
    render(): void;
    preparePageOnly(): Promise<any>;
    prepareAllSources(): Promise<any>;
    renderPagelet(pagelet: yogBigpipe$Pagelet): void;
    destroy(): void;
    _onPageletDone(pagelet: yogBigpipe$Pagelet): void;
    _checkFinish(): void;
    outputPagelet(pagelet: yogBigpipe$Pagelet): void;
    format(pagelet: yogBigpipe$Pagelet): string;
    _markPageletRendered(pagelet: yogBigpipe$Pagelet): void;
  }

  declare type yogBigpipe$PageletConstructor<T> = (
    obj: yogBigpipe$PageletOption
  ) => T;

  declare interface yogBigpipe$PageletOption {
    id: string;
    Pagelet$mode?: yogBigpipe$Pagelet.Pagelet$mode;
    lazy?: boolean;
    reqID: string;
    skipAnalysis: boolean;
    locals?: {};
    compiled?: boolean;
    container?: string;
    for?: string;
    model: {};
  }

  declare interface yogBigpipe$PageletData {
    container: string;
    reqID: string;
    id: string;
    html: string;
    js: string[];
    css: string[];
    styles: string[];
    scripts: string[];
  }

  declare class yogBigpipe$Pagelet mixins EventEmitter {
    constructor(obj: yogBigpipe$PageletOption): this;
    model: {};
    container: string;
    Pagelet$mode: yogBigpipe$Pagelet.Pagelet$mode;
    id: string;
    locals: {};
    compiled: boolean;
    reqID: string;
    skipAnalysis: boolean;
    state: yogBigpipe$Pagelet.Pagelet$status;
    scripts: string[];
    styles: string[];
    js: string[];
    css: string[];
    html: string;
    addCss(css: string | string[]): void;
    addCsses(css: string | string[]): void;
    addJs(css: string | string[]): void;
    addJses(css: string | string[]): void;
    addScript(css: string | string[]): void;
    addScripts(css: string | string[]): void;
    addStyle(css: string | string[]): void;
    addStyles(css: string | string[]): void;
    destroy(): void;
    start(provider: Promise<any>, sync: boolean): void;
    toJson(): yogBigpipe$PageletData;
  }

  declare type Pagelet$status =
    | "pending"
    | "rendering"
    | "fulfilled"
    | "failed";

  declare type Pagelet$mode = "async" | "pipeline" | "quickling";
}
