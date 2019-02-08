declare module "raspi-serial" {
  import type { Peripheral } from "raspi-peripheral";

  declare export var PARITY_NONE: any; // "none";
  declare export var PARITY_EVEN: any; // "even";
  declare export var PARITY_ODD: any; // "odd";
  declare export var PARITY_MARK: any; // "mark";
  declare export var PARITY_SPACE: any; // "space";
  declare export var DEFAULT_PORT: any; // "/dev/ttyAMA0";
  declare export interface Options {
    portId?: string;
    baudRate?:
      | 115200
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
      | number;
    dataBits?: 8 | 7 | 6 | 5;
    stopBits?: 1 | 2;
    parity?: "none" | "even" | "mark" | "odd" | "space";
  }
  declare export type Callback = () => void;
  declare export type ErrorCallback = (err: Error | string) => void;
  declare export class Serial mixins Peripheral {
    constructor(portIdbaudRatedataBitsstopBitsparity?: Options): this;
    port: string;
    baudRate: number;
    dataBits: number;
    stopBits: number;
    parity: string;
    destroy(): void;
    open(cb?: Callback): void;
    close(cb?: ErrorCallback): void;
    write(data: Buffer | string, cb?: Callback): void;
    flush(cb?: ErrorCallback): void;
  }
}
