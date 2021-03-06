declare module "wake_on_lan" {
  declare var wol: wol$wol$Wol;
  declare module.exports: typeof wol;

  declare export interface wol$WakeOptions {
    /**
     * The ip address to which the packet is send  (default: 255.255.255.255)
     */
    address?: string;

    /**
     * Number of packets to send (default: 3)
     */
    num_packets?: number;

    /**
     * The interval between packets (default: 100ms)
     */
    interval?: number;

    /**
     * The port to send to (default: 9)
     */
    port?: number;
  }

  declare type wol$ErrorCallback = (Error: any) => void;

  declare export interface wol$Wol {
    /**
     * Send a sequence of Wake-on-LAN magic packets to the given MAC address.
     * @param {string} macAddress the mac address of the target device
     */
    wake(macAddress: string): void;

    /**
     * Send a sequence of Wake-on-LAN magic packets to the given MAC address.
     * @param {string} macAddress the mac address of the target device
     * @param {wol$ErrorCallback} callback is called when all packets have been sent or an error occurs.
     */
    wake(macAddress: string, callback: wol$ErrorCallback): void;

    /**
     * Send a sequence of Wake-on-LAN magic packets to the given MAC address.
     * @param {string} macAddress the mac address of the target device
     * @param {wol$WakeOptions} opts additional options to send the packet
     * @param {wol$ErrorCallback} callback is called when all packets have been sent or an error occurs.
     */
    wake(macAddress: string, opts: wol$WakeOptions, callback?: Function): void;

    /**
     * Creates a buffer with a magic packet for the given MAC address.
     * @param {string} macAddress mac address of the target device
     * @return {Buffer} the magic packet
     */
    createMagicPacket(macAddress: string): Buffer;
  }
}
