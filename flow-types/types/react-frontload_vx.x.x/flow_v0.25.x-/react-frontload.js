declare module "react-frontload" {
  import type { React$ComponentClass, React$ComponentType } from "react";

  declare export interface FrontloadProps {
    noServerRender?: boolean;
  }
  declare export interface FrontloadConnectOptions {
    noServerRender?: boolean;
    onMount?: boolean;
    onUpdate?: boolean;
  }
  declare export var Frontload: React$ComponentClass<FrontloadProps>;
  declare export function frontloadConnect(
    frontload: (props: any) => Ractive$Promise<void>,
    notification$options?: FrontloadConnectOptions
  ): <P>(React$Component: React$ComponentType<P>) => React$ComponentType<P>;

  declare export function frontloadServerRender(
    renderMarkup: (dryRun?: boolean) => string,
    withLogging?: boolean
  ): Ractive$Promise<string>;
}
