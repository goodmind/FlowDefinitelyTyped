declare module '@material/select' {
        import type {
          MDCComponent
        } from 'material__base';

	import typeof MDCSelectFoundation from './foundation';

	import typeof MDCSelectAdapter from './adapter';

	import type {
          MDCFloatingLabel
        } from 'material__floating-label';

	import type {
          MDCLineRipple
        } from 'material__line-ripple';

	declare export {
          MDCSelectAdapter,MDCSelectFoundation
        }

	declare export class MDCSelect mixins MDCComponent<MDCSelectAdapter, MDCSelectFoundation> {
static attachTo(root: Element): MDCSelect;
value: string;
selectedIndex: number;
disabled: boolean;
initialize(
labelFactory?: (el: Element) => MDCFloatingLabel,
lineRippleFactory?: (el: Element) => MDCLineRipple): void;
initialSyncWithDOM(): void
}
    }
