declare module "react-breadcrumbs-dynamic" {
  import typeof * as React from "react";

  declare export class BreadcrumbsProvider
    mixins React.Component<BreadcrumbsProviderProps> {}
  declare export class Breadcrumbs mixins React.Component<BreadcrumbsProps> {}
  declare export class BreadcrumbsItem
    mixins React.Component<BreadcrumbsItemProps> {}
  declare export interface BreadcrumbsProviderProps {
    shouldBreadcrumbsUpdate?: (...args: any[]) => any;
  }
  declare export interface BreadcrumbsProps {
    container?: string | Element | {};
    containerProps?: {};
    item?: string | Element | {};
    finalItem?: string | Element | {};
    finalProps?: {};
    separator?: string | Element | {};
    renameProps?: {};
    duplicateProps?: {};
  }
  declare export interface BreadcrumbsItemProps {
    to: string;
  }
}
