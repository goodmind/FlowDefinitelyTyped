declare module "yauzl" {
  import type { EventEmitter } from "events";

  import type { Readable } from "stream";

  declare export class RandomAccessReader mixins EventEmitter {
    _readStreamForRange(start: number, end: number): void;
    createReadStream(options: {
      start: number,
      end: number
    }): void;
    read(
      buffer: Buffer,
      offset: number,
      length: number,
      position: number,
      callback: (err?: Error) => void
    ): void;
    close(callback: (err?: Error) => void): void;
  }
  declare export class Entry {
    comment: string;
    compressedSize: number;
    compressionMethod: number;
    crc32: number;
    externalFileAttributes: number;
    extraFieldLength: number;
    extraFields: Array<{
      id: number,
      data: Buffer
    }>;
    fileCommentLength: number;
    fileName: string;
    fileNameLength: number;
    generalPurposeBitFlag: number;
    internalFileAttributes: number;
    lastModFileDate: number;
    lastModFileTime: number;
    relativeOffsetOfLocalHeader: number;
    uncompressedSize: number;
    versionMadeBy: number;
    versionNeededToExtract: number;
    getLastModDate(): Date;
    isEncrypted(): boolean;
    isCompressed(): boolean;
  }
  declare export interface ZipFileOptions {
    decompress: boolean | null;
    decrypt: boolean | null;
    start: number | null;
    end: number | null;
  }
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
    openReadStream(
      entry: Entry,
      options: ZipFileOptions,
      callback: (err?: Error, stream?: Readable) => void
    ): void;
    openReadStream(
      entry: Entry,
      callback: (err?: Error, stream?: Readable) => void
    ): void;
    close(): void;
    readEntry(): void;
  }
  declare export interface Options {
    autoClose?: boolean;
    lazyEntries?: boolean;
    decodeStrings?: boolean;
    validateEntrySizes?: boolean;
    strictFileNames?: boolean;
  }
  declare export function open(
    path: string,
    options: Options,
    callback?: (err?: Error, zipfile?: ZipFile) => void
  ): void;

  declare export function open(
    path: string,
    callback?: (err?: Error, zipfile?: ZipFile) => void
  ): void;

  declare export function fromFd(
    fd: number,
    options: Options,
    callback?: (err?: Error, zipfile?: ZipFile) => void
  ): void;

  declare export function fromFd(
    fd: number,
    callback?: (err?: Error, zipfile?: ZipFile) => void
  ): void;

  declare export function fromBuffer(
    buffer: Buffer,
    options: Options,
    callback?: (err?: Error, zipfile?: ZipFile) => void
  ): void;

  declare export function fromBuffer(
    buffer: Buffer,
    callback?: (err?: Error, zipfile?: ZipFile) => void
  ): void;

  declare export function fromRandomAccessReader(
    reader: RandomAccessReader,
    totalSize: number,
    options: Options,
    callback: (err?: Error, zipfile?: ZipFile) => void
  ): void;

  declare export function fromRandomAccessReader(
    reader: RandomAccessReader,
    totalSize: number,
    callback: (err?: Error, zipfile?: ZipFile) => void
  ): void;

  declare export function dosDateTimeToDate(date: number, time: number): Date;

  declare export function validateFileName(fileName: string): string | null;
}
