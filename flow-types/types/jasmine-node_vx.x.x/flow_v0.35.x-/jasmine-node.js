declare function it(
expectation: string,
assertion: (done: (err?: any) => void) => void,
timeout?: number): void
declare interface jasmine$Env {
defaultTimeoutInterval: number
} 

declare interface jasmine$ExecuteSpecsOptions {
specFolders: string[],
onComplete?: (runner: jasmine$Runner) => void,
isVerbose?: boolean,
showColors?: boolean,
teamcity?: string | boolean,
useRequireJs?: boolean,
regExpSpec: RegExp,
junitreport?: {
report: boolean,
savePath: string,
useDotNotation: boolean,
consolidate: boolean
},
includeStackTrace?: boolean,
growl?: boolean
} 

declare interface jasmine$JasmineNode {
executeSpecsInFolder(options: jasmine$ExecuteSpecsOptions): void,
loadHelpersInFolder(path: string, pattern: RegExp): void
} declare module 'jasmine-node' {
        declare var jasmine: jasmine$jasmine$JasmineNode;
	declare module.exports: typeof jasmine

    }
