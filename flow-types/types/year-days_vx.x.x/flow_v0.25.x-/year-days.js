declare module "year-days" {
  declare module.exports: typeof yearDays;

  declare function yearDays(year?: number | Date): number;
}
