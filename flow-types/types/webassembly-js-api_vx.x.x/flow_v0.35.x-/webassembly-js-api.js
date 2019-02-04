declare module 'webassembly-js-api' {
        
      declare var npm$namespace$WebAssembly: {
        compile: typeof WebAssembly$compile,
instantiate: typeof WebAssembly$instantiate,
validate: typeof WebAssembly$validate,
        
      }
declare type WebAssembly$Imports = Array<{
name: string,
kind: string
}>;

declare type WebAssembly$Exports = Array<{
module: string,
name: string,
kind: string
}>;

declare type WebAssembly$BufferSource = ArrayBufferView | ArrayBuffer;


/**
 * WebAssembly.Module
 */
declare class WebAssembly$Module  {
constructor(bufferSource: WebAssembly$BufferSource): this;
static customSections(module: WebAssembly$Module, sectionName: string): ArrayBuffer[];
static exports(module: WebAssembly$Module): WebAssembly$Imports;
static imports(module: WebAssembly$Module): WebAssembly$Exports
}


/**
 * WebAssembly.Instance
 */
declare class WebAssembly$Instance  {
exports: any;
constructor(module: WebAssembly$Module, importObject?: any): this
}


/**
 * WebAssembly.Memory
 * Note: A WebAssembly page has a constant size of 65,536 bytes, i.e., 64KiB.
 */
declare interface WebAssembly$MemoryDescriptor {
initial: number,
maximum?: number
} 

declare class WebAssembly$Memory  {
buffer: ArrayBuffer;
constructor(memoryDescriptor: WebAssembly$MemoryDescriptor): this;
grow(numPages: number): number
}


/**
 * WebAssembly.Table
 */
declare interface WebAssembly$TableDescriptor {
element: "anyfunc",
initial: number,
maximum?: number
} 

declare class WebAssembly$Table  {
length: number;
constructor(tableDescriptor: WebAssembly$TableDescriptor): this;
get(index: number): (args: any[]) => any;
grow(numElements: number): number;
set(index: number, value: (args: any[]) => any): void
}


/**
 * Errors
 */
declare class WebAssembly$CompileError mixins Error {
fileName: string;
lineNumber: string;
columnNumber: string;
constructor(message?: string, fileName?: string, lineNumber?: number): this;
toString(): string
}

declare class WebAssembly$LinkError mixins Error {
fileName: string;
lineNumber: string;
columnNumber: string;
constructor(message?: string, fileName?: string, lineNumber?: number): this;
toString(): string
}

declare class WebAssembly$RuntimeError mixins Error {
fileName: string;
lineNumber: string;
columnNumber: string;
constructor(message?: string, fileName?: string, lineNumber?: number): this;
toString(): string
}

declare function WebAssembly$compile(bufferSource: WebAssembly$BufferSource): Promise<WebAssembly$Module>


declare interface WebAssembly$ResultObject {
module: WebAssembly$Module,
instance: WebAssembly$Instance
} 

declare function WebAssembly$instantiate(
bufferSource: WebAssembly$BufferSource,
importObject?: {[key: string]: any}): Promise<WebAssembly$ResultObject>


declare function WebAssembly$instantiate(
module: WebAssembly$Module,
importObject?: {[key: string]: any}): Promise<WebAssembly$Instance>


declare function WebAssembly$validate(bufferSource: WebAssembly$BufferSource): boolean

    }
