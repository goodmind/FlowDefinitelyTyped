declare module 'set-cookie-parser' {
        declare function SetCookieParser(
input: string | $ReadOnlyArray<string> | http.IncomingMessage): SetCookieParser$SetCookieParser$Cookie[]

	
      declare var npm$namespace$SetCookieParser: {
        parse: typeof SetCookieParser$parse,
splitCookiesString: typeof SetCookieParser$splitCookiesString,
        
      }
declare function SetCookieParser$parse(
input: string | $ReadOnlyArray<string> | http.IncomingMessage): SetCookieParser$Cookie[]


declare function SetCookieParser$splitCookiesString(input: string | $ReadOnlyArray<string> | void): string[]


declare interface SetCookieParser$Cookie {
name: string,
value: string,
path?: string,
expires?: Date,
maxAge?: number,
domain?: string,
secure?: boolean,
httpOnly?: boolean
} 
	declare module.exports: typeof SetCookieParser

    }
