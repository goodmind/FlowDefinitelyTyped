declare module "@material/checkbox" {
  import typeof MDCComponent from "material__base/component";

  import typeof MDCCheckboxAdapter from "./adapter";

  import type { MDCSelectionControl } from "material__selection-control";

  import typeof MDCCheckboxFoundation from "./foundation";

  import type { MDCRipple } from "material__ripple";

  declare export { MDCCheckboxAdapter, MDCCheckboxFoundation };

  declare export class MDCCheckbox
    mixins MDCComponent<MDCCheckboxAdapter, MDCCheckboxFoundation>,
      MDCSelectionControl {
    static attachTo(root: Element): MDCCheckbox;
    ripple: MDCRipple;
    checked: boolean;
    indeterminate: boolean;
    disabled: boolean;
    value: string;
  }
}
