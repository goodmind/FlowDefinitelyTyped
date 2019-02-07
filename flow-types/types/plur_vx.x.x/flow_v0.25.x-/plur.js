declare module "plur" {
  declare function plur(
    word: string,
    plural: string | number,
    count?: number
  ): string;

  declare module.exports: typeof plur;
}
