declare module 'find-package-json' {
        declare module.exports: typeof finder

	declare function finder(root?: string | Module): finder$finder$FinderIterator

	declare interface finder$FinderIterator {
next(): finder$FindResult
} 

declare type finder$FindResult = finder$FoundPackage | finder$Done;

declare interface finder$FoundPackage {
done: false,
value: finder$Package,
filename: string
} 

declare interface finder$Done {
done: true,
value: void,
filename: void
} 

declare interface finder$Person {
name?: string,
email?: string,
url?: string
} 

declare interface finder$Package {
[k: string]: any,
name?: string,
version?: string,
files?: string[],
bin?: {
[k: string]: string
},
man?: string[],
keywords?: string[],
author?: finder$Person,
maintainers?: finder$Person[],
contributors?: finder$Person[],
bundleDependencies?: {
[name: string]: string
},
dependencies?: {
[name: string]: string
},
devDependencies?: {
[name: string]: string
},
optionalDependencies?: {
[name: string]: string
},
description?: string,
engines?: {
[type: string]: string
},
license?: string,
repository?: {
type: string,
url: string
},
bugs?: {
url: string,
email?: string
} | {
url?: string,
email: string
},
homepage?: string,
scripts?: {
[k: string]: string
},
readme?: string
} 
    }
