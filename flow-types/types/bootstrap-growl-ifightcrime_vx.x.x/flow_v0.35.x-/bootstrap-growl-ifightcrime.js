declare module 'bootstrap-growl-ifightcrime' {
        declare type BootstrapGrowlIfightcrime$OffsetPositionType = "top" | "bottom";

declare type BootstrapGrowlIfightcrime$AlertType = "info"
| "danger"
| "success"
| "warning"
| string
| null;

declare type BootstrapGrowlIfightcrime$AlignType = "left" | "center" | "right";

declare interface BootstrapGrowlIfightcrime$OffsetOption {

/**
 * Position: top or bottom
 */
from?: BootstrapGrowlIfightcrime$OffsetPositionType,

/**
 * Offset amount
 */
amount?: number
} 

declare interface BootstrapGrowlIfightcrime$Options {

/**
 * Which element to append to
 */
ele?: string,

/**
 * Values of (null, 'info', 'danger', 'success', 'warning') or another value
 */
type?: BootstrapGrowlIfightcrime$AlertType,

/**
 * Offset Options
 */
offset?: BootstrapGrowlIfightcrime$OffsetOption,

/**
 * 'left', 'right', or 'center'
 */
align?: BootstrapGrowlIfightcrime$AlignType,

/**
 * Integer
 */
width?: number,

/**
 * Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
 */
delay?: number,

/**
 * If true then will display a cross to close the popup.
 */
allow_dismiss?: boolean,

/**
 * Spacing between consecutively stacked growls.
 */
stackup_spacing?: number
} 
	declare interface JQueryStatic {

/**
 * Show standard Bootstrap alerts into hovering "Growl-like" notifications
 * @param message to show.
 * @param options should be an options object.
 * @returns The element.
 */
bootstrapGrowl: (
message: string,
options?: BootstrapGrowlIfightcrime$BootstrapGrowlIfightcrime$Options) => JQuery
} 
    }
