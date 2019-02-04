declare module 'broccoli-plugin' {
        declare module.exports: typeof BroccoliPlugin

	declare type BroccoliPlugin$BroccoliNode = BroccoliPlugin | string;

declare interface BroccoliPlugin$BroccoliPluginOptions {

/**
 * The name of this plugin. Defaults to `this.constructor.name`.
 */
name?: string,

/**
 * A descriptive annotation. Useful for debugging, to tell multiple
 * instances of the same plugin apart.
 */
annotation?: string,

/**
 * If `true`, the output directory is not automatically emptied between
 * builds. Defaults to `false`.
 */
persistentOutput?: boolean,

/**
 * If `true`, a cache directory is created automatically and the path is
 * set at `cachePath`. If `false`, a cache directory is not created and
 * `this.cachePath` is `undefined`. Defaults to `true`.
 */
needsCache?: boolean
} 
	declare class BroccoliPlugin  {
constructor(inputNodes: BroccoliPlugin$BroccoliPlugin$BroccoliNode[], options?: BroccoliPlugin$BroccoliPlugin$BroccoliPluginOptions): this;

/**
 * An array of paths on disk corresponding to each node in `inputNodes`.
 * Your plugin will read files from these paths.
 */
inputPaths: $ReadOnlyArray<string>;

/**
 * The path on disk corresponding to this plugin instance (this node).
 * Your plugin will write files to this path. This directory is emptied by
 * Broccoli before each build, unless the `persistentOutput` options is
 * `true`.
 */
outputPath: string;

/**
 * The path on disk to an auxiliary cache directory. Use this to store
 * files that you want preserved between builds. This directory will
 * only be deleted when Broccoli exits. If a cache directory is not
 * needed, set `needsCache` to false when calling `broccoli-plugin`
 * constructor.
 */
cachePath: string;

/**
 * Override this method in your subclass. It will be called on each
 * (re-)build. All paths stay the same between builds.
 * To perform asynchronous work, return a promise.
 */
build(): void | Promise<any>;

/**
 * Advanced usage only.
 * Return the object on which Broccoli will call `obj.build()`. Called
 * once after instantiation. By default, returns `this`.
 */
getCallbackObject(): {
build(): void | Promise<any>
}
}
    }
