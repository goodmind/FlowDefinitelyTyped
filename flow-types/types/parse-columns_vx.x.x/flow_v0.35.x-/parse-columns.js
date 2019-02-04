declare module 'parse-columns' {
        declare module.exports: typeof parseColumns

	declare function parseColumns(
input: string,
options?: parseColumns$parseColumns$BaseOptions): Array<{
[key: string]: string
}>

	declare function parseColumns<T>(
input: string,
options: parseColumns$parseColumns$Options<T>): Array<{
[key: string]: T
}>

	declare interface parseColumns$BaseOptions {
separator?: string,
headers?: $ReadOnlyArray<string>
} 

declare type parseColumns$Options<T> = {
transform: (element: string, header: string, columnIndex: number, rowIndex: number) => T
} & parseColumns$BaseOptions

    }
