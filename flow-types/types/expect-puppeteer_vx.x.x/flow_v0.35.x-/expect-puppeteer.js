declare module 'expect-puppeteer' {
        import type {
          ElementHandle,Page,Dialog
        } from 'puppeteer';

	
/**
 * Interval at which pageFunctions may be executed.
 */
declare type ExpectPolling = number | "mutation" | "raf";
	
/**
 * Configures how to poll for an element.
 */
declare interface ExpectTimingActions {

/**
 * An interval at which the pageFunction is executed. Defaults to "raf".
 */
polling?: ExpectPolling,

/**
 * Maximum time to wait for in milliseconds. Defaults to 500.
 */
timeout?: number
} 
	declare type ExpectToClickOptions = {

/**
 * A text or a RegExp to match in element textContent.
 */
text?: string | RegExp
} & ExpectTimingActions

	declare interface ExpectPuppeteer {
toClick(selector: string, options?: ExpectToClickOptions): Promise<void>,
toDisplayDialog(block: () => Promise<void>): Promise<Dialog>,
toFill(selector: string, value: string, options?: ExpectTimingActions): Promise<void>,
toMatch(selector: string, options?: ExpectTimingActions): Promise<void>,
toMatchElement(selector: string, options?: ExpectToClickOptions): Promise<void>,
toSelect(
selector: string,
valueOrText: string,
options?: ExpectTimingActions): Promise<void>,
toUploadFile(
selector: string,
filePath: string,
options?: ExpectTimingActions): Promise<void>
} 
	declare module 'global' {
        declare interface jest$Matchers<R> {
toClick(selector: string, options?: ExpectToClickOptions): Promise<void>,
toDisplayDialog(block: () => Promise<void>): Promise<Dialog>,
toFill(selector: string, value: string, options?: ExpectTimingActions): Promise<void>,
toFillForm(
selector: string,
value: {
[key: string]: any
},
options?: ExpectTimingActions): Promise<void>,
toMatch(selector: string, options?: ExpectTimingActions): Promise<void>,
toMatchElement(selector: string, options?: ExpectToClickOptions): Promise<void>,
toSelect(
selector: string,
valueOrText: string,
options?: ExpectTimingActions): Promise<void>,
toUploadFile(
selector: string,
filePath: string,
options?: ExpectTimingActions): Promise<void>
} 
    }

	declare function expectPuppeteer(instance: ElementHandle | Page): ExpectPuppeteer

	declare module.exports: typeof expectPuppeteer

    }
