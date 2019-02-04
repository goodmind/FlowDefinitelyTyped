declare module '@material/notched-outline' {
        import typeof MDCComponent from 'material__base/component';

	import typeof MDCNotchedOutlineFoundation from './foundation';

	import typeof MDCNotchedOutlineAdapter from './adapter';

	declare export {
          MDCNotchedOutlineFoundation,MDCNotchedOutlineAdapter
        }

	declare export class MDCNotchedOutline mixins MDCComponent<MDCNotchedOutlineAdapter, MDCNotchedOutlineFoundation> {
static attachTo(root: Element): MDCNotchedOutline;

/**
 * Updates outline selectors and SVG path to open notch.
 */
notch(notchWidth: number, isRtl?: boolean): void;

/**
 * Updates the outline selectors to close notch and return it to idle state.
 */
closeNotch(): void
}
    }
