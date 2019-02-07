declare module "api-error-handler" {
  import typeof * as express from "express";

  declare interface apiErrorHandler$Response {
    status: number;
    stack?: string;
    message: string;
    code?: any;
    name?: string;
    type?: any;
  }
  declare function apiErrorHandler(options?: any): express.ErrorRequestHandler;

  declare module.exports: typeof apiErrorHandler;
}
