import * as React from "react";
import { LocationDescriptor } from "history";
declare module "react-breadcrumbs" {
  declare interface Crumbs {}
  declare interface BreadcrumbsProps {
    className?: string;
    hidden?: boolean;
    setCrumbs?: (crumbs: Crumbs) => React.ReactNode;
    wrapper?: React.StatelessComponent | React.ComponentClass;
  }
  declare class Breadcrumbs mixins React.Component<BreadcrumbsProps> {}
  declare interface BreadcrumbProps {
    data: LocationDescriptor & {
      title?: React.ReactNode
    };
    hidden?: boolean;
  }
  declare class Breadcrumb mixins React.Component<BreadcrumbProps> {}
}
