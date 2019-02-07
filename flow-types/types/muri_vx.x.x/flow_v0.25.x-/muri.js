declare module "muri" {
  declare module.exports: typeof Muri;

  declare function Muri(uri: string): Muri$Muri$ParsedUri;

  declare interface Muri$ParsedUri {
    db: string;
    hosts: Muri$Host[];
    options: any;
    auth?: {
      user: string,
      pass?: string
    };
  }

  declare interface Muri$DefaultHost {
    host: string;
    port: number;
  }

  declare interface Muri$SocketHost {
    ipc: string;
  }

  declare type Muri$Host = Muri$DefaultHost | Muri$SocketHost;
}
