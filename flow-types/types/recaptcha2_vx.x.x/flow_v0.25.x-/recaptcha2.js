declare module "recaptcha2" {
  declare module.exports: typeof Recaptcha2;

  declare class Recaptcha2 {
    constructor(options: Recaptcha2$Recaptcha2$Options): this;
    getRequestOptions<T: { [key: string]: any }>(
      body: T
    ): Recaptcha2$Recaptcha2$RequestOptions<T>;
    validate(token: string): Promise<void>;
    validateRequest(req: { [key: string]: any }, ip: string): Promise<void>;
    translateErrors(errorCodes: string): string;
    translateErrors(errorCodes: string[]): string[];
    formElement(htmlClass: string): string;
  }
  declare interface Recaptcha2$Options {
    siteKey: string;
    secretKey: string;
    ssl?: boolean;
  }

  declare interface Recaptcha2$RequestOptions<T> {
    uri: string;
    method: "POST";
    json: true;
    form: T;
  }
}
