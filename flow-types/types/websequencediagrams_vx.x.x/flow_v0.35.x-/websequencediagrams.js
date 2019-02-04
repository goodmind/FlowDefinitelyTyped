declare module 'websequencediagrams' {
        declare export type OutputType = "png" | "svg" | "pdf";
	declare export type Style = "default"
| "earth"
| "modern-blue"
| "mscgen"
| "omegapple"
| "qsd"
| "rose"
| "roundgreen"
| "napkin"
| "magazine"
| "vs2010"
| "patent";
	declare export type diagramCallback = (error: Error | null, buffer?: Buffer, mimeType?: string) => void;
	declare export type diagramUrlCallback = (error: Error | null, url?: string) => void;
	declare export var root: string;
	declare export var styles: Style[];
	declare export function diagram(
description: string | Buffer,
style: Style | null,
format: OutputType | null,
callback: diagramCallback): void

	declare export function diagram_url(
description: string | Buffer,
style: Style | null,
format: OutputType | null,
callback: diagramUrlCallback): void

    }
