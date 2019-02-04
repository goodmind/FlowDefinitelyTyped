declare module 'promisify-node' {
        declare module.exports: typeof promisify

	
/**
 * Public API for Promisify.  Will resolve modules names using `require`.
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} name - Can be a module name, object, or function.
 * @param {Function} test - Optional function to identify async methods.
 * @param {Boolean} noMutate - Optional set to true to avoid mutating the target.
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"} exports - The resolved value from require or passed in value.
 */
declare function promisify(name: string | Object | Function, test?: Function, noMutate?: boolean): any

    }
