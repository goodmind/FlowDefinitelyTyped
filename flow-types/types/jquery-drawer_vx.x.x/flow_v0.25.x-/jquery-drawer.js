declare module "jquery-drawer" {
  declare interface JQueryDrawerClassOptions {
    nav?: string;
    toggle?: string;
    overlay?: string;
    open?: string;
    close?: string;
    dropdown?: string;
  }
  declare interface JQueryDrawerOptions {
    class?: JQueryDrawerClassOptions;
    iscroll?: IScrollOptions;
    showOverlay?: boolean;
  }
  declare interface JQuery {
    drawer(options?: JQueryDrawerOptions): JQuery;
    drawer(method: "open" | "close" | "toggle" | "destroy"): JQuery;
    on(event: "drawer.opened" | "drawer.closed", handler: () => void): JQuery;
  }
}
