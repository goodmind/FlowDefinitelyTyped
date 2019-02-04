declare module 'jasmine-promise-matchers' {
        declare function installPromiseMatchers(): void

	declare interface jasmine$Matchers<T> {

/**
 * Verifies that a Promise is (or has been) rejected.
 */
toBeRejected(): boolean,

/**
 * Verifies that a Promise is (or has been) rejected with the specified parameter.
 */
toBeRejectedWith(value: any): boolean,

/**
 * Verifies that a Promise is (or has been) resolved.
 */
toBeResolved(): boolean,

/**
 * Verifies that a Promise is (or has been) resolved with the specified parameter.
 */
toBeResolvedWith(value: any): boolean
} 
    }
