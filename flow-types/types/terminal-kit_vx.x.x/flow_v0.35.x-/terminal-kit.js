declare module 'terminal-kit' {
        declare export var terminal: Terminal;
	declare export var realTerminal: Terminal;
	declare export function createTerminal(createOptions?: Terminal.CreateOptions): Terminal

	declare export function getParentTerminalInfo(
callback: (error: any, codename?: string, name?: string, pid?: number) => void): void

	declare export function getDetectedTerminal(calback: (error: any, term: Terminal) => void): void

	declare export function autoComplete(
array: $ReadOnlyArray<string>,
startString: string,
returnAlternatives?: boolean,
prefix?: string,
postfix?: string): string

	declare export function stripEscapeSequences(str: string): string

	declare export function stringWidth(str: string): number

	declare export function truncateString(str: string, maxWidth: number): string

	declare export {
          Rect,ScreenBuffer,ScreenBufferHD,Terminal,TextBuffer
        }

    }
