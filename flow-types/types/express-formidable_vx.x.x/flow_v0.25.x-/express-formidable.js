declare interface Express$Request {
  fields?: Fields;
  files?: Files;
}
declare module "global" {
}
declare module "express-formidable" {
  import typeof * as express from "express";

  import type { Fields, Files } from "formidable";

  declare interface ExpressFormidableOptions {
    encoding?: string;
    uploadDir?: string;
    keepExtensions?: boolean;
    type?: "multipart" | "urlencoded";
    maxFileSize?: number;
    maxFieldsSize?: number;
    maxFields?: number;
    hash?: boolean | "sha1" | "md5";
    multiples?: boolean;
  }
  declare function ExpressFormidable(
    options?: ExpressFormidableOptions
  ): express.RequestHandler;

  declare module.exports: typeof ExpressFormidable;
}
