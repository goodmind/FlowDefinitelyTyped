declare module "clockpicker" {
  declare interface ClockPickerOptions {
    default?: string;
    placement?: string;
    align?: string;
    donetext?: string;
    autoclose?: boolean;
    twelvehour?: boolean;
    vibrate?: boolean;
    fromnow?: number;
    init?: () => void;
    beforeShow?: () => void;
    afterShow?: () => void;
    beforeHide?: () => void;
    afterHide?: () => void;
    beforeHourSelect?: () => void;
    afterHourSelect?: () => void;
    beforeDone?: () => void;
    afterDone?: () => void;
  }
  declare interface ClockPicker {
    (options?: ClockPickerOptions): JQuery;
    (methodName: string, ...params: any[]): JQuery;
  }
  declare interface JQuery {
    clockpicker: ClockPicker;
  }
}
