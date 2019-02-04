declare module 'git-rev-sync' {
        declare export function short(filePath?: string, length?: number): string

	declare export function long(filePath?: string): string

	declare export function branch(branch?: string): void

	declare export function count(): number

	declare export function date(): Date

	declare export function isDirty(): boolean

	declare export function isTagDirty(): boolean

	declare export function message(): string

	declare export function remoteUrl(): string

	declare export function tag(makeDirty?: boolean): string

    }
