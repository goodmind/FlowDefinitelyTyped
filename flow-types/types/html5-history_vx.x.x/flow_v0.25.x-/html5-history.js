declare module "html5-history" {
  declare export function init(options?: any): boolean;

  declare export function getState(friendly?: any, create?: any): any;

  declare export function getCurrentIndex(): number;

  declare export function getStateByIndex(index: number): any;

  declare export function getHash(doc: any): any;

  declare export function unescapeHash(hash: any): any;

  declare export function normalizeHash(hash: any): any;

  declare export function setHash(hash: any, queue: any): boolean;
}
