declare module '@material/radio' {
        import typeof MDCComponent from 'material__base/component';

	import type {
          MDCSelectionControl
        } from 'material__selection-control';

	import typeof MDCRadioAdapter from './adapter';

	import typeof MDCRadioFoundation from './foundation';

	import type {
          MDCRipple
        } from 'material__ripple';

	declare export {
          MDCRadioAdapter,MDCRadioFoundation
        }

	declare export class MDCRadio mixins MDCComponent<MDCRadioAdapter, MDCRadioFoundation>, MDCSelectionControl {
static attachTo(root: Element): MDCRadio;
checked: boolean;
disabled: boolean;
value: string;
ripple: MDCRipple
}
    }
