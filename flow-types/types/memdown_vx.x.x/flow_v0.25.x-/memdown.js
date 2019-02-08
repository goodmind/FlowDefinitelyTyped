declare module "memdown" {
  import type { AbstractLevelDOWN } from "abstract-leveldown";

  declare export type MemDown<K, V> = {} & AbstractLevelDOWN<Handlebars$K, V>;

  declare export interface MemDownConstructor {
    new<K, V>(): MemDown<Handlebars$K, V>;
    <K, V>(): MemDown<Handlebars$K, V>;
  }
  declare export var MemDown: MemDownConstructor;
  declare export default typeof MemDown;
}
