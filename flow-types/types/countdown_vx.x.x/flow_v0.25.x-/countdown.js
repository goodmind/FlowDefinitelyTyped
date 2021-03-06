declare type countdown$DateFunction = (timespan: countdown$Timespan) => void;

declare type countdown$DateTime = number | Date | countdown$DateFunction;

declare interface countdown$Timespan {
  start?: Date;
  end?: Date;
  units?: number;
  value?: number;
  millennia?: number;
  centuries?: number;
  decades?: number;
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  toString(label?: string): string;
  toHTML(tagName?: string, label?: string): string;
}

declare interface countdown$Format {
  singular?: string | Array<string>;
  plural?: string | Array<string>;
  last?: string;
  delim?: string;
  empty?: string;
  formatNumber?: (value: number) => string;
  formatter?: (value: number, unit: number) => string;
}

declare interface countdown$CountdownStatic {
  (
    start: countdown$DateTime,
    end?: countdown$DateTime,
    units?: number,
    max?: number,
    digits?: number
  ): countdown$Timespan | number;
  MILLENNIA: number;
  CENTURIES: number;
  DECADES: number;
  YEARS: number;
  MONTHS: number;
  WEEKS: number;
  DAYS: number;
  HOURS: number;
  MINUTES: number;
  SECONDS: number;
  MILLISECONDS: number;
  ALL: number;
  DEFAULTS: number;
  resetLabels(): void;
  setLabels(
    singular?: string,
    plural?: string,
    last?: string,
    delim?: string,
    empty?: string,
    formatNumber?: (value: number) => string,
    formatter?: (value: number, unit: number) => string
  ): void;
  resetFormat(): void;
  setFormat(format: countdown$Format): void;
}
declare module "countdown" {
  declare var countdown: countdown$countdown$CountdownStatic;
  declare module.exports: typeof countdown;
}
