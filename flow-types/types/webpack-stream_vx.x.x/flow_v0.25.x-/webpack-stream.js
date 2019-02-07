declare module "webpack-stream" {
  import typeof * as webpack from "webpack";

  declare module.exports: typeof webpackStream;

  /**
   * Run webpack with the specified configuration and webpack instance
   * @param config - Webpack configuration
   * @param wp - A webpack object
   * @param callback - A callback with the webpack stats and error objects.
   */
  declare function webpackStream(
    config?: webpack.Configuration,
    wp?: typeof webpack,
    callback?: webpack.Compiler.Handler
  ): NodeJS.ReadWriteStream;
}
