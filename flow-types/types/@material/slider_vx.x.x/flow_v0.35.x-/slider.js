declare module '@material/slider' {
        import typeof MDCComponent from 'material__base/component';

	import typeof MDCSliderFoundation from './foundation';

	import typeof MDCSliderAdapter from './adapter';

	declare export {
          MDCSliderAdapter,MDCSliderFoundation
        }

	declare export class MDCSlider mixins MDCComponent<MDCSliderAdapter, MDCSliderFoundation> {
static attachTo(root: Element): MDCSlider;
value: number;
min: number;
max: number;
step: number;
disabled: boolean;
initialize(): void;
initialSyncWithDOM(): void;
layout(): void;
stepUp(amount?: number): void;
stepDown(amount?: number): void
}
    }
