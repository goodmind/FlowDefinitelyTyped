declare module "@ledgerhq/hw-transport-u2f" {
  import typeof Transport from "@ledgerhq/hw-transport";

  declare class TransportU2F mixins Transport {
    constructor(): this;
    static open(_: any, _openTimeout?: number): Promise<TransportU2F>;
  }
  declare export default typeof TransportU2F;
}
