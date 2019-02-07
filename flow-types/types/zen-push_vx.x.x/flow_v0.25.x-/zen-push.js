declare module "zen-push" {
  import typeof * as Observable from "zen-observable";

  declare class PushStream<T> {
    observable: Observable<T>;
    observed: number;
    next(x: T): void;
    error(e: Error): void;
    complete(x?: any): void;
  }
  declare export default typeof PushStream;
}
