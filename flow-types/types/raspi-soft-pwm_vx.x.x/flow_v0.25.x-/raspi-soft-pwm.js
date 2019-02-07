declare module "raspi-soft-pwm" {
  import type { Peripheral } from "raspi-peripheral";

  declare export interface Config {
    pin: number | string;
    frequency?: number;
    range?: number;
  }
  declare export class SoftPWM mixins Peripheral {
    frequency: number;
    range: number;
    dutyCycle: number;
    constructor(config: number | string | Config): this;
    write(dutyCycle: number): void;
  }
}
