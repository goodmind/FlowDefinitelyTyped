declare module 'linkify-urls' {
        declare module.exports: typeof linkifyUrls

	declare function linkifyUrls(input: string, options?: linkifyUrls$linkifyUrls$TypeStringOptions): string

	declare function linkifyUrls(
input: string,
options: linkifyUrls$linkifyUrls$TypeDomOptions): DocumentFragment

	declare interface linkifyUrls$BaseOptions {
attributes?: {
[attrName: string]: string | number | boolean | Array<string | number>
},
value?: string | ((url: string) => string)
} 

declare type linkifyUrls$TypeStringOptions = {
type?: "string"
} & linkifyUrls$BaseOptions


declare type linkifyUrls$TypeDomOptions = {
type: "dom"
} & linkifyUrls$BaseOptions

    }
