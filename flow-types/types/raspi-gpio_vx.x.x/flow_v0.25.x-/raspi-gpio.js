declare module "raspi-gpio" {
  import type { Peripheral } from "raspi-peripheral";

  declare export interface Config {
    pin: number | string;
    pullResistor?: number;
  }
  declare export var LOW: any; // 0;
  declare export var HIGH: any; // 1;
  declare export var PULL_NONE: number;
  declare export var PULL_DOWN: number;
  declare export var PULL_UP: number;
  declare export class DigitalOutput mixins Peripheral {
    value: number;
    constructor(config: number | string | Config): this;
    write(value: number): void;
  }
  declare export class DigitalInput mixins Peripheral {
    value: number;
    constructor(config: number | string | Config): this;
    destroy(): void;
    read(): number;
  }
}
