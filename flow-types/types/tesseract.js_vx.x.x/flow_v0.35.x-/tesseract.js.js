declare module 'tesseract.js' {
        declare type Tesseract$ImageLike = string
| HTMLImageElement
| HTMLCanvasElement
| HTMLVideoElement
| CanvasRenderingContext2D
| File
| Blob
| ImageData
| Buffer;

declare interface Tesseract$Progress {
status: string,
progress: number,
loaded?: number
} 

declare interface Tesseract$Block {
paragraphs: Tesseract$Paragraph,
text: string,
confidence: number,
baseline: Tesseract$Baseline,
bbox: Tesseract$Bbox,
blocktype: string,
polygon: any,
page: Tesseract$Page,
lines: Tesseract$Line[],
words: Tesseract$Word[],
symbols: Tesseract$Symbol[]
} 

declare interface Tesseract$Baseline {
x0: number,
y0: number,
x1: number,
y1: number,
has_baseline: boolean
} 

declare interface Tesseract$Bbox {
x0: number,
y0: number,
x1: number,
y1: number
} 

declare interface Tesseract$Line {
words: Tesseract$Word[],
text: string,
confidence: number,
baseline: Tesseract$Baseline,
bbox: Tesseract$Bbox,
paragraph: Tesseract$Paragraph,
block: Tesseract$Block,
page: Tesseract$Page,
symbols: Tesseract$Symbol[]
} 

declare interface Tesseract$Paragraph {
lines: Tesseract$Line[],
text: string,
confidence: number,
baseline: Tesseract$Baseline,
bbox: Tesseract$Bbox,
is_ltr: boolean,
block: Tesseract$Block,
page: Tesseract$Page,
words: Tesseract$Word[],
symbols: Tesseract$Symbol[]
} 

declare interface Tesseract$Symbol {
choices: Tesseract$Choice[],
image: any,
text: string,
confidence: number,
baseline: Tesseract$Baseline,
bbox: Tesseract$Bbox,
is_superscript: boolean,
is_subscript: boolean,
is_dropcap: boolean,
word: Tesseract$Word,
line: Tesseract$Line,
paragraph: Tesseract$Paragraph,
block: Tesseract$Block,
page: Tesseract$Page
} 

declare interface Tesseract$Choice {
text: string,
confidence: number
} 

declare interface Tesseract$Word {
symbols: Tesseract$Symbol[],
choices: Tesseract$Choice[],
text: string,
confidence: number,
baseline: Tesseract$Baseline,
bbox: Tesseract$Bbox,
is_numeric: boolean,
in_dictionary: boolean,
direction: string,
language: string,
is_bold: boolean,
is_italic: boolean,
is_underlined: boolean,
is_monospace: boolean,
is_serif: boolean,
is_smallcaps: boolean,
font_size: number,
font_id: number,
font_name: string,
line: Tesseract$Line,
paragraph: Tesseract$Paragraph,
block: Tesseract$Block,
page: Tesseract$Page
} 

declare interface Tesseract$Page {
blocks: Tesseract$Block[],
confidence: number,
html: string,
lines: Tesseract$Line[],
oem: string,
paragraphs: Tesseract$Paragraph[],
psm: string,
symbols: Tesseract$Symbol[],
text: string,
version: string,
words: Tesseract$Word[]
} 

declare interface Tesseract$TesseractJob {
then: (callback: (result: Tesseract$Page) => void) => Tesseract$TesseractJob,
progress: (callback: (progress: Tesseract$Progress) => void) => Tesseract$TesseractJob,
catch: (callback: (error: Error) => void) => Tesseract$TesseractJob,
finally: (
callback: (resultOrError: Error | Tesseract$Page) => void) => Tesseract$TesseractJob,
error?: (error: Error) => Tesseract$TesseractJob
} 

declare interface Tesseract$TesseractStatic {
recognize(image: Tesseract$ImageLike): Tesseract$TesseractJob,
recognize(image: Tesseract$ImageLike, options: any): Tesseract$TesseractJob,
detect(image: Tesseract$ImageLike): Tesseract$TesseractJob,
create(
paths: {
workerPath: string,
langPath: string,
corePath: string
}): Tesseract$TesseractStatic
} 
	declare var Tesseract: Tesseract$Tesseract$TesseractStatic;
	declare module.exports: typeof Tesseract

    }
