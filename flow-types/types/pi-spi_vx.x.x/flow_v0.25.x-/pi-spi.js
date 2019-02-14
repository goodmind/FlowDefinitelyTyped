declare module "pi-spi" {
  declare export default typeof __PI_SPI;

  declare var npm$namespace$__PI_SPI: {
    initialize: typeof __PI_SPI$initialize,

    mode: typeof __PI_SPI$mode,
    order: typeof __PI_SPI$order,
    SPI: typeof __PI_SPI$SPI
  };

  declare var __PI_SPI$mode: {|
    +CPHA: 1, // 1
    +CPOL: 2 // 2
  |};

  declare var __PI_SPI$order: {|
    +MSB_FIRST: 0, // 0
    +LSB_FIRST: 1 // 1
  |};

  declare function __PI_SPI$initialize(device: string): __PI_SPI$SPI;

  declare class __PI_SPI$SPI {
    clockSpeed(): number;
    clockSpeed(speed: number): void;
    dataMode(): number;
    dataMode(mode: __PI_SPI$mode): void;
    bitOrder(): number;
    bitOrder(order: __PI_SPI$order): void;
    write(writebuf: Buffer, cb: (error: Error, data: Buffer) => void): void;
    read(readcount: number, cb: (error: Error, data: Buffer) => void): void;
    transfer(writebuf: Buffer, cb: (error: Error, data: Buffer) => void): void;
    transfer(
      writebuf: Buffer,
      readcount: number,
      cb: (error: Error, data: Buffer) => void
    ): void;
    close(): void;
  }
}
