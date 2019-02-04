declare module '@material/menu' {
        import typeof MDCComponent from 'material__base/component';

	import type MDCMenuFoundation, {
          AnchorMargin
        } from './foundation';

	import typeof MDCMenuAdapter from './adapter';

	import type {
          Corner,CornerBit
        } from './constants';

	declare export {
          MDCMenuFoundation,MDCMenuAdapter,AnchorMargin,Corner,CornerBit
        }

	declare export class MDCMenu mixins MDCComponent<MDCMenuAdapter, MDCMenuFoundation> {
static attachTo(root: Element): MDCMenu;
open: boolean;
show(options?: {
focusIndex?: number | null
}): void;
hide(): void;

/**
 * @param corner Default anchor corner alignment of top-left menu corner.
 */
setAnchorCorner(corner: number): void;
setAnchorMargin(margin: AnchorMargin): void;

/**
 * Return the items within the menu. Note that this only contains the set of elements within
 * the items container that are proper list items, and not supplemental / presentational DOM
 * elements.
 */
items: Element[];

/**
 * Return the item within the menu that is selected.
 */
getOptionByIndex(index: number): Element | null;
selectedItemIndex: number;
rememberSelection: boolean;
quickOpen: boolean
}
    }
