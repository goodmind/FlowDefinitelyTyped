declare module 'http-graceful-shutdown' {
        import type {
          HttpServer
        } from 'http';

	import type {
          HttpsServer
        } from 'https';

	declare function GracefulShutdown(
server: HttpServer | HttpsServer,
options?: GracefulShutdown$GracefulShutdown$Options): void

	declare interface GracefulShutdown$Options {
signals?: string,
timeout?: number,
development?: boolean,
onShutdown?: () => Promise<void>,
finally?: () => void
} 
	declare module.exports: typeof GracefulShutdown

    }
