declare module 'pg-escape' {
        declare module.exports: typeof escape

	declare function escape(fmt: string, ...args: any[]): string

	
      declare var npm$namespace$escape: {
        string: typeof escape$string,
dollarQuotedString: typeof escape$dollarQuotedString,
ident: typeof escape$ident,
literal: typeof escape$literal,
        
      }
declare function escape$string(val: string): string


declare function escape$dollarQuotedString(val: string): string


declare function escape$ident(val: string): string


declare function escape$literal(val: string): string

    }
