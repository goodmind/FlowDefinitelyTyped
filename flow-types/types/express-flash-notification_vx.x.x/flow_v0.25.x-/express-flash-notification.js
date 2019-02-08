declare interface Express$FlashOptions {
  type?: string;
  message?: string;
  redirect?: boolean;
  url?: string;
}

declare interface Express$Request {
  flash(type: string, message?: string, redirect?: string | boolean): void;
  flash(object: Express$FlashOptions): void;
}
declare module "global" {
}

declare var npm$namespace$express_flash_notification: {
  prototype: typeof express_flash_notification$prototype
};
declare var express_flash_notification$prototype: {};
declare module "express-flash-notification" {
  declare interface efnOptions {
    sessionName?: string;
    utilityName?: string;
    localsName?: string;
    viewName?: string;
    beforeSingleRender?: (
      item: any,
      callback: (err: any, item: any) => void
    ) => void;
    afterAllRender?: (
      htmlFragments: string[],
      callback: (err: any, html: string) => void
    ) => void;
  }
  declare function express_flash_notification(
    app: express.Application,
    options?: efnOptions,
    ...args: any[]
  ): any;

  declare module.exports: typeof express_flash_notification;
}
