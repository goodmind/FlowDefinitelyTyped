declare module "@material/tab" {
  import typeof MDCComponent from "material__base/component";

  import typeof MDCTabFoundation from "./foundation";

  import typeof MDCTabAdapter from "./adapter";

  declare export { MDCTabFoundation, MDCTabAdapter };

  declare export class MDCTab
    mixins MDCComponent<MDCTabAdapter, MDCTabFoundation> {
    static attachTo(root: Element): MDCTab;
    active: boolean;
  }
}
