declare module "jquery.timeago" {
  declare interface TimeagoSetings {
    refreshMillis?: number;
    allowFuture?: boolean;
    strings?: {
      prefixAgo?: string,
      prefixFromNow?: string,
      suffixAgo?: string,
      suffixFromNow?: string,
      seconds?: any,
      minute?: any,
      minutes?: any,
      hour?: any,
      hours?: any,
      day?: any,
      days?: any,
      month?: any,
      months?: any,
      year?: any,
      years?: any,
      wordSeparator?: string,
      numbers?: any[]
    };
  }
  declare interface TimeagoStatic {
    (timestamp: Date): string;
    (timestamp: number): string;
    (timestamp: string): string;
    (timestamp: Element): string;
    (timestamp: JQuery): string;
    settings: TimeagoSetings;
    inWords(distanceMillis: Date): string;
    inWords(distanceMillis: number): string;
    parse(iso8601: string): Date;
    datetime(element: Element): Date;
    datetime(element: JQuery): Date;
    isTime(element: Element): boolean;
    isTime(element: JQuery): boolean;
  }
  declare interface Timeago {
    (): JQuery;
  }
  declare interface JQueryStatic {
    timeago: TimeagoStatic;
  }
  declare interface JQuery {
    timeago: Timeago;
  }
}
