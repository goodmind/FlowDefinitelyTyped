declare module "express-unless" {
  declare function unless(
    options: unless$unless$Options
  ): express.unless$RequestHandler;

  declare function unless(
    options: $ElementType<unless$unless$Options, "custom">
  ): express.unless$RequestHandler;

  declare export interface unless$Options {
    custom?: (req: express.Request) => boolean;
    path?: string | string[];
    ext?: string | string[];
    method?: string | string[];
  }

  declare export type unless$RequestHandler = {
    unless?: typeof unless
  } & express.unless$RequestHandler;

  declare module.exports: typeof unless;
}
