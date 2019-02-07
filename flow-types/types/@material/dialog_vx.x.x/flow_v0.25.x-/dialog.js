declare module "@material/dialog" {
  import type { MDCComponent } from "material__base";

  import typeof MDCDialogFoundation from "./foundation";

  import typeof MDCDialogAdapter from "./adapter";

  import typeof * as util from "./util";

  declare export { MDCDialogAdapter, MDCDialogFoundation, util };

  declare export class MDCDialog
    mixins MDCComponent<MDCDialogAdapter, MDCDialogFoundation> {
    static attachTo(root: Element): MDCDialog;
    open: boolean;
    show(): void;
    close(): void;
  }
}
