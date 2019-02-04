declare module 'zipkin-instrumentation-fetch' {
        import type {
          Tracer
        } from 'zipkin';

	import typeof fetch from 'node-fetch';

	declare interface Options {
tracer: Tracer,
remoteServiceName: string
} 
	declare function wrapFetch(rawFetch: typeof fetch, options: Options): typeof fetch

	declare module.exports: typeof wrapFetch

    }
