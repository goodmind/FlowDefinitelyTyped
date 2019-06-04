declare module "poi" {
  import type { ICompiler, Configuration as WebpackConfig } from "webpack";

  import type { Configuration as WebpackDevServerConfig } from "webpack-dev-server";

  import type { Options as HtmlWebpackPluginOptions } from "html-webpack-plugin";

  import typeof * as WebpackChainConfig from "webpack-chain";

  import typeof CAC from "cac/types/CAC";

  /**
   * https://poi.js.org/api.html#constructor-argv
   */
  declare class PoiCore {
    mode: PoiCore$Mode;
    cli: CAC;

    /**
     * The current running command
     */
    command: $PropertyType<CAC, "command">;
    config: PoiCore$Config;
    isProd: boolean;
    configLoader: PoiCore$ConfigLoader;
    constructor(argv?: string[]): this;

    /**
     * Check if a package is included in the `dependencies` or `devDependencies` field your `package.json`
     */
    hasDependency(name: string): boolean;
    hasPlugin(name: string): boolean;
    hook(hookName: string, handler: PoiCore$HookHandler): void;
    resolveCwd(...args: string[]): string;
    resolveOutDir(...args: string[]): string;
    run(): Promise<void>;
    getCacheConfig(
      dir: string,
      keys: {
        [k: string]: string
      },
      files: $ReadOnlyArray<string>
    ): {
      cacheDirectory: string,
      cacheIdentifier: string
    };
    createWebpackChain(opts?: {
      [k: string]: any
    }): WebpackChainConfig;
    createWebpackCompiler(config: WebpackConfig): ICompiler;
    localResolve(pkg: string, cwd?: string): string | null;
    localRequire(pkg: string, cwd?: string): any;
  }
  declare var PoiCore: typeof npm$namespace$PoiCore;

  declare var npm$namespace$PoiCore: {
    Config: typeof npm$namespace$PoiCore$Config
  };
  declare type PoiCore$Mode = "production" | "development" | "test";

  declare interface PoiCore$Opts {
    type: string;
    mode: PoiCore$Mode;
    [k: string]: any;
  }

  /**
   * https://poi.js.org/config.html
   */
  declare interface PoiCore$Config {
    entry?: PoiCore$Config$Entry;
    output?: PoiCore$Config$Output;
    pages?: PoiCore$Config$Pages;
    babel?: PoiCore$Config$Babel;
    css?: PoiCore$Config$Css;
    assets?: PoiCore$Config$Assets;
    envs?: PoiCore$Config$Envs;
    constants?: PoiCore$Config$Constants;
    chainWebpack?: PoiCore$Config$ChainWebpack;
    configureWebpack?: PoiCore$Config$ConfigureWebpack;
    publicFolder?: PoiCore$Config$PublicFolder;
    devServer?: PoiCore$Config$DevServer;
    plugins?: PoiCore$Config$Plugins;
  }

  declare type PoiCore$Config$Entry = $PropertyType<WebpackConfig, "entry">;

  declare interface PoiCore$Config$Output {
    dir?: string;
    clean?: boolean;
    format?: "iife" | "cjs" | "umd";
    moduleName?: string;
    sourceMap?: boolean;
    minimize?: boolean;
    publicUrl?: string;
    fileNames?: PoiCore$Config$Output$FileNames;
    target?:
      | "web"
      | "electron"
      | "electron-renderer"
      | "electron-main"
      | "node"
      | "node-webkit"
      | "async-node"
      | "webworker";
    html?: PoiCore$Config$Output$Html;
  }

  declare interface PoiCore$Config$Output$FileNames {
    js?: string;
    css?: string;
    font?: string;
    image?: string;
  }

  declare interface PoiCore$Config$Output$HtmlOptions {
    title?: string;
    filename?: string;
    template?: string;
    inject?: boolean;
  }

  declare type PoiCore$Config$Output$Html =
    | boolean
    | PoiCore$Config$Output$HtmlOptions;

  declare interface PoiCore$Config$Pages {
    [pageName: string]:
      | string
      | ($Shape<HtmlWebpackPluginOptions> & {
          entry: string,
          chunks?: string[]
        });
  }

  declare interface PoiCore$Config$Babel {
    jsx?: string;
    transpileModules?: string | string[];
    namedImports?: string | PoiCore$Config$Babel$NamedImportsOptions;
  }

  declare interface PoiCore$Config$Babel$NamedImportsOptions {
    [fileExt: string]: {
      [ComponentName: string]: string
    };
  }

  declare interface PoiCore$Config$Css {
    extract?: boolean;
    sourceMap?: boolean;
    loaderOptions?: PoiCore$Config$Css$LoaderOptions;
  }

  declare interface PoiCore$Config$Css$LoaderOptions {
    css?: any;
    sass?: any;
    postcss?: any;
    less?: any;
    stylus?: any;
  }

  declare interface PoiCore$Config$Assets {
    inlineImageMaxSize?: number;
  }

  declare interface PoiCore$Config$Envs {
    [envName: string]: string;
  }

  declare interface PoiCore$Config$Constants {
    [constantName: string]: string;
  }

  declare interface PoiCore$Config$ChainWebpack {
    (config: WebpackChainConfig, opts: PoiCore$Opts): void;
  }

  declare type PoiCore$Config$ConfigureWebpack =
    | WebpackConfig
    | ((config: WebpackConfig, opts: PoiCore$Opts) => void | WebpackConfig);

  declare type PoiCore$Config$PublicFolder = string | boolean;

  declare interface PoiCore$Config$DevServer {
    host?: string;
    port?: string | number;
    hot?: boolean;
    hotOnly?: boolean;
    hotEntries?: string[];
    historyApiFallback?: $PropertyType<
      WebpackDevServerConfig,
      "historyApiFallback"
    >;
    open?: boolean;
    proxy?: string | $PropertyType<WebpackDevServerConfig, "proxy">;
    https?: $PropertyType<WebpackDevServerConfig, "https">;
    before?: $PropertyType<WebpackDevServerConfig, "before">;
    after?: $PropertyType<WebpackDevServerConfig, "after">;
    headers?: $PropertyType<WebpackDevServerConfig, "headers">;
  }

  declare interface PoiCore$Config$PluginOption {
    resolve: string;
    options?: any;
  }

  declare type PoiCore$Config$Plugins = Array<
    string | PoiCore$Config$PluginOption
  >;

  declare interface PoiCore$ConfigLoader {
    resolve(
      files?: $ReadOnlyArray<string>,
      cwd?: string,
      stopDir?: string
    ): string | null;
    resolve(options?: PoiCore$ConfigLoader$Options): string | null;
    load(files?: $ReadOnlyArray<string>, cwd?: string, stopDir?: string): any;
    load(options?: PoiCore$ConfigLoader$Options): any;
  }

  declare interface PoiCore$ConfigLoader$Options {
    files?: string[];
    cwd?: string;
    stopDir?: string;
    packageKey?: string;
    parseJSON?: (str: string) => any;
  }

  declare interface PoiCore$HookHandler {
    (config: WebpackChainConfig, opts: PoiCore$Opts): void;
  }
  declare export default typeof PoiCore;
}
