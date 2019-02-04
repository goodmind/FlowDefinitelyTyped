declare module 'jdenticon' {
        declare export interface JdenticonConfig {
lightness?: {
color?: number[],
grayscale?: number[]
},
saturation?: number
} 
	declare export var jdenticon_config: JdenticonConfig;
	
      declare var npm$namespace$jdenticon: {
        drawIcon: typeof jdenticon$drawIcon,
toSvg: typeof jdenticon$toSvg,
update: typeof jdenticon$update,
        config: typeof jdenticon$config,
version: typeof jdenticon$version,
      }
declare export function jdenticon$drawIcon(ctx: CanvasRenderingContext2D, hash: string, size: number): void


declare export function jdenticon$toSvg(hash: string, size: number, padding?: number): string


declare export function jdenticon$update(el: Element | string, hash?: string, padding?: number): void


declare export var jdenticon$config: JdenticonConfig;

declare export var jdenticon$version: string;
    }
