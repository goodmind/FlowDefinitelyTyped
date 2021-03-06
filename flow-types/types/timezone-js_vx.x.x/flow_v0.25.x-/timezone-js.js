declare module "timezone-js" {
  declare export var timezone: TimezoneJs;
  declare export class Date {
    constructor(timezone?: string): this;
    constructor(date: Object, timezone?: string): this;
    constructor(utcMillis: number, timezone?: string): this;
    constructor(time: string, timezone?: string): this;
    constructor(
      year?: number,
      month?: number,
      day?: number,
      hour?: number,
      minute?: number,
      second?: number,
      millisecond?: number,
      timezone?: string
    ): this;
    setTimezone: (timezone: string) => void;
    toString(format?: string): string;
    toDateString(): string;
    toTimeString(): string;
    toLocaleString(): string;
    toLocaleDateString(): string;
    toLocaleTimeString(): string;
    valueOf(): number;
    getTime(): number;
    getFullYear(): number;
    getUTCFullYear(): number;
    getMonth(): number;
    getUTCMonth(): number;
    getDate(): number;
    getUTCDate(): number;
    getDay(): number;
    getUTCDay(): number;
    getHours(): number;
    getUTCHours(): number;
    getMinutes(): number;
    getUTCMinutes(): number;
    getSeconds(): number;
    getUTCSeconds(): number;
    getMilliseconds(): number;
    getUTCMilliseconds(): number;
    getTimezoneOffset(): number;
    setTime(time: number): number;
    setMilliseconds(ms: number): number;
    setUTCMilliseconds(ms: number): number;
    setSeconds(sec: number, ms?: number): number;
    setUTCSeconds(sec: number, ms?: number): number;
    setMinutes(min: number, sec?: number, ms?: number): number;
    setUTCMinutes(min: number, sec?: number, ms?: number): number;
    setHours(hours: number, min?: number, sec?: number, ms?: number): number;
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
    setDate(date: number): number;
    setUTCDate(date: number): number;
    setMonth(month: number, date?: number): number;
    setUTCMonth(month: number, date?: number): number;
    setFullYear(year: number, month?: number, date?: number): number;
    setUTCFullYear(year: number, month?: number, date?: number): number;
    toUTCString(): string;
    toISOString(): string;
    toJSON(key?: any): string;
  }
  declare export interface TimezoneJs {
    zoneFileBasePath: string;
    loadingScheme: number;
    loadingSchemes: TimezoneJsLoadingSchemes;
    transport(opts: TimezoneJsOptions): any;
    init(opts?: TimezoneJsOptions): any;
    getAllZones(): string[];
    loadZoneDataFromObject(obj: Object): void;
  }
  declare export interface TimezoneJsOptions {
    async?: boolean;
    success?: (data: string) => void;
    error?: (err: Error) => void;
    url?: string;
  }
  declare export class TimezoneJsLoadingSchemes {
    PRELOAD_ALL: number;
    LAZY_LOAD: number;
    MANUAL_LOAD: number;
  }
}
