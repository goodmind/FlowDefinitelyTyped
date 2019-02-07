declare module "@ledgerhq/hw-transport" {
  declare class Transport<TDescriptor: Descriptor = string> {
    constructor(): this;
    static isSupported(): Promise<boolean>;
    static list(): Promise<$ReadOnlyArray<Descriptor>>;
    static listen(
      observer: Observer<DescriptorEvent<Descriptor>>
    ): Subscription;
    static open(
      descriptor: Descriptor,
      timeout?: number
    ): Promise<Transport<typeof descriptor>>;
    static create(
      openTimeout?: number,
      listenTimeout?: number
    ): Promise<Transport<Descriptor>>;
    exchange(apdu: Buffer): Promise<Buffer>;
    setScrambleKey(key: string): void;
    close(): Promise<void>;
    on(eventName: string, cb: any): void;
    off(eventName: string, cb: any): void;
    setDebugMode(debug: boolean | ((log: string) => void)): void;
    setExchangeTimeout(exchangeTimeout: number): void;
    send(
      cla: number,
      ins: number,
      p1: number,
      p2: number,
      data: Buffer,
      statusList: $ReadOnlyArray<number>
    ): Promise<Buffer>;
  }
  declare export type Device = any;
  declare export type Descriptor = string;
  declare export interface DescriptorEvent<Descriptor> {
    type: "add" | "remove";
    descriptor: Descriptor;
    device?: Device;
  }
  declare export interface Observer<Ev> {
    +next: (event: Ev) => any;
    +error: (e: any) => any;
    +complete: () => any;
  }
  declare export interface Subscription {
    +unsubscribe: () => void;
  }
  declare export function getAltStatusMessage(code: number): string;

  declare export var StatusCodes: $ObjMapi<
    { [k: string]: any },
    <k>(k) => number
  >;
  declare export default typeof Transport;
}
