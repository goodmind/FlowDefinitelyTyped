declare module "geetest" {
  declare interface Options {
    geetest_id: string;
    geetest_key: string;
    protocol?: string;
    api_server?: string;
  }
  declare type Success = 0 | 1;
  declare interface Data {
    geetest_id: string;
    gt: string;
    challenge: string;
    success: Success;
    new_captcha: string;
  }
  declare interface Result {
    challenge: string;
    validate: string;
    seccode: string;
  }
  declare class Geetest {
    constructor(options: Options): this;
    register(callback: (error: Error, data: Data) => void): void;
    register(): Promise<Data>;
    validate(
      result: Result,
      callback: (error: Error, success: Success) => void
    ): void;
    validate(result: Result): Promise<Success>;
  }
  declare module.exports: typeof Geetest;
}
