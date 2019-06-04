declare module "hookrouter" {
  import typeof * as React from "react";

  declare type HookRouter$InterceptedPath = string | null;

  declare type HookRouter$AProps = {
    href: string
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

  declare interface HookRouter$QueryParams {
    [key: string]: any;
  }

  declare interface HookRouter$RouteObject {
    [key: string]: (params: HookRouter$QueryParams) => any;
  }
  declare export function setLinkProps(
    props: HookRouter$AProps
  ): HookRouter$AProps;

  declare export function A(
    props: HookRouter$AProps
  ): React.ReactHTMLElement<HTMLAnchorElement>;

  declare export function confirmNavigation(): void;

  declare export function resetPath(): void;

  declare export function stopInterception(): void;

  declare export function useControlledInterceptor(): [
    HookRouter$InterceptedPath,
    typeof confirmNavigation,
    typeof resetPath,
    typeof stopInterception
  ];

  declare export function interceptRoute(
    previousRoute: string,
    nextRoute: string
  ): string[];

  declare export function get(
    componentId: number
  ): HookRouter$RouteObject | null;

  declare export function remove(componentId: number): void;

  declare export function useInterceptor(
    handlerFn: (...args: any[]) => any
  ): () => typeof remove;

  declare export function setQueryParams(
    inObj: HookRouter$QueryParams,
    replace?: boolean
  ): void;

  declare export function getQueryParams(): HookRouter$QueryParams;

  declare export function queryStringToObject(
    inStr: string
  ): HookRouter$QueryParams;

  declare export function objectToQueryString(
    inObj: HookRouter$QueryParams
  ): string;

  declare export function useQueryParams(): [
    HookRouter$QueryParams,
    typeof setQueryParams
  ];

  declare export function useRedirect(
    fromURL: string,
    toURL: string,
    queryParams?: HookRouter$QueryParams | null,
    replace?: boolean
  ): void;

  declare export function setBasepath(inBasepath: string): void;

  declare export function getBasepath(): string;

  declare export function resolvePath(inPath: string): string;

  declare export function prepareRoute(inRoute: string): [RegExp, string[]];

  declare export function navigate(
    url: string,
    replace?: boolean,
    queryParams?: HookRouter$QueryParams | null,
    replaceQueryParams?: boolean
  ): void;

  declare export function setPath(inPath: string): void;

  declare export function getPath(): string;

  declare export function usePath(
    active?: boolean,
    withBasePath?: boolean
  ): string;

  declare export function updatePathHooks(): void;

  declare export function getWorkingPath(parentRouterId: string): string;

  declare export function useRoutes(routeObj: HookRouter$RouteObject): any;

  declare export function useTitle(inString: string): void;

  declare export function getTitle(): string;
}
