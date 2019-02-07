declare module "eslint-visitor-keys" {
  declare export interface VisitorKeys {
    [type: string]: $ReadOnlyArray<string> | void;
  }
  declare export var KEYS: VisitorKeys;
  declare export function getKeys(node: {}): $ReadOnlyArray<string>;

  declare export function unionWith(keys: VisitorKeys): VisitorKeys;
}
