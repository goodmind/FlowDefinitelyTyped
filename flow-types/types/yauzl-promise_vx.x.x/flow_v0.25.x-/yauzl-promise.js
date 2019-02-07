declare module "yauzl-promise" {
  import type {
    Entry as BaseEntry,
    Options,
    ZipFileOptions,
    RandomAccessReader
  } from "yauzl";

  import type { Readable } from "stream";

  import type { EventEmitter } from "events";

  declare export class ZipFile mixins EventEmitter {
    autoClose: boolean;
    comment: string;
    decodeStrings: boolean;
    emittedError: boolean;
    entriesRead: number;
    entryCount: number;
    fileSize: number;
    isOpen: boolean;
    lazyEntries: boolean;
    readEntryCursor: boolean;
    validateEntrySizes: boolean;
    constructor(
      reader: RandomAccessReader,
      centralDirectoryOffset: number,
      fileSize: number,
      entryCount: number,
      comment: string,
      autoClose: boolean,
      lazyEntries: boolean,
      decodeStrings: boolean,
      validateEntrySizes: boolean
    ): this;
    close(): Promise<void>;
    readEntry(): Promise<Entry>;
    readEntries(numEntries?: number): Promise<Entry[]>;
    walkEntries(
      callback: (entry: Entry) => Promise<void> | void,
      numEntries?: number
    ): Promise<void>;
    openReadStream(entry: Entry, options?: ZipFileOptions): Promise<Readable>;
  }
  declare export class Entry mixins BaseEntry {
    openReadStream(options?: ZipFileOptions): Promise<Readable>;
  }
  declare export function open(
    path: string,
    options?: Options
  ): Promise<ZipFile>;

  declare export function fromFd(
    fd: number,
    options?: Options
  ): Promise<ZipFile>;

  declare export function fromBuffer(
    buffer: Buffer,
    options?: Options
  ): Promise<ZipFile>;

  declare export function fromRandomAccessReader(
    reader: RandomAccessReader,
    totalSize: number,
    options?: Options
  ): Promise<ZipFile>;

  declare export function dosDateTimeToDate(date: number, time: number): Date;

  declare export function validateFileName(fileName: string): string | null;

  declare export { RandomAccessReader, Options, ZipFileOptions };
}
