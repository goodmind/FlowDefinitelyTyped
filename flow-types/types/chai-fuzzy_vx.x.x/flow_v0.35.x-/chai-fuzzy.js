declare module 'chai-fuzzy' {
        declare module 'global' {
        declare interface Chai$Assertion {

/**
 * Compare object attributes and values rather than checking to see if
 * they're the same reference.
 */
like(expected: any, message?: string): Chai$Assertion,

/**
 * Compare object attributes and values rather than checking to see if
 * they're the same reference.
 */
notLike(expected: any, message?: string): Chai$Assertion,

/**
 * Check the first level of the container for a value like the one provided.
 */
containOneLike(expected: any, message?: string): Chai$Assertion,

/**
 * Check the first level of the container for a value like the one provided.
 */
notContainOneLike(expected: any, message?: string): Chai$Assertion,

/**
 * Check that the given javascript object is like the JSON-ified expected
 * value. Useful for checking stringification and parsing of an object.
 */
jsonOf(expected: any, message?: string): Chai$Assertion,

/**
 * Check that the given javascript object is like the JSON-ified expected
 * value. Useful for checking stringification and parsing of an object.
 */
notJsonOf(expected: any, message?: string): Chai$Assertion
} 

declare interface Chai$Assert {

/**
 * Compare object attributes and values rather than checking to see if
 * they're the same reference.
 */
like(actual: any, expected: any, message?: string): void,

/**
 * Compare object attributes and values rather than checking to see if
 * they're the same reference.
 */
notLike(actual: any, expected: any, message?: string): void,

/**
 * Check the first level of the container for a value like the one provided.
 */
containOneLike(actual: any, expected: any, message?: string): void,

/**
 * Check the first level of the container for a value like the one provided.
 */
notContainOneLike(actual: any, expected: any, message?: string): void,

/**
 * Check that the given javascript object is like the JSON-ified expected
 * value. Useful for checking stringification and parsing of an object.
 */
jsonOf(actual: any, expected: any, message?: string): void,

/**
 * Check that the given javascript object is like the JSON-ified expected
 * value. Useful for checking stringification and parsing of an object.
 */
notJsonOf(actual: any, expected: any, message?: string): void
} 
    }

	declare function chaiFuzzy(chai: any, utils: any): void

	declare module.exports: typeof chaiFuzzy

    }
