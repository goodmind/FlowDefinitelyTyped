declare module "getpass" {
  declare export interface Options {
    prompt?: string;
  }
  declare export interface Callback {
    (error: Error | null, password: string): void;
  }
  declare export function getPass(cb: Callback): void;

  declare export function getPass(options: Options, cb: Callback): void;
}
