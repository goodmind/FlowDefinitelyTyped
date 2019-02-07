declare module "react-native-fs" {
  declare export interface ReadDirItem {
    ctime: Date | void;
    mtime: Date | void;
    name: string;
    path: string;
    size: string;
    isFile(): boolean;
    isDirectory(): boolean;
  }
  declare export interface StatResult {
    name: string;
    path: string;
    size: string;
    mode: number;
    ctime: number;
    mtime: number;
    isFile(): boolean;
    isDirectory(): boolean;
  }
  declare export interface Headers {
    [index: string]: string;
  }
  declare export type Fields = Headers;
  declare export interface MkdirOptions {
    NSURLIsExcludedFromBackupKey?: boolean;
  }
  declare export interface DownloadResult {
    jobId: number;
    statusCode: number;
    bytesWritten: number;
  }
  declare export type DownloadCallbackBegin = (
    res: DownloadBeginCallbackResult
  ) => void;
  declare export type DownloadCallbackProgress = (
    res: DownloadProgressCallbackResult
  ) => void;
  declare export interface DownloadFileOptions {
    fromUrl: string;
    toFile: string;
    headers?: Headers;
    background?: boolean;
    progressDivider?: number;
    readTimeout?: number;
    connectionTimeout?: number;
    begin?: DownloadCallbackBegin;
    progress?: DownloadCallbackProgress;
  }
  declare export interface DownloadProgressCallbackResult {
    jobId: number;
    contentLength: number;
    bytesWritten: number;
  }
  declare export interface DownloadBeginCallbackResult {
    jobId: number;
    statusCode: number;
    contentLength: number;
    headers: Headers;
  }
  declare export type UploadCallbackBegin = (
    res: UploadBeginCallbackResult
  ) => void;
  declare export type UploadCallbackProgress = (
    res: UploadProgressCallbackResult
  ) => void;
  declare export interface UploadFileOptions {
    toUrl: string;
    files: UploadFileItem[];
    headers?: Headers;
    fields?: Fields;
    method?: string;
    begin?: UploadCallbackBegin;
    progress?: UploadCallbackProgress;
  }
  declare export interface UploadResult {
    jobId: number;
    statusCode: number;
    headers: Headers;
    body: string;
  }
  declare export interface UploadFileItem {
    name: string;
    filename: string;
    filepath: string;
    filetype: string;
  }
  declare export interface UploadBeginCallbackResult {
    jobId: number;
  }
  declare export interface UploadProgressCallbackResult {
    jobId: number;
    totalBytesExpectedToSend: number;
    totalBytesSent: number;
  }
  declare export interface FSInfoResult {
    totalSpace: number;
    freeSpace: number;
  }
  declare export interface JobReturnValue<Result> {
    jobId: number;
    promise: Promise<Result>;
  }
  declare export type Encoding = "utf8" | "ascii" | "base64";
  declare export type EncodingOrOptions =
    | Encoding
    | {
        encoding?: Encoding
      };
  declare export type HashAlgorithm =
    | "md5"
    | "sha1"
    | "sha224"
    | "sha256"
    | "sha384"
    | "sha512";
  declare export var MainBundlePath: string;
  declare export var CachesDirectoryPath: string;
  declare export var DocumentDirectoryPath: string;
  declare export var TemporaryDirectoryPath: string;
  declare export var ExternalDirectoryPath: string;
  declare export var ExternalStorageDirectoryPath: string;
  declare export var LibraryDirectoryPath: string;
  declare export var PicturesDirectoryPath: string;
  declare export function readDir(path: string): Promise<ReadDirItem[]>;

  declare export function readDirAssets(
    dirpath: string
  ): Promise<ReadDirItem[]>;

  declare export function readdir(path: string): Promise<string[]>;

  declare export function stat(filepath: string): Promise<StatResult>;

  declare export function read(
    filepath: string,
    length?: number,
    position?: number,
    encodingOrOptions?: EncodingOrOptions
  ): Promise<string>;

  declare export function readFile(
    filepath: string,
    encodingOrOptions?: EncodingOrOptions
  ): Promise<string>;

  declare export function readFileAssets(
    filepath: string,
    encodingOrOptions?: EncodingOrOptions
  ): Promise<string>;

  declare export function existsAssets(filepath: string): Promise<boolean>;

  declare export function unlink(filepath: string): Promise<void>;

  declare export function write(
    filepath: string,
    contents: string,
    position?: number,
    encodingOrOptions?: EncodingOrOptions
  ): Promise<void>;

  declare export function writeFile(
    filepath: string,
    contents: string,
    encodingOrOptions?: EncodingOrOptions
  ): Promise<void>;

  declare export function appendFile(
    filepath: string,
    contents: string,
    encodingOrOptions?: EncodingOrOptions
  ): Promise<void>;

  declare export function moveFile(
    filepath: string,
    destPath: string
  ): Promise<void>;

  declare export function copyFile(
    filepath: string,
    destPath: string
  ): Promise<void>;

  declare export function copyFileAssets(
    filepath: string,
    destPath: string
  ): Promise<void>;

  declare export function copyAssetsFileIOS(
    imageUri: string,
    destPath: string,
    width: number,
    height: number,
    scale?: number,
    compression?: number,
    resizeMode?: string
  ): Promise<string>;

  declare export function copyAssetsVideoIOS(
    imageUri: string,
    destPath: string
  ): Promise<string>;

  declare export function exists(filepath: string): Promise<boolean>;

  declare export function hash(
    filepath: string,
    algorithm: HashAlgorithm
  ): Promise<string>;

  declare export function mkdir(
    filepath: string,
    options?: MkdirOptions
  ): Promise<void>;

  declare export function touch(
    filepath: string,
    mtime?: Date,
    ctime?: Date
  ): Promise<void>;

  declare export function downloadFile(
    options: DownloadFileOptions
  ): JobReturnValue<DownloadResult>;

  declare export function stopDownload(jobId: number): void;

  declare export function uploadFiles(
    options: UploadFileOptions
  ): JobReturnValue<UploadResult>;

  declare export function stopUpload(jobId: number): void;

  declare export function pathForBundle(bundleNamed: string): Promise<string>;

  declare export function pathForGroup(groupName: string): Promise<string>;

  declare export function setReadable(
    filepath: string,
    readable: boolean,
    ownerOnly: boolean
  ): Promise<boolean>;

  declare export function getFSInfo(): Promise<FSInfoResult>;
}
