declare module 'react-flatpickr' {
        import type {
          Component
        } from 'react';

	import typeof flatpickr from 'flatpickr';

	declare export interface DateTimePickerProps {
defaultValue?: string,
options?: flatpickr.Options.Options,
onChange?: flatpickr.Options.Hook,
onOpen?: flatpickr.Options.Hook,
onClose?: flatpickr.Options.Hook,
onMonthChange?: flatpickr.Options.Hook,
onYearChange?: flatpickr.Options.Hook,
onReady?: flatpickr.Options.Hook,
onValueUpdate?: flatpickr.Options.Hook,
onDayCreate?: flatpickr.Options.Hook,
value?: string | Date | number | $ReadOnlyArray<string | Date | number>
} 
	declare export default class DatePicker mixins Component<DateTimePickerProps> {}
    }
