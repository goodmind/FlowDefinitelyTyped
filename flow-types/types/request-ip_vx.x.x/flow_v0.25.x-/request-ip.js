declare module "request-ip" {
  import typeof * as http from "http";

  declare type RequestHeaders = {
    "x-client-ip"?: string,
    "x-forwarded-for"?: string,
    "x-real-ip"?: string,
    "x-cluster-client-ip"?: string,
    "x-forwarded"?: string,
    "forwarded-for"?: string,
    forwarded?: string
  } & http.IncomingHttpHeaders;

  declare interface Request {
    headers: RequestHeaders;
    connection: {
      remoteAddress?: string,
      socket?: {
        remoteAddress?: string
      }
    };
    info?: {
      remoteAddress?: string
    };
    socket?: {
      remoteAddress?: string
    };
  }
  declare interface Options {
    attributeName: string;
  }
  declare export function getClientIp(req: Request): string;

  declare export function mw(
    options?: Options
  ): (req: Request, res: any, next: any) => any;
}
