declare module 'express-sitemap-xml' {
        import typeof * as express from 'express';

	declare export interface LeafObject {
changeFreq?: string,
lastMod?: string | Date,
url: string
} 
	declare export type SitemapLeaf = string | LeafObject;
	declare export interface Sitemap {
[leaf: string]: string
} 
	declare function expressSitemapXml(
getUrls: (() => (SitemapLeaf[] | Promise<SitemapLeaf[]>)),
base: string): express.RequestHandler

	
      declare var npm$namespace$expressSitemapXml: {
        buildSitemaps: typeof expressSitemapXml$buildSitemaps,
        
      }
declare function expressSitemapXml$buildSitemaps(urls: SitemapLeaf[], base: string): Promise<Sitemap>

	declare export default typeof expressSitemapXml

    }
