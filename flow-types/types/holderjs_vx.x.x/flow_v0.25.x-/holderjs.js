declare module "holderjs" {
  declare export interface Options {
    images: HTMLElement | null;
  }
  declare export function run(options: Options): void;
}
