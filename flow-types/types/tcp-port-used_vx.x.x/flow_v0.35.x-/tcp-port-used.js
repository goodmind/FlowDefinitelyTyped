declare module 'tcp-port-used' {
        declare export interface TcpPortUsedOptions {
port: number,
host: string,
status: boolean,
retryTimeMs: number,
timeOutMs: number
} 
	declare export function check(port: number | TcpPortUsedOptions, host?: string): Promise<boolean>

	declare export function waitForStatus(
port: number | TcpPortUsedOptions,
host?: string,
inUse?: boolean,
retryTimeMs?: number,
timeOutMs?: number): Promise<void>

	declare export function waitUntilFree(
port: number | TcpPortUsedOptions,
retryTimeMs?: number,
timeOutMs?: number): Promise<void>

	declare export function waitUntilFreeOnHost(
port: number | TcpPortUsedOptions,
host?: string,
retryTimeMs?: number,
timeOutMs?: number): Promise<void>

	declare export function waitUntilUsed(
port: number | TcpPortUsedOptions,
retryTimeMs?: number,
timeOutMs?: number): Promise<void>

	declare export function waitUntilUsedOnHost(
port: number | TcpPortUsedOptions,
host?: string,
retryTimeMs?: number,
timeOutMs?: number): Promise<void>

    }
