declare module "@material/ripple" {
  import typeof MDCComponent from "material__base/component";

  import typeof MDCRippleAdapter from "./adapter";

  import typeof MDCRippleFoundation from "./foundation";

  import typeof * as util from "./util";

  declare export { MDCRippleAdapter, MDCRippleFoundation, util };

  declare export class MDCRipple
    mixins MDCComponent<MDCRippleAdapter, MDCRippleFoundation> {
    static attachTo(
      root: Element,
      options?: {
        isUnbounded?: boolean
      }
    ): MDCRipple;
    static createAdapter(instance: RippleCapableSurface): MDCRippleAdapter;
    unbounded: boolean;
    activate(): void;
    deactivate(): void;
    layout(): void;
    initialSyncWithDOM(): void;
  }

  /**
   * See Material Design spec for more details on when to use ripples.
   * https://material.io/guidelines/motion/choreography.html#choreography-creation
   * @record
   */
  declare export class RippleCapableSurface {
    root_: Element;

    /**
     * Whether or not the ripple bleeds out of the bounds of the element.
     */
    unbounded: boolean | void;

    /**
     * Whether or not the ripple is attached to a disabled component.
     */
    disabled: boolean | void;
  }
}
