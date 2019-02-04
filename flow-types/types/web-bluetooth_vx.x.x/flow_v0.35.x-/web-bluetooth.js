declare module 'web-bluetooth' {
        declare type BluetoothServiceUUID = number | string;
	declare type BluetoothCharacteristicUUID = number | string;
	declare type BluetoothDescriptorUUID = number | string;
	declare interface BluetoothRequestDeviceFilter {
services?: BluetoothServiceUUID[],
name?: string,
namePrefix?: string,
manufacturerId?: number,
serviceDataUUID?: BluetoothServiceUUID
} 
	declare type RequestDeviceOptions = {
filters: BluetoothRequestDeviceFilter[],
optionalServices?: BluetoothServiceUUID[]
} | {
acceptAllDevices: boolean,
optionalServices?: BluetoothServiceUUID[]
};
	declare interface BluetoothRemoteGATTDescriptor {
+characteristic: BluetoothRemoteGATTCharacteristic,
+uuid: string,
+value?: DataView,
readValue(): Promise<DataView>,
writeValue(value: BufferSource): Promise<void>
} 
	declare interface BluetoothCharacteristicProperties {
+broadcast: boolean,
+read: boolean,
+writeWithoutResponse: boolean,
+write: boolean,
+notify: boolean,
+indicate: boolean,
+authenticatedSignedWrites: boolean,
+reliableWrite: boolean,
+writableAuxiliaries: boolean
} 
	declare interface CharacteristicEventHandlers {
oncharacteristicvaluechanged: (ev: Event) => any
} 
	declare type BluetoothRemoteGATTCharacteristic = {
+service?: BluetoothRemoteGATTService,
+uuid: string,
+properties: BluetoothCharacteristicProperties,
+value?: DataView,
getDescriptor(descriptor: BluetoothDescriptorUUID): Promise<BluetoothRemoteGATTDescriptor>,
getDescriptors(descriptor?: BluetoothDescriptorUUID): Promise<BluetoothRemoteGATTDescriptor[]>,
readValue(): Promise<DataView>,
writeValue(value: BufferSource): Promise<void>,
startNotifications(): Promise<BluetoothRemoteGATTCharacteristic>,
stopNotifications(): Promise<BluetoothRemoteGATTCharacteristic>,
addEventListener(
type: "characteristicvaluechanged",
listener: (ev: Event) => any,
useCapture?: boolean): void,
addEventListener(
type: string,
listener: EventListenerOrEventListenerObject,
useCapture?: boolean): void
} & EventTarget & CharacteristicEventHandlers

	declare interface ServiceEventHandlers {
onserviceadded: (ev: Event) => any,
onservicechanged: (ev: Event) => any,
onserviceremoved: (ev: Event) => any
} 
	declare type BluetoothRemoteGATTService = {
+device: BluetoothDevice,
+uuid: string,
+isPrimary: boolean,
getCharacteristic(
characteristic: BluetoothCharacteristicUUID): Promise<BluetoothRemoteGATTCharacteristic>,
getCharacteristics(
characteristic?: BluetoothCharacteristicUUID): Promise<BluetoothRemoteGATTCharacteristic[]>,
getIncludedService(service: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService>,
getIncludedServices(service?: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService[]>,
addEventListener(type: "serviceadded", listener: (ev: Event) => any, useCapture?: boolean): void,
addEventListener(
type: "servicechanged",
listener: (ev: Event) => any,
useCapture?: boolean): void,
addEventListener(
type: "serviceremoved",
listener: (ev: Event) => any,
useCapture?: boolean): void,
addEventListener(
type: string,
listener: EventListenerOrEventListenerObject,
useCapture?: boolean): void
} & EventTarget & CharacteristicEventHandlers & ServiceEventHandlers

	declare type BluetoothRemoteGATTServer = {
+device: BluetoothDevice,
+connected: boolean,
connect(): Promise<BluetoothRemoteGATTServer>,
disconnect(): void,
getPrimaryService(service: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService>,
getPrimaryServices(service?: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService[]>
} & EventTarget

	declare interface BluetoothDeviceEventHandlers {
ongattserverdisconnected: (ev: Event) => any
} 
	declare type BluetoothDevice = {
+id: string,
+name?: string,
+gatt?: BluetoothRemoteGATTServer,
+uuids?: string[],
watchAdvertisements(): Promise<void>,
unwatchAdvertisements(): void,
+watchingAdvertisements: boolean,
addEventListener(
type: "gattserverdisconnected",
listener: (ev: Event) => any,
useCapture?: boolean): void,
addEventListener(
type: "advertisementreceived",
listener: (ev: Event) => any,
useCapture?: boolean): void,
addEventListener(
type: string,
listener: EventListenerOrEventListenerObject,
useCapture?: boolean): void
} & EventTarget & BluetoothDeviceEventHandlers & CharacteristicEventHandlers & ServiceEventHandlers

	declare type Bluetooth = {
getAvailability(): Promise<boolean>,
onavailabilitychanged: (ev: Event) => any,
+referringDevice?: BluetoothDevice,
requestDevice(options?: RequestDeviceOptions): Promise<BluetoothDevice>,
addEventListener(
type: "availabilitychanged",
listener: (ev: Event) => any,
useCapture?: boolean): void,
addEventListener(
type: string,
listener: EventListenerOrEventListenerObject,
useCapture?: boolean): void
} & EventTarget & BluetoothDeviceEventHandlers & CharacteristicEventHandlers & ServiceEventHandlers

	declare interface Navigator {
bluetooth: Bluetooth
} 
    }
