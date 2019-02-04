declare module 'donna' {
        declare export function generateMetadata(modules: string[]): DonnaTypes$DonnaTypes$Metadata

	declare interface DonnaTypes$Metadata {
files: {
[filePath: string]: DonnaTypes$File
}
} 

declare interface DonnaTypes$File {
objects: {
[line: number]: DonnaTypes$Line
},
exports: any
} 

declare interface DonnaTypes$Line {
[row: number]: DonnaTypes$Object
} 

declare interface DonnaTypes$Object {
type: string,
name: string,
bindingType: string,
paramNames?: string[],
classProperties?: any[],
prototypeProperties?: number[][],
doc?: string,
range: number[][]
} 
    }
