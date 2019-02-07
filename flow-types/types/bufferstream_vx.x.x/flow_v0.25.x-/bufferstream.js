declare module "bufferstream" {
  declare module.exports: typeof BufferStream;

  declare class BufferStream mixins stream.Duplex {
    constructor(options?: BufferStream$BufferStream$Opts): this;
    setSize(size: string | number): void;
    enable(): void;
    disable(tokens?: string[] | Buffer[]): void;
    disable(token: string, ...tokens: string[]): void;
    disable(token: Buffer, ...tokens: Buffer[]): void;
    split(tokens: string[] | Buffer[]): void;
    split(token: string, ...tokens: string[]): void;
    split(token: Buffer, ...tokens: Buffer[]): void;
    getBuffer(): Buffer;
    buffer: Buffer;
    toString(): string;
    length: number;
  }

  declare var npm$namespace$BufferStream: {
    fn: typeof BufferStream$fn
  };
  declare interface BufferStream$Opts {
    encoding?: string;
    blocking?: boolean;
    size?: any;
    disabled?: boolean;
    split?: any;
  }

  declare var BufferStream$fn: {
    warn: boolean
  };
}
