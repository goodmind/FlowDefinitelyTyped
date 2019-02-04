declare module 'markdown-pdf' {
        declare module.exports: typeof MarkdownPDF

	declare function MarkdownPDF(
options?: MarkdownPDF$MarkdownPDF$Options): MarkdownPDF$MarkdownPDF$OptionsBuilder

	
/**
 * Configuration options
 */
declare interface MarkdownPDF$Options {

/**
 * Current working directory.
 */
cwd?: string,

/**
 * Path to the phantomjs library.
 */
phantomPath?: string,

/**
 * Path to custom CSS file, relative to current directory.
 */
cssPath?: string,

/**
 * Path to custorm highlight CSS file (for code highlighting with highlight.js), relative to the current directory.
 */
highlightCssPath?: string,

/**
 * Path to CommonJS module which sets the page header and footer (see runnings.js).
 */
runningsPath?: string,

/**
 * Delay (in ms) before the PDF is rendered.
 */
renderDelay?: number,

/**
 * If renderDelay option isn't set, this is the timeout (in ms) before the page is rendered in case the page.onLoadFinished event doesn't fire.
 */
loadTimeout?: number,

/**
 * Supported dimension units are: 'mm', 'cm', 'in', 'px'
 */
paperBorder?: string,
paperFormat?: MarkdownPDF$PaperFormat,
paperOrientation?: MarkdownPDF$PaperOrientation,

/**
 * A function that returns a through2 stream that transforms the markdown before it is converted to HTML.
 */
preProcessMd?: () => any,

/**
 * A function that returns a through2 stream that transforms the HTML before it is converted to PDF.
 */
preProcessHtml?: () => any,

/**
 * A config object that is passed to remarkable, the underlying markdown parser
 */
remarkable?: any
} 

declare type MarkdownPDF$PaperFormat = "A3"
| "A4"
| "A5"
| "Legal"
| "Letter"
| "Tabloid";

declare type MarkdownPDF$PaperOrientation = "portait" | "landscape";

declare interface MarkdownPDF$OptionsBuilder {

/**
 * Create a readable stream and pipe it to markdown pdf.
 */
from: MarkdownPDF$FromOptionsBuilder & MarkdownPDF$FromFunction,

/**
 * Concatenates stream and pipe them to markdown pdf.
 */
concat: MarkdownPDF$ConcatOptionsBuilder
} 

declare type MarkdownPDF$FromFunction = (path: string | string[]) => MarkdownPDF$ToOptionsBuilder;

declare interface MarkdownPDF$FromOptionsBuilder {

/**
 * Create a readable stream from string and pipe to markdown-pdf. string can be a single string or array of strings.
 */
string(markdown: string | string[]): MarkdownPDF$ToOptionsBuilder,

/**
 * Create a readable stream from path and pipe to markdown-pdf. path can be a single path or array of paths.
 */
path(path: string | string[], opts: any): MarkdownPDF$ToOptionsBuilder
} 

declare interface MarkdownPDF$ConcatOptionsBuilder {
from: MarkdownPDF$ConcatFromOptionsBuilder
} 

declare interface MarkdownPDF$ConcatFromOptionsBuilder {

/**
 * Create and concatenate readable streams from strings and pipe to markdown-pdf.
 */
strings(markdownTexts: string[], opts: any): MarkdownPDF$ToOptionsBuilder,

/**
 * Create and concatenate readable streams from paths and pipe to markdown-pdf.
 */
paths(paths: string[], opts: any): MarkdownPDF$ToOptionsBuilder
} 

declare interface MarkdownPDF$ToOptionsBuilder {
to: MarkdownPDF$ToBuilder & MarkdownPDF$ToFunction
} 

declare interface MarkdownPDF$ToBuilder {

/**
 * Create a writeable stream to path and pipe output from markdown-pdf to it.
 * path can be a single path, or array of output paths if you specified an array of inputs.
 * The callback function cb will be invoked when data has finished being written.
 */
path(path: string, callback?: () => void): void,

/**
 * Create a concat-stream and pipe output from markdown-pdf to it. The callback function cb will be invoked when the buffer has been created.
 */
buffer(opts: any, callback?: () => void): void,

/**
 * Create a concat-stream and pipe output from markdown-pdf to it. The callback function cb will be invoked when the string has been created.
 */
string(opts: any, callback?: () => void): void
} 

declare type MarkdownPDF$ToFunction = (path: string, callback?: () => void) => void;
    }
