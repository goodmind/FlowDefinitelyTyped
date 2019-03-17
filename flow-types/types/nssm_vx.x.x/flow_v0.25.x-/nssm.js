declare module "nssm" {
  declare type Command =
    | "install"
    | "remove"
    | "start"
    | "stop"
    | "restart"
    | "status"
    | "pause"
    | "continue"
    | "rotate"
    | "get"
    | "set"
    | "reset";
  declare type NssmThen<T> = <TResult1, TResult2>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?:
      | ((reason: Error, stderr: string) => TResult2 | PromiseLike<TResult2>)
      | null
  ) => NssmPromise<TResult1 | TResult2>;
  declare type NssmCatch<T> = <TResult>(
    onrejected?:
      | ((reason: Error, stderr: string) => TResult | PromiseLike<TResult>)
      | null
  ) => NssmPromise<T | TResult>;
  declare type NssmPromise<T> = {
    then: NssmThen<T>,
    catch: NssmCatch<T>
  } & Promise<T>;

  declare type CallbackFn = (error?: string, result?: string) => void;
  declare type ZeroArgCommandFn = (callback: CallbackFn) => void;
  declare type OneArgCommandFn = (arg1: string, callback: CallbackFn) => void;
  declare type TwoArgCommandFn = (
    arg1: string,
    arg2: string,
    callback: CallbackFn
  ) => void;
  declare type PromiseCommandFn = (
    arg1?: string,
    arg2?: string
  ) => NssmPromise<string>;
  declare type NssmCommandFn = ZeroArgCommandFn &
    OneArgCommandFn &
    TwoArgCommandFn &
    PromiseCommandFn;
  declare export default typeof nssm;

  declare function nssm(
    serviceName: string,
    options?: nssm$NssmOptions
  ): nssm$Nssm;

  declare type nssm$Nssm = $ObjMapi<
    { [k: Command]: any },
    <key>(key) => NssmCommandFn
  >;

  declare interface nssm$NssmOptions {
    nssmExe?: string;
  }
}
