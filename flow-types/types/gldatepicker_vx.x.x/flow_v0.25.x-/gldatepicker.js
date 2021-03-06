declare module "gldatepicker" {
  declare interface GlDatePickerOffset {
    x: number;
    y: number;
  }
  declare interface GlDatePickerDate {
    date: Date;
    repeatMonth?: boolean;
    repeatYear?: boolean;
  }
  declare interface GlDatePickerDateRange {
    from: Date;
    to?: Date;
    repeatYear?: boolean;
  }
  declare type GlDatePickerSpecialDate = {
    data?: any,
    cssClass?: string
  } & GlDatePickerDate;

  declare interface GlDatePickerOptions {
    cssName?: string;
    zIndex?: number;
    borderSize?: number;
    calendarOffset?: GlDatePickerOffset;
    showAlways?: boolean;
    hideOnClick?: boolean;
    allowMonthSelect?: boolean;
    allowYearSelect?: boolean;
    todayDate?: Date;
    selectedDate?: Date;
    prevArrow?: string;
    nextArrow?: string;
    selectableDates?: GlDatePickerDate[];
    selectableDateRange?: GlDatePickerDateRange[];
    specialDates?: GlDatePickerSpecialDate[];
    selectableMonths?: number[];
    selectableYears?: number[];
    selectableDOW?: number[];
    monthNames?: string[];
    dowNames?: string[];
    dowOffset?: number;
    onClick?: (
      inputElement: JQuery,
      cell: JQuery,
      date: Date,
      data: any
    ) => void;
    onHover?: (
      inputElement: JQuery,
      cell: JQuery,
      date: Date,
      data: any
    ) => void;
    onShow?: (calendar: JQuery) => void;
    onHide?: (calendar: JQuery) => void;
  }
  declare interface GlDatePicker {
    options: GlDatePickerOptions;
    show(): void;
    hide(): void;
    render(renderCallback?: () => void): void;
  }
  declare interface JQuery {
    glDatePicker(ret: boolean): GlDatePicker;
    glDatePicker(options?: GlDatePickerOptions): JQuery;
  }
}
