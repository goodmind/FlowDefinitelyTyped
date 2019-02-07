declare module "react-cache" {
  declare export interface Resource<Input, Value> {
    read(key: Input): Value;
    preload(key: Input): void;
  }
  declare export function unstable_createResource<Input, Value>(
    fetch: (input: Input) => PromiseLike<Value>,
    maybeHashInput?: (input: Input) => string | number
  ): Resource<Input, Value>;
}
