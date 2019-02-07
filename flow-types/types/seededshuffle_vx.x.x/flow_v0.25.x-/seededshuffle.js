declare module "seededshuffle" {
  declare export var seed: number;
  declare export var strSeed: string;
  declare export function shuffle<T>(arr: T[], seed: string | number): T[];

  declare export function shuffle<T>(
    arr: $ReadOnlyArray<T>,
    seed: string | number,
    copy: true
  ): T[];

  declare export function unshuffle<T>(arr: T[], seed: string | number): T[];

  declare export function unshuffle<T>(
    arr: $ReadOnlyArray<T>,
    seed: string | number,
    copy: true
  ): T[];
}
