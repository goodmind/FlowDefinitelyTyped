declare module 'kss' {
        
/**
 * Builds a styleguide given the proper options.
 */
declare function kss(options?: kss$kss$KssOptions): Promise<kss$kss$KssStyleguide>

	
      declare var npm$namespace$kss: {
        parse: typeof kss$parse,
traverse: typeof kss$traverse,
        
      }
declare interface kss$File {

/**
 * bath to source directory
 */
base: string,

/**
 * file contents
 */
contents: string,

/**
 * full path to file
 */
path: string
} 

declare interface kss$Source {

/**
 * The name of the file.
 */
filename: string,

/**
 * The full path of the file.
 */
path: string,

/**
 * The line number where the KSS comment is found.
 */
line: number
} 

declare interface kss$Options {

/**
 * Whether to automatically format Markdown using [marked](https://github.com/chjj/marked).
 * Enabled by default.
 * @default true
 */
markdown?: boolean,

/**
 * Use a regex or string (e.g. `*.less|*.css`) to only parse files matching this value.
 * @default .css|*.less|*.sass|*.scss|*.styl|*.stylus
 */
mask?: string | RegExp,

/**
 * kss-node makes the header available separately from the description. To make kss-node
 * behave like the Ruby KSS, disable this option and the title will remain a part of the
 * description. Enabled by default.
 * @default true.
 */
header?: boolean
} 

declare type kss$KssOptions = {
builder?: any,
clone?: boolean,
custom?: any,
logErrorFunction(...msg: string[]): void,
json?: boolean,
mask?: string | RegExp,
source: string[],
verbose?: boolean
} & kss$Options


declare type kss$CallbackFn = (error: Error | null, styleguide: kss$KssStyleguide) => void;

declare class kss$KssStyleguide  {
constructor(data?: any): this;
autoInit(autoInit: boolean): kss$KssStyleguide;
customPropertyNames(): string[];
customPropertyNames(names: string | string[]): kss$KssStyleguide;
hasNumericReferences(): boolean;
init(): kss$KssStyleguide;
referenceDelimiter(): string;
sections(): kss$KssSection[];
sections(query: string | RegExp): false | kss$KssSection | kss$KssSection[];
sections(sections: kss$KssSection | kss$KssSection[]): kss$KssStyleguide;
toJSON(): any
}

declare class kss$KssSection  {
constructor(data?: any): this;
custom(name: string): any;
custom(name: string, value: any): kss$KssSection;
customPropertyNames(): string[];
deprecated(): boolean;
deprecated(deprecated: boolean): kss$KssSection;
depth(): number;
depth(depth: number): kss$KssSection;
description(): string;
description(description: string): kss$KssSection;
experimental(): boolean;
experimental(experimental: boolean): kss$KssSection;
header(): string;
header(header: string): kss$KssSection;
markup(): false | string;
markup(markup: string): kss$KssSection;
modifiers(): kss$KssModifier[];
modifiers(query: number | string): false | kss$KssModifier;
modifiers(modifiers: kss$KssModifier | kss$KssModifier[]): kss$KssSection;
parameters(): kss$KssParameter[];
parameters(query: number | string): false | kss$KssParameter;
parameters(parameters: kss$KssParameter | kss$KssParameter[]): kss$KssSection;
reference(): string;
reference(reference: string): kss$KssSection;
referenceNumber(): string;
referenceNumber(referenceNumber: string): kss$KssSection;
referenceURI(): string;
referenceURI(referenceURI: string): kss$KssSection;
source(): kss$Source;
source(source: kss$Source): kss$KssSection;
sourceFileName(): string;
sourceLine(): string;
styleGuide(): kss$KssStyleguide;
styleGuide(styleguide: kss$KssStyleguide): kss$KssSection;
toJSON(): any;
weight(): number;
weight(weight: number): kss$KssSection
}

declare class kss$KssModifier  {
constructor(data?: any): this;
className(): string;
className(className: string): kss$KssModifier;
description(): string;
description(description: string): kss$KssModifier;
markup(): string;
markup(markup: string): kss$KssModifier;
name(): string;
name(name: string): kss$KssModifier;
section(): kss$KssSection;
section(section: kss$KssSection): kss$KssModifier;
toJSON(): any
}

declare class kss$KssParameter  {
constructor(data?: any): this;
defaultValue(): string;
description(): string;
description(description: string): kss$KssParameter;
name(): string;
name(name: string): kss$KssParameter;
section(): kss$KssSection;
section(section: kss$KssSection): kss$KssParameter;
toJSON(): any
}


/**
 * Parse a string of documented CSS, or an array of file anys with their content.
 */
declare function kss$parse(input: string | kss$File[], options: kss$Options): kss$KssStyleguide



/**
 * Traverse a directory, parse its contents, and create a `KssStyleGuide`.
 */
declare function kss$traverse(directory: string | string[], options: kss$Options): Promise<kss$KssStyleguide>

	declare module.exports: typeof kss

    }
