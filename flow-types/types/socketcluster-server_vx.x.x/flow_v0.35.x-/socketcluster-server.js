declare module 'socketcluster-server' {
        import type {
          Server
        } from 'http';

	declare export function listen(
port?: number,
options?: SCServer.SCServerOptions,
listeningListener?: () => void): SCServer

	declare export function listen(port?: number, listeningListener?: () => void): SCServer

	declare export function attach(server: Server, options?: SCServer.SCServerOptions): SCServer

    }
