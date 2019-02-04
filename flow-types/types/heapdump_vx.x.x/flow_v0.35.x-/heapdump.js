declare module 'heapdump' {
        declare export function writeSnapshot(
dumpFileName?: string,
callback?: (err: Error | null, filename: string | void) => void): void

	declare export function writeSnapshot(callback: (err: Error | null, filename: string | void) => void): void

    }
