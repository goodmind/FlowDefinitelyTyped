declare module "isaac" {
  declare export function internals(): any;

  declare export function prng(n: number): void;

  declare export function rand(): number;

  declare export function random(): number;

  declare export function reset(): void;

  declare export function seed(
    s: string | number | $ReadOnlyArray<number>
  ): void;
}
