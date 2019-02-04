declare module 'bleno' {
        declare type State = "poweredOn"
| "poweredOff"
| "unauthorized"
| "unsupported"
| "unknown"
| "resetting";
	declare type Property = "read"
| "write"
| "indicate"
| "notify"
| "writeWithoutResponse";
	declare interface CharacteristicOptions {
uuid: string,
properties?: $ReadOnlyArray<Property> | null,
secure?: $ReadOnlyArray<Property> | null,
value?: Buffer | null,
descriptors?: $ReadOnlyArray<Descriptor> | null,
onIndicate?: (() => void) | null,
onNotify?: (() => void) | null,
onReadRequest?: ((offset: number, callback: (result: number, data?: Buffer) => void) => void) | null,
onSubscribe?: ((maxValueSize: number, updateValueCallback: any) => void) | null,
onUnsubscribe?: (() => void) | null,
onWriteRequest?: ((
data: Buffer,
offset: number,
withoutResponse: boolean,
callback: (result: number) => void) => void) | null
} 
	declare class Characteristic  {
uuid: string;
properties: $ReadOnlyArray<Property>;
secure: $ReadOnlyArray<Property>;
value: Buffer | null;
descriptors: $ReadOnlyArray<Descriptor>;
constructor(options: CharacteristicOptions): this;
onIndicate(): void;
onNotify(): void;
onReadRequest(offset: number, callback: (result: number, data?: Buffer) => void): void;
onSubscribe(maxValueSize: number, updateValueCallback: any): void;
onUnsubscribe(): void;
onWriteRequest(
data: Buffer,
offset: number,
withoutResponse: boolean,
callback: (result: number) => void): void;
toString(): string;
RESULT_ATTR_NOT_LONG: number;
RESULT_INVALID_ATTRIBUTE_LENGTH: number;
RESULT_INVALID_OFFSET: number;
RESULT_SUCCESS: number;
RESULT_UNLIKELY_ERROR: number;
static RESULT_ATTR_NOT_LONG: number;
static RESULT_INVALID_ATTRIBUTE_LENGTH: number;
static RESULT_INVALID_OFFSET: number;
static RESULT_SUCCESS: number;
static RESULT_UNLIKELY_ERROR: number
}
	declare interface DescriptorOptions {
uuid: string,
value?: Buffer | string | null
} 
	declare class Descriptor  {
uuid: string;
value: Buffer;
constructor(options: DescriptorOptions): this;
toString(): string
}
	declare interface PrimaryServiceOptions {
uuid: string,
characteristics?: $ReadOnlyArray<Characteristic> | null
} 
	declare class PrimaryService  {
uuid: string;
characteristics: $ReadOnlyArray<Characteristic>;
constructor(options: PrimaryServiceOptions): this;
toString(): string
}
	declare type Bleno = {
+Characteristic: typeof Characteristic,
+Descriptor: typeof Descriptor,
+PrimaryService: typeof PrimaryService,
+address: string,
+mtu: number,
+platform: string,
+rssi: number,
+state: State,
disconnect(): void,
setServices(
services: $ReadOnlyArray<PrimaryService>,
callback?: (arg: Error | void | null) => void): void,
startAdvertising(
name: string,
serviceUuids?: $ReadOnlyArray<string>,
callback?: (arg: Error | void | null) => void): void,
startAdvertisingIBeacon(
uuid: string,
major: number,
minor: number,
measuredPower: number,
callback?: (arg: Error | void | null) => void): void,
startAdvertisingWithEIRData(advertisementData: Buffer, callback?: (arg: Error | void | null) => void): void,
startAdvertisingWithEIRData(
advertisementData: Buffer,
scanData: Buffer,
callback?: (arg: Error | void | null) => void): void,
stopAdvertising(callback?: () => void): void,
updateRssi(callback?: (err: null, rssi: number) => void): void,
on(event: "stateChange", cb: (state: State) => void): this,
on(event: "accept", cb: (address: string) => void): this,
on(event: "mtuChange", cb: (mtu: number) => void): this,
on(event: "disconnect", cb: (clientAddress: string) => void): this,
on(event: "advertisingStart", cb: (err?: Error | null) => void): this,
on(event: "advertisingStartError", cb: (err: Error) => void): this,
on(event: "advertisingStop", cb: () => void): this,
on(event: "servicesSet", cb: (err?: Error | null) => void): this,
on(event: "servicesSetError", cb: (err: Error) => void): this,
on(event: "rssiUpdate", cb: (rssi: number) => void): this
} & NodeJS.EventEmitter

	declare var bleno: Bleno;
	declare module.exports: typeof bleno

    }
