declare module 'http-proxy-agent' {
        import type {
          Agent
        } from 'http';

	import type {
          Url
        } from 'url';

	declare class HttpProxyAgent mixins Agent {
constructor(options: string | Url): this;
proxy: Url;
secureProxy: boolean
}
	declare module.exports: typeof HttpProxyAgent

    }
