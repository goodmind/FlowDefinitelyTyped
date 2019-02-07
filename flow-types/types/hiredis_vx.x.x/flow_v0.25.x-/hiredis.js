declare module "hiredis" {
  import typeof * as net from "net";

  declare export interface Config {
    return_buffers: boolean;
  }
  declare export class Reader {
    constructor(config?: Config): this;
    feed(reply: string | Buffer): void;
    get(): string | Buffer;
  }
  declare export function createConnection(
    port: number,
    host: string
  ): net.Socket;
}
