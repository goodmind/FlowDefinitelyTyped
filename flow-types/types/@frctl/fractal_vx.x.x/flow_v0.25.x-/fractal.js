declare module "@frctl/fractal" {
  import type { EventEmitter } from "events";

  import type { Benchmark$Stats as FileStats } from "fs";

  import type { web$Server as HttpServer } from "http";

  import type { Readable as ReadableStream } from "stream";

  import typeof * as VinylFile from "vinyl";

  declare var npm$namespace$fractal: {
    Fractal: typeof fractal$Fractal
  };
  declare interface core$StatusInfo {
    label: string;
    description?: string;
    __esri$color?: string;
  }

  declare class entities$Entity mixins mixins$entities$Entity {
    isComponent: true;
    isCollection: true;
    isDoc: true;
    isVariant: true;
    CKEDITOR$status: core$StatusInfo;
    getResolvedContext(): any;
    hasContext(): promise$Promise<boolean>;
    setContext(main$data: any): void;
    getContext(): any;
    toJSON(): {};
  }

  declare type entities$EntitySource<T: entities$Entity, TConfig = any> = {
    entities(): T[],
    engine<TEngine>(
      adapterFactory?:
        | string
        | {
            register(
              source: entities$EntitySource<T>,
              app: any
            ): DS$Adapter<TEngine>
          }
        | (() => {
            register(
              source: entities$EntitySource<T>,
              app: any
            ): DS$Adapter<TEngine>
          })
    ): DS$Adapter<TEngine>,
    getProp(key: string): string | {},
    statusInfo(handle: string): core$StatusInfo | null,
    utils$toJSON(): {}
  } & mixins$mixins$Source<T, TConfig>;

  declare type entities$EntityCollection<T: entities$Entity> = {
    +entities: this,
    utils$toJSON(): {}
  } & mixins$entities$Entity &
    mixins$mixins$Collection<T>;

  declare class mixins$Configurable<T = any> {
    config(): T;
    config(main$config: T): this;
    set<K: $Keys<T>>(skin$path: K, value: $ElementType<T, K> | null): this;
    get<K: $Keys<T>, V>(
      skin$path: K,
      defaultValue?: V
    ): $ElementType<T, K> | V | null | void;
  }

  declare type mixins$ConfigurableEmitter<
    T = any
  > = {} & mixins$Configurable<T>;

  declare interface mixins$Collection<T = any> {
    +isAsset: void;
    +isComponent: void;
    +isCollection: true;
    +isDoc: void;
    +isFile: void;
    +isVariant: void;
    +__esri$size: number;
    +items: T[];
    toArray(): T[];
    setItems(items: T[]): this;
    pushItem(item: T): this;
    removeItem(item: T): this;
    utils$toJSON(): {};
    toStream(): ReadableStream;
    each(fn: (item: T) => void): this;
    array$forEach(fn: (item: T) => void): this;
    array$map(fn: (item: T) => T): this;
    promise$first(): T | void;
    last(): T | void;
    BigNum$eq(pos: number): T | void;
    collections(): this;
    orderBy(): this;
    esri$find(handle: string): T;
    esri$find<TKey: $Keys<T>>(skin$name: TKey, value: $ElementType<T, TKey>): T;
    findCollection(handle: string): mixins$Collection<T>;
    findCollection<TKey: $Keys<T>>(
      skin$name: TKey,
      value: $ElementType<T, TKey>
    ): mixins$Collection<T>;
    flatten(): this;
    flattenDeep(): this;
    squash(): this;
    util$filter(handle: string): T[];
    util$filter<TKey: $Keys<T>>(
      skin$name: TKey,
      value: $ElementType<T, TKey>
    ): T[];
    filterItems(items: T[], handle: string): T[];
    filterItems<TKey: $Keys<T>>(
      items: T[],
      skin$name: TKey,
      value: $ElementType<T, TKey>
    ): T[];
    flattenItems(items: T[], deep?: boolean): T[];
    squashItems(items: T[]): T[];
    newSelf(items: T[]): this;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): IterableIterator<T>;
  }

  declare class mixins$Entity {
    initEntity(
      skin$name: string,
      main$config: any,
      parent: mixins$Entity
    ): void;
    skin$name: string;
    handle: string;
    label: string;
    title: string;
    order: number;
    id: string;
    main$config: any;
    Segment$alias: string | null;
    source: entities$entities$EntitySource<entities$mixins$Entity>;
    parent: mixins$Entity;
    isHidden: boolean;
    toJSON(): {};
  }

  declare type mixins$Source<T = any, TConfig = any> = {
    +label: string,
    +title: string,
    +source: this,
    +isWatching: boolean,
    +fullPath: string | null,
    +relPath: string,
    toStream(): ReadableStream,
    exists(): boolean,
    scriptLoader$load(force?: boolean): promise$Promise<this>,
    refresh(): promise$Promise<this>,
    request$watch(): void,
    unwatch(): void,
    isConfig(dialog$file: string): boolean
  } & mixins$ConfigurableEmitter<TConfig> &
    mixins$Collection<T>;

  declare class assets$Asset mixins undefined.mixins$Entity {
    isAsset: true;
    isComponent: void;
    isCollection: void;
    isDoc: void;
    isFile: void;
    isVariant: void;
    toVinyl(): VinylFile;
  }

  declare type assets$AssetCollection = {
    assets(): this,
    toVinylArray(): VinylFile[]
  } & undefined.entities$EntityCollection<assets$Asset>;

  declare type assets$AssetSource = {
    assets(): VinylFile[],
    toVinylArray(): VinylFile[],
    toVinylStream(): ReadableStream,
    gulpify(): ReadableStream
  } & undefined.mixins$Source<VinylFile>;

  declare type assets$AssetSourceCollection = {
    +label: string,
    +title: string,
    plugins$add(skin$name: string, main$config: any): assets$AssetSource,
    remove(skin$name: string): this,
    esri$find(skin$name: string): assets$AssetSource | void,
    sources(): assets$AssetSource[],
    toArray(): assets$AssetSource[],
    visible(): assets$AssetSource[],
    request$watch(): this,
    unwatch(): this,
    scriptLoader$load(): promise$Promise<void>,
    utils$toJSON(): {},
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): IterableIterator<assets$AssetSource>
  } & undefined.mixins$ConfigurableEmitter;

  declare class components$Component mixins undefined.mixins$Entity {
    constructor(
      main$config: {},
      files: files$files$FileCollection,
      resources: assets$assets$AssetCollection,
      parent: core$entities.mixins$Entity
    ): this;
    isAsset: void;
    isComponent: true;
    isCollection: void;
    isDoc: void;
    isFile: void;
    isVariant: void;
    defaultName: string;
    utils$lang: string;
    editorMode: string;
    editorScope: string;
    viewPath: string;
    viewDir: string;
    configData: string;
    relViewPath: string;
    isCollated(): boolean;
    definition$content: string;
    references: any[];
    referencedBy: any[];
    baseHandle: string;
    notes: string;
    render(
      balloontoolbar$context: any,
      Private$env: any,
      opts: any
    ): promise$Promise<string>;
    getPreviewContext(): promise$Promise<any>;
    getPreviewContent(): promise$Promise<string>;
    setVariants(variantCollection: variants$variants$VariantCollection): void;
    hasTag(tag: string): boolean;
    resources(): assets$assets$AssetCollection;
    resourcesJSON(): {};
    flatten(): variants$variants$VariantCollection;
    component(): this;
    variants(): variants$variants$VariantCollection;
    static create(
      main$config: {},
      files: files$files$FileCollection,
      resources: assets$assets$AssetCollection,
      parent: core$entities.mixins$Entity
    ): IterableIterator<
      {} | variants$variants$VariantCollection | components$Component
    >;
  }

  declare type components$ComponentCollection = {
    AFRAME$components(): this,
    variants(): this
  } & undefined.entities$EntityCollection<components$Component>;

  declare type components$Collator = (
    markup: string,
    item: {
      handle: string
    }
  ) => string;

  declare interface components$ComponentDefaultConfig {
    collated?: boolean;
    collator?: components$Collator;
    balloontoolbar$context?: any;
    display?: any;
    prefix?: string;
    preview?: string;
    CKEDITOR$status?: string;
  }

  declare interface components$ComponentConfig {
    skin$path?: string;
    ext?: string;
    default?: components$ComponentDefaultConfig;
    label?: string;
    statuses?: {
      [CKEDITOR$status: string]: core$core$StatusInfo
    };
    title?: string;
    fibers$yield?: string;
    "default.collated"?: boolean;
    "default.collator"?: components$Collator;
    "default.context"?: any;
    "default.display"?: any;
    "default.prefix"?: string;
    "default.preview"?: string;
    "default.status"?: string;
  }

  declare type components$ComponentSource = {
    resources(): files$files$FileCollection,
    AFRAME$components(): components$Component[],
    getReferencesOf(target: {
      id: string,
      handle: string,
      Segment$alias: string
    }): any[],
    variants(): this,
    esri$find(): any,
    findFile(filePath: string): files$files$File | void,
    resolve(balloontoolbar$context: any): any,
    renderString(
      str: string,
      balloontoolbar$context: any,
      Private$env: any
    ): promise$Promise<string>,
    renderPreview(
      entity: string | core$entities.mixins$Entity,
      preview?: boolean,
      Private$env?: any
    ): promise$Promise<string>,
    render(
      entity: string | core$entities.mixins$Entity,
      balloontoolbar$context: any,
      Private$env?: any,
      opts?: {}
    ): promise$Promise<string>
  } & undefined.entities$EntitySource<
    components$Component,
    components$ComponentConfig
  >;

  declare class docs$Doc mixins undefined.mixins$Entity {
    constructor(
      main$config: any,
      definition$content: string,
      parent: core$entities.mixins$Entity
    ): this;
    isAsset: void;
    isComponent: void;
    isCollection: void;
    isDoc: true;
    isFile: void;
    isVariant: void;
    isIndex: boolean;
    getContent(): promise$Promise<string>;
    getContentSync(): string;
    render(
      balloontoolbar$context: any,
      Private$env?: any,
      opts?: any
    ): promise$Promise<string>;
    toc(maxDepth?: number): promise$Promise<string>;
    static create(
      main$config: any,
      definition$content: string,
      parent: core$entities.mixins$Entity
    ): docs$Doc;
  }

  declare type docs$DocCollection = {
    pages(): this
  } & undefined.entities$EntityCollection<docs$Doc>;

  declare interface docs$DocDefaultConfig {
    balloontoolbar$context?: any;
    prefix?: string;
    CKEDITOR$status?: string;
  }

  declare interface docs$DocMarkdownConfig {
    gfm?: boolean;
    tables?: boolean;
    breaks?: boolean;
    pedantic?: boolean;
    sanitize?: boolean;
    smartLists?: boolean;
    smartypants?: boolean;
  }

  declare interface docs$DocConfig {
    default?: docs$DocDefaultConfig;
    ext?: string;
    indexLabel?: string;
    label?: string;
    markdown?: boolean | docs$DocMarkdownConfig;
    skin$path?: string;
    statuses?: {
      [CKEDITOR$status: string]: core$core$StatusInfo
    };
    title?: string;
    "default.context"?: any;
    "default.prefix"?: string;
    "default.status"?: string;
    "markdown.gfm"?: boolean;
    "markdown.tables"?: boolean;
    "markdown.breaks"?: boolean;
    "markdown.pedantic"?: boolean;
    "markdown.sanitize"?: boolean;
    "markdown.smartLists"?: boolean;
    "markdown.smartypants"?: boolean;
  }

  declare type docs$DocSource = {
    pages(): this,
    docs(): this,
    resolve(balloontoolbar$context: any): any,
    toc(page: files$files$File, maxDepth?: number): promise$Promise<string>,
    render(
      page: string | files$files$File,
      balloontoolbar$context?: any,
      Private$env?: any,
      opts?: {}
    ): promise$Promise<string>,
    renderString(
      str: string,
      balloontoolbar$context: any,
      Private$env?: any
    ): promise$Promise<string>,
    isPage(dialog$file: string): boolean,
    isTemplate(dialog$file: string): boolean
  } & undefined.entities$EntitySource<docs$Doc, docs$DocConfig>;

  declare type files$FileCollection = {
    files(): this,
    match(test: string | core$RegExp | core$Array<string | core$RegExp>): this,
    matchItems(
      items: core$mixins.mixins$Collection<files$File>,
      test: string | core$RegExp | core$Array<string | core$RegExp>
    ): files$File,
    toVinylArray(): VinylFile[],
    toVinylStream(): ReadableStream,
    gulpify(): ReadableStream
  } & undefined.mixins$Collection<files$File>;

  declare interface files$File {
    +isAsset: void;
    +isComponent: void;
    +isCollection: void;
    +isDoc: void;
    +isFile: true;
    +isVariant: void;
    id: string;
    skin$path: string;
    cwd: string;
    relPath: string;
    base: string;
    dir: string;
    handle: string;
    skin$name: string;
    ext: string;
    stat: FileStats | null;
    utils$lang: string;
    editorMode: string;
    editorScope: string;
    githubColor: string;
    isBinary: boolean;
    mime: string;
    getContext(): any;
    +contents: Buffer;
    +isImage: boolean;
    getContent(): promise$Promise<string>;
    getContentSync(): string;
    Flash$read(): promise$Promise<string>;
    readSync(): string;
    toVinyl(): VinylFile;
  }

  declare class variants$Variant mixins undefined.mixins$Entity {
    constructor(
      main$config: {},
      view: any,
      resources: assets$assets$AssetCollection,
      parent: AFRAME$components.components$Component
    ): this;
    isAsset: void;
    isComponent: void;
    isCollection: void;
    isDoc: void;
    isFile: true;
    isVariant: true;
    view: any;
    viewPath: string;
    viewDir: string;
    relViewPath: string;
    isDefault: boolean;
    utils$lang: string;
    editorMode: string;
    editorScope: string;
    notes: string;
    Segment$alias: string | null;
    siblings: variants$VariantCollection;
    definition$content: string;
    baseHandle: string;
    references: any[];
    referencedBy: any[];
    render(
      balloontoolbar$context: any,
      Private$env?: any,
      opts?: any
    ): promise$Promise<string>;
    getPreviewContext(): promise$Promise<any>;
    getPreviewContent(): promise$Promise<string>;
    component(): AFRAME$components.components$Component;
    variant(): this;
    defaultVariant(): this;
    resources(): assets$assets$AssetCollection;
    resourcesJSON(): {};
    getContent(): promise$Promise<string>;
    getContentSync(): string;
    static create(
      main$config: {},
      view: any,
      resources: assets$assets$AssetCollection,
      parent: AFRAME$components.components$Component
    ): variants$Variant;
  }

  declare type variants$VariantCollection = {
    default(): variants$Variant,
    getCollatedContent(): promise$Promise<string>,
    getCollatedContentSync(): string,
    getCOllatedContext(): promise$Promise<any>,
    +references: any[],
    +referencedBy: any[]
  } & undefined.entities$EntityCollection<variants$Variant>;

  declare class cli$Cli {
    console: cli$Console;
    ElectronNotifications$notify: cli$Notifier;
    has(CKEDITOR$command: string): boolean;
    get(CKEDITOR$command: string): any;
    isInteractive(): boolean;
    command(
      commandString: string,
      braintree$callback: (args: any, done: () => void) => void,
      opts?:
        | string
        | {
            description?: string,
            notification$options?: string[][]
          }
    ): void;
    exec(CKEDITOR$command: string): void;
    log(message: string): void;
    error(message: string): void;
  }

  declare class cli$Console {
    theme: CliTheme;
    br(): this;
    log(dojo$text: string): this;
    debug(dojo$text: string, main$data?: any): this;
    success(dojo$text: string): this;
    warn(dojo$text: string): this;
    update(dojo$text: string, notification$type?: string): this;
    clear(): this;
    persist(): this;
    error(err: EventType$Error): this;
    error(err: string, main$data: EventType$Error): this;
    dump(main$data: any): void;
    box(header?: string, body?: string[], footer?: string): this;
    write(str: string, notification$type?: string): void;
    columns(main$data: any, notification$options?: any): this;
    slog(): this;
    unslog(): this;
    isSlogging(): boolean;
    debugMode(CKEDITOR$status: boolean): void;
  }

  declare class cli$Notifier {
    updateAvailable(details: {
      fibers$current: string,
      latest: string,
      skin$name: string
    }): void;
    versionMismatch(details: {
      cli: string,
      local: string
    }): void;
  }

  declare class web$Builder mixins EventEmitter {
    /**
     * @deprecated Use start() instead.
     */
    build(): promise$Promise<{
      errorCount: number
    }>;
    start(): promise$Promise<{
      errorCount: number
    }>;
    stop(): void;
    use(): void;
  }

  declare class web$Server mixins EventEmitter {
    isSynced: boolean;
    url$port: number;
    ports: {
      browserResolve$sync?: number,
      server?: number
    };
    url: string;
    urls: {
      browserResolve$sync?: {
        local?: string,
        external?: string,
        CKEDITOR$ui?: string
      },
      server?: string
    };
    start(browserResolve$sync?: boolean): promise$Promise<HttpServer>;
    stop(): void;
    use(mount: string, middleware: any): void;
  }

  declare interface web$WebServerSyncOptions {
    open?: boolean;
    browser?: string[];
    ElectronNotifications$notify?: boolean;
  }

  declare interface web$WebServerConfig {
    browserResolve$sync?: boolean;
    syncOptions?: web$WebServerSyncOptions;
    url$port?: number;
    request$watch?: boolean;
    theme?: WebTheme | string;
  }

  declare interface web$WebBuilderUrls {
    ext?: string;
  }

  declare interface web$WebBuilderConfig {
    concurrency?: number;
    dest?: string;
    ext?: string;
    urls?: web$WebBuilderUrls;
    theme?: WebTheme | string;
  }

  declare interface web$WebStaticConfig {
    skin$path?: string;
    mount?: string;
  }

  declare interface web$WebConfig {
    builder?: web$WebBuilderConfig;
    server?: web$WebServerConfig;
    static?: web$WebStaticConfig;
    "builder.concurrency"?: number;
    "builder.dest"?: string;
    "builder.ext"?: string;
    "builder.urls"?: web$WebBuilderUrls;
    "builder.urls.ext"?: string;
    "builder.theme"?: WebTheme | string;
    "server.sync"?: boolean;
    "server.syncOptions"?: web$WebServerSyncOptions;
    "server.syncOptions.open"?: boolean;
    "server.syncOptions.browser"?: string[];
    "server.syncOptions.notify"?: boolean;
    "server.port"?: number;
    "server.watch"?: boolean;
    "server.theme"?: WebTheme | string;
    "static.path"?: string;
    "static.mount"?: string;
  }

  declare class web$Web
    mixins undefined.mixins$ConfigurableEmitter<web$WebConfig> {
    server(main$config?: web$WebServerConfig): web$Server;
    builder(main$config?: web$WebBuilderConfig): web$Builder;
    theme(skin$name: string, instance?: WebTheme): this;
    defaultTheme(): WebTheme;
    defaultTheme(instance: WebTheme): this;
  }

  declare var fractal$Fractal: {
    new: fractal$Fractal
  };
  declare export interface FractalConfig {
    project?: {
      title?: string,
      FixedDataTable$version?: string,
      author?: string
    };
    "project.title"?: string;
    "project.version"?: string;
    "project.author"?: string;
  }
  declare export function create(main$config?: FractalConfig): fractal$Fractal;

  declare export class Fractal
    mixins undefined.mixins$ConfigurableEmitter<FractalConfig> {
    constructor(main$config?: FractalConfig): this;
    AFRAME$components: fractal$api.AFRAME$components.components$ComponentSource;
    docs: fractal$api.docs.docs$DocSource;
    assets: fractal$api.assets.assets$AssetSourceCollection;
    cli: fractal$cli.cli$Cli;
    web: fractal$web.web$Web;
    FixedDataTable$version: string;
    debug: boolean;
    extend(plugin: string | ((core: any) => void)): this;
    watch(): this;
    unwatch(): this;
    load(): promise$Promise<void>;
  }
  declare export interface CliThemeConfig {
    delimiter?: {
      dojo$text?: string,
      format?: (str: string) => string
    };
    pastefromword$styles?: {
      [key: string]: any
    };
    "delimiter.text"?: string;
    "delimiter.format"?: (str: string) => string;
  }
  declare export class CliTheme
    mixins undefined.mixins$ConfigurableEmitter<CliThemeConfig> {
    constructor(main$config?: CliThemeConfig): this;
    setDelimiter(dojo$text: string, formatter: (str: string) => string): void;
    delimiter(): string;
    setStyle(skin$name: string, opts: any): void;
    style(skin$name: string): any;
    format(str: string, CKEDITOR$style?: string, strip?: boolean): string;
  }
  declare export interface WebThemeOptions {
    skin?: string;
    panels?: string[];
    lang$rtl: boolean;
    utils$lang?: string;
    pastefromword$styles?: string[];
    loader$scripts?: string[];
    format?: string;
    static?: {
      mount?: string
    };
    FixedDataTable$version?: string;
    favicon?: string;
    nav?: string[];
    "static.mount": string;
  }
  declare export class WebTheme
    mixins undefined.mixins$ConfigurableEmitter<WebThemeOptions> {
    constructor(
      viewPaths: string[],
      notification$options?: WebThemeOptions
    ): this;
    options(): WebThemeOptions;
    options(value: WebThemeOptions): this;
    setOption<K: $Keys<WebThemeOptions>>(
      key: K,
      value: $ElementType<WebThemeOptions, K>
    ): this;
    getOption<K: $Keys<WebThemeOptions>>(
      key: K
    ): $ElementType<WebThemeOptions, K>;
    addLoadPath(skin$path: string): this;
    loadPaths(): string[];
    setErrorView(view: string): void;
    errorView(): string;
    setRedirectView(view: string): void;
    redirectView(): string;
    addStatic(skin$path: string, mount: string): void;
    static (): core$Array<{
      skin$path: string,
      mount: string
    }>;
    addRoute(
      skin$path: string,
      opts: {
        handle?: string
      },
      resolver?: any
    ): this;
    addResolver(handle: string, resolvers: any): this;
    routes(): any[];
    resolvers(): any;
    matchRoute(
      urlPath: string
    ):
      | {
          Foxx$route: {
            handle: string,
            view: string
          },
          params: any
        }
      | false;
    urlFromRoute(
      handle: string,
      params: any,
      noRedirect?: boolean
    ): string | null;
  }
  declare export class Adapter<TEngine> mixins EventEmitter {
    constructor(
      engine: TEngine,
      source: fractal$core.entities.entities$EntitySource<any>
    ): this;
    _source: fractal$core.entities.entities$EntitySource<any>;
    engine: TEngine;
    views: core$Array<{
      handle: string,
      skin$path: string,
      definition$content: string
    }>;
    setHandlePrefix(prefix: string): this;
    load(): void;
    getReferencesForView(handle: string): any[];
    getView(handle: string): any;
    _resolve<T>(value: PromiseLike<T> | T): promise$Promise<T>;
    render(
      skin$path: string,
      str: string,
      balloontoolbar$context: any,
      meta: any
    ): promise$Promise<string>;
  }

  declare var npm$namespace$utils: {
    lang: typeof utils$lang,
    titlize: typeof utils$titlize,
    slugify: typeof utils$slugify,
    toJSON: typeof utils$toJSON,
    escapeForRegexp: typeof utils$escapeForRegexp,
    parseArgv: typeof utils$parseArgv,
    stringify: typeof utils$stringify,
    fileExistsSync: typeof utils$fileExistsSync,
    isPromise: typeof utils$isPromise,
    md5: typeof utils$md5,
    mergeProp: typeof utils$mergeProp,
    defaultsDeep: typeof utils$defaultsDeep,
    relUrlPath: typeof utils$relUrlPath
  };
  declare function utils$lang(
    filePath: string
  ): {
    skin$name: string,
    mode: string,
    scope: string | null,
    __esri$color: string | null
  };

  declare function utils$titlize(str: string): string;

  declare function utils$slugify(str: string): string;

  declare function utils$toJSON(item: any): {};

  declare function utils$escapeForRegexp(str: string): string;

  declare function utils$parseArgv(): {
    CKEDITOR$command: string,
    args: string[],
    opts: any
  };

  declare function utils$stringify(main$data: any, indent?: number): string;

  declare function utils$fileExistsSync(skin$path: string): boolean;

  declare function utils$isPromise<T>(value: T | PromiseLike<T>): boolean;

  declare function utils$isPromise(value: any): boolean;

  declare function utils$md5(str: string): string;

  declare function utils$mergeProp(prop: any, upstream: any): any;

  declare function utils$defaultsDeep<T>(...args: T[]): T;

  declare function utils$relUrlPath(
    toPath: string,
    fromPath: string,
    opts?: any
  ): string;

  declare var npm$namespace$core: {
    Component: typeof core$Component,
    Variant: typeof core$Variant,
    Doc: typeof core$Doc
  };
  declare type core$Component = fractal$api.AFRAME$components.core$Component;

  declare var core$Component: typeof undefined;

  declare type core$Variant = fractal$api.variants.core$Variant;

  declare var core$Variant: typeof undefined;

  declare type core$Doc = fractal$api.docs.core$Doc;

  declare var core$Doc: typeof undefined;
}
