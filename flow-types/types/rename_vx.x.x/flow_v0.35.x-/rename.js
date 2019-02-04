declare module 'rename' {
        declare module.exports: typeof Rename

	declare function Rename(
filepath: string | Rename$Rename$FileObject,
transformer: Rename$Rename$Transformer): Rename$Rename$FilePath

	
      declare var npm$namespace$Rename: {
        parse: typeof Rename$parse,
stringify: typeof Rename$stringify,
        
      }
declare interface Rename$FileObject {
dirname?: string,
basename?: string,
extname?: string,
path?: string,
hash?: string
} 

declare interface Rename$Specification {
dirname?: string,
prefix?: string,
basename?: string,
suffix?: string,
extname?: string
} 

declare type Rename$FilePath = string | Rename$Specification;

declare type Rename$Transformer = ((spec: Rename$FileObject) => Rename$FilePath) | Rename$FilePath;

declare function Rename$parse(filename: string): Rename$FileObject


declare function Rename$stringify(obj: Rename$FileObject): string

    }
