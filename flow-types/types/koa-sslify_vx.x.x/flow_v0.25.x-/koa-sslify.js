declare module "koa-sslify" {
  import typeof * as koa from "koa";

  declare interface sslify$Options {
    trustProtoHeader?: boolean;
    trustAzureHeader?: boolean;
    port?: number;
    hostname?: string;
    ignoreUrl?: boolean;
    temporary?: boolean;
    redirectMethods?: string[];
    internalRedirectMethods?: string[];
    specCompliantDisallow?: boolean;
  }
  declare function sslify(options: sslify$sslify$Options): koa.Middleware;

  declare module.exports: typeof sslify;
}
