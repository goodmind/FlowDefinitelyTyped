declare module "@storybook/react" {
  declare interface Options {
    skip?: number;
    enableBeautify?: boolean;
    onBeforeRender?: (domString: string) => string;
    displayName?: string | displayNameFunc;
  }
  declare interface Story {
    addWithJSX(kind: string, fn: () => ReactNode, options?: Options): Story;
  }
}
declare module "storybook-addon-jsx" {
  import type { Node, ReactElement } from "react";

  declare export type displayNameFunc = (element: ReactElement<any>) => string;
}
