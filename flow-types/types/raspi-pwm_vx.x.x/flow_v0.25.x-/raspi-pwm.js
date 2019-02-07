declare module "raspi-pwm" {
  import type { Peripheral } from "raspi-peripheral";

  declare export interface Config {
    pin?: number | string;
    frequency?: number;
  }
  declare export class PWM mixins Peripheral {
    frequency: number;
    dutyCycle: number;
    constructor(config?: number | string | Config): this;
    destroy(): void;
    write(dutyCycle: number): void;
  }
}
