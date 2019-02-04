declare module 'git-rev' {
        declare export function short(callback: (short: string) => void): void

	declare export function long(callback: (long: string) => void): void

	declare export function branch(callback: (branch: string) => void): void

	declare export function tag(callback: (tag: string) => void): void

	declare export function log(callback: (log: string[][]) => void): void

    }
