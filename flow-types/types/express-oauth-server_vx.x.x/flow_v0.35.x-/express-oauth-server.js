declare module 'express-oauth-server' {
        import typeof * as express from 'express';

	import typeof * as OAuth2Server from 'oauth2-server';

	declare class ExpressOAuthServer  {
server: OAuth2Server;
constructor(options: OAuth2Server.ServerOptions): this;
authenticate(
options?: OAuth2Server.AuthenticateOptions): (
request: express.Request,
response: express.Response,
next: express.NextFunction) => Promise<OAuth2Server.Token>;
authorize(
options?: OAuth2Server.AuthorizeOptions): (
request: express.Request,
response: express.Response,
next: express.NextFunction) => Promise<OAuth2Server.AuthorizationCode>;
token(
options?: OAuth2Server.TokenOptions): (
request: express.Request,
response: express.Response,
next: express.NextFunction) => Promise<OAuth2Server.Token>
}
	declare module.exports: typeof ExpressOAuthServer

    }
