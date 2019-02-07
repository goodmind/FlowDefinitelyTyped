declare module "simplebar" {
  declare module.exports: typeof SimpleBar;

  declare class SimpleBar {
    static removeObserver(): void;
    constructor(
      element: HTMLElement,
      options?: SimpleBar$SimpleBar$Options
    ): this;
    recalculate(): void;
    getScrollElement(): Element;
    getContentElement(): Element;
  }
  declare interface SimpleBar$Options {
    wrapContent?: boolean;
    autoHide?: boolean;
    scrollbarMinSize?: number;
    classNames?: SimpleBar$ClassNamesOptions;
  }

  declare interface SimpleBar$ClassNamesOptions {
    content?: string;
    scrollContent?: string;
    scrollbar?: string;
    track?: string;
  }
}
