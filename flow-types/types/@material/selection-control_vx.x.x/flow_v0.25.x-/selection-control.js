declare module "@material/selection-control" {
  import type { MDCRipple } from "material__ripple";

  declare export interface MDCSelectionControlState {
    checked: boolean;
    indeterminate: boolean;
    disabled: boolean;
    value?: string;
  }
  declare export class MDCSelectionControl {
    ripple: MDCRipple;
  }
}
