declare module "moment" {
  declare type Moment = {
    holiday(
      holidays?: string[] | string,
      adjust?: boolean
    ):
      | Moment
      | false
      | {
          [holidayName: string]: Moment
        },
    holidays(
      holidays?: string[] | string,
      adjust?: boolean
    ):
      | Moment
      | false
      | {
          [holidayName: string]: Moment
        },
    isHoliday(
      holidays?: string[] | string | null,
      adjust?: boolean
    ): boolean | string | string[],
    previousHoliday(count?: number, adjust?: boolean): Moment[] | Moment,
    previousHolidays(count?: number, adjust?: boolean): Moment[] | Moment,
    nextHoliday(count?: number, adjust?: boolean): Moment[] | Moment,
    nextHolidays(count?: number, adjust?: boolean): Moment[] | Moment,
    holidaysBetween(m: Moment, adjust?: boolean): Moment[] | false
  } & Object;

  declare interface HolidayDefinition {
    date: string;
    keywords?: string[];
    keywords_y?: string[];
    keywords_n?: string[];
    regions?: string[];
    regions_n?: string[];
  }
  declare interface HolidaysMapping {
    [holidayName: string]: HolidayDefinition;
  }
  declare interface Holidays {
    active: HolidaysMapping;
    active_last: HolidaysMapping;
  }
  declare interface HolidayModifier {
    set(
      holidays: HolidaysMapping | string | string[],
      specifics?: any
    ): HolidayModifier;
    add(holidays: HolidaysMapping | string, specifics?: any): HolidayModifier;
    remove(holidays: string | string[]): HolidayModifier;
    undo(): HolidayModifier;
    load(locales: string | string[]): HolidayModifier;
    extendParser(
      parserFunc: (m: Moment, date: string) => Moment | Moment[] | false | void
    ): HolidayModifier;
  }
  declare var holidays: Holidays;
  declare var modifyHolidays: HolidayModifier;
}
declare module "moment-holiday" {
  import typeof * as moment from "moment";
}
