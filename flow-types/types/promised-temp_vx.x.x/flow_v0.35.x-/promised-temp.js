declare module 'promised-temp' {
        import typeof * as fs from 'fs';

	import type {
          AffixOptions,OpenFile,Stats
        } from 'temp';

	declare export {
          AffixOptions,OpenFile,Stats
        }from 'temp';

	declare interface TempStatic {
dir: string,
track(value?: boolean): TempStatic,
path(affixes?: string | AffixOptions, defaultPrefix?: string): string,
mkdir(affixes?: string | AffixOptions): Promise<string>,
open(affixes?: string | AffixOptions): Promise<OpenFile>,
cleanup(): Promise<boolean | Stats>,
createWriteStream(affixes?: string | AffixOptions): Promise<fs.WriteStream>
} 
	declare var PromisedTemp: TempStatic;
	declare export default typeof PromisedTemp

    }
