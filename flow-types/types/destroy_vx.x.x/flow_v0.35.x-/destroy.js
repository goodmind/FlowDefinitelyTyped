declare module 'destroy' {
        import type {
          Stream
        } from 'stream';

	declare module.exports: typeof destroy

	declare function destroy<T: Stream>(stream: T): T

    }
