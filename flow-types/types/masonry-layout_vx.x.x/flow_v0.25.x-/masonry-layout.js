declare module "global" {
  declare interface JQuery {
    masonry(options?: Masonry$Masonry$Options): JQuery;
  }
}
declare interface Masonry$Options {
  itemSelector?: string;
  columnWidth?: any;
  percentPosition?: boolean;
  gutter?: any;
  stamp?: string;
  fitWidth?: boolean;
  originLeft?: boolean;
  originTop?: boolean;
  horizontalOrder?: boolean;
  containerStyle?: {};
  transitionDuration?: any;
  resize?: boolean;
  initLayout?: boolean;
}
declare module "masonry-layout" {
  declare module.exports: typeof Masonry;

  declare class Masonry {
    constructor(options?: Masonry$Masonry$Options): this;
    constructor(
      selector: string | Element,
      options?: Masonry$Masonry$Options
    ): this;
    masonry(): void;
    masonry(eventName: string, listener: any): void;
    layout(): void;
    layoutItems(items: any[], isStill?: boolean): void;
    stamp(elements: any[]): void;
    unstamp(elements: any[]): void;
    appended(elements: any[]): void;
    prepended(elements: any[]): void;
    addItems(elements: any[]): void;
    remove(elements: any[]): void;
    on(eventName: string, listener: any): void;
    off(eventName: string, listener: any): void;
    once(eventName: string, listener: any): void;
    reloadItems(): void;
    destroy(): void;
    getItemElements(): any[];
    data(element: Element): Masonry;
  }
}
