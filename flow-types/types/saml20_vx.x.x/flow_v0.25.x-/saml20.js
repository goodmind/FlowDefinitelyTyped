declare module "saml20" {
  declare export interface Profile {
    issuer: string;
    claims: any;
    audience?: string;
    sessionIndex?: string;
  }
  declare export type ValidationOptions =
    | ValidationOptionsWithKey
    | ValidationOptionsWithPrint;
  declare export interface ValidationOptionsWithKey {
    publicKey: string;
    bypassExpiration?: boolean;
    audience?: any;
  }
  declare export interface ValidationOptionsWithPrint {
    thumbprint: string;
    bypassExpiration?: boolean;
    audience?: any;
  }
  declare export type ParseCallback = (
    err: Error | null,
    profile: Profile,
    version: string
  ) => void;
  declare export function parse(rawAssertion: string, cb: ParseCallback): void;

  declare export function validate(
    rawAssertion: string,
    options: ValidationOptions,
    cb: ParseCallback
  ): void;
}
