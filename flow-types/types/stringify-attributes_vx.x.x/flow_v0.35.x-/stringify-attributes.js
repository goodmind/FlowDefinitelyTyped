declare module 'stringify-attributes' {
        declare module.exports: typeof stringifyAttributes

	declare function stringifyAttributes(attributes: stringifyAttributes$stringifyAttributes$Attributes): string

	declare interface stringifyAttributes$Attributes {
[attrName: string]: string | number | boolean | Array<string | number>
} 
    }
