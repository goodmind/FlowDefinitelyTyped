declare module "moment" {
  declare type JUnitOfTime = "jYear" | "jMonth";
  declare interface LoadPersianOptions {
    /**
     * Use persian digits as decribed by unicode
     */
    usePersianDigits?: boolean;

    /**
     * use dialect option to change usePersian dialect, available options are:
     *       persian: default dialect(امرداد، آدینه، ...)
     *       persian-modern: modern dialect(مرداد، جمعه، ...)
     */
    dialect?: "persian" | "persian-modern";
  }

  /**
   * Add persian language.
   */
  declare function loadPersian(options?: LoadPersianOptions): void;

  declare function jIsLeapYear(year: number): boolean;

  declare function jDaysInMonth(year: number, month: number): number;

  declare interface Moment {
    startOf(jUnitOfTime: JUnitOfTime): Moment;
    endOf(jUnitOfTime: JUnitOfTime): Moment;
    add(amount: string | number, jUnitOfTime: JUnitOfTime): Moment;
    subtract(amount: string | number, jUnitOfTime: JUnitOfTime): Moment;
    jYear(y: number): Moment;
    jYear(): number;
    jMonth(M: number | string): Moment;
    jMonth(): number;
    jDate(d: number): Moment;
    jDate(): number;
    jWeek(d: number): Moment;
    jWeek(): number;
    jWeekYear(d: number): Moment;
    jWeekYear(): number;
    jDayOfYear(d: number): Moment;
    jDayOfYear(): number;
  }
}
declare module "moment-jalaali" {
  declare module.exports: typeof moment;
}
