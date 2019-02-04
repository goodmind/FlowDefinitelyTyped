declare module 'postman-collection' {
        declare export interface PropertyBaseDefinition {
description?: string | DescriptionDefinition
} 
	declare export class PropertyBase<TDefinition> mixins PropertyBaseDefinition {
description: string | DescriptionDefinition;
constructor(definition?: PropertyBaseDefinition | {
info: PropertyBaseDefinition
} | string): this;
findInParents(
property: string,
customizer?: (item: PropertyBase<PropertyBaseDefinition>) => boolean): PropertyBase<PropertyBaseDefinition>;
findParentContaining(
property: any,
customizer: (item: PropertyBase<PropertyBaseDefinition>) => boolean): PropertyBase<PropertyBaseDefinition>;
forEachParent(iterator: (item: any) => void): void;
forEachParent(options: {
withRoot: boolean
}, iterator: (item: any) => void): void;
meta(): any;
parent(): PropertyBase<PropertyBaseDefinition> | void;
setParent(parent: PropertyBase<PropertyBaseDefinition>): void;
toJSON(): TDefinition;
static propertyIsMeta(_value: any, key: string): boolean;
static propertyUnprefixMeta(_value: any, key: string): string;
static toJSON(obj: any): any
}
	declare export type PropertyDefinition = {
id?: string,
name?: string,
disabled?: boolean
} & PropertyBaseDefinition

	declare export class Property<TDefinition> mixins PropertyBase<TDefinition>, PropertyDefinition {
disabled: boolean;
id: string;
name: string;
constructor(definition?: TDefinition | {
info: TDefinition,
disabled: boolean
}): this;
describe(content: string, type?: string): void;
toObjectResolved(
scope: {
variables: VariableList
} | null,
overrides: any[],
options?: {
ignoreOwnVariables: boolean
}): TDefinition;
static replaceSubstitutions(str: string, variables: VariableList | VariableList[]): string;
static replaceSubstitutionsIn<T>(obj: T, variables: VariableList[], mutate: boolean): T
}
	declare export type CertificateDefinition = {
matches?: string[] | UrlMatchPatternList,
key?: {
src?: string
} | string,
cert?: {
src?: string
} | string,
passphrase?: string
} & PropertyDefinition

	declare export class Certificate mixins Property<CertificateDefinition>, CertificateDefinition {
cert: {
src?: string
};
key: {
src?: string
};
matches: UrlMatchPatternList;
passphrase: string;
constructor(options: CertificateDefinition): this;
canApplyTo(url: string | Url): boolean;
update(options: CertificateDefinition): void;
static isCertificate(obj: any): boolean
}
	declare export class PropertyList<TElement> mixins PropertyBase<PropertyBaseDefinition> {
constructor(type: string, parent: any, populate: TElement[]): this;
add(item: TElement): void;
all(): TElement[];
append(item: TElement): void;
assimilate(source: PropertyList<TElement> | TElement[], prune: boolean): void;
clear(): void;
count(): number;
each(iterator: (item: TElement) => void, context?: any): void;
eachParent(iterator: (item: any) => void, context?: any): void;
filter(rule: (item: TElement) => boolean, context: any): TElement[];
find(rule: (item: TElement) => boolean, context: any): TElement;
get(key: string): any;
has(item: string | TElement, value?: any): boolean;
idx(index: number): TElement;
indexOf(item: string): number;
insert(item: TElement, before: TElement | string): void;
insertAfter(item: TElement, after: TElement | string): void;
map(iterator: (item: TElement) => any, context?: any): any;
one(id: string): TElement;
populate(items: TElement[]): void;
prepend(item: TElement): void;
remove(
predicate: ((item: TElement) => boolean) | string | TElement,
context: any): void;
repopulate(items: any): void;
toJSON(): any;
toObject(
excludeDisabled?: boolean,
caseSensitive?: boolean,
multiValue?: boolean,
sanitizeKeys?: boolean): any;
toString(): string;
upsert(item: TElement): boolean | null;
static isPropertyList(obj: any): boolean
}
	declare export class CertificateList mixins PropertyList<Certificate> {
constructor(parent: any, list: CertificateDefinition[]): this;
resolveOne(url: string): CertificateDefinition;
static isCertificateList(obj: any): boolean
}
	declare export type ItemGroupDefinition = {
item?: Array<ItemDefinition | ItemGroupDefinition>,
auth?: RequestAuthDefinition,
event?: EventDefinition[]
} & PropertyDefinition

	declare export class ItemGroup<TItem> mixins Property<ItemGroupDefinition> {
auth: RequestAuth;
items: PropertyList<TItem>;
events: EventList;
constructor(definition?: ItemGroupDefinition): this;
authorizeRequestsUsing(type: string | RequestAuthDefinition, options?: VariableList): void;
forEachItem(callback: (el: TItem) => void): void;
forEachItemGroup(callback: (el: ItemGroup<TItem>) => void): void;
oneDeep(idOrName: string): TItem;
static isItemGroup(obj: any): boolean
}
	declare export type CollectionDefinition = {
info?: {
id?: string,
name?: string,
version?: string
},
variable?: VariableDefinition
} & ItemGroupDefinition

	declare export class Collection mixins ItemGroup<Request> {
events: EventList;
variables: VariableList;
version: Version;
constructor(definition?: CollectionDefinition, environments?: any[]): this;
syncVariablesFrom(
obj: {
[key: string]: VariableDefinition
},
track?: boolean,
prune?: boolean): {
created: string[],
updated: string[],
deleted: string[]
} | void;
syncVariablesTo(
obj?: {
[key: string]: VariableDefinition
}): {
[key: string]: VariableDefinition
};
toJSON(): CollectionDefinition;
static isCollection(obj: any): boolean
}
	declare export interface CookieDefinition {
key?: string,
value?: string,
expires?: string | Date,
maxAge?: number,
domain: string,
path: string,
secure?: boolean,
httpOnly?: boolean,
hostOnly?: boolean,
session?: boolean,
extensions?: Array<{
key: string,
value: string
}>
} 
	declare export class Cookie mixins PropertyBase<CookieDefinition>, CookieDefinition {
domain: string;
expires: Date;
extensions: Array<{
key: string,
value: string
}>;
hostOnly: boolean;
httpOnly: boolean;
maxAge: number;
path: string;
secure: boolean;
session: boolean;
value: string;
constructor(options?: CookieDefinition): this;
update(options: CookieDefinition): void;
valueOf(): string;
static isCookie(obj: any): boolean;
static parse(str: string): CookieDefinition;
static splitParam(param: string): {
key: string,
value: string | boolean
}
}
	declare export class CookieList mixins PropertyList<Cookie> {
constructor(parent: any, cookies: Cookie[]): this;
static isCookieList(obj: any): boolean
}
	declare export interface DescriptionDefinition {
content: string,
type?: string
} 
	declare export class Description mixins DescriptionDefinition {
content: string;
type: string;
constructor(definition?: DescriptionDefinition | string): this;
toJSON(): DescriptionDefinition;
toString(): string;
update(content: DescriptionDefinition): void;
update(content: string, type?: string): void;
static isDescription(obj: any): boolean
}
	declare export type EventDefinition = {
listen?: string,
script: string | string[] | ScriptDefinition | Script
} & PropertyDefinition

	declare export class Event mixins Property<EventDefinition>, EventDefinition {
listen: string;
script: Script;
constructor(definition: EventDefinition): this;
update(definition: EventDefinition): void
}
	declare export class EventList mixins PropertyList<Event> {
constructor(parent: any, populate: Event[]): this;
listeners(name: string): Event[];
listenersOwn(name: string): Event[];
static isEventList(obj: any): boolean
}
	declare export type FormParamDefinition = {
key?: string,
value?: any
} & PropertyDefinition

	declare export class FormParam mixins Property<FormParamDefinition>, FormParamDefinition {
key: string;
value: any;
constructor(options: FormParamDefinition): this;
toString(): string;
valueOf(): any
}
	declare export type HeaderDefinition = {
key?: string,
value?: string,
system?: boolean
} & PropertyDefinition

	declare export class Header mixins Property<HeaderDefinition>, HeaderDefinition {
key: string;
value: string;
constructor(options: string | HeaderDefinition, name?: string): this;
toString(): string;
update(options: HeaderDefinition): void;
valueOf(): string;
static create(value?: HeaderDefinition | string, name?: string): Header;
static isHeader(obj: any): boolean;
static parse(headerString: string): HeaderDefinition[];
static parseSingle(header: string): HeaderDefinition;
static unparse(headers: HeaderList | HeaderDefinition[], separator?: string): string;
static unparseSingle(header: HeaderDefinition): string
}
	declare export class HeaderList mixins PropertyList<Header> {
constructor(parent: any, headers: Header[]): this;
contentSize(): number;
static isHeaderList(obj: any): boolean
}
	declare export type ItemDefinition = {
request?: RequestDefinition,
responses?: ResponseDefinition[],
events?: EventDefinition[]
} & PropertyDefinition

	declare export class Item mixins Property<ItemDefinition> {
events: EventList;
request: Request;
responses: PropertyList<Response>;
constructor(definition?: ItemDefinition): this;
authorizeRequestUsing(type: string | RequestAuthDefinition, options?: VariableList): void;
getAuth(): RequestAuth;
getEvents(name?: string): Event[];
static isItem(obj: any): boolean
}
	declare export type ProxyConfigDefinition = {
match?: string | {
pattern: string
} | UrlMatchPattern,
host?: string,
port?: number,
tunnel?: boolean
} & PropertyDefinition

	declare export class ProxyConfig mixins Property<ProxyConfigDefinition>, ProxyConfigDefinition {
host: string;
match: UrlMatchPattern;
port: number;
tunnel: boolean;
constructor(options?: ProxyConfigDefinition): this;
getProtocols(): string[];
getProxyUrl(): string;
test(urlStr?: string): boolean;
update(options: ProxyConfigDefinition): void;
updateProtocols(protocols: string[]): void;
static isProxyConfig(obj: any): boolean
}
	declare export class ProxyConfigList mixins PropertyList<ProxyConfig> {
constructor(parent: any, populate: ProxyConfig[]): this;
resolve(url: string | Url): ProxyConfig;
static isProxyConfigList(obj: any): boolean
}
	declare export type QueryParamDefinition = {
key: string | null,
value: string | null,
system?: boolean
} & PropertyDefinition

	declare export class QueryParam mixins Property<QueryParamDefinition>, QueryParamDefinition {
static _postman_propertyAllowsMultipleValues: boolean;
static _postman_propertyIndexKey: string;
key: string | null;
value: string | null;
system: boolean;
constructor(options: QueryParamDefinition | string): this;
toString(): string;
update(param: string | {
key: string,
value?: string
}): void;
valueOf(): string;
static parse(query: string): QueryParamDefinition[];
static parseSingle(param: string, idx: number, all: string[]): QueryParamDefinition;
static unparse(
params: QueryParamDefinition[],
options?: {
encode?: boolean,
ignoreDisabled?: boolean
}): string;
static unparseSingle(obj: QueryParamDefinition, encode: boolean): string
}
	declare export type RequestDefinition = {
url: string | Url,
method?: string,
header?: HeaderDefinition,
body?: RequestBody,
auth?: RequestAuthDefinition,
proxy?: ProxyConfigDefinition,
certificate?: CertificateDefinition
} & PropertyDefinition

	declare export class Request mixins Property<RequestDefinition>, RequestDefinition {
auth: RequestAuth;
body: RequestBody;
certificate: Certificate;
headers: HeaderList;
method: string;
proxy: ProxyConfig;
url: Url;
constructor(options: RequestDefinition | string): this;
addHeader(header: Header | HeaderDefinition): void;
addQueryParams(params: string | QueryParamDefinition[]): void;
authorizeUsing(type: string | RequestAuthDefinition | null, options?: VariableList): void;
clone(): Request;
forEachHeader(callback: (header: Header, context: Request) => void): void;
getHeaders(options?: {
ignoreCase?: boolean,
enabled?: boolean
}): any;
removeHeader(toRemove: string | Header, options?: {
ignoreCase: boolean
}): void;
removeQueryParams(
params: string | string[] | QueryParamDefinition[] | QueryParamDefinition): void;
toJSON(): RequestDefinition;
update(options: RequestDefinition): void;
upsertHeader(header: HeaderDefinition): void;
static isRequest(obj: any): boolean
}
	declare export type RequestAuthDefinition = {
type?: string
} & PropertyDefinition

	declare export class RequestAuth mixins Property<RequestAuthDefinition>, RequestAuthDefinition {
type: string;
constructor(options: RequestAuthDefinition, parent?: Property<PropertyDefinition> | PropertyList<RequestAuth>): this;
clear(type: string): void;
current(): any;
parameters(): VariableList;
update(
options: VariableList | Array<{
key: string,
value: string
}> | {
key: string,
value: string
},
type?: string): void;
use(
type: string,
options: VariableList | Array<{
key: string,
value: string
}> | {
key: string,
value: string
}): void;
static isValidType(type: any): boolean
}
	declare export type RequestBodyDefinition = {
mode: string,
raw?: string,
urlencoded?: QueryParamDefinition[] | PropertyList<QueryParam> | string,
file?: string | {
src: string
},
formdata?: FormParamDefinition[] | PropertyList<FormParam>
} & PropertyBaseDefinition

	declare export class RequestBody mixins PropertyBase<RequestBodyDefinition>, RequestBodyDefinition {
static MODES: {
raw: string,
formdata: string,
urlencoded: string,
file: string
};
file: {
src: string
};
formdata: PropertyList<FormParam>;
mode: string;
raw: string;
urlencoded: PropertyList<QueryParam>;
constructor(options: RequestBodyDefinition): this;
isEmpty(): boolean;
toString(): string;
update(options: RequestBodyDefinition): void
}
	declare export type ResponseDefinition = {
code: number,
header?: HeaderDefinition[],
cookie?: CookieDefinition[],
body?: string,
stream?: Buffer | Uint8Array,
responseTime: number,
originalRequest?: RequestDefinition
} & PropertyDefinition

	declare export class Response mixins Property<ResponseDefinition>, ResponseDefinition {
body: string;
code: number;
cookies: CookieList;
headers: HeaderList;
originalRequest: Request;
responseTime: number;
status: string;
stream: Buffer | Uint8Array;
responseSize: number;
constructor(options: ResponseDefinition): this;
dataURI(): string;
details(): {
name: string,
detail: string,
code: number,
standardName: string
} | void;
encoding(): {
format: string,
source: string
};
json(reviver?: any, strict?: boolean): any;
reason(): string;
size(): number;
text(): string | void;
toJSON(): any;
update(options: ResponseDefinition): void;
static createFromNode(
response: {
body: string | Buffer | Uint8Array,
headers?: HeaderDefinition[],
statusCode: number,
statusMessage?: string,
elapsedTime: number
},
cookies: CookieDefinition[]): Response;
static isResponse(obj: any): boolean
}
	declare export type ScriptDefinition = {
type?: string,
src?: string | Url,
exec?: string | string[]
} & PropertyDefinition

	declare export class Script mixins Property<ScriptDefinition>, ScriptDefinition {
exec: string[];
src: Url;
type: string;
constructor(options?: ScriptDefinition | string | string[]): this;
toSource(): string | void;
update(options: ScriptDefinition | string | string[]): void;
static isScript(obj: any): boolean
}
	declare export type UrlDefinition = {
auth?: {
user: string,
password: string
},
hash?: string,
host?: string[] | string,
path: string[] | string,
port?: string,
query?: QueryParamDefinition[] | PropertyList<QueryParam> | string,
variable?: VariableDefinition[],
protocol?: string
} & PropertyBaseDefinition

	declare export class Url mixins PropertyBase<UrlDefinition>, UrlDefinition {
auth: {
user: string,
password: string
};
hash: string;
host: string[];
path: string[];
port: string;
protocol: string;
query: PropertyList<QueryParam>;
variables: VariableList;
constructor(options: UrlDefinition | string): this;
addQueryParams(params: QueryParamDefinition[] | string): void;
getHost(): string;
getOAuth1BaseUrl(): string;
getPath(options?: {
unresolved: boolean
}): string;
getPathWithQuery(): string;
getQueryString(options?: {
encode?: boolean,
ignoredDisabled?: boolean
}): string;
getRaw(): string;
getRemote(options?: {
forcePort: boolean
}): string;
removeQueryParams(
params: QueryParamDefinition[] | QueryParamDefinition | string[] | string): void;
toString(forceProtocol?: boolean): string;
update(url: UrlDefinition | string): void;
static isUrl(obj: any): boolean;
static parse(url: string): UrlDefinition
}
	declare export class UrlMatchPattern  {
pattern: string;
constructor(options: string | {
pattern: string
}): this;
createMatchPattern(): {
protocols: string[],
host: string,
path: RegExp
} | void;
getProtocols(): string[];
globPatternToRegexp(pattern: string): RegExp;
matchAbsoluteHostPattern(
matchRegexObject: {
protocols: string[],
host: string,
path: RegExp
},
remote: string): boolean;
matchAnyHost(matchRegexObject: {
protocols: string[],
host: string,
path: RegExp
}): boolean;
matchSuffixHostPattern(
matchRegexObject: {
protocols: string[],
host: string,
path: RegExp
},
remote: string): boolean;
test(urlStr: string): boolean;
testHost(host: string): boolean;
testPath(path: string): boolean;
testProtocol(protocol: string): boolean;
toJSON(): {
pattern: string
};
toString(): string;
update(options: {
pattern: string
}): void;
static MATCH_ALL_URLS: string;
static PROTOCOL_DELIMITER: string
}
	declare export class UrlMatchPatternList mixins PropertyList<UrlMatchPattern> {
constructor(parent: Property<PropertyDefinition>, list: string[]): this;
test(urlStr: string): boolean
}
	declare export type VariableDefinition = {
value?: any,
type?: string,
key?: string
} & PropertyDefinition

	declare export class Variable mixins Property<VariableDefinition>, VariableDefinition {
key: string;
type: string;
value: any;
constructor(definition?: VariableDefinition | {
[index: string]: VariableDefinition
}): this;
cast(value: any): any;
castIn(value: any): any;
castOut(value: any): any;
get(): any;
set(value: any): void;
toString(): string;
update(options: VariableDefinition): void;
valueOf(value: any): any;
valueType(typeName: string, _noCast: boolean): string;
static isVariable(obj: any): boolean;
static types: {
string: StringConstructor,
boolean: BooleanConstructor,
number: NumberConstructor,
json: {
in: (val: any) => string,
out: (val: string) => any
},
any: {
in: <T>(val: T) => T,
out: <T>(val: T) => T
}
}
}
	declare export class VariableList mixins PropertyList<Variable> {
constructor(parent: Property<PropertyDefinition>, populate: Variable[]): this;
replace(str: string, overrides?: VariableList): string;
substitute<T>(obj: T, overrides?: VariableList, mutate?: boolean): T;
syncFromObject(
obj: {
[key: string]: VariableDefinition
},
track?: boolean,
prune?: boolean): {
created: string[],
updated: string[],
deleted: string[]
} | void;
syncToObject(
obj?: {
[key: string]: VariableDefinition
}): {
[key: string]: VariableDefinition
};
static isVariableList(obj: any): boolean
}
	declare export type VariableScopeDefinition = {
values?: VariableDefinition[]
} & PropertyDefinition

	declare export class VariableScope mixins Property<VariableScopeDefinition>, VariableScopeDefinition {
values: VariableDefinition[];
constructor(definition: VariableScopeDefinition | VariableList | VariableDefinition[], layers?: VariableList[] | VariableList): this;
addLayer(list: VariableList): void;
clear(): void;
get(key: string): any;
has(variableName: string): boolean;
set(key: string, value: any, type: string): void;
syncVariablesFrom(
obj: {
[key: string]: VariableDefinition
},
track?: boolean,
prune?: boolean): {
created: string[],
updated: string[],
deleted: string[]
} | void;
syncVariablesTo(
obj?: {
[key: string]: VariableDefinition
}): {
[key: string]: VariableDefinition
};
toJSON(): any;
toObject(excludeDisabled: boolean, caseSensitive: boolean): any;
unset(key: string): void;
variables(): {
[key: string]: VariableDefinition
};
static isVariableScope(obj: any): boolean
}
	declare export type VersionDefinition = {
build?: string,
major?: string,
minor?: string,
patch?: string,
prerelease?: string,
raw?: string,
version?: string
} & PropertyBaseDefinition

	declare export class Version mixins PropertyBase<VersionDefinition>, VersionDefinition {
build: string;
major: string;
minor: string;
patch: string;
prerelease: string;
raw: string;
string: string;
constructor(options?: VersionDefinition | string): this;
set(value?: VersionDefinition | string): void;
toString(): string
}
    }
