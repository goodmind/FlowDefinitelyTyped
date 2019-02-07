declare module "@material/linear-progress" {
  import type { MDCComponent } from "material__base";

  import typeof MDCLinearProgressAdapter from "./adapter";

  import typeof MDCLinearProgressFoundation from "./foundation";

  declare export { MDCLinearProgressAdapter, MDCLinearProgressFoundation };

  declare export class MDCLinearProgress
    mixins MDCComponent<MDCLinearProgressAdapter, MDCLinearProgressFoundation> {
    static attachTo(root: Element): MDCLinearProgress;
    determinate: boolean;
    progress: number;
    buffer: number;
    reverse: boolean;
    open(): void;
    close(): void;
  }
}
