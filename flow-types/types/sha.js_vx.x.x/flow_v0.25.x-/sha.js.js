declare module "sha.js" {
  import type { Hash } from "crypto";

  declare export default typeof SHA;

  declare function SHA(algorithm: string): Hash;

  declare var npm$namespace$SHA: {
    sha: typeof SHA$sha,
    sha1: typeof SHA$sha1,
    sha224: typeof SHA$sha224,
    sha256: typeof SHA$sha256,
    sha384: typeof SHA$sha384,
    sha512: typeof SHA$sha512
  };
  declare type SHA$Algorithm =
    | "sha"
    | "sha1"
    | "sha224"
    | "sha256"
    | "sha384"
    | "sha512";

  declare interface SHA$HashStatic {
    new(): Hash;
  }

  declare var SHA$sha: SHA$HashStatic;

  declare var SHA$sha1: SHA$HashStatic;

  declare var SHA$sha224: SHA$HashStatic;

  declare var SHA$sha256: SHA$HashStatic;

  declare var SHA$sha384: SHA$HashStatic;

  declare var SHA$sha512: SHA$HashStatic;
}
