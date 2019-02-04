declare module 'is-negated-glob' {
        declare function isNegatedGlob(pattern: string): isNegatedGlob$isNegatedGlob$Result

	declare interface isNegatedGlob$Result {
negated: boolean,
original: string,
pattern: string
} 
	declare module.exports: typeof isNegatedGlob

    }
