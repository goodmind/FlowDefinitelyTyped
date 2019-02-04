declare module 'ansi-escapes' {
        declare interface Ansi$ImageOptions {
width?: number,
height?: number,
preserveAspectRatio?: boolean
} 

declare interface Ansi$Term {
setCwd(cwd: string): string
} 

declare interface Ansi$AnsiEscapes {
cursorTo(x: number, y?: number): string,
cursorMove(x: number, y?: number): string,
cursorUp(count: number): string,
cursorDown(count: number): string,
cursorForward(count: number): string,
cursorBackward(count: number): string,
cursorLeft: string,
cursorSavePosition: string,
cursorRestorePosition: string,
cursorGetPosition: string,
cursorNextLine: string,
cursorPrevLine: string,
cursorHide: string,
cursorShow: string,
eraseLines(count: number): string,
eraseEndLine: string,
eraseStartLine: string,
eraseLine: string,
eraseDown: string,
eraseUp: string,
eraseScreen: string,
scrollUp: string,
scrollDown: string,
clearScreen: string,
beep: string,
link(text: string, url: string): string,
image(buf: Buffer, opts?: Ansi$ImageOptions): string,
iTerm: Ansi$Term
} 
	declare var ansiEscapes: Ansi$Ansi$AnsiEscapes;
	declare module.exports: typeof ansiEscapes

    }
