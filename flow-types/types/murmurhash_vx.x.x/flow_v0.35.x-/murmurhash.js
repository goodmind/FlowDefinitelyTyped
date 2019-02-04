declare module 'murmurhash' {
        declare module.exports: typeof murmurhash

	
/**
 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
 * @param key - ASCII only
 * @param seed - (optional) positive integer
 * @returns 32-bit positive integer hash
 */
declare function murmurhash(key: string, seed?: number): number

	
      declare var npm$namespace$murmurhash: {
        v3: typeof murmurhash$v3,
v2: typeof murmurhash$v2,
        
      }

/**
 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
 * @param key - ASCII only
 * @param seed - (optional) positive integer
 * @returns 32-bit positive integer hash
 */
declare function murmurhash$v3(key: string, seed?: number): number



/**
 * JS Implementation of MurmurHash2
 * @param str - ASCII only
 * @param seed - (optional) positive integer
 * @returns 32-bit positive integer hash
 */
declare function murmurhash$v2(str: string, seed?: number): number

    }
