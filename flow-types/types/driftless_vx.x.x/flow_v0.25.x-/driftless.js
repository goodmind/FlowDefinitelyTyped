declare module "driftless" {
  declare export function setDriftlessTimeout(
    callback: ((...args: any[]) => void) | string,
    delayMs: number,
    ...params: any[]
  ): number;

  declare export function setDriftlessInterval(
    callback: ((...args: any[]) => void) | string,
    delayMs: number,
    ...params: any[]
  ): number;

  declare export function clearDriftless(
    id: number,
    options?: {
      customClearTimeout?: (...args: any[]) => void
    }
  ): void;
}
