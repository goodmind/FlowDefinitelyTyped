declare module "pi-spi" {
  declare module.exports: typeof __PI_SPI;

  declare var npm$namespace$__PI_SPI: {
    initialize: typeof __PI_SPI$initialize
  };
  declare class __PI_SPI$mode {
    constructor(...args: empty): mixed;
    static +CPHA: Class<__PI_SPI$mode__CPHA> & __PI_SPI$mode__CPHA & 1; // 1
    static +CPOL: Class<__PI_SPI$mode__CPOL> & __PI_SPI$mode__CPOL & 2; // 2
  }

  declare class __PI_SPI$mode__CPHA mixins __PI_SPI$mode {}
  declare class __PI_SPI$mode__CPOL mixins __PI_SPI$mode {}

  declare class __PI_SPI$order {
    constructor(...args: empty): mixed;
    static +MSB_FIRST: Class<__PI_SPI$order__MSB_FIRST> &
      __PI_SPI$order__MSB_FIRST &
      0; // 0
    static +LSB_FIRST: Class<__PI_SPI$order__LSB_FIRST> &
      __PI_SPI$order__LSB_FIRST &
      1; // 1
  }

  declare class __PI_SPI$order__MSB_FIRST mixins __PI_SPI$order {}
  declare class __PI_SPI$order__LSB_FIRST mixins __PI_SPI$order {}

  declare function __PI_SPI$initialize(device: string): __PI_SPI$__PI_SPI$SPI;

  declare class __PI_SPI$SPI {
    clockSpeed(): number;
    clockSpeed(speed: number): void;
    dataMode(): number;
    dataMode(__PI_SPI$mode: __PI_SPI$mode): void;
    bitOrder(): number;
    bitOrder(__PI_SPI$order: __PI_SPI$order): void;
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
