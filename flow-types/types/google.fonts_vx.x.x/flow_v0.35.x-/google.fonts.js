declare module 'google.fonts' {
        declare interface fonts$WebfontList {
kind: string,
items: fonts$WebfontFamily[]
} 

declare interface fonts$WebfontFamily {
category?: string,
kind: string,
family: string,
subsets: string[],
variants: string[],
version: string,
lastModified: string,
files: {
[variant: string]: string
}
} 
    }
