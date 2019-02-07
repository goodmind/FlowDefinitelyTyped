declare module "webpack-chain" {
  import typeof * as webpack from "webpack";

  import typeof * as https from "https";

  declare module.exports: typeof Config;

  declare class __Config$Chained<Parent> {
    end(): Parent;
  }

  declare class __Config$TypedChainedMap<Parent, Value>
    mixins __Config$Chained<Parent> {
    clear(): this;
    delete(key: string): this;
    has(key: string): boolean;
    get(key: string): Value;
    set(key: string, value: Value): this;
    merge(obj: {
      [key: string]: Value
    }): this;
    entries(): {
      [key: string]: Value
    };
    values(): Value[];
    when(
      condition: boolean,
      trueBrancher: (obj: this) => void,
      falseBrancher?: (obj: this) => void
    ): this;
  }

  declare class __Config$ChainedMap<Parent>
    mixins __Config$TypedChainedMap<Parent, any> {}

  declare class __Config$TypedChainedSet<Parent, Value>
    mixins __Config$Chained<Parent> {
    add(value: Value): this;
    prepend(value: Value): this;
    clear(): this;
    delete(key: string): this;
    has(key: string): boolean;
    merge(arr: Value[]): this;
    values(): Value[];
    when(
      condition: boolean,
      trueBrancher: (obj: this) => void,
      falseBrancher?: (obj: this) => void
    ): this;
  }

  declare class __Config$ChainedSet<Parent>
    mixins __Config$TypedChainedSet<Parent, any> {}
  declare class Config mixins __Config$__Config$ChainedMap<void> {
    devServer: Config$Config$DevServer;
    entryPoints: Config$__Config$TypedChainedMap<
      Config,
      Config$Config$EntryPoint
    >;
    module: Config$Config$Module;
    node: Config$__Config$ChainedMap<this>;
    output: Config$Config$Output;
    optimization: Config$Config$Optimization;
    performance: Config$Config$Performance;
    plugins: Config$Config$Plugins<this>;
    resolve: Config$Config$Resolve;
    resolveLoader: Config$Config$ResolveLoader;
    amd(value: {
      [moduleName: string]: boolean
    }): this;
    bail(value: boolean): this;
    cache(value: boolean | any): this;
    devtool(value: Config$Config$DevTool): this;
    context(value: string): this;
    externals(
      value: webpack.ExternalsElement | webpack.ExternalsElement[]
    ): this;
    loader(value: any): this;
    profile(value: boolean): this;
    recordsPath(value: string): this;
    recordsInputPath(value: string): this;
    recordsOutputPath(value: string): this;
    stats(value: webpack.Options.Stats): this;
    target(value: string): this;
    watch(value: boolean): this;
    watchOptions(value: webpack.Options.WatchOptions): this;
    entry(name: string): Config$Config$EntryPoint;
    plugin(name: string): Config$Config$Plugin<this>;
    toConfig(): webpack.Configuration;
  }
  declare class Config$Chained<Parent> mixins __Config$Config$Chained<Parent> {}

  declare class Config$TypedChainedMap<Parent, Value>
    mixins __Config$Config$TypedChainedMap<Parent, Value> {}

  declare class Config$ChainedMap<Parent>
    mixins __Config$Config$TypedChainedMap<Parent, any> {}

  declare class Config$TypedChainedSet<Parent, Value>
    mixins __Config$Config$TypedChainedSet<Parent, Value> {}

  declare class Config$ChainedSet<Parent>
    mixins __Config$Config$TypedChainedSet<Parent, any> {}

  declare class Config$Plugins<Parent>
    mixins Config$TypedChainedMap<Parent, Config$Plugin<Parent>> {}

  declare class Config$Plugin<Parent>
    mixins Config$ChainedMap<Parent>, Config$Orderable {
    init(
      value: (plugin: Config$PluginClass, args: any[]) => webpack.Config$Plugin
    ): this;
    use(plugin: Config$PluginClass, args?: any[]): this;
    tap(f: (args: any[]) => any[]): this;
    before(name: string): this;
    after(name: string): this;
  }

  declare class Config$Module mixins Config$ChainedMap<Config> {
    rules: Config$TypedChainedMap<this, Config$Rule>;
    rule(name: string): Config$Rule;
    noParse(
      noParse: RegExp | RegExp[] | ((contentPath: string) => boolean)
    ): this;
  }

  declare class Config$Output mixins Config$ChainedMap<Config> {
    chunkFilename(value: string): this;
    crossOriginLoading(value: boolean | string): this;
    filename(value: string): this;
    library(value: string): this;
    libraryTarget(value: string): this;
    devtoolFallbackModuleFilenameTemplate(value: any): this;
    devtoolLineToLine(value: any): this;
    devtoolModuleFilenameTemplate(value: any): this;
    hashFunction(value: string): this;
    hashDigest(value: string): this;
    hashDigestLength(value: number): this;
    hashSalt(value: any): this;
    hotUpdateChunkFilename(value: string): this;
    hotUpdateFunction(value: any): this;
    hotUpdateMainFilename(value: string): this;
    jsonpFunction(value: string): this;
    path(value: string): this;
    pathinfo(value: boolean): this;
    publicPath(value: string): this;
    sourceMapFilename(value: string): this;
    sourcePrefix(value: string): this;
    strictModuleExceptionHandling(value: boolean): this;
    umdNamedDefine(value: boolean): this;
  }

  declare class Config$DevServer mixins Config$ChainedMap<Config> {
    clientLogLevel(value: "none" | "error" | "warning" | "info"): this;
    compress(value: boolean): this;
    contentBase(value: boolean | string | string[]): this;
    filename(value: string): this;
    headers(value: {
      [header: string]: string
    }): this;
    historyApiFallback(value: boolean | any): this;
    host(value: string): this;
    hot(value: boolean): this;
    hotOnly(value: boolean): this;
    https(value: boolean | https.ServerOptions): this;
    inline(value: boolean): this;
    lazy(value: boolean): this;
    noInfo(value: boolean): this;
    overlay(
      value:
        | boolean
        | {
            warnings?: boolean,
            errors?: boolean
          }
    ): this;
    port(value: number): this;
    progress(value: boolean): this;
    proxy(value: any): this;
    public(value: string): this;
    publicPath(publicPath: string): this;
    quiet(value: boolean): this;
    setup(value: (expressApp: any) => void): this;
    staticOptions(value: any): this;
    stats(value: webpack.Options.Stats): this;
    watchContentBase(value: boolean): this;
    watchOptions(value: any): this;
  }

  declare class Config$Performance mixins Config$ChainedMap<Config> {
    hints(value: boolean | "error" | "warning"): this;
    maxEntrypointSize(value: number): this;
    maxAssetSize(value: number): this;
    assetFilter(value: (assetFilename: string) => boolean): this;
  }

  declare class Config$EntryPoint
    mixins Config$TypedChainedSet<Config, string> {}

  declare class Config$Resolve mixins Config$ChainedMap<Config> {
    alias: Config$TypedChainedMap<this, string>;
    aliasFields: Config$TypedChainedSet<this, string>;
    descriptionFiles: Config$TypedChainedSet<this, string>;
    extensions: Config$TypedChainedSet<this, string>;
    mainFields: Config$TypedChainedSet<this, string>;
    mainFiles: Config$TypedChainedSet<this, string>;
    modules: Config$TypedChainedSet<this, string>;
    plugins: Config$TypedChainedMap<this, Config$Plugin<this>>;
    enforceExtension(value: boolean): this;
    enforceModuleExtension(value: boolean): this;
    unsafeCache(value: boolean | RegExp | RegExp[]): this;
    symlinks(value: boolean): this;
    cachePredicate(
      value: (data: {
        path: string,
        request: string
      }) => boolean
    ): this;
    plugin(name: string): Config$Plugin<this>;
  }

  declare class Config$ResolveLoader mixins Config$ChainedMap<Config> {
    extensions: Config$TypedChainedSet<this, string>;
    modules: Config$TypedChainedSet<this, string>;
    moduleExtensions: Config$TypedChainedSet<this, string>;
    packageMains: Config$TypedChainedSet<this, string>;
  }

  declare class Config$Rule mixins Config$ChainedMap<Config$Module> {
    uses: Config$TypedChainedMap<this, Config$Use>;
    include: Config$TypedChainedSet<this, webpack.Condition>;
    exclude: Config$TypedChainedSet<this, webpack.Condition>;
    parser(value: {
      [optName: string]: any
    }): this;
    test(value: webpack.Condition | webpack.Condition[]): this;
    enforce(value: "pre" | "post"): this;
    use(name: string): Config$Use;
    pre(): this;
    post(): this;
  }

  declare class Config$Optimization mixins Config$ChainedMap<Config> {
    concatenateModules(value: boolean): this;
    flagIncludedChunks(value: boolean): this;
    mergeDuplicateChunks(value: boolean): this;
    minimize(value: boolean): this;
    minimizer(name: string): Config$Plugin<this>;
    namedChunks(value: boolean): this;
    namedModules(value: boolean): this;
    nodeEnv(value: boolean | string): this;
    noEmitOnErrors(value: boolean): this;
    occurrenceOrder(value: boolean): this;
    portableRecords(value: boolean): this;
    providedExports(value: boolean): this;
    removeAvailableModules(value: boolean): this;
    removeEmptyChunks(value: boolean): this;
    runtimeChunk(
      value: boolean | "single" | "multiple" | Config$RuntimeChunk
    ): this;
    sideEffects(value: boolean): this;
    splitChunks(value: Config$SplitChunksOptions): this;
    usedExports(value: boolean): this;
  }

  declare interface Config$RuntimeChunk {
    name: string | Config$RuntimeChunkFunction;
  }

  declare type Config$RuntimeChunkFunction = (
    entryPoint: Config$EntryPoint
  ) => string;

  declare interface Config$SplitChunksOptions {
    [name: string]: any;
  }

  declare interface Config$LoaderOptions {
    [name: string]: any;
  }

  declare class Config$Use
    mixins Config$ChainedMap<Config$Rule>, Config$Orderable {
    loader(value: string): this;
    options(value: Config$LoaderOptions): this;
    tap(f: (options: Config$LoaderOptions) => Config$LoaderOptions): this;
    before(name: string): this;
    after(name: string): this;
  }

  declare type Config$DevTool =
    | "eval"
    | "inline-source-map"
    | "cheap-eval-source-map"
    | "cheap-source-map"
    | "cheap-module-eval-source-map"
    | "cheap-module-source-map"
    | "eval-source-map"
    | "source-map"
    | "nosources-source-map"
    | "hidden-source-map"
    | "nosources-source-map"
    | "@eval"
    | "@inline-source-map"
    | "@cheap-eval-source-map"
    | "@cheap-source-map"
    | "@cheap-module-eval-source-map"
    | "@cheap-module-source-map"
    | "@eval-source-map"
    | "@source-map"
    | "@nosources-source-map"
    | "@hidden-source-map"
    | "@nosources-source-map"
    | "#eval"
    | "#inline-source-map"
    | "#cheap-eval-source-map"
    | "#cheap-source-map"
    | "#cheap-module-eval-source-map"
    | "#cheap-module-source-map"
    | "#eval-source-map"
    | "#source-map"
    | "#nosources-source-map"
    | "#hidden-source-map"
    | "#nosources-source-map"
    | "#@eval"
    | "#@inline-source-map"
    | "#@cheap-eval-source-map"
    | "#@cheap-source-map"
    | "#@cheap-module-eval-source-map"
    | "#@cheap-module-source-map"
    | "#@eval-source-map"
    | "#@source-map"
    | "#@nosources-source-map"
    | "#@hidden-source-map"
    | "#@nosources-source-map"
    | boolean;

  declare interface Config$PluginClass {
    new(...opts: any[]): webpack.Config$Plugin;
  }

  declare interface Config$Orderable {
    before(name: string): this;
    after(name: string): this;
  }
}
