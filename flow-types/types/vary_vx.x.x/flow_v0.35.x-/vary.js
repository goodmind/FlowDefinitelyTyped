declare module 'vary' {
        import type {
          ServerResponse
        } from 'http';

	declare module.exports: typeof vary

	declare function vary(res: ServerResponse, field: string | string[]): void

	
      declare var npm$namespace$vary: {
        append: typeof vary$append,
        
      }
declare function vary$append(header: string, field: string | string[]): string

    }
