declare module 'convict' {
        declare type convict$Overwrite<T, U> = $ObjMapi<{[k: Exclude<$Keys<T>, $Keys<U>>]: any}, <P>(P) => $ElementType<T, P>> & U;

declare type convict$ValidationMethod = "strict" | "warn";

declare interface convict$ValidateOptions {

/**
 * If set to warn, any properties specified in config files that are not declared in
 * the schema will print a warning. This is the default behavior. If set to strict,
 * any properties specified in config files that are not declared in the schema will
 * throw errors. This is to ensure that the schema and the config files are in sync.
 */
allowed?: convict$ValidationMethod,

/**
 * @deprecated use allowed instead
 */
strict?: boolean
} 

declare interface convict$Format {
name?: string,
validate(val: any): void,
coerce(val: any): any
} 

declare interface convict$Parser {
extension: string | string[],
parse: (content: string) => any
} 

declare type convict$PredefinedFormat = "*"
| "int"
| "port"
| "windows_named_pipe"
| "port_or_windows_named_pipe"
| "url"
| "email"
| "ipaddress"
| "duration"
| "timestamp"
| "nat"
| String
| Object
| Number
| RegExp
| Boolean;

declare interface convict$SchemaObj<T> {
default: T,
doc?: string,

/**
 * From the implementation:
 * 
 *   format can be a:
 *    - predefined type, as seen below
 *    - an array of enumerated values, e.g. ["production", "development", "testing"]
 *    - built-in JavaScript type, i.e. Object, Array, String, Number, Boolean
 *    - function that performs validation and throws an Error on failure
 * 
 * If omitted, format will be set to the value of Object.prototype.toString.call
 * for the default value
 */
format?: convict$PredefinedFormat | any[] | ((val: any) => void),
env?: string,
arg?: string,
sensitive?: boolean
} 

declare type convict$Schema<T> = $ObjMapi<T, <P>(P) => convict$Schema<$ElementType<T, P>> | convict$SchemaObj<$ElementType<T, P>>>;

declare interface convict$InternalSchema<T> {
properties: $ObjMapi<T, <K>(K) => "There was Conditional Type, use $Call utility type">
} 

declare interface convict$Config<T> {

/**
 * @returns the current value of the name property. name can use dot
notation to reference nested values
 */
get<K: $Keys<T> | string | null | void>(
name?: K): "There was Conditional Type, use $Call utility type",
get<K: $Keys<T>, K2: $Keys<$ElementType<T, K>>>(
name: string): $ElementType<$ElementType<T, K>, K2>,
get<K: $Keys<T>, K2: $Keys<$ElementType<T, K>>, K3: $Keys<$ElementType<$ElementType<T, K>, K2>>>(
name: K): $ElementType<$ElementType<$ElementType<T, K>, K2>, K3>,
get<K: $Keys<T>, K2: $Keys<$ElementType<T, K>>, K3: $Keys<$ElementType<$ElementType<T, K>, K2>>, K4: $Keys<$ElementType<$ElementType<$ElementType<T, K>, K2>, K3>>>(
name: string): $ElementType<$ElementType<$ElementType<$ElementType<T, K>, K2>, K3>, K4>,

/**
 * @returns the default value of the name property. name can use dot
notation to reference nested values
 */
default<K: $Keys<T> | string | null | void>(
name?: K): "There was Conditional Type, use $Call utility type",
default<K: $Keys<T>>(name?: K): $ElementType<T, K>,
default<K: $Keys<T>, K2: $Keys<$ElementType<T, K>>>(
name: string): $ElementType<$ElementType<T, K>, K2>,
default<K: $Keys<T>, K2: $Keys<$ElementType<T, K>>, K3: $Keys<$ElementType<$ElementType<T, K>, K2>>>(
name: K): $ElementType<$ElementType<$ElementType<T, K>, K2>, K3>,
default<K: $Keys<T>, K2: $Keys<$ElementType<T, K>>, K3: $Keys<$ElementType<$ElementType<T, K>, K2>>, K4: $Keys<$ElementType<$ElementType<$ElementType<T, K>, K2>, K3>>>(
name: string): $ElementType<$ElementType<$ElementType<$ElementType<T, K>, K2>, K3>, K4>,

/**
 * @returns true if the property name is defined, or false otherwise
 */
has<K: $Keys<T> | string>(name: K): boolean,
has<K: $Keys<T>, K2: $Keys<$ElementType<T, K>>>(name: string): boolean,
has<K: $Keys<T>, K2: $Keys<$ElementType<T, K>>, K3: $Keys<$ElementType<$ElementType<T, K>, K2>>>(
name: K): boolean,
has<K: $Keys<T>, K2: $Keys<$ElementType<T, K>>, K3: $Keys<$ElementType<$ElementType<T, K>, K2>>, K4: $Keys<$ElementType<$ElementType<$ElementType<T, K>, K2>, K3>>>(
name: string): boolean,

/**
 * Sets the value of name to value. name can use dot notation to reference
 * nested values, e.g. "database.port". If objects in the chain don't yet
 * exist, they will be initialized to empty objects
 */
set<K: $Keys<T> | string>(
name: K,
value: "There was Conditional Type, use $Call utility type"): convict$Config<T>,
set<K: $Keys<T>, K2: $Keys<$ElementType<T, K>> | string>(
name: K,
value: "There was Conditional Type, use $Call utility type"): convict$Config<T>,
set<K: $Keys<T>, K2: $Keys<$ElementType<T, K>>, K3: $Keys<$ElementType<$ElementType<T, K>, K2>> | string>(
name: K,
value: "There was Conditional Type, use $Call utility type"): convict$Config<T>,
set<K: $Keys<T>, K2: $Keys<$ElementType<T, K>>, K3: $Keys<$ElementType<$ElementType<T, K>, K2>>, K4: $Keys<$ElementType<$ElementType<$ElementType<T, K>, K2>, K3>> | string>(
name: K,
value: "There was Conditional Type, use $Call utility type"): convict$Config<T>,

/**
 * Loads and merges a JavaScript object into config
 */
load<U>(conf: U): convict$Config<convict$Overwrite<T, U>>,

/**
 * Loads and merges JSON configuration file(s) into config
 */
loadFile<U>(files: string | string[]): convict$Config<convict$Overwrite<T, U>>,

/**
 * Validates config against the schema used to initialize it
 */
validate(options?: convict$ValidateOptions): convict$Config<T>,

/**
 * Exports all the properties (that is the keys and their current values) as a {JSON} {Object}
 * @returns A {JSON} compliant {Object}
 */
getProperties(): T,

/**
 * Exports the schema as a {JSON} {Object}
 * @returns A {JSON} compliant {Object}
 */
getSchema(): convict$InternalSchema<T>,

/**
 * Exports all the properties (that is the keys and their current values) as a JSON string.
 * @returns A string representing this object
 */
toString(): string,

/**
 * Exports the schema as a JSON string.
 * @returns A string representing the schema of this {Config}
 */
getSchemaString(): string
} 
	declare interface convict {
addFormat(format: convict$convict$Format): void,
addFormats(formats: {
[name: string]: convict$convict$Format
}): void,
addParser(parsers: convict$convict$Parser | convict$convict$Parser[]): void,
(config: convict$convict$Schema<T> | string): convict$convict$Config<T>
} 
	declare var convict: convict;
	declare module.exports: typeof convict

    }
