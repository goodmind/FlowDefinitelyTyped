declare module "@material/toolbar" {
  import type { MDCComponent } from "material__base";

  import typeof MDCToolbarFoundation from "./foundation";

  import typeof MDCToolbarAdapter from "./adapter";

  declare export { MDCToolbarAdapter, MDCToolbarFoundation };

  declare export class MDCToolbar
    mixins MDCComponent<MDCToolbarAdapter, MDCToolbarFoundation> {
    static attachTo(root: Element): MDCToolbar;
    fixedAdjustElement: HTMLElement;
  }
}
