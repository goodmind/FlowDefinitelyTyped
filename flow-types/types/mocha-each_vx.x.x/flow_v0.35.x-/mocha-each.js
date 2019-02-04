declare module 'mocha-each' {
        import type {
          ITest,ITestDefinition,ITestCallbackContext
        } from 'mocha';

	
/**
 * This function takes an array collections of parameters to be used in
 * a series of mocha tests, defined using the `it` notation common to
 * Mocha.
 */
declare function forEach(
parameters: $ReadOnlyArray<any>,
defaultIt?: ITestDefinition): {
it: ForEachITestDefinition
}

	
/**
 * This interface describes the kind of `it` available from a `forEach` call.
 * The result is very similar to Mocha's `ITestDefinition` interface.
 */
declare interface ForEachITestDefinition {
(expectation: string, callback?: (...args: any[]) => any): ITest,
only(expectation: string, callback?: (...args: any[]) => any): ITest,
skip(expectation: string, callback?: (...args: any[]) => any): ITest
} 
	declare module.exports: typeof forEach

    }
