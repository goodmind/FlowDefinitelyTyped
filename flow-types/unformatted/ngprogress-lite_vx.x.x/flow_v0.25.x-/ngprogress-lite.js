declare module 'angular' {
        export interface progressLite$INgProgressLite {
set(num: number): progressLite$INgProgressLite,
get(): number,
start(): progressLite$INgProgressLite,
inc(amount?: number): progressLite$INgProgressLite,
done(): void
} 

export interface progressLite$IConfigurationOptions {
minimum: number,
speed: number,
ease: string,
trickleRate: number,
trickleSpeed: number,
template: string
} 

export interface progressLite$INgProgressLiteProvider {
settings: progressLite$IConfigurationOptions
} 
    }
declare module 'ngprogress-lite' {
        import typeof * as angular from 'angular';

    }
