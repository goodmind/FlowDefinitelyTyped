declare module 'xmldom' {
        
      declare var npm$namespace$xmldom: {
        
        DOMParser: typeof xmldom$DOMParser,
XMLSerializer: typeof xmldom$XMLSerializer,
DOMImplementation: typeof xmldom$DOMImplementation,
      }
declare var xmldom$DOMParser: xmldom$DOMParserStatic;

declare var xmldom$XMLSerializer: xmldom$XMLSerializerStatic;

declare var xmldom$DOMImplementation: xmldom$DOMImplementationStatic;

declare interface xmldom$DOMImplementationStatic {
new (): xmldom$DOMImplementation
} 

declare interface xmldom$DOMParserStatic {
new (): xmldom$DOMParser,
new (options: xmldom$Options): xmldom$DOMParser
} 

declare interface xmldom$XMLSerializerStatic {
new (): xmldom$XMLSerializer
} 

declare interface xmldom$DOMParser {
parseFromString(xmlsource: string, mimeType?: string): Document
} 

declare interface xmldom$XMLSerializer {
serializeToString(node: Node): string
} 

declare interface xmldom$Options {
locator?: any,
errorHandler?: xmldom$ErrorHandlerFunction | xmldom$ErrorHandlerObject
} 

declare interface xmldom$ErrorHandlerFunction {
(level: string, msg: any): any
} 

declare interface xmldom$ErrorHandlerObject {
warning?: (msg: any) => any,
error?: (msg: any) => any,
fatalError?: (msg: any) => any
} 
	declare module.exports: typeof xmldom

    }
