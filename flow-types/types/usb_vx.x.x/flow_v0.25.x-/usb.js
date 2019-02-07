declare module "usb" {
  import type { EventEmitter } from "events";

  declare export class LibUSBException mixins Error {
    errno: number;
  }

  /**
   * Represents a USB device.
   */
  declare export class Device {
    /**
     * Timeout in milliseconds to use for control transfers.
     */
    timeout: number;

    /**
     * Integer USB device number
     */
    busNumber: number;

    /**
     * Integer USB device address
     */
    deviceAddress: number;

    /**
     * Array containing the USB device port numbers, or `undefined` if not supported on this platform.
     */
    portNumbers: number[];

    /**
     * Object with properties for the fields of the device descriptor.
     */
    deviceDescriptor: DeviceDescriptor;

    /**
     * Object with properties for the fields of the configuration descriptor.
     */
    configDescriptor: ConfigDescriptor;

    /**
     * Contains all config descriptors of the device (same structure as .configDescriptor above)
     */
    allConfigDescriptors: ConfigDescriptor[];

    /**
     * Contains the parent of the device, such as a hub. If there is no parent this property is set to `null`.
     */
    parent: Device;

    /**
     * List of Interface objects for the interfaces of the default configuration of the device.
     */
    interfaces: Interface[];
    __open(): void;
    __claimInterface(addr: number): void;

    /**
     * Open the device.
     * @param defaultConfig
     */
    open(defaultConfig?: boolean): void;

    /**
     * Close the device.
     *
     * The device must be open to use this method.
     */
    close(): void;

    /**
     * Return the interface with the specified interface number.
     *
     * The device must be open to use this method.
     * @param addr
     */
    interface(addr: number): Interface;

    /**
     * Perform a control transfer with `libusb_control_transfer`.
     *
     * Parameter `data_or_length` can be a integer length for an IN transfer, or a Buffer for an out transfer. The type must match the direction specified in the MSB of bmRequestType.
     *
     * The `data` parameter of the callback is always undefined for OUT transfers, or will be passed a Buffer for IN transfers.
     *
     * The device must be open to use this method.
     * @param bmRequestType
     * @param bRequest
     * @param wValue
     * @param wIndex
     * @param data_or_length
     * @param callback
     */
    controlTransfer(
      bmRequestType: number,
      bRequest: number,
      wValue: number,
      wIndex: number,
      data_or_length: any,
      callback: (error?: LibUSBException, buf?: Buffer) => void
    ): Device;

    /**
     * Perform a control transfer to retrieve a string descriptor
     *
     * The device must be open to use this method.
     * @param desc_index
     * @param callback
     */
    getStringDescriptor(
      desc_index: number,
      callback: (error?: string, buf?: Buffer) => void
    ): void;

    /**
     * Perform a control transfer to retrieve an object with properties for the fields of the Binary Object Store descriptor.
     *
     * The device must be open to use this method.
     * @param callback
     */
    getBosDescriptor(
      callback: (error?: string, descriptor?: BosDescriptor) => void
    ): void;

    /**
     * Retrieve a list of Capability objects for the Binary Object Store capabilities of the device.
     *
     * The device must be open to use this method.
     * @param callback
     */
    getCapabilities(
      callback: (error?: string, capabilities?: Capability[]) => void
    ): void;

    /**
     * Set the device configuration to something other than the default (0). To use this, first call `.open(false)` (which tells it not to auto configure),
     * then before claiming an interface, call this method.
     *
     * The device must be open to use this method.
     * @param desired
     * @param cb
     */
    setConfiguration(desired: number, cb: (err?: string) => void): void;

    /**
     * Performs a reset of the device. Callback is called when complete.
     *
     * The device must be open to use this method.
     * @param callback
     */
    reset(callback: (err?: string) => void): void;
  }

  /**
   * A structure representing the standard USB device descriptor
   */
  declare export class DeviceDescriptor {
    /**
     * Size of this descriptor (in bytes)
     */
    bLength: number;

    /**
     * Descriptor type.
     */
    bDescriptorType: number;

    /**
     * USB specification release number in binary-coded decimal.
     */
    bcdUSB: number;

    /**
     * USB-IF class code for the device.
     */
    bDeviceClass: number;

    /**
     * USB-IF subclass code for the device, qualified by the bDeviceClass value.
     */
    bDeviceSubClass: number;

    /**
     * USB-IF protocol code for the device, qualified by the bDeviceClass and bDeviceSubClass values.
     */
    bDeviceProtocol: number;

    /**
     * Maximum packet size for endpoint 0.
     */
    bMaxPacketSize0: number;

    /**
     * USB-IF vendor ID.
     */
    idVendor: number;

    /**
     * USB-IF product ID.
     */
    idProduct: number;

    /**
     * Device release number in binary-coded decimal.
     */
    bcdDevice: number;

    /**
     * Index of string descriptor describing manufacturer.
     */
    iManufacturer: number;

    /**
     * Index of string descriptor describing product.
     */
    iProduct: number;

    /**
     * Index of string descriptor containing device serial number.
     */
    iSerialNumber: number;

    /**
     * Number of possible configurations.
     */
    bNumConfigurations: number;
  }

  /**
   * A structure representing the standard USB configuration descriptor
   */
  declare export class ConfigDescriptor {
    /**
     * Size of this descriptor (in bytes)
     */
    bLength: number;

    /**
     * Descriptor type.
     */
    bDescriptorType: number;

    /**
     * Total length of data returned for this configuration.
     */
    wTotalLength: number;

    /**
     * Number of interfaces supported by this configuration.
     */
    bNumInterfaces: number;

    /**
     * Identifier value for this configuration.
     */
    bConfigurationValue: number;

    /**
     * Index of string descriptor describing this configuration.
     */
    iConfiguration: number;

    /**
     * Configuration characteristics.
     */
    bmAttributes: number;

    /**
     * Maximum power consumption of the USB device from this bus in this configuration when the device is fully operation.
     */
    bMaxPower: number;

    /**
     * Extra descriptors.
     */
    extra: Buffer;

    /**
     * Array of interfaces supported by this configuration.
     */
    interfaces: InterfaceDescriptor[][];
  }

  /**
   * A structure representing the Binary Device Object Store (BOS) descriptor
   */
  declare export class BosDescriptor {
    /**
     * Size of this descriptor (in bytes)
     */
    bLength: number;

    /**
     * Descriptor type.
     */
    bDescriptorType: number;

    /**
     * Length of this descriptor and all of its sub descriptors.
     */
    wTotalLength: number;

    /**
     * The number of separate device capability descriptors in the BOS.
     */
    bNumDeviceCaps: number;

    /**
     * Device Capability Descriptors
     */
    capabilities: CapabilityDescriptor[];
  }

  /**
   * A generic representation of a BOS Device Capability descriptor
   */
  declare export class CapabilityDescriptor {
    /**
     * Size of this descriptor (in bytes)
     */
    bLength: number;

    /**
     * Descriptor type.
     */
    bDescriptorType: number;

    /**
     * Device Capability type.
     */
    bDevCapabilityType: number;

    /**
     * Device Capability data (bLength - 3 bytes)
     */
    dev_capability_data: Buffer;
  }
  declare export class Capability {
    /**
     * Object with fields from the capability descriptor -- see libusb documentation or USB spec.
     */
    descriptor: CapabilityDescriptor;

    /**
     * Integer capability type.
     */
    type: number;

    /**
     * Buffer capability data.
     */
    data: Buffer;
  }
  declare export class Interface {
    /**
     * Integer interface number.
     */
    interfaceNumber: number;

    /**
     * Integer alternate setting number.
     */
    altSetting: number;

    /**
     * Object with fields from the interface descriptor -- see libusb documentation or USB spec.
     */
    descriptor: InterfaceDescriptor;

    /**
     * List of endpoints on this interface: InEndpoint and OutEndpoint objects.
     */
    endpoints: Endpoint[];
    constructor(device: Device, id: number): this;

    /**
     * Claims the interface. This method must be called before using any endpoints of this interface.
     *
     * The device must be open to use this method.
     */
    claim(): void;

    /**
     * Releases the interface and resets the alternate setting. Calls callback when complete.
     *
     * It is an error to release an interface with pending transfers.
     *
     * The device must be open to use this method.
     * @param cb
     */
    release(cb?: (err?: string) => void): void;

    /**
     * Releases the interface and resets the alternate setting. Calls callback when complete.
     *
     * It is an error to release an interface with pending transfers. If the optional closeEndpoints
     * parameter is true, any active endpoint streams are stopped (see `Endpoint.stopStream`),
     * and the interface is released after the stream transfers are cancelled. Transfers submitted
     * individually with `Endpoint.transfer` are not affected by this parameter.
     *
     * The device must be open to use this method.
     * @param closeEndpoints
     * @param cb
     */
    release(closeEndpoints?: boolean, cb?: (err?: string) => void): void;

    /**
     * Returns `false` if a kernel driver is not active; `true` if active.
     *
     * The device must be open to use this method.
     */
    isKernelDriverActive(): boolean;

    /**
     * Detaches the kernel driver from the interface.
     *
     * The device must be open to use this method.
     */
    detachKernelDriver(): number;

    /**
     * Re-attaches the kernel driver for the interface.
     *
     * The device must be open to use this method.
     */
    attachKernelDriver(): number;

    /**
     * Sets the alternate setting. It updates the `interface.endpoints` array to reflect the endpoints found in the alternate setting.
     *
     * The device must be open to use this method.
     * @param altSetting
     * @param cb
     */
    setAltSetting(altSetting: number, cb: (err?: string) => void): void;

    /**
     * Return the InEndpoint or OutEndpoint with the specified address.
     *
     * The device must be open to use this method.
     * @param addr
     */
    endpoint(addr: number): Endpoint;
  }

  /**
   * A structure representing the standard USB interface descriptor
   */
  declare export class InterfaceDescriptor {
    /**
     * Size of this descriptor (in bytes)
     */
    bLength: number;

    /**
     * Descriptor type.
     */
    bDescriptorType: number;

    /**
     * Number of this interface.
     */
    bInterfaceNumber: number;

    /**
     * Value used to select this alternate setting for this interface.
     */
    bAlternateSetting: number;

    /**
     * Number of endpoints used by this interface (excluding the control endpoint).
     */
    bNumEndpoints: number;

    /**
     * USB-IF class code for this interface.
     */
    bInterfaceClass: number;

    /**
     * USB-IF subclass code for this interface, qualified by the bInterfaceClass value.
     */
    bInterfaceSubClass: number;

    /**
     * USB-IF protocol code for this interface, qualified by the bInterfaceClass and bInterfaceSubClass values.
     */
    bInterfaceProtocol: number;

    /**
     * Index of string descriptor describing this interface.
     */
    iInterface: number;

    /**
     * Extra descriptors.
     */
    extra: Buffer;

    /**
     * Array of endpoint descriptors.
     */
    endpoints: EndpointDescriptor[];
  }

  /**
   * Common base for InEndpoint and OutEndpoint.
   */
  declare export type Endpoint = {
    /**
     * Endpoint direction: `"in"` or `"out"`.
     */
    direction: string,

    /**
     * Endpoint type: `usb.LIBUSB_TRANSFER_TYPE_BULK`, `usb.LIBUSB_TRANSFER_TYPE_INTERRUPT`, or `usb.LIBUSB_TRANSFER_TYPE_ISOCHRONOUS`.
     */
    transferType: number,

    /**
     * Sets the timeout in milliseconds for transfers on this endpoint. The default, `0`, is infinite timeout.
     */
    timeout: number,

    /**
     * Object with fields from the endpoint descriptor -- see libusb documentation or USB spec.
     */
    descriptor: EndpointDescriptor
  } & EventEmitter;

  /**
   * Endpoints in the IN direction (device->PC) have this type.
   */
  declare export class InEndpoint mixins EventEmitter, Endpoint {
    direction: string;
    transferType: number;
    timeout: number;
    descriptor: EndpointDescriptor;
    constructor(device: Device, descriptor: EndpointDescriptor): this;

    /**
     * Perform a transfer to read data from the endpoint.
     *
     * If length is greater than maxPacketSize, libusb will automatically split the transfer in multiple packets, and you will receive one callback with all data once all packets are complete.
     *
     * `this` in the callback is the InEndpoint object.
     *
     * The device must be open to use this method.
     * @param length
     * @param callback
     */
    transfer(
      length: number,
      callback: (error: LibUSBException, data: Buffer) => void
    ): InEndpoint;

    /**
     * Start polling the endpoint.
     *
     * The library will keep `nTransfers` transfers of size `transferSize` pending in the kernel at all times to ensure continuous data flow.
     * This is handled by the libusb event thread, so it continues even if the Node v8 thread is busy. The `data` and `error` events are emitted as transfers complete.
     *
     * The device must be open to use this method.
     * @param nTransfers
     * @param transferSize
     */
    startPoll(nTransfers?: number, transferSize?: number): void;

    /**
     * Stop polling.
     *
     * Further data may still be received. The `end` event is emitted and the callback is called once all transfers have completed or canceled.
     *
     * The device must be open to use this method.
     * @param cb
     */
    stopPoll(cb?: () => void): void;
  }

  /**
   * Endpoints in the OUT direction (PC->device) have this type.
   */
  declare export class OutEndpoint mixins EventEmitter, Endpoint {
    direction: string;
    transferType: number;
    timeout: number;
    descriptor: EndpointDescriptor;
    constructor(device: Device, descriptor: EndpointDescriptor): this;

    /**
     * Perform a transfer to write `data` to the endpoint.
     *
     * If length is greater than maxPacketSize, libusb will automatically split the transfer in multiple packets, and you will receive one callback once all packets are complete.
     *
     * `this` in the callback is the OutEndpoint object.
     *
     * The device must be open to use this method.
     * @param buffer
     * @param cb
     */
    transfer(buffer: Buffer, cb: (err?: LibUSBException) => void): OutEndpoint;
    transferWithZLP(buf: Buffer, cb: (err?: LibUSBException) => void): void;
  }

  /**
   * A structure representing the standard USB endpoint descriptor
   */
  declare export class EndpointDescriptor {
    /**
     * Size of this descriptor (in bytes)
     */
    bLength: number;

    /**
     * Descriptor type.
     */
    bDescriptorType: number;

    /**
     * The address of the endpoint described by this descriptor.
     */
    bEndpointAddress: number;

    /**
     * Attributes which apply to the endpoint when it is configured using the bConfigurationValue.
     */
    bmAttributes: number;

    /**
     * Maximum packet size this endpoint is capable of sending/receiving.
     */
    wMaxPacketSize: number;

    /**
     * Interval for polling endpoint for data transfers.
     */
    bInterval: number;

    /**
     * For audio devices only: the rate at which synchronization feedback is provided.
     */
    bRefresh: number;

    /**
     * For audio devices only: the address if the synch endpoint.
     */
    bSynchAddress: number;

    /**
     * Extra descriptors.
     *
     * If libusb encounters unknown endpoint descriptors, it will store them here, should you wish to parse them.
     */
    extra: Buffer;
  }

  /**
   * Convenience method to get the first device with the specified VID and PID, or `undefined` if no such device is present.
   * @param vid
   * @param pid
   */
  declare export function findByIds(vid: number, pid: number): Device;

  /**
   * Adds a callback to an event handler.
   * @param event The event to add to
   * @param callback The callback to add
   */
  declare export function on(
    event: string,
    callback: (device: Device) => void
  ): void;

  /**
   * Removes a callback from an event handler
   * @param event The event to remove from
   * @param callback The callback to remove
   */
  declare export function removeListener(
    event: string,
    callback: (device: Device) => void
  ): void;

  /**
   * Return a list of `Device` objects for the USB devices attached to the system.
   */
  declare export function getDeviceList(): Device[];

  /**
   * Set the libusb debug level (between 0 and 4)
   * @param level libusb debug level (between 0 and 4)
   */
  declare export function setDebugLevel(level: number): void;

  /**
   * In the context of a \ref libusb_device_descriptor "device descriptor",
   * this bDeviceClass value indicates that each interface specifies its
   * own class information and all interfaces operate independently.
   */
  declare export var LIBUSB_CLASS_PER_INTERFACE: number;

  /**
   * Audio class
   */
  declare export var LIBUSB_CLASS_AUDIO: number;

  /**
   * Communications class
   */
  declare export var LIBUSB_CLASS_COMM: number;

  /**
   * Human Interface Device class
   */
  declare export var LIBUSB_CLASS_HID: number;

  /**
   * Printer class
   */
  declare export var LIBUSB_CLASS_PRINTER: number;

  /**
   * Image class
   */
  declare export var LIBUSB_CLASS_PTP: number;

  /**
   * Mass storage class
   */
  declare export var LIBUSB_CLASS_MASS_STORAGE: number;

  /**
   * Hub class
   */
  declare export var LIBUSB_CLASS_HUB: number;

  /**
   * Data class
   */
  declare export var LIBUSB_CLASS_DATA: number;

  /**
   * Wireless class
   */
  declare export var LIBUSB_CLASS_WIRELESS: number;

  /**
   * Application class
   */
  declare export var LIBUSB_CLASS_APPLICATION: number;

  /**
   * Class is vendor-specific
   */
  declare export var LIBUSB_CLASS_VENDOR_SPEC: number;

  /**
   * Request status of the specific recipient
   */
  declare export var LIBUSB_REQUEST_GET_STATUS: number;

  /**
   * Clear or disable a specific feature
   */
  declare export var LIBUSB_REQUEST_CLEAR_FEATURE: number;

  /**
   * Set or enable a specific feature
   */
  declare export var LIBUSB_REQUEST_SET_FEATURE: number;

  /**
   * Set device address for all future accesses
   */
  declare export var LIBUSB_REQUEST_SET_ADDRESS: number;

  /**
   * Get the specified descriptor
   */
  declare export var LIBUSB_REQUEST_GET_DESCRIPTOR: number;

  /**
   * Used to update existing descriptors or add new descriptors
   */
  declare export var LIBUSB_REQUEST_SET_DESCRIPTOR: number;

  /**
   * Get the current device configuration value
   */
  declare export var LIBUSB_REQUEST_GET_CONFIGURATION: number;

  /**
   * Set device configuration
   */
  declare export var LIBUSB_REQUEST_SET_CONFIGURATION: number;

  /**
   * Return the selected alternate setting for the specified interface
   */
  declare export var LIBUSB_REQUEST_GET_INTERFACE: number;

  /**
   * Select an alternate interface for the specified interface
   */
  declare export var LIBUSB_REQUEST_SET_INTERFACE: number;

  /**
   * Set then report an endpoint's synchronization frame
   */
  declare export var LIBUSB_REQUEST_SYNCH_FRAME: number;

  /**
   * Device descriptor. See libusb_device_descriptor.
   */
  declare export var LIBUSB_DT_DEVICE: number;

  /**
   * Configuration descriptor. See libusb_config_descriptor.
   */
  declare export var LIBUSB_DT_CONFIG: number;

  /**
   * String descriptor
   */
  declare export var LIBUSB_DT_STRING: number;

  /**
   * Interface descriptor. See libusb_interface_descriptor.
   */
  declare export var LIBUSB_DT_INTERFACE: number;

  /**
   * Endpoint descriptor. See libusb_endpoint_descriptor.
   */
  declare export var LIBUSB_DT_ENDPOINT: number;

  /**
   * HID descriptor
   */
  declare export var LIBUSB_DT_HID: number;

  /**
   * HID report descriptor
   */
  declare export var LIBUSB_DT_REPORT: number;

  /**
   * Physical descriptor
   */
  declare export var LIBUSB_DT_PHYSICAL: number;

  /**
   * Hub descriptor
   */
  declare export var LIBUSB_DT_HUB: number;

  /**
   * In: device-to-host
   */
  declare export var LIBUSB_ENDPOINT_IN: number;

  /**
   * Out: host-to-device
   */
  declare export var LIBUSB_ENDPOINT_OUT: number;

  /**
   * Control endpoint
   */
  declare export var LIBUSB_TRANSFER_TYPE_CONTROL: number;

  /**
   * Isochronous endpoint
   */
  declare export var LIBUSB_TRANSFER_TYPE_ISOCHRONOUS: number;

  /**
   * Bulk endpoint
   */
  declare export var LIBUSB_TRANSFER_TYPE_BULK: number;

  /**
   * Interrupt endpoint
   */
  declare export var LIBUSB_TRANSFER_TYPE_INTERRUPT: number;

  /**
   * No synchronization
   */
  declare export var LIBUSB_ISO_SYNC_TYPE_NONE: number;

  /**
   * Asynchronous
   */
  declare export var LIBUSB_ISO_SYNC_TYPE_ASYNC: number;

  /**
   * Adaptive
   */
  declare export var LIBUSB_ISO_SYNC_TYPE_ADAPTIVE: number;

  /**
   * Synchronous
   */
  declare export var LIBUSB_ISO_SYNC_TYPE_SYNC: number;

  /**
   * Data endpoint
   */
  declare export var LIBUSB_ISO_USAGE_TYPE_DATA: number;

  /**
   * Feedback endpoint
   */
  declare export var LIBUSB_ISO_USAGE_TYPE_FEEDBACK: number;

  /**
   * Implicit feedback Data endpoint
   */
  declare export var LIBUSB_ISO_USAGE_TYPE_IMPLICIT: number;

  /**
   * Transfer completed without error. Note that this does not indicate
   * that the entire amount of requested data was transferred.
   */
  declare export var LIBUSB_TRANSFER_COMPLETED: number;

  /**
   * Transfer failed
   */
  declare export var LIBUSB_TRANSFER_ERROR: number;

  /**
   * Transfer timed out
   */
  declare export var LIBUSB_TRANSFER_TIMED_OUT: number;

  /**
   * Transfer was cancelled
   */
  declare export var LIBUSB_TRANSFER_CANCELLED: number;

  /**
   * For bulk/interrupt endpoints: halt condition detected (endpoint
   * stalled). For control endpoints: control request not supported.
   */
  declare export var LIBUSB_TRANSFER_STALL: number;

  /**
   * Device was disconnected
   */
  declare export var LIBUSB_TRANSFER_NO_DEVICE: number;

  /**
   * Device sent more data than requested
   */
  declare export var LIBUSB_TRANSFER_OVERFLOW: number;

  /**
   * Report short frames as errors
   */
  declare export var LIBUSB_TRANSFER_SHORT_NOT_OK: number;

  /**
   * Automatically free() transfer buffer during libusb_free_transfer().
   * Note that buffers allocated with libusb_dev_mem_alloc() should not
   * be attempted freed in this way, since free() is not an appropriate
   * way to release such memory.
   */
  declare export var LIBUSB_TRANSFER_FREE_BUFFER: number;

  /**
   * Automatically call libusb_free_transfer() after callback returns.
   * If this flag is set, it is illegal to call libusb_free_transfer()
   * from your transfer callback, as this will result in a double-free
   * when this flag is acted upon.
   */
  declare export var LIBUSB_TRANSFER_FREE_TRANSFER: number;

  /**
   * Standard
   */
  declare export var LIBUSB_REQUEST_TYPE_STANDARD: number;

  /**
   * Class
   */
  declare export var LIBUSB_REQUEST_TYPE_CLASS: number;

  /**
   * Vendor
   */
  declare export var LIBUSB_REQUEST_TYPE_VENDOR: number;

  /**
   * Reserved
   */
  declare export var LIBUSB_REQUEST_TYPE_RESERVED: number;

  /**
   * Device
   */
  declare export var LIBUSB_RECIPIENT_DEVICE: number;

  /**
   * Interface
   */
  declare export var LIBUSB_RECIPIENT_INTERFACE: number;

  /**
   * Endpoint
   */
  declare export var LIBUSB_RECIPIENT_ENDPOINT: number;

  /**
   * Other
   */
  declare export var LIBUSB_RECIPIENT_OTHER: number;
  declare export var LIBUSB_CONTROL_SETUP_SIZE: number;

  /**
   * Input/output error
   */
  declare export var LIBUSB_ERROR_IO: number;

  /**
   * Invalid parameter
   */
  declare export var LIBUSB_ERROR_INVALID_PARAM: number;

  /**
   * Access denied (insufficient permissions)
   */
  declare export var LIBUSB_ERROR_ACCESS: number;

  /**
   * No such device (it may have been disconnected)
   */
  declare export var LIBUSB_ERROR_NO_DEVICE: number;

  /**
   * Entity not found
   */
  declare export var LIBUSB_ERROR_NOT_FOUND: number;

  /**
   * Resource busy
   */
  declare export var LIBUSB_ERROR_BUSY: number;

  /**
   * Operation timed out
   */
  declare export var LIBUSB_ERROR_TIMEOUT: number;

  /**
   * Overflow
   */
  declare export var LIBUSB_ERROR_OVERFLOW: number;

  /**
   * Pipe error
   */
  declare export var LIBUSB_ERROR_PIPE: number;

  /**
   * System call interrupted (perhaps due to signal)
   */
  declare export var LIBUSB_ERROR_INTERRUPTED: number;

  /**
   * Insufficient memory
   */
  declare export var LIBUSB_ERROR_NO_MEM: number;

  /**
   * Operation not supported or unimplemented on this platform
   */
  declare export var LIBUSB_ERROR_NOT_SUPPORTED: number;

  /**
   * Other error
   */
  declare export var LIBUSB_ERROR_OTHER: number;
}
