declare module 'subtitle' {
        declare export interface subTitleType {
start: number | string,
end: number | string,
text: string,
setting?: string
} 
	declare export function parse(srtOrVtt: string): subTitleType[]

	declare export function stringify(captions: $ReadOnlyArray<subTitleType>): string

	declare export function resync(captions: $ReadOnlyArray<subTitleType>, time: number): subTitleType[]

	declare export function toMs(timestamp: string): number

	declare export function toSrtTime(timestamp: number): string

	declare export function toVttTime(timestamp: number): string

    }
