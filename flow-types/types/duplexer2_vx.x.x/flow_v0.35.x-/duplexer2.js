declare module 'duplexer2' {
        declare function duplexer2(
options: {
bubbleErrors: boolean
},
writable: NodeJS.WritableStream,
readable: NodeJS.ReadableStream): NodeJS.ReadWriteStream

	declare function duplexer2(
writable: NodeJS.WritableStream,
readable: NodeJS.ReadableStream): NodeJS.ReadWriteStream

	declare module.exports: typeof duplexer2

    }
