export interface Express$Request {
  csrfToken(): string;
}
declare module "csurf" {
  import typeof * as express from "express-serve-static-core";

  declare function csurf(options?: {
    value?: (req: express.Request) => string,
    cookie?: csurf$CookieOptions | boolean,
    ignoreMethods?: string[],
    sessionKey?: string
  }): express.RequestHandler;

  declare export type csurf$CookieOptions = {
    key: string
  } & express.CookieOptions;

  declare export default typeof csurf;
}
