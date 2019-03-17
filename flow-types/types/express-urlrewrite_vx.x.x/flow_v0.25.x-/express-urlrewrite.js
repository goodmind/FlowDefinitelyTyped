declare module "express-urlrewrite" {
  import typeof * as express from "express";

  declare function rewrite(s: string): express.Handler;

  declare function rewrite(s: string | RegExp, t: string): express.Handler;

  declare export default typeof rewrite;
}
