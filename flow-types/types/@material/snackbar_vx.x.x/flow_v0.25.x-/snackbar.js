declare module "@material/snackbar" {
  import type { MDCComponent } from "material__base";

  import typeof MDCSnackbarAdapter from "./adapter";

  import type MDCSnackbarFoundation, { MDCSnackbarData } from "./foundation";

  declare export { MDCSnackbarAdapter, MDCSnackbarFoundation };

  declare export class MDCSnackbar
    mixins MDCComponent<MDCSnackbarAdapter, MDCSnackbarFoundation> {
    static attachTo(root: Element): MDCSnackbar;
    show(data: MDCSnackbarData): void;
    dismissesOnAction: boolean;
  }
}
