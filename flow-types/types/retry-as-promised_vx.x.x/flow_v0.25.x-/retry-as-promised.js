declare type retryAsPromised$MatchOption = string | RegExp | Error;

declare interface retryAsPromised$Options {
  $current?: number;
  max?: number;
  timeout?: number;
  match?: retryAsPromised$MatchOption[] | retryAsPromised$MatchOption;
  backoffBase?: number;
  backoffExponent?: number;
  report?: (message: string, obj: retryAsPromised$Options, err?: any) => void;
  name?: string;
}

declare type retryAsPromised$RetryCallback<T> = (current: {
  current: $ElementType<retryAsPromised$Options, "$current">
}) => Promise.Thenable<T>;

declare type retryAsPromised$RetryAsPromisedStatic = <T>(
  callback: retryAsPromised$RetryCallback<T>,
  options: retryAsPromised$Options | number
) => Promise<T>;
declare module "retry-as-promised" {
  declare var retryAsPromised: retryAsPromised$retryAsPromised$RetryAsPromisedStatic;
  declare module.exports: typeof retryAsPromised;
}
