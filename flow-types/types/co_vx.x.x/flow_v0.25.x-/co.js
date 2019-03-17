declare module "co" {
  declare type ExtractType<
    T
  > = /* Flow doesn't support conditional types, use $Call utility type */ any;
  declare interface Co {
    <F: (...args: any[]) => Generator>(
      fn: F,
      ...args: Parameters<F>
    ): Promise<ExtractType<$Call<F>>>;
    default: Co;
    co: Co;
    wrap: <F: (...args: any[]) => Generator>(
      fn: F
    ) => (...args: Parameters<F>) => Promise<ExtractType<$Call<F>>>;
  }
  declare var co: Co;
  declare export default typeof co;
}
