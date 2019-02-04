declare module 'torrent-search-api' {
        declare export interface Torrent {
title: string,
time: string,
size: string,
magnet: string,
desc: string,
provider: string
} 
	declare export interface TorrentProvider {
name: string,
baseUrl: string,
requireAuthentification: boolean,
supportTokenAuthentification: boolean,
supportCookiesAuthentification: boolean,
supportCredentialsAuthentification: boolean,
loginUrl: string,
loginQueryString: string,
searchUrl: string,
categories: any,
defaultCategory: string,
resultsPerPageCount: number,
itemsSelector: string,
itemSelectors: any,
paginateSelector: string,
torrentDetailsSelector: string,
enableCloudFareBypass: boolean,
headers: any,
magnetSelector: string,
autoFixUnstableUrl: boolean
} 
	declare export function lodProvider(providerParam: string): void

	declare export function loadProvider(providerParam: string | TorrentProvider): void

	declare export function addProvider(provider: string): void

	declare export function loadProviders(...args: string[]): void

	declare export function loadProviders(...args: TorrentProvider[]): void

	declare export function removeProvider(providerName: string): void

	declare export function enableProvider(providerName: string, args?: string[]): void

	declare export function enableProvider(providerName: string, ...args: string[]): void

	declare export function enablePublicProviders(): void

	declare export function disableProvider(providerName: string): void

	declare export function disableAllProviders(): void

	declare export function getProviders(): TorrentProvider[]

	declare export function getActiveProviders(): TorrentProvider[]

	declare export function isProviderActive(name: string): boolean

	declare export function search(query: string, category: string, limit: number): Promise<Torrent[]>

	declare export function search(
providers: string[],
query: string,
category: string,
limit: number): Promise<Torrent[]>

	declare export function getTorrentDetails(torrent: Torrent): Promise<string>

	declare export function downloadTorrent(torrent: Torrent, filenamePath?: string): Promise<string>

	declare export function overrideConfig(providerName: string, newConfig: TorrentProvider): Promise<string>

	declare export function getMagnet(torrent: Torrent): Promise<string>

	declare export function getProvider(name: string, throwOnError: boolean): string

    }
