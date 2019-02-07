declare module "jquery.notify" {
  declare interface JQueryNotifyOptions {
    close?: () => void;
    open?: () => void;
    custom?: boolean;
    disabled?: boolean;
    expires?: number;
    queue?: boolean;
    speed?: number;
    stack?: "below" | "above";
  }
  declare interface JQuery {
    notify(options?: JQueryNotifyOptions): JQueryNotifyWidget;
    notify(
      method: string,
      template: number,
      params?: { [key: string]: any },
      opts?: JQueryNotifyOptions
    ): JQueryNotifyInstance;
    notify(
      method: string,
      params?: { [key: string]: any },
      opts?: JQueryNotifyOptions
    ): JQueryNotifyInstance;
  }
  declare interface JQueryNotifyInstance {
    element: JQuery;
    isOpen: boolean;
    options: JQueryNotifyOptions;
    close(): void;
    open(): void;
  }
  declare type JQueryNotifyWidget = {} & JQuery;
}
