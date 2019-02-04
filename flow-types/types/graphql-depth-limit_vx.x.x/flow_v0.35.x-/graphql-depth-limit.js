declare module 'graphql-depth-limit' {
        declare function depthLimit(
depthLimit: number,
options?: depthLimit$depthLimit$Options,
callback?: (obj: any) => void): any

	declare module.exports: typeof depthLimit

	declare interface depthLimit$Options {
ignore: Array<string | RegExp | ((queryDepths: any[]) => boolean)>
} 
    }
