declare module "gulp-util" {
  import typeof chalk from "chalk";

  declare export { vinyl as File };

  /**
   * Replaces a file extension in a path. Returns the new path.
   */
  declare export function replaceExtension(npath: string, ext: string): string;

  declare export var colors: typeof chalk;
  declare export var date: {
    (now?: Date | string, mask?: string, convertLocalTimeToUTC?: boolean): any,
    masks: any
  };

  /**
   * Logs stuff. Already prefixed with [gulp] and all that. Use the right colors
   * for values. If you pass in multiple arguments it will join them by a space.
   */
  declare export function log(message?: any, ...optionalParams: any[]): void;

  /**
   * This is a lodash.template function wrapper. You must pass in a valid gulp
   * file object so it is available to the user or it will error. You can not
   * configure any of the delimiters. Look at the lodash docs for more info.
   */
  declare export function template(
    tmpl: string
  ): (opt: {
    file: {
      path: string
    }
  }) => string;

  declare export function template(
    tmpl: string,
    opt: {
      file: {
        path: string
      }
    }
  ): string;

  declare export var env: any;
  declare export function beep(): void;

  /**
   * Returns a stream that does nothing but pass data straight through.
   */
  declare export var noop: typeof through2;
  declare export function isStream(obj: any): boolean;

  declare export function isBuffer(obj: any): boolean;

  declare export function isNull(obj: any): boolean;

  declare export var linefeed: string;
  declare export function combine(
    streams: NodeJS.ReadWriteStream[]
  ): () => NodeJS.ReadWriteStream;

  declare export function combine(
    ...streams: NodeJS.ReadWriteStream[]
  ): () => NodeJS.ReadWriteStream;

  /**
   * This is similar to es.wait but instead of buffering text into one string
   * it buffers anything into an array (so very useful for file objects).
   */
  declare export function buffer(
    cb?: (err: Error, data: any[]) => void
  ): NodeJS.ReadWriteStream;

  declare export class PluginError mixins Error, PluginErrorOptions {
    constructor(options?: PluginErrorOptions): this;
    constructor(pluginName: string, options?: PluginErrorOptions): this;
    constructor(
      pluginName: string,
      message: string | Error,
      options?: PluginErrorOptions
    ): this;

    /**
     * The module name of your plugin.
     */
    name: string;

    /**
     * Can be a string or an existing error.
     */
    message: any;
    fileName: string;
    lineNumber: number;

    /**
     * You need to include the message along with this stack. If you pass an
     * error in as the message the stack will be pulled from that, otherwise one
     * will be created.
     */
    stack: string;

    /**
     * By default the stack will not be shown. Set this to true if you think the
     * stack is important for your error.
     */
    showStack: boolean;

    /**
     * Error properties will be included in err.toString(). Can be omitted by
     * setting this to false.
     */
    showProperties: boolean;
    plugin: string;
    error: Error;
  }
  declare export interface PluginErrorOptions {
    /**
     * The module name of your plugin.
     */
    name?: string;

    /**
     * Can be a string or an existing error.
     */
    message?: any;
    fileName?: string;
    lineNumber?: number;

    /**
     * You need to include the message along with this stack. If you pass an
     * error in as the message the stack will be pulled from that, otherwise one
     * will be created.
     */
    stack?: string;

    /**
     * By default the stack will not be shown. Set this to true if you think the
     * stack is important for your error.
     */
    showStack?: boolean;

    /**
     * Error properties will be included in err.toString(). Can be omitted by
     * setting this to false.
     */
    showProperties?: boolean;
    plugin?: string;
    error?: Error;
  }
}
