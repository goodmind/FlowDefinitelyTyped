declare module 'svg-path-parser' {
        declare export function parseSVG(input: string): Command[]

	declare export function makeAbsolute(commands: Command[]): Command[]

	declare export interface Command {
code: "m"
| "M"
| "l"
| "L"
| "h"
| "H"
| "v"
| "V"
| "c"
| "C"
| "s"
| "S"
| "q"
| "Q"
| "t"
| "T"
| "a"
| "A"
| "z"
| "Z",
command: "moveto"
| "lineto"
| "horizontal lineto"
| "vertical lineto"
| "curveto"
| "smooth curveto"
| "quadratic curveto"
| "smooth quadratic curveto"
| "elliptical arc"
| "closepath",
relative?: boolean
} 
	declare export interface MoveToCommand {
code: "m" | "M",
command: "moveto",
relative?: boolean,
x: number,
y: number
} 
	declare export interface LineToCommand {
code: "l" | "L",
command: "lineto",
relative?: boolean,
x: number,
y: number
} 
	declare export interface HorizontalLineToCommand {
code: "h" | "H",
command: "horizontal lineto",
relative?: boolean,
x: number
} 
	declare export interface VerticalLineToCommand {
code: "v" | "V",
command: "vertical lineto",
relative?: boolean,
y: number
} 
	declare export interface ClosePathCommand {
code: "z" | "Z",
command: "closepath",
relative?: boolean
} 
	declare export interface CurveToCommand {
code: "c" | "C",
command: "curveto",
relative?: boolean,
x1: number,
y1: number,
x2: number,
y2: number,
x: number,
y: number
} 
	declare export interface SmoothCurveToCommand {
code: "s" | "S",
command: "smooth curveto",
relative?: boolean,
x2: number,
y2: number,
x: number,
y: number
} 
	declare export interface QuadraticCurveToCommand {
code: "q" | "Q",
command: "quadratic curveto",
relative?: boolean,
x1: number,
y1: number,
x: number,
y: number
} 
	declare export interface SmoothQuadraticCurveToCommand {
code: "t" | "T",
command: "smooth quadratic curveto",
relative?: boolean,
x: number,
y: number
} 
	declare export interface EllipticalArcCommand {
code: "a" | "A",
command: "elliptical arc",
relative?: boolean,
rx: number,
ry: number,
xAxisRotation: number,
largeArc: boolean,
sweep: boolean,
x: number,
y: number
} 
    }
