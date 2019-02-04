declare module 'nats-hemera' {
        declare module.exports: typeof Hemera

	declare type Hemera$LogLevel = "fatal"
| "error"
| "warn"
| "info"
| "debug"
| "trace"
| "silent";

declare interface Hemera$ErrioConfig {
recursive?: boolean,
inherited?: boolean,
stack?: boolean,
private?: boolean,
exclude?: any,
include?: any
} 

declare interface Hemera$BloomrunConfig {
indexing: "insertion" | "depth",
lookupBeforeAdd: boolean
} 

declare interface Hemera$Config {
timeout?: number,
pluginTimeout?: number,
tag?: string,
prettyLog?: boolean,
name?: string,
crashOnFatal?: boolean,
logLevel?: Hemera$LogLevel,
childLogger?: boolean,
maxRecursion?: number,
logger?: any,
errio?: Hemera$ErrioConfig,
bloomrun?: Hemera$BloomrunConfig,
load?: Hemera$LoadConfig,
circuitBreaker?: Hemera$CircuitBreakerConfig
} 

declare interface Hemera$CircuitBreakerConfig {
enabled?: boolean,
minSuccesses?: number,
halfOpenTime?: number,
resetIntervalTime?: number,
maxFailures?: number
} 

declare interface Hemera$LoadConfig {
checkPolicy?: boolean,
shouldCrash?: boolean,
process?: Hemera$LoadProcessConfig,
policy?: Hemera$LoadPolicyConfig
} 

declare interface Hemera$LoadPolicyConfig {
maxHeapUsedBytes?: number,
maxRssBytes?: number,
maxEventLoopDelay?: number
} 

declare interface Hemera$LoadProcessConfig {
sampleInterval?: number
} 

declare interface Hemera$Pattern {
topic: string,
[key: string]: any
} 

declare type Hemera$ClientResult = any;

declare type Hemera$ActHandler = (error: Error, response: Hemera$ClientResult) => void;

declare interface Hemera$PluginDefinitionAttributes {
name: string,
description: string,
version: string
} 

declare interface Hemera$PluginDefinition {
register: any,
attributes: Hemera$PluginDefinitionAttributes,
options: any,
parentPluginName: string
} 

declare interface Hemera$AddMeta {
schema: any,
pattern: Hemera$Pattern,
action: any,
plugin: Hemera$PluginDefinition,
use(handler: Hemera$AddMetaMiddleware): Hemera$AddMeta,
end(cb: () => void): void
} 

declare type Hemera$AddMetaMiddleware = (
request: Hemera$ServerRequest,
response: Hemera$ServerResponse,
next: () => void) => void;

declare interface Hemera$ServerRequest {
payload: any,
error: any,
locals: any
} 

declare interface Hemera$ServerResponse {
payload: any,
error: any
} 

declare type Hemera$AddHandler = (request: Hemera$Pattern, reply?: any) => void;

declare type Hemera$HemeraEvents = "error"
| "clientPreRequest"
| "clientPostRequest"
| "serverPreHandler"
| "serverPreRequest"
| "serverPreResponse";

declare type Hemera$ExtensionType = "onClientPreRequest"
| "onClientPostRequest"
| "onServerPreHandler"
| "onServerPreRequest"
| "onServerPreResponse";

declare type Hemera$ExtensionHandler = (
ctx: Hemera,
request: any,
response: any,
next?: Hemera$ExtensionNextHandler) => void;

declare type Hemera$ExtensionNextHandler = (error: Error) => void;

declare interface Hemera$CodecPipeline {
add(step: any): Hemera$CodecPipeline,
reset(step: any): Hemera$CodecPipeline,
unshift(step: any): Hemera$CodecPipeline,
run(msg: any, cb: any): any
} 

declare interface Hemera$Plugins {
[name: string]: Hemera$PluginDefinition
} 

declare interface Hemera$Request {
id: string,
type: Hemera$RequestType
} 

declare type Hemera$RequestType = "pubsub" | "request";

declare interface Hemera$Trace {
traceId: string,
parentSpanId: string,
spanId: string,
timestamp: number,
service: string,
method: string,
duration: number
} 

declare type Hemera$Types = "any"
| "alternatives"
| "array"
| "boolean"
| "binary"
| "date"
| "function"
| "lazy"
| "number"
| "object"
| "string";

declare type Hemera$LanguageOptions = string | boolean | null | {
[key: string]: Hemera$LanguageOptions
};

declare type Hemera$LanguageRootOptions = {
root?: string,
key?: string,
messages?: {
wrapArrays?: boolean
}
} & $Shape<Record<Hemera$Types, Hemera$LanguageOptions>> & {
[key: string]: Hemera$LanguageOptions
};

declare interface Hemera$ValidationOptions {

/**
 * when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.
 */
abortEarly?: boolean,

/**
 * when true, attempts to cast values to the required types (e.g. a string to a number). Defaults to true.
 */
convert?: boolean,

/**
 * when true, allows object to contain unknown keys which are ignored. Defaults to false.
 */
allowUnknown?: boolean,

/**
 * when true, ignores unknown keys with a function value. Defaults to false.
 */
skipFunctions?: boolean,

/**
 * remove unknown elements from objects and arrays. Defaults to false
 * - when true, all unknown elements will be removed
 * - when an object:
 *       - arrays - set to true to remove unknown items from arrays.
 *       - objects - set to true to remove unknown keys from objects
 */
stripUnknown?: boolean | {
arrays?: boolean,
objects?: boolean
},

/**
 * overrides individual error messages. Defaults to no override ({}).
 */
language?: Hemera$LanguageRootOptions,

/**
 * sets the default presence requirements. Supported modes: 'optional', 'required', and 'forbidden'. Defaults to 'optional'.
 */
presence?: "optional" | "required" | "forbidden",

/**
 * provides an external data set to be used in references
 */
context?: Hemera$Context,

/**
 * when true, do not apply default values. Defaults to false.
 */
noDefaults?: boolean
} 

declare interface Hemera$RenameOptions {

/**
 * if true, does not delete the old key name, keeping both the new and old keys in place. Defaults to false.
 */
alias?: boolean,

/**
 * if true, allows renaming multiple keys to the same destination where the last rename wins. Defaults to false.
 */
multiple?: boolean,

/**
 * if true, allows renaming a key over an existing key. Defaults to false.
 */
override?: boolean,

/**
 * if true, skip renaming of a key if it's undefined. Defaults to false.
 */
ignoreUndefined?: boolean
} 

declare interface Hemera$EmailOptions {

/**
 * Numerical threshold at which an email address is considered invalid
 */
errorLevel?: number | boolean,

/**
 * Specifies a list of acceptable TLDs.
 */
tldWhitelist?: string[] | {[key: string]: any},

/**
 * Number of atoms required for the domain. Be careful since some domains, such as io, directly allow email.
 */
minDomainAtoms?: number
} 

declare interface Hemera$IpOptions {

/**
 * One or more IP address versions to validate against. Valid values: ipv4, ipv6, ipvfuture
 */
version?: string | string[],

/**
 * Used to determine if a CIDR is allowed or not. Valid values: optional, required, forbidden
 */
cidr?: string
} 

declare type Hemera$GuidVersions = "uuidv1"
| "uuidv2"
| "uuidv3"
| "uuidv4"
| "uuidv5";

declare interface Hemera$GuidOptions {
version: Hemera$GuidVersions[] | Hemera$GuidVersions
} 

declare interface Hemera$UriOptions {

/**
 * Specifies one or more acceptable Schemes, should only include the scheme name.
 * Can be an Array or String (strings are automatically escaped for use in a Regular Expression).
 */
scheme?: string | RegExp | Array<string | RegExp>
} 

declare interface Hemera$Base64Options {

/**
 * optional parameter defaulting to true which will require = padding if true or make padding optional if false
 */
paddingRequired?: boolean
} 

declare interface Hemera$WhenOptions {

/**
 * the required condition joi type.
 */
is: Hemera$SchemaLike,

/**
 * the alternative schema type if the condition is true. Required if otherwise is missing.
 */
then?: Hemera$SchemaLike,

/**
 * the alternative schema type if the condition is false. Required if then is missing
 */
otherwise?: Hemera$SchemaLike
} 

declare interface Hemera$ReferenceOptions {
separator?: string,
contextPrefix?: string,
default?: any,
strict?: boolean,
functions?: boolean
} 

declare interface Hemera$POptions {
version?: string[],
cidr?: string
} 

declare interface Hemera$JoiObject {
isJoi: boolean
} 

declare type Hemera$ValidationError = {
details: Hemera$ValidationErrorItem[],
annotate(): string,
_object: any
} & Error & Hemera$JoiObject


declare interface Hemera$ValidationErrorItem {
message: string,
type: string,
path: string[],
options?: Hemera$ValidationOptions,
context?: Hemera$Context
} 

declare type Hemera$ValidationErrorFunction = (
errors: Hemera$ValidationErrorItem[]) => string | Hemera$ValidationErrorItem | Hemera$ValidationErrorItem[] | Error;

declare interface Hemera$ValidationResult<T> {
error: Hemera$ValidationError,
value: T
} 

declare type Hemera$SchemaLike = string
| number
| boolean
| {[key: string]: any}
| null
| Hemera$Schema
| Hemera$SchemaMap;

declare interface Hemera$SchemaMap {
[key: string]: Hemera$SchemaLike | Hemera$SchemaLike[]
} 

declare type Hemera$Schema = Hemera$AnySchema
| Hemera$ArraySchema
| Hemera$AlternativesSchema
| Hemera$BinarySchema
| Hemera$BooleanSchema
| Hemera$DateSchema
| Hemera$FunctionSchema
| Hemera$NumberSchema
| Hemera$ObjectSchema
| Hemera$StringSchema;

declare type Hemera$AnySchema = {
schemaType?: Hemera$Types | string,

/**
 * Validates a value using the schema and options.
 */
validate<T>(value: T): Hemera$ValidationResult<T>,
validate<T, R>(value: T, callback: (err: Hemera$ValidationError, value: T) => R): R,
validate<T, R>(
value: T,
options: Hemera$ValidationOptions,
callback: (err: Hemera$ValidationError, value: T) => R): R,

/**
 * Whitelists a value
 */
allow(...values: any[]): this,
allow(values: any[]): this,

/**
 * Adds the provided values into the allowed whitelist and marks them as the only valid values allowed.
 */
valid(...values: any[]): this,
valid(values: any[]): this,
only(...values: any[]): this,
only(values: any[]): this,
equal(...values: any[]): this,
equal(values: any[]): this,

/**
 * Blacklists a value
 */
invalid(...values: any[]): this,
invalid(values: any[]): this,
disallow(...values: any[]): this,
disallow(values: any[]): this,
not(...values: any[]): this,
not(values: any[]): this,

/**
 * Marks a key as required which will not allow undefined as value. All keys are optional by default.
 */
required(): this,
exist(): this,

/**
 * Marks a key as optional which will allow undefined as values. Used to annotate the schema for readability as all keys are optional by default.
 */
optional(): this,

/**
 * Marks a key as forbidden which will not allow any value except undefined. Used to explicitly forbid keys.
 */
forbidden(): this,

/**
 * Marks a key to be removed from a resulting object or array after validation. Used to sanitize output.
 */
strip(): this,

/**
 * Annotates the key
 */
description(desc: string): this,

/**
 * Annotates the key
 */
notes(notes: string[] | string): this,

/**
 * Annotates the key
 */
tags(notes: string[] | string): this,

/**
 * Attaches metadata to the key.
 */
meta(meta: {[key: string]: any}): this,

/**
 * Annotates the key with an example value, must be valid.
 */
example(value: any): this,

/**
 * Annotates the key with an unit name.
 */
unit(name: string): this,

/**
 * Overrides the global validate() options for the current key and any sub-key.
 */
options(options: Hemera$ValidationOptions): this,

/**
 * Sets the options.convert options to false which prevent type casting for the current key and any child keys.
 */
strict(isStrict?: boolean): this,

/**
 * Sets a default value if the original value is undefined.
 * @param value - the value.
value supports references.
value may also be a function which returns the default value.
If value is specified as a function that accepts a single parameter, that parameter will be a context
object that can be used to derive the resulting value. This clones the object however, which incurs some
overhead so if you don't need access to the context define your method so that it does not accept any
parameters.
Without any value, default has no effect, except for object that will then create nested defaults
(applying inner defaults of that object).

Note that if value is an object, any changes to the object after default() is called will change the
reference and any future assignment.

Additionally, when specifying a method you must either have a description property on your method or the
second parameter is required.
 */
default(value?: any, description?: string): this,

/**
 * Returns a new type that is the result of adding the rules of one type to another.
 */
concat(schema: this): this,

/**
 * Converts the type into an alternatives type where the conditions are merged into the type definition where:
 */
when(
ref: string | Hemera$Reference,
options: Hemera$WhenOptions): Hemera$AlternativesSchema,

/**
 * Overrides the key name in error messages.
 */
label(name: string): this,

/**
 * Outputs the original untouched value instead of the casted value.
 */
raw(isRaw?: boolean): this,

/**
 * Considers anything that matches the schema to be empty (undefined).
 * @param schema - any object or joi schema to match. An undefined schema unsets that rule.
 */
empty(schema?: Hemera$SchemaLike): this,

/**
 * Overrides the default joi error with a custom error if the rule fails where:
 * @param err - can be:
an instance of `Error` - the override error.
a `function(errors)`, taking an array of errors as argument, where it must either:
return a `string` - substitutes the error message with this text
return a single ` object` or an `Array` of it, where:
`type` - optional parameter providing the type of the error (eg. `number.min`).
`message` - optional parameter if `template` is provided, containing the text of the error.
`template` - optional parameter if `message` is provided, containing a template string, using the same format as usual joi language errors.
`context` - optional parameter, to provide context to your error if you are using the `template`.
return an `Error` - same as when you directly provide an `Error`, but you can customize the error message based on the errors.

Note that if you provide an `Error`, it will be returned as-is, unmodified and undecorated with any of the
normal joi error properties. If validation fails and another error is found before the error
override, that error will be returned and the override will be ignored (unless the `abortEarly`
option has been set to `false`).
 */
error(err: Error | Hemera$ValidationErrorFunction): this,

/**
 * Returns a plain object representing the schema's rules and properties
 */
describe(): Hemera$Description
} & Hemera$JoiObject


declare interface Hemera$Description {
type?: Hemera$Types | string,
label?: string,
description?: string,
flags?: {[key: string]: any},
notes?: string[],
tags?: string[],
meta?: any[],
example?: any[],
valids?: any[],
invalids?: any[],
unit?: string,
options?: Hemera$ValidationOptions,
[key: string]: any
} 

declare interface Hemera$Context {
[key: string]: any,
key?: string,
label?: string
} 

declare interface Hemera$State {
key?: string,
path?: string,
parent?: any,
reference?: any
} 

declare type Hemera$BooleanSchema = {

/**
 * Allows for additional values to be considered valid booleans by converting them to true during validation.
 * Accepts a value or an array of values. String comparisons are by default case insensitive,
 * see boolean.insensitive() to change this behavior.
 * @param values - strings, numbers or arrays of them
 */
truthy(...values: Array<string | number | string[] | number[]>): this,

/**
 * Allows for additional values to be considered valid booleans by converting them to false during validation.
 * Accepts a value or an array of values. String comparisons are by default case insensitive,
 * see boolean.insensitive() to change this behavior.
 * @param values - strings, numbers or arrays of them
 */
falsy(...values: Array<string | number | string[] | number[]>): this,

/**
 * Allows the values provided to truthy and falsy as well as the "true" and "false" default conversion
 * (when not in strict() mode) to be matched in a case insensitive manner.
 */
insensitive(enabled?: boolean): this
} & Hemera$AnySchema


declare type Hemera$NumberSchema = {

/**
 * Specifies the minimum value.
 * It can also be a reference to another field.
 */
min(limit: number | Hemera$Reference): this,

/**
 * Specifies the maximum value.
 * It can also be a reference to another field.
 */
max(limit: number | Hemera$Reference): this,

/**
 * Specifies that the value must be greater than limit.
 * It can also be a reference to another field.
 */
greater(limit: number | Hemera$Reference): this,

/**
 * Specifies that the value must be less than limit.
 * It can also be a reference to another field.
 */
less(limit: number | Hemera$Reference): this,

/**
 * Requires the number to be an integer (no floating point).
 */
integer(): this,

/**
 * Specifies the maximum number of decimal places where:
 * @param limit - the maximum number of decimal places allowed.
 */
precision(limit: number): this,

/**
 * Specifies that the value must be a multiple of base.
 */
multiple(base: number): this,

/**
 * Requires the number to be positive.
 */
positive(): this,

/**
 * Requires the number to be negative.
 */
negative(): this
} & Hemera$AnySchema


declare type Hemera$StringSchema = {

/**
 * Allows the value to match any whitelist of blacklist item in a case insensitive comparison.
 */
insensitive(): this,

/**
 * Specifies the minimum number string characters.
 * @param limit - the minimum number of string characters required. It can also be a reference to another field.
 * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
 */
min(limit: number | Hemera$Reference, encoding?: string): this,

/**
 * Specifies the maximum number of string characters.
 * @param limit - the maximum number of string characters allowed. It can also be a reference to another field.
 * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
 */
max(limit: number | Hemera$Reference, encoding?: string): this,

/**
 * Specifies whether the string.max() limit should be used as a truncation.
 * @param enabled - optional parameter defaulting to true which allows you to reset the behavior of truncate by providing a falsy value.
 */
truncate(enabled?: boolean): this,

/**
 * Requires the string value to be in a unicode normalized form. If the validation convert option is on (enabled by default), the string will be normalized.
 * @param form - The unicode normalization form to use. Valid values: NFC [default], NFD, NFKC, NFKD
 */
normalize(form?: "NFC" | "NFD" | "NFKC" | "NFKD"): this,

/**
 * Requires the string value to be a valid base64 string; does not check the decoded value.
 * @param options - optional settings: The unicode normalization options to use. Valid values: NFC [default], NFD, NFKC, NFKD
 */
base64(options?: Hemera$Base64Options): this,

/**
 * Requires the number to be a credit card number (Using Lunh Algorithm).
 */
creditCard(): this,

/**
 * Specifies the exact string length required
 * @param limit - the required string length. It can also be a reference to another field.
 * @param encoding - if specified, the string length is calculated in bytes using the provided encoding.
 */
length(limit: number | Hemera$Reference, encoding?: string): this,

/**
 * Defines a regular expression rule.
 * @param pattern - a regular expression object the string value must match against.
 * @param name - optional name for patterns (useful with multiple patterns). Defaults to 'required'.
 */
regex(pattern: RegExp, name?: string): this,

/**
 * Replace characters matching the given pattern with the specified replacement string where:
 * @param pattern - a regular expression object to match against, or a string of which all occurrences will be replaced.
 * @param replacement - the string that will replace the pattern.
 */
replace(pattern: RegExp | string, replacement: string): this,

/**
 * Requires the string value to only contain a-z, A-Z, and 0-9.
 */
alphanum(): this,

/**
 * Requires the string value to only contain a-z, A-Z, 0-9, and underscore _.
 */
token(): this,

/**
 * Requires the string value to be a valid email address.
 */
email(options?: Hemera$EmailOptions): this,

/**
 * Requires the string value to be a valid ip address.
 */
ip(options?: Hemera$IpOptions): this,

/**
 * Requires the string value to be a valid RFC 3986 URI.
 */
uri(options?: Hemera$UriOptions): this,

/**
 * Requires the string value to be a valid GUID.
 */
guid(options?: Hemera$GuidOptions): this,

/**
 * Alias for `guid` -- Requires the string value to be a valid GUID
 */
uuid(options?: Hemera$GuidOptions): this,

/**
 * Requires the string value to be a valid hexadecimal string.
 */
hex(): this,

/**
 * Requires the string value to be a valid hostname as per RFC1123.
 */
hostname(): this,

/**
 * Requires the string value to be in valid ISO 8601 date format.
 */
isoDate(): this,

/**
 * Requires the string value to be all lowercase. If the validation convert option is on (enabled by default), the string will be forced to lowercase.
 */
lowercase(): this,

/**
 * Requires the string value to be all uppercase. If the validation convert option is on (enabled by default), the string will be forced to uppercase.
 */
uppercase(): this,

/**
 * Requires the string value to contain no whitespace before or after. If the validation convert option is on (enabled by default), the string will be trimmed.
 */
trim(): this
} & Hemera$AnySchema


declare type Hemera$ArraySchema = {

/**
 * Allow this array to be sparse.
 * enabled can be used with a falsy value to go back to the default behavior.
 */
sparse(enabled?: any): this,

/**
 * Allow single values to be checked against rules as if it were provided as an array.
 * enabled can be used with a falsy value to go back to the default behavior.
 */
single(enabled?: any): this,

/**
 * List the types allowed for the array values.
 * type can be an array of values, or multiple values can be passed as individual arguments.
 * If a given type is .required() then there must be a matching item in the array.
 * If a type is .forbidden() then it cannot appear in the array.
 * Required items can be added multiple times to signify that multiple items must be found.
 * Errors will contain the number of items that didn't match.
 * Any unmatched item having a label will be mentioned explicitly.
 * @param type - a joi schema object to validate each array item against.
 */
items(...types: Hemera$SchemaLike[]): this,
items(types: Hemera$SchemaLike[]): this,

/**
 * Lists the types in sequence order for the array values where:
 * @param type - a joi schema object to validate against each array item in sequence order.
type can be an array of values, or multiple values can be passed as individual arguments.
If a given type is .required() then there must be a matching item with the same index position
in the array. Errors will contain the number of items that didn't match. Any unmatched item having a label will be mentioned explicitly.
 */
ordered(...types: Hemera$SchemaLike[]): this,
ordered(types: Hemera$SchemaLike[]): this,

/**
 * Specifies the minimum number of items in the array.
 */
min(limit: number): this,

/**
 * Specifies the maximum number of items in the array.
 */
max(limit: number): this,

/**
 * Specifies the exact number of items in the array.
 */
length(limit: number): this,

/**
 * Requires the array values to be unique.
 * Be aware that a deep equality is performed on elements of the array having a type of object,
 * a performance penalty is to be expected for this kind of operation.
 */
unique(comparator?: string): this,
unique<T>(comparator?: (a: T, b: T) => boolean): this
} & Hemera$AnySchema


declare type Hemera$ObjectSchema = {

/**
 * Sets the allowed object keys.
 */
keys<R>(schema?: R): R,

/**
 * Specifies the minimum number of keys in the object.
 */
min(limit: number): this,

/**
 * Specifies the maximum number of keys in the object.
 */
max(limit: number): this,

/**
 * Specifies the exact number of keys in the object.
 */
length(limit: number): this,

/**
 * Specify validation rules for unknown keys matching a pattern.
 */
pattern(regex: RegExp, schema: Hemera$SchemaLike): this,

/**
 * Defines an all-or-nothing relationship between keys where if one of the peers is present, all of them are required as well.
 * @param peers - the key names of which if one present, all are required. peers can be a single string value,
an array of string values, or each peer provided as an argument.
 */
and(...peers: string[]): this,
and(peers: string[]): this,

/**
 * Defines a relationship between keys where not all peers can be present at the same time.
 * @param peers - the key names of which if one present, the others may not all be present.
peers can be a single string value, an array of string values, or each peer provided as an argument.
 */
nand(...peers: string[]): this,
nand(peers: string[]): this,

/**
 * Defines a relationship between keys where one of the peers is required (and more than one is allowed).
 */
or(...peers: string[]): this,
or(peers: string[]): this,

/**
 * Defines an exclusive relationship between a set of keys. one of them is required but not at the same time where:
 */
xor(...peers: string[]): this,
xor(peers: string[]): this,

/**
 * Requires the presence of other keys whenever the specified key is present.
 */
with(key: string, peers: string | string[]): this,

/**
 * Forbids the presence of other keys whenever the specified is present.
 */
without(key: string, peers: string | string[]): this,

/**
 * Renames a key to another name (deletes the renamed key).
 */
rename(from: string, to: string, options?: Hemera$RenameOptions): this,

/**
 * Verifies an assertion where.
 */
assert(
ref: string | Hemera$Reference,
schema: Hemera$SchemaLike,
message?: string): this,

/**
 * Overrides the handling of unknown keys for the scope of the current object only (does not apply to children).
 */
unknown(allow?: boolean): this,

/**
 * Requires the object to be an instance of a given constructor.
 * @param constructor - the constructor function that the object must be an instance of.
 * @param name - an alternate name to use in validation errors. This is useful when the constructor function does not have a name.
 */
type(function Object() { [native code] }: () => void, name?: string): this,

/**
 * Sets the specified children to required.
 * @param children - can be a single string value, an array of string values, or each child provided as an argument.

var schema = Joi.object().keys({ a: { b: Joi.number() }, c: { d: Joi.string() } });
var requiredSchema = schema.requiredKeys('', 'a.b', 'c', 'c.d');

Note that in this example '' means the current object, a is not required but b is, as well as c and d.
 */
requiredKeys(children: string[]): this,
requiredKeys(...children: string[]): this,

/**
 * Sets the specified children to optional.
 * @param children - can be a single string value, an array of string values, or each child provided as an argument.

The behavior is exactly the same as requiredKeys.
 */
optionalKeys(children: string[]): this,
optionalKeys(...children: string[]): this
} & Hemera$AnySchema


declare type Hemera$BinarySchema = {

/**
 * Sets the string encoding format if a string input is converted to a buffer.
 */
encoding(encoding: string): this,

/**
 * Specifies the minimum length of the buffer.
 */
min(limit: number): this,

/**
 * Specifies the maximum length of the buffer.
 */
max(limit: number): this,

/**
 * Specifies the exact length of the buffer:
 */
length(limit: number): this
} & Hemera$AnySchema


declare type Hemera$DateSchema = {

/**
 * Specifies the oldest date allowed.
 * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
 * allowing to explicitly ensure a date is either in the past or in the future.
 * It can also be a reference to another field.
 */
min(date: Date | number | string | Hemera$Reference): this,

/**
 * Specifies the latest date allowed.
 * Notes: 'now' can be passed in lieu of date so as to always compare relatively to the current date,
 * allowing to explicitly ensure a date is either in the past or in the future.
 * It can also be a reference to another field.
 */
max(date: Date | number | string | Hemera$Reference): this,

/**
 * Specifies the allowed date format:
 * @param format - string or array of strings that follow the moment.js format.
 */
format(format: string | string[]): this,

/**
 * Requires the string value to be in valid ISO 8601 date format.
 */
iso(): this,

/**
 * Requires the value to be a timestamp interval from Unix Time.
 * @param type - the type of timestamp (allowed values are unix or javascript [default])
 */
timestamp(type?: "javascript" | "unix"): this
} & Hemera$AnySchema


declare type Hemera$FunctionSchema = {

/**
 * Specifies the arity of the function where:
 * @param n - the arity expected.
 */
arity(n: number): this,

/**
 * Specifies the minimal arity of the function where:
 * @param n - the minimal arity expected.
 */
minArity(n: number): this,

/**
 * Specifies the minimal arity of the function where:
 * @param n - the minimal arity expected.
 */
maxArity(n: number): this,

/**
 * Requires the function to be a Joi reference.
 */
ref(): this
} & Hemera$AnySchema


declare type Hemera$AlternativesSchema = {
try(types: Hemera$SchemaLike[]): this,
try(...types: Hemera$SchemaLike[]): this,
when(ref: string | Hemera$Reference, options: Hemera$WhenOptions): this
} & Hemera$AnySchema


declare type Hemera$Reference = {
(value: any, validationOptions: Hemera$ValidationOptions): any,
isContext: boolean,
key: string,
path: string,
toString(): string
} & Hemera$JoiObject


declare type Hemera$ExtensionBoundSchema = Hemera$Schema & {

/**
 * Creates a joi error object.
 * Used in conjunction with custom rules.
 * @param type - the type of rule to create the error for.
 * @param context - provide properties that will be available in the `language` templates.
 * @param state - should the context passed into the `validate` function in a custom rule
 * @param options - should the context passed into the `validate` function in a custom rule
 */
createError(
type: string,
context: Hemera$Context,
state: Hemera$State,
options: Hemera$ValidationOptions): Hemera$Err
};

declare interface Hemera$Rules<P: {[key: string]: any}> {
name: string,
params?: Hemera$ObjectSchema | $ObjMapi<P, <key>(key) => Hemera$SchemaLike>,
setup(params: any): Hemera$Schema | void,
validate(
params: P,
value: any,
state: Hemera$State,
options: Hemera$ValidationOptions): any,
description?: string | ((params: P) => string)
} 

declare interface Hemera$Extension {
name: string,
base?: Hemera$Schema,
language?: Hemera$LanguageOptions,
coerce(value: any, state: Hemera$State, options: Hemera$ValidationOptions): any,
pre(value: any, state: Hemera$State, options: Hemera$ValidationOptions): any,
describe(description: Hemera$Description): Hemera$Description,
rules?: Hemera$Rules[]
} 

declare type Hemera$Err = {
toString(): string
} & Hemera$JoiObject


declare interface Hemera$JOI {
version: string,
number(): Hemera$NumberSchema,
any(): Hemera$AnySchema,
array(): Hemera$ArraySchema,
bool(): Hemera$BooleanSchema,
binary(): Hemera$BinarySchema,
date(): Hemera$DateSchema,
func(): Hemera$FunctionSchema,
object(schema?: Hemera$SchemaMap): Hemera$ObjectSchema,
string(): Hemera$StringSchema,
alternatives(types: Hemera$SchemaLike[]): Hemera$AlternativesSchema,
alternatives(...types: Hemera$SchemaLike[]): Hemera$AlternativesSchema,
alt(types: Hemera$SchemaLike[]): Hemera$AlternativesSchema,
alt(...types: Hemera$SchemaLike[]): Hemera$AlternativesSchema,
lazy(cb: () => Hemera$Schema): Hemera$AnySchema,
validate<T>(value: T, schema: Hemera$SchemaLike): Hemera$ValidationResult<T>,
validate<T, R>(
value: T,
schema: Hemera$SchemaLike,
callback: (err: Hemera$ValidationError, value: T) => R): R,
validate<T, R>(
value: T,
schema: Hemera$SchemaLike,
options: Hemera$ValidationOptions,
callback: (err: Hemera$ValidationError, value: T) => R): R,
compile(schema: Hemera$SchemaLike): Hemera$Schema,
assert(value: any, schema: Hemera$SchemaLike, message?: string | Error): void,
attempt<T>(value: T, schema: Hemera$SchemaLike, message?: string | Error): T,
ref(key: string, options?: Hemera$ReferenceOptions): Hemera$Reference,
isRef(ref: any): boolean,
reach(schema: Hemera$ObjectSchema, path: string): Hemera$Schema
} 
	declare class Hemera  {
constructor(transport: {[key: string]: any}, config: Hemera$Hemera$Config): this;
ready(callback: () => void): void;
act(
pattern: string | Hemera$Hemera$Pattern,
handler?: Hemera$Hemera$ActHandler): Promise<any>;
add(
pattern: string | Hemera$Hemera$Pattern,
handler: Hemera$Hemera$AddHandler): Hemera$Hemera$AddMeta;
use(params: Hemera$Hemera$PluginDefinition, options?: any): void;
createError(name: string): any;
decorate(prop: string, value: any): void;
remove(topic: string, maxMessages: number): boolean;
list(Hemera$Pattern: any, options: any): any;
close(callback?: () => void): void;
fatal(): void;
expose(key: string, object: any): void;
ext(
type: Hemera$Hemera$ExtensionType,
handler: Hemera$Hemera$ExtensionHandler): void;
setConfig(key: string, value: any): void;
setOption(key: string, value: any): void;
on(event: Hemera$Hemera$HemeraEvents, handler: () => void): any;
removeAll(): any;
encoder: Hemera$Hemera$CodecPipeline;
decoder: Hemera$Hemera$CodecPipeline;
plugins: Hemera$Hemera$Plugins;
router: any;
load: any;
exposition: any;
errors: any;
config: any;
topics: any;
transport: any;
joi: Hemera$Hemera$JOI;
mongodb: any;
context$: any;
meta$: any;
delegate$: any;
auth$: any;
plugin$: Hemera$Hemera$PluginDefinition;
trace$: Hemera$Hemera$Trace;
request$: Hemera$Hemera$Request
}
    }
