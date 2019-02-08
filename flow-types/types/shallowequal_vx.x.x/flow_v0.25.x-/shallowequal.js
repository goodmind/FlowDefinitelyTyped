declare type shallowEqual$Customizer<T = any> = (
  objA: any,
  objB: any,
  indexOrKey?: number | string
) => boolean | void;
declare module "shallowequal" {
  declare function shallowEqual<TCtx>(
    objA: any,
    objB: any,
    customizer?: shallowEqual$shallowEqual$Customizer<TCtx>,
    compareContext?: TCtx
  ): boolean;

  declare module.exports: typeof shallowEqual;
}
