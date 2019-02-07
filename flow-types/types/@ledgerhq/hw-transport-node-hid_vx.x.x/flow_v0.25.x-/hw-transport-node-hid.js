declare module "@ledgerhq/hw-transport-node-hid" {
  import typeof Transport from "@ledgerhq/hw-transport";

  declare class TransportNodeHid mixins Transport {
    constructor(
      device: HID.HID,
      ledgerTransport?: boolean,
      timeout?: number
    ): this;
    static open(path: string): Promise<TransportNodeHid>;
    setScrambleKey(): void;
    device: HID.HID;
    ledgerTransport: boolean;
    timeout: number;
    exchangeStack: any[];
  }
  declare export default typeof TransportNodeHid;
}
