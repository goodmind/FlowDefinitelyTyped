declare module '@material/icon-toggle' {
        import typeof MDCComponent from 'material__base/component';

	import typeof MDCIconToggleFoundation from './foundation';

	import typeof MDCIconToggleAdapter from './adapter';

	import type {
          MDCRipple
        } from 'material__ripple';

	declare export {
          MDCIconToggleAdapter,MDCIconToggleFoundation
        }

	declare export class MDCIconToggle mixins MDCComponent<MDCIconToggleAdapter, MDCIconToggleFoundation> {
static attachTo(root: Element): MDCIconToggle;
initialSyncWithDOM(): void;
ripple: MDCRipple;
on: boolean;
disabled: boolean;
refreshToggleData(): void
}
    }
