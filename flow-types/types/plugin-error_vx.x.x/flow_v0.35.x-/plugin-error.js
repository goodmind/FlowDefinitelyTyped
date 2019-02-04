declare module 'plugin-error' {
        declare module.exports: typeof PluginError

	declare interface PluginError$PluginErrorOpts {

/**
 * By default the stack will not be shown. Set options.showStack to true if you think the stack is important for your error.
 */
showStack?: boolean,

/**
 * Error properties will be included in err.toString(), but may be omitted by including {showProperties: false} in the options
 */
showProperties?: boolean
} 

declare type PluginError$PluginErrorOpts2 = {

/**
 * If you pass an error object as the message the stack will be pulled from that, otherwise one will be created.
 */
message?: string | Error
} & PluginError$PluginErrorOpts


declare type PluginError$PluginErrorOpts3 = {

/**
 * The name of the plugin
 */
plugin?: string
} & PluginError$PluginErrorOpts2

	declare class PluginError mixins Error {

/**
 * Constructor
 * @param pluginName The name of your plugin
 * @param message If you pass an error object as the message the stack will be pulled from that, otherwise one will be created.
 * @param options Options
 */
constructor(pluginName: string, message: string | Error, options?: PluginError$PluginError$PluginErrorOpts): this;

/**
 * Constructor
 * @param pluginName The name of your plugin
 * @param options Options, including message
 */
constructor(pluginName: string, options: PluginError$PluginError$PluginErrorOpts2): this;

/**
 * Constructor
 * @param options Options, including message and plugin name
 */
constructor(options: PluginError$PluginError$PluginErrorOpts3): this
}
    }
