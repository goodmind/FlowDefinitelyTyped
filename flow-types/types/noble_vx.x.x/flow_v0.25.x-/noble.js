declare module "noble" {
  declare export function startScanning(
    callback?: (error?: Error) => void
  ): void;

  declare export function startScanning(
    serviceUUIDs: string[],
    callback?: (error?: Error) => void
  ): void;

  declare export function startScanning(
    serviceUUIDs: string[],
    allowDuplicates: boolean,
    callback?: (error?: Error) => void
  ): void;

  declare export function stopScanning(callback?: () => void): void;

  declare export function on(
    event: "stateChange",
    listener: (state: string) => void
  ): events.EventEmitter;

  declare export function on(
    event: "scanStart",
    listener: () => void
  ): events.EventEmitter;

  declare export function on(
    event: "scanStop",
    listener: () => void
  ): events.EventEmitter;

  declare export function on(
    event: "discover",
    listener: (peripheral: Peripheral) => void
  ): events.EventEmitter;

  declare export function on(
    event: string,
    listener: Function
  ): events.EventEmitter;

  declare export function removeListener(
    event: "stateChange",
    listener: (state: string) => void
  ): events.EventEmitter;

  declare export function removeListener(
    event: "scanStart",
    listener: () => void
  ): events.EventEmitter;

  declare export function removeListener(
    event: "scanStop",
    listener: () => void
  ): events.EventEmitter;

  declare export function removeListener(
    event: "discover",
    listener: (peripheral: Peripheral) => void
  ): events.EventEmitter;

  declare export function removeListener(
    event: string,
    listener: Function
  ): events.EventEmitter;

  declare export function removeAllListeners(
    event?: string
  ): events.EventEmitter;

  declare export var state: string;
  declare export class Peripheral mixins events.EventEmitter {
    id: string;
    uuid: string;
    address: string;
    addressType: string;
    connectable: boolean;
    advertisement: Advertisement;
    rssi: number;
    services: Service[];
    state:
      | "error"
      | "connecting"
      | "connected"
      | "disconnecting"
      | "disconnected";
    connect(callback?: (error: string) => void): void;
    disconnect(callback?: () => void): void;
    updateRssi(callback?: (error: string, rssi: number) => void): void;
    discoverServices(
      serviceUUIDs: string[],
      callback?: (error: string, services: Service[]) => void
    ): void;
    discoverAllServicesAndCharacteristics(
      callback?: (
        error: string,
        services: Service[],
        characteristics: Characteristic[]
      ) => void
    ): void;
    discoverSomeServicesAndCharacteristics(
      serviceUUIDs: string[],
      characteristicUUIDs: string[],
      callback?: (
        error: string,
        services: Service[],
        characteristics: Characteristic[]
      ) => void
    ): void;
    readHandle(
      handle: Buffer,
      callback: (error: string, data: Buffer) => void
    ): void;
    writeHandle(
      handle: Buffer,
      data: Buffer,
      withoutResponse: boolean,
      callback: (error: string) => void
    ): void;
    toString(): string;
    on(event: "connect", listener: (error: string) => void): this;
    on(event: "disconnect", listener: (error: string) => void): this;
    on(event: "rssiUpdate", listener: (rssi: number) => void): this;
    on(
      event: "servicesDiscover",
      listener: (services: Service[]) => void
    ): this;
    on(event: string, listener: Function): this;
  }
  declare export interface Advertisement {
    localName: string;
    serviceData: {
      uuid: string,
      data: Buffer
    };
    txPowerLevel: number;
    manufacturerData: Buffer;
    serviceUuids: string[];
  }
  declare export class Service mixins events.EventEmitter {
    uuid: string;
    name: string;
    type: string;
    includedServiceUuids: string[];
    characteristics: Characteristic[];
    discoverIncludedServices(
      serviceUUIDs: string[],
      callback?: (error: string, includedServiceUuids: string[]) => void
    ): void;
    discoverCharacteristics(
      characteristicUUIDs: string[],
      callback?: (error: string, characteristics: Characteristic[]) => void
    ): void;
    toString(): string;
    on(
      event: "includedServicesDiscover",
      listener: (includedServiceUuids: string[]) => void
    ): this;
    on(
      event: "characteristicsDiscover",
      listener: (characteristics: Characteristic[]) => void
    ): this;
    on(event: string, listener: Function): this;
  }
  declare export class Characteristic mixins events.EventEmitter {
    uuid: string;
    name: string;
    type: string;
    properties: string[];
    descriptors: Descriptor[];
    read(callback?: (error: string, data: Buffer) => void): void;
    write(
      data: Buffer,
      notify: boolean,
      callback?: (error: string) => void
    ): void;
    broadcast(broadcast: boolean, callback?: (error: string) => void): void;
    notify(notify: boolean, callback?: (error: string) => void): void;
    discoverDescriptors(
      callback?: (error: string, descriptors: Descriptor[]) => void
    ): void;
    toString(): string;
    subscribe(callback?: (error: string) => void): void;
    unsubscribe(callback?: (error: string) => void): void;
    on(
      event: "read",
      listener: (data: Buffer, isNotification: boolean) => void
    ): this;
    on(
      event: "write",
      withoutResponse: boolean,
      listener: (error: string) => void
    ): this;
    on(event: "broadcast", listener: (state: string) => void): this;
    on(event: "notify", listener: (state: string) => void): this;
    on(
      event: "descriptorsDiscover",
      listener: (descriptors: Descriptor[]) => void
    ): this;
    on(event: string, listener: Function): this;
    on(event: string, option: boolean, listener: Function): this;
  }
  declare export class Descriptor mixins events.EventEmitter {
    uuid: string;
    name: string;
    type: string;
    readValue(callback?: (error: string, data: Buffer) => void): void;
    writeValue(data: Buffer, callback?: (error: string) => void): void;
    toString(): string;
    on(
      event: "valueRead",
      listener: (error: string, data: Buffer) => void
    ): this;
    on(event: "valueWrite", listener: (error: string) => void): this;
    on(event: string, listener: Function): this;
  }
}
