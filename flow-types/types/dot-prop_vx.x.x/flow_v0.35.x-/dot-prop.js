declare module 'dot-prop' {
        declare interface DotProp {
get(obj: {[key: string]: any}, path: string, defaultValue?: any): any,
set<T: {[key: string]: any}>(obj: T, path: string, value: any): T,
has(obj: {[key: string]: any}, path: string): boolean,
delete(obj: {[key: string]: any}, path: string): boolean
} 
	declare var dotProp: DotProp;
	declare module.exports: typeof dotProp

    }
