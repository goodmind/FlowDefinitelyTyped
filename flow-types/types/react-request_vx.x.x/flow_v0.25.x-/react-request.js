declare module "react-request" {
  import typeof * as React from "react";

  declare export interface RenderProps<T> {
    requestName: string;
    requestKey: string;
    fetching: boolean;
    failed: boolean;
    error: Error | null;
    response: Response | null;
    url: string;
    data: T | null;
  }
  declare export type FetchRequestProps = {
    lazy?: boolean,
    url: string
  } & RequestInit;

  declare export type FetchProps<T = any> = {
    children?: (renderProps: RenderProps<T>) => React.Node
  } & FetchRequestProps;

  declare export interface RequestKeyOptions {
    url?: string;
    method?: string;
    responseType?: string;
    body?: string;
  }
  declare export interface ProxyRequest {
    requestKey: string;
    res: Response;
  }
  declare export function fetchDedupe(
    input: any,
    init?: any,
    dedupeOptions?: any
  ): Promise<ProxyRequest>;

  declare export function getRequestKey(keyOptions?: RequestKeyOptions): string;

  declare export function isRequestInFlight(): boolean;

  declare export function clearRequestCache(): void;

  declare export function clearResponseCache(): void;

  declare export class Fetch<T = any> mixins React.Component<FetchProps<T>> {}
}
