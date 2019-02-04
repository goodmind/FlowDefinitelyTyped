declare module 'app-module-path' {
        declare export function addPath(path: string, parent?: any): void

	declare export function enableForDir(dir: string): void

	declare export function removePath(path: string): void

    }
