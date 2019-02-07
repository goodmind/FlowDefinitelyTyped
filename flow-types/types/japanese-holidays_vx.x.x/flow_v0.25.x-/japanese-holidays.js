declare module "japanese-holidays" {
  declare export function isHoliday(
    date: Date,
    furikae?: boolean
  ): string | void;

  declare export function isHolidayAt(
    date: Date,
    furikae?: boolean
  ): string | void;

  declare export function getHolidaysOf(
    year: number,
    furikae?: boolean
  ): Holiday[];

  declare export interface Holiday {
    month: number;
    date: number;
    name: string;
  }
}
