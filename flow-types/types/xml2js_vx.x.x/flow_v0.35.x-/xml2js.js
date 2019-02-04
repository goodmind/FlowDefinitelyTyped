declare module 'xml2js' {
        import type {
          EventEmitter
        } from 'events';

	import typeof * as processors from './lib/processors';

	declare export function parseString(xml: convertableToString, callback: (err: any, result: any) => void): void

	declare export function parseString(
xml: convertableToString,
options: OptionsV2,
callback: (err: any, result: any) => void): void

	declare export var defaults: {
"0.1": Options,
"0.2": OptionsV2
};
	declare export class Builder  {
constructor(options?: OptionsV2): this;
buildObject(rootObj: any): string
}
	declare export class Parser mixins EventEmitter {
constructor(options?: OptionsV2): this;
parseString(str: convertableToString, cb?: Function): void;
reset(): void
}
	declare export interface Options {
async?: boolean,
attrkey?: string,
attrNameProcessors?: Array<(name: string) => any>,
attrValueProcessors?: Array<(value: string, name: string) => any>,
charkey?: string,
charsAsChildren?: boolean,
childkey?: string,
emptyTag?: any,
explicitArray?: boolean,
explicitCharkey?: boolean,
explicitChildren?: boolean,
explicitRoot?: boolean,
ignoreAttrs?: boolean,
includeWhiteChars?: boolean,
mergeAttrs?: boolean,
normalize?: boolean,
normalizeTags?: boolean,
strict?: boolean,
tagNameProcessors?: Array<(name: string) => any>,
trim?: boolean,
validator?: Function,
valueProcessors?: Array<(value: string, name: string) => any>,
xmlns?: boolean
} 
	declare export type OptionsV2 = {
preserveChildrenOrder?: boolean,
rootName?: string,
xmldec?: {
version: string,
encoding?: string,
standalone?: boolean
},
doctype?: any,
renderOpts?: {
pretty?: boolean,
indent?: string,
newline?: string
},
headless?: boolean,
chunkSize?: number,
cdata?: boolean
} & Options

	declare export interface convertableToString {
toString(): string
} 
	declare export {
          processors
        }

    }
