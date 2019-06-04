declare module "@hapi/basic" {
  import type { Plugin, Request, ResponseToolkit } from "@hapi/hapi";

  declare interface Basic$ValidateCustomResponse {
    response: any;
  }

  declare interface Basic$ValidateResponse {
    isValid: boolean;
    credentials?: any;
  }

  declare interface Basic$Validate {
    (
      request: Request,
      username: string,
      password: string,
      h: ResponseToolkit
    ): Promise<Basic$ValidateResponse | Basic$ValidateCustomResponse>;
  }
  declare var Basic: Plugin<{}>;
  declare export default typeof Basic;
}
