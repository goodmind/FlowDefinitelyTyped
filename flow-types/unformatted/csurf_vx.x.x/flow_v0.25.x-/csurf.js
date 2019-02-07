declare export interface Express$Request {
csrfToken(): string
} declare module 'csurf' {
        declare function csurf(
options?: {
value?: (req: express.Express$Request) => string,
cookie?: csurf$csurf$CookieOptions | boolean,
ignoreMethods?: string[],
sessionKey?: string
}): express.RequestHandler

	declare export type csurf$CookieOptions = {
key: string
} & express.csurf$CookieOptions

	declare module.exports: typeof csurf

    }
