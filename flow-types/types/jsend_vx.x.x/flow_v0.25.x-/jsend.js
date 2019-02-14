export interface Express$Response {
  jsend: jsend$jsendExpress;
}
declare var npm$namespace$jsend: {
  jsend: typeof jsend$jsend
};
declare interface jsend$JSendObject {
  status: string;
  code?: number;
  data?: any;
  message?: string;
}

declare interface jsend$jsendCore {
  success(data: Object): jsend$JSendObject;
  fail(data: Object): jsend$JSendObject;
  error(
    message:
      | string
      | {
          message: string,
          code?: number,
          data?: Object
        }
  ): jsend$JSendObject;
}

declare type jsend$jsendExpress = {
  (err: string | Object, json?: Object): void
} & jsendCore;

declare type jsend$jsend = {
  isValid(json: Object): boolean,
  forward(json: Object, done: (err: any, data: any) => any): void,
  fromArguments(err: string | Object, json?: Object): jsend$JSendObject,
  middleware(req: any, res: any, next: Function): any
} & jsendCore;

declare type jsend$jsendExport = {
  (
    config?: {
      strict: boolean
    },
    host?: Object
  ): jsend$jsend
} & jsend;

declare var jsend$jsend: jsend$jsendExport;
declare module "jsend" {
  declare export default typeof jsend$jsend;
}
