declare module 'abbrev' {
        declare module.exports: typeof abbrev

	declare function abbrev(words: string[]): {
[abbreviation: string]: string
}

	declare function abbrev(...words: string[]): {
[abbreviation: string]: string
}

	
      declare var npm$namespace$abbrev: {
        monkeyPatch: typeof abbrev$monkeyPatch,
        
      }
declare function abbrev$monkeyPatch(): void

	declare module 'global' {
        declare interface Array<T> {
abbrev(): {
[abbreviation: string]: string
}
} 
	declare interface ReadonlyArray<T> {
abbrev(): {
[abbreviation: string]: string
}
} 
	declare interface Object {
abbrev(): {
[abbreviation: string]: string
}
} 
    }

    }
