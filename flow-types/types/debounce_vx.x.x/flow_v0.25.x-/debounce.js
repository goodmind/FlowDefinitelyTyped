declare module "debounce" {
  declare var npm$namespace$_debounce: {
    debounce: typeof _debounce$debounce
  };
  declare var _debounce$debounce: typeof _debounce;
  declare function _debounce<A: Function>(
    f: A,
    interval?: number,
    immediate?: boolean
  ): A & {
    clear(): void
  } & {
    flush(): void
  };

  declare export default typeof _debounce;
}
