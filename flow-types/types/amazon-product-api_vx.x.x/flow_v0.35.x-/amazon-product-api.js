declare module 'amazon-product-api' {
        declare interface ICredentials {
awsId: string,
awsSecret: string,
awsTag: string
} 
	declare interface IAmazonProductQueryCallback {
(err: string, results: Object[]): void
} 
	declare interface IItemSearchOptions {
condition?: string,
keywords?: string,
responseGroup?: string,
searchIndex?: string,
itemPage?: number,
sort?: string
} 
	declare interface IItemLookupOptions {
condition?: string,
idType?: string,
includeReviewsSummary?: boolean,
itemId?: string | string[],
responseGroup?: string,
searchIndex?: string,
truncateReviewsAt?: number,
variationPage?: string,
domain?: string,
request?: Function
} 
	declare interface IBrowseNodeLookupOptions {
browseNodeId?: string,
responseGroup?: string
} 
	declare interface IAmazonProductClient {
itemSearch(
query: IItemSearchOptions,
callback?: IAmazonProductQueryCallback): Promise<Object[]>,
itemLookup(
query: IItemLookupOptions,
callback?: IAmazonProductQueryCallback): Promise<Object[]>,
browseNodeLookup(
query: IBrowseNodeLookupOptions,
callback?: IAmazonProductQueryCallback): Promise<Object[]>
} 
	declare export function createClient(credentials: ICredentials): IAmazonProductClient

    }
