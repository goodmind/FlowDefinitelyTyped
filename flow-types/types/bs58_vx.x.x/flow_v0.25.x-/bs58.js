declare module "bs58" {
  import type { BaseConverter } from "base-x";

  declare var base58: BaseConverter;
  declare module.exports: typeof base58;
}
