declare module 'raspi-board' {
        declare export var VERSION_1_MODEL_A: ;
	declare export var VERSION_1_MODEL_B_REV_1: ;
	declare export var VERSION_1_MODEL_B_REV_2: ;
	declare export var VERSION_1_MODEL_B_PLUS: ;
	declare export var VERSION_1_MODEL_A_PLUS: ;
	declare export var VERSION_1_MODEL_ZERO: ;
	declare export var VERSION_1_MODEL_ZERO_W: ;
	declare export var VERSION_2_MODEL_B: ;
	declare export var VERSION_3_MODEL_B: ;
	declare export var VERSION_3_MODEL_B_PLUS: ;
	declare export var VERSION_UNKNOWN: ;
	declare export interface PinInfo {
pins: string[],
peripherals: string[],
gpio: number
} 
	declare export function getBoardRevision(): string

	declare export function getPins(): {
[wiringpi: number]: PinInfo
}

	declare export function getPinNumber(alias: string | number): number | null

	declare export function getGpioNumber(alias: string | number): number | null

    }
