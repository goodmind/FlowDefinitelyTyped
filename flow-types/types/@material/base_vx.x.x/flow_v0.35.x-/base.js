declare module '@material/base' {
        import type MDCFoundation, {
          MDCNumbers,MDCStrings
        } from './foundation';

	import typeof MDCComponent from './component';

	declare export {
          MDCNumbers,MDCStrings,MDCFoundation,MDCComponent
        }

    }
