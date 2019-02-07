declare module "core-object" {
  import type { Mix, Super, Constructor } from "./-private/utils";

  /**
   * The type of options allowed to be passed to `Base.extend()`
   */
  declare export type ExtendOptions<Base> = $ObjMapi<
    Base,
    <K>(K) => $ElementType<Base, K>
  > &
    Record<string, any>;

  /**
   * The `this` type for any methods on the options passed to `Base.extend()`
   */
  declare export type ExtendThisType<Base, Ext> = ThisType<
    Mix<Base, Ext> & {
      _super: Super<Base>
    }
  >;
  declare export default class CoreObject {
    init(options?: Record<string, any>): void;
    static extend<
      BaseClass: Constructor<any>,
      Ext: ExtendOptions<InstanceType<BaseClass>>
    >(
      options: Ext & ExtendThisType<InstanceType<BaseClass>, Ext>
    ): BaseClass & Constructor<Mix<InstanceType<BaseClass>, Ext>>;
  }
}
