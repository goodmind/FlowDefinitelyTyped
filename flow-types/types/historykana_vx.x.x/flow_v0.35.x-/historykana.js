declare module 'historykana' {
        
/**
 * Get Kana string from input history array.
 * @param histories Input History Array
 * @param options kanaRegexp : Hiragana detection regular expression rule.
 */
declare function historykana(histories: string[], options?: {[key: string]: any}): string

	declare module.exports: typeof historykana

    }
