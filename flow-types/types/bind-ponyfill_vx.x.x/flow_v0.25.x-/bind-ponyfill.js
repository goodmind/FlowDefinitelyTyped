declare module "bind-ponyfill" {
  declare function ponyBind(
    fn: Function,
    that: any,
    ...args: Array<any>
  ): Function;

  declare module.exports: typeof ponyBind;
}
