declare module "async.nexttick" {
  declare export function nextTick(callback: () => void, ...args: any[]): void;
}
