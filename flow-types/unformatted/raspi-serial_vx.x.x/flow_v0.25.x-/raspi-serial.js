declare module 'raspi-serial' {
        import type {
          Peripheral
        } from 'raspi-peripheral';

	declare export var PARITY_NONE: ;
	declare export var PARITY_EVEN: ;
	declare export var PARITY_ODD: ;
	declare export var PARITY_MARK: ;
	declare export var PARITY_SPACE: ;
	declare export var DEFAULT_PORT: ;
	declare export interface Options {
portId?: string,
baudRate?: 115200
| 57600
| 38400
| 19200
| 9600
| 4800
| 2400
| 1800
| 1200
| 600
| 300
| 200
| 150
| 134
| 110
| 75
| 50
| number,
dataBits?: 8 | 7 | 6 | 5,
stopBits?: 1 | 2,
parity?: "none"
| "even"
| "mark"
| "odd"
| "space"
} 
	declare export type Callback = () => void;
	declare export type ErrorCallback = (err: Error | string) => void;
	declare export class Serial mixins Peripheral {
constructor({portId, baudRate, dataBits, stopBits, parity}?: Options): this;
port: string;
baudRate: number;
dataBits: number;
stopBits: number;
parity: string;
destroy(): void;
open(cb?: Callback): void;
close(cb?: ErrorCallback): void;
write(data: Buffer | string, cb?: Callback): void;
flush(cb?: ErrorCallback): void
}
    }
