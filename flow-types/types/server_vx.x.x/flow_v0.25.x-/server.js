declare module "server" {
  import type { Middlewares, Context } from "./typings/common";

  import type { Options } from "./typings/options";

  import type { Router } from "./router";

  import type { Reply } from "./reply";

  declare module.exports: typeof server;

  declare var npm$namespace$server: {
    router: typeof server$router,
    reply: typeof server$reply
  };
  declare var server$router: Router;

  declare var server$reply: Reply;
  declare function server(
    options: Options,
    ...middlewares: Middlewares
  ): Promise<Context>;

  declare function server(...middlewares: Middlewares): Promise<Context>;
}
