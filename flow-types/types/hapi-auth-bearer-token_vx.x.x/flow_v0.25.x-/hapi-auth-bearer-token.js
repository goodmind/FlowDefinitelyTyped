declare interface BearerToken$SchemaOptions {
  validate: BearerToken$Validate;
  accessTokenName?: string;
  allowQueryToken?: boolean;
  allowCookieToken?: boolean;
  allowMultipleHeaders?: boolean;
  allowChaining?: boolean;
  tokenType?: string;
  unauthorized?: (message: string | null, scheme: string) => any;
}

declare type BearerToken$Validate = (
  request: Request,
  token: string,
  h: ResponseToolkit
) => Promise<ValidateReturn> | ValidateReturn;
declare module "hapi" {
  declare interface ServerAuth {
    strategy(
      name: string,
      scheme: "bearer-access-token",
      options: BearerToken$BearerToken$SchemaOptions
    ): void;
  }
}
declare module "hapi-auth-bearer-token" {
  import type {
    Request,
    Plugin,
    ResponseToolkit,
    AuthenticationData
  } from "hapi";

  declare type ValidateReturn = AuthenticationData & {
    isValid: boolean
  };
  declare var BearerToken: Plugin<{}>;
  declare module.exports: typeof BearerToken;
}
