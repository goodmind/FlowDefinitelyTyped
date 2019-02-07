declare module "parity-pmd" {
  /**
   * Declares Parity PMD message structure
   * Full reference can be found here https://github.com/paritytrading/parity/blob/master/libraries/net/doc/PMD.md
   */
  declare export interface PMDMessage {
    messageType: string;
    version?: string;
    timestamp?: number;
    orderNumber?: number;
    side?: string;
    instrument?: string;
    quantity?: number;
    price?: number;
  }
  declare export function format(message: PMDMessage): Buffer;

  declare export function parse(buffer: Buffer): PMDMessage;
}
