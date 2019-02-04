declare module 'audiosprite' {
        declare module.exports: typeof audiosprite

	declare function audiosprite(
files: string[],
callback: (error: Error, obj: audiosprite$audiosprite$Result) => void): void

	declare function audiosprite(
files: string[],
option: audiosprite$audiosprite$Option,
callback: (error: Error, obj: audiosprite$audiosprite$Result) => void): void

	declare type audiosprite$ExportType = "jukebox" | "howler" | "createjs" | null;

declare type audiosprite$LogLevel = "debug"
| "info"
| "notice"
| "warning"
| "error";

declare type audiosprite$VBR = -1
| 0
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9;

declare type audiosprite$VBR_Vorbis = audiosprite$VBR | 10;

declare type audiosprite$Channels = 1 | 2;

declare interface audiosprite$Option {
output?: string,
path?: string,
export?: string,
format?: audiosprite$ExportType,
log?: audiosprite$LogLevel,
autoplay?: string | null,
loop?: string[],
silence?: number,
gap?: number,
minlength?: number,
bitrate?: number,
vbr?: audiosprite$VBR,
"vbr:vorbis"?: audiosprite$VBR_Vorbis,
samplerate?: number,
channels?: audiosprite$Channels,
rawparts?: string,
logger?: audiosprite$Logger
} 

declare interface audiosprite$Logger {
debug(...log: any[]): void,
info(...log: any[]): void,
log(...log: any[]): void
} 

declare interface audiosprite$Result {
resources: string[],
spritemap: {
[key: string]: {
start: number,
end: number,
loop: boolean
}
},
autoplay?: string
} 
    }
