declare module "tunnel-ssh" {
  import type { Server } from "net";

  declare export default typeof tunnel;

  declare function tunnel(
    config?: tunnel$Config,
    cb?: (error: Error, server: Server) => void
  ): Server;

  declare var tunnel: typeof npm$namespace$tunnel;

  declare var npm$namespace$tunnel: {
    ReadableStream: typeof tunnel$ReadableStream
  };
  declare var ReadableStream: typeof NodeJS.ReadableStream;

  declare interface tunnel$Config {
    dstHost?: string;
    dstPort?: number;
    localHost?: string;
    keepAlive?: boolean;
    host?: string;
    port?: number;
    localAddress?: string;
    localPort?: number;
    forceIPv4?: boolean;
    forceIPv6?: boolean;
    hostHast?: string;
    hostVerifier?: (
      hashedKey: string,
      ...cb: Array<(doContinue: boolean) => void>
    ) => boolean;
    username?: string;
    password?: string;
    agent?: string;
    agentForward?: boolean;
    privateKey?: Buffer | string;
    passphrase?: string;
    localHostname?: string;
    localUsername?: string;
    tryKeyboard?: boolean;
    authHandler?: (
      methodsLeft: null | string[],
      partialSuccess: null | boolean,
      cb: (nextMethod: string) => void
    ) => string;
    keepaliveInterval?: number;
    keepaliveCountMax?: number;
    readyTimeout?: number;
    sock?: tunnel$ReadableStream;
    strictVendor?: boolean;
    algorithms?: {
      key?: string[],
      cipher?: string[],
      serverHostKey?: string[],
      hmac?: string[],
      compress?: string[]
    };
    compress?: "force" | boolean;
    debug?: (info: string) => void;
  }
}
