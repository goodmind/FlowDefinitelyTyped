declare module "webtorrent" {
  import type { WebTorrent$Instance as ParseTorrent } from "parse-torrent";

  import type { WebTorrent$Instance as SimplePeer } from "simple-peer";

  import type { RequestOptions, Server } from "http";

  import type { Wire } from "bittorrent-protocol";

  declare var WebTorrent$WebTorrent: WebTorrent$WebTorrent.WebTorrent$WebTorrent;
  declare interface WebTorrent$WebTorrent {
    new(config?: WebTorrent$Options): WebTorrent$Instance;
    (config?: WebTorrent$Options): WebTorrent$Instance;
    WEBRTC_SUPPORT: boolean;
  }

  declare interface WebTorrent$Options {
    maxConns?: number;
    nodeId?: string | Buffer;
    peerId?: string | Buffer;
    tracker?: boolean | {};
    dht?: boolean | {};
    webSeeds?: boolean;
  }

  declare interface WebTorrent$TorrentOptions {
    announce?: any[];
    getAnnounceOpts?: () => void;
    maxWebConns?: number;
    path?: string;
    store?: (
      chunkLength: number,
      storeOpts: {
        length: number,
        files: File[],
        torrent: WebTorrent$Torrent
      }
    ) => any;
    name?: string;
  }

  declare type WebTorrent$Instance = {
    on(event: "torrent", callback: (torrent: WebTorrent$Torrent) => void): this,
    on(event: "error", callback: (err: Error | string) => void): this,
    add(
      torrent: string | Buffer | ParseTorrent,
      opts?: WebTorrent$TorrentOptions,
      cb?: (torrent: WebTorrent$Torrent) => any
    ): WebTorrent$Torrent,
    add(
      torrent: string | Buffer | ParseTorrent,
      cb?: (torrent: WebTorrent$Torrent) => any
    ): WebTorrent$Torrent,
    seed(
      input:
        | string
        | string[]
        | File
        | File[]
        | FileList
        | Buffer
        | Buffer[]
        | NodeJS.ReadableStream
        | NodeJS.ReadableStream[],
      opts?: WebTorrent$TorrentOptions,
      cb?: (torrent: WebTorrent$Torrent) => any
    ): WebTorrent$Torrent,
    seed(
      input:
        | string
        | string[]
        | File
        | File[]
        | FileList
        | Buffer
        | Buffer[]
        | NodeJS.ReadableStream
        | NodeJS.ReadableStream[],
      cb?: (torrent: WebTorrent$Torrent) => any
    ): WebTorrent$Torrent,
    remove(
      torrentId: WebTorrent$Torrent | string | Buffer,
      callback?: (err: Error | string) => void
    ): void,
    destroy(callback?: (err: Error | string) => void): void,
    +torrents: WebTorrent$Torrent[],
    get(
      torrentId: WebTorrent$Torrent | string | Buffer
    ): WebTorrent$Torrent | void,
    +downloadSpeed: number,
    +uploadSpeed: number,
    +progress: number,
    +ratio: number
  } & NodeJS.EventEmitter;

  declare type WebTorrent$Torrent = {
    +infoHash: string,
    +magnetURI: string,
    +torrentFile: Buffer,
    +torrentFileBlobURL: string,
    +files: WebTorrent$TorrentFile[],
    +timeRemaining: number,
    +received: number,
    +downloaded: number,
    +uploaded: number,
    +downloadSpeed: number,
    +uploadSpeed: number,
    +progress: number,
    +ratio: number,
    +numPeers: number,
    +path: string,
    +ready: boolean,
    +name: string,
    destroy(cb?: (err: Error | string) => void): void,
    addPeer(peer: string | SimplePeer): boolean,
    addWebSeed(url: string): void,
    removePeer(peer: string | SimplePeer): void,
    select(
      start: number,
      end: number,
      priority?: number,
      notify?: () => void
    ): void,
    deselect(start: number, end: number, priority: number): void,
    createServer(opts?: RequestOptions): Server,
    pause(): void,
    resume(): void,
    on(
      event: "infoHash" | "metadata" | "ready" | "done",
      callback: () => void
    ): this,
    on(
      event: "warning" | "error",
      callback: (err: Error | string) => void
    ): this,
    on(event: "download" | "upload", callback: (bytes: number) => void): this,
    on(event: "wire", callback: (wire: Wire, addr?: string) => void): this,
    on(
      event: "noPeers",
      callback: (announceType: "tracker" | "dht") => void
    ): this
  } & NodeJS.EventEmitter;

  declare type WebTorrent$TorrentFile = {
    +name: string,
    +path: string,
    +length: number,
    +downloaded: number,
    select(): void,
    deselect(): void,
    createReadStream(opts?: {
      start: number,
      end: number
    }): NodeJS.ReadableStream,
    getBuffer(
      callback: (err: string | Error | void, buffer?: Buffer) => void
    ): void,
    appendTo(
      rootElement: HTMLElement | string,
      opts?: {
        autoplay?: boolean,
        controls?: boolean,
        maxBlobLength?: number
      },
      callback?: (err: Error | void, element: HTMLMediaElement) => void
    ): void,
    appendTo(
      rootElement: HTMLElement | string,
      callback?: (err: Error | void, element: HTMLMediaElement) => void
    ): void,
    renderTo(
      rootElement: HTMLMediaElement | string,
      opts?: {
        autoplay?: boolean,
        controls?: boolean,
        maxBlobLength?: number
      },
      callback?: (err: Error | void, element: HTMLMediaElement) => void
    ): void,
    renderTo(
      rootElement: HTMLMediaElement | string,
      callback?: (err: Error | void, element: HTMLMediaElement) => void
    ): void,
    getBlob(callback: (err: string | Error | void, blob?: Blob) => void): void,
    getBlobURL(
      callback: (err: string | Error | void, blobURL?: string) => void
    ): void
  } & NodeJS.EventEmitter;

  declare module.exports: typeof WebTorrent$WebTorrent;
}
