declare module 'bunyan-prettystream' {
        declare class PrettyStream mixins stream.Writable {

/**
 * @param Output format, can be either `long`, `short`, or `dev`,
defaults to `long`.
 * @param Indicates whether or not output should be colored,
defaults to `true`.
 */
constructor(options?: {
mode?: string,
useColor?: boolean
}): this;

/**
 * Pipes data from this stream to another.
 * @param destination Stream to write data to.
 * @param Indicates whether `end()` should be called on the `destination`
stream when this stream emits `end`, defaults to `true`.
 * @return The `destination` stream.
 */
pipe<T: NodeJS.WritableStream>(destination: T, options?: {
end?: boolean
}): T
}
	declare module.exports: typeof PrettyStream

    }
