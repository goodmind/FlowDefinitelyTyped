declare module 'basic-auth' {
        import typeof * as http from 'http';

	declare function auth(req: http.IncomingMessage): auth$auth$BasicAuthResult | void

	
      declare var npm$namespace$auth: {
        parse: typeof auth$parse,
        
      }
declare interface auth$BasicAuthResult {
name: string,
pass: string
} 


/**
 * Parse basic auth to object.
 */
declare function auth$parse(authorizationHeader: string): auth$BasicAuthResult | void

	declare module.exports: typeof auth

    }
