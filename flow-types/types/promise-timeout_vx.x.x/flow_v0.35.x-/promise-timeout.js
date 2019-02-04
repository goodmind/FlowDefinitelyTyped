declare module 'promise-timeout' {
        declare export function timeout<T>(promise: Promise<T>, timeoutMillis: number): Promise<T>

	declare export class TimeoutError mixins Error {}
    }
