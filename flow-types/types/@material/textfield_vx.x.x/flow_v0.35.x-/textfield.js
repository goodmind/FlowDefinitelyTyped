declare module '@material/textfield' {
        import typeof MDCComponent from 'material__base/component';

	import typeof MDCTextFieldFoundation from './foundation';

	import type MDCTextFieldAdapter, {
          FoundationMapType
        } from './adapter';

	import type {
          MDCTextFieldHelperText,MDCTextFieldHelperTextFoundation,MDCTextFieldHelperTextAdapter
        } from './helper-text';

	import type {
          MDCTextFieldIcon,MDCTextFieldIconFoundation,MDCTextFieldIconAdapter
        } from './icon';

	import type {
          MDCRipple,MDCRippleFoundation
        } from 'material__ripple';

	import type {
          MDCLineRipple
        } from 'material__line-ripple';

	import type {
          MDCFloatingLabel
        } from 'material__floating-label';

	import type {
          MDCNotchedOutline
        } from 'material__notched-outline';

	declare export {
          MDCTextFieldFoundation,MDCTextFieldAdapter,MDCTextFieldHelperText
        }

	declare export {
          MDCTextFieldHelperTextFoundation,MDCTextFieldHelperTextAdapter,MDCTextFieldIcon
        }

	declare export {
          MDCTextFieldIconFoundation,MDCTextFieldIconAdapter
        }

	declare export class MDCTextField mixins MDCComponent<MDCTextFieldAdapter, MDCTextFieldFoundation> {
static attachTo(root: Element): MDCTextField;
initialize(
rippleFactory?: (el: Element, foundation: MDCRippleFoundation) => MDCRipple,
lineRippleFactory?: (el: Element) => MDCLineRipple,
helperTextFactory?: (el: Element) => MDCTextFieldHelperText,
iconFactory?: (el: Element) => MDCTextFieldIcon,
labelFactory?: (el: Element) => MDCFloatingLabel,
outlineFactory?: (el: Element) => MDCNotchedOutline): void;

/**
 * Initiliazes the Text Field's internal state based on the environment's
 * state.
 */
initialSyncWithDom(): void;
value: string;
disabled: boolean;
valid: boolean;
required: boolean;
pattern: string;
minLength: number;
maxLength: number;
min: string;
max: string;
step: string;
helperTextContent: string;

/**
 * Recomputes the outline SVG path for the outline element.
 */
layout(): void
}
    }
