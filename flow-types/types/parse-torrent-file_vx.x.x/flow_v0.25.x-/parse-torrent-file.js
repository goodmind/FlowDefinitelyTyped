declare module "parse-torrent-file" {
  declare function ParseTorrentFile(
    torrent: Buffer | ParseTorrentFile$ParseTorrentFile$Torrent
  ): ParseTorrentFile$ParseTorrentFile$Instance;

  declare var npm$namespace$ParseTorrentFile: {
    decode: typeof ParseTorrentFile$decode,
    encode: typeof ParseTorrentFile$encode
  };
  declare function ParseTorrentFile$decode(
    torrent: Buffer | ParseTorrentFile$Torrent
  ): ParseTorrentFile$Instance;

  declare function ParseTorrentFile$encode(
    parsed: ParseTorrentFile$Instance
  ): Buffer;

  declare interface ParseTorrentFile$TorrentInfo {
    "name.utf-8"?: string;
    name?: string;
    files?: File[];
    "piece length"?: number;
    pieces?: number;
    private?: boolean;
  }

  declare interface ParseTorrentFile$Torrent {
    info?: ParseTorrentFile$TorrentInfo;
    "creation date"?: number;
    "created by"?: string;
    comment?: Buffer;
    "announce-list"?: string[][];
    announce?: string;
    "url-list"?: Buffer;
  }

  declare interface ParseTorrentFile$ParsedFile {
    path: string;
    name: string;
    length: number;
    offset: number;
  }

  declare type ParseTorrentFile$Instance = {
    info?: ParseTorrentFile$TorrentInfo,
    infoBuffer?: Buffer,
    infoHash?: string,
    infoHashBuffer?: Buffer,
    name?: string,
    private?: boolean,
    created?: Date,
    createdBy?: string,
    announce?: string[],
    urlList?: string[],
    pieceLength?: number,
    lastPieceLength?: number,
    pieces?: string[],
    length?: number,
    files?: ParseTorrentFile$ParsedFile[]
  } & Object;

  declare module.exports: typeof ParseTorrentFile;
}
