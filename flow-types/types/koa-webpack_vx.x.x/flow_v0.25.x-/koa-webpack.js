declare module "koa-webpack" {
  declare function koaWebpack(
    options?: koaWebpack$koaWebpack$Options
  ): Promise<Koa.Middleware & koaWebpack$koaWebpack$CombinedWebpackMiddleware>;

  declare interface koaWebpack$Options {
    compiler?: webpack.Compiler;
    config?: webpack.Configuration;
    devMiddleware?: webpackDevMiddleware.koaWebpack$Options;
    hotClient?: webpackHotClient.koaWebpack$Options | boolean;
  }

  declare interface koaWebpack$CombinedWebpackMiddleware {
    devMiddleware: webpackDevMiddleware.WebpackDevMiddleware;

    /**
     * @todo make this a `webpack-hot-client@^4.0.0` instance, no typings for v4 available yet
     */
    hotClient: {
      close: () => void,
      options: webpackHotClient.koaWebpack$Options,
      server: any
    };
    close(callback?: () => any): void;
  }
  declare module.exports: typeof koaWebpack;
}
