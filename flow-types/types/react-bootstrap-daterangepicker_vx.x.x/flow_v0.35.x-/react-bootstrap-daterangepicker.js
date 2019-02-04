declare export interface ReactBootstrapDaterangepicker$EventHandler {
(event?: any, picker?: any): any
} 

declare export type ReactBootstrapDaterangepicker$Props = {
onShow?: ReactBootstrapDaterangepicker$EventHandler,
onHide?: ReactBootstrapDaterangepicker$EventHandler,
onShowCalendar?: ReactBootstrapDaterangepicker$EventHandler,
onHideCalendar?: ReactBootstrapDaterangepicker$EventHandler,
onApply?: ReactBootstrapDaterangepicker$EventHandler,
onCancel?: ReactBootstrapDaterangepicker$EventHandler,
onEvent?: ReactBootstrapDaterangepicker$EventHandler,
containerClass?: string,
containerStyles?: React.CSSProperties
} & daterangepicker.Options


declare export class ReactBootstrapDaterangepicker$DateRangePicker mixins React.Component<ReactBootstrapDaterangepicker$Props> {}declare var ReactBootstrapDaterangepicker$DateRangePicker: typeof undefined;declare module 'react-bootstrap-daterangepicker' {
        declare module.exports: typeof ReactBootstrapDaterangepicker$DateRangePicker

    }
