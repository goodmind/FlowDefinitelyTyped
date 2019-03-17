declare module "pretty-time" {
  declare type Increment =
    | "ns"
    | "nano"
    | "nanosecond"
    | "nanoseconds"
    | "μs"
    | "micro"
    | "microsecond"
    | "microseconds"
    | "ms"
    | "milli"
    | "millisecond"
    | "milliseconds"
    | "s"
    | "sec"
    | "second"
    | "seconds"
    | "m"
    | "min"
    | "minute"
    | "minutes"
    | "h"
    | "hr"
    | "hour"
    | "hours"
    | "d"
    | "day"
    | "days"
    | "w"
    | "wk"
    | "week"
    | "weeks";
  declare function prettyTime(
    time: number[],
    smallest?: Increment,
    digits?: number
  ): string;

  declare export default typeof prettyTime;
}
