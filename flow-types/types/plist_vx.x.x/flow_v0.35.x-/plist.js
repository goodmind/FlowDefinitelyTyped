declare module 'plist' {
        import type {
          XMLToStringOptions
        } from 'xmlbuilder';

	declare export function parse(xml: string): PlistValue

	declare export function build(obj: PlistValue, opts?: PlistBuildOptions): string

	declare export type PlistValue = string
| number
| boolean
| Date
| Buffer
| PlistObject
| PlistArray;
	declare export interface PlistObject {
[x: string]: PlistValue
} 
	declare export type PlistArray = {} & $ReadOnlyArray<PlistValue>

	declare export type PlistBuildOptions = XMLToStringOptions;
    }
