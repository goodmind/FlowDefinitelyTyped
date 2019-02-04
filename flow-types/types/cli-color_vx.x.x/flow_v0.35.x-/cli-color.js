declare module 'cli-color' {
        declare export interface m$Format {
(...text: any[]): string,
bold: m$Format,
italic: m$Format,
underline: m$Format,
blink: m$Format,
inverse: m$Format,
strike: m$Format,
black: m$Format,
red: m$Format,
green: m$Format,
yellow: m$Format,
blue: m$Format,
magenta: m$Format,
cyan: m$Format,
white: m$Format,
bgBlack: m$Format,
bgRed: m$Format,
bgGreen: m$Format,
bgYellow: m$Format,
bgBlue: m$Format,
bgMagenta: m$Format,
bgCyan: m$Format,
bgWhite: m$Format,
blackBright: m$Format,
redBright: m$Format,
greenBright: m$Format,
yellowBright: m$Format,
blueBright: m$Format,
magentaBright: m$Format,
cyanBright: m$Format,
whiteBright: m$Format,
bgBlackBright: m$Format,
bgRedBright: m$Format,
bgGreenBright: m$Format,
bgYellowBright: m$Format,
bgBlueBright: m$Format,
bgMagentaBright: m$Format,
bgCyanBright: m$Format,
bgWhiteBright: m$Format,
xterm(color: number): m$Format,
bgXterm(color: number): m$Format,
move(x: number, y: number): string,
moveTo(x: number, y: number): string,
bol(n?: number, erase?: boolean): string,
up(n: number): string,
down(n: number): string,
left(n: number): string,
right(n: number): string,
beep: string,
reset: string,
width: number,
height: number,
xtermSupported: boolean
} 
	declare var m: m$m$Format;
	declare module.exports: typeof m

    }
declare module 'cli-color/trim' {
        declare function ansiTrim(str: string): string

	declare module.exports: typeof ansiTrim

    }
declare module 'cli-color/throbber' {
        declare export interface setupThrobber$Throbber {
start(): void,
stop(): void,
restart(): void
} 
	declare function setupThrobber(
write: (str: string) => any,
period: number,
format?: clc.m$Format): setupThrobber$setupThrobber$Throbber

	declare module.exports: typeof setupThrobber

    }
