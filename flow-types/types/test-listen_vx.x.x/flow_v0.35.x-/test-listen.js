declare module 'test-listen' {
        import type {
          Server
        } from 'net';

	declare function testListen(srv: Server, hostname?: string): Promise<string>

	declare module.exports: typeof testListen

    }
