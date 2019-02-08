declare class fileUpload$FileArray {
  [index: string]: fileUpload$UploadedFile | fileUpload$UploadedFile[];
}

declare interface fileUpload$UploadedFile {
  name: string;
  encoding: string;
  mimetype: string;
  data: Buffer;
  truncated: boolean;
  mv(path: string, callback: (err: any) => void): void;
  mv(path: string): Promise<void>;
}

declare interface fileUpload$Options {
  debug?: boolean;
  safeFileNames?: boolean;
  preserveExtension?: boolean | string | number;
  abortOnLimit?: boolean;
  [property: string]: any;
}
declare interface Express$Request {
  files?: fileUpload$fileUpload$FileArray;
}
declare module "global" {
}
declare module "express-fileupload" {
  declare module.exports: typeof fileUpload;

  declare function fileUpload(
    options?: fileUpload$fileUpload$Options
  ): express.RequestHandler;
}
