declare module "expirymanager" {
  declare export type Key = any;
  declare export type Keys = Key[];
  declare export class ExpiryManager {
    constructor(): this;
    now(): number;
    expire(keys: Keys, seconds: number): void;
    unexpire(keys: Keys): void;
    getExpiry(key: Key): number;
    getKeysByExpiry(expiry: number): Keys;
    getExpiredKeys(time?: number): Keys;
    extractExpiredKeys(time?: number): Keys;
    clear(): void;
  }
}
