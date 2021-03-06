declare module "contextjs" {
  declare interface MenuObject {
    action?: (e: Event) => void;
    divider?: boolean;
    header?: string;
    href?: string;
    subMenu?: MenuObject[];
    target?: string;
    text?: string;
  }
  declare interface InitSettings {
    above?: string | boolean;
    compress?: boolean;
    fadeSpeed?: number;
    filter?: (e: Element) => void;
    preventDoubleContext?: boolean;
  }

  declare var npm$namespace$context: {
    init: typeof context$init,
    destroy: typeof context$destroy,
    attach: typeof context$attach,
    settings: typeof context$settings
  };
  declare function context$init(settings?: InitSettings): void;

  declare function context$destroy(selector: any): void;

  declare function context$attach(
    selector: any,
    menuObjects: MenuObject[]
  ): void;

  declare function context$settings(settings: InitSettings): void;

  declare export default typeof context;
}
