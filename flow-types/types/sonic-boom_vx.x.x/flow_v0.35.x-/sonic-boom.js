declare module 'sonic-boom' {
        import type {
          EventEmitter
        } from 'events';

	declare module.exports: typeof SonicBoom

	declare class SonicBoom mixins EventEmitter {

/**
 * @param fileDescriptor File path or numerical file descriptor
relative protocol is enabled. Default: process.stdout
 * @returns a new sonic-boom instance
 */
constructor(fileDescriptor: string | number): this;

/**
 * Writes the string to the file. It will return false to signal the producer to slow down.
 */
write(string: string): void;

/**
 * Writes the current buffer to the file if a write was not in progress.
 * Do nothing if minLength is zero or if it is already writing.
 */
flush(): void;

/**
 * Reopen the file in place, useful for log rotation.
 */
reopen(fileDescriptor?: string | number): void;

/**
 * Flushes the buffered data synchronously. This is a costly operation.
 */
flushSync(): void;

/**
 * Closes the stream, the data will be flushed down asynchronously
 */
end(): void;

/**
 * Closes the stream immediately, the data is not flushed.
 */
destroy(): void
}
    }
