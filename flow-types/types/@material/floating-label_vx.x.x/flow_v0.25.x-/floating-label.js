declare module "@material/floating-label" {
  import typeof MDCComponent from "material__base/component";

  import typeof MDCFloatingLabelFoundation from "./foundation";

  import typeof MDCFloatingLabelAdapter from "./adapter";

  declare export { MDCFloatingLabelFoundation, MDCFloatingLabelAdapter };

  declare export class MDCFloatingLabel
    mixins MDCComponent<MDCFloatingLabelAdapter, MDCFloatingLabelFoundation> {
    static attachTo(root: Element): MDCFloatingLabel;

    /**
 * Styles the label to produce the label shake for errors.
 * @param shouldShake styles the label to shake by adding shake class
if true, otherwise will stop shaking by removing shake class.
 */
    shake(shouldShake: boolean): void;

    /**
 * Styles label to float/dock.
 * @param shouldFloat styles the label to float by adding float class
if true, otherwise docks the label by removing the float class.
 */
    float(shouldFloat: boolean): void;
    getWidth(): number;
  }
}
