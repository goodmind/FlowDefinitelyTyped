declare module 'raspi-led' {
        import type {
          Peripheral
        } from 'raspi-peripheral';

	declare export var OFF: ;
	declare export var ON: ;
	declare export class LED mixins Peripheral {
constructor(): this;
hasLed(): boolean;
read(): 0 | 1;
write(value: 0 | 1): void
}
    }
