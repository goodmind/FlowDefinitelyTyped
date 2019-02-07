declare module "bootstrap.timepicker" {
  declare interface TimepickerOptions {
    defaultTime?: string | boolean | Date;
    disableFocus?: boolean;
    disableMousewheel?: boolean;
    explicitMode?: boolean;
    icons?: TimepickerIconOptions;
    isOpen?: boolean;
    minuteStep?: number;
    modalBackdrop?: boolean;
    secondStep?: number;
    showSeconds?: boolean;
    showInputs?: boolean;
    showMeridian?: boolean;
    template?: string | boolean;
    appendWidgetTo?: string;
    maxHours?: number;
    snapToStep?: boolean;
  }
  declare interface TimepickerIconOptions {
    up?: string;
    down?: string;
  }
  declare interface TimepickerTime {
    value?: string;
    hours?: number;
    minutes?: number;
    seconds?: number;
    meridian?: string;
  }
  declare interface JQuery {
    timepicker(): JQuery;
    timepicker(methodName: string): JQuery;
    timepicker(methodName: string, params: any): JQuery;
    timepicker(options: TimepickerOptions): JQuery;
  }
  declare interface JQueryEventObject {
    time?: TimepickerTime;
  }
}
