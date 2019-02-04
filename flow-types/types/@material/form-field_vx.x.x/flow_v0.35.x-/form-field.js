declare module '@material/form-field' {
        import typeof MDCComponent from 'material__base/component';

	import typeof MDCFormFieldFoundation from './foundation';

	import typeof MDCFormFieldAdapter from './adapter';

	import type {
          MDCSelectionControl
        } from 'material__selection-control';

	declare export {
          MDCFormFieldAdapter,MDCFormFieldFoundation
        }

	declare export class MDCFormField mixins MDCComponent<MDCFormFieldAdapter, MDCFormFieldFoundation> {
static attachTo(root: Element): MDCFormField;
input: MDCSelectionControl
}
    }
