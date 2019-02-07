declare module "vali-date" {
  declare function valiDate(input: string): boolean;

  declare module.exports: typeof valiDate;
}
