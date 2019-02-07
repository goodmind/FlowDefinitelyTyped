declare module "debounce-promise" {
  declare interface debounce$DebounceOptions {
    leading?: boolean;
    accumulate?: boolean;
  }
  declare type ArgumentsType<T> =
    "There was Conditional Type, use $Call utility type";
  declare function debounce<T: (...args: any[]) => any>(
    func: T,
    wait?: number,
    options?: debounce$debounce$DebounceOptions
  ): (
    ...args: ArgumentsType<T>
  ) => "There was Conditional Type, use $Call utility type";

  declare module.exports: typeof debounce;
}
