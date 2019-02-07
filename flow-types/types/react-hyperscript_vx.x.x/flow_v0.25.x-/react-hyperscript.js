declare module "react-hyperscript" {
  import type { ComponentClass, StatelessComponent, ReactElement } from "react";

  declare type Element = ReactElement<any> | string | number | null;
  declare function h(
    componentOrTag: ComponentClass | StatelessComponent | string,
    children?: $ReadOnlyArray<Element> | Element
  ): ReactElement<any>;

  declare function h<
    P: {
      [attr: string]: any
    }
  >(
    componentOrTag: ComponentClass<P> | StatelessComponent<P> | string,
    properties: P,
    children?: $ReadOnlyArray<Element> | Element
  ): ReactElement<P>;

  declare module.exports: typeof h;
}
