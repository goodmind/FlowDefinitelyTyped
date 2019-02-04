declare module '@material/grid-list' {
        import type {
          MDCComponent
        } from 'material__base';

	import typeof MDCGridListAdapter from './adapter';

	import typeof MDCGridListFoundation from './foundation';

	declare export {
          MDCGridListAdapter,MDCGridListFoundation
        }

	declare export class MDCGridList mixins MDCComponent<MDCGridListAdapter, MDCGridListFoundation> {
static attachTo(root: Element): MDCGridList
}
    }
