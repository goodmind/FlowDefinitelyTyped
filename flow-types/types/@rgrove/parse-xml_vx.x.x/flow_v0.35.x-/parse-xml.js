declare module '@rgrove/parse-xml' {
        declare function parseXml(
name: string,
options?: parseXml$parseXml$ParseOptions): parseXml$parseXml$Document

	declare interface parseXml$NodeBase {
parent?: parseXml$NodeBase,
type: string
} 

declare type parseXml$Document = {
type: "document",
children: parseXml$NodeBase[]
} & parseXml$NodeBase


declare type parseXml$CData = {
type: "cdata",
text: string
} & parseXml$NodeBase


declare type parseXml$Comment = {
type: "comment",
content: string
} & parseXml$NodeBase


declare type parseXml$Text = {
type: "text",
text: string
} & parseXml$NodeBase


declare type parseXml$Element = {
type: "element",
attributes: {
[key: string]: string
},
children: parseXml$NodeBase[],
name: string,
preserveWhitespace?: string
} & parseXml$NodeBase


declare type parseXml$Node = parseXml$CData | parseXml$Comment | parseXml$Element | parseXml$Text;

declare interface parseXml$ParseOptions {
ignoreUndefinedEntities?: boolean,
preserveCdata?: boolean,
preserveComments?: boolean,
resolveUndefinedEntity?: (ref: string) => string
} 
	declare module.exports: typeof parseXml

    }
