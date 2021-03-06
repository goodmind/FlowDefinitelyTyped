declare interface TorrentStream$TorrentEngine {
  files: TorrentStream$TorrentFile[];
  destroy(callback: () => void): void;
  connect(peer: string): void;
  disconnect(peer: string): void;
  block(peer: string): void;
  remove(keepPieces: boolean, callback: () => void): void;
  listen(port: number, callback: () => void): void;
  swarm: TorrentStream$Swarm;
  infoHash: string;
  on(event: "ready" | "torrent" | "idle", callback: Function): void;
  on(event: "download", callback: (pieceIndex: number) => void): void;
  on(
    event: "upload",
    callback: (pieceIndex: number, offset: number, length: number) => void
  ): void;
  on(event: string, callback: Function): void;
}

declare interface TorrentStream$TorrentEngineOptions {
  connections?: number;
  uploads?: number;
  tmp?: string;
  path?: string;
  verify?: boolean;
  dht?: boolean;
  tracker?: boolean;
  trackers?: string[];
  storage?: any;
}

declare interface TorrentStream$Swarm {
  downloaded: number;
}

declare interface TorrentStream$TorrentFile {
  name: string;
  path: string;
  length: number;
  select(): void;
  deselect(): void;
  createReadStream(options?: TorrentStream$ReadStreamOptions): any;
}

declare interface TorrentStream$ReadStreamOptions {
  start: number;
  end: number;
}
declare module "torrent-stream" {
  declare function s(
    magnet: string | Buffer,
    options?: TorrentStream$TorrentStream$TorrentEngineOptions
  ): TorrentStream$TorrentStream$TorrentEngine;

  declare module.exports: typeof s;
}
