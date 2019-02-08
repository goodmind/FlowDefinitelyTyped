declare module "raspi-board" {
  declare export var VERSION_1_MODEL_A: any; // "rpi1_a";
  declare export var VERSION_1_MODEL_B_REV_1: any; // "rpi1_b1";
  declare export var VERSION_1_MODEL_B_REV_2: any; // "rpi1_b2";
  declare export var VERSION_1_MODEL_B_PLUS: any; // "rpi1_bplus";
  declare export var VERSION_1_MODEL_A_PLUS: any; // "rpi1_aplus";
  declare export var VERSION_1_MODEL_ZERO: any; // "rpi1_zero";
  declare export var VERSION_1_MODEL_ZERO_W: any; // "rpi1_zerow";
  declare export var VERSION_2_MODEL_B: any; // "rpi2_b";
  declare export var VERSION_3_MODEL_B: any; // "rpi3_b";
  declare export var VERSION_3_MODEL_B_PLUS: any; // "rpi3_bplus";
  declare export var VERSION_UNKNOWN: any; // "unknown";
  declare export interface PinInfo {
    pins: string[];
    peripherals: string[];
    gpio: number;
  }
  declare export function getBoardRevision(): string;

  declare export function getPins(): {
    [wiringpi: number]: PinInfo
  };

  declare export function getPinNumber(alias: string | number): number | null;

  declare export function getGpioNumber(alias: string | number): number | null;
}
