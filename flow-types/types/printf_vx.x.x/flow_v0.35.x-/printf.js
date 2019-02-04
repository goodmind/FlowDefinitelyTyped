declare module 'printf' {
        declare module.exports: typeof printf

	declare function printf(format: string, ...args: any[]): string

	declare function printf(writeStream: NodeJS.WritableStream, format: string, ...args: any[]): void

    }
