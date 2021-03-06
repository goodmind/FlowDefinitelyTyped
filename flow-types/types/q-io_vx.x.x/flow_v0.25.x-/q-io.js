declare module "q-io/buffer-stream" {
  declare export default typeof QioBufferStream;
}
declare module "q-io/writer" {
  declare export default typeof QioBufferWriter;
}
declare module "q-io/reader" {
  declare export default typeof QioBufferReader;
}
declare module "q-io/fs" {
  declare export default typeof QioFS;
}
declare module "q-io/http" {
  import typeof * as Q from "q";

  declare export default typeof QioHTTP;
}
declare module "q-io" {
  declare var npm$namespace$QioFS: {
    open: typeof QioFS$open,
    read: typeof QioFS$read,
    write: typeof QioFS$write,
    append: typeof QioFS$append,
    copy: typeof QioFS$copy,
    copyTree: typeof QioFS$copyTree,
    list: typeof QioFS$list,
    listTree: typeof QioFS$listTree,
    listDirectoryTree: typeof QioFS$listDirectoryTree,
    makeDirectory: typeof QioFS$makeDirectory,
    makeTree: typeof QioFS$makeTree,
    remove: typeof QioFS$remove,
    removeTree: typeof QioFS$removeTree,
    rename: typeof QioFS$rename,
    move: typeof QioFS$move,
    link: typeof QioFS$link,
    symbolicCopy: typeof QioFS$symbolicCopy,
    symbolicLink: typeof QioFS$symbolicLink,
    chown: typeof QioFS$chown,
    chmod: typeof QioFS$chmod,
    stat: typeof QioFS$stat,
    statLink: typeof QioFS$statLink,
    statFd: typeof QioFS$statFd,
    exists: typeof QioFS$exists,
    isFile: typeof QioFS$isFile,
    isDirectory: typeof QioFS$isDirectory,
    isSymbolicLink: typeof QioFS$isSymbolicLink,
    lastModified: typeof QioFS$lastModified,
    lastAccessed: typeof QioFS$lastAccessed,
    split: typeof QioFS$split,
    join: typeof QioFS$join,
    resolve: typeof QioFS$resolve,
    normal: typeof QioFS$normal,
    absolute: typeof QioFS$absolute,
    canonical: typeof QioFS$canonical,
    readLink: typeof QioFS$readLink,
    contains: typeof QioFS$contains,
    relative: typeof QioFS$relative,
    relativeFromFile: typeof QioFS$relativeFromFile,
    relativeFromDirectory: typeof QioFS$relativeFromDirectory,
    isAbsolute: typeof QioFS$isAbsolute,
    isRelative: typeof QioFS$isRelative,
    isRoot: typeof QioFS$isRoot,
    root: typeof QioFS$root,
    directory: typeof QioFS$directory,
    base: typeof QioFS$base,
    extension: typeof QioFS$extension,
    reroot: typeof QioFS$reroot,
    toObject: typeof QioFS$toObject
  };
  declare export function QioFS$open(
    path: string,
    options?: any
  ): Q.Promise<any>;

  declare export function QioFS$read(
    path: string,
    options?: any
  ): Q.Promise<any>;

  declare export function QioFS$write(
    path: string,
    content: Buffer,
    options?: any
  ): Q.Promise<void>;

  declare export function QioFS$write(
    path: string,
    content: string,
    options?: any
  ): Q.Promise<void>;

  declare export function QioFS$append(
    path: string,
    content: Buffer,
    options?: any
  ): Q.Promise<void>;

  declare export function QioFS$append(
    path: string,
    content: string,
    options?: any
  ): Q.Promise<void>;

  declare export function QioFS$copy(
    source: string,
    target: string
  ): Q.Promise<void>;

  declare export function QioFS$copyTree(
    source: string,
    target: string
  ): Q.Promise<void>;

  declare export function QioFS$list(path: string): Q.Promise<string[]>;

  declare export function QioFS$listTree(
    path: string,
    guard?: (path: string, stat: any) => boolean
  ): Q.Promise<string[]>;

  declare export function QioFS$listDirectoryTree(
    path: string
  ): Q.Promise<string[]>;

  declare export function QioFS$makeDirectory(
    path: string,
    mode?: string
  ): Q.Promise<void>;

  declare export function QioFS$makeDirectory(
    path: string,
    mode?: number
  ): Q.Promise<void>;

  declare export function QioFS$makeTree(
    path: string,
    mode?: string
  ): Q.Promise<void>;

  declare export function QioFS$makeTree(
    path: string,
    mode?: number
  ): Q.Promise<void>;

  declare export function QioFS$remove(path: string): Q.Promise<void>;

  declare export function QioFS$removeTree(path: string): Q.Promise<void>;

  declare export function QioFS$rename(
    source: string,
    target: string
  ): Q.Promise<void>;

  declare export function QioFS$move(
    source: string,
    target: string
  ): Q.Promise<void>;

  declare export function QioFS$link(
    source: string,
    target: any
  ): Q.Promise<void>;

  declare export function QioFS$symbolicCopy(
    source: string,
    target: string,
    type: string
  ): Q.Promise<void>;

  declare export function QioFS$symbolicLink(
    target: string,
    link: string,
    type: string
  ): Q.Promise<void>;

  declare export function QioFS$chown(
    path: string,
    uid: number,
    gid: number
  ): Q.Promise<void>;

  declare export function QioFS$chmod(
    path: string,
    mode?: string
  ): Q.Promise<void>;

  declare export function QioFS$chmod(
    path: string,
    mode?: number
  ): Q.Promise<void>;

  declare export function QioFS$stat(path: string): Q.Promise<QioFS$Stats>;

  declare export function QioFS$statLink(path: string): Q.Promise<QioFS$Stats>;

  declare export function QioFS$statFd(fd: number): Q.Promise<QioFS$Stats>;

  declare export function QioFS$exists(path: string): Q.Promise<boolean>;

  declare export function QioFS$isFile(path: string): Q.Promise<boolean>;

  declare export function QioFS$isDirectory(path: string): Q.Promise<boolean>;

  declare export function QioFS$isSymbolicLink(
    path: string
  ): Q.Promise<boolean>;

  declare export function QioFS$lastModified(path: string): Q.Promise<Date>;

  declare export function QioFS$lastAccessed(path: string): Q.Promise<Date>;

  declare export function QioFS$split(path: string): string[];

  declare export function QioFS$join(...paths: string[]): string;

  declare export function QioFS$join(paths: string[]): string;

  declare export function QioFS$resolve(...path: string[]): string;

  declare export function QioFS$resolve(paths: string[]): string;

  declare export function QioFS$normal(...path: string[]): string;

  declare export function QioFS$normal(paths: string[]): string;

  declare export function QioFS$absolute(path: string): string;

  declare export function QioFS$canonical(path: string): Q.Promise<string>;

  declare export function QioFS$readLink(path: string): Q.Promise<string>;

  declare export function QioFS$contains(
    parent: string,
    child: string
  ): boolean;

  declare export function QioFS$relative(
    source: string,
    target: string
  ): Q.Promise<string>;

  declare export function QioFS$relativeFromFile(
    source: string,
    target: string
  ): string;

  declare export function QioFS$relativeFromDirectory(
    source: string,
    target: string
  ): string;

  declare export function QioFS$isAbsolute(path: string): boolean;

  declare export function QioFS$isRelative(path: string): boolean;

  declare export function QioFS$isRoot(path: string): boolean;

  declare export function QioFS$root(path: string): string;

  declare export function QioFS$directory(path: string): string;

  declare export function QioFS$base(path: string, extension: string): string;

  declare export function QioFS$extension(path: string): string;

  declare export function QioFS$reroot(path: string): typeof QioFS;

  declare export function QioFS$toObject(
    path: string
  ): {
    [path: string]: Buffer
  };

  declare interface QioFS$Stats {
    node: QioFS$NodeStats;
    size: number;
  }

  declare interface QioFS$NodeStats {
    isFile(): boolean;
    isDirectory(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
    node: QioFS$NodeStats;
    dev: number;
    ino: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    size: number;
    blksize: number;
    blocks: number;
    atime: Date;
    mtime: Date;
    ctime: Date;
  }

  declare var npm$namespace$QioHTTP: {
    request: typeof QioHTTP$request,
    read: typeof QioHTTP$read,
    normalizeRequest: typeof QioHTTP$normalizeRequest,
    normalizeResponse: typeof QioHTTP$normalizeResponse
  };
  declare export function QioHTTP$request(
    request: QioHTTP$Request
  ): Q.Promise<QioHTTP$Response>;

  declare export function QioHTTP$request(
    url: string
  ): Q.Promise<QioHTTP$Response>;

  declare export function QioHTTP$read(
    request: QioHTTP$Request
  ): Q.Promise<string>;

  declare export function QioHTTP$read(url: string): Q.Promise<string>;

  declare export function QioHTTP$normalizeRequest(
    request: QioHTTP$Request
  ): QioHTTP$Request;

  declare export function QioHTTP$normalizeRequest(
    url: string
  ): QioHTTP$Request;

  declare export function QioHTTP$normalizeResponse(
    response: QioHTTP$Response
  ): QioHTTP$Response;

  declare interface QioHTTP$Request {
    url: string;
    path: string;
    scriptName: string;
    pathInfo: string;
    version: string[];
    method: string;
    scheme: string;
    host: string;
    port: number;
    remoteHost: string;
    remotePort: number;
    headers: QioHTTP$Headers;
    agent: any;
    body: any;
    node: any;
  }

  declare interface QioHTTP$Response {
    status: number;
    headers: QioHTTP$Headers;
    body: Qio$Reader;
    onclose: () => void;
    node: any;
  }

  declare interface QioHTTP$Headers {
    [name: string]: any;
  }

  declare type QioHTTP$Body = {} & Qio$Stream;

  declare interface QioHTTP$Application {
    (req: QioHTTP$Request): Q.Promise<any>;
  }
  declare interface Qio$ForEachCallback {
    (chunk: Buffer): Q.Promise<any>;
    (chunk: string): Q.Promise<any>;
  }

  declare interface Qio$ForEach {
    forEach(callback: Qio$ForEachCallback): Q.Promise<void>;
  }

  declare type Qio$Reader = {
    read(charset: string): Q.Promise<string>,
    read(): Q.Promise<Buffer>,
    close(): void,
    node: NodeJS.ReadableStream
  } & ForEach;

  declare interface Qio$Writer {
    write(content: string): void;
    write(content: Buffer): void;
    flush(): Q.Promise<void>;
    close(): void;
    destroy(): void;
    node: NodeJS.WritableStream;
  }

  declare interface Qio$Stream {
    read(charset: string): Q.Promise<string>;
    read(): Q.Promise<Buffer>;
    write(content: string): void;
    write(content: Buffer): void;
    flush(): Q.Promise<void>;
    close(): void;
    destroy(): void;
    node: any;
  }

  declare type Qio$BufferReader = {} & QioBufferReader;

  declare interface QioBufferReader {
    new(): Qio$Reader;
    read(stream: Qio$Reader, charset: string): string;
    read(stream: Qio$Reader): Buffer;
    join(buffers: Buffer[]): Buffer;
  }
  declare interface QioBufferWriter {
    (writer: Buffer): Qio$Writer;
    Writer: Qio$Writer;
  }
  declare interface QioBufferStream {
    (buffer: Buffer, encoding: string): Qio$Stream;
  }
}
