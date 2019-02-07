declare module "fs-promise" {
  declare export * from "mz/fs"

  declare export interface WriteOptions {
    encoding?: string;
    mode?: number;
    flag?: string;
  }
  declare export type JsonReplacerArray = Array<number | string>;
  declare export type JsonReplacerFunction = (key: string, value: any) => any;
  declare export type JsonReplacer = JsonReplacerArray | JsonReplacerFunction;
  declare export type WriteJsonOptions = {
    spaces?: number,
    replacer?: JsonReplacer
  } & WriteOptions;

  declare export interface ReadJsonOptions {
    encoding: string;
    flag?: string;
    reviver(key: any, value: any): any;
  }
  declare export function copy(src: string, dst: string): Promise<void>;

  declare export function emptyDir(dir: string): Promise<void>;

  declare export function ensureFile(file: string): Promise<void>;

  declare export function ensureDir(dir: string): Promise<void>;

  declare export function ensureLink(
    srcpath: string,
    dstpath: string
  ): Promise<void>;

  declare export function ensureSymlink(
    srcpath: string,
    dstpath: string,
    type?: "dir" | "file" | "junction"
  ): Promise<void>;

  declare export function mkdirs(dir: string): Promise<void>;

  declare export function move(src: string, dst: string): Promise<void>;

  declare export function outputFile(
    file: string,
    data: string | Buffer,
    options?: WriteOptions
  ): Promise<void>;

  declare export function outputJson(
    file: string,
    data: any,
    options?: WriteJsonOptions
  ): Promise<void>;

  declare export function readJson(
    file: string,
    options?: ReadJsonOptions
  ): Promise<any>;

  declare export function remove(path: string): Promise<void>;

  declare export function walk(dir: string): Promise<string[]>;

  declare export function writeJson(
    file: string,
    data: any,
    options?: WriteJsonOptions
  ): Promise<void>;

  declare export {
    emptyDir as emptydir,
    ensureFile as createFile,
    ensureLink as createLink,
    ensureSymlink as createSymlink,
    mkdirs as mkdirp,
    outputJson as outputJSON,
    readJson as readJSON,
    writeJson as writeJSON
  };
}
