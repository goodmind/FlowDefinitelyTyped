declare module 'elastic-apm-node' {
        declare module.exports: typeof a

	declare var a: a$a$Agent;
	declare interface a$Agent {
currentTransaction: any,
logger: any,
start(opts?: a$AgentOptions): a$Agent,
isStarted(): boolean,
addFilter(filter: (payload: any) => any): void,
setUserContext(context: a$Context): boolean,
setCustomContext(context: any): boolean,
setTag(name: string, value: string): any,
addTags(tags: any): any,
captureError(
error: Error | string | {[key: string]: any},
options?: {[key: string]: any},
callback?: (err?: any) => any): void,
startTransaction(name?: string, type?: string): any,
endTransaction(result?: any): any,
setTransactionName(name: string): any,
startSpan(name?: string, type?: any): any,
handleUncaughtExceptions(callback?: (err: Error) => any): any,
flush(callback?: any): any,
lambda(type: any, handler?: any): any
} 

declare interface a$AgentOptions {
serviceName?: string,
secretToken?: string,
serverUrl?: string,
verifyServerCert?: boolean,
serviceVersion?: string,
active?: boolean,
instrument?: boolean,
asyncHooks?: boolean,
ignoreUrls?: Array<RegExp | string>,
ignoreUserAgents?: Array<RegExp | string>,
captureBody?: string,
errorOnAbortedRequests?: boolean,
abortedErrorThreshold?: number,
transactionSampleRate?: number,
hostname?: string,
frameworkName?: string,
frameworkVersion?: string,
logLevel?: string,
logger?: any,
captureExceptions?: boolean,
captureErrorLogStackTraces?: string,
captureSpanStackTraces?: boolean,
sourceLinesErrorAppFrames?: number,
sourceLinesErrorLibraryFrames?: number,
sourceLinesSpanAppFrames?: number,
sourceLinesSpanLibraryFrames?: number,
errorMessageMaxLength?: number,
stackTraceLimit?: number,
transactionMaxSpans?: number,
flushInterval?: number,
serverTimeout?: number,
maxQueueSize?: number,
filterHttpHeaders?: boolean,
disableInstrumentations?: string
} 

declare interface a$Context {
id?: string,
username?: string,
email?: string
} 
    }
