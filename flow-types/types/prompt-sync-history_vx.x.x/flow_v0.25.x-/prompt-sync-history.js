declare module "prompt-sync-history" {
  import type { History } from "prompt-sync";

  declare function history(file?: string, max?: number): History;

  declare module.exports: typeof history;
}
