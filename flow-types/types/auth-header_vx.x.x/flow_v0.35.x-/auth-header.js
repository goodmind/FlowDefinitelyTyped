declare module 'auth-header' {
        declare type Params = Array<[string, string | $ReadOnlyArray<string>]> | {
[key: string]: string | $ReadOnlyArray<string>
};
	declare export {
          Params
        }

	declare export interface TokenOptions {
scheme: string,
token?: string,
params?: Params
} 
	declare export interface Token {
scheme: string,
params: {
[key: string]: string | string[]
},
token: null | string | string[]
} 
	declare export function format(token: TokenOptions): string

	declare export function format(scheme: string, token?: string, params?: Params): string

	declare export function parse(header: string): Token

    }
