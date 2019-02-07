declare module "connect-datadog" {
  declare module.exports: typeof Factory;

  declare function Factory(
    options?: Factory$Factory$Options
  ): express.RequestHandler;

  declare interface Factory$Options {
    stat?: string;
    tags?: string[];
    path?: boolean;
    method?: boolean;
    protocol?: boolean;
    response_code?: boolean;
    dogstatsd?: dogstatsd.StatsD;
  }
}
