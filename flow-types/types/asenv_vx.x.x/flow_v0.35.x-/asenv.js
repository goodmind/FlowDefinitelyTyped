declare module 'asenv' {
        declare export function getEnv(): string

	declare export function isDevelopment(): boolean

	declare export function isProduction(): boolean

	declare export function isTest(): boolean

	declare export function setEnv(env: string): void

	declare export function unlessProduction(handle: () => any): any

    }
