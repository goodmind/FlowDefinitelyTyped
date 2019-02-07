declare module "webpack-hot-client" {
  import typeof * as webpack from "webpack";

  import typeof * as net from "net";

  declare module.exports: typeof WebpackHotClient;

  declare function WebpackHotClient(
    compiler: webpack.Compiler | webpack.MultiCompiler,
    options: WebpackHotClient$WebpackHotClient$Options
  ): void;

  declare interface WebpackHotClient$WebpackHotHost {
    /**
     * Client hostname that is used in the browser by WebSockets
     */
    client: string;

    /**
     * Server hostname
     */
    server: string;
  }

  declare interface WebpackHotClient$Options {
    /**
     * Automatically configure every entry
     */
    allEntries?: boolean;

    /**
     * Auto configure the given webpack config with the hot configuration
     */
    autoConfigure?: boolean;

    /**
     * Level of information for webpack-hot-client to output
     */
    host?: WebpackHotClient$WebpackHotHost | string;

    /**
     * Enable hot module reloading
     */
    hmr?: boolean;

    /**
     * Enable HTTPS
     */
    https?: boolean;

    /**
     * Level of information for webpack-hot-client to output
     */
    logLevel?: "trace" | "debug" | "info" | "warn" | "error" | "silent";

    /**
     * Prepend timestamp to each log line
     */
    logTime?: boolean;

    /**
     * Port that the WebSocket listens on
     */
    port?: number;

    /**
     * Reload the page if a patch cannot be applied by webpack
     */
    reload?: boolean;

    /**
     * Server instance for webpack-hot-client to connect to
     */
    server?: net.Server;

    /**
     * Webpack stats configuration
     */
    stats?: webpack.WebpackHotClient$Options.Stats;

    /**
     * Webpack compile target
     */
    validTargets?: string[];
  }
}
