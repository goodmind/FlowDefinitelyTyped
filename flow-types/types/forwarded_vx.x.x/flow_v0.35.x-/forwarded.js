declare module 'forwarded' {
        import type {
          IncomingMessage
        } from 'http';

	declare module.exports: typeof forwarded

	declare function forwarded(req: IncomingMessage): string[]

    }
