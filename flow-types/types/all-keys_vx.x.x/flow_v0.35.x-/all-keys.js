declare module 'all-keys' {
        declare module.exports: typeof allKeys

	
/**
 * Get all property keys of an object including non-enumerable and inherited ones.
 * Like [Reflect.ownKeys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
 * but traverses up the prototype-chain.
 */
declare function allKeys(obj: {[key: string]: any}, options?: allKeys$allKeys$Options): Set<string>

	declare interface allKeys$Options {

/**
 * Include `Object.prototype` properties like `isPrototypeOf`.
 * @default true
 */
includeObjectPrototype?: boolean,

/**
 * Include [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keys.
 * @default true
 */
includeSymbols?: boolean
} 
    }
