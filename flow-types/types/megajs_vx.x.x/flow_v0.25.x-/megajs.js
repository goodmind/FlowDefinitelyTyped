declare module "megajs" {
  import type { Readable, Writable, Stream } from "stream";

  declare export interface AccountInfo {
    type: string;
    spaceUsed: number;
    spaceTotal: number;
    downloadBandwidthUsed: number;
    downloadBandwidthTotal: number;
    sharedBandwidthUsed: number;
    sharedBandwidthLimit: number;
  }
  declare export interface DownloadOptions {
    maxConnections?: number;
    initialChunkSize?: number;
    chunkSizeIncrement?: number;
    maxChunkSize?: number;
    returnCiphertext?: boolean;
    start?: any;
    end?: any;
  }
  declare export interface UploadOptions {
    name: string;
    attributes?: { [key: string]: any };
    size?: any;
    thumbnailImage?: Buffer | Readable;
    previewImage?: Buffer | Readable;
  }
  declare export interface LinkOptions {
    noKey?: boolean;
    key?: string | Buffer;
  }
  declare export interface MakeDirectoryOptions {
    name: string;
    attributes?: { [key: string]: any };
    key?: string | Buffer;
  }
  declare export interface FileOptions {
    downloadId: string;
    key: string;
    directory?: boolean;
  }
  declare export interface StorageOptions {
    email: string;
    password: string;
    keepalive?: boolean;
    autologin?: boolean;
    autoload?: boolean;
  }
  declare export class File {
    constructor(options: FileOptions | string): this;
    static fromURL(options: FileOptions | string): File;
    static unpackAttributes(at: any): JSON;
    name: string;
    attributes: { [key: string]: any };
    size: number;
    key: Buffer;
    timestamp: number;
    nodeId: string;
    downloadId: string;
    directory: boolean;
    children: $ReadOnlyArray<File>;
    loadAttributes(cb?: any): Readable;
    download(options?: DownloadOptions, cb?: any): Readable;
  }
  declare export class Storage {
    constructor(options: StorageOptions, callback?: any): this;
    static fromJSON(json: JSON): Storage;
    name: string;
    key: Buffer;
    sid: string;
    files: $ObjMapi<{ [k: string]: any }, <id>(id) => MutableFile>;
    root: MutableFile;
    trash: MutableFile;
    inbox: MutableFile;
    mounts: $ReadOnlyArray<File>;
    upload(
      options: UploadOptions | string,
      buffer?: Buffer,
      cb?: any
    ): Writable;
    mkdir(
      options: MakeDirectoryOptions | string,
      cb: (err: Error | void, file: MutableFile) => void
    ): Readable;
    reload(cb: any): Readable;
    login(cb: any): Readable;
    getAccountInfo(cb: any): AccountInfo;
    toJSON(): JSON;
  }
  declare export class MutableFile mixins File {
    constructor(options: FileOptions | string, storage: Storage): this;
    upload(
      options: UploadOptions | string,
      buffer?: Buffer,
      cb?: any
    ): Writable;
    mkdir(options: MakeDirectoryOptions | string, cb?: any): Readable;
    importFile(
      file: File | string,
      cb: (err: Error | void, file: MutableFile) => void
    ): Readable;
    link(
      options: LinkOptions | void,
      cb: (err: Error | void, url: string) => void
    ): Readable;
    shareFolder(
      options: LinkOptions | void,
      cb: (err: Error | void, url: string) => void
    ): Readable;
    delete(permanent: true | void, cb: (err: Error | void) => void): Readable;
    moveTo(
      target: MutableFile | string,
      cb: (err: Error | void) => void
    ): Readable;
    setAttributes(
      attributes: { [key: string]: any },
      cb: (err: Error | void) => void
    ): Readable;
    uploadAttribute(
      type: string | number,
      opt?: Buffer | Stream,
      cb?: any
    ): Readable;
    rename(newFileName: string, cb: (err: Error | void) => void): Readable;
    setLabel(label: string, cb: (err: Error | void) => void): Readable;
    setFavorite(isFavorite: boolean, cb: (err: Error | void) => void): Readable;
  }
  declare export default function mega(
    options: StorageOptions,
    cb?: any
  ): Storage;
}
