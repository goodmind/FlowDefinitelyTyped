declare module "rc-time-picker" {
  import typeof * as moment from "moment";

  import typeof * as React from "react";

  declare interface TimePickerProps {
    prefixCls: string;
    clearText: string;
    disabled: boolean;
    allowEmpty: boolean;
    open: boolean;
    defaultValue: moment.Moment;
    defaultOpenValue: moment.Moment;
    value: moment.Moment;
    placeholder: string;
    className: string;
    id: string;
    popupClassName: string;
    showHour: boolean;
    showMinute: boolean;
    showSecond: boolean;
    format: string;
    disabledHours: () => number[];
    disabledMinutes: (hour: number) => number[];
    disabledSeconds: (hour: number, minute: number) => number[];
    use12Hours: boolean;
    hideDisabledOptions: boolean;
    onChange: (value: moment.Moment) => void;
    addon: (timepicker: TimePicker) => React$Node;
    placement: string;
    transitionName: string;
    onOpen: (state: {
      open: boolean
    }) => void;
    onClose: (state: {
      open: boolean
    }) => void;
    hourStep: number;
    minuteStep: number;
    secondStep: number;
    focusOnOpen: boolean;
    inputReadOnly: boolean;
    inputIcon: React.Node;
    clearIcon: React.Node;
  }
  declare class TimePicker mixins React.Component<$Shape<TimePickerProps>> {
    constructor(props: $ReadOnly<$Shape<TimePickerProps>>): this;
    close(): void;
    isAM(): boolean;
  }
  declare export default typeof TimePicker;
}
