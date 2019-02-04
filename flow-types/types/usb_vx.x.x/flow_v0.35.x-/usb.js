declare module 'usb' {
        import type {
          EventEmitter
        } from 'events';

	declare export class LibUSBException mixins Error {
errno: number
}
	declare export class Device  {
timeout: number;
busNumber: number;
deviceAddress: number;
portNumbers: number[];
deviceDescriptor: DeviceDescriptor;
configDescriptor: ConfigDescriptor;
allConfigDescriptors: ConfigDescriptor[];
parent: Device;
interfaces: Interface[];
__open(): void;
__claimInterface(addr: number): void;
open(defaultConfig?: boolean): void;
close(): void;
interface(addr: number): Interface;
controlTransfer(
bmRequestType: number,
bRequest: number,
wValue: number,
wIndex: number,
data_or_length: any,
callback: (error?: LibUSBException, buf?: Buffer) => void): Device;
getStringDescriptor(desc_index: number, callback: (error?: string, buf?: Buffer) => void): void;
getBosDescriptor(callback: (error?: string, descriptor?: BosDescriptor) => void): void;
getCapabilities(callback: (error?: string, capabilities?: Capability[]) => void): void;
setConfiguration(desired: number, cb: (err?: string) => void): void;
reset(callback: (err?: string) => void): void
}
	declare export class DeviceDescriptor  {
bLength: number;
bDescriptorType: number;
bcdUSB: number;
bDeviceClass: number;
bDeviceSubClass: number;
bDeviceProtocol: number;
bMaxPacketSize0: number;
idVendor: number;
idProduct: number;
bcdDevice: number;
iManufacturer: number;
iProduct: number;
iSerialNumber: number;
bNumConfigurations: number
}
	declare export class ConfigDescriptor  {
bLength: number;
bDescriptorType: number;
wTotalLength: number;
bNumInterfaces: number;
bConfigurationValue: number;
iConfiguration: number;
bmAttributes: number;
bMaxPower: number;
extra: Buffer;
interfaces: InterfaceDescriptor[][]
}
	declare export class BosDescriptor  {
bLength: number;
bDescriptorType: number;
wTotalLength: number;
bNumDeviceCaps: number;
capabilities: CapabilityDescriptor[]
}
	declare export class CapabilityDescriptor  {
bLength: number;
bDescriptorType: number;
bDevCapabilityType: number;
dev_capability_data: Buffer
}
	declare export class Capability  {
descriptor: CapabilityDescriptor;
type: number;
data: Buffer
}
	declare export class Interface  {
interfaceNumber: number;
altSetting: number;
descriptor: InterfaceDescriptor;
endpoints: Endpoint[];
constructor(device: Device, id: number): this;
claim(): void;
release(cb?: (err?: string) => void): void;
release(closeEndpoints?: boolean, cb?: (err?: string) => void): void;
isKernelDriverActive(): boolean;
detachKernelDriver(): number;
attachKernelDriver(): number;
setAltSetting(altSetting: number, cb: (err?: string) => void): void;
endpoint(addr: number): Endpoint
}
	declare export class InterfaceDescriptor  {
bLength: number;
bDescriptorType: number;
bInterfaceNumber: number;
bAlternateSetting: number;
bNumEndpoints: number;
bInterfaceClass: number;
bInterfaceSubClass: number;
bInterfaceProtocol: number;
iInterface: number;
extra: Buffer;
endpoints: EndpointDescriptor[]
}
	declare export type Endpoint = {
direction: string,
transferType: number,
timeout: number,
descriptor: EndpointDescriptor
} & EventEmitter

	declare export class InEndpoint mixins EventEmitter, Endpoint {
direction: string;
transferType: number;
timeout: number;
descriptor: EndpointDescriptor;
constructor(device: Device, descriptor: EndpointDescriptor): this;
transfer(
length: number,
callback: (error: LibUSBException, data: Buffer) => void): InEndpoint;
startPoll(nTransfers?: number, transferSize?: number): void;
stopPoll(cb?: () => void): void
}
	declare export class OutEndpoint mixins EventEmitter, Endpoint {
direction: string;
transferType: number;
timeout: number;
descriptor: EndpointDescriptor;
constructor(device: Device, descriptor: EndpointDescriptor): this;
transfer(buffer: Buffer, cb: (err?: LibUSBException) => void): OutEndpoint;
transferWithZLP(buf: Buffer, cb: (err?: LibUSBException) => void): void
}
	declare export class EndpointDescriptor  {
bLength: number;
bDescriptorType: number;
bEndpointAddress: number;
bmAttributes: number;
wMaxPacketSize: number;
bInterval: number;
bRefresh: number;
bSynchAddress: number;
extra: Buffer
}
	declare export function findByIds(vid: number, pid: number): Device

	declare export function on(event: string, callback: (device: Device) => void): void

	declare export function removeListener(event: string, callback: (device: Device) => void): void

	declare export function getDeviceList(): Device[]

	declare export function setDebugLevel(level: number): void

	declare export var LIBUSB_CLASS_PER_INTERFACE: number;
	declare export var LIBUSB_CLASS_AUDIO: number;
	declare export var LIBUSB_CLASS_COMM: number;
	declare export var LIBUSB_CLASS_HID: number;
	declare export var LIBUSB_CLASS_PRINTER: number;
	declare export var LIBUSB_CLASS_PTP: number;
	declare export var LIBUSB_CLASS_MASS_STORAGE: number;
	declare export var LIBUSB_CLASS_HUB: number;
	declare export var LIBUSB_CLASS_DATA: number;
	declare export var LIBUSB_CLASS_WIRELESS: number;
	declare export var LIBUSB_CLASS_APPLICATION: number;
	declare export var LIBUSB_CLASS_VENDOR_SPEC: number;
	declare export var LIBUSB_REQUEST_GET_STATUS: number;
	declare export var LIBUSB_REQUEST_CLEAR_FEATURE: number;
	declare export var LIBUSB_REQUEST_SET_FEATURE: number;
	declare export var LIBUSB_REQUEST_SET_ADDRESS: number;
	declare export var LIBUSB_REQUEST_GET_DESCRIPTOR: number;
	declare export var LIBUSB_REQUEST_SET_DESCRIPTOR: number;
	declare export var LIBUSB_REQUEST_GET_CONFIGURATION: number;
	declare export var LIBUSB_REQUEST_SET_CONFIGURATION: number;
	declare export var LIBUSB_REQUEST_GET_INTERFACE: number;
	declare export var LIBUSB_REQUEST_SET_INTERFACE: number;
	declare export var LIBUSB_REQUEST_SYNCH_FRAME: number;
	declare export var LIBUSB_DT_DEVICE: number;
	declare export var LIBUSB_DT_CONFIG: number;
	declare export var LIBUSB_DT_STRING: number;
	declare export var LIBUSB_DT_INTERFACE: number;
	declare export var LIBUSB_DT_ENDPOINT: number;
	declare export var LIBUSB_DT_HID: number;
	declare export var LIBUSB_DT_REPORT: number;
	declare export var LIBUSB_DT_PHYSICAL: number;
	declare export var LIBUSB_DT_HUB: number;
	declare export var LIBUSB_ENDPOINT_IN: number;
	declare export var LIBUSB_ENDPOINT_OUT: number;
	declare export var LIBUSB_TRANSFER_TYPE_CONTROL: number;
	declare export var LIBUSB_TRANSFER_TYPE_ISOCHRONOUS: number;
	declare export var LIBUSB_TRANSFER_TYPE_BULK: number;
	declare export var LIBUSB_TRANSFER_TYPE_INTERRUPT: number;
	declare export var LIBUSB_ISO_SYNC_TYPE_NONE: number;
	declare export var LIBUSB_ISO_SYNC_TYPE_ASYNC: number;
	declare export var LIBUSB_ISO_SYNC_TYPE_ADAPTIVE: number;
	declare export var LIBUSB_ISO_SYNC_TYPE_SYNC: number;
	declare export var LIBUSB_ISO_USAGE_TYPE_DATA: number;
	declare export var LIBUSB_ISO_USAGE_TYPE_FEEDBACK: number;
	declare export var LIBUSB_ISO_USAGE_TYPE_IMPLICIT: number;
	declare export var LIBUSB_TRANSFER_COMPLETED: number;
	declare export var LIBUSB_TRANSFER_ERROR: number;
	declare export var LIBUSB_TRANSFER_TIMED_OUT: number;
	declare export var LIBUSB_TRANSFER_CANCELLED: number;
	declare export var LIBUSB_TRANSFER_STALL: number;
	declare export var LIBUSB_TRANSFER_NO_DEVICE: number;
	declare export var LIBUSB_TRANSFER_OVERFLOW: number;
	declare export var LIBUSB_TRANSFER_SHORT_NOT_OK: number;
	declare export var LIBUSB_TRANSFER_FREE_BUFFER: number;
	declare export var LIBUSB_TRANSFER_FREE_TRANSFER: number;
	declare export var LIBUSB_REQUEST_TYPE_STANDARD: number;
	declare export var LIBUSB_REQUEST_TYPE_CLASS: number;
	declare export var LIBUSB_REQUEST_TYPE_VENDOR: number;
	declare export var LIBUSB_REQUEST_TYPE_RESERVED: number;
	declare export var LIBUSB_RECIPIENT_DEVICE: number;
	declare export var LIBUSB_RECIPIENT_INTERFACE: number;
	declare export var LIBUSB_RECIPIENT_ENDPOINT: number;
	declare export var LIBUSB_RECIPIENT_OTHER: number;
	declare export var LIBUSB_CONTROL_SETUP_SIZE: number;
	declare export var LIBUSB_ERROR_IO: number;
	declare export var LIBUSB_ERROR_INVALID_PARAM: number;
	declare export var LIBUSB_ERROR_ACCESS: number;
	declare export var LIBUSB_ERROR_NO_DEVICE: number;
	declare export var LIBUSB_ERROR_NOT_FOUND: number;
	declare export var LIBUSB_ERROR_BUSY: number;
	declare export var LIBUSB_ERROR_TIMEOUT: number;
	declare export var LIBUSB_ERROR_OVERFLOW: number;
	declare export var LIBUSB_ERROR_PIPE: number;
	declare export var LIBUSB_ERROR_INTERRUPTED: number;
	declare export var LIBUSB_ERROR_NO_MEM: number;
	declare export var LIBUSB_ERROR_NOT_SUPPORTED: number;
	declare export var LIBUSB_ERROR_OTHER: number;
    }
