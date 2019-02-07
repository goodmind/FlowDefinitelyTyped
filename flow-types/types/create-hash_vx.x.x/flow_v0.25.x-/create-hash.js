declare module "create-hash" {
  import type { Hash } from "crypto";

  declare module.exports: typeof createHash;

  declare function createHash(algo: createHash$createHash$Algorithm): Hash;

  declare type createHash$Algorithm =
    | "md5"
    | "rmd160"
    | "ripemd160"
    | "sha"
    | "sha1"
    | "sha224"
    | "sha256"
    | "sha384"
    | "sha512";
}
