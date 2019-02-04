declare module 'rc-tooltip' {
        import typeof * as React from 'react';

	declare export type RCTooltip$Trigger = "hover" | "click" | "focus";

declare export type RCTooltip$Placement = "left"
| "right"
| "top"
| "bottom"
| "topLeft"
| "topRight"
| "bottomLeft"
| "bottomRight";

declare export type RCTooltip$Props = {
overlayClassName?: string,
trigger?: RCTooltip$Trigger[],
mouseEnterDelay?: number,
mouseLeaveDelay?: number,
overlayStyle?: React.CSSProperties,
prefixCls?: string,
transitionName?: string,
onVisibleChange?: (visible?: boolean) => void,
afterVisibleChange?: (visible?: boolean) => void,
visible?: boolean,
defaultVisible?: boolean,
placement?: RCTooltip$Placement | Object,
align?: Object,
onPopupAlign?: (popupDomNode: Element, align: Object) => void,
overlay: React.ReactNode,
arrowContent?: React.ReactNode,
getTooltipContainer?: () => Element,
destroyTooltipOnHide?: boolean,
id?: string
} & React.RCTooltip$Props<any>

	declare export default class Tooltip mixins React.Component<RCTooltip$RCTooltip$Props> {}
    }
