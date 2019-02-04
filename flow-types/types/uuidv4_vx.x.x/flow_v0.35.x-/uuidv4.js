declare module 'uuidv4' {
        declare module.exports: typeof uuidv4

	declare function uuidv4(): string

	
      declare var npm$namespace$uuidv4: {
        is: typeof uuidv4$is,
empty: typeof uuidv4$empty,
fromString: typeof uuidv4$fromString,
        
      }
declare type uuidv4$EmptyUUIDv4 = "00000000-0000-0000-0000-000000000000";

declare function uuidv4$is(value: string): boolean


declare function uuidv4$empty(): string


declare function uuidv4$fromString(text: string): string

    }
