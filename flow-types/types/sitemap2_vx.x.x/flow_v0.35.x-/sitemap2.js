declare module 'sitemap2' {
        declare var sitemap2: Sitemap;
	declare module.exports: typeof sitemap2

	declare interface Sitemap {
new (conf?: SitemapConfig): Sitemap,
addUrl(urlData: UrlData | UrlData[] | string | string[]): this,
addSitemap(sm: Sitemap): this,
toXML(): SitemapXml[],
hostName: string,
fileName: string,
limit: number,
urls: string[],
childrens: Sitemap[]
} 
	declare interface SitemapConfig {
hostName?: string,
fileName?: string,
limit?: number,
cacheTime?: number,
xslUrl?: string,
urls?: string[],
childrens?: Sitemap[]
} 
	declare interface UrlData {
url: string,
chengefreq?: string,
priority?: number | string,
lastmod?: Date,
lastmodWithTime?: boolean,
lastmodInISO?: boolean,
video?: {
title: string,
description: string,
thumbnail_loc: string,
content_loc: string
}
} 
	declare interface SitemapXml {
fileName: string,
xml: string
} 
    }
