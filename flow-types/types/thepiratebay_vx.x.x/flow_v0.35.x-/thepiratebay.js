declare module 'thepiratebay' {
        declare export function search(query?: string, options?: SearchOptions): Promise<TorrentSearchResult[]>

	declare export function getTorrent(
id: string | number | {
link: string,
[propName: string]: any
}): Promise<TorrentDetails>

	declare export function getComments(id: string | number): Promise<Comment[]>

	declare export function topTorrents(category?: number): Promise<TorrentSearchResult[]>

	declare export function recentTorrents(): Promise<TorrentSearchResult[]>

	declare export function userTorrents(user: string, options?: SearchOptions): Promise<TorrentSearchResult[]>

	declare export function getTvShow(id: string | number): Promise<TVSeason[]>

	declare export function getCategories(): Promise<CategoryGroup[]>

	declare export interface SearchOptions {
category?: string | number,
filter?: {
verified?: boolean
},
page?: number,
orderBy?: string,
sortBy?: string
} 
	declare export interface Category {
id: string,
name: string
} 
	declare export type CategoryGroup = {
subcategories: Category[]
} & Category

	declare export interface Torrent {
id: string,
name: string,
size: string,
link: string,
seeders: string,
leechers: string,
uploadDate: string,
magnetLink: string,
uploader: string,
uploaderLink: string
} 
	declare export type TorrentDetails = {
description: string
} & Torrent

	declare export type TorrentSearchResult = {
category: Category,
subcategory: Category,
verified: boolean
} & Torrent

	declare export interface Comment {
user: string,
comment: string
} 
	declare export interface TVTorrent {
id: string,
title: string,
link: string
} 
	declare export interface TVSeason {
title: string,
torrents: TVTorrent[]
} 
    }
