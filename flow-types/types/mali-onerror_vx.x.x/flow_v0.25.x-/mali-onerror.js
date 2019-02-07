declare module "mali-onerror" {
  import type { Context } from "mali";

  declare function onError(
    fn: (err: Error, ctx: Context) => void
  ): (ctx: Context, next: () => Promise<void>) => Promise<void>;

  declare module.exports: typeof onError;
}
