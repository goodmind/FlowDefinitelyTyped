declare module 'connect-slashes' {
        
/**
 * @see https://github.com/avinoamr/connect-slashes#usage
 */
declare function slashes(
addTrailingSlashes?: boolean,
options?: slashes$slashes$Options): express.RequestHandler

	
/**
 * Additional settings
 * @see https://github.com/avinoamr/connect-slashes#additional-settings
 */
declare interface slashes$Options {
base?: string,
code?: number,
headers?: {
[field: string]: string
}
} 
	declare module.exports: typeof slashes

    }
