declare type Express$Response = {} & ExpressMinifyInterfaces$ExpressMinifyInterfaces$ExpressMinifyResponse;
declare interface ExpressMinifyInterfaces$ExpressMinifyOptions {
  /**
   * The directory for cache storage (must be writeable). Pass false to cache in the memory (not recommended).
   */
  cache?: string | boolean;

  /**
   * Customize UglifyJS instance (require('uglify-js')).
   */
  uglifyJS?: NodeRequire;

  /**
   * Customize cssmin instance (require('cssmin')).
   */
  cssmin?: NodeRequire;

  /**
   * Handle compiling errors or minifying errors. You can determine what to respond when facing such errors.
   */
  onerror?: Function;

  /**
   * Matches JavaScript content-type.
   */
  js_match?: RegExp;

  /**
   * Matches CSS content-type.
   */
  css_match?: RegExp;

  /**
   * Matches SASS content-type.
   */
  sass_match?: RegExp;

  /**
   * Matches LESS content-type.
   */
  less_match?: RegExp;

  /**
   * Matches Stylus content-type.
   */
  stylus_match?: RegExp;

  /**
   * Matches CoffeeScript content-type.
   */
  coffee_match?: RegExp;

  /**
   * Matches JSON content-type.
   */
  json_match?: RegExp;
}

declare interface ExpressMinifyInterfaces$ExpressMinifyResponse {
  /**
   * Pass true to disable all kind of processing: no compiling, no minifying.
   */
  _skip: boolean;

  /**
   * Pass true to disable minifying, suitable for already-minified contents.
   */
  _no_minify: boolean;

  /**
   * Pass true to disable caching the response data, suitable for dynamic contents.
   */
  _no_cache: boolean;

  /**
   * Pass false to disable mangling names
   */
  _uglifyMangle: boolean;

  /**
   * Pass an object if you wish to specify additional UglifyJS
   */
  _uglifyOutput: Object;

  /**
   * Pass an object to specify custom UglifyJS compressor options (pass false to skip).
   */
  _uglifyCompress: Object | boolean;
}
declare module "express-minify" {
  declare function minify(
    options?: ExpressMinifyInterfaces$ExpressMinifyInterfaces$ExpressMinifyOptions
  ): express.RequestHandler;

  declare module.exports: typeof minify;
}
