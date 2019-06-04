declare module "stream-mock" {
  import type {
    Readable,
    ReadableOptions,
    WritableOptions,
    Writable,
    Duplex,
    DuplexOptions
  } from "stream";

  declare export class ReadableMock mixins Readable {
    constructor(source: $ReadOnlyArray<any>, opts?: ReadableOptions): this;
  }
  declare export class WritableMock mixins Writable {
    data: any;
    flatData: any;
  }
  declare export class DuplexMock mixins Duplex {
    data: any;
    flatData: any;
  }
}
