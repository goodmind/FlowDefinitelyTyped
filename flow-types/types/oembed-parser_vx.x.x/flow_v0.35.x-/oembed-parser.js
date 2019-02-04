declare module 'oembed-parser' {
        declare export function extract(url: string): Promise<OembedData>

	declare export function hasProvider(url: string): boolean

	declare export interface OembedData {
type: string,
version: string,
html: string,
provider_url: string,
provider_name: string
} 
    }
