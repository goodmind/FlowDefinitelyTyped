declare module "co-body" {
  import typeof * as http from "http";

  import typeof * as Koa from "koa";

  import typeof * as qs from "qs";

  declare type CoBody$Context = http.IncomingMessage | Koa.CoBody$Context;

  declare export interface CoBody$Parse {
    (context: CoBody$Context, options?: CoBody$Options): Promise<any>;
    text: (context: CoBody$Context, options?: CoBody$Options) => Promise<any>;
    form: (context: CoBody$Context, options?: CoBody$Options) => Promise<any>;
    json: (context: CoBody$Context, options?: CoBody$Options) => Promise<any>;
  }

  declare export interface CoBody$Options {
    limit?: number | string;
    strict?: boolean;
    queryString?: qs.IParseOptions;
    jsonTypes?: string[];
    returnRawBody?: boolean;
    formTypes?: string[];
    textTypes?: string[];
    encoding?: string;
    length?: number;
  }
  declare var CoBody: CoBody$CoBody$Parse;
  declare module.exports: typeof CoBody;
}
