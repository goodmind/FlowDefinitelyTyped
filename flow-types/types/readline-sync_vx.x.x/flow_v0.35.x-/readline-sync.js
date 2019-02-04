declare module 'readline-sync' {
        declare export type OptionType = string | number | RegExp | ((input: string) => boolean);
	declare export interface BasicOptions {
prompt?: any,
hideEchoBack?: boolean,
mask?: string,
limit?: OptionType | OptionType[],
limitMessage?: string,
defaultInput?: string,
trueValue?: OptionType | OptionType[],
falseValue?: OptionType | OptionType[],
caseSensitive?: boolean,
keepWhitespace?: boolean,
encoding?: string,
bufferSize?: number,
print(display: string, encoding: string): void,
history?: boolean,
cd?: boolean,
charlist?: string,
min?: any,
max?: any,
confirmMessage?: any,
unmatchMessage?: any,
exists?: any,
isFile?: boolean,
isDirectory?: boolean,
validate(path: string): boolean | string,
create?: boolean,
guide?: boolean,
cancel?: any
} 
	declare export function question(query?: any, options?: BasicOptions): string

	declare export function prompt(options?: BasicOptions): string

	declare export function keyIn(query?: any, options?: BasicOptions): string

	declare export function setDefaultOptions(options?: BasicOptions): BasicOptions

	declare export function questionEMail(query?: any, options?: BasicOptions): string

	declare export function questionNewPassword(query?: any, options?: BasicOptions): string

	declare export function questionInt(query?: any, options?: BasicOptions): number

	declare export function questionFloat(query?: any, options?: BasicOptions): number

	declare export function questionPath(query?: any, options?: BasicOptions): string

	declare export function promptCL(
commandHandler?: {
[id: string]: (...args: string[]) => void
} | ((command: string, ...args: string[]) => void),
options?: BasicOptions): string[]

	declare export function promptLoop(inputHandler: (value: string) => boolean, options?: BasicOptions): void

	declare export function promptCLLoop(
commandHandler?: {
[id: string]: (...args: string[]) => boolean | void
} | ((command: string, ...args: string[]) => boolean | void),
options?: BasicOptions): void

	declare export function promptSimShell(options?: BasicOptions): string

	declare export function keyInYN(query?: any, options?: BasicOptions): boolean | string

	declare export function keyInYNStrict(query?: any, options?: BasicOptions): boolean

	declare export function keyInPause(query?: any, options?: BasicOptions): void

	declare export function keyInSelect(items: string[], query?: any, options?: BasicOptions): number

	declare export function getRawInput(): string

	
/**
 * @deprecated Use the bufferSize option instead: readlineSync.setDefaultOptions({bufferSize: value});
 */
declare export function setBufferSize(value: number): void

	
/**
 * @deprecated Use the encoding option instead: readlineSync.setDefaultOptions({encoding: value});
 */
declare export function setEncoding(value: string): void

	
/**
 * @deprecated Use the mask option instead: readlineSync.setDefaultOptions({mask: value});
 */
declare export function setMask(value: string): void

	
/**
 * @deprecated Use the print option instead: readlineSync.setDefaultOptions({print: value});
 */
declare export function setPrint(value: (display: string, encoding: string) => void): void

	
/**
 * @deprecated Use the prompt option instead: readlineSync.setDefaultOptions({prompt: value});
 */
declare export function setPrompt(value: any): void

    }
