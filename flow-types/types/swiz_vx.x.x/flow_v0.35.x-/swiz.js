declare module 'swiz' {
        declare export class Cidr  {
constructor(x: string, y?: string): this;
isInCIDR(x: any): boolean
}
	declare export class Valve  {
constructor(schema: IValveSchema, baton?: any): this;
setSchema(schema: IValveSchema): Valve;
addFinalValidator(func: (obj: any, callback: (err: Error, cleaned: any) => void) => void): Valve;
addChainValidator(
name: string,
description: string,
func: (value: any, callback: (err: Error, cleaned: any) => void) => void): void;
check(
obj: any,
options: ICheckOptions,
callback: (err: any, cleaned: any) => void): void;
check(obj: any, callback: (err: any, cleaned: any) => void): void;
checkUpdate(existing: any, obj: any, callback: (err: any, cleaned: any) => void): void;
help(schema: IValveSchema): any
}
	declare export interface ICheckOptions {
strict?: boolean
} 
	declare export interface IValveSchema {
[index: string]: IValveSchemaMember
} 
	declare export interface IValveSchemaMember {} 
	declare export type IValveSchemaMemberArray = {
[index: string]: IValveSchemaMember
} & IValveSchemaMember

	declare export function Chain(): IChain

	declare export function chain(): IChain

	declare export type IChain = {
getValidatorPos(name: string): number,
hasValidator(name: string): number,
getValidatorAtPos(pos: number): IValidator,
isUnique(): IChain,
toUnique(): IChain,
notIPBlacklisted(): IChain,
isCIDR(): IChain,
isEmail(): IChain,
isUrl(): IChain,
isAddressPair(): IChain,
isIP(): IChain,
isIPv4(): IChain,
isIPv6(): IChain,
isHostnameOrIp(): IChain,
isAllowedFQDNOrIP(blacklist?: string[]): IChain,
isHostname(): IChain,
isAlpha(): IChain,
isAlphanumeric(): IChain,
isNumeric(): IChain,
isInt(): IChain,
isLowercase(): IChain,
isUppercase(): IChain,
isDecimal(): IChain,
isFloat(): IChain,
notNull(): IChain,
isNull(): IChain,
notEmpty(): IChain,
equals(arg: any): IChain,
contains(arg: any): IChain,
notContains(arg: any): IChain,
notIn(values: any[], caseSensitive?: boolean): IChain,
regex(pattern: RegExp): IChain,
regex(pattern: string, modifiers?: string): IChain,
is(pattern: string, modifiers?: string): IChain,
notRegex(pattern: RegExp): IChain,
notRegex(pattern: string, modifiers?: string): IChain,
not(pattern: string, modifiers: string): IChain,
len(min: number, max?: number): IChain,
numItems(min: number, max: number): IChain,
toFloat(): IChain,
toInt(): IChain,
toBoolean(): IChain,
toBooleanStrict(): IChain,
entityDecode(): IChain,
entityEncode(): IChain,
trim(chars?: string): IChain,
ltrim(chars?: string): IChain,
rtrim(chars: string): IChain,
ifNull(replace: string): IChain,
xss(is_image?: boolean): IChain,
enumerated(map: any): IChain,
inArray(array: any[]): IChain,
isString(): IChain,
isBoolean(): IChain,
range(min: any, max: any): IChain,
optional(): IChain,
isPort(): IChain,
isV1UUID(): IChain,
immutable(): IChain,
updateRequired(): IChain,
isArray(chain: IChain): IChain,
isHash(keyChain: IChain, valueChain: IChain): IChain,
rename(target: string): IChain,
custom(name: string): IChain
} & IValveSchemaMember

	declare export function defToValve(def: struct.IObj[]): IValveSchema[]

	declare export class Swiz  {
constructor(defs: struct.IObj[], options?: ISwizOptions): this;
buildObject(obj: any, callback: (err: any, result: any) => void): void;
buildObjectSync(obj: any): any;
serializeJson(obj: any): string;
serializeXml(obj: any): string;
deserializeXml(xml: string): any;
serialize(
mode: SERIALIZATION,
version: number,
obj: ISerializable,
callback: (err: any, result: string) => void): void;
serializeForPagination(
mode: SERIALIZATION,
array: any[],
metadata: any,
callback: (err: any, result: string) => void): void;
deserialize(
mode: SERIALIZATION,
version: number,
raw: string,
callback: (err: any, result: any) => void): void;
getFieldDefinition(stype: string, name: string): struct.IField
}
	declare export interface ISerializable {
getSerializerType(): string
} 
	declare export interface ISwizOptions {
stripNulls?: boolean,
stripSerializerType?: boolean,
for?: string
} 
	declare interface IValidator {
name: string,
func(value: any, baton: any, callback: Function): void,
help: string
} 
	declare export function stripSerializerTypes(obj: any): any

	declare module 'struct' {
        declare export function Obj(name: string, options?: IObjOptions): IObj

	declare export function Field(name: string, options?: IFieldOptions): IField

	declare export function coerce(value: any, coerceTo: string): any

	declare export interface IObj {
name: string,
options: IObjOptions,
singular: string,
plural: string,
fields: IField[]
} 
	declare export interface IField {
name: string,
options: IFieldOptions,
src: string,
singular: string,
plural: string,
desc?: string,
val?: IChain,
attribute: boolean,
enumerated: boolean,
ignorePublic: boolean,
filterFrom: string[],
coerceTo: any
} 
	declare export interface IObjOptions {
singular?: string,
plural?: string,
fields?: IField[]
} 
	declare export interface IFieldOptions {
src?: string,
singular?: string,
plural?: string,
desc?: string,
val?: IChain,
attribute?: boolean,
enumerated?: any,
ignorePublic?: boolean,
filterFrom?: string[],
coerceTo?: string
} 
    }

	declare export  class SERIALIZATION {
  constructor(...args: empty): mixed;
static +SERIALIZATION_JSON: Class<SERIALIZATION__SERIALIZATION_JSON> & SERIALIZATION__SERIALIZATION_JSON & 0;// 0
static +SERIALIZATION_XML: Class<SERIALIZATION__SERIALIZATION_XML> & SERIALIZATION__SERIALIZATION_XML & 1;// 1

}

declare class SERIALIZATION__SERIALIZATION_JSON mixins SERIALIZATION {}
declare class SERIALIZATION__SERIALIZATION_XML mixins SERIALIZATION {}

    }
