declare module "roads-server" {
  import type { Road } from "roads";

  /**
   * Roads-Server is a simple webserver for setting up and using the roads framework on an HTTP or HTTP 2 server
   */
  declare export class Server {
    /**
     * @param Roads The Road that handles all the routes
     * @param error_handler An overwrite to the standard error handler. Accepts a single parameter (the error) and should return a Roads.Response object
     */
    constructor(Roads: Road, error_handler?: (error: any) => any): this;

    /**
     * Start the http server. Accepts the same parameters as HttpServer.listen
     * @param port Port which listen the server
     * @param handler Execution tasks after start the server
     */
    listen(port: number, handler: () => any): any;
  }
  declare export class Http2Server {
    /**
     * @param Roads The Road that handles all the routes
     */
    constructor(Roads: Road): this;

    /**
     * Start the http server. Accepts the same parameters as HttpServer.listen
     * @param port Port which listen the server
     * @param handler Execution tasks after start the server
     */
    listen(port: number, handler: () => any): any;
  }
}
