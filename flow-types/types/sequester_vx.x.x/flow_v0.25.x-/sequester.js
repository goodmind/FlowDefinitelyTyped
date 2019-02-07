declare module "sequester" {
  declare type Callback = () => void;
  declare export interface Lock {
    share(cb: Callback): void;
    exclude(cb: Callback): void;
    count: number;
    dispose(): void;
    unlock(): void;
    downgrade(): void;
  }
  declare export function createLock(): Lock;
}
