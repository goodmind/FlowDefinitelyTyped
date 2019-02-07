declare module "w3c-web-usb" {
  declare type USBDirection = "in" | "out";
  declare type USBEndpointType = "bulk" | "interrupt" | "isochronous";
  declare type USBRequestType = "standard" | "class" | "vendor";
  declare type USBRecipient = "device" | "interface" | "endpoint" | "other";
  declare type USBTransferStatus = "ok" | "stall" | "babble";
  declare interface USBEndpoint {
    +endpointNumber: number;
    +direction: USBDirection;
    +type: USBEndpointType;
    +packetSize: number;
  }
  declare interface USBControlTransferParameters {
    requestType: USBRequestType;
    recipient: USBRecipient;
    request: number;
    value: number;
    index: number;
  }
  declare interface USBDeviceFilter {
    vendorId?: number;
    productId?: number;
    classCode?: number;
    subclassCode?: number;
    protocolCode?: number;
    serialNumber?: string;
  }
  declare interface USBDeviceRequestOptions {
    filters: USBDeviceFilter[];
  }
  declare type USBConnectionEventInit = {
    device: USBDevice
  } & EventInit;

  declare class USBConfiguration {
    configurationValue: number;
    configurationName: string;
    interfaces: USBInterface[];
  }
  declare class USBInterface {
    constructor(configuration: USBConfiguration, interfaceNumber: number): this;
    interfaceNumber: number;
    alternate: USBAlternateInterface;
    alternates: USBAlternateInterface[];
    claimed: boolean;
  }
  declare class USBAlternateInterface {
    constructor(deviceInterface: USBInterface, alternateSetting: number): this;
    alternateSetting: number;
    interfaceClass: number;
    interfaceSubclass: number;
    interfaceProtocol: number;
    interfaceName: string;
    endpoints: USBEndpoint[];
  }
  declare class USBInTransferResult {
    constructor(status: USBTransferStatus, data?: DataView): this;
    data: DataView;
    status: USBTransferStatus;
  }
  declare class USBOutTransferResult {
    constructor(status: USBTransferStatus, bytesWriten?: number): this;
    bytesWritten: number;
    status: USBTransferStatus;
  }
  declare class USBIsochronousInTransferPacket {
    constructor(status: USBTransferStatus, data?: DataView): this;
    data: DataView;
    status: USBTransferStatus;
  }
  declare class USBIsochronousInTransferResult {
    constructor(
      packets: USBIsochronousInTransferPacket[],
      data?: DataView
    ): this;
    data: DataView;
    packets: USBIsochronousInTransferPacket[];
  }
  declare class USBIsochronousOutTransferPacket {
    constructor(status: USBTransferStatus, bytesWritten?: number): this;
    bytesWritten: number;
    status: USBTransferStatus;
  }
  declare class USBConnectionEvent mixins Event {
    constructor(type: string, eventInitDict: USBConnectionEventInit): this;
    device: USBDevice;
  }
  declare class USBIsochronousOutTransferResult {
    constructor(packets: USBIsochronousOutTransferPacket[]): this;
    packets: USBIsochronousOutTransferPacket[];
  }
  declare class USB mixins EventTarget {
    onconnect(): (ev: Event) => any;
    ondisconnect(): (ev: Event) => any;
    getDevices(): Promise<USBDevice[]>;
    requestDevice(options?: USBDeviceRequestOptions): Promise<USBDevice>;
    addEventListener(
      type: "connect" | "disconnect",
      listener: (ev: USBConnectionEvent) => any,
      useCapture?: boolean
    ): void;
  }
  declare class USBDevice {
    usbVersionMajor: number;
    usbVersionMinor: number;
    usbVersionSubminor: number;
    deviceClass: number;
    deviceSubclass: number;
    deviceProtocol: number;
    vendorId: number;
    productId: number;
    deviceVersionMajor: number;
    deviceVersionMinor: number;
    deviceVersionSubminor: number;
    manufacturerName: string;
    productName: string;
    serialNumber: string;
    configuration: USBConfiguration;
    configurations: USBConfiguration[];
    opened: boolean;
    open(): Promise<void>;
    close(): Promise<void>;
    selectConfiguration(configurationValue: number): Promise<void>;
    claimInterface(interfaceNumber: number): Promise<void>;
    releaseInterface(interfaceNumber: number): Promise<void>;
    selectAlternateInterface(
      interfaceNumber: number,
      alternateSetting: number
    ): Promise<void>;
    controlTransferIn(
      setup: USBControlTransferParameters,
      length: number
    ): Promise<USBInTransferResult>;
    controlTransferOut(
      setup: USBControlTransferParameters,
      data?: BufferSource
    ): Promise<USBOutTransferResult>;
    clearHalt(direction: USBDirection, endpointNumber: number): Promise<void>;
    transferIn(
      endpointNumber: number,
      length: number
    ): Promise<USBInTransferResult>;
    transferOut(
      endpointNumber: number,
      data: BufferSource
    ): Promise<USBOutTransferResult>;
    isochronousTransferIn(
      endpointNumber: number,
      packetLengths: number[]
    ): Promise<USBIsochronousInTransferResult>;
    isochronousTransferOut(
      endpointNumber: number,
      data: BufferSource,
      packetLengths: number[]
    ): Promise<USBIsochronousOutTransferResult>;
    reset(): Promise<void>;
  }
  declare interface Navigator {
    +usb: USB;
  }
}
