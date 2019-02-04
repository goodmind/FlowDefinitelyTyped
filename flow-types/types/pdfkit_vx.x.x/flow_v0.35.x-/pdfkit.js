declare interface PDFKit$PDFGradient {
new (document: any): PDFKit$PDFGradient,
stop(
pos: number,
color?: string | PDFKit$PDFKit$PDFGradient,
opacity?: number): PDFKit$PDFGradient,
embed(): void,
apply(): void
} 

declare type PDFKit$PDFLinearGradient = {
new (
document: any,
x1: number,
y1: number,
x2: number,
y2: number): PDFKit$PDFLinearGradient,
shader(fn: () => any): any,
opacityGradient(): PDFKit$PDFLinearGradient
} & PDFKit$PDFGradient


declare type PDFKit$PDFRadialGradient = {
new (
document: any,
x1: number,
y1: number,
x2: number,
y2: number): PDFKit$PDFRadialGradient,
shader(fn: () => any): any,
opacityGradient(): PDFKit$PDFRadialGradient
} & PDFKit$PDFGradient


declare interface Mixins$AnnotationOption {
Type?: string,
Rect?: any,
Border?: Array<number>,
SubType?: string,
Contents?: string,
Name?: string,
color?: string,
QuadPoints?: Array<number>,
A?: any,
B?: any,
C?: any,
L?: any,
DA?: string
} 

declare interface Mixins$PDFAnnotation<TDocument> {
annotate(
x: number,
y: number,
w: number,
h: number,
option: Mixins$AnnotationOption): TDocument,
note(
x: number,
y: number,
w: number,
h: number,
content: string,
option?: Mixins$AnnotationOption): TDocument,
link(
x: number,
y: number,
w: number,
h: number,
url: string,
option?: Mixins$AnnotationOption): TDocument,
highlight(
x: number,
y: number,
w: number,
h: number,
option?: Mixins$AnnotationOption): TDocument,
underline(
x: number,
y: number,
w: number,
h: number,
option?: Mixins$AnnotationOption): TDocument,
strike(
x: number,
y: number,
w: number,
h: number,
option?: Mixins$AnnotationOption): TDocument,
lineAnnotation(
x1: number,
y1: number,
x2: number,
y2: number,
option?: Mixins$AnnotationOption): TDocument,
rectAnnotation(
x: number,
y: number,
w: number,
h: number,
option?: Mixins$AnnotationOption): TDocument,
ellipseAnnotation(
x: number,
y: number,
w: number,
h: number,
option?: Mixins$AnnotationOption): TDocument,
textAnnotation(
x: number,
y: number,
w: number,
h: number,
text: string,
option?: Mixins$AnnotationOption): TDocument
} 

declare type Mixins$ColorValue = string | PDFKit$PDFGradient | [number, number, number] | [number, number, number, number];

declare type Mixins$RuleValue = "even-odd" | "evenodd" | "non-zero" | "nonzero";

declare interface Mixins$PDFColor<TDocument> {
fillColor(color: Mixins$ColorValue, opacity?: number): TDocument,
strokeColor(color: Mixins$ColorValue, opacity?: number): TDocument,
opacity(opacity: number): TDocument,
fillOpacity(opacity: number): TDocument,
strokeOpacity(opacity: number): TDocument,
linearGradient(x1: number, y1: number, x2: number, y2: number): PDFKit$PDFLinearGradient,
radialGradient(
x1: number,
y1: number,
r1: number,
x2: number,
y2: number,
r2: number): PDFKit$PDFRadialGradient
} 

declare interface Mixins$PDFFont<TDocument> {
font(buffer: Buffer): TDocument,
font(src: string, family?: string, size?: number): TDocument,
fontSize(size: number): TDocument,
currentLineHeight(includeGap?: boolean): number,
registerFont(name: string, src?: string, family?: string): TDocument
} 

declare interface Mixins$ImageOption {
width?: number,
height?: number,

/**
 * Scale percentage
 */
scale?: number,

/**
 * Two elements array specifying dimensions(w,h)
 */
fit?: number[]
} 

declare interface Mixins$PDFImage<TDocument> {

/**
 * Draw an image in PDFKit document.
 */
image(src: any, x?: number, y?: number, options?: Mixins$ImageOption): TDocument,
image(src: any, options?: Mixins$ImageOption): TDocument
} 

declare interface Mixins$TextOptions {

/**
 * Set to false to disable line wrapping all together
 */
lineBreak?: boolean,

/**
 * The width that text should be wrapped to (by default, the page width minus the left and right margin)
 */
width?: number,

/**
 * The maximum height that text should be clipped to
 */
height?: number,

/**
 * The character to display at the end of the text when it is too long. Set to true to use the default character.
 */
ellipsis?: boolean | string,

/**
 * the number of columns to flow the text into
 */
columns?: number,

/**
 * the amount of space between each column (1/4 inch by default)
 */
columnGap?: number,

/**
 * The amount in PDF points (72 per inch) to indent each paragraph of text
 */
indent?: number,

/**
 * the amount of space between each paragraph of text
 */
paragraphGap?: number,

/**
 * the amount of space between each line of text
 */
lineGap?: number,

/**
 * the amount of space between each word in the text
 */
wordSpacing?: number,

/**
 * the amount of space between each character in the text
 */
characterSpacing?: number,

/**
 * whether to fill the text (true by default)
 */
fill?: boolean,

/**
 * whether to stroke the text
 */
stroke?: boolean,

/**
 * A URL to link this text to (shortcut to create an annotation)
 */
link?: string,

/**
 * whether to underline the text
 */
underline?: boolean,

/**
 * whether to strike out the text
 */
strike?: boolean,

/**
 * whether the text segment will be followed immediately by another segment. Useful for changing styling in the middle of a paragraph.
 */
continued?: boolean,

/**
 * the alignment of the text (center, justify, left, right)
 */
align?: string
} 

declare interface Mixins$PDFText<TDocument> {
lineGap(lineGap: number): TDocument,
moveDown(line?: number): TDocument,
moveUp(line?: number): TDocument,
text(text: string, x?: number, y?: number, options?: Mixins$TextOptions): TDocument,
text(text: string, options?: Mixins$TextOptions): TDocument,
widthOfString(text: string, options?: Mixins$TextOptions): number,
heightOfString(text: string, options?: Mixins$TextOptions): number,
list(
list: Array<string | any>,
x?: number,
y?: number,
options?: Mixins$TextOptions): TDocument,
list(list: Array<string | any>, options?: Mixins$TextOptions): TDocument
} 

declare interface Mixins$PDFVector<TDocument> {
save(): TDocument,
restore(): TDocument,
closePath(): TDocument,
lineWidth(w: number): TDocument,
lineCap(c: string): TDocument,
lineJoin(j: string): TDocument,
miterLimit(m: any): TDocument,
dash(length: number, option: any): TDocument,
undash(): TDocument,
moveTo(x: number, y: number): TDocument,
lineTo(x: number, y: number): TDocument,
bezierCurveTo(
cp1x: number,
cp1y: number,
cp2x: number,
cp2y: number,
x: number,
y: number): TDocument,
quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): TDocument,
rect(x: number, y: number, w: number, h: number): TDocument,
roundedRect(x: number, y: number, w: number, h: number, r?: number): TDocument,
ellipse(x: number, y: number, r1: number, r2?: number): TDocument,
circle(x: number, y: number, raduis: number): TDocument,
polygon(...points: number[][]): TDocument,
path(path: string): TDocument,
fill(color?: Mixins$ColorValue, rule?: Mixins$RuleValue): TDocument,
fill(rule: Mixins$RuleValue): TDocument,
stroke(color?: Mixins$ColorValue): TDocument,
fillAndStroke(
fillColor?: Mixins$ColorValue,
strokeColor?: Mixins$ColorValue,
rule?: Mixins$RuleValue): TDocument,
fillAndStroke(fillColor: Mixins$ColorValue, rule?: Mixins$RuleValue): TDocument,
fillAndStroke(rule: Mixins$RuleValue): TDocument,
clip(rule?: Mixins$RuleValue): TDocument,
transform(
m11: number,
m12: number,
m21: number,
m22: number,
dx: number,
dy: number): TDocument,
translate(x: number, y: number): TDocument,
rotate(angle: number, options?: {
origin?: number[]
}): TDocument,
scale(xFactor: number, yFactor?: number, options?: {
origin?: number[]
}): TDocument
} 


/**
 * PDFKit data
 */
declare interface PDFKit$PDFData {
new (data: any[]): PDFKit$PDFData,
readByte(): any,
writeByte(byte: any): void,
byteAt(index: number): any,
readBool(): boolean,
writeBool(val: boolean): boolean,
readUInt32(): number,
writeUInt32(val: number): void,
readInt32(): number,
writeInt32(val: number): void,
readUInt16(): number,
writeUInt16(val: number): void,
readInt16(): number,
writeInt16(val: number): void,
readString(length: number): string,
writeString(val: string): void,
stringAt(pos: number, length: number): string,
readShort(): number,
writeShort(val: number): void,
readLongLong(): number,
writeLongLong(val: number): void,
readInt(): number,
writeInt(val: number): void,
slice(start: number, end: number): any[],
read(length: number): any[],
write(bytes: any[]): void
} 

declare interface PDFKit$DocumentInfo {
Producer?: string,
Creator?: string,
CreationDate?: Date,
Title?: string,
Author?: string,
Keywords?: string,
ModDate?: Date
} 

declare interface PDFKit$PDFDocumentOptions {
compress?: boolean,
info?: PDFKit$DocumentInfo,
autoFirstPage?: boolean,
size?: number[] | string,
margin?: number,
margins?: {
top: number,
left: number,
bottom: number,
right: number
},
layout?: "portrait" | "landscape",
bufferPages?: boolean
} 

declare type PDFKit$PDFDocument = {

/**
 * PDF Version
 */
version: number,

/**
 * Wheter streams should be compressed
 */
compress: boolean,

/**
 * PDF document Metadata
 */
info: PDFKit$DocumentInfo,

/**
 * Options for the document
 */
options: PDFKit$PDFDocumentOptions,

/**
 * Represent the current page.
 */
page: PDFKit$PDFPage,
x: number,
y: number,
new (options?: PDFKit$PDFDocumentOptions): PDFKit$PDFDocument,
addPage(options?: PDFKit$PDFDocumentOptions): PDFKit$PDFDocument,
bufferedPageRange(): {
start: number,
count: number
},
switchToPage(n?: number): PDFKit$PDFPage,
flushPages(): void,
ref(data: {}): PDFKit$PDFKitReference,
addContent(data: any): PDFKit$PDFDocument,

/**
 * Deprecated
 */
write(fileName: string, fn: any): void,

/**
 * Deprecated. Throws exception
 */
output(fn: any): void,
end(): void,
toString(): string
} & NodeJS.ReadableStream & Mixins$Mixins$PDFAnnotation<PDFKit$PDFDocument> & Mixins$Mixins$PDFColor<PDFKit$PDFDocument> & Mixins$Mixins$PDFImage<PDFKit$PDFDocument> & Mixins$Mixins$PDFText<PDFKit$PDFDocument> & Mixins$Mixins$PDFVector<PDFKit$PDFDocument> & Mixins$Mixins$PDFFont<PDFKit$PDFDocument>



/**
 * Represent a single page in the PDF document
 */
declare interface PDFKit$PDFPage {
size: string,
layout: string,
margins: {
top: number,
left: number,
bottom: number,
right: number
},
width: number,
height: number,
document: PDFKit$PDFDocument,
content: PDFKit$PDFKitReference,

/**
 * The page dictionnary
 */
dictionary: PDFKit$PDFKitReference,
fonts: any,
xobjects: any,
ext_gstates: any,
patterns: any,
annotations: any,
maxY(): number,
write(chunk: any): void,
end(): void
} 


/**
 * PDFReference - represents a reference to another object in the PDF object heirarchy
 */
declare class PDFKit$PDFKitReference  {
id: number;
gen: number;
deflate: any;
compress: boolean;
uncompressedLength: number;
chunks: any[];
data: {
Font?: any,
XObject?: any,
ExtGState?: any,
Pattern: any,
Annots: any
};
document: PDFKit$PDFDocument;
constructor(document: PDFKit$PDFDocument, id: number, data: {}): this;
initDeflate(): void;
write(chunk: any): void;
end(chunk: any): void;
finalize(): void;
toString(): string
}declare module 'pdfkit/js/data' {
        declare var PDFKitData: PDFKit$PDFKit$PDFData;
	declare module.exports: typeof PDFKitData

    }
declare module 'pdfkit' {
        declare var doc: PDFKit$PDFKit$PDFDocument;
	declare module.exports: typeof doc

    }
declare module 'pdfkit/js/gradient' {
        declare var gradient: {
PDFKit$PDFGradient: PDFKit$PDFKit$PDFGradient,
PDFKit$PDFLinearGradient: PDFKit$PDFKit$PDFLinearGradient,
PDFRadialGradiant: PDFKit$PDFKit$PDFRadialGradient
};
	declare module.exports: typeof gradient

    }
declare module 'pdfkit/js/page' {
        declare var PDFKitPage: PDFKit$PDFKit$PDFPage;
	declare module.exports: typeof PDFKitPage

    }
declare module 'pdfkit/js/reference' {
        declare var PDFKit$PDFKitReference: PDFKit$PDFKit$PDFKitReference;
	declare module.exports: typeof PDFKit$PDFKitReference

    }
declare module 'pdfkit/js/mixins/annotations' {
        declare var PDFKitAnnotation: PDFKit$PDFKit$Mixins.Mixins$PDFAnnotation<void>;
	declare module.exports: typeof PDFKitAnnotation

    }
declare module 'pdfkit/js/mixins/color' {
        declare var PDFKitColor: PDFKit$PDFKit$Mixins.Mixins$PDFColor<void>;
	declare module.exports: typeof PDFKitColor

    }
declare module 'pdfkit/js/mixins/fonts' {
        declare var PDFKitFont: PDFKit$PDFKit$Mixins.Mixins$PDFFont<void>;
	declare module.exports: typeof PDFKitFont

    }
declare module 'pdfkit/js/mixins/images' {
        declare var PDFKitImage: PDFKit$PDFKit$Mixins.Mixins$PDFImage<void>;
	declare module.exports: typeof PDFKitImage

    }
declare module 'pdfkit/js/mixins/text' {
        declare var PDFKitText: PDFKit$PDFKit$Mixins.Mixins$PDFText<void>;
	declare module.exports: typeof PDFKitText

    }
declare module 'pdfkit/js/mixins/vector' {
        declare var PDFKitVector: PDFKit$PDFKit$Mixins.Mixins$PDFVector<void>;
	declare module.exports: typeof PDFKitVector

    }
