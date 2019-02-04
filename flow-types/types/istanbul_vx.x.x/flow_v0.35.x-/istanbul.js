declare module 'istanbul' {
        declare interface istanbul$Istanbul {
new (options?: any): istanbul$Istanbul,
istanbul$Collector: istanbul$Collector,
config: istanbul$Config,
istanbul$ContentWriter: istanbul$ContentWriter,
istanbul$FileWriter: istanbul$FileWriter,
hook: istanbul$Hook,
istanbul$Instrumenter: istanbul$Instrumenter,
istanbul$Report: istanbul$Report,
istanbul$Reporter: istanbul$Reporter,
istanbul$Store: istanbul$Store,
utils: istanbul$ObjectUtils,
VERSION: string,
istanbul$Writer: istanbul$Writer
} 

declare interface istanbul$Collector {
new (options?: any): istanbul$Collector,
add(coverage: any, testName?: string): void,
getFinalCoverage(): any
} 

declare interface istanbul$Config {} 

declare interface istanbul$ContentWriter {} 

declare interface istanbul$FileWriter {} 

declare interface istanbul$Hook {} 

declare interface istanbul$Instrumenter {
new (options?: any): istanbul$Instrumenter,
instrumentSync(code: string, filename: string): string
} 

declare interface istanbul$Report {} 

declare interface istanbul$Configuration {
new (obj: any, overrides: any): istanbul$Configuration
} 

declare interface istanbul$Reporter {
new (cfg?: istanbul$Configuration, dir?: string): istanbul$Reporter,
add(fmt: string): void,
addAll(fmts: Array<string>): void,
write(collector: istanbul$Collector, sync: boolean, callback: Function): void
} 

declare interface istanbul$Store {} 

declare interface istanbul$ObjectUtils {} 

declare interface istanbul$Writer {} 
	declare var istanbul: istanbul$istanbul$Istanbul;
	declare module.exports: typeof istanbul

    }
