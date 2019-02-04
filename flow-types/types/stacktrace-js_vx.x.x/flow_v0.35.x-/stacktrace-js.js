
      declare var npm$namespace$StackTrace: {
        get: typeof StackTrace$get,
getSync: typeof StackTrace$getSync,
fromError: typeof StackTrace$fromError,
generateArtificially: typeof StackTrace$generateArtificially,
instrument: typeof StackTrace$instrument,
deinstrument: typeof StackTrace$deinstrument,
report: typeof StackTrace$report,
        
      }
declare export interface StackTrace$SourceCache {
[key: string]: string | Promise<string>
} 


/**
 * Options for StackTrace
 * @param filter Function(StackFrame => Boolean) - Only include stack entries matching for which filter returns true
 * @param sourceCache Object (String URL => String Source) - Pre-populate source cache to avoid network requests
 * @param offline Boolean (default: false) - Set to true to prevent all network requests
 */
declare export interface StackTrace$StackTraceOptions {
filter?: (stackFrame: StackTrace$StackFrame) => boolean,
sourceCache?: StackTrace$SourceCache,
offline?: boolean
} 

declare export interface StackTrace$StackFrame {
constructor(
functionName: string,
args: any,
fileName: string,
lineNumber: number,
columnNumber: number): StackTrace$StackFrame,
functionName: string,
args: any,
fileName: string,
lineNumber: number,
columnNumber: number,
source: string,
isEval: boolean,
isNative: boolean,
toString(): string
} 

declare export interface StackTrace$RequestOptions {
headers: {
[id: string]: string
}
} 


/**
 * Get a backtrace from invocation point.
 * @param options Options Object
 * @return Array[StackFrame]
 */
declare export function StackTrace$get(options?: StackTrace$StackTraceOptions): Promise<StackTrace$StackFrame[]>



/**
 * Get a backtrace from invocation point synchronously.
 * @param options Options Object
 * @return Array[StackFrame]
 */
declare export function StackTrace$getSync(options?: StackTrace$StackTraceOptions): StackTrace$StackFrame[]



/**
 * Given an error object, parse it.
 * @param error Error object
 * @param options Object for options
 * @return Array[StackFrame]
 */
declare export function StackTrace$fromError(
error: Error,
options?: StackTrace$StackTraceOptions): Promise<StackTrace$StackFrame[]>



/**
 * Use StackGenerator to generate a backtrace.
 * @param options Object options
 * @returns Array[StackFrame]
 */
declare export function StackTrace$generateArtificially(options?: StackTrace$StackTraceOptions): Promise<StackTrace$StackFrame[]>



/**
 * Given a function, wrap it such that invocations trigger a callback that
 * is called with a stack trace.
 * @param {Function} fn to be instrumented
 * @param {Function} callback function to call with a stack trace on invocation
 * @param {Function} errback optional function to call with error if unable to get stack trace.
 * @param {Object} thisArg optional context object (e.g. window)
 * @return {Function} instrumented function
 */
declare export function StackTrace$instrument<TFunc: Function>(
fn: TFunc,
callback: (stackFrames: StackTrace$StackFrame[]) => void,
errback?: (error: Error) => void,
thisArg?: any): TFunc



/**
 * Given a function that has been instrumented,
 * revert the function to it's original (non-instrumented) state.
 * @param {Function} fn
 * @return {Function} original function
 */
declare export function StackTrace$deinstrument<TFunc: Function>(fn: TFunc): TFunc



/**
 * Given an Array of StackFrames, serialize and POST to given URL.
 * @param {Array} stackframes - Previously wrapped Function
 * @param {string} url - URL to POST stack JSON to
 * @param {string} message - Optional Error message
 * @param {Object} requestOptions - Request Headers {headers: {key: "value"}}
 * @return {Promise<string>} - Promise is resolved with response text from POST request.
 */
declare export function StackTrace$report(
stackframes: StackTrace$StackFrame[],
url: string,
message?: string,
requestOptions?: StackTrace$RequestOptions): Promise<string>
declare module 'stacktrace-js' {
        declare module.exports: typeof StackTrace

    }
