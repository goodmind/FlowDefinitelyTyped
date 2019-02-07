declare module "@material/line-ripple" {
  import typeof MDCComponent from "material__base/component";

  import typeof MDCLineRippleFoundation from "./foundation";

  import typeof MDCLineRippleAdapter from "./adapter";

  declare export { MDCLineRippleFoundation, MDCLineRippleAdapter };

  declare export class MDCLineRipple
    mixins MDCComponent<MDCLineRippleAdapter, MDCLineRippleFoundation> {
    static attachTo(root: Element): MDCLineRipple;

    /**
     * Activates the line ripple
     */
    activate(): void;

    /**
     * Deactivates the line ripple
     */
    deactivate(): void;

    /**
     * Sets the transform origin given a user's click location. The `rippleCenter` is the
     * x-coordinate of the middle of the ripple.
     */
    setRippleCenter(xCoordinate: number): void;
  }
}
