declare module "serve-index" {
  import typeof * as express from "express";

  import typeof * as fs from "fs";

  declare interface serveIndex$File {
    name: string;
    stat: fs.Stats;
  }

  declare interface serveIndex$Locals {
    directory: string;
    displayIcons: boolean;
    fileList: Array<serveIndex$File>;
    name: string;
    stat: fs.Stats;
    path: string;
    style: string;
    viewName: string;
  }

  declare type serveIndex$templateCallback = (
    error: Error,
    htmlString?: string
  ) => void;

  declare interface serveIndex$Options {
    filter?: (
      filename: string,
      index: number,
      files: Array<serveIndex$File>,
      dir: string
    ) => boolean;
    hidden?: boolean;
    icons?: boolean;
    stylesheet?: string;
    template?:
      | string
      | ((
          locals: serveIndex$Locals,
          callback: serveIndex$templateCallback
        ) => void);
    view?: string;
  }
  declare function serveIndex(
    path: string,
    options?: serveIndex$serveIndex$Options
  ): express.Handler;

  declare module.exports: typeof serveIndex;
}
