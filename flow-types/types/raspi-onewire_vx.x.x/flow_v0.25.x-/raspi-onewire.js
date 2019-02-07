declare module "raspi-onewire" {
  import type { Peripheral } from "raspi-peripheral";

  declare export class OneWire mixins Peripheral {
    constructor(): this;
    searchForDevices(
      cb: (readErr: string | Error | void, devices: number[][] | void) => void
    ): void;
    read(
      deviceID: number[],
      numBytesToRead: number,
      cb: (err: string | Error | void, data: Buffer | void) => void
    ): void;
    readAllAvailable(
      deviceID: number[],
      cb: (err: string | Error | void, data: Buffer | void) => void
    ): void;
  }
}
