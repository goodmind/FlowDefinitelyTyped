declare module 'website-scraper' {
        import typeof * as request from 'request';

	declare interface websiteScraper$Url {
url: string,
filename: string
} 

declare interface websiteScraper$SubDirectory {
directory: string,
extensions: string[]
} 

declare interface websiteScraper$Source {
selector: string,
attr: string
} 

declare interface websiteScraper$RequestOptions {
headers: request.Headers
} 

declare interface websiteScraper$Options {
urls: Array<string | websiteScraper$Url>,
directory: string,
urlFilter?: (url: string) => boolean,
filenameGenerator?: string,
defaultFilename?: string,
prettifyUrls?: boolean,
sources?: websiteScraper$Source[],
subdirectories?: websiteScraper$SubDirectory[] | null,
request?: websiteScraper$RequestOptions,
recursive?: boolean,
maxDepth?: number,
ignoreErrors?: boolean
} 

declare interface websiteScraper$Resource {
url: string,
filename: string,
assets: websiteScraper$Resource[]
} 

declare interface websiteScraper$Callback {
(error: any | null, result: websiteScraper$Resource[] | null): void
} 

declare interface websiteScraper$scrape {
(options: websiteScraper$Options, callback: websiteScraper$Callback): void,
(options: websiteScraper$Options): Promise<websiteScraper$Resource[]>
} 
	declare var websiteScraper: websiteScraper$websiteScraper$scrape;
	declare module.exports: typeof websiteScraper

    }
