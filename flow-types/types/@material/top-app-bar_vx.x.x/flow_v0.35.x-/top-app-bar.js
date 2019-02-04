declare module '@material/top-app-bar' {
        import typeof MDCComponent from 'material__base/component';

	import typeof MDCTopAppBarBaseFoundation from './foundation';

	import typeof MDCTopAppBarAdapter from './adapter';

	import typeof MDCFixedTopAppBarFoundation from './fixed/foundation';

	import typeof MDCShortTopAppBarFoundation from './short/foundation';

	import typeof MDCTopAppBarFoundation from './standard/foundation';

	import type {
          MDCRipple
        } from 'material__ripple';

	declare export {
          MDCTopAppBarBaseFoundation,MDCTopAppBarAdapter,MDCTopAppBarFoundation,MDCFixedTopAppBarFoundation,MDCShortTopAppBarFoundation
        }

	declare export class MDCTopAppBar mixins MDCComponent<MDCTopAppBarAdapter, MDCTopAppBarFoundation> {
initialize(rippleFactory?: (el: Element) => MDCRipple): void;
static attachTo(root: Element): MDCTopAppBar
}
    }
