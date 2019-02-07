declare module "proper-lockfile" {
  declare export interface LockOptions {
    stale?: number;
    update?: number;
    retries?: number;
    realpath?: boolean;
    fs?: any;
    onCompromised?: (err: Error) => any;
  }
  declare export interface UnlockOptions {
    realpath?: boolean;
    fs?: any;
  }
  declare export interface CheckOptions {
    stale?: number;
    realpath?: boolean;
    fs?: any;
  }
  declare export function lock(
    file: string,
    options?: LockOptions
  ): Promise<() => Promise<void>>;

  declare export function unlock(
    file: string,
    options?: UnlockOptions
  ): Promise<void>;

  declare export function check(
    file: string,
    options?: CheckOptions
  ): Promise<boolean>;

  declare export function lockSync(
    file: string,
    options?: LockOptions
  ): () => void;

  declare export function unlockSync(
    file: string,
    options?: UnlockOptions
  ): void;

  declare export function checkSync(
    file: string,
    options?: CheckOptions
  ): boolean;
}
