declare module "moment" {
  declare interface PreciseRangeValueObject {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    firstDateWasLater: boolean;
  }
  declare interface Moment {
    preciseDiff(d2: Moment, returnValueObject?: false): string;
    preciseDiff(d2: Moment, returnValueObject: true): PreciseRangeValueObject;
  }
  declare function preciseDiff(
    d1: Moment,
    d2: Moment,
    returnValueObject?: false
  ): string;

  declare function preciseDiff(
    d1: Moment,
    d2: Moment,
    returnValueObject: true
  ): PreciseRangeValueObject;
}
declare module "moment-precise-range-plugin" {
  import typeof * as moment from "moment";

  declare export default typeof moment;
}
