declare module "travis-fold" {
  declare export function start(group: string): string;

  declare export function end(group: string): string;

  declare export function wrap(group: string, content: string): string;

  declare export function pushStart(ret: string[], group: string): void;

  declare export function pushEnd(ret: string[], group: string): void;

  declare export function isTravis(): boolean;
}
