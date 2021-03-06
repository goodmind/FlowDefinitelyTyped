declare module "musicmetadata" {
  import type { Readable } from "stream";

  import type { EventEmitter } from "events";

  declare function mm(
    readStream: Readable,
    callback: (err: Error, metadata: MM$MM$Metadata) => void
  ): EventEmitter;

  declare function mm(
    readStream: Readable,
    options: MM$MM$Options,
    callback: (err: Error, metadata: MM$MM$Metadata) => void
  ): EventEmitter;

  declare export default typeof mm;
}
export interface MM$Options {
  duration?: boolean;
  fileSize?: number;
}

export interface MM$Metadata {
  artist: string[];
  album: string;
  albumartist: string[];
  title: string;
  year: string;
  track: MM$NoOf;
  disk: MM$NoOf;
  genre: string[];
  picture: MM$Picture[];
  duration: number;
}

export interface MM$NoOf {
  no: number;
  of: number;
}

export interface MM$Picture {
  format: string;
  data: Buffer;
}
