declare module 'proxy-verifier' {
        import type {
          RequestOptions
        } from 'request';

	declare export function testAll(
proxy: Proxy,
options: RequestOptions,
cb: (error: any, result: AllResults) => void): void

	declare export function testAll(proxy: Proxy, cb: (error: any, result: AllResults) => void): void

	declare export function testProtocol(
proxy: Proxy,
options: RequestOptions,
cb: (error: any, result: Result) => void): void

	declare export function testProtocol(proxy: Proxy, cb: (error: any, result: Result) => void): void

	declare export function testProtocols(
proxy: Proxy,
options: RequestOptions,
cb: (error: any, result: ProtocolResult) => void): void

	declare export function testProtocols(proxy: Proxy, cb: (error: any, result: ProtocolResult) => void): void

	declare export function testAnonymityLevel(
proxy: Proxy,
options: RequestOptions,
cb: (error: any, result: string) => void): void

	declare export function testAnonymityLevel(proxy: Proxy, cb: (error: any, result: string) => void): void

	declare export function testTunnel(
proxy: Proxy,
options: RequestOptions,
cb: (error: any, result: Result) => void): void

	declare export function testTunnel(proxy: Proxy, cb: (error: any, result: Result) => void): void

	declare export function test(
proxy: Proxy,
options: TestOptions,
cb: (error: any, result: CustomTestResult) => void): void

	declare export function test(proxy: Proxy, cb: (error: any, result: CustomTestResult) => void): void

	declare export interface Proxy {
ipAddress: string,
port: number,

/**
 * Proxy-Authorization header
 */
auth?: string,
protocol?: Protocol,
protocols?: Protocol[]
} 
	declare export type Protocol = "http" | "https" | "socks5" | "socks4";
	declare export type AnonymityLevel = "transparent" | "anonymous" | "elite";
	declare export interface AllResults {
anonymityLevel?: AnonymityLevel,
protocols?: ProtocolResult,
tunnel?: Result
} 
	declare export type Result = WorkingResult | NotWorkingResult;
	declare export interface WorkingResult {
ok: true
} 
	declare export interface NotWorkingResult {
ok: false,
error: {
message: string,
code: string
}
} 
	declare export interface ProtocolResult {
[key: string]: Result
} 
	declare export interface TestOptions {
testUrl: string,
testFn(data: string, status: number, headers: Headers): void
} 
	declare export interface Headers {
[key: string]: string
} 
	declare export interface CustomTestBaseResult {
data: string,
status: number,
headers: Headers
} 
	declare export type CustomTestResult = CustomTestWorkingResult | CustomTestNotWorkingResult;
	declare export type CustomTestWorkingResult = {
ok: true
} & CustomTestBaseResult

	declare export type CustomTestNotWorkingResult = {
ok: false,
error: {
message: string,
code: string
}
} & CustomTestBaseResult

    }
