declare module 'caseless' {
        declare type KeyType = string;
	declare type ValueType = any;
	declare type RawDict = {[key: string]: any};
	declare export interface Caseless {
set(name: KeyType, value: ValueType, clobber?: boolean): KeyType | false,
set(dict: RawDict): void,
has(name: KeyType): KeyType | false,
get(name: KeyType): ValueType | void,
swap(name: KeyType): void,
del(name: KeyType): boolean
} 
	declare export interface Httpified {
headers: RawDict,
setHeader(name: KeyType, value: ValueType, clobber?: boolean): KeyType | false,
setHeader(dict: RawDict): void,
hasHeader(name: KeyType): KeyType | false,
getHeader(name: KeyType): ValueType | void,
removeHeader(name: KeyType): boolean
} 
	declare export function httpify(resp: {[key: string]: any}, headers: RawDict): Caseless

	declare function caseless(dict?: RawDict): Caseless

	declare export default typeof caseless

    }
