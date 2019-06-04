declare module "readmore-js" {
  declare class Readmore {
    constructor(
      element: string | Element | NodeList,
      options?: Readmore$Options
    ): this;
    toggle(element: null | string | Element | NodeList): void;
    destroy(): void;
  }
  declare interface Readmore$Options {
    speed?: number;
    collapsedHeight?: number;
    heightMargin?: number;
    moreLink?: ((element: Element) => string) | string;
    lessLink?: ((element: Element) => string) | string;
    embedCSS?: boolean;
    blockCSS?: string;
    startOpen?: boolean;
    sourceOrder?: "after" | "before";
    beforeToggle?: (
      trigger: Element,
      element: Element,
      expanded: boolean
    ) => void;
    afterToggle?: (
      trigger: Element,
      element: Element,
      expanded: boolean
    ) => void;
    blockProcessed?: (element: Element, collapsable: boolean) => void;
  }
  declare export default typeof Readmore;
}
