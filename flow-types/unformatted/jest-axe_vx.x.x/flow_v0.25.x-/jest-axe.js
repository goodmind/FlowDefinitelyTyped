declare module 'jest-axe' {
        import type {
          AxeResults,Result,RunOnly
        } from 'axe-core';

	
/**
 * Version of the aXe verifier with defaults set.
 * @remarks You can still pass additional options to this new instance;
they will be merged with the defaults.
 */
declare export var axe: JestAxe;
	
/**
 * Core options to run aXe.
 */
declare export interface AxeOptions {
elementRef?: boolean,
iframes?: boolean,
rules?: {[key: string]: any},
runOnly?: RunOnly,
selectors?: boolean
} 
	
/**
 * Runs aXe on HTML.
 * @param html Raw HTML string to verify with aXe.
 * @param options Options to run aXe.
 * @returns Promise for the results of running aXe.
 */
declare export type JestAxe = (html: string, options?: AxeOptions) => Promise<AxeResults>;
	
/**
 * Creates a new aXe verifier function.
 * @param options Options to run aXe.
 * @returns New aXe verifier function.
 */
declare export function configureAxe(options?: AxeOptions): JestAxe

	
/**
 * Results from asserting whether aXe verification passed.
 */
declare export interface AssertionsResult {

/**
 * Actual checked aXe verification results.
 */
actual: Result[],

/**
 * @returns Message from the Jest assertion.
 */
message(): string,

/**
 * Whether the assertion passed.
 */
pass: boolean
} 
	
/**
 * Asserts an aXe-verified result has no violations.
 * @param results aXe verification result, if not running via expect().
 * @returns Jest expectations for the aXe result.
 */
declare export type IToHaveNoViolations = (results?: $Shape<AxeResults>) => AssertionsResult;
	declare export var toHaveNoViolations: {
toHaveNoViolations: IToHaveNoViolations
};
	declare module 'global' {
        declare interface jest$Matchers<R> {
toHaveNoViolations: IToHaveNoViolations
} 
	declare interface Node {} 
    }

    }
