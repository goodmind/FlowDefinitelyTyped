declare module "scrypt-async" {
  declare interface scrypt$CallbackFunc {
    (key: string): any;
    (key: number[]): any;
  }

  declare interface scrypt$Options {
    N?: number;
    logN?: number;
    r: number;
    p: number;
    dkLen: number;
    encoding?: string;
    interruptStep?: number;
  }

  declare interface scrypt$ScryptStatic {
    (
      password: string,
      salt: string,
      options: scrypt$Options,
      callback: scrypt$CallbackFunc
    ): void;
    (
      password: number[],
      salt: string,
      options: scrypt$Options,
      callback: scrypt$CallbackFunc
    ): void;
    (
      password: string,
      salt: number[],
      options: scrypt$Options,
      callback: scrypt$CallbackFunc
    ): void;
    (
      password: number[],
      salt: number[],
      options: scrypt$Options,
      callback: scrypt$CallbackFunc
    ): void;
    (
      password: string,
      salt: string,
      logN: number,
      r: number,
      dkLen: number,
      interruptStep: number,
      callback: scrypt$CallbackFunc,
      encoding: string
    ): void;
    (
      password: string,
      salt: number[],
      logN: number,
      r: number,
      dkLen: number,
      interruptStep: number,
      callback: scrypt$CallbackFunc,
      encoding: string
    ): void;
    (
      password: number[],
      salt: string,
      logN: number,
      r: number,
      dkLen: number,
      interruptStep: number,
      callback: scrypt$CallbackFunc,
      encoding: string
    ): void;
    (
      password: number[],
      salt: number[],
      logN: number,
      r: number,
      dkLen: number,
      interruptStep: number,
      callback: scrypt$CallbackFunc,
      encoding: string
    ): void;
    (
      password: string,
      salt: string,
      logN: number,
      r: number,
      dkLen: number,
      interruptStep: number,
      callback: scrypt$CallbackFunc
    ): void;
    (
      password: string,
      salt: number[],
      logN: number,
      r: number,
      dkLen: number,
      interruptStep: number,
      callback: scrypt$CallbackFunc
    ): void;
    (
      password: number[],
      salt: string,
      logN: number,
      r: number,
      dkLen: number,
      interruptStep: number,
      callback: scrypt$CallbackFunc
    ): void;
    (
      password: number[],
      salt: number[],
      logN: number,
      r: number,
      dkLen: number,
      interruptStep: number,
      callback: scrypt$CallbackFunc
    ): void;
    (
      password: string,
      salt: string,
      logN: number,
      r: number,
      dkLen: number,
      callback: scrypt$CallbackFunc,
      encoding: string
    ): void;
    (
      password: string,
      salt: number[],
      logN: number,
      r: number,
      dkLen: number,
      callback: scrypt$CallbackFunc,
      encoding: string
    ): void;
    (
      password: number[],
      salt: string,
      logN: number,
      r: number,
      dkLen: number,
      callback: scrypt$CallbackFunc,
      encoding: string
    ): void;
    (
      password: number[],
      salt: number[],
      logN: number,
      r: number,
      dkLen: number,
      callback: scrypt$CallbackFunc,
      encoding: string
    ): void;
    (
      password: string,
      salt: string,
      logN: number,
      r: number,
      dkLen: number,
      callback: scrypt$CallbackFunc
    ): void;
    (
      password: string,
      salt: number[],
      logN: number,
      r: number,
      dkLen: number,
      callback: scrypt$CallbackFunc
    ): void;
    (
      password: number[],
      salt: string,
      logN: number,
      r: number,
      dkLen: number,
      callback: scrypt$CallbackFunc
    ): void;
    (
      password: number[],
      salt: number[],
      logN: number,
      r: number,
      dkLen: number,
      callback: scrypt$CallbackFunc
    ): void;
  }
  declare var scrypt: scrypt$scrypt$ScryptStatic;
  declare module.exports: typeof scrypt;
}
