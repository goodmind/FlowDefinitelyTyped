declare module "amp-message" {
  declare class Message {
    constructor(args: Buffer | Buffer[]): this;
    inspect(): string;
    toBuffer(): Buffer;
    push(...items: Buffer[]): number;
    pop(): Buffer | void;
    shift(): Buffer | void;
    unshift(...items: Buffer[]): number;
  }
  declare module.exports: typeof Message;
}
