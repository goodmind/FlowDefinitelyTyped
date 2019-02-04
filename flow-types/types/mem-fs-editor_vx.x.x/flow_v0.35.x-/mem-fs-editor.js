declare module 'mem-fs-editor' {
        import typeof * as Buffer from 'buffer';

	import type {
          Transform
        } from 'stream';

	import type {
          Store
        } from 'mem-fs';

	import type {
          TemplateOptions,TemplateData
        } from 'ejs';

	import type {
          GlobOptions
        } from 'glob';

	declare type ReplacerFunc = (key: string, value: any) => any;
	declare type Space = string | number;
	declare type Contents = string | Buffer;
	declare type Callback = (err: any) => any;
	declare export type ProcessingFunc = (contents: Buffer, path: string) => Contents;
	declare export interface CopyOptions {
process?: ProcessingFunc,
globOptions?: GlobOptions
} 
	declare export interface Editor {
read(filepath: string, options?: {
raw?: boolean,
defaults: string
}): string,
readJSON(filepath: string, defaults?: any): any,
exists(filepath: string): boolean,
write(filepath: string, contents: Contents): string,
writeJSON(
filepath: string,
contents: any,
replacer?: ReplacerFunc,
space?: Space): string,
append(
to: string,
contents: Contents,
options?: {
trimEnd?: boolean,
separator?: string
}): string,
delete(paths: string | string[], options?: {
globOptions?: GlobOptions
}): void,
copy(
from: string | string[],
to: string,
options?: CopyOptions,
context?: TemplateData,
templateOptions?: TemplateOptions): void,
copyTpl(
from: string | string[],
to: string,
context?: TemplateData,
templateOptions?: TemplateOptions,
copyOptions?: CopyOptions): void,
move(
from: string | string[],
to: string,
options?: {
globOptions: GlobOptions
}): void,
commit(callback: Callback): void,
commit(filters: $ReadOnlyArray<Transform>, callback: Callback): void
} 
	declare export function create(store: Store): Editor

	declare export {
          
        }

    }
