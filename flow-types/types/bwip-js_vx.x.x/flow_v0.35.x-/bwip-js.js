declare module 'bwip-js' {
        import type {
          Request,Response
        } from 'http';

	
      declare var npm$namespace$BwipJs: {
        loadFont: typeof BwipJs$loadFont,
toBuffer: typeof BwipJs$toBuffer,
        
      }
declare export function BwipJs$loadFont(fontName: string, sizeMulti: number, fontFile: string): void


declare export function BwipJs$toBuffer(
opts: BwipJs$ToBufferOptions,
callback: (err: string | Error, png: Buffer) => void): void


declare interface BwipJs$ToBufferOptions {
bcid: string,
text: string,
parse?: boolean,
parsefunc?: boolean,
height?: number,
width?: number,
scaleX?: number,
scaleY?: number,
scale?: number,
rotate?: "N" | "R" | "L" | "I",
paddingwidth?: number,
paddingheight?: number,
monochrome?: boolean,
alttext?: boolean,
includetext?: boolean,
textfont?: string,
textsize?: number,
textgaps?: number,
textxalign?: "offleft"
| "left"
| "center"
| "right"
| "offright"
| "justify",
textyalign?: "below" | "center" | "above",
textxoffset?: number,
textyoffset?: number,
showborder?: boolean,
borderwidth?: number,
borderleft?: number,
borderright?: number,
bordertop?: number,
boraderbottom?: number,
barcolor?: string,
backgroundcolor?: string,
bordercolor?: string,
textcolor?: string,
addontextxoffset?: number,
addontextyoffset?: number,
addontextfont?: string,
addontextsize?: number,
guardwhitespace?: boolean,
guardwidth?: number,
guardheight?: number,
guardleftpos?: number,
guardrightpos?: number,
guardleftypos?: number,
guardrightypos?: number,
sizelimit?: number,
includecheck?: boolean,
includecheckintext?: boolean,
inkspread?: number,
inkspreadh?: number,
inkspreadv?: number
} 
	declare function BwipJs(req: Request, res: Response, opts?: BwipJs$BwipJs$ToBufferOptions): void

	declare module.exports: typeof BwipJs

    }
