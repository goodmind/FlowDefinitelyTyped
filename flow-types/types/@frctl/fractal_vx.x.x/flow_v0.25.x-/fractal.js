declare module "@frctl/fractal" {
  import type { EventEmitter } from "events";

  import type { Stats as FileStats } from "fs";

  import type { Server as HttpServer } from "http";

  import type { Readable as ReadableStream } from "stream";

  import typeof * as VinylFile from "vinyl";

  declare var npm$namespace$fractal: {
    Fractal: typeof fractal$Fractal,

    core: typeof npm$namespace$fractal$core,
    api: typeof npm$namespace$fractal$api,
    cli: typeof npm$namespace$fractal$cli,
    web: typeof npm$namespace$fractal$web
  };

  declare var npm$namespace$fractal$core: {
    entities: typeof npm$namespace$fractal$core$entities,
    mixins: typeof npm$namespace$fractal$core$mixins
  };
  declare interface fractal$core$StatusInfo {
    label: string;
    description?: string;
    color?: string;
  }

  declare var npm$namespace$fractal$core$entities: {
    Entity: typeof fractal$core$entities$Entity
  };
  declare class fractal$core$entities$Entity mixins mixins$Entity {
    isComponent: true;
    isCollection: true;
    isDoc: true;
    isVariant: true;
    status: fractal$core$StatusInfo;
    getResolvedContext(): any;
    hasContext(): Promise<boolean>;
    setContext(data: any): void;
    getContext(): any;
    toJSON(): {};
  }

  declare type fractal$core$entities$EntitySource<
    T: fractal$core$entities$Entity,
    TConfig = any
  > = {
    entities(): T[],
    engine<TEngine>(
      adapterFactory?:
        | string
        | {
            register(
              source: fractal$core$entities$EntitySource<T>,
              app: any
            ): Adapter<TEngine>
          }
        | (() => {
            register(
              source: fractal$core$entities$EntitySource<T>,
              app: any
            ): Adapter<TEngine>
          })
    ): Adapter<TEngine>,
    getProp(key: string): string | {},
    statusInfo(handle: string): fractal$core$StatusInfo | null,
    toJSON(): {}
  } & mixins$Source<T, TConfig>;

  declare type fractal$core$entities$EntityCollection<
    T: fractal$core$entities$Entity
  > = {
    +entities: this,
    toJSON(): {}
  } & mixins$Entity &
    mixins$Collection<T>;

  declare var npm$namespace$fractal$core$mixins: {
    Configurable: typeof fractal$core$mixins$Configurable,
    Entity: typeof fractal$core$mixins$Entity
  };
  declare class fractal$core$mixins$Configurable<T = any> {
    config(): T;
    config(config: T): this;
    set<K: $Keys<T>>(path: K, value: $ElementType<T, K> | null): this;
    get<K: $Keys<T>, V>(
      path: K,
      defaultValue?: V
    ): $ElementType<T, K> | V | null | void;
  }

  declare type fractal$core$mixins$ConfigurableEmitter<
    T = any
  > = {} & Configurable<T>;

  declare interface fractal$core$mixins$Collection<T = any> {
    +isAsset: void;
    +isComponent: void;
    +isCollection: true;
    +isDoc: void;
    +isFile: void;
    +isVariant: void;
    +size: number;
    +items: T[];
    toArray(): T[];
    setItems(items: T[]): this;
    pushItem(item: T): this;
    removeItem(item: T): this;
    toJSON(): {};
    toStream(): ReadableStream;
    each(fn: (item: T) => void): this;
    forEach(fn: (item: T) => void): this;
    map(fn: (item: T) => T): this;
    first(): T | void;
    last(): T | void;
    eq(pos: number): T | void;
    collections(): this;
    orderBy(): this;
    find(handle: string): T;
    find<TKey: $Keys<T>>(name: TKey, value: $ElementType<T, TKey>): T;
    findCollection(handle: string): fractal$core$mixins$Collection<T>;
    findCollection<TKey: $Keys<T>>(
      name: TKey,
      value: $ElementType<T, TKey>
    ): fractal$core$mixins$Collection<T>;
    flatten(): this;
    flattenDeep(): this;
    squash(): this;
    filter(handle: string): T[];
    filter<TKey: $Keys<T>>(name: TKey, value: $ElementType<T, TKey>): T[];
    filterItems(items: T[], handle: string): T[];
    filterItems<TKey: $Keys<T>>(
      items: T[],
      name: TKey,
      value: $ElementType<T, TKey>
    ): T[];
    flattenItems(items: T[], deep?: boolean): T[];
    squashItems(items: T[]): T[];
    newSelf(items: T[]): this;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): IterableIterator<T>;
  }

  declare class fractal$core$mixins$Entity {
    initEntity(
      name: string,
      config: any,
      parent: fractal$core$mixins$Entity
    ): void;
    name: string;
    handle: string;
    label: string;
    title: string;
    order: number;
    id: string;
    config: any;
    alias: string | null;
    source: entities$EntitySource<entities$Entity>;
    parent: fractal$core$mixins$Entity;
    isHidden: boolean;
    toJSON(): {};
  }

  declare type fractal$core$mixins$Source<T = any, TConfig = any> = {
    +label: string,
    +title: string,
    +source: this,
    +isWatching: boolean,
    +fullPath: string | null,
    +relPath: string,
    toStream(): ReadableStream,
    exists(): boolean,
    load(force?: boolean): Promise<this>,
    refresh(): Promise<this>,
    watch(): void,
    unwatch(): void,
    isConfig(file: string): boolean
  } & ConfigurableEmitter<TConfig> &
    Collection<T>;

  declare var npm$namespace$fractal$api: {
    assets: typeof npm$namespace$fractal$api$assets,
    components: typeof npm$namespace$fractal$api$components,
    docs: typeof npm$namespace$fractal$api$docs,
    variants: typeof npm$namespace$fractal$api$variants
  };

  declare var npm$namespace$fractal$api$assets: {
    Asset: typeof fractal$api$assets$Asset
  };
  declare class fractal$api$assets$Asset mixins undefined.Entity {
    isAsset: true;
    isComponent: void;
    isCollection: void;
    isDoc: void;
    isFile: void;
    isVariant: void;
    toVinyl(): VinylFile;
  }

  declare type fractal$api$assets$AssetCollection = {
    assets(): this,
    toVinylArray(): VinylFile[]
  } & undefined.EntityCollection<fractal$api$assets$Asset>;

  declare type fractal$api$assets$AssetSource = {
    assets(): VinylFile[],
    toVinylArray(): VinylFile[],
    toVinylStream(): ReadableStream,
    gulpify(): ReadableStream
  } & undefined.Source<VinylFile>;

  declare type fractal$api$assets$AssetSourceCollection = {
    +label: string,
    +title: string,
    add(name: string, config: any): fractal$api$assets$AssetSource,
    remove(name: string): this,
    find(name: string): fractal$api$assets$AssetSource | void,
    sources(): fractal$api$assets$AssetSource[],
    toArray(): fractal$api$assets$AssetSource[],
    visible(): fractal$api$assets$AssetSource[],
    watch(): this,
    unwatch(): this,
    load(): Promise<void>,
    toJSON(): {},
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): IterableIterator<fractal$api$assets$AssetSource>
  } & undefined.ConfigurableEmitter;

  declare var npm$namespace$fractal$api$components: {
    Component: typeof fractal$api$components$Component
  };
  declare class fractal$api$components$Component mixins undefined.Entity {
    constructor(
      config: {},
      files: files$FileCollection,
      resources: assets$AssetCollection,
      parent: core$entitiesEntity
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
    content: string;
    references: any[];
    referencedBy: any[];
    baseHandle: string;
    notes: string;
    render(context: any, env: any, opts: any): Promise<string>;
    getPreviewContext(): Promise<any>;
    getPreviewContent(): Promise<string>;
    setVariants(variantCollection: variants$VariantCollection): void;
    hasTag(tag: string): boolean;
    resources(): assets$AssetCollection;
    resourcesJSON(): {};
    flatten(): variants$VariantCollection;
    component(): this;
    variants(): variants$VariantCollection;
    static create(
      config: {},
      files: files$FileCollection,
      resources: assets$AssetCollection,
      parent: core$entitiesEntity
    ): IterableIterator<
      {} | variants$VariantCollection | fractal$api$components$Component
    >;
  }

  declare type fractal$api$components$ComponentCollection = {
    components(): this,
    variants(): this
  } & undefined.EntityCollection<fractal$api$components$Component>;

  declare type fractal$api$components$Collator = (
    markup: string,
    item: {
      handle: string
    }
  ) => string;

  declare interface fractal$api$components$ComponentDefaultConfig {
    collated?: boolean;
    collator?: fractal$api$components$Collator;
    context?: any;
    display?: any;
    prefix?: string;
    preview?: string;
    status?: string;
  }

  declare interface fractal$api$components$ComponentConfig {
    path?: string;
    ext?: string;
    default?: fractal$api$components$ComponentDefaultConfig;
    label?: string;
    statuses?: {
      [status: string]: core$StatusInfo
    };
    title?: string;
    yield?: string;
    "default.collated"?: boolean;
    "default.collator"?: fractal$api$components$Collator;
    "default.context"?: any;
    "default.display"?: any;
    "default.prefix"?: string;
    "default.preview"?: string;
    "default.status"?: string;
  }

  declare type fractal$api$components$ComponentSource = {
    resources(): files$FileCollection,
    components(): fractal$api$components$Component[],
    getReferencesOf(target: {
      id: string,
      handle: string,
      alias: string
    }): any[],
    variants(): this,
    find(): any,
    findFile(filePath: string): files$File | void,
    resolve(context: any): any,
    renderString(str: string, context: any, env: any): Promise<string>,
    renderPreview(
      entity: string | core$entitiesEntity,
      preview?: boolean,
      env?: any
    ): Promise<string>,
    render(
      entity: string | core$entitiesEntity,
      context: any,
      env?: any,
      opts?: {}
    ): Promise<string>
  } & undefined.EntitySource<
    fractal$api$components$Component,
    fractal$api$components$ComponentConfig
  >;

  declare var npm$namespace$fractal$api$docs: {
    Doc: typeof fractal$api$docs$Doc
  };
  declare class fractal$api$docs$Doc mixins undefined.Entity {
    constructor(
      config: any,
      content: string,
      parent: core$entitiesEntity
    ): this;
    isAsset: void;
    isComponent: void;
    isCollection: void;
    isDoc: true;
    isFile: void;
    isVariant: void;
    isIndex: boolean;
    getContent(): Promise<string>;
    getContentSync(): string;
    render(context: any, env?: any, opts?: any): Promise<string>;
    toc(maxDepth?: number): Promise<string>;
    static create(
      config: any,
      content: string,
      parent: core$entitiesEntity
    ): fractal$api$docs$Doc;
  }

  declare type fractal$api$docs$DocCollection = {
    pages(): this
  } & undefined.EntityCollection<fractal$api$docs$Doc>;

  declare interface fractal$api$docs$DocDefaultConfig {
    context?: any;
    prefix?: string;
    status?: string;
  }

  declare interface fractal$api$docs$DocMarkdownConfig {
    gfm?: boolean;
    tables?: boolean;
    breaks?: boolean;
    pedantic?: boolean;
    sanitize?: boolean;
    smartLists?: boolean;
    smartypants?: boolean;
  }

  declare interface fractal$api$docs$DocConfig {
    default?: fractal$api$docs$DocDefaultConfig;
    ext?: string;
    indexLabel?: string;
    label?: string;
    markdown?: boolean | fractal$api$docs$DocMarkdownConfig;
    path?: string;
    statuses?: {
      [status: string]: core$StatusInfo
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

  declare type fractal$api$docs$DocSource = {
    pages(): this,
    docs(): this,
    resolve(context: any): any,
    toc(page: files$File, maxDepth?: number): Promise<string>,
    render(
      page: string | files$File,
      context?: any,
      env?: any,
      opts?: {}
    ): Promise<string>,
    renderString(str: string, context: any, env?: any): Promise<string>,
    isPage(file: string): boolean,
    isTemplate(file: string): boolean
  } & undefined.EntitySource<fractal$api$docs$Doc, fractal$api$docs$DocConfig>;

  declare type fractal$api$files$FileCollection = {
    files(): this,
    match(test: string | RegExp | Array<string | RegExp>): this,
    matchItems(
      items: core$mixinsCollection<files$File>,
      test: string | RegExp | Array<string | RegExp>
    ): files$File,
    toVinylArray(): VinylFile[],
    toVinylStream(): ReadableStream,
    gulpify(): ReadableStream
  } & undefined.Collection<files$File>;

  declare interface fractal$api$files$File {
    +isAsset: void;
    +isComponent: void;
    +isCollection: void;
    +isDoc: void;
    +isFile: true;
    +isVariant: void;
    id: string;
    path: string;
    cwd: string;
    relPath: string;
    base: string;
    dir: string;
    handle: string;
    name: string;
    ext: string;
    stat: FileStats | null;
    lang: string;
    editorMode: string;
    editorScope: string;
    githubColor: string;
    isBinary: boolean;
    mime: string;
    getContext(): any;
    +contents: Buffer;
    +isImage: boolean;
    getContent(): Promise<string>;
    getContentSync(): string;
    read(): Promise<string>;
    readSync(): string;
    toVinyl(): VinylFile;
  }

  declare var npm$namespace$fractal$api$variants: {
    Variant: typeof fractal$api$variants$Variant
  };
  declare class fractal$api$variants$Variant mixins undefined.Entity {
    constructor(
      config: {},
      view: any,
      resources: assets$AssetCollection,
      parent: components$Component
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
    alias: string | null;
    siblings: variants$VariantCollection;
    content: string;
    baseHandle: string;
    references: any[];
    referencedBy: any[];
    render(context: any, env?: any, opts?: any): Promise<string>;
    getPreviewContext(): Promise<any>;
    getPreviewContent(): Promise<string>;
    component(): components$Component;
    variant(): this;
    defaultVariant(): this;
    resources(): assets$AssetCollection;
    resourcesJSON(): {};
    getContent(): Promise<string>;
    getContentSync(): string;
    static create(
      config: {},
      view: any,
      resources: assets$AssetCollection,
      parent: components$Component
    ): fractal$api$variants$Variant;
  }

  declare type fractal$api$variants$VariantCollection = {
    default(): fractal$api$variants$Variant,
    getCollatedContent(): Promise<string>,
    getCollatedContentSync(): string,
    getCOllatedContext(): Promise<any>,
    +references: any[],
    +referencedBy: any[]
  } & undefined.EntityCollection<fractal$api$variants$Variant>;

  declare var npm$namespace$fractal$cli: {
    Cli: typeof fractal$cli$Cli,
    Console: typeof fractal$cli$Console,
    Notifier: typeof fractal$cli$Notifier
  };
  declare class fractal$cli$Cli {
    console: cli$Console;
    notify: cli$Notifier;
    has(command: string): boolean;
    get(command: string): any;
    isInteractive(): boolean;
    command(
      commandString: string,
      callback: (args: any, done: () => void) => void,
      opts?:
        | string
        | {
            description?: string,
            options?: string[][]
          }
    ): void;
    exec(command: string): void;
    log(message: string): void;
    error(message: string): void;
  }

  declare class fractal$cli$Console {
    theme: CliTheme;
    br(): this;
    log(text: string): this;
    debug(text: string, data?: any): this;
    success(text: string): this;
    warn(text: string): this;
    update(text: string, type?: string): this;
    clear(): this;
    persist(): this;
    error(err: Error): this;
    error(err: string, data: Error): this;
    dump(data: any): void;
    box(header?: string, body?: string[], footer?: string): this;
    write(str: string, type?: string): void;
    columns(data: any, options?: any): this;
    slog(): this;
    unslog(): this;
    isSlogging(): boolean;
    debugMode(status: boolean): void;
  }

  declare class fractal$cli$Notifier {
    updateAvailable(details: {
      current: string,
      latest: string,
      name: string
    }): void;
    versionMismatch(details: {
      cli: string,
      local: string
    }): void;
  }

  declare var npm$namespace$fractal$web: {
    Builder: typeof fractal$web$Builder,
    Server: typeof fractal$web$Server,
    Web: typeof fractal$web$Web
  };
  declare class fractal$web$Builder mixins EventEmitter {
    /**
     * @deprecated Use start() instead.
     */
    build(): Promise<{
      errorCount: number
    }>;
    start(): Promise<{
      errorCount: number
    }>;
    stop(): void;
    use(): void;
  }

  declare class fractal$web$Server mixins EventEmitter {
    isSynced: boolean;
    port: number;
    ports: {
      sync?: number,
      server?: number
    };
    url: string;
    urls: {
      sync?: {
        local?: string,
        external?: string,
        ui?: string
      },
      server?: string
    };
    start(sync?: boolean): Promise<HttpServer>;
    stop(): void;
    use(mount: string, middleware: any): void;
  }

  declare interface fractal$web$WebServerSyncOptions {
    open?: boolean;
    browser?: string[];
    notify?: boolean;
  }

  declare interface fractal$web$WebServerConfig {
    sync?: boolean;
    syncOptions?: fractal$web$WebServerSyncOptions;
    port?: number;
    watch?: boolean;
    theme?: WebTheme | string;
  }

  declare interface fractal$web$WebBuilderUrls {
    ext?: string;
  }

  declare interface fractal$web$WebBuilderConfig {
    concurrency?: number;
    dest?: string;
    ext?: string;
    urls?: fractal$web$WebBuilderUrls;
    theme?: WebTheme | string;
  }

  declare interface fractal$web$WebStaticConfig {
    path?: string;
    mount?: string;
  }

  declare interface fractal$web$WebConfig {
    builder?: fractal$web$WebBuilderConfig;
    server?: fractal$web$WebServerConfig;
    static?: fractal$web$WebStaticConfig;
    "builder.concurrency"?: number;
    "builder.dest"?: string;
    "builder.ext"?: string;
    "builder.urls"?: fractal$web$WebBuilderUrls;
    "builder.urls.ext"?: string;
    "builder.theme"?: WebTheme | string;
    "server.sync"?: boolean;
    "server.syncOptions"?: fractal$web$WebServerSyncOptions;
    "server.syncOptions.open"?: boolean;
    "server.syncOptions.browser"?: string[];
    "server.syncOptions.notify"?: boolean;
    "server.port"?: number;
    "server.watch"?: boolean;
    "server.theme"?: WebTheme | string;
    "static.path"?: string;
    "static.mount"?: string;
  }

  declare class fractal$web$Web
    mixins undefined.ConfigurableEmitter<fractal$web$WebConfig> {
    server(config?: fractal$web$WebServerConfig): fractal$web$Server;
    builder(config?: fractal$web$WebBuilderConfig): fractal$web$Builder;
    theme(name: string, instance?: WebTheme): this;
    defaultTheme(): WebTheme;
    defaultTheme(instance: WebTheme): this;
  }

  declare var fractal$Fractal: {
    new: fractal$Fractal
  };
  declare export interface FractalConfig {
    project?: {
      title?: string,
      version?: string,
      author?: string
    };
    "project.title"?: string;
    "project.version"?: string;
    "project.author"?: string;
  }
  declare export function create(config?: FractalConfig): fractal$Fractal;

  declare export class Fractal
    mixins undefined.ConfigurableEmitter<FractalConfig> {
    constructor(config?: FractalConfig): this;
    api$components: fractal$apicomponentsComponentSource;
    api$docs: fractal$apidocsDocSource;
    api$assets: fractal$apiassetsAssetSourceCollection;
    fractal$cli: fractal$cliCli;
    fractal$web: fractal$webWeb;
    version: string;
    debug: boolean;
    extend(plugin: string | ((core: any) => void)): this;
    watch(): this;
    unwatch(): this;
    load(): Promise<void>;
  }
  declare export interface CliThemeConfig {
    delimiter?: {
      text?: string,
      format?: (str: string) => string
    };
    styles?: {
      [key: string]: any
    };
    "delimiter.text"?: string;
    "delimiter.format"?: (str: string) => string;
  }
  declare export class CliTheme
    mixins undefined.ConfigurableEmitter<CliThemeConfig> {
    constructor(config?: CliThemeConfig): this;
    setDelimiter(text: string, formatter: (str: string) => string): void;
    delimiter(): string;
    setStyle(name: string, opts: any): void;
    style(name: string): any;
    format(str: string, style?: string, strip?: boolean): string;
  }
  declare export interface WebThemeOptions {
    skin?: string;
    panels?: string[];
    rtl: boolean;
    lang?: string;
    styles?: string[];
    scripts?: string[];
    format?: string;
    static?: {
      mount?: string
    };
    version?: string;
    favicon?: string;
    nav?: string[];
    "static.mount": string;
  }
  declare export class WebTheme
    mixins undefined.ConfigurableEmitter<WebThemeOptions> {
    constructor(viewPaths: string[], options?: WebThemeOptions): this;
    options(): WebThemeOptions;
    options(value: WebThemeOptions): this;
    setOption<K: $Keys<WebThemeOptions>>(
      key: K,
      value: $ElementType<WebThemeOptions, K>
    ): this;
    getOption<K: $Keys<WebThemeOptions>>(
      key: K
    ): $ElementType<WebThemeOptions, K>;
    addLoadPath(path: string): this;
    loadPaths(): string[];
    setErrorView(view: string): void;
    errorView(): string;
    setRedirectView(view: string): void;
    redirectView(): string;
    addStatic(path: string, mount: string): void;
    static (): Array<{
      path: string,
      mount: string
    }>;
    addRoute(
      path: string,
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
          route: {
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
      source: fractal$coreentitiesEntitySource<any>
    ): this;
    _source: fractal$coreentitiesEntitySource<any>;
    engine: TEngine;
    views: Array<{
      handle: string,
      path: string,
      content: string
    }>;
    setHandlePrefix(prefix: string): this;
    load(): void;
    getReferencesForView(handle: string): any[];
    getView(handle: string): any;
    _resolve<T>(value: PromiseLike<T> | T): Promise<T>;
    render(path: string, str: string, context: any, meta: any): Promise<string>;
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
    name: string,
    mode: string,
    scope: string | null,
    color: string | null
  };

  declare function utils$titlize(str: string): string;

  declare function utils$slugify(str: string): string;

  declare function utils$toJSON(item: any): {};

  declare function utils$escapeForRegexp(str: string): string;

  declare function utils$parseArgv(): {
    command: string,
    args: string[],
    opts: any
  };

  declare function utils$stringify(data: any, indent?: number): string;

  declare function utils$fileExistsSync(path: string): boolean;

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
  declare type core$Component = fractal$apicomponentsComponent;

  declare var core$Component: typeof fractal$apicomponentsComponent;

  declare type core$Variant = fractal$apivariantsVariant;

  declare var core$Variant: typeof fractal$apivariantsVariant;

  declare type core$Doc = fractal$apidocsDoc;

  declare var core$Doc: typeof fractal$apidocsDoc;
}
