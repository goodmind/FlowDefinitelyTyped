declare module "redux" {
  declare export type PromiseAction<R> = {
    payload: Promise<R>
  } & Action;

  declare type PayloadType<PA> =
    "There was Conditional Type, use $Call utility type";
  declare export interface Dispatch<S> {
    <R, PA: PromiseAction<R>>(
      action: PA
    ): Promise<{
      value: PayloadType<PA>,
      type: string
    }>;
  }
}
declare module "redux-promise-middleware" {
  import type { Middleware } from "redux";

  declare export default function promiseMiddleware(config?: {
    promiseTypeSuffixes?: string[],
    promiseTypeDelimiter?: string
  }): Middleware;
}
