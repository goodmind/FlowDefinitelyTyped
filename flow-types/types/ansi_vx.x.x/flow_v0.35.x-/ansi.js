declare module 'ansi' {
        import type {
          Stream
        } from 'stream';

	declare interface CursorOptions {
enabled: boolean,
buffering: boolean
} 
	declare function ansi(stream: Stream, options?: CursorOptions): ansi$ansi$Cursor

	declare interface ansi$Cursor {
[key: string]: ((...anything: any[]) => ansi$Cursor) | ansi$Colorer
} 

declare interface ansi$Colorer {
[key: string]: (...anything: any[]) => (ansi$Cursor | ansi$Colorer)
} 
	declare module.exports: typeof ansi

    }
