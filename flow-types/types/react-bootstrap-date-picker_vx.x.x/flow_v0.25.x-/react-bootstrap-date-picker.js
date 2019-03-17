declare module "react-bootstrap-date-picker" {
  import type {
    ComponentClass,
    StatelessComponent,
    Node,
    FocusEventHandler,
    HTMLAttributes
  } from "react";

  declare export default typeof DatePicker;

  declare var DatePicker: DatePicker;
  declare type DatePicker = ComponentClass<DatePicker$DatePickerProps>;
  declare type DatePicker$ChangeCallback = (
    value: string,
    formattedValue: string
  ) => void;

  declare interface DatePicker$DatePickerProps {
    value?: string;
    defaultValue?: string;
    minDate?: string;
    maxDate?: string;
    style?: any;
    className?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    onChange?: DatePicker$ChangeCallback;
    onFocus?: FocusEventHandler<any>;
    onBlur?: FocusEventHandler<any>;
    dateFormat?: string;
    clearButtonElement?: Node;
    showClearButton?: boolean;
    onClear?: () => void;
    previousButtonElement?: Node;
    nextButtonElement?: Node;
    cellPadding?: string;
    dayLabels?: string[];
    monthLabels?: string[];
    calendarPlacement?: string;
    calendarContainer?: any;
    weekStartsOnMonday?: boolean;
    showTodayButton?: boolean;
    todayButtonLabel?: string;
    customControl?: StatelessComponent<any> | ComponentClass<any>;
  }
}
