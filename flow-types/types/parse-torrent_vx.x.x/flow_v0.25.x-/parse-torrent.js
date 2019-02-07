declare module "parse-torrent" {
  import typeof * as ParseTorrentFile from "parse-torrent-file";

  declare var ParseTorrent$ParseTorrent: ParseTorrent$ParseTorrent.ParseTorrent$ParseTorrent;
  declare interface ParseTorrent$ParseTorrent {
    (torrent: string): MagnetUri.ParseTorrent$Instance;
    (
      torrent: Buffer
    ): MagnetUri.ParseTorrent$Instance | ParseTorrentFile.ParseTorrent$Instance;
    (
      torrent:
        | ParseTorrent$Instance
        | MagnetUri.ParseTorrent$Instance
        | ParseTorrentFile.ParseTorrent$Instance
    ): ParseTorrent$Instance;
    toMagnetURI: typeof undefined;
    toTorrentFile: typeof undefined;
    remote(
      torrent:
        | string
        | Buffer
        | ParseTorrent$Instance
        | MagnetUri.ParseTorrent$Instance
        | ParseTorrentFile.ParseTorrent$Instance
        | Blob,
      cb?: (err: Error, torrent?: ParseTorrent$Instance) => void
    ): void;
  }

  declare type ParseTorrent$Instance = {
    infoHash: string,
    name?: string,
    announce?: string[],
    urlList?: string[]
  } & MagnetUri.ParseTorrent$Instance &
    ParseTorrentFile.ParseTorrent$Instance;

  declare module.exports: typeof ParseTorrent$ParseTorrent;
}
