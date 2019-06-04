declare module "clone-deep" {
  declare function cloneDeep<T>(
    val: T,
    instanceClone?: true | ((val: T) => T)
  ): T;

  declare export default typeof cloneDeep;
}
