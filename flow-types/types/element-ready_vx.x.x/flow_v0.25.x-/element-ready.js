declare module "element-ready" {
  declare module.exports: typeof elementReady;

  declare function elementReady(
    selector: string
  ): pCancelable.PCancelable<HTMLElement>;
}
