declare module 'jquery-next-id' {
        declare export interface JQueryNextId {
(prefix?: string): JQuery,
defaults: {
prefix: string,
separator: string
}
} 
	declare module 'global' {
        declare interface JQuery {
nextId: JQueryNextId
} 
    }

    }
