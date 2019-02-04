declare module 'protractor-browser-logs' {
        import typeof * as webdriver from 'selenium-webdriver';

	import type {
          ProtractorBrowser
        } from 'protractor/built';

	declare export interface BrowserLogOptions {
reporters?: Array<(entries: Entry[]) => void>
} 
	declare export type matchPredicateFunction = (entry: Entry) => boolean;
	declare export type matchPredicate = string | RegExp | matchPredicateFunction;
	declare export interface BrowserLogs {
ERROR: matchPredicateFunction,
WARNING: matchPredicateFunction,
DEBUG: matchPredicateFunction,
INFO: matchPredicateFunction,
LOG: matchPredicateFunction,
or(a: matchPredicateFunction, b: matchPredicateFunction): matchPredicateFunction,
and(a: matchPredicateFunction, b: matchPredicateFunction): matchPredicateFunction,
reset(): void,
logs(): Entry[],
verify(): void,
ignore(...matches: matchPredicate[]): matchPredicateFunction[],
expect(...matches: matchPredicate[]): matchPredicateFunction[]
} 
	declare export default function browserLogs(browser: ProtractorBrowser, options?: BrowserLogOptions): BrowserLogs

    }
