declare module 'raspi-peripheral' {
        import type {
          EventEmitter
        } from 'events';

	declare export class Peripheral mixins EventEmitter {
alive: boolean;
pins: number[];
constructor(pins: string | number | Array<string | number>): this;
destroy(): void;
validateAlive(): void
}
    }
