declare module 'vue2-datepicker' {
        import type {
          Component
        } from 'vue/types/options';

	declare interface Datepicker$Shortcuts {
text: string,
start: Date,
end: Date
} 

declare interface Datepicker$TimePickerOptions {
start: string,
step: string,
end: string
} 

declare interface Datepicker$Lang {
days: string[],
months: string[],
pickers: string[],
placeholder: {
date: string,
dateRange: string
}
} 
	declare var Datepicker: Component<any, any, any, {
type?: string,
range?: boolean,
format?: string,
lang?: string | Datepicker$Datepicker$Lang,
clearable?: boolean,
confirm?: boolean,
editable?: boolean,
disabled?: boolean,
placeholder?: string,
width?: number | string,
notBefore?: string | Date,
notAfter?: string | Date,
disabledDays?: number[] | string[] | ((date: Date) => Date[]),
shortcuts?: boolean | Datepicker$Datepicker$Shortcuts[],
timePickerOptions?: Datepicker$Datepicker$TimePickerOptions[] | (() => Datepicker$Datepicker$TimePickerOptions[]),
minuteStep?: number,
firstDayOfWeek?: number,
inputClass?: string,
inputName?: string,
confirmText?: string,
rangeSeparator?: string
}>;
	declare export default typeof Datepicker

    }
