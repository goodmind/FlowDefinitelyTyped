declare module "starwars-names" {
  declare export var all: string[];
  declare export function random(): string;

  declare export function random(number: number): string[];
}
