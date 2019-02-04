declare module 'pause' {
        import typeof * as stream from 'stream';

	declare module.exports: typeof pause

	declare function pause(stream: stream.Stream): pause$pause$Handle

	declare interface pause$Handle {
end(): void,
resume(): void
} 
    }
