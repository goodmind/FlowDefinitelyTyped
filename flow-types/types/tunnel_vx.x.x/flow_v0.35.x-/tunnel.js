declare module 'tunnel' {
        import type {
          Agent
        } from 'http';

	declare export function httpOverHttp(options?: HttpOptions): Agent

	declare export function httpsOverHttp(options?: HttpsOverHttpOptions): Agent

	declare export function httpOverHttps(options?: HttpOverHttpsOptions): Agent

	declare export function httpsOverHttps(options?: HttpsOverHttpsOptions): Agent

	declare export interface HttpOptions {
maxSockets?: number,
proxy?: ProxyOptions
} 
	declare export type HttpsOverHttpOptions = {
ca?: Buffer[],
key?: Buffer,
cert?: Buffer
} & HttpOptions

	declare export type HttpOverHttpsOptions = {
proxy?: HttpsProxyOptions
} & HttpOptions

	declare export type HttpsOverHttpsOptions = {
proxy?: HttpsProxyOptions
} & HttpsOverHttpOptions

	declare export interface ProxyOptions {
host?: string,
port?: number,
localAddress?: string,
proxyAuth?: string,
headers: {
[key: string]: any
}
} 
	declare export type HttpsProxyOptions = {
ca?: Buffer[],
servername?: string,
key?: Buffer,
cert?: Buffer
} & ProxyOptions

    }
