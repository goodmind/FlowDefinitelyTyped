declare module 'linkify-issues' {
        declare module.exports: typeof linkifyIssues

	declare function linkifyIssues(input: string, options?: linkifyIssues$linkifyIssues$TypeStringOptions): string

	declare function linkifyIssues(
input: string,
options: linkifyIssues$linkifyIssues$TypeDomOptions): DocumentFragment

	declare interface linkifyIssues$BaseOptions {
user: string,
repo: string,
attributes?: {
[attrName: string]: string | number | boolean | Array<string | number>
},
baseUrl?: string
} 

declare type linkifyIssues$TypeStringOptions = {
type?: "string"
} & linkifyIssues$BaseOptions


declare type linkifyIssues$TypeDomOptions = {
type: "dom"
} & linkifyIssues$BaseOptions

    }
