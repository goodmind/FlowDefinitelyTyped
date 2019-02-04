declare module 'onoff' {
        declare module.exports: typeof __ONOFF

	
      declare var npm$namespace$__ONOFF: {
        
        version: typeof __ONOFF$version,
      }
declare var __ONOFF$version: string;

declare interface __ONOFF$GpioOptions {
debounceTimeout?: number,
activeLow?: boolean
} 

declare type __ONOFF$Direction = "in" | "out" | "high" | "low";

declare type __ONOFF$Edge = "none" | "falling" | "rising" | "both";

declare class __ONOFF$Gpio  {
constructor(gpio: number, direction: __ONOFF$Direction, options?: __ONOFF$GpioOptions): this;
constructor(gpio: number, direction: __ONOFF$Direction, edge?: __ONOFF$Edge, options?: __ONOFF$GpioOptions): this;
static accessible: boolean;
gpio: number;
gpioPath: string;
opts: __ONOFF$GpioOptions;
readBuffer: Buffer;
listeners: Array<(err: Error, value: number) => void>;
_valueFd: number;
read(cb: (err: Error, value: number) => void): void;
readSync(): number;
write(value: number, cb: (err: Error, value: number) => void): void;
writeSync(value: number): void;
watch(cb: (err: Error, value: number) => void): void;
unwatch(): void;
unwatch(cb: (err: Error, value: number) => void): void;
unwatchAll(): void;
direction(): __ONOFF$Direction;
setDirection(value: __ONOFF$Direction): void;
edge(): __ONOFF$Edge;
setEdge(value: __ONOFF$Edge): void;
activeLow(): boolean;
setActiveLow(invert?: boolean): void;
options(): __ONOFF$GpioOptions;
unexport(): void
}
    }
