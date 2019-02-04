declare module 'gamepad' {
        import type {
          EventEmitter
        } from 'events';

	declare var nodeGamepad: NodeGamepad;
	declare module.exports: typeof nodeGamepad

	declare type NodeGamepad = {
init(): void,
shutdown(): void,
numDevices(): number,
deviceAtIndex(deviceIndex: number): GamepadInstance,
detectDevices(): void,
processEvents(): void,
on(
event: "attach",
listener: (deviceID: number, device: GamepadInstance) => void): this,
on(event: "remove", listener: (deviceID: number) => void): this,
on(
event: "down" | "up",
listener: (deviceID: number, buttonID: number, timestamp: number) => void): this,
on(
event: "move",
listener: (
deviceID: number,
axisID: number,
value: number,
lastValue: number,
timestamp: number) => void): this
} & EventEmitter

	declare interface GamepadInstance {
deviceID: number,
description: string,
vendorID: number,
productID: number,
axisStates: number[],
buttonStates: boolean[]
} 
    }
