declare module 'log-update' {
        declare module.exports: typeof logUpdate

	declare function logUpdate(...text: string[]): void

	
      declare var npm$namespace$logUpdate: {
        clear: typeof logUpdate$clear,
done: typeof logUpdate$done,
create: typeof logUpdate$create,
        stderr: typeof logUpdate$stderr,
      }
declare function logUpdate$clear(): void


declare function logUpdate$done(): void


declare var logUpdate$stderr: typeof logUpdate;

declare function logUpdate$create(stream: NodeJS.WritableStream): typeof logUpdate

    }
