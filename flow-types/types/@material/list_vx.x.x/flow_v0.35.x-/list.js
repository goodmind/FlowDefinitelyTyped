declare module '@material/list' {
        import typeof MDCComponent from 'material__base/component';

	import type {
          MDCListFoundation
        } from './foundation';

	import type {
          MDCListAdapter
        } from './adapter';

	import type {
          matches
        } from 'material__dom/ponyfill';

	import type {
          cssClasses,strings,Index
        } from './constants';

	declare export class MDCList  {
constructor(...args: any[]): this;
static attachTo(root: Element): MDCList;
destroy(): void;
initialSyncWithDOM(): void;
layout(): void;

/**
 * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
 */
initializeListType(): void;
vertical: boolean;
listElements: Element[];
wrapFocus: boolean;
singleSelection: boolean;
selectedIndex: Index;
getDefaultFoundation(): MDCListFoundation
}
	declare export {
          MDCListFoundation
        }

    }
