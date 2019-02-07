declare module "create-hmac" {
  import type { Hmac } from "crypto";

  declare module.exports: typeof createHmac;

  declare function createHmac(
    algo: createHmac$createHmac$Algorithm,
    key: string | Buffer
  ): Hmac;

  declare type createHmac$Algorithm =
    | "rmd160"
    | "ripemd160"
    | "md5"
    | "sha"
    | "sha1"
    | "sha224"
    | "sha256"
    | "sha384"
    | "sha512";
}
