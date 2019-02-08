declare module "raspi-led" {
  import type { Peripheral } from "raspi-peripheral";

  declare export var OFF: any; // 0;
  declare export var ON: any; // 1;
  declare export class LED mixins Peripheral {
    constructor(): this;
    hasLed(): boolean;
    read(): 0 | 1;
    write(value: 0 | 1): void;
  }
}
