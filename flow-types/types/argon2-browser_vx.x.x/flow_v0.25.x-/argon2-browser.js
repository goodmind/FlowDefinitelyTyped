declare module "argon2-browser" {
  declare var npm$namespace$argon2: {
    hash: typeof argon2$hash,

    ArgonType: typeof argon2$ArgonType
  };
  declare function argon2$hash(
    options: argon2$Argon2BrowserHashOptions
  ): Promise<argon2$Argon2BrowserHashResult>;

  declare interface argon2$Argon2BrowserHashOptions {
    distPath?: string;
    hashLen?: number;
    mem?: number;
    parallelism?: number;
    pass: string;
    salt: string;
    time?: number;
    type?: argon2$ArgonType;
  }

  declare interface argon2$Argon2BrowserHashResult {
    encoded: string;
    hash: Uint8Array;
    hashHex: string;
  }

  declare var argon2$ArgonType: {|
    +Argon2d: 0, // 0
    +Argon2i: 1 // 1
  |};
}
