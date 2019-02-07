declare module "randombytes" {
  import type { randomBytes as _randomBytes } from "crypto";

  declare module.exports: typeof randomBytes;

  declare var randomBytes: typeof _randomBytes;
}
