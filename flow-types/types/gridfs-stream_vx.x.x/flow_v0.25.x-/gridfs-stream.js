declare export class g$Grid {
  files: mongo.Collection;
  collection(name?: string): mongo.Collection;
  curCol: string;
  createWriteStream(
    options?: GridFSStream$GridFSStream$Options
  ): GridFSStream$GridFSStream$WriteStream;
  createReadStream(
    options?: GridFSStream$GridFSStream$Options
  ): GridFSStream$GridFSStream$ReadStream;
  createWriteStream(options?: string): GridFSStream$GridFSStream$WriteStream;
  createReadStream(options?: string): GridFSStream$GridFSStream$ReadStream;
  remove(
    options: GridFSStream$GridFSStream$Options,
    callback: (err: Error) => void
  ): void;
  exist(
    options: GridFSStream$GridFSStream$Options,
    callback: (err: Error, found: boolean) => void
  ): void;
  findOne(
    options: GridFSStream$GridFSStream$Options,
    callback: (err: Error, record: any) => void
  ): void;
}
export interface GridFSStream$Range {
  startPos: number;
  endPos: number;
}

export interface GridFSStream$Options {
  _id?: string;
  filename?: string;
  mode?: string;
  range?: GridFSStream$Range;
  chunkSize?: number;
  content_type?: string;
  root?: string;
  metadata?: any;
}

export type GridFSStream$WriteStream = {
  writable: boolean,
  name: string,
  id: string,
  options: GridFSStream$Options,
  mode: string
} & NodeJS.WritableStream;

export type GridFSStream$ReadStream = {
  readable: boolean,
  paused: boolean
} & NodeJS.ReadableStream;
declare module "gridfs-stream" {
  declare function g(db: any, mongo: any): g$g$Grid;

  declare export class g$Grid {
    files: mongo.Collection;
    collection(name?: string): mongo.Collection;
    curCol: string;
    createWriteStream(
      options?: GridFSStream$GridFSStream$Options
    ): GridFSStream$GridFSStream$WriteStream;
    createReadStream(
      options?: GridFSStream$GridFSStream$Options
    ): GridFSStream$GridFSStream$ReadStream;
    createWriteStream(options?: string): GridFSStream$GridFSStream$WriteStream;
    createReadStream(options?: string): GridFSStream$GridFSStream$ReadStream;
    remove(
      options: GridFSStream$GridFSStream$Options,
      callback: (err: Error) => void
    ): void;
    exist(
      options: GridFSStream$GridFSStream$Options,
      callback: (err: Error, found: boolean) => void
    ): void;
    findOne(
      options: GridFSStream$GridFSStream$Options,
      callback: (err: Error, record: any) => void
    ): void;
  }
  declare export default typeof g;
}
