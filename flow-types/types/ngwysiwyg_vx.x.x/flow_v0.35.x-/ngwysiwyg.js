declare module 'ngwysiwyg' {
        declare interface ngWYSIWYG$Toolbar {
name: string,
items: string[]
} 

declare interface ngWYSIWYG$Config {
sanitize: boolean,
toolbar?: ngWYSIWYG$Toolbar[]
} 
    }
