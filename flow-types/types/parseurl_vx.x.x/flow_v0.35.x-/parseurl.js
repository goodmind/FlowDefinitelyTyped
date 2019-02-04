declare module 'parseurl' {
        import type {
          IncomingMessage
        } from 'http';

	import type {
          Url
        } from 'url';

	declare function parseurl(req: IncomingMessage): Url | void

	
      declare var npm$namespace$parseurl: {
        original: typeof parseurl$original,
        
      }
declare function parseurl$original(req: IncomingMessage): Url | void

	declare module.exports: typeof parseurl

    }
