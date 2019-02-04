declare module 'parse-link-header' {
        declare interface parseLinkHeader$Link {
url: string,
rel: string,
[queryParam: string]: string
} 

declare interface parseLinkHeader$Links {
[rel: string]: parseLinkHeader$Link
} 
	declare function parseLinkHeader(linkHeader: string): parseLinkHeader$parseLinkHeader$Links | null

	declare module.exports: typeof parseLinkHeader

    }
