declare module 'node' {
        
/**
 * inspector module types
 */
declare interface Console {
Console: NodeJS$NodeJS$ConsoleConstructor,

/**
 * A simple assertion test that verifies whether `value` is truthy.
 * If it is not, an `AssertionError` is thrown.
 * If provided, the error `message` is formatted using `util.format()` and used as the error message.
 */
assert(value: any, message?: string, ...optionalParams: any[]): void,

/**
 * When `stdout` is a TTY, calling `console.clear()` will attempt to clear the TTY.
 * When `stdout` is not a TTY, this method does nothing.
 */
clear(): void,

/**
 * Maintains an internal counter specific to `label` and outputs to `stdout` the number of times `console.count()` has been called with the given `label`.
 */
count(label?: string): void,

/**
 * Resets the internal counter specific to `label`.
 */
countReset(label?: string): void,

/**
 * The `console.debug()` function is an alias for {@link console.log()}.
 */
debug(message?: any, ...optionalParams: any[]): void,

/**
 * Uses {@link util.inspect()} on `obj` and prints the resulting string to `stdout`.
 * This function bypasses any custom `inspect()` function defined on `obj`.
 */
dir(obj: any, options?: NodeJS$NodeJS$InspectOptions): void,

/**
 * This method calls {@link console.log()} passing it the arguments received. Please note that this method does not produce any XML formatting
 */
dirxml(...data: any[]): void,

/**
 * Prints to `stderr` with newline.
 */
error(message?: any, ...optionalParams: any[]): void,

/**
 * Increases indentation of subsequent lines by two spaces.
 * If one or more `label`s are provided, those are printed first without the additional indentation.
 */
group(...label: any[]): void,

/**
 * The `console.groupCollapsed()` function is an alias for {@link console.group()}.
 */
groupCollapsed(): void,

/**
 * Decreases indentation of subsequent lines by two spaces.
 */
groupEnd(): void,

/**
 * The {@link console.info()} function is an alias for {@link console.log()}.
 */
info(message?: any, ...optionalParams: any[]): void,

/**
 * Prints to `stdout` with newline.
 */
log(message?: any, ...optionalParams: any[]): void,

/**
 * This method does not display anything unless used in the inspector.
 *   Prints to `stdout` the array `array` formatted as a table.
 */
table(tabularData: any, properties?: string[]): void,

/**
 * Starts a timer that can be used to compute the duration of an operation. Timers are identified by a unique `label`.
 */
time(label?: string): void,

/**
 * Stops a timer that was previously started by calling {@link console.time()} and prints the result to `stdout`.
 */
timeEnd(label?: string): void,

/**
 * For a timer that was previously started by calling {@link console.time()}, prints the elapsed time and other `data` arguments to `stdout`.
 */
timeLog(label?: string, ...data: any[]): void,

/**
 * Prints to `stderr` the string 'Trace :', followed by the {@link util.format()} formatted message and stack trace to the current position in the code.
 */
trace(message?: any, ...optionalParams: any[]): void,

/**
 * The {@link console.warn()} function is an alias for {@link console.error()}.
 */
warn(message?: any, ...optionalParams: any[]): void,

/**
 * This method does not display anything unless used in the inspector.
 *   The console.markTimeline() method is the deprecated form of console.timeStamp().
 * @deprecated Use console.timeStamp() instead.
 */
markTimeline(label?: string): void,

/**
 * This method does not display anything unless used in the inspector.
 *   Starts a JavaScript CPU profile with an optional label.
 */
profile(label?: string): void,

/**
 * This method does not display anything unless used in the inspector.
 *   Stops the current JavaScript CPU profiling session if one has been started and prints the report to the Profiles panel of the inspector.
 */
profileEnd(label?: string): void,

/**
 * This method does not display anything unless used in the inspector.
 *   Adds an event with the label `label` to the Timeline panel of the inspector.
 */
timeStamp(label?: string): void,

/**
 * This method does not display anything unless used in the inspector.
 *   The console.timeline() method is the deprecated form of console.time().
 * @deprecated Use console.time() instead.
 */
timeline(label?: string): void,

/**
 * This method does not display anything unless used in the inspector.
 *   The console.timelineEnd() method is the deprecated form of console.timeEnd().
 * @deprecated Use console.timeEnd() instead.
 */
timelineEnd(label?: string): void
} 
	declare interface Error {
stack?: string
} 
	declare interface ErrorConstructor {

/**
 * Create .stack property on a target object
 */
captureStackTrace(targetObject: Object, constructorOpt?: Function): void,

/**
 * Optional override for formatting stack traces
 * @see https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces
 */
prepareStackTrace?: (err: Error, stackTraces: NodeJS$NodeJS$CallSite[]) => any,
stackTraceLimit: number
} 
	declare interface MapConstructor {} 
	declare interface WeakMapConstructor {} 
	declare interface SetConstructor {} 
	declare interface WeakSetConstructor {} 
	declare interface Set<T> {} 
	declare interface ReadonlySet<T> {} 
	declare interface Iterable<T> {} 
	declare interface Iterator<T> {
next(value?: any): IteratorResult<T>
} 
	declare interface IteratorResult<T> {} 
	declare interface AsyncIterableIterator<T> {} 
	declare interface SymbolConstructor {
+observable: Symbol,
+iterator: Symbol,
+asyncIterator: Symbol
} 
	declare var Symbol: SymbolConstructor;
	declare interface SharedArrayBuffer {
+byteLength: number,
slice(begin?: number, end?: number): SharedArrayBuffer
} 
	declare interface String {

/**
 * Removes whitespace from the left end of a string.
 */
trimLeft(): string,

/**
 * Removes whitespace from the right end of a string.
 */
trimRight(): string
} 
	declare var process: NodeJS$NodeJS$Process;
	declare var global: NodeJS$NodeJS$Global;
	declare var console: Console;
	declare var __filename: string;
	declare var __dirname: string;
	declare function setTimeout(
callback: (...args: any[]) => void,
ms: number,
...args: any[]): NodeJS$NodeJS$Timeout

	
      declare var npm$namespace$setTimeout: {
        __promisify__: typeof setTimeout$__promisify__,
        
      }
declare function setTimeout$__promisify__(ms: number): Promise<void>


declare function setTimeout$__promisify__<T>(ms: number, value: T): Promise<T>

	declare function clearTimeout(timeoutId: NodeJS$NodeJS$Timeout): void

	declare function setInterval(
callback: (...args: any[]) => void,
ms: number,
...args: any[]): NodeJS$NodeJS$Timeout

	declare function clearInterval(intervalId: NodeJS$NodeJS$Timeout): void

	declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): NodeJS$NodeJS$Immediate

	
      declare var npm$namespace$setImmediate: {
        __promisify__: typeof setImmediate$__promisify__,
        
      }
declare function setImmediate$__promisify__(): Promise<void>


declare function setImmediate$__promisify__<T>(value: T): Promise<T>

	declare function clearImmediate(immediateId: NodeJS$NodeJS$Immediate): void

	declare interface NodeRequireFunction {
(id: string): any
} 
	declare type NodeRequire = {
win32$resolve: RequireResolve,
cache: any,
extensions: NodeExtensions,
main: NodeModule | void
} & NodeRequireFunction

	declare interface RequireResolve {
(id: string, options?: {
paths?: string[]
}): string,
paths(request: string): string[] | null
} 
	declare interface NodeExtensions {
".js": (m: NodeModule, filename: string) => any,
".json": (m: NodeModule, filename: string) => any,
".node": (m: NodeModule, filename: string) => any,
[ext: string]: (m: NodeModule, filename: string) => any
} 
	declare var require: NodeRequire;
	declare interface NodeModule {
exports: any,
require: NodeRequireFunction,
id: string,
filename: string,
loaded: boolean,
parent: NodeModule | null,
children: NodeModule[],
paths: string[]
} 
	declare var module: NodeModule;
	declare var exports: any;
	declare var SlowBuffer: {
new (str: string, encoding?: string): Buffer,
new (size: number): Buffer,
new (size: Uint8Array): Buffer,
new (array: any[]): Buffer,
prototype: Buffer,
isBuffer(obj: any): boolean,
byteLength(string: string, encoding?: string): number,
concat(list: Buffer[], totalLength?: number): Buffer
};
	declare type BufferEncoding = "ascii"
| "utf8"
| "utf16le"
| "ucs2"
| "base64"
| "latin1"
| "binary"
| "hex";
	declare type Buffer = {
function Object() { [native code] }: typeof Buffer,
write(string: string, offset?: number, length?: number, encoding?: string): number,
toString(encoding?: string, start?: number, end?: number): string,
toJSON(): {
type: "Buffer",
data: any[]
},
equals(otherBuffer: Uint8Array): boolean,
compare(
otherBuffer: Uint8Array,
targetStart?: number,
targetEnd?: number,
sourceStart?: number,
sourceEnd?: number): number,
copy(
targetBuffer: Uint8Array,
targetStart?: number,
sourceStart?: number,
sourceEnd?: number): number,
slice(start?: number, end?: number): Buffer,
writeUIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number,
writeUIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number,
writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number,
writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number,
readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number,
readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number,
readIntLE(offset: number, byteLength: number, noAssert?: boolean): number,
readIntBE(offset: number, byteLength: number, noAssert?: boolean): number,
readUInt8(offset: number, noAssert?: boolean): number,
readUInt16LE(offset: number, noAssert?: boolean): number,
readUInt16BE(offset: number, noAssert?: boolean): number,
readUInt32LE(offset: number, noAssert?: boolean): number,
readUInt32BE(offset: number, noAssert?: boolean): number,
readInt8(offset: number, noAssert?: boolean): number,
readInt16LE(offset: number, noAssert?: boolean): number,
readInt16BE(offset: number, noAssert?: boolean): number,
readInt32LE(offset: number, noAssert?: boolean): number,
readInt32BE(offset: number, noAssert?: boolean): number,
readFloatLE(offset: number, noAssert?: boolean): number,
readFloatBE(offset: number, noAssert?: boolean): number,
readDoubleLE(offset: number, noAssert?: boolean): number,
readDoubleBE(offset: number, noAssert?: boolean): number,
swap16(): Buffer,
swap32(): Buffer,
swap64(): Buffer,
writeUInt8(value: number, offset: number, noAssert?: boolean): number,
writeUInt16LE(value: number, offset: number, noAssert?: boolean): number,
writeUInt16BE(value: number, offset: number, noAssert?: boolean): number,
writeUInt32LE(value: number, offset: number, noAssert?: boolean): number,
writeUInt32BE(value: number, offset: number, noAssert?: boolean): number,
writeInt8(value: number, offset: number, noAssert?: boolean): number,
writeInt16LE(value: number, offset: number, noAssert?: boolean): number,
writeInt16BE(value: number, offset: number, noAssert?: boolean): number,
writeInt32LE(value: number, offset: number, noAssert?: boolean): number,
writeInt32BE(value: number, offset: number, noAssert?: boolean): number,
writeFloatLE(value: number, offset: number, noAssert?: boolean): number,
writeFloatBE(value: number, offset: number, noAssert?: boolean): number,
writeDoubleLE(value: number, offset: number, noAssert?: boolean): number,
writeDoubleBE(value: number, offset: number, noAssert?: boolean): number,
fill(value: any, offset?: number, end?: number): this,
indexOf(
value: string | number | Uint8Array,
byteOffset?: number,
encoding?: string): number,
lastIndexOf(
value: string | number | Uint8Array,
byteOffset?: number,
encoding?: string): number,
entries(): IterableIterator<[number, number]>,
includes(
value: string | number | Buffer,
byteOffset?: number,
encoding?: string): boolean,
keys(): IterableIterator<number>,
values(): IterableIterator<number>
} & Uint8Array

	
/**
 * Raw data is stored in instances of the Buffer class.
 * A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
 * Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
 */
declare var Buffer: {

/**
 * Allocates a new buffer containing the given {str}.
 * @param str String to store in buffer.
 * @param encoding encoding to use, optional.  Default is 'utf8'
 * @deprecated since v10.0.0 - Use `Buffer.from(string[, encoding])` instead.
 */
new (str: string, encoding?: string): Buffer,

/**
 * Allocates a new buffer of {size} octets.
 * @param size count of octets to allocate.
 * @deprecated since v10.0.0 - Use `Buffer.alloc()` instead (also see `Buffer.allocUnsafe()`).
 */
new (size: number): Buffer,

/**
 * Allocates a new buffer containing the given {array} of octets.
 * @param array The octets to store.
 * @deprecated since v10.0.0 - Use `Buffer.from(array)` instead.
 */
new (array: Uint8Array): Buffer,

/**
 * Produces a Buffer backed by the same allocated memory as
 * the given {ArrayBuffer}/{SharedArrayBuffer}.
 * @param arrayBuffer The ArrayBuffer with which to share memory.
 * @deprecated since v10.0.0 - Use `Buffer.from(arrayBuffer[, byteOffset[, length]])` instead.
 */
new (arrayBuffer: ArrayBuffer | SharedArrayBuffer): Buffer,

/**
 * Allocates a new buffer containing the given {array} of octets.
 * @param array The octets to store.
 * @deprecated since v10.0.0 - Use `Buffer.from(array)` instead.
 */
new (array: any[]): Buffer,

/**
 * Copies the passed {buffer} data onto a new {Buffer} instance.
 * @param buffer The buffer to copy.
 * @deprecated since v10.0.0 - Use `Buffer.from(buffer)` instead.
 */
new (buffer: Buffer): Buffer,
prototype: Buffer,

/**
 * When passed a reference to the .buffer property of a TypedArray instance,
 * the newly created Buffer will share the same allocated memory as the TypedArray.
 * The optional {byteOffset} and {length} arguments specify a memory range
 * within the {arrayBuffer} that will be shared by the Buffer.
 * @param arrayBuffer The .buffer property of any TypedArray or a new ArrayBuffer()
 */
from(
arrayBuffer: ArrayBuffer | SharedArrayBuffer,
byteOffset?: number,
length?: number): Buffer,

/**
 * Creates a new Buffer using the passed {data}
 * @param data data to create a new Buffer
 */
from(data: any[]): Buffer,
from(data: Uint8Array): Buffer,

/**
 * Creates a new Buffer containing the given JavaScript string {str}.
 * If provided, the {encoding} parameter identifies the character encoding.
 * If not provided, {encoding} defaults to 'utf8'.
 */
from(str: string, encoding?: string): Buffer,

/**
 * Creates a new Buffer using the passed {data}
 * @param values to create a new Buffer
 */
of(...items: number[]): Buffer,

/**
 * Returns true if {obj} is a Buffer
 * @param obj object to test.
 */
isBuffer(obj: any): boolean,

/**
 * Returns true if {encoding} is a valid encoding argument.
 * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
 * @param encoding string to test.
 */
isEncoding(encoding: string): boolean | void,

/**
 * Gives the actual byte length of a string. encoding defaults to 'utf8'.
 * This is not the same as String.prototype.length since that returns the number of characters in a string.
 * @param string string to test.
 * @param encoding encoding used to evaluate (defaults to 'utf8')
 */
byteLength(
string: string
| NodeJS$NodeJS$TypedArray
| DataView
| ArrayBuffer
| SharedArrayBuffer,
encoding?: string): number,

/**
 * Returns a buffer which is the result of concatenating all the buffers in the list together.
 * 
 * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
 * If the list has exactly one item, then the first item of the list is returned.
 * If the list has more than one item, then a new Buffer is created.
 * @param list An array of Buffer objects to concatenate
 * @param totalLength Total length of the buffers when concatenated.
If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
 */
concat(list: Uint8Array[], totalLength?: number): Buffer,

/**
 * The same as buf1.compare(buf2).
 */
compare(buf1: Uint8Array, buf2: Uint8Array): number,

/**
 * Allocates a new buffer of {size} octets.
 * @param size count of octets to allocate.
 * @param fill if specified, buffer will be initialized by calling buf.fill(fill).
If parameter is omitted, buffer will be filled with zeros.
 * @param encoding encoding used for call to buf.fill while initalizing
 */
alloc(size: number, fill?: string | Buffer | number, encoding?: string): Buffer,

/**
 * Allocates a new buffer of {size} octets, leaving memory not initialized, so the contents
 * of the newly created Buffer are unknown and may contain sensitive data.
 * @param size count of octets to allocate
 */
allocUnsafe(size: number): Buffer,

/**
 * Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents
 * of the newly created Buffer are unknown and may contain sensitive data.
 * @param size count of octets to allocate
 */
allocUnsafeSlow(size: number): Buffer,

/**
 * This is the number of bytes used to determine the size of pre-allocated, internal Buffer instances used for pooling. This value may be modified.
 */
poolSize: number
};
	declare interface NodeJS$InspectOptions {
showHidden?: boolean,
depth?: number | null,
colors?: boolean,
customInspect?: boolean,
showProxy?: boolean,
maxArrayLength?: number | null,
breakLength?: number,
compact?: boolean,
sorted?: boolean | ((a: string, b: string) => number)
} 

declare interface NodeJS$ConsoleConstructorOptions {
stdout: NodeJS$WritableStream,
stderr?: NodeJS$WritableStream,
ignoreErrors?: boolean,
colorMode?: boolean | "auto"
} 

declare interface NodeJS$ConsoleConstructor {
prototype: Console,
new (
stdout: NodeJS$WritableStream,
stderr?: NodeJS$WritableStream,
ignoreErrors?: boolean): Console,
new (options: NodeJS$ConsoleConstructorOptions): Console
} 

declare interface NodeJS$CallSite {

/**
 * Value of "this"
 */
getThis(): any,

/**
 * Type of "this" as a string.
 * This is the name of the function stored in the constructor field of
 * "this", if available.  Otherwise the object's [[Class]] internal
 * property.
 */
getTypeName(): string | null,

/**
 * Current function
 */
getFunction(): Function | void,

/**
 * Name of the current function, typically its name property.
 * If a name property is not available an attempt will be made to try
 * to infer a name from the function's context.
 */
getFunctionName(): string | null,

/**
 * Name of the property [of "this" or one of its prototypes] that holds
 * the current function
 */
getMethodName(): string | null,

/**
 * Name of the script [if this function was defined in a script]
 */
getFileName(): string | null,

/**
 * Current line number [if this function was defined in a script]
 */
getLineNumber(): number | null,

/**
 * Current column number [if this function was defined in a script]
 */
getColumnNumber(): number | null,

/**
 * A call site object representing the location where eval was called
 * [if this function was created using a call to eval]
 */
getEvalOrigin(): string | void,

/**
 * Is this a toplevel invocation, that is, is "this" the global object?
 */
isToplevel(): boolean,

/**
 * Does this call take place in code defined by a call to eval?
 */
isEval(): boolean,

/**
 * Is this call in native V8 code?
 */
isNative(): boolean,

/**
 * Is this a constructor call?
 */
isConstructor(): boolean
} 

declare type NodeJS$ErrnoException = {
errno?: number,
code?: string,
path?: string,
syscall?: string,
stack?: string
} & Error


declare class NodeJS$EventEmitter  {
addListener(event: string | Symbol, listener: (...args: any[]) => void): this;
on(event: string | Symbol, listener: (...args: any[]) => void): this;
once(event: string | Symbol, listener: (...args: any[]) => void): this;
removeListener(event: string | Symbol, listener: (...args: any[]) => void): this;
off(event: string | Symbol, listener: (...args: any[]) => void): this;
removeAllListeners(event?: string | Symbol): this;
setMaxListeners(n: number): this;
getMaxListeners(): number;
listeners(event: string | Symbol): Function[];
rawListeners(event: string | Symbol): Function[];
emit(event: string | Symbol, ...args: any[]): boolean;
listenerCount(type: string | Symbol): number;
prependListener(event: string | Symbol, listener: (...args: any[]) => void): this;
prependOnceListener(event: string | Symbol, listener: (...args: any[]) => void): this;
eventNames(): Array<string | Symbol>
}

declare type NodeJS$ReadableStream = {
readable: boolean,
read(size?: number): string | Buffer,
setEncoding(encoding: string): this,
pause(): this,
resume(): this,
isPaused(): boolean,
pipe<T: NodeJS$WritableStream>(destination: T, options?: {
end?: boolean
}): T,
unpipe(destination?: NodeJS$WritableStream): this,
unshift(chunk: string): void,
unshift(chunk: Buffer): void,
wrap(oldStream: NodeJS$ReadableStream): this,
undefined(): AsyncIterableIterator<string | Buffer>
} & NodeJS$EventEmitter


declare type NodeJS$WritableStream = {
writable: boolean,
write(buffer: Buffer | string, cb?: Function): boolean,
write(str: string, encoding?: string, cb?: Function): boolean,
end(cb?: Function): void,
end(buffer: Buffer, cb?: Function): void,
end(str: string, cb?: Function): void,
end(str: string, encoding?: string, cb?: Function): void
} & NodeJS$EventEmitter


declare type NodeJS$ReadWriteStream = {} & NodeJS$ReadableStream & NodeJS$WritableStream


declare type NodeJS$Events = {} & NodeJS$EventEmitter


declare type NodeJS$Domain = {
run(fn: Function): void,
add(emitter: NodeJS$Events): void,
remove(emitter: NodeJS$Events): void,
bind(cb: (err: Error, data: any) => any): any,
intercept(cb: (data: any) => any): any,
addListener(event: string, listener: (...args: any[]) => void): this,
on(event: string, listener: (...args: any[]) => void): this,
once(event: string, listener: (...args: any[]) => void): this,
removeListener(event: string, listener: (...args: any[]) => void): this,
removeAllListeners(event?: string): this
} & NodeJS$Events


declare interface NodeJS$MemoryUsage {
rss: number,
heapTotal: number,
heapUsed: number,
external: number
} 

declare interface NodeJS$CpuUsage {
user: number,
system: number
} 

declare interface NodeJS$ProcessRelease {
name: string,
sourceUrl?: string,
headersUrl?: string,
libUrl?: string,
lts?: string
} 

declare interface NodeJS$ProcessVersions {
http_parser: string,
node: string,
v8: string,
ares: string,
uv: string,
zlib: string,
modules: string,
openssl: string
} 

declare type NodeJS$Platform = "aix"
| "android"
| "darwin"
| "freebsd"
| "linux"
| "openbsd"
| "sunos"
| "win32"
| "cygwin";

declare type NodeJS$Signals = "SIGABRT"
| "SIGALRM"
| "SIGBUS"
| "SIGCHLD"
| "SIGCONT"
| "SIGFPE"
| "SIGHUP"
| "SIGILL"
| "SIGINT"
| "SIGIO"
| "SIGIOT"
| "SIGKILL"
| "SIGPIPE"
| "SIGPOLL"
| "SIGPROF"
| "SIGPWR"
| "SIGQUIT"
| "SIGSEGV"
| "SIGSTKFLT"
| "SIGSTOP"
| "SIGSYS"
| "SIGTERM"
| "SIGTRAP"
| "SIGTSTP"
| "SIGTTIN"
| "SIGTTOU"
| "SIGUNUSED"
| "SIGURG"
| "SIGUSR1"
| "SIGUSR2"
| "SIGVTALRM"
| "SIGWINCH"
| "SIGXCPU"
| "SIGXFSZ"
| "SIGBREAK"
| "SIGLOST"
| "SIGINFO";

declare type NodeJS$MultipleResolveType = "resolve" | "reject";

declare type NodeJS$BeforeExitListener = (code: number) => void;

declare type NodeJS$DisconnectListener = () => void;

declare type NodeJS$ExitListener = (code: number) => void;

declare type NodeJS$RejectionHandledListener = (promise: Promise<any>) => void;

declare type NodeJS$UncaughtExceptionListener = (error: Error) => void;

declare type NodeJS$UnhandledRejectionListener = (reason: any, promise: Promise<any>) => void;

declare type NodeJS$WarningListener = (warning: Error) => void;

declare type NodeJS$MessageListener = (message: any, sendHandle: any) => void;

declare type NodeJS$SignalsListener = (signal: NodeJS$Signals) => void;

declare type NodeJS$NewListenerListener = (type: string | Symbol, listener: (...args: any[]) => void) => void;

declare type NodeJS$RemoveListenerListener = (type: string | Symbol, listener: (...args: any[]) => void) => void;

declare type NodeJS$MultipleResolveListener = (type: NodeJS$MultipleResolveType, promise: Promise<any>, value: any) => void;

declare type NodeJS$Socket = {
isTTY?: true
} & NodeJS$ReadWriteStream


declare interface NodeJS$ProcessEnv {
[key: string]: string | void
} 

declare type NodeJS$WriteStream = {
+writableHighWaterMark: number,
+writableLength: number,
columns?: number,
rows?: number,
_write(chunk: any, encoding: string, callback: Function): void,
_destroy(err: Error | null, callback: Function): void,
_final(callback: Function): void,
setDefaultEncoding(encoding: string): this,
cork(): void,
uncork(): void,
destroy(error?: Error): void
} & NodeJS$Socket


declare type NodeJS$ReadStream = {
+readableHighWaterMark: number,
+readableLength: number,
isRaw?: boolean,
setRawMode(mode: boolean): void,
_read(size: number): void,
_destroy(err: Error | null, callback: Function): void,
push(chunk: any, encoding?: string): boolean,
destroy(error?: Error): void
} & NodeJS$Socket


declare type NodeJS$Process = {
stdout: NodeJS$WriteStream,
stderr: NodeJS$WriteStream,
stdin: NodeJS$ReadStream,
openStdin(): NodeJS$Socket,
argv: string[],
argv0: string,
execArgv: string[],
execPath: string,
abort(): void,
chdir(directory: string): void,
cwd(): string,
debugPort: number,
emitWarning(warning: string | Error, name?: string, ctor?: Function): void,
env: NodeJS$ProcessEnv,
exit(code?: number): empty,
exitCode: number,
getgid(): number,
setgid(id: number | string): void,
getuid(): number,
setuid(id: number | string): void,
geteuid(): number,
seteuid(id: number | string): void,
getegid(): number,
setegid(id: number | string): void,
getgroups(): number[],
setgroups(groups: Array<string | number>): void,
setUncaughtExceptionCaptureCallback(cb: ((err: Error) => void) | null): void,
hasUncaughtExceptionCaptureCallback(): boolean,
version: string,
versions: NodeJS$ProcessVersions,
config: {
target_defaults: {
cflags: any[],
default_configuration: string,
defines: string[],
include_dirs: string[],
libraries: string[]
},
variables: {
clang: number,
host_arch: string,
node_install_npm: boolean,
node_install_waf: boolean,
node_prefix: string,
node_shared_openssl: boolean,
node_shared_v8: boolean,
node_shared_zlib: boolean,
node_use_dtrace: boolean,
node_use_etw: boolean,
node_use_openssl: boolean,
target_arch: string,
v8_no_strict_aliasing: number,
v8_use_snapshot: boolean,
visibility: string
}
},
kill(pid: number, signal?: string | number): void,
pid: number,
ppid: number,
title: string,
arch: string,
platform: NodeJS$Platform,
mainModule?: NodeModule,
memoryUsage(): NodeJS$MemoryUsage,
cpuUsage(previousValue?: NodeJS$CpuUsage): NodeJS$CpuUsage,
nextTick(callback: Function, ...args: any[]): void,
release: NodeJS$ProcessRelease,
umask(mask?: number): number,
uptime(): number,
hrtime(time?: [number, number]): [number, number],
domain: NodeJS$Domain,
send(message: any, sendHandle?: any): void,
disconnect(): void,
connected: boolean,

/**
 * The `process.allowedNodeEnvironmentFlags` property is a special,
 * read-only `Set` of flags allowable within the [`NODE_OPTIONS`][]
 * environment variable.
 */
allowedNodeEnvironmentFlags: ReadonlySet<string>,

/**
 * EventEmitter
 *    1. beforeExit
 *    2. disconnect
 *    3. exit
 *    4. message
 *    5. rejectionHandled
 *    6. uncaughtException
 *    7. unhandledRejection
 *    8. warning
 *    9. message
 *   10. <All OS Signals>
 *   11. newListener/removeListener inherited from EventEmitter
 */
addListener(event: "beforeExit", listener: NodeJS$BeforeExitListener): this,
addListener(event: "disconnect", listener: NodeJS$DisconnectListener): this,
addListener(event: "exit", listener: NodeJS$ExitListener): this,
addListener(event: "rejectionHandled", listener: NodeJS$RejectionHandledListener): this,
addListener(event: "uncaughtException", listener: NodeJS$UncaughtExceptionListener): this,
addListener(event: "unhandledRejection", listener: NodeJS$UnhandledRejectionListener): this,
addListener(event: "warning", listener: NodeJS$WarningListener): this,
addListener(event: "message", listener: NodeJS$MessageListener): this,
addListener(event: NodeJS$Signals, listener: NodeJS$SignalsListener): this,
addListener(event: "newListener", listener: NodeJS$NewListenerListener): this,
addListener(event: "removeListener", listener: NodeJS$RemoveListenerListener): this,
addListener(event: "multipleResolves", listener: NodeJS$MultipleResolveListener): this,
emit(event: "beforeExit", code: number): boolean,
emit(event: "disconnect"): boolean,
emit(event: "exit", code: number): boolean,
emit(event: "rejectionHandled", promise: Promise<any>): boolean,
emit(event: "uncaughtException", error: Error): boolean,
emit(event: "unhandledRejection", reason: any, promise: Promise<any>): boolean,
emit(event: "warning", warning: Error): boolean,
emit(event: "message", message: any, sendHandle: any): this,
emit(event: NodeJS$Signals, signal: NodeJS$Signals): boolean,
emit(
event: "newListener",
eventName: string | Symbol,
listener: (...args: any[]) => void): this,
emit(
event: "removeListener",
eventName: string,
listener: (...args: any[]) => void): this,
emit(event: "multipleResolves", listener: NodeJS$MultipleResolveListener): this,
on(event: "beforeExit", listener: NodeJS$BeforeExitListener): this,
on(event: "disconnect", listener: NodeJS$DisconnectListener): this,
on(event: "exit", listener: NodeJS$ExitListener): this,
on(event: "rejectionHandled", listener: NodeJS$RejectionHandledListener): this,
on(event: "uncaughtException", listener: NodeJS$UncaughtExceptionListener): this,
on(event: "unhandledRejection", listener: NodeJS$UnhandledRejectionListener): this,
on(event: "warning", listener: NodeJS$WarningListener): this,
on(event: "message", listener: NodeJS$MessageListener): this,
on(event: NodeJS$Signals, listener: NodeJS$SignalsListener): this,
on(event: "newListener", listener: NodeJS$NewListenerListener): this,
on(event: "removeListener", listener: NodeJS$RemoveListenerListener): this,
on(event: "multipleResolves", listener: NodeJS$MultipleResolveListener): this,
once(event: "beforeExit", listener: NodeJS$BeforeExitListener): this,
once(event: "disconnect", listener: NodeJS$DisconnectListener): this,
once(event: "exit", listener: NodeJS$ExitListener): this,
once(event: "rejectionHandled", listener: NodeJS$RejectionHandledListener): this,
once(event: "uncaughtException", listener: NodeJS$UncaughtExceptionListener): this,
once(event: "unhandledRejection", listener: NodeJS$UnhandledRejectionListener): this,
once(event: "warning", listener: NodeJS$WarningListener): this,
once(event: "message", listener: NodeJS$MessageListener): this,
once(event: NodeJS$Signals, listener: NodeJS$SignalsListener): this,
once(event: "newListener", listener: NodeJS$NewListenerListener): this,
once(event: "removeListener", listener: NodeJS$RemoveListenerListener): this,
once(event: "multipleResolves", listener: NodeJS$MultipleResolveListener): this,
prependListener(event: "beforeExit", listener: NodeJS$BeforeExitListener): this,
prependListener(event: "disconnect", listener: NodeJS$DisconnectListener): this,
prependListener(event: "exit", listener: NodeJS$ExitListener): this,
prependListener(event: "rejectionHandled", listener: NodeJS$RejectionHandledListener): this,
prependListener(event: "uncaughtException", listener: NodeJS$UncaughtExceptionListener): this,
prependListener(event: "unhandledRejection", listener: NodeJS$UnhandledRejectionListener): this,
prependListener(event: "warning", listener: NodeJS$WarningListener): this,
prependListener(event: "message", listener: NodeJS$MessageListener): this,
prependListener(event: NodeJS$Signals, listener: NodeJS$SignalsListener): this,
prependListener(event: "newListener", listener: NodeJS$NewListenerListener): this,
prependListener(event: "removeListener", listener: NodeJS$RemoveListenerListener): this,
prependListener(event: "multipleResolves", listener: NodeJS$MultipleResolveListener): this,
prependOnceListener(event: "beforeExit", listener: NodeJS$BeforeExitListener): this,
prependOnceListener(event: "disconnect", listener: NodeJS$DisconnectListener): this,
prependOnceListener(event: "exit", listener: NodeJS$ExitListener): this,
prependOnceListener(event: "rejectionHandled", listener: NodeJS$RejectionHandledListener): this,
prependOnceListener(event: "uncaughtException", listener: NodeJS$UncaughtExceptionListener): this,
prependOnceListener(event: "unhandledRejection", listener: NodeJS$UnhandledRejectionListener): this,
prependOnceListener(event: "warning", listener: NodeJS$WarningListener): this,
prependOnceListener(event: "message", listener: NodeJS$MessageListener): this,
prependOnceListener(event: NodeJS$Signals, listener: NodeJS$SignalsListener): this,
prependOnceListener(event: "newListener", listener: NodeJS$NewListenerListener): this,
prependOnceListener(event: "removeListener", listener: NodeJS$RemoveListenerListener): this,
prependOnceListener(event: "multipleResolves", listener: NodeJS$MultipleResolveListener): this,
listeners(event: "beforeExit"): NodeJS$BeforeExitListener[],
listeners(event: "disconnect"): NodeJS$DisconnectListener[],
listeners(event: "exit"): NodeJS$ExitListener[],
listeners(event: "rejectionHandled"): NodeJS$RejectionHandledListener[],
listeners(event: "uncaughtException"): NodeJS$UncaughtExceptionListener[],
listeners(event: "unhandledRejection"): NodeJS$UnhandledRejectionListener[],
listeners(event: "warning"): NodeJS$WarningListener[],
listeners(event: "message"): NodeJS$MessageListener[],
listeners(event: NodeJS$Signals): NodeJS$SignalsListener[],
listeners(event: "newListener"): NodeJS$NewListenerListener[],
listeners(event: "removeListener"): NodeJS$RemoveListenerListener[],
listeners(event: "multipleResolves"): NodeJS$MultipleResolveListener[]
} & NodeJS$EventEmitter


declare interface NodeJS$Global {
Array: typeof Array,
ArrayBuffer: typeof ArrayBuffer,
Boolean: typeof Boolean,
Buffer: typeof Buffer,
DataView: typeof DataView,
Date: typeof Date,
Error: typeof Error,
EvalError: typeof EvalError,
Float32Array: typeof Float32Array,
Float64Array: typeof Float64Array,
Function: typeof Function,
GLOBAL: NodeJS$Global,
Infinity: typeof Infinity,
Int16Array: typeof Int16Array,
Int32Array: typeof Int32Array,
Int8Array: typeof Int8Array,
Intl: typeof Intl,
JSON: typeof JSON,
Map: MapConstructor,
Math: typeof Math,
NaN: typeof NaN,
Number: typeof Number,
Object: typeof Object,
Promise: Function,
RangeError: typeof RangeError,
ReferenceError: typeof ReferenceError,
RegExp: typeof RegExp,
Set: SetConstructor,
String: typeof String,
Symbol: Function,
SyntaxError: typeof SyntaxError,
TypeError: typeof TypeError,
URIError: typeof URIError,
Uint16Array: typeof Uint16Array,
Uint32Array: typeof Uint32Array,
Uint8Array: typeof Uint8Array,
Uint8ClampedArray: Function,
WeakMap: WeakMapConstructor,
WeakSet: WeakSetConstructor,
clearImmediate: (immediateId: NodeJS$Immediate) => void,
clearInterval: (intervalId: NodeJS$Timeout) => void,
clearTimeout: (timeoutId: NodeJS$Timeout) => void,
console: typeof console,
decodeURI: typeof decodeURI,
decodeURIComponent: typeof decodeURIComponent,
encodeURI: typeof encodeURI,
encodeURIComponent: typeof encodeURIComponent,
escape: (str: string) => string,
eval: typeof eval,
global: NodeJS$Global,
isFinite: typeof isFinite,
isNaN: typeof isNaN,
parseFloat: typeof parseFloat,
parseInt: typeof parseInt,
process: NodeJS$Process,
root: NodeJS$Global,
setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => NodeJS$Immediate,
setInterval: (
callback: (...args: any[]) => void,
ms: number,
...args: any[]) => NodeJS$Timeout,
setTimeout: (
callback: (...args: any[]) => void,
ms: number,
...args: any[]) => NodeJS$Timeout,
undefined: typeof undefined,
unescape: (str: string) => string,
gc: () => void,
v8debug?: any
} 

declare interface NodeJS$Timer {
ref(): void,
refresh(): void,
unref(): void
} 

declare class NodeJS$Immediate  {
ref(): void;
unref(): void;
_onImmediate: Function
}

declare class NodeJS$Timeout mixins NodeJS$Timer {
ref(): void;
refresh(): void;
unref(): void
}

declare class NodeJS$Module  {
static runMain(): void;
static wrap(code: string): string;
static createRequireFromPath(path: string): (path: string) => any;
static builtinModules: string[];
static NodeJS$Module: typeof Module;
exports: any;
require: NodeRequireFunction;
id: string;
filename: string;
loaded: boolean;
parent: NodeJS$Module | null;
children: NodeJS$Module[];
paths: string[];
constructor(id: string, parent?: NodeJS$Module): this
}

declare type NodeJS$TypedArray = Uint8Array
| Uint8ClampedArray
| Uint16Array
| Uint32Array
| Int8Array
| Int16Array
| Int32Array
| Float32Array
| Float64Array;
	declare interface IterableIterator<T> {} 
	declare module 'buffer' {
        declare export var INSPECT_MAX_BYTES: number;
	declare var BuffType: typeof Buffer;
	declare var SlowBuffType: typeof SlowBuffer;
	declare export {
          Buffer,SlowBuffer
        }

    }

	declare module 'querystring' {
        declare interface StringifyOptions {
encodeURIComponent?: Function
} 
	declare interface ParseOptions {
maxKeys?: number,
decodeURIComponent?: Function
} 
	declare interface ParsedUrlQuery {
[key: string]: string | string[]
} 
	declare function stringify(obj?: {}, sep?: string, eq?: string, options?: StringifyOptions): string

	declare function parse(str: string, sep?: string, eq?: string, options?: ParseOptions): ParsedUrlQuery

	declare function escape(str: string): string

	declare function unescape(str: string): string

    }

	declare module 'events' {
        declare class internal mixins NodeJS$NodeJS$EventEmitter {}
	declare class internal$EventEmitter mixins internal {

/**
 * @deprecated since v4.0.0
 */
static listenerCount(emitter: internal$EventEmitter, event: string | Symbol): number;
static defaultMaxListeners: number;
addListener(event: string | Symbol, listener: (...args: any[]) => void): this;
on(event: string | Symbol, listener: (...args: any[]) => void): this;
once(event: string | Symbol, listener: (...args: any[]) => void): this;
prependListener(event: string | Symbol, listener: (...args: any[]) => void): this;
prependOnceListener(event: string | Symbol, listener: (...args: any[]) => void): this;
removeListener(event: string | Symbol, listener: (...args: any[]) => void): this;
off(event: string | Symbol, listener: (...args: any[]) => void): this;
removeAllListeners(event?: string | Symbol): this;
setMaxListeners(n: number): this;
getMaxListeners(): number;
listeners(event: string | Symbol): Function[];
rawListeners(event: string | Symbol): Function[];
emit(event: string | Symbol, ...args: any[]): boolean;
eventNames(): Array<string | Symbol>;
listenerCount(type: string | Symbol): number
}
	declare module.exports: typeof internal

    }

	declare module 'http' {
        import typeof * as events from 'events';

	import typeof * as net from 'net';

	import typeof * as stream from 'stream';

	import type {
          URL
        } from 'url';

	declare interface IncomingHttpHeaders {
"accept"?: string,
"access-control-allow-origin"?: string,
"access-control-allow-credentials"?: string,
"access-control-expose-headers"?: string,
"access-control-max-age"?: string,
"access-control-allow-methods"?: string,
"access-control-allow-headers"?: string,
"accept-patch"?: string,
"accept-ranges"?: string,
"age"?: string,
"allow"?: string,
"alt-svc"?: string,
"authorization"?: string,
"cache-control"?: string,
"connection"?: string,
"content-disposition"?: string,
"content-encoding"?: string,
"content-language"?: string,
"content-length"?: string,
"content-location"?: string,
"content-range"?: string,
"content-type"?: string,
"cookie"?: string,
"date"?: string,
"expect"?: string,
"expires"?: string,
"forwarded"?: string,
"from"?: string,
"host"?: string,
"if-match"?: string,
"if-modified-since"?: string,
"if-none-match"?: string,
"if-unmodified-since"?: string,
"last-modified"?: string,
"location"?: string,
"pragma"?: string,
"proxy-authenticate"?: string,
"proxy-authorization"?: string,
"public-key-pins"?: string,
"range"?: string,
"referer"?: string,
"retry-after"?: string,
"set-cookie"?: string[],
"strict-transport-security"?: string,
"trailer"?: string,
"transfer-encoding"?: string,
"tk"?: string,
"upgrade"?: string,
"user-agent"?: string,
"vary"?: string,
"via"?: string,
"warning"?: string,
"www-authenticate"?: string,
[header: string]: string | string[] | void
} 
	declare interface OutgoingHttpHeaders {
[header: string]: number | string | string[] | void
} 
	declare interface ClientRequestArgs {
protocol?: string,
host?: string,
hostname?: string,
family?: number,
port?: number | string,
defaultPort?: number | string,
localAddress?: string,
socketPath?: string,
method?: string,
path?: string,
headers?: OutgoingHttpHeaders,
auth?: string,
agent?: Agent | boolean,
_defaultAgent?: Agent,
timeout?: number,
setHost?: boolean,
createConnection?: (
options: ClientRequestArgs,
oncreate: (err: Error, socket: net.NodeJS$Socket) => void) => net.NodeJS$Socket
} 
	declare class Server mixins net.Server {
constructor(requestListener?: (req: IncomingMessage, res: ServerResponse) => void): this;
setTimeout(msecs?: number, callback?: () => void): this;
setTimeout(callback: () => void): this;
maxHeadersCount: number;
timeout: number;
keepAliveTimeout: number
}
	declare class OutgoingMessage mixins stream.internal$Writable {
upgrading: boolean;
chunkedEncoding: boolean;
shouldKeepAlive: boolean;
useChunkedEncodingByDefault: boolean;
sendDate: boolean;
internal$finished: boolean;
headersSent: boolean;
connection: net.NodeJS$Socket;
constructor(): this;
setTimeout(msecs: number, callback?: () => void): this;
setHeader(name: string, value: number | string | string[]): void;
getHeader(name: string): number | string | string[] | void;
getHeaders(): OutgoingHttpHeaders;
getHeaderNames(): string[];
hasHeader(name: string): boolean;
removeHeader(name: string): void;
addTrailers(headers: OutgoingHttpHeaders | Array<[string, string]>): void;
flushHeaders(): void
}
	declare class ServerResponse mixins OutgoingMessage {
statusCode: number;
statusMessage: string;
constructor(req: IncomingMessage): this;
assignSocket(socket: net.NodeJS$Socket): void;
detachSocket(socket: net.NodeJS$Socket): void;
writeContinue(callback?: () => void): void;
writeHead(statusCode: number, reasonPhrase?: string, headers?: OutgoingHttpHeaders): void;
writeHead(statusCode: number, headers?: OutgoingHttpHeaders): void
}
	declare class ClientRequest mixins OutgoingMessage {
connection: net.NodeJS$Socket;
socket: net.NodeJS$Socket;
aborted: number;
constructor(url: string | URL | ClientRequestArgs, cb?: (res: IncomingMessage) => void): this;
abort(): void;
onSocket(socket: net.NodeJS$Socket): void;
setTimeout(timeout: number, callback?: () => void): this;
setNoDelay(noDelay?: boolean): void;
setSocketKeepAlive(enable?: boolean, initialDelay?: number): void
}
	declare class IncomingMessage mixins stream.internal$Readable {
constructor(socket: net.NodeJS$Socket): this;
httpVersion: string;
httpVersionMajor: number;
httpVersionMinor: number;
connection: net.NodeJS$Socket;
headers: IncomingHttpHeaders;
rawHeaders: string[];
trailers: {
[key: string]: string | void
};
rawTrailers: string[];
setTimeout(msecs: number, callback: () => void): this;

/**
 * Only valid for request obtained from http.Server.
 */
method: string;

/**
 * Only valid for request obtained from http.Server.
 */
url: string;

/**
 * Only valid for response obtained from http.ClientRequest.
 */
statusCode: number;

/**
 * Only valid for response obtained from http.ClientRequest.
 */
statusMessage: string;
socket: net.NodeJS$Socket;
destroy(error?: Error): void
}
	declare interface AgentOptions {

/**
 * Keep sockets around in a pool to be used by other requests in the future. Default = false
 */
keepAlive?: boolean,

/**
 * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
 * Only relevant if keepAlive is set to true.
 */
keepAliveMsecs?: number,

/**
 * Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity
 */
maxSockets?: number,

/**
 * Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.
 */
maxFreeSockets?: number,

/**
 * Socket timeout in milliseconds. This will set the timeout after the socket is connected.
 */
timeout?: number
} 
	declare class Agent  {
maxFreeSockets: number;
maxSockets: number;
sockets: any;
requests: any;
constructor(opts?: AgentOptions): this;

/**
 * Destroy any sockets that are currently in use by the agent.
 * It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
 * then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
 * sockets may hang open for quite a long time before the server terminates them.
 */
destroy(): void
}
	declare var METHODS: string[];
	declare var STATUS_CODES: {
[errorCode: number]: string | void,
[errorCode: string]: string | void
};
	declare function createServer(
requestListener?: (request: IncomingMessage, response: ServerResponse) => void): Server

	declare function createClient(port?: number, host?: string): any

	declare type RequestOptions = {} & ClientRequestArgs

	declare function request(
options: RequestOptions | string | URL,
callback?: (res: IncomingMessage) => void): ClientRequest

	declare function request(
url: string | URL,
options: RequestOptions,
callback?: (res: IncomingMessage) => void): ClientRequest

	declare function get(
options: RequestOptions | string | URL,
callback?: (res: IncomingMessage) => void): ClientRequest

	declare function get(
url: string | URL,
options: RequestOptions,
callback?: (res: IncomingMessage) => void): ClientRequest

	declare var globalAgent: Agent;
    }

	declare module 'cluster' {
        import typeof * as child from 'child_process';

	import typeof * as events from 'events';

	import typeof * as net from 'net';

	declare interface ClusterSettings {
execArgv?: string[],
exec?: string,
args?: string[],
silent?: boolean,
stdio?: any[],
uid?: number,
gid?: number,
inspectPort?: number | (() => number)
} 
	declare interface Address {
address: string,
port: number,
addressType: number | "udp4" | "udp6"
} 
	declare class Worker mixins events.internal$EventEmitter {
id: number;
process: child.ChildProcess;
suicide: boolean;
send(message: any, sendHandle?: any, callback?: (error: Error) => void): boolean;
kill(signal?: string): void;
destroy(signal?: string): void;
disconnect(): void;
isConnected(): boolean;
isDead(): boolean;
exitedAfterDisconnect: boolean;

/**
 * events.EventEmitter
 *    1. disconnect
 *    2. error
 *    3. exit
 *    4. listening
 *    5. message
 *    6. online
 */
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(event: "disconnect", listener: () => void): this;
addListener(event: "error", listener: (error: Error) => void): this;
addListener(event: "exit", listener: (code: number, signal: string) => void): this;
addListener(event: "listening", listener: (address: Address) => void): this;
addListener(
event: "message",
listener: (message: any, handle: net.NodeJS$Socket | net.Server) => void): this;
addListener(event: "online", listener: () => void): this;
emit(event: string | Symbol, ...args: any[]): boolean;
emit(event: "disconnect"): boolean;
emit(event: "error", error: Error): boolean;
emit(event: "exit", code: number, signal: string): boolean;
emit(event: "listening", address: Address): boolean;
emit(
event: "message",
message: any,
handle: net.NodeJS$Socket | net.Server): boolean;
emit(event: "online"): boolean;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "disconnect", listener: () => void): this;
on(event: "error", listener: (error: Error) => void): this;
on(event: "exit", listener: (code: number, signal: string) => void): this;
on(event: "listening", listener: (address: Address) => void): this;
on(
event: "message",
listener: (message: any, handle: net.NodeJS$Socket | net.Server) => void): this;
on(event: "online", listener: () => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "disconnect", listener: () => void): this;
once(event: "error", listener: (error: Error) => void): this;
once(event: "exit", listener: (code: number, signal: string) => void): this;
once(event: "listening", listener: (address: Address) => void): this;
once(
event: "message",
listener: (message: any, handle: net.NodeJS$Socket | net.Server) => void): this;
once(event: "online", listener: () => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "disconnect", listener: () => void): this;
prependListener(event: "error", listener: (error: Error) => void): this;
prependListener(event: "exit", listener: (code: number, signal: string) => void): this;
prependListener(event: "listening", listener: (address: Address) => void): this;
prependListener(
event: "message",
listener: (message: any, handle: net.NodeJS$Socket | net.Server) => void): this;
prependListener(event: "online", listener: () => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "disconnect", listener: () => void): this;
prependOnceListener(event: "error", listener: (error: Error) => void): this;
prependOnceListener(event: "exit", listener: (code: number, signal: string) => void): this;
prependOnceListener(event: "listening", listener: (address: Address) => void): this;
prependOnceListener(
event: "message",
listener: (message: any, handle: net.NodeJS$Socket | net.Server) => void): this;
prependOnceListener(event: "online", listener: () => void): this
}
	declare type Cluster = {
Worker: Worker,
disconnect(callback?: Function): void,
fork(env?: any): Worker,
isMaster: boolean,
isWorker: boolean,
settings: ClusterSettings,
setupMaster(settings?: ClusterSettings): void,
worker?: Worker,
workers?: {
[index: string]: Worker | void
},

/**
 * events.EventEmitter
 *    1. disconnect
 *    2. exit
 *    3. fork
 *    4. listening
 *    5. message
 *    6. online
 *    7. setup
 */
addListener(event: string, listener: (...args: any[]) => void): this,
addListener(event: "disconnect", listener: (worker: Worker) => void): this,
addListener(
event: "exit",
listener: (worker: Worker, code: number, signal: string) => void): this,
addListener(event: "fork", listener: (worker: Worker) => void): this,
addListener(event: "listening", listener: (worker: Worker, address: Address) => void): this,
addListener(
event: "message",
listener: (worker: Worker, message: any, handle: net.NodeJS$Socket | net.Server) => void): this,
addListener(event: "online", listener: (worker: Worker) => void): this,
addListener(event: "setup", listener: (settings: any) => void): this,
emit(event: string | Symbol, ...args: any[]): boolean,
emit(event: "disconnect", worker: Worker): boolean,
emit(event: "exit", worker: Worker, code: number, signal: string): boolean,
emit(event: "fork", worker: Worker): boolean,
emit(event: "listening", worker: Worker, address: Address): boolean,
emit(
event: "message",
worker: Worker,
message: any,
handle: net.NodeJS$Socket | net.Server): boolean,
emit(event: "online", worker: Worker): boolean,
emit(event: "setup", settings: any): boolean,
on(event: string, listener: (...args: any[]) => void): this,
on(event: "disconnect", listener: (worker: Worker) => void): this,
on(
event: "exit",
listener: (worker: Worker, code: number, signal: string) => void): this,
on(event: "fork", listener: (worker: Worker) => void): this,
on(event: "listening", listener: (worker: Worker, address: Address) => void): this,
on(
event: "message",
listener: (worker: Worker, message: any, handle: net.NodeJS$Socket | net.Server) => void): this,
on(event: "online", listener: (worker: Worker) => void): this,
on(event: "setup", listener: (settings: any) => void): this,
once(event: string, listener: (...args: any[]) => void): this,
once(event: "disconnect", listener: (worker: Worker) => void): this,
once(
event: "exit",
listener: (worker: Worker, code: number, signal: string) => void): this,
once(event: "fork", listener: (worker: Worker) => void): this,
once(event: "listening", listener: (worker: Worker, address: Address) => void): this,
once(
event: "message",
listener: (worker: Worker, message: any, handle: net.NodeJS$Socket | net.Server) => void): this,
once(event: "online", listener: (worker: Worker) => void): this,
once(event: "setup", listener: (settings: any) => void): this,
prependListener(event: string, listener: (...args: any[]) => void): this,
prependListener(event: "disconnect", listener: (worker: Worker) => void): this,
prependListener(
event: "exit",
listener: (worker: Worker, code: number, signal: string) => void): this,
prependListener(event: "fork", listener: (worker: Worker) => void): this,
prependListener(event: "listening", listener: (worker: Worker, address: Address) => void): this,
prependListener(
event: "message",
listener: (worker: Worker, message: any, handle: net.NodeJS$Socket | net.Server) => void): this,
prependListener(event: "online", listener: (worker: Worker) => void): this,
prependListener(event: "setup", listener: (settings: any) => void): this,
prependOnceListener(event: string, listener: (...args: any[]) => void): this,
prependOnceListener(event: "disconnect", listener: (worker: Worker) => void): this,
prependOnceListener(
event: "exit",
listener: (worker: Worker, code: number, signal: string) => void): this,
prependOnceListener(event: "fork", listener: (worker: Worker) => void): this,
prependOnceListener(event: "listening", listener: (worker: Worker, address: Address) => void): this,
prependOnceListener(
event: "message",
listener: (worker: Worker, message: any, handle: net.NodeJS$Socket | net.Server) => void): this,
prependOnceListener(event: "online", listener: (worker: Worker) => void): this,
prependOnceListener(event: "setup", listener: (settings: any) => void): this
} & events.internal$EventEmitter

	declare function disconnect(callback?: Function): void

	declare function fork(env?: any): Worker

	declare var isMaster: boolean;
	declare var isWorker: boolean;
	declare var settings: ClusterSettings;
	declare function setupMaster(settings?: ClusterSettings): void

	declare var worker: Worker;
	declare var workers: {
[index: string]: Worker | void
};
	
/**
 * events.EventEmitter
 *    1. disconnect
 *    2. exit
 *    3. fork
 *    4. listening
 *    5. message
 *    6. online
 *    7. setup
 */
declare function addListener(event: string, listener: (...args: any[]) => void): Cluster

	declare function addListener(event: "disconnect", listener: (worker: Worker) => void): Cluster

	declare function addListener(
event: "exit",
listener: (worker: Worker, code: number, signal: string) => void): Cluster

	declare function addListener(event: "fork", listener: (worker: Worker) => void): Cluster

	declare function addListener(
event: "listening",
listener: (worker: Worker, address: Address) => void): Cluster

	declare function addListener(
event: "message",
listener: (worker: Worker, message: any, handle: net.NodeJS$Socket | net.Server) => void): Cluster

	declare function addListener(event: "online", listener: (worker: Worker) => void): Cluster

	declare function addListener(event: "setup", listener: (settings: any) => void): Cluster

	declare function emit(event: string | Symbol, ...args: any[]): boolean

	declare function emit(event: "disconnect", worker: Worker): boolean

	declare function emit(event: "exit", worker: Worker, code: number, signal: string): boolean

	declare function emit(event: "fork", worker: Worker): boolean

	declare function emit(event: "listening", worker: Worker, address: Address): boolean

	declare function emit(
event: "message",
worker: Worker,
message: any,
handle: net.NodeJS$Socket | net.Server): boolean

	declare function emit(event: "online", worker: Worker): boolean

	declare function emit(event: "setup", settings: any): boolean

	declare function on(event: string, listener: (...args: any[]) => void): Cluster

	declare function on(event: "disconnect", listener: (worker: Worker) => void): Cluster

	declare function on(
event: "exit",
listener: (worker: Worker, code: number, signal: string) => void): Cluster

	declare function on(event: "fork", listener: (worker: Worker) => void): Cluster

	declare function on(
event: "listening",
listener: (worker: Worker, address: Address) => void): Cluster

	declare function on(
event: "message",
listener: (worker: Worker, message: any, handle: net.NodeJS$Socket | net.Server) => void): Cluster

	declare function on(event: "online", listener: (worker: Worker) => void): Cluster

	declare function on(event: "setup", listener: (settings: any) => void): Cluster

	declare function once(event: string, listener: (...args: any[]) => void): Cluster

	declare function once(event: "disconnect", listener: (worker: Worker) => void): Cluster

	declare function once(
event: "exit",
listener: (worker: Worker, code: number, signal: string) => void): Cluster

	declare function once(event: "fork", listener: (worker: Worker) => void): Cluster

	declare function once(
event: "listening",
listener: (worker: Worker, address: Address) => void): Cluster

	declare function once(
event: "message",
listener: (worker: Worker, message: any, handle: net.NodeJS$Socket | net.Server) => void): Cluster

	declare function once(event: "online", listener: (worker: Worker) => void): Cluster

	declare function once(event: "setup", listener: (settings: any) => void): Cluster

	declare function removeListener(event: string, listener: (...args: any[]) => void): Cluster

	declare function removeAllListeners(event?: string): Cluster

	declare function setMaxListeners(n: number): Cluster

	declare function getMaxListeners(): number

	declare function listeners(event: string): Function[]

	declare function listenerCount(type: string): number

	declare function prependListener(event: string, listener: (...args: any[]) => void): Cluster

	declare function prependListener(event: "disconnect", listener: (worker: Worker) => void): Cluster

	declare function prependListener(
event: "exit",
listener: (worker: Worker, code: number, signal: string) => void): Cluster

	declare function prependListener(event: "fork", listener: (worker: Worker) => void): Cluster

	declare function prependListener(
event: "listening",
listener: (worker: Worker, address: Address) => void): Cluster

	declare function prependListener(
event: "message",
listener: (worker: Worker, message: any, handle: net.NodeJS$Socket | net.Server) => void): Cluster

	declare function prependListener(event: "online", listener: (worker: Worker) => void): Cluster

	declare function prependListener(event: "setup", listener: (settings: any) => void): Cluster

	declare function prependOnceListener(event: string, listener: (...args: any[]) => void): Cluster

	declare function prependOnceListener(event: "disconnect", listener: (worker: Worker) => void): Cluster

	declare function prependOnceListener(
event: "exit",
listener: (worker: Worker, code: number, signal: string) => void): Cluster

	declare function prependOnceListener(event: "fork", listener: (worker: Worker) => void): Cluster

	declare function prependOnceListener(
event: "listening",
listener: (worker: Worker, address: Address) => void): Cluster

	declare function prependOnceListener(
event: "message",
listener: (worker: Worker, message: any, handle: net.NodeJS$Socket | net.Server) => void): Cluster

	declare function prependOnceListener(event: "online", listener: (worker: Worker) => void): Cluster

	declare function prependOnceListener(event: "setup", listener: (settings: any) => void): Cluster

	declare function eventNames(): string[]

    }

	declare module 'worker_threads' {
        import type {
          EventEmitter
        } from 'events';

	import type {
          Readable,Writable
        } from 'stream';

	declare var isMainThread: boolean;
	declare var parentPort: null | MessagePort;
	declare var threadId: number;
	declare var workerData: any;
	declare class MessageChannel  {
port1: MessagePort;
port2: MessagePort
}
	declare class MessagePort mixins internal$EventEmitter {
close(): void;
postMessage(value: any, transferList?: Array<ArrayBuffer | MessagePort>): void;
ref(): void;
unref(): void;
start(): void;
addListener(event: "close", listener: () => void): this;
addListener(event: "message", listener: (value: any) => void): this;
addListener(event: string | Symbol, listener: (...args: any[]) => void): this;
emit(event: "close"): boolean;
emit(event: "message", value: any): boolean;
emit(event: string | Symbol, ...args: any[]): boolean;
on(event: "close", listener: () => void): this;
on(event: "message", listener: (value: any) => void): this;
on(event: string | Symbol, listener: (...args: any[]) => void): this;
once(event: "close", listener: () => void): this;
once(event: "message", listener: (value: any) => void): this;
once(event: string | Symbol, listener: (...args: any[]) => void): this;
prependListener(event: "close", listener: () => void): this;
prependListener(event: "message", listener: (value: any) => void): this;
prependListener(event: string | Symbol, listener: (...args: any[]) => void): this;
prependOnceListener(event: "close", listener: () => void): this;
prependOnceListener(event: "message", listener: (value: any) => void): this;
prependOnceListener(event: string | Symbol, listener: (...args: any[]) => void): this;
removeListener(event: "close", listener: () => void): this;
removeListener(event: "message", listener: (value: any) => void): this;
removeListener(event: string | Symbol, listener: (...args: any[]) => void): this;
off(event: "close", listener: () => void): this;
off(event: "message", listener: (value: any) => void): this;
off(event: string | Symbol, listener: (...args: any[]) => void): this
}
	declare interface WorkerOptions {
eval?: boolean,
workerData?: any,
stdin?: boolean,
stdout?: boolean,
stderr?: boolean
} 
	declare class Worker mixins internal$EventEmitter {
stdin: internal$Writable | null;
stdout: internal$Readable;
stderr: internal$Readable;
threadId: number;
constructor(filename: string, options?: WorkerOptions): this;
postMessage(value: any, transferList?: Array<ArrayBuffer | MessagePort>): void;
ref(): void;
unref(): void;
terminate(callback?: (err: any, exitCode: number) => void): void;
addListener(event: "error", listener: (err: any) => void): this;
addListener(event: "exit", listener: (exitCode: number) => void): this;
addListener(event: "message", listener: (value: any) => void): this;
addListener(event: "online", listener: () => void): this;
addListener(event: string | Symbol, listener: (...args: any[]) => void): this;
emit(event: "error", err: any): boolean;
emit(event: "exit", exitCode: number): boolean;
emit(event: "message", value: any): boolean;
emit(event: "online"): boolean;
emit(event: string | Symbol, ...args: any[]): boolean;
on(event: "error", listener: (err: any) => void): this;
on(event: "exit", listener: (exitCode: number) => void): this;
on(event: "message", listener: (value: any) => void): this;
on(event: "online", listener: () => void): this;
on(event: string | Symbol, listener: (...args: any[]) => void): this;
once(event: "error", listener: (err: any) => void): this;
once(event: "exit", listener: (exitCode: number) => void): this;
once(event: "message", listener: (value: any) => void): this;
once(event: "online", listener: () => void): this;
once(event: string | Symbol, listener: (...args: any[]) => void): this;
prependListener(event: "error", listener: (err: any) => void): this;
prependListener(event: "exit", listener: (exitCode: number) => void): this;
prependListener(event: "message", listener: (value: any) => void): this;
prependListener(event: "online", listener: () => void): this;
prependListener(event: string | Symbol, listener: (...args: any[]) => void): this;
prependOnceListener(event: "error", listener: (err: any) => void): this;
prependOnceListener(event: "exit", listener: (exitCode: number) => void): this;
prependOnceListener(event: "message", listener: (value: any) => void): this;
prependOnceListener(event: "online", listener: () => void): this;
prependOnceListener(event: string | Symbol, listener: (...args: any[]) => void): this;
removeListener(event: "error", listener: (err: any) => void): this;
removeListener(event: "exit", listener: (exitCode: number) => void): this;
removeListener(event: "message", listener: (value: any) => void): this;
removeListener(event: "online", listener: () => void): this;
removeListener(event: string | Symbol, listener: (...args: any[]) => void): this;
off(event: "error", listener: (err: any) => void): this;
off(event: "exit", listener: (exitCode: number) => void): this;
off(event: "message", listener: (value: any) => void): this;
off(event: "online", listener: () => void): this;
off(event: string | Symbol, listener: (...args: any[]) => void): this
}
    }

	declare module 'zlib' {
        import typeof * as stream from 'stream';

	declare interface ZlibOptions {
flush?: number,
finishFlush?: number,
chunkSize?: number,
windowBits?: number,
level?: number,
memLevel?: number,
strategy?: number,
dictionary?: Buffer | NodeJS$NodeJS$TypedArray | DataView | ArrayBuffer
} 
	declare interface Zlib {
+bytesRead: number,
close(callback?: () => void): void,
flush(kind?: number | (() => void), callback?: () => void): void
} 
	declare interface ZlibParams {
params(level: number, strategy: number, callback: () => void): void
} 
	declare interface ZlibReset {
reset(): void
} 
	declare type Gzip = {} & stream.internal$Transform & Zlib

	declare type Gunzip = {} & stream.internal$Transform & Zlib

	declare type Deflate = {} & stream.internal$Transform & Zlib & ZlibReset & ZlibParams

	declare type Inflate = {} & stream.internal$Transform & Zlib & ZlibReset

	declare type DeflateRaw = {} & stream.internal$Transform & Zlib & ZlibReset & ZlibParams

	declare type InflateRaw = {} & stream.internal$Transform & Zlib & ZlibReset

	declare type Unzip = {} & stream.internal$Transform & Zlib

	declare function createGzip(options?: ZlibOptions): Gzip

	declare function createGunzip(options?: ZlibOptions): Gunzip

	declare function createDeflate(options?: ZlibOptions): Deflate

	declare function createInflate(options?: ZlibOptions): Inflate

	declare function createDeflateRaw(options?: ZlibOptions): DeflateRaw

	declare function createInflateRaw(options?: ZlibOptions): InflateRaw

	declare function createUnzip(options?: ZlibOptions): Unzip

	declare type InputType = string
| Buffer
| DataView
| ArrayBuffer
| NodeJS$NodeJS$TypedArray;
	declare function deflate(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void

	declare function deflate(
buf: InputType,
options: ZlibOptions,
callback: (error: Error | null, result: Buffer) => void): void

	declare function deflateSync(buf: InputType, options?: ZlibOptions): Buffer

	declare function deflateRaw(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void

	declare function deflateRaw(
buf: InputType,
options: ZlibOptions,
callback: (error: Error | null, result: Buffer) => void): void

	declare function deflateRawSync(buf: InputType, options?: ZlibOptions): Buffer

	declare function gzip(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void

	declare function gzip(
buf: InputType,
options: ZlibOptions,
callback: (error: Error | null, result: Buffer) => void): void

	declare function gzipSync(buf: InputType, options?: ZlibOptions): Buffer

	declare function gunzip(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void

	declare function gunzip(
buf: InputType,
options: ZlibOptions,
callback: (error: Error | null, result: Buffer) => void): void

	declare function gunzipSync(buf: InputType, options?: ZlibOptions): Buffer

	declare function inflate(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void

	declare function inflate(
buf: InputType,
options: ZlibOptions,
callback: (error: Error | null, result: Buffer) => void): void

	declare function inflateSync(buf: InputType, options?: ZlibOptions): Buffer

	declare function inflateRaw(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void

	declare function inflateRaw(
buf: InputType,
options: ZlibOptions,
callback: (error: Error | null, result: Buffer) => void): void

	declare function inflateRawSync(buf: InputType, options?: ZlibOptions): Buffer

	declare function unzip(buf: InputType, callback: (error: Error | null, result: Buffer) => void): void

	declare function unzip(
buf: InputType,
options: ZlibOptions,
callback: (error: Error | null, result: Buffer) => void): void

	declare function unzipSync(buf: InputType, options?: ZlibOptions): Buffer

	
      declare var npm$namespace$constants: {
        
        Z_NO_FLUSH: typeof constants$Z_NO_FLUSH,
Z_PARTIAL_FLUSH: typeof constants$Z_PARTIAL_FLUSH,
Z_SYNC_FLUSH: typeof constants$Z_SYNC_FLUSH,
Z_FULL_FLUSH: typeof constants$Z_FULL_FLUSH,
Z_FINISH: typeof constants$Z_FINISH,
Z_BLOCK: typeof constants$Z_BLOCK,
Z_TREES: typeof constants$Z_TREES,
Z_OK: typeof constants$Z_OK,
Z_STREAM_END: typeof constants$Z_STREAM_END,
Z_NEED_DICT: typeof constants$Z_NEED_DICT,
Z_ERRNO: typeof constants$Z_ERRNO,
Z_STREAM_ERROR: typeof constants$Z_STREAM_ERROR,
Z_DATA_ERROR: typeof constants$Z_DATA_ERROR,
Z_MEM_ERROR: typeof constants$Z_MEM_ERROR,
Z_BUF_ERROR: typeof constants$Z_BUF_ERROR,
Z_VERSION_ERROR: typeof constants$Z_VERSION_ERROR,
Z_NO_COMPRESSION: typeof constants$Z_NO_COMPRESSION,
Z_BEST_SPEED: typeof constants$Z_BEST_SPEED,
Z_BEST_COMPRESSION: typeof constants$Z_BEST_COMPRESSION,
Z_DEFAULT_COMPRESSION: typeof constants$Z_DEFAULT_COMPRESSION,
Z_FILTERED: typeof constants$Z_FILTERED,
Z_HUFFMAN_ONLY: typeof constants$Z_HUFFMAN_ONLY,
Z_RLE: typeof constants$Z_RLE,
Z_FIXED: typeof constants$Z_FIXED,
Z_DEFAULT_STRATEGY: typeof constants$Z_DEFAULT_STRATEGY,
      }
declare var constants$Z_NO_FLUSH: number;

declare var constants$Z_PARTIAL_FLUSH: number;

declare var constants$Z_SYNC_FLUSH: number;

declare var constants$Z_FULL_FLUSH: number;

declare var constants$Z_FINISH: number;

declare var constants$Z_BLOCK: number;

declare var constants$Z_TREES: number;

declare var constants$Z_OK: number;

declare var constants$Z_STREAM_END: number;

declare var constants$Z_NEED_DICT: number;

declare var constants$Z_ERRNO: number;

declare var constants$Z_STREAM_ERROR: number;

declare var constants$Z_DATA_ERROR: number;

declare var constants$Z_MEM_ERROR: number;

declare var constants$Z_BUF_ERROR: number;

declare var constants$Z_VERSION_ERROR: number;

declare var constants$Z_NO_COMPRESSION: number;

declare var constants$Z_BEST_SPEED: number;

declare var constants$Z_BEST_COMPRESSION: number;

declare var constants$Z_DEFAULT_COMPRESSION: number;

declare var constants$Z_FILTERED: number;

declare var constants$Z_HUFFMAN_ONLY: number;

declare var constants$Z_RLE: number;

declare var constants$Z_FIXED: number;

declare var constants$Z_DEFAULT_STRATEGY: number;
	declare var constants$Z_NO_FLUSH: number;
	declare var constants$Z_PARTIAL_FLUSH: number;
	declare var constants$Z_SYNC_FLUSH: number;
	declare var constants$Z_FULL_FLUSH: number;
	declare var constants$Z_FINISH: number;
	declare var constants$Z_BLOCK: number;
	declare var constants$Z_TREES: number;
	declare var constants$Z_OK: number;
	declare var constants$Z_STREAM_END: number;
	declare var constants$Z_NEED_DICT: number;
	declare var constants$Z_ERRNO: number;
	declare var constants$Z_STREAM_ERROR: number;
	declare var constants$Z_DATA_ERROR: number;
	declare var constants$Z_MEM_ERROR: number;
	declare var constants$Z_BUF_ERROR: number;
	declare var constants$Z_VERSION_ERROR: number;
	declare var constants$Z_NO_COMPRESSION: number;
	declare var constants$Z_BEST_SPEED: number;
	declare var constants$Z_BEST_COMPRESSION: number;
	declare var constants$Z_DEFAULT_COMPRESSION: number;
	declare var constants$Z_FILTERED: number;
	declare var constants$Z_HUFFMAN_ONLY: number;
	declare var constants$Z_RLE: number;
	declare var constants$Z_FIXED: number;
	declare var constants$Z_DEFAULT_STRATEGY: number;
	declare var Z_BINARY: number;
	declare var Z_TEXT: number;
	declare var Z_ASCII: number;
	declare var Z_UNKNOWN: number;
	declare var Z_DEFLATED: number;
    }

	declare module 'os' {
        declare interface CpuInfo {
model: string,
speed: number,
times: {
user: number,
nice: number,
sys: number,
idle: number,
irq: number
}
} 
	declare interface NetworkInterfaceBase {
address: string,
netmask: string,
mac: string,
internal: boolean,
cidr: string | null
} 
	declare type NetworkInterfaceInfoIPv4 = {
family: "IPv4"
} & NetworkInterfaceBase

	declare type NetworkInterfaceInfoIPv6 = {
family: "IPv6",
scopeid: number
} & NetworkInterfaceBase

	declare type NetworkInterfaceInfo = NetworkInterfaceInfoIPv4 | NetworkInterfaceInfoIPv6;
	declare function hostname(): string

	declare function loadavg(): number[]

	declare function uptime(): number

	declare function freemem(): number

	declare function totalmem(): number

	declare function cpus(): CpuInfo[]

	declare function type(): string

	declare function release(): string

	declare function networkInterfaces(): {
[index: string]: NetworkInterfaceInfo[]
}

	declare function homedir(): string

	declare function userInfo(
options?: {
encoding: string
}): {
username: string,
uid: number,
gid: number,
shell: any,
homedir: string
}

	declare var constants: {
UV_UDP_REUSEADDR: number,
signals: {
SIGHUP: number,
SIGINT: number,
SIGQUIT: number,
SIGILL: number,
SIGTRAP: number,
SIGABRT: number,
SIGIOT: number,
SIGBUS: number,
SIGFPE: number,
SIGKILL: number,
SIGUSR1: number,
SIGSEGV: number,
SIGUSR2: number,
SIGPIPE: number,
SIGALRM: number,
SIGTERM: number,
SIGCHLD: number,
SIGSTKFLT: number,
SIGCONT: number,
SIGSTOP: number,
SIGTSTP: number,
SIGTTIN: number,
SIGTTOU: number,
SIGURG: number,
SIGXCPU: number,
SIGXFSZ: number,
SIGVTALRM: number,
SIGPROF: number,
SIGWINCH: number,
SIGIO: number,
SIGPOLL: number,
SIGPWR: number,
SIGSYS: number,
SIGUNUSED: number
},
errno: {
E2BIG: number,
EACCES: number,
EADDRINUSE: number,
EADDRNOTAVAIL: number,
EAFNOSUPPORT: number,
EAGAIN: number,
EALREADY: number,
EBADF: number,
EBADMSG: number,
EBUSY: number,
ECANCELED: number,
ECHILD: number,
ECONNABORTED: number,
ECONNREFUSED: number,
ECONNRESET: number,
EDEADLK: number,
EDESTADDRREQ: number,
EDOM: number,
EDQUOT: number,
EEXIST: number,
EFAULT: number,
EFBIG: number,
EHOSTUNREACH: number,
EIDRM: number,
EILSEQ: number,
EINPROGRESS: number,
EINTR: number,
EINVAL: number,
EIO: number,
EISCONN: number,
EISDIR: number,
ELOOP: number,
EMFILE: number,
EMLINK: number,
EMSGSIZE: number,
EMULTIHOP: number,
ENAMETOOLONG: number,
ENETDOWN: number,
ENETRESET: number,
ENETUNREACH: number,
ENFILE: number,
ENOBUFS: number,
ENODATA: number,
ENODEV: number,
ENOENT: number,
ENOEXEC: number,
ENOLCK: number,
ENOLINK: number,
ENOMEM: number,
ENOMSG: number,
ENOPROTOOPT: number,
ENOSPC: number,
ENOSR: number,
ENOSTR: number,
ENOSYS: number,
ENOTCONN: number,
ENOTDIR: number,
ENOTEMPTY: number,
ENOTSOCK: number,
ENOTSUP: number,
ENOTTY: number,
ENXIO: number,
EOPNOTSUPP: number,
EOVERFLOW: number,
EPERM: number,
EPIPE: number,
EPROTO: number,
EPROTONOSUPPORT: number,
EPROTOTYPE: number,
ERANGE: number,
EROFS: number,
ESPIPE: number,
ESRCH: number,
ESTALE: number,
ETIME: number,
ETIMEDOUT: number,
ETXTBSY: number,
EWOULDBLOCK: number,
EXDEV: number
},
priority: {
PRIORITY_LOW: number,
PRIORITY_BELOW_NORMAL: number,
PRIORITY_NORMAL: number,
PRIORITY_ABOVE_NORMAL: number,
PRIORITY_HIGH: number,
PRIORITY_HIGHEST: number
}
};
	declare function arch(): string

	declare function platform(): NodeJS$NodeJS$Platform

	declare function tmpdir(): string

	declare var EOL: string;
	declare function endianness(): "BE" | "LE"

	
/**
 * Gets the priority of a process.
 * Defaults to current process.
 */
declare function getPriority(pid?: number): number

	
/**
 * Sets the priority of the current process.
 * @param priority Must be in range of -20 to 19
 */
declare function setPriority(priority: number): void

	
/**
 * Sets the priority of the process specified process.
 * @param priority Must be in range of -20 to 19
 */
declare function setPriority(pid: number, priority: number): void

    }

	declare module 'https' {
        import typeof * as tls from 'tls';

	import typeof * as events from 'events';

	import typeof * as http from 'http';

	import type {
          URL
        } from 'url';

	declare type ServerOptions = tls.SecureContextOptions & tls.TlsOptions;
	declare type RequestOptions = http.RequestOptions & tls.SecureContextOptions & {
rejectUnauthorized?: boolean,
servername?: string
};
	declare type AgentOptions = {
rejectUnauthorized?: boolean,
maxCachedSessions?: number
} & http.AgentOptions & tls.ConnectionOptions

	declare class Agent mixins http.Agent {
constructor(options?: AgentOptions): this;
options: AgentOptions
}
	declare class Server mixins tls.Server {
setTimeout(callback: () => void): this;
setTimeout(msecs?: number, callback?: () => void): this;
timeout: number;
keepAliveTimeout: number
}
	declare function createServer(
options: ServerOptions,
requestListener?: (req: http.IncomingMessage, res: http.ServerResponse) => void): Server

	declare function request(
options: RequestOptions | string | URL,
callback?: (res: http.IncomingMessage) => void): http.ClientRequest

	declare function request(
url: string | URL,
options: RequestOptions,
callback?: (res: http.IncomingMessage) => void): http.ClientRequest

	declare function get(
options: RequestOptions | string | URL,
callback?: (res: http.IncomingMessage) => void): http.ClientRequest

	declare function get(
url: string | URL,
options: RequestOptions,
callback?: (res: http.IncomingMessage) => void): http.ClientRequest

	declare var globalAgent: Agent;
    }

	declare module 'punycode' {
        declare function decode(string: string): string

	declare function encode(string: string): string

	declare function toUnicode(domain: string): string

	declare function toASCII(domain: string): string

	declare var ucs2: ucs2;
	declare interface ucs2 {
decode(string: string): number[],
encode(codePoints: number[]): string
} 
	declare var version: any;
    }

	declare module 'repl' {
        import type {
          Interface,Completer,AsyncCompleter
        } from 'readline';

	import type {
          Context
        } from 'vm';

	import type {
          InspectOptions
        } from 'util';

	declare interface ReplOptions {

/**
 * The input prompt to display.
 * Default: `"> "`
 */
prompt?: string,

/**
 * The `Readable` stream from which REPL input will be read.
 * Default: `process.stdin`
 */
input?: NodeJS$NodeJS$ReadableStream,

/**
 * The `Writable` stream to which REPL output will be written.
 * Default: `process.stdout`
 */
output?: NodeJS$NodeJS$WritableStream,

/**
 * If `true`, specifies that the output should be treated as a TTY terminal, and have
 * ANSI/VT100 escape codes written to it.
 * Default: checking the value of the `isTTY` property on the output stream upon
 * instantiation.
 */
terminal?: boolean,

/**
 * The function to be used when evaluating each given line of input.
 * Default: an async wrapper for the JavaScript `eval()` function. An `eval` function can
 * error with `repl.Recoverable` to indicate the input was incomplete and prompt for
 * additional lines.
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_default_evaluation
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_custom_evaluation_functions
 */
eval?: REPLEval,

/**
 * If `true`, specifies that the default `writer` function should include ANSI color
 * styling to REPL output. If a custom `writer` function is provided then this has no
 * effect.
 * Default: the REPL instance's `terminal` value.
 */
useColors?: boolean,

/**
 * If `true`, specifies that the default evaluation function will use the JavaScript
 * `global` as the context as opposed to creating a new separate context for the REPL
 * instance. The node CLI REPL sets this value to `true`.
 * Default: `false`.
 */
useGlobal?: boolean,

/**
 * If `true`, specifies that the default writer will not output the return value of a
 * command if it evaluates to `undefined`.
 * Default: `false`.
 */
ignoreUndefined?: boolean,

/**
 * The function to invoke to format the output of each command before writing to `output`.
 * Default: a wrapper for `util.inspect`.
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_customizing_repl_output
 */
writer?: REPLWriter,

/**
 * An optional function used for custom Tab auto completion.
 * @see https://nodejs.org/dist/latest-v11.x/docs/api/readline.html#readline_use_of_the_completer_function
 */
completer?: Completer | AsyncCompleter,

/**
 * A flag that specifies whether the default evaluator executes all JavaScript commands in
 * strict mode or default (sloppy) mode.
 * Accepted values are:
 * - `repl.REPL_MODE_SLOPPY` - evaluates expressions in sloppy mode.
 * - `repl.REPL_MODE_STRICT` - evaluates expressions in strict mode. This is equivalent to
 *    prefacing every repl statement with `'use strict'`.
 */
replMode?: typeof REPL_MODE_SLOPPY | typeof REPL_MODE_STRICT,

/**
 * Stop evaluating the current piece of code when `SIGINT` is received, i.e. `Ctrl+C` is
 * pressed. This cannot be used together with a custom `eval` function.
 * Default: `false`.
 */
breakEvalOnSigint?: boolean
} 
	declare type REPLEval = (
evalCmd: string,
context: Context,
file: string,
cb: (err: Error | null, result: any) => void) => void;
	declare type REPLWriter = (obj: any) => string;
	
/**
 * This is the default "writer" value, if none is passed in the REPL options,
 * and it can be overridden by custom print functions.
 */
declare var writer: REPLWriter & {
options: NodeJS$InspectOptions
};
	declare type REPLCommandAction = (text: string) => void;
	declare interface REPLCommand {

/**
 * Help text to be displayed when `.help` is entered.
 */
help?: string,

/**
 * The function to execute, optionally accepting a single string argument.
 */
action: REPLCommandAction
} 
	
/**
 * Provides a customizable Read-Eval-Print-Loop (REPL).
 * 
 * Instances of `repl.REPLServer` will accept individual lines of user input, evaluate those
 * according to a user-defined evaluation function, then output the result. Input and output
 * may be from `stdin` and `stdout`, respectively, or may be connected to any Node.js `stream`.
 * 
 * Instances of `repl.REPLServer` support automatic completion of inputs, simplistic Emacs-style
 * line editing, multi-line inputs, ANSI-styled output, saving and restoring current REPL session
 * state, error recovery, and customizable evaluation functions.
 * 
 * Instances of `repl.REPLServer` are created using the `repl.start()` method and _should not_
 * be created directly using the JavaScript `new` keyword.
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_repl
 */
declare class REPLServer mixins Interface {

/**
 * The `vm.Context` provided to the `eval` function to be used for JavaScript
 * evaluation.
 */
context: Context;

/**
 * The `Readable` stream from which REPL input will be read.
 */
inputStream: NodeJS$NodeJS$ReadableStream;

/**
 * The `Writable` stream to which REPL output will be written.
 */
outputStream: NodeJS$NodeJS$WritableStream;

/**
 * The commands registered via `replServer.defineCommand()`.
 */
commands: {
[name: string]: REPLCommand | void
};

/**
 * A value indicating whether the REPL is currently in "editor mode".
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_commands_and_special_keys
 */
editorMode: boolean;

/**
 * A value indicating whether the `_` variable has been assigned.
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_assignment_of_the_underscore_variable
 */
underscoreAssigned: boolean;

/**
 * The last evaluation result from the REPL (assigned to the `_` variable inside of the REPL).
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_assignment_of_the_underscore_variable
 */
last: any;

/**
 * A value indicating whether the `_error` variable has been assigned.
 * @since v9.8.0
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_assignment_of_the_underscore_variable
 */
underscoreErrAssigned: boolean;

/**
 * The last error raised inside the REPL (assigned to the `_error` variable inside of the REPL).
 * @since v9.8.0
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_assignment_of_the_underscore_variable
 */
lastError: any;

/**
 * Specified in the REPL options, this is the function to be used when evaluating each
 * given line of input. If not specified in the REPL options, this is an async wrapper
 * for the JavaScript `eval()` function.
 */
eval: REPLEval;

/**
 * Specified in the REPL options, this is a value indicating whether the default
 * `writer` function should include ANSI color styling to REPL output.
 */
useColors: boolean;

/**
 * Specified in the REPL options, this is a value indicating whether the default `eval`
 * function will use the JavaScript `global` as the context as opposed to creating a new
 * separate context for the REPL instance.
 */
useGlobal: boolean;

/**
 * Specified in the REPL options, this is a value indicating whether the default `writer`
 * function should output the result of a command if it evaluates to `undefined`.
 */
ignoreUndefined: boolean;

/**
 * Specified in the REPL options, this is the function to invoke to format the output of
 * each command before writing to `outputStream`. If not specified in the REPL options,
 * this will be a wrapper for `util.inspect`.
 */
writer: REPLWriter;

/**
 * Specified in the REPL options, this is the function to use for custom Tab auto-completion.
 */
completer: Completer | AsyncCompleter;

/**
 * Specified in the REPL options, this is a flag that specifies whether the default `eval`
 * function should execute all JavaScript commands in strict mode or default (sloppy) mode.
 * Possible values are:
 * - `repl.REPL_MODE_SLOPPY` - evaluates expressions in sloppy mode.
 * - `repl.REPL_MODE_STRICT` - evaluates expressions in strict mode. This is equivalent to
 *     prefacing every repl statement with `'use strict'`.
 */
replMode: typeof REPL_MODE_SLOPPY | typeof REPL_MODE_STRICT;

/**
 * NOTE: According to the documentation:
 * 
 * > Instances of `repl.REPLServer` are created using the `repl.start()` method and
 * > _should not_ be created directly using the JavaScript `new` keyword.
 * 
 * `REPLServer` cannot be subclassed due to implementation specifics in NodeJS.
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_class_replserver
 */
constructor(): this;

/**
 * Used to add new `.`-prefixed commands to the REPL instance. Such commands are invoked
 * by typing a `.` followed by the `keyword`.
 * @param keyword The command keyword (_without_ a leading `.` character).
 * @param cmd The function to invoke when the command is processed.
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_replserver_definecommand_keyword_cmd
 */
defineCommand(keyword: string, cmd: REPLCommandAction | REPLCommand): void;

/**
 * Readies the REPL instance for input from the user, printing the configured `prompt` to a
 * new line in the `output` and resuming the `input` to accept new input.
 * 
 * When multi-line input is being entered, an ellipsis is printed rather than the 'prompt'.
 * 
 * This method is primarily intended to be called from within the action function for
 * commands registered using the `replServer.defineCommand()` method.
 * @param preserveCursor When `true`, the cursor placement will not be reset to `0`.
 */
displayPrompt(preserveCursor?: boolean): void;

/**
 * Clears any command that has been buffered but not yet executed.
 * 
 * This method is primarily intended to be called from within the action function for
 * commands registered using the `replServer.defineCommand()` method.
 * @since v9.0.0
 */
clearBufferedCommand(): void;

/**
 * events.EventEmitter
 * 1. close - inherited from `readline.Interface`
 * 2. line - inherited from `readline.Interface`
 * 3. pause - inherited from `readline.Interface`
 * 4. resume - inherited from `readline.Interface`
 * 5. SIGCONT - inherited from `readline.Interface`
 * 6. SIGINT - inherited from `readline.Interface`
 * 7. SIGTSTP - inherited from `readline.Interface`
 * 8. exit
 * 9. reset
 */
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(event: "close", listener: () => void): this;
addListener(event: "line", listener: (input: string) => void): this;
addListener(event: "pause", listener: () => void): this;
addListener(event: "resume", listener: () => void): this;
addListener(event: "SIGCONT", listener: () => void): this;
addListener(event: "SIGINT", listener: () => void): this;
addListener(event: "SIGTSTP", listener: () => void): this;
addListener(event: "exit", listener: () => void): this;
addListener(event: "reset", listener: (context: Context) => void): this;
emit(event: string | Symbol, ...args: any[]): boolean;
emit(event: "close"): boolean;
emit(event: "line", input: string): boolean;
emit(event: "pause"): boolean;
emit(event: "resume"): boolean;
emit(event: "SIGCONT"): boolean;
emit(event: "SIGINT"): boolean;
emit(event: "SIGTSTP"): boolean;
emit(event: "exit"): boolean;
emit(event: "reset", context: Context): boolean;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "close", listener: () => void): this;
on(event: "line", listener: (input: string) => void): this;
on(event: "pause", listener: () => void): this;
on(event: "resume", listener: () => void): this;
on(event: "SIGCONT", listener: () => void): this;
on(event: "SIGINT", listener: () => void): this;
on(event: "SIGTSTP", listener: () => void): this;
on(event: "exit", listener: () => void): this;
on(event: "reset", listener: (context: Context) => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "close", listener: () => void): this;
once(event: "line", listener: (input: string) => void): this;
once(event: "pause", listener: () => void): this;
once(event: "resume", listener: () => void): this;
once(event: "SIGCONT", listener: () => void): this;
once(event: "SIGINT", listener: () => void): this;
once(event: "SIGTSTP", listener: () => void): this;
once(event: "exit", listener: () => void): this;
once(event: "reset", listener: (context: Context) => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "close", listener: () => void): this;
prependListener(event: "line", listener: (input: string) => void): this;
prependListener(event: "pause", listener: () => void): this;
prependListener(event: "resume", listener: () => void): this;
prependListener(event: "SIGCONT", listener: () => void): this;
prependListener(event: "SIGINT", listener: () => void): this;
prependListener(event: "SIGTSTP", listener: () => void): this;
prependListener(event: "exit", listener: () => void): this;
prependListener(event: "reset", listener: (context: Context) => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "close", listener: () => void): this;
prependOnceListener(event: "line", listener: (input: string) => void): this;
prependOnceListener(event: "pause", listener: () => void): this;
prependOnceListener(event: "resume", listener: () => void): this;
prependOnceListener(event: "SIGCONT", listener: () => void): this;
prependOnceListener(event: "SIGINT", listener: () => void): this;
prependOnceListener(event: "SIGTSTP", listener: () => void): this;
prependOnceListener(event: "exit", listener: () => void): this;
prependOnceListener(event: "reset", listener: (context: Context) => void): this
}
	
/**
 * A flag passed in the REPL options. Evaluates expressions in sloppy mode.
 */
declare export var REPL_MODE_SLOPPY: Symbol;
	
/**
 * A flag passed in the REPL options. Evaluates expressions in strict mode.
 * This is equivalent to prefacing every repl statement with `'use strict'`.
 */
declare export var REPL_MODE_STRICT: Symbol;
	
/**
 * Creates and starts a `repl.REPLServer` instance.
 * @param options The options for the `REPLServer`. If `options` is a string, then it specifies
the input prompt.
 */
declare function start(options?: string | ReplOptions): REPLServer

	
/**
 * Indicates a recoverable error that a `REPLServer` can use to support multi-line input.
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/repl.html#repl_recoverable_errors
 */
declare class Recoverable mixins SyntaxError {
err: Error;
constructor(err: Error): this
}
    }

	declare module 'readline' {
        import typeof * as events from 'events';

	import typeof * as stream from 'stream';

	declare interface Key {
sequence?: string,
name?: string,
ctrl?: boolean,
meta?: boolean,
shift?: boolean
} 
	declare class Interface mixins events.internal$EventEmitter {
terminal: boolean;

/**
 * NOTE: According to the documentation:
 * 
 * > Instances of the `readline.Interface` class are constructed using the
 * > `readline.createInterface()` method.
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/readline.html#readline_class_interface
 */
constructor(input: NodeJS$NodeJS$ReadableStream, output?: NodeJS$NodeJS$WritableStream, completer?: Completer | AsyncCompleter, terminal?: boolean): this;

/**
 * NOTE: According to the documentation:
 * 
 * > Instances of the `readline.Interface` class are constructed using the
 * > `readline.createInterface()` method.
 * @see https://nodejs.org/dist/latest-v10.x/docs/api/readline.html#readline_class_interface
 */
constructor(options: ReadLineOptions): this;
setPrompt(prompt: string): void;
prompt(preserveCursor?: boolean): void;
question(query: string, callback: (answer: string) => void): void;
pause(): this;
resume(): this;
close(): void;
write(data: string | Buffer, key?: Key): void;

/**
 * events.EventEmitter
 * 1. close
 * 2. line
 * 3. pause
 * 4. resume
 * 5. SIGCONT
 * 6. SIGINT
 * 7. SIGTSTP
 */
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(event: "close", listener: () => void): this;
addListener(event: "line", listener: (input: string) => void): this;
addListener(event: "pause", listener: () => void): this;
addListener(event: "resume", listener: () => void): this;
addListener(event: "SIGCONT", listener: () => void): this;
addListener(event: "SIGINT", listener: () => void): this;
addListener(event: "SIGTSTP", listener: () => void): this;
emit(event: string | Symbol, ...args: any[]): boolean;
emit(event: "close"): boolean;
emit(event: "line", input: string): boolean;
emit(event: "pause"): boolean;
emit(event: "resume"): boolean;
emit(event: "SIGCONT"): boolean;
emit(event: "SIGINT"): boolean;
emit(event: "SIGTSTP"): boolean;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "close", listener: () => void): this;
on(event: "line", listener: (input: string) => void): this;
on(event: "pause", listener: () => void): this;
on(event: "resume", listener: () => void): this;
on(event: "SIGCONT", listener: () => void): this;
on(event: "SIGINT", listener: () => void): this;
on(event: "SIGTSTP", listener: () => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "close", listener: () => void): this;
once(event: "line", listener: (input: string) => void): this;
once(event: "pause", listener: () => void): this;
once(event: "resume", listener: () => void): this;
once(event: "SIGCONT", listener: () => void): this;
once(event: "SIGINT", listener: () => void): this;
once(event: "SIGTSTP", listener: () => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "close", listener: () => void): this;
prependListener(event: "line", listener: (input: string) => void): this;
prependListener(event: "pause", listener: () => void): this;
prependListener(event: "resume", listener: () => void): this;
prependListener(event: "SIGCONT", listener: () => void): this;
prependListener(event: "SIGINT", listener: () => void): this;
prependListener(event: "SIGTSTP", listener: () => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "close", listener: () => void): this;
prependOnceListener(event: "line", listener: (input: string) => void): this;
prependOnceListener(event: "pause", listener: () => void): this;
prependOnceListener(event: "resume", listener: () => void): this;
prependOnceListener(event: "SIGCONT", listener: () => void): this;
prependOnceListener(event: "SIGINT", listener: () => void): this;
prependOnceListener(event: "SIGTSTP", listener: () => void): this
}
	declare type ReadLine = Interface;
	declare type Completer = (line: string) => CompleterResult;
	declare type AsyncCompleter = (line: string, callback: (err: any, result: CompleterResult) => void) => any;
	declare type CompleterResult = [string[], string];
	declare interface ReadLineOptions {
input: NodeJS$NodeJS$ReadableStream,
output?: NodeJS$NodeJS$WritableStream,
completer?: Completer | AsyncCompleter,
terminal?: boolean,
historySize?: number,
prompt?: string,
crlfDelay?: number,
removeHistoryDuplicates?: boolean
} 
	declare function createInterface(
input: NodeJS$NodeJS$ReadableStream,
output?: NodeJS$NodeJS$WritableStream,
completer?: Completer | AsyncCompleter,
terminal?: boolean): Interface

	declare function createInterface(options: ReadLineOptions): Interface

	declare function cursorTo(stream: NodeJS$NodeJS$WritableStream, x: number, y?: number): void

	declare function emitKeypressEvents(stream: NodeJS$NodeJS$ReadableStream, interface?: Interface): void

	declare function moveCursor(
stream: NodeJS$NodeJS$WritableStream,
dx: number | string,
dy: number | string): void

	declare function clearLine(stream: NodeJS$NodeJS$WritableStream, dir: number): void

	declare function clearScreenDown(stream: NodeJS$NodeJS$WritableStream): void

    }

	declare module 'vm' {
        declare interface Context {
[key: string]: any
} 
	declare interface BaseOptions {

/**
 * Specifies the filename used in stack traces produced by this script.
 * Default: `''`.
 */
filename?: string,

/**
 * Specifies the line number offset that is displayed in stack traces produced by this script.
 * Default: `0`.
 */
lineOffset?: number,

/**
 * Specifies the column number offset that is displayed in stack traces produced by this script.
 * Default: `0`
 */
columnOffset?: number
} 
	declare type ScriptOptions = {
displayErrors?: boolean,
timeout?: number,
cachedData?: Buffer,
produceCachedData?: boolean
} & BaseOptions

	declare type RunningScriptOptions = {
displayErrors?: boolean,
timeout?: number
} & BaseOptions

	declare type CompileFunctionOptions = {

/**
 * Provides an optional data with V8's code cache data for the supplied source.
 */
cachedData?: Buffer,

/**
 * Specifies whether to produce new cache data.
 * Default: `false`,
 */
produceCachedData?: boolean,

/**
 * The sandbox/context in which the said function should be compiled in.
 */
parsingContext?: Context,

/**
 * An array containing a collection of context extensions (objects wrapping the current scope) to be applied while compiling
 */
contextExtensions?: Object[]
} & BaseOptions

	declare class Script  {
constructor(code: string, options?: ScriptOptions): this;
runInContext(contextifiedSandbox: Context, options?: RunningScriptOptions): any;
runInNewContext(sandbox?: Context, options?: RunningScriptOptions): any;
runInThisContext(options?: RunningScriptOptions): any
}
	declare function createContext(sandbox?: Context): Context

	declare function isContext(sandbox: Context): boolean

	declare function runInContext(
code: string,
contextifiedSandbox: Context,
options?: RunningScriptOptions | string): any

	declare function runInNewContext(code: string, sandbox?: Context, options?: RunningScriptOptions | string): any

	declare function runInThisContext(code: string, options?: RunningScriptOptions | string): any

	declare function compileFunction(code: string, params: string[], options: CompileFunctionOptions): Function

    }

	declare module 'child_process' {
        import typeof * as events from 'events';

	import typeof * as stream from 'stream';

	import typeof * as net from 'net';

	declare type ChildProcess = {
stdin: stream.internal$Writable,
stdout: stream.internal$Readable,
stderr: stream.internal$Readable,
stdio: [stream.internal$Writable, stream.internal$Readable, stream.internal$Readable],
killed: boolean,
pid: number,
kill(signal?: string): void,
send(message: any, callback?: (error: Error) => void): boolean,
send(
message: any,
sendHandle?: net.NodeJS$Socket | net.Server,
callback?: (error: Error) => void): boolean,
send(
message: any,
sendHandle?: net.NodeJS$Socket | net.Server,
options?: MessageOptions,
callback?: (error: Error) => void): boolean,
connected: boolean,
disconnect(): void,
unref(): void,
ref(): void,

/**
 * events.EventEmitter
 * 1. close
 * 2. disconnect
 * 3. error
 * 4. exit
 * 5. message
 */
addListener(event: string, listener: (...args: any[]) => void): this,
addListener(event: "close", listener: (code: number, signal: string) => void): this,
addListener(event: "disconnect", listener: () => void): this,
addListener(event: "error", listener: (err: Error) => void): this,
addListener(
event: "exit",
listener: (code: number | null, signal: string | null) => void): this,
addListener(
event: "message",
listener: (message: any, sendHandle: net.NodeJS$Socket | net.Server) => void): this,
emit(event: string | Symbol, ...args: any[]): boolean,
emit(event: "close", code: number, signal: string): boolean,
emit(event: "disconnect"): boolean,
emit(event: "error", err: Error): boolean,
emit(event: "exit", code: number | null, signal: string | null): boolean,
emit(
event: "message",
message: any,
sendHandle: net.NodeJS$Socket | net.Server): boolean,
on(event: string, listener: (...args: any[]) => void): this,
on(event: "close", listener: (code: number, signal: string) => void): this,
on(event: "disconnect", listener: () => void): this,
on(event: "error", listener: (err: Error) => void): this,
on(
event: "exit",
listener: (code: number | null, signal: string | null) => void): this,
on(
event: "message",
listener: (message: any, sendHandle: net.NodeJS$Socket | net.Server) => void): this,
once(event: string, listener: (...args: any[]) => void): this,
once(event: "close", listener: (code: number, signal: string) => void): this,
once(event: "disconnect", listener: () => void): this,
once(event: "error", listener: (err: Error) => void): this,
once(
event: "exit",
listener: (code: number | null, signal: string | null) => void): this,
once(
event: "message",
listener: (message: any, sendHandle: net.NodeJS$Socket | net.Server) => void): this,
prependListener(event: string, listener: (...args: any[]) => void): this,
prependListener(event: "close", listener: (code: number, signal: string) => void): this,
prependListener(event: "disconnect", listener: () => void): this,
prependListener(event: "error", listener: (err: Error) => void): this,
prependListener(
event: "exit",
listener: (code: number | null, signal: string | null) => void): this,
prependListener(
event: "message",
listener: (message: any, sendHandle: net.NodeJS$Socket | net.Server) => void): this,
prependOnceListener(event: string, listener: (...args: any[]) => void): this,
prependOnceListener(event: "close", listener: (code: number, signal: string) => void): this,
prependOnceListener(event: "disconnect", listener: () => void): this,
prependOnceListener(event: "error", listener: (err: Error) => void): this,
prependOnceListener(
event: "exit",
listener: (code: number | null, signal: string | null) => void): this,
prependOnceListener(
event: "message",
listener: (message: any, sendHandle: net.NodeJS$Socket | net.Server) => void): this
} & events.internal$EventEmitter

	declare interface MessageOptions {
keepOpen?: boolean
} 
	declare type StdioOptions = "pipe" | "ignore" | "inherit" | Array<("pipe"
| "ipc"
| "ignore"
| "inherit"
| stream.internal$Stream
| number
| null
| void)>;
	declare interface SpawnOptions {
cwd?: string,
env?: NodeJS$NodeJS$ProcessEnv,
argv0?: string,
stdio?: StdioOptions,
detached?: boolean,
uid?: number,
gid?: number,
shell?: boolean | string,
windowsVerbatimArguments?: boolean,
windowsHide?: boolean
} 
	declare function spawn(command: string, options?: SpawnOptions): ChildProcess

	declare function spawn(
command: string,
args?: $ReadOnlyArray<string>,
options?: SpawnOptions): ChildProcess

	declare interface ExecOptions {
cwd?: string,
env?: NodeJS$NodeJS$ProcessEnv,
shell?: string,
timeout?: number,
maxBuffer?: number,
killSignal?: string,
uid?: number,
gid?: number,
windowsHide?: boolean
} 
	declare type ExecOptionsWithStringEncoding = {
encoding: BufferEncoding
} & ExecOptions

	declare type ExecOptionsWithBufferEncoding = {
encoding: string | null
} & ExecOptions

	declare type ExecException = {
cmd?: string,
killed?: boolean,
code?: number,
signal?: string
} & Error

	declare function exec(
command: string,
callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess

	declare function exec(
command: string,
options: {
encoding: "buffer" | null
} & ExecOptions,
callback?: (error: ExecException | null, stdout: Buffer, stderr: Buffer) => void): ChildProcess

	declare function exec(
command: string,
options: {
encoding: BufferEncoding
} & ExecOptions,
callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess

	declare function exec(
command: string,
options: {
encoding: string
} & ExecOptions,
callback?: (
error: ExecException | null,
stdout: string | Buffer,
stderr: string | Buffer) => void): ChildProcess

	declare function exec(
command: string,
options: ExecOptions,
callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess

	declare function exec(
command: string,
options: ({
encoding?: string | null
} & ExecOptions) | void | null,
callback?: (
error: ExecException | null,
stdout: string | Buffer,
stderr: string | Buffer) => void): ChildProcess

	
      declare var npm$namespace$exec: {
        __promisify__: typeof exec$__promisify__,
        
      }
declare function exec$__promisify__(command: string): Promise<{
stdout: string,
stderr: string
}>


declare function exec$__promisify__(
command: string,
options: {
encoding: "buffer" | null
} & ExecOptions): Promise<{
stdout: Buffer,
stderr: Buffer
}>


declare function exec$__promisify__(
command: string,
options: {
encoding: BufferEncoding
} & ExecOptions): Promise<{
stdout: string,
stderr: string
}>


declare function exec$__promisify__(
command: string,
options: ExecOptions): Promise<{
stdout: string,
stderr: string
}>


declare function exec$__promisify__(
command: string,
options?: ({
encoding?: string | null
} & ExecOptions) | null): Promise<{
stdout: string | Buffer,
stderr: string | Buffer
}>

	declare interface ExecFileOptions {
cwd?: string,
env?: NodeJS$NodeJS$ProcessEnv,
timeout?: number,
maxBuffer?: number,
killSignal?: string,
uid?: number,
gid?: number,
windowsHide?: boolean,
windowsVerbatimArguments?: boolean,
shell?: boolean | string
} 
	declare type ExecFileOptionsWithStringEncoding = {
encoding: BufferEncoding
} & ExecFileOptions

	declare type ExecFileOptionsWithBufferEncoding = {
encoding: "buffer" | null
} & ExecFileOptions

	declare type ExecFileOptionsWithOtherEncoding = {
encoding: string
} & ExecFileOptions

	declare function execFile(file: string): ChildProcess

	declare function execFile(
file: string,
options: ({
encoding?: string | null
} & ExecFileOptions) | void | null): ChildProcess

	declare function execFile(file: string, args?: $ReadOnlyArray<string> | null): ChildProcess

	declare function execFile(
file: string,
args: $ReadOnlyArray<string> | void | null,
options: ({
encoding?: string | null
} & ExecFileOptions) | void | null): ChildProcess

	declare function execFile(
file: string,
callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess

	declare function execFile(
file: string,
args: $ReadOnlyArray<string> | void | null,
callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess

	declare function execFile(
file: string,
options: ExecFileOptionsWithBufferEncoding,
callback: (error: Error | null, stdout: Buffer, stderr: Buffer) => void): ChildProcess

	declare function execFile(
file: string,
args: $ReadOnlyArray<string> | void | null,
options: ExecFileOptionsWithBufferEncoding,
callback: (error: Error | null, stdout: Buffer, stderr: Buffer) => void): ChildProcess

	declare function execFile(
file: string,
options: ExecFileOptionsWithStringEncoding,
callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess

	declare function execFile(
file: string,
args: $ReadOnlyArray<string> | void | null,
options: ExecFileOptionsWithStringEncoding,
callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess

	declare function execFile(
file: string,
options: ExecFileOptionsWithOtherEncoding,
callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void): ChildProcess

	declare function execFile(
file: string,
args: $ReadOnlyArray<string> | void | null,
options: ExecFileOptionsWithOtherEncoding,
callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void): ChildProcess

	declare function execFile(
file: string,
options: ExecFileOptions,
callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess

	declare function execFile(
file: string,
args: $ReadOnlyArray<string> | void | null,
options: ExecFileOptions,
callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess

	declare function execFile(
file: string,
options: ({
encoding?: string | null
} & ExecFileOptions) | void | null,
callback: ((error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void) | void | null): ChildProcess

	declare function execFile(
file: string,
args: $ReadOnlyArray<string> | void | null,
options: ({
encoding?: string | null
} & ExecFileOptions) | void | null,
callback: ((error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void) | void | null): ChildProcess

	
      declare var npm$namespace$execFile: {
        __promisify__: typeof execFile$__promisify__,
        
      }
declare function execFile$__promisify__(file: string): Promise<{
stdout: string,
stderr: string
}>


declare function execFile$__promisify__(
file: string,
args: string[] | void | null): Promise<{
stdout: string,
stderr: string
}>


declare function execFile$__promisify__(
file: string,
options: ExecFileOptionsWithBufferEncoding): Promise<{
stdout: Buffer,
stderr: Buffer
}>


declare function execFile$__promisify__(
file: string,
args: string[] | void | null,
options: ExecFileOptionsWithBufferEncoding): Promise<{
stdout: Buffer,
stderr: Buffer
}>


declare function execFile$__promisify__(
file: string,
options: ExecFileOptionsWithStringEncoding): Promise<{
stdout: string,
stderr: string
}>


declare function execFile$__promisify__(
file: string,
args: string[] | void | null,
options: ExecFileOptionsWithStringEncoding): Promise<{
stdout: string,
stderr: string
}>


declare function execFile$__promisify__(
file: string,
options: ExecFileOptionsWithOtherEncoding): Promise<{
stdout: string | Buffer,
stderr: string | Buffer
}>


declare function execFile$__promisify__(
file: string,
args: string[] | void | null,
options: ExecFileOptionsWithOtherEncoding): Promise<{
stdout: string | Buffer,
stderr: string | Buffer
}>


declare function execFile$__promisify__(
file: string,
options: ExecFileOptions): Promise<{
stdout: string,
stderr: string
}>


declare function execFile$__promisify__(
file: string,
args: string[] | void | null,
options: ExecFileOptions): Promise<{
stdout: string,
stderr: string
}>


declare function execFile$__promisify__(
file: string,
options: ({
encoding?: string | null
} & ExecFileOptions) | void | null): Promise<{
stdout: string | Buffer,
stderr: string | Buffer
}>


declare function execFile$__promisify__(
file: string,
args: string[] | void | null,
options: ({
encoding?: string | null
} & ExecFileOptions) | void | null): Promise<{
stdout: string | Buffer,
stderr: string | Buffer
}>

	declare interface ForkOptions {
cwd?: string,
env?: NodeJS$NodeJS$ProcessEnv,
execPath?: string,
execArgv?: string[],
silent?: boolean,
stdio?: StdioOptions,
windowsVerbatimArguments?: boolean,
uid?: number,
gid?: number
} 
	declare function fork(
modulePath: string,
args?: $ReadOnlyArray<string>,
options?: ForkOptions): ChildProcess

	declare interface SpawnSyncOptions {
argv0?: string,
cwd?: string,
input?: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
stdio?: StdioOptions,
env?: NodeJS$NodeJS$ProcessEnv,
uid?: number,
gid?: number,
timeout?: number,
killSignal?: string | number,
maxBuffer?: number,
encoding?: string,
shell?: boolean | string,
windowsVerbatimArguments?: boolean,
windowsHide?: boolean
} 
	declare type SpawnSyncOptionsWithStringEncoding = {
encoding: BufferEncoding
} & SpawnSyncOptions

	declare type SpawnSyncOptionsWithBufferEncoding = {
encoding: string
} & SpawnSyncOptions

	declare interface SpawnSyncReturns<T> {
pid: number,
output: string[],
stdout: T,
stderr: T,
status: number,
signal: string,
error: Error
} 
	declare function spawnSync(command: string): SpawnSyncReturns<Buffer>

	declare function spawnSync(
command: string,
options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>

	declare function spawnSync(
command: string,
options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>

	declare function spawnSync(command: string, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>

	declare function spawnSync(
command: string,
args?: $ReadOnlyArray<string>,
options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>

	declare function spawnSync(
command: string,
args?: $ReadOnlyArray<string>,
options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>

	declare function spawnSync(
command: string,
args?: $ReadOnlyArray<string>,
options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>

	declare interface ExecSyncOptions {
cwd?: string,
input?: string | Buffer | Uint8Array,
stdio?: StdioOptions,
env?: NodeJS$NodeJS$ProcessEnv,
shell?: string,
uid?: number,
gid?: number,
timeout?: number,
killSignal?: string | number,
maxBuffer?: number,
encoding?: string,
windowsHide?: boolean
} 
	declare type ExecSyncOptionsWithStringEncoding = {
encoding: BufferEncoding
} & ExecSyncOptions

	declare type ExecSyncOptionsWithBufferEncoding = {
encoding: string
} & ExecSyncOptions

	declare function execSync(command: string): Buffer

	declare function execSync(command: string, options?: ExecSyncOptionsWithStringEncoding): string

	declare function execSync(command: string, options?: ExecSyncOptionsWithBufferEncoding): Buffer

	declare function execSync(command: string, options?: ExecSyncOptions): Buffer

	declare interface ExecFileSyncOptions {
cwd?: string,
input?: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
stdio?: StdioOptions,
env?: NodeJS$NodeJS$ProcessEnv,
uid?: number,
gid?: number,
timeout?: number,
killSignal?: string | number,
maxBuffer?: number,
encoding?: string,
windowsHide?: boolean,
shell?: boolean | string
} 
	declare type ExecFileSyncOptionsWithStringEncoding = {
encoding: BufferEncoding
} & ExecFileSyncOptions

	declare type ExecFileSyncOptionsWithBufferEncoding = {
encoding: string
} & ExecFileSyncOptions

	declare function execFileSync(command: string): Buffer

	declare function execFileSync(command: string, options?: ExecFileSyncOptionsWithStringEncoding): string

	declare function execFileSync(command: string, options?: ExecFileSyncOptionsWithBufferEncoding): Buffer

	declare function execFileSync(command: string, options?: ExecFileSyncOptions): Buffer

	declare function execFileSync(
command: string,
args?: $ReadOnlyArray<string>,
options?: ExecFileSyncOptionsWithStringEncoding): string

	declare function execFileSync(
command: string,
args?: $ReadOnlyArray<string>,
options?: ExecFileSyncOptionsWithBufferEncoding): Buffer

	declare function execFileSync(
command: string,
args?: $ReadOnlyArray<string>,
options?: ExecFileSyncOptions): Buffer

    }

	declare module 'url' {
        import type {
          ParsedUrlQuery
        } from 'querystring';

	declare interface UrlObjectCommon {
auth?: string,
hash?: string,
host?: string,
hostname?: string,
href?: string,
path?: string,
pathname?: string,
protocol?: string,
search?: string,
slashes?: boolean
} 
	declare type UrlObject = {
port?: string | number,
query?: string | null | {
[key: string]: any
}
} & UrlObjectCommon

	declare type Url = {
port?: string,
query?: string | null | ParsedUrlQuery
} & UrlObjectCommon

	declare type UrlWithParsedQuery = {
query: ParsedUrlQuery
} & Url

	declare type UrlWithStringQuery = {
query: string | null
} & Url

	declare function parse(urlStr: string): UrlWithStringQuery

	declare function parse(
urlStr: string,
parseQueryString: false | void,
slashesDenoteHost?: boolean): UrlWithStringQuery

	declare function parse(
urlStr: string,
parseQueryString: true,
slashesDenoteHost?: boolean): UrlWithParsedQuery

	declare function parse(urlStr: string, parseQueryString: boolean, slashesDenoteHost?: boolean): Url

	declare function format(URL: URL, options?: URLFormatOptions): string

	declare function format(urlObject: UrlObject | string): string

	declare function resolve(from: string, to: string): string

	declare function domainToASCII(domain: string): string

	declare function domainToUnicode(domain: string): string

	
/**
 * This function ensures the correct decodings of percent-encoded characters as
 * well as ensuring a cross-platform valid absolute path string.
 * @param url The file URL string or URL object to convert to a path.
 */
declare function fileURLToPath(url: string | URL): string

	
/**
 * This function ensures that path is resolved absolutely, and that the URL
 * control characters are correctly encoded when converting into a File URL.
 * @param url The path to convert to a File URL.
 */
declare function pathToFileURL(url: string): URL

	declare interface URLFormatOptions {
auth?: boolean,
fragment?: boolean,
search?: boolean,
unicode?: boolean
} 
	declare class URL  {
constructor(input: string, base?: string | URL): this;
hash: string;
host: string;
hostname: string;
href: string;
origin: string;
password: string;
pathname: string;
port: string;
protocol: string;
search: string;
searchParams: URLSearchParams;
username: string;
toString(): string;
toJSON(): string
}
	declare class URLSearchParams mixins Iterable<[string, string]> {
constructor(init?: URLSearchParams
| string
| {
[key: string]: string | string[] | void
}
| Iterable<[string, string]>
| Array<[string, string]>): this;
append(name: string, value: string): void;
delete(name: string): void;
entries(): IterableIterator<[string, string]>;
forEach(callback: (value: string, name: string, searchParams: this) => void): void;
get(name: string): string | null;
getAll(name: string): string[];
has(name: string): boolean;
keys(): IterableIterator<string>;
set(name: string, value: string): void;
sort(): void;
toString(): string;
values(): IterableIterator<string>;
undefined(): IterableIterator<[string, string]>
}
    }

	declare module 'dns' {
        declare var ADDRCONFIG: number;
	declare var V4MAPPED: number;
	declare interface LookupOptions {
family?: number,
hints?: number,
all?: boolean,
verbatim?: boolean
} 
	declare type LookupOneOptions = {
all?: false
} & LookupOptions

	declare type LookupAllOptions = {
all: true
} & LookupOptions

	declare interface LookupAddress {
address: string,
family: number
} 
	declare function lookup(
hostname: string,
family: number,
callback: (err: NodeJS$NodeJS$ErrnoException, address: string, family: number) => void): void

	declare function lookup(
hostname: string,
options: LookupOneOptions,
callback: (err: NodeJS$NodeJS$ErrnoException, address: string, family: number) => void): void

	declare function lookup(
hostname: string,
options: LookupAllOptions,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: LookupAddress[]) => void): void

	declare function lookup(
hostname: string,
options: LookupOptions,
callback: (
err: NodeJS$NodeJS$ErrnoException,
address: string | LookupAddress[],
family: number) => void): void

	declare function lookup(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, address: string, family: number) => void): void

	
      declare var npm$namespace$lookup: {
        __promisify__: typeof lookup$__promisify__,
        
      }
declare function lookup$__promisify__(
hostname: string,
options: LookupAllOptions): Promise<{
address: LookupAddress[]
}>


declare function lookup$__promisify__(
hostname: string,
options?: LookupOneOptions | number): Promise<{
address: string,
family: number
}>


declare function lookup$__promisify__(
hostname: string,
options?: LookupOptions | number): Promise<{
address: string | LookupAddress[],
family?: number
}>

	declare function lookupService(
address: string,
port: number,
callback: (err: NodeJS$NodeJS$ErrnoException, hostname: string, service: string) => void): void

	
      declare var npm$namespace$lookupService: {
        __promisify__: typeof lookupService$__promisify__,
        
      }
declare function lookupService$__promisify__(address: string, port: number): Promise<{
hostname: string,
service: string
}>

	declare interface ResolveOptions {
ttl: boolean
} 
	declare type ResolveWithTtlOptions = {
ttl: true
} & ResolveOptions

	declare interface RecordWithTtl {
address: string,
ttl: number
} 
	
/**
 * @deprecated Use AnyARecord or AnyAaaaRecord instead.
 */
declare type AnyRecordWithTtl = AnyARecord | AnyAaaaRecord;
	declare type AnyARecord = {
type: "A"
} & RecordWithTtl

	declare type AnyAaaaRecord = {
type: "AAAA"
} & RecordWithTtl

	declare interface MxRecord {
priority: number,
exchange: string
} 
	declare type AnyMxRecord = {
type: "MX"
} & MxRecord

	declare interface NaptrRecord {
flags: string,
service: string,
regexp: string,
replacement: string,
order: number,
preference: number
} 
	declare type AnyNaptrRecord = {
type: "NAPTR"
} & NaptrRecord

	declare interface SoaRecord {
nsname: string,
hostmaster: string,
serial: number,
refresh: number,
retry: number,
expire: number,
minttl: number
} 
	declare type AnySoaRecord = {
type: "SOA"
} & SoaRecord

	declare interface SrvRecord {
priority: number,
weight: number,
port: number,
name: string
} 
	declare type AnySrvRecord = {
type: "SRV"
} & SrvRecord

	declare interface AnyTxtRecord {
type: "TXT",
entries: string[]
} 
	declare interface AnyNsRecord {
type: "NS",
value: string
} 
	declare interface AnyPtrRecord {
type: "PTR",
value: string
} 
	declare interface AnyCnameRecord {
type: "CNAME",
value: string
} 
	declare type AnyRecord = AnyARecord
| AnyAaaaRecord
| AnyCnameRecord
| AnyMxRecord
| AnyNaptrRecord
| AnyNsRecord
| AnyPtrRecord
| AnySoaRecord
| AnySrvRecord
| AnyTxtRecord;
	declare function resolve(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[]) => void): void

	declare function resolve(
hostname: string,
rrtype: "A",
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[]) => void): void

	declare function resolve(
hostname: string,
rrtype: "AAAA",
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[]) => void): void

	declare function resolve(
hostname: string,
rrtype: "ANY",
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: AnyRecord[]) => void): void

	declare function resolve(
hostname: string,
rrtype: "CNAME",
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[]) => void): void

	declare function resolve(
hostname: string,
rrtype: "MX",
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: MxRecord[]) => void): void

	declare function resolve(
hostname: string,
rrtype: "NAPTR",
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: NaptrRecord[]) => void): void

	declare function resolve(
hostname: string,
rrtype: "NS",
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[]) => void): void

	declare function resolve(
hostname: string,
rrtype: "PTR",
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[]) => void): void

	declare function resolve(
hostname: string,
rrtype: "SOA",
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: SoaRecord) => void): void

	declare function resolve(
hostname: string,
rrtype: "SRV",
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: SrvRecord[]) => void): void

	declare function resolve(
hostname: string,
rrtype: "TXT",
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[][]) => void): void

	declare function resolve(
hostname: string,
rrtype: string,
callback: (
err: NodeJS$NodeJS$ErrnoException,
addresses: string[]
| MxRecord[]
| NaptrRecord[]
| SoaRecord
| SrvRecord[]
| string[][]
| AnyRecord[]) => void): void

	
      declare var npm$namespace$resolve: {
        __promisify__: typeof resolve$__promisify__,
        
      }
declare function resolve$__promisify__(
hostname: string,
rrtype?: "A"
| "AAAA"
| "CNAME"
| "NS"
| "PTR"): Promise<string[]>


declare function resolve$__promisify__(hostname: string, rrtype: "ANY"): Promise<AnyRecord[]>


declare function resolve$__promisify__(hostname: string, rrtype: "MX"): Promise<MxRecord[]>


declare function resolve$__promisify__(hostname: string, rrtype: "NAPTR"): Promise<NaptrRecord[]>


declare function resolve$__promisify__(hostname: string, rrtype: "SOA"): Promise<SoaRecord>


declare function resolve$__promisify__(hostname: string, rrtype: "SRV"): Promise<SrvRecord[]>


declare function resolve$__promisify__(hostname: string, rrtype: "TXT"): Promise<string[][]>


declare function resolve$__promisify__(
hostname: string,
rrtype: string): Promise<string[]
| MxRecord[]
| NaptrRecord[]
| SoaRecord
| SrvRecord[]
| string[][]
| AnyRecord[]>

	declare function resolve4(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[]) => void): void

	declare function resolve4(
hostname: string,
options: ResolveWithTtlOptions,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: RecordWithTtl[]) => void): void

	declare function resolve4(
hostname: string,
options: ResolveOptions,
callback: (
err: NodeJS$NodeJS$ErrnoException,
addresses: string[] | RecordWithTtl[]) => void): void

	
      declare var npm$namespace$resolve4: {
        __promisify__: typeof resolve4$__promisify__,
        
      }
declare function resolve4$__promisify__(hostname: string): Promise<string[]>


declare function resolve4$__promisify__(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>


declare function resolve4$__promisify__(
hostname: string,
options?: ResolveOptions): Promise<string[] | RecordWithTtl[]>

	declare function resolve6(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[]) => void): void

	declare function resolve6(
hostname: string,
options: ResolveWithTtlOptions,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: RecordWithTtl[]) => void): void

	declare function resolve6(
hostname: string,
options: ResolveOptions,
callback: (
err: NodeJS$NodeJS$ErrnoException,
addresses: string[] | RecordWithTtl[]) => void): void

	
      declare var npm$namespace$resolve6: {
        __promisify__: typeof resolve6$__promisify__,
        
      }
declare function resolve6$__promisify__(hostname: string): Promise<string[]>


declare function resolve6$__promisify__(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>


declare function resolve6$__promisify__(
hostname: string,
options?: ResolveOptions): Promise<string[] | RecordWithTtl[]>

	declare function resolveCname(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[]) => void): void

	
      declare var npm$namespace$resolveCname: {
        __promisify__: typeof resolveCname$__promisify__,
        
      }
declare function resolveCname$__promisify__(hostname: string): Promise<string[]>

	declare function resolveMx(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: MxRecord[]) => void): void

	
      declare var npm$namespace$resolveMx: {
        __promisify__: typeof resolveMx$__promisify__,
        
      }
declare function resolveMx$__promisify__(hostname: string): Promise<MxRecord[]>

	declare function resolveNaptr(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: NaptrRecord[]) => void): void

	
      declare var npm$namespace$resolveNaptr: {
        __promisify__: typeof resolveNaptr$__promisify__,
        
      }
declare function resolveNaptr$__promisify__(hostname: string): Promise<NaptrRecord[]>

	declare function resolveNs(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[]) => void): void

	
      declare var npm$namespace$resolveNs: {
        __promisify__: typeof resolveNs$__promisify__,
        
      }
declare function resolveNs$__promisify__(hostname: string): Promise<string[]>

	declare function resolvePtr(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[]) => void): void

	
      declare var npm$namespace$resolvePtr: {
        __promisify__: typeof resolvePtr$__promisify__,
        
      }
declare function resolvePtr$__promisify__(hostname: string): Promise<string[]>

	declare function resolveSoa(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, address: SoaRecord) => void): void

	
      declare var npm$namespace$resolveSoa: {
        __promisify__: typeof resolveSoa$__promisify__,
        
      }
declare function resolveSoa$__promisify__(hostname: string): Promise<SoaRecord>

	declare function resolveSrv(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: SrvRecord[]) => void): void

	
      declare var npm$namespace$resolveSrv: {
        __promisify__: typeof resolveSrv$__promisify__,
        
      }
declare function resolveSrv$__promisify__(hostname: string): Promise<SrvRecord[]>

	declare function resolveTxt(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: string[][]) => void): void

	
      declare var npm$namespace$resolveTxt: {
        __promisify__: typeof resolveTxt$__promisify__,
        
      }
declare function resolveTxt$__promisify__(hostname: string): Promise<string[][]>

	declare function resolveAny(
hostname: string,
callback: (err: NodeJS$NodeJS$ErrnoException, addresses: AnyRecord[]) => void): void

	
      declare var npm$namespace$resolveAny: {
        __promisify__: typeof resolveAny$__promisify__,
        
      }
declare function resolveAny$__promisify__(hostname: string): Promise<AnyRecord[]>

	declare function reverse(
ip: string,
callback: (err: NodeJS$NodeJS$ErrnoException, hostnames: string[]) => void): void

	declare function setServers(servers: string[]): void

	declare function getServers(): string[]

	declare var NODATA: string;
	declare var FORMERR: string;
	declare var SERVFAIL: string;
	declare var NOTFOUND: string;
	declare var NOTIMP: string;
	declare var REFUSED: string;
	declare var BADQUERY: string;
	declare var BADNAME: string;
	declare var BADFAMILY: string;
	declare var BADRESP: string;
	declare var CONNREFUSED: string;
	declare var TIMEOUT: string;
	declare var EOF: string;
	declare var FILE: string;
	declare var NOMEM: string;
	declare var DESTRUCTION: string;
	declare var BADSTR: string;
	declare var BADFLAGS: string;
	declare var NONAME: string;
	declare var BADHINTS: string;
	declare var NOTINITIALIZED: string;
	declare var LOADIPHLPAPI: string;
	declare var ADDRGETNETWORKPARAMS: string;
	declare var CANCELLED: string;
	declare class Resolver  {
getServers: typeof getServers;
setServers: typeof setServers;
win32$resolve: typeof resolve;
resolve4: typeof resolve4;
resolve6: typeof resolve6;
resolveAny: typeof resolveAny;
resolveCname: typeof resolveCname;
resolveMx: typeof resolveMx;
resolveNaptr: typeof resolveNaptr;
resolveNs: typeof resolveNs;
resolvePtr: typeof resolvePtr;
resolveSoa: typeof resolveSoa;
resolveSrv: typeof resolveSrv;
resolveTxt: typeof resolveTxt;
reverse: typeof reverse;
cancel(): void
}
    }

	declare module 'net' {
        import typeof * as stream from 'stream';

	import typeof * as events from 'events';

	import typeof * as dns from 'dns';

	declare type LookupFunction = (
hostname: string,
options: dns.LookupOneOptions,
callback: (
err: NodeJS$NodeJS$ErrnoException | null,
address: string,
family: number) => void) => void;
	declare interface AddressInfo {
address: string,
family: string,
port: number
} 
	declare interface SocketConstructorOpts {
fd?: number,
allowHalfOpen?: boolean,
readable?: boolean,
writable?: boolean
} 
	declare interface TcpSocketConnectOpts {
port: number,
host?: string,
localAddress?: string,
localPort?: number,
hints?: number,
family?: number,
lookup?: LookupFunction
} 
	declare interface IpcSocketConnectOpts {
path: string
} 
	declare type SocketConnectOpts = TcpSocketConnectOpts | IpcSocketConnectOpts;
	declare class Socket mixins stream.internal$Duplex {
constructor(options?: SocketConstructorOpts): this;
write(buffer: Buffer): boolean;
write(buffer: Buffer, cb?: Function): boolean;
write(str: string, cb?: Function): boolean;
write(str: string, encoding?: string, cb?: Function): boolean;
write(str: string, encoding?: string, fd?: string): boolean;
write(data: any, encoding?: string, callback?: Function): void;
connect(options: SocketConnectOpts, connectionListener?: Function): this;
connect(port: number, host: string, connectionListener?: Function): this;
connect(port: number, connectionListener?: Function): this;
connect(path: string, connectionListener?: Function): this;
setEncoding(encoding?: string): this;
pause(): this;
resume(): this;
setTimeout(timeout: number, callback?: Function): this;
setNoDelay(noDelay?: boolean): this;
setKeepAlive(enable?: boolean, initialDelay?: number): this;
address(): AddressInfo | string;
unref(): void;
ref(): void;
bufferSize: number;
bytesRead: number;
bytesWritten: number;
connecting: boolean;
destroyed: boolean;
localAddress: string;
localPort: number;
remoteAddress: string;
remoteFamily: string;
remotePort: number;
end(): void;
end(buffer: Buffer, cb?: Function): void;
end(str: string, cb?: Function): void;
end(str: string, encoding?: string, cb?: Function): void;
end(data?: any, encoding?: string): void;

/**
 * events.EventEmitter
 *    1. close
 *    2. connect
 *    3. data
 *    4. drain
 *    5. end
 *    6. error
 *    7. lookup
 *    8. timeout
 */
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(event: "close", listener: (had_error: boolean) => void): this;
addListener(event: "connect", listener: () => void): this;
addListener(event: "data", listener: (data: Buffer) => void): this;
addListener(event: "drain", listener: () => void): this;
addListener(event: "end", listener: () => void): this;
addListener(event: "error", listener: (err: Error) => void): this;
addListener(
event: "lookup",
listener: (err: Error, address: string, family: string | number, host: string) => void): this;
addListener(event: "timeout", listener: () => void): this;
emit(event: string | Symbol, ...args: any[]): boolean;
emit(event: "close", had_error: boolean): boolean;
emit(event: "connect"): boolean;
emit(event: "data", data: Buffer): boolean;
emit(event: "drain"): boolean;
emit(event: "end"): boolean;
emit(event: "error", err: Error): boolean;
emit(
event: "lookup",
err: Error,
address: string,
family: string | number,
host: string): boolean;
emit(event: "timeout"): boolean;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "close", listener: (had_error: boolean) => void): this;
on(event: "connect", listener: () => void): this;
on(event: "data", listener: (data: Buffer) => void): this;
on(event: "drain", listener: () => void): this;
on(event: "end", listener: () => void): this;
on(event: "error", listener: (err: Error) => void): this;
on(
event: "lookup",
listener: (err: Error, address: string, family: string | number, host: string) => void): this;
on(event: "timeout", listener: () => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "close", listener: (had_error: boolean) => void): this;
once(event: "connect", listener: () => void): this;
once(event: "data", listener: (data: Buffer) => void): this;
once(event: "drain", listener: () => void): this;
once(event: "end", listener: () => void): this;
once(event: "error", listener: (err: Error) => void): this;
once(
event: "lookup",
listener: (err: Error, address: string, family: string | number, host: string) => void): this;
once(event: "timeout", listener: () => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "close", listener: (had_error: boolean) => void): this;
prependListener(event: "connect", listener: () => void): this;
prependListener(event: "data", listener: (data: Buffer) => void): this;
prependListener(event: "drain", listener: () => void): this;
prependListener(event: "end", listener: () => void): this;
prependListener(event: "error", listener: (err: Error) => void): this;
prependListener(
event: "lookup",
listener: (err: Error, address: string, family: string | number, host: string) => void): this;
prependListener(event: "timeout", listener: () => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "close", listener: (had_error: boolean) => void): this;
prependOnceListener(event: "connect", listener: () => void): this;
prependOnceListener(event: "data", listener: (data: Buffer) => void): this;
prependOnceListener(event: "drain", listener: () => void): this;
prependOnceListener(event: "end", listener: () => void): this;
prependOnceListener(event: "error", listener: (err: Error) => void): this;
prependOnceListener(
event: "lookup",
listener: (err: Error, address: string, family: string | number, host: string) => void): this;
prependOnceListener(event: "timeout", listener: () => void): this
}
	declare interface ListenOptions {
port?: number,
host?: string,
backlog?: number,
path?: string,
exclusive?: boolean,
readableAll?: boolean,
writableAll?: boolean
} 
	declare class Server mixins events.internal$EventEmitter {
constructor(connectionListener?: (socket: NodeJS$Socket) => void): this;
constructor(options?: {
allowHalfOpen?: boolean,
pauseOnConnect?: boolean
}, connectionListener?: (socket: NodeJS$Socket) => void): this;
listen(
port?: number,
hostname?: string,
backlog?: number,
listeningListener?: Function): this;
listen(port?: number, hostname?: string, listeningListener?: Function): this;
listen(port?: number, backlog?: number, listeningListener?: Function): this;
listen(port?: number, listeningListener?: Function): this;
listen(path: string, backlog?: number, listeningListener?: Function): this;
listen(path: string, listeningListener?: Function): this;
listen(options: ListenOptions, listeningListener?: Function): this;
listen(handle: any, backlog?: number, listeningListener?: Function): this;
listen(handle: any, listeningListener?: Function): this;
close(callback?: Function): this;
address(): AddressInfo | string;
getConnections(cb: (error: Error | null, count: number) => void): void;
ref(): this;
unref(): this;
maxConnections: number;
connections: number;
listening: boolean;

/**
 * events.EventEmitter
 *    1. close
 *    2. connection
 *    3. error
 *    4. listening
 */
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(event: "close", listener: () => void): this;
addListener(event: "connection", listener: (socket: NodeJS$Socket) => void): this;
addListener(event: "error", listener: (err: Error) => void): this;
addListener(event: "listening", listener: () => void): this;
emit(event: string | Symbol, ...args: any[]): boolean;
emit(event: "close"): boolean;
emit(event: "connection", socket: NodeJS$Socket): boolean;
emit(event: "error", err: Error): boolean;
emit(event: "listening"): boolean;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "close", listener: () => void): this;
on(event: "connection", listener: (socket: NodeJS$Socket) => void): this;
on(event: "error", listener: (err: Error) => void): this;
on(event: "listening", listener: () => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "close", listener: () => void): this;
once(event: "connection", listener: (socket: NodeJS$Socket) => void): this;
once(event: "error", listener: (err: Error) => void): this;
once(event: "listening", listener: () => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "close", listener: () => void): this;
prependListener(event: "connection", listener: (socket: NodeJS$Socket) => void): this;
prependListener(event: "error", listener: (err: Error) => void): this;
prependListener(event: "listening", listener: () => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "close", listener: () => void): this;
prependOnceListener(event: "connection", listener: (socket: NodeJS$Socket) => void): this;
prependOnceListener(event: "error", listener: (err: Error) => void): this;
prependOnceListener(event: "listening", listener: () => void): this
}
	declare type TcpNetConnectOpts = {
timeout?: number
} & TcpSocketConnectOpts & SocketConstructorOpts

	declare type IpcNetConnectOpts = {
timeout?: number
} & IpcSocketConnectOpts & SocketConstructorOpts

	declare type NetConnectOpts = TcpNetConnectOpts | IpcNetConnectOpts;
	declare function createServer(connectionListener?: (socket: NodeJS$Socket) => void): Server

	declare function createServer(
options?: {
allowHalfOpen?: boolean,
pauseOnConnect?: boolean
},
connectionListener?: (socket: NodeJS$Socket) => void): Server

	declare function connect(options: NetConnectOpts, connectionListener?: Function): NodeJS$Socket

	declare function connect(port: number, host?: string, connectionListener?: Function): NodeJS$Socket

	declare function connect(path: string, connectionListener?: Function): NodeJS$Socket

	declare function createConnection(options: NetConnectOpts, connectionListener?: Function): NodeJS$Socket

	declare function createConnection(port: number, host?: string, connectionListener?: Function): NodeJS$Socket

	declare function createConnection(path: string, connectionListener?: Function): NodeJS$Socket

	declare function isIP(input: string): number

	declare function isIPv4(input: string): boolean

	declare function isIPv6(input: string): boolean

    }

	declare module 'dgram' {
        import type {
          AddressInfo
        } from 'net';

	import typeof * as dns from 'dns';

	import typeof * as events from 'events';

	declare interface RemoteInfo {
address: string,
family: string,
port: number
} 
	declare interface BindOptions {
port: number,
address?: string,
exclusive?: boolean
} 
	declare type SocketType = "udp4" | "udp6";
	declare interface SocketOptions {
type: SocketType,
reuseAddr?: boolean,
recvBufferSize?: number,
sendBufferSize?: number,
lookup?: (
hostname: string,
options: dns.LookupOneOptions,
callback: (err: NodeJS$NodeJS$ErrnoException, address: string, family: number) => void) => void
} 
	declare function createSocket(
type: SocketType,
callback?: (msg: Buffer, rinfo: RemoteInfo) => void): NodeJS$Socket

	declare function createSocket(
options: SocketOptions,
callback?: (msg: Buffer, rinfo: RemoteInfo) => void): NodeJS$Socket

	declare class Socket mixins events.internal$EventEmitter {
send(
msg: Buffer | string | Uint8Array | any[],
port: number,
address?: string,
callback?: (error: Error | null, bytes: number) => void): void;
send(
msg: Buffer | string | Uint8Array,
offset: number,
length: number,
port: number,
address?: string,
callback?: (error: Error | null, bytes: number) => void): void;
bind(port?: number, address?: string, callback?: () => void): void;
bind(port?: number, callback?: () => void): void;
bind(callback?: () => void): void;
bind(options: BindOptions, callback?: Function): void;
close(callback?: () => void): void;
address(): AddressInfo | string;
setBroadcast(flag: boolean): void;
setTTL(ttl: number): void;
setMulticastTTL(ttl: number): void;
setMulticastInterface(multicastInterface: string): void;
setMulticastLoopback(flag: boolean): void;
addMembership(multicastAddress: string, multicastInterface?: string): void;
dropMembership(multicastAddress: string, multicastInterface?: string): void;
ref(): this;
unref(): this;
setRecvBufferSize(size: number): void;
setSendBufferSize(size: number): void;
getRecvBufferSize(): number;
getSendBufferSize(): number;

/**
 * events.EventEmitter
 * 1. close
 * 2. error
 * 3. listening
 * 4. message
 */
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(event: "close", listener: () => void): this;
addListener(event: "error", listener: (err: Error) => void): this;
addListener(event: "listening", listener: () => void): this;
addListener(event: "message", listener: (msg: Buffer, rinfo: AddressInfo) => void): this;
emit(event: string | Symbol, ...args: any[]): boolean;
emit(event: "close"): boolean;
emit(event: "error", err: Error): boolean;
emit(event: "listening"): boolean;
emit(event: "message", msg: Buffer, rinfo: AddressInfo): boolean;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "close", listener: () => void): this;
on(event: "error", listener: (err: Error) => void): this;
on(event: "listening", listener: () => void): this;
on(event: "message", listener: (msg: Buffer, rinfo: AddressInfo) => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "close", listener: () => void): this;
once(event: "error", listener: (err: Error) => void): this;
once(event: "listening", listener: () => void): this;
once(event: "message", listener: (msg: Buffer, rinfo: AddressInfo) => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "close", listener: () => void): this;
prependListener(event: "error", listener: (err: Error) => void): this;
prependListener(event: "listening", listener: () => void): this;
prependListener(event: "message", listener: (msg: Buffer, rinfo: AddressInfo) => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "close", listener: () => void): this;
prependOnceListener(event: "error", listener: (err: Error) => void): this;
prependOnceListener(event: "listening", listener: () => void): this;
prependOnceListener(event: "message", listener: (msg: Buffer, rinfo: AddressInfo) => void): this
}
    }

	declare module 'fs' {
        import typeof * as stream from 'stream';

	import typeof * as events from 'events';

	import type {
          URL
        } from 'url';

	
/**
 * Valid types for path values in "fs".
 */
declare type PathLike = string | Buffer | URL;
	declare type BinaryData = Buffer | DataView | NodeJS$NodeJS$TypedArray;
	declare class Stats  {
isFile(): boolean;
isDirectory(): boolean;
isBlockDevice(): boolean;
isCharacterDevice(): boolean;
isSymbolicLink(): boolean;
isFIFO(): boolean;
isSocket(): boolean;
dev: number;
ino: number;
mode: number;
nlink: number;
uid: number;
gid: number;
rdev: number;
size: number;
blksize: number;
blocks: number;
atimeMs: number;
mtimeMs: number;
ctimeMs: number;
birthtimeMs: number;
atime: Date;
mtime: Date;
ctime: Date;
birthtime: Date
}
	declare class Dirent  {
isFile(): boolean;
isDirectory(): boolean;
isBlockDevice(): boolean;
isCharacterDevice(): boolean;
isSymbolicLink(): boolean;
isFIFO(): boolean;
isSocket(): boolean;
name: string
}
	declare type FSWatcher = {
close(): void,

/**
 * events.EventEmitter
 *    1. change
 *    2. error
 */
addListener(event: string, listener: (...args: any[]) => void): this,
addListener(
event: "change",
listener: (eventType: string, filename: string | Buffer) => void): this,
addListener(event: "error", listener: (error: Error) => void): this,
on(event: string, listener: (...args: any[]) => void): this,
on(
event: "change",
listener: (eventType: string, filename: string | Buffer) => void): this,
on(event: "error", listener: (error: Error) => void): this,
once(event: string, listener: (...args: any[]) => void): this,
once(
event: "change",
listener: (eventType: string, filename: string | Buffer) => void): this,
once(event: "error", listener: (error: Error) => void): this,
prependListener(event: string, listener: (...args: any[]) => void): this,
prependListener(
event: "change",
listener: (eventType: string, filename: string | Buffer) => void): this,
prependListener(event: "error", listener: (error: Error) => void): this,
prependOnceListener(event: string, listener: (...args: any[]) => void): this,
prependOnceListener(
event: "change",
listener: (eventType: string, filename: string | Buffer) => void): this,
prependOnceListener(event: "error", listener: (error: Error) => void): this
} & events.internal$EventEmitter

	declare class ReadStream mixins stream.internal$Readable {
close(): void;
bytesRead: number;
path: string | Buffer;

/**
 * events.EventEmitter
 *    1. open
 *    2. close
 */
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(event: "open", listener: (fd: number) => void): this;
addListener(event: "close", listener: () => void): this;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "open", listener: (fd: number) => void): this;
on(event: "close", listener: () => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "open", listener: (fd: number) => void): this;
once(event: "close", listener: () => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "open", listener: (fd: number) => void): this;
prependListener(event: "close", listener: () => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "open", listener: (fd: number) => void): this;
prependOnceListener(event: "close", listener: () => void): this
}
	declare class WriteStream mixins stream.internal$Writable {
close(): void;
bytesWritten: number;
path: string | Buffer;

/**
 * events.EventEmitter
 *    1. open
 *    2. close
 */
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(event: "open", listener: (fd: number) => void): this;
addListener(event: "close", listener: () => void): this;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "open", listener: (fd: number) => void): this;
on(event: "close", listener: () => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "open", listener: (fd: number) => void): this;
once(event: "close", listener: () => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "open", listener: (fd: number) => void): this;
prependListener(event: "close", listener: () => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "open", listener: (fd: number) => void): this;
prependOnceListener(event: "close", listener: () => void): this
}
	
/**
 * Asynchronous rename(2) - Change the name or location of a file or directory.
 * @param oldPath A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function rename(
oldPath: PathLike,
newPath: PathLike,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$rename: {
        __promisify__: typeof rename$__promisify__,
        
      }

/**
 * Asynchronous rename(2) - Change the name or location of a file or directory.
 * @param oldPath A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function rename$__promisify__(oldPath: PathLike, newPath: PathLike): Promise<void>

	
/**
 * Synchronous rename(2) - Change the name or location of a file or directory.
 * @param oldPath A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function renameSync(oldPath: PathLike, newPath: PathLike): void

	
/**
 * Asynchronous truncate(2) - Truncate a file to a specified length.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param len If not specified, defaults to `0`.
 */
declare function truncate(
path: PathLike,
len: number | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
/**
 * Asynchronous truncate(2) - Truncate a file to a specified length.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function truncate(path: PathLike, callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$truncate: {
        __promisify__: typeof truncate$__promisify__,
        
      }

/**
 * Asynchronous truncate(2) - Truncate a file to a specified length.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param len If not specified, defaults to `0`.
 */
declare function truncate$__promisify__(path: PathLike, len?: number | null): Promise<void>

	
/**
 * Synchronous truncate(2) - Truncate a file to a specified length.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param len If not specified, defaults to `0`.
 */
declare function truncateSync(path: PathLike, len?: number | null): void

	
/**
 * Asynchronous ftruncate(2) - Truncate a file to a specified length.
 * @param fd A file descriptor.
 * @param len If not specified, defaults to `0`.
 */
declare function ftruncate(
fd: number,
len: number | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
/**
 * Asynchronous ftruncate(2) - Truncate a file to a specified length.
 * @param fd A file descriptor.
 */
declare function ftruncate(fd: number, callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$ftruncate: {
        __promisify__: typeof ftruncate$__promisify__,
        
      }

/**
 * Asynchronous ftruncate(2) - Truncate a file to a specified length.
 * @param fd A file descriptor.
 * @param len If not specified, defaults to `0`.
 */
declare function ftruncate$__promisify__(fd: number, len?: number | null): Promise<void>

	
/**
 * Synchronous ftruncate(2) - Truncate a file to a specified length.
 * @param fd A file descriptor.
 * @param len If not specified, defaults to `0`.
 */
declare function ftruncateSync(fd: number, len?: number | null): void

	
/**
 * Asynchronous chown(2) - Change ownership of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function chown(
path: PathLike,
uid: number,
gid: number,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$chown: {
        __promisify__: typeof chown$__promisify__,
        
      }

/**
 * Asynchronous chown(2) - Change ownership of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function chown$__promisify__(path: PathLike, uid: number, gid: number): Promise<void>

	
/**
 * Synchronous chown(2) - Change ownership of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function chownSync(path: PathLike, uid: number, gid: number): void

	
/**
 * Asynchronous fchown(2) - Change ownership of a file.
 * @param fd A file descriptor.
 */
declare function fchown(
fd: number,
uid: number,
gid: number,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$fchown: {
        __promisify__: typeof fchown$__promisify__,
        
      }

/**
 * Asynchronous fchown(2) - Change ownership of a file.
 * @param fd A file descriptor.
 */
declare function fchown$__promisify__(fd: number, uid: number, gid: number): Promise<void>

	
/**
 * Synchronous fchown(2) - Change ownership of a file.
 * @param fd A file descriptor.
 */
declare function fchownSync(fd: number, uid: number, gid: number): void

	
/**
 * Asynchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function lchown(
path: PathLike,
uid: number,
gid: number,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$lchown: {
        __promisify__: typeof lchown$__promisify__,
        
      }

/**
 * Asynchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function lchown$__promisify__(path: PathLike, uid: number, gid: number): Promise<void>

	
/**
 * Synchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function lchownSync(path: PathLike, uid: number, gid: number): void

	
/**
 * Asynchronous chmod(2) - Change permissions of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function chmod(
path: PathLike,
mode: string | number,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$chmod: {
        __promisify__: typeof chmod$__promisify__,
        
      }

/**
 * Asynchronous chmod(2) - Change permissions of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function chmod$__promisify__(path: PathLike, mode: string | number): Promise<void>

	
/**
 * Synchronous chmod(2) - Change permissions of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function chmodSync(path: PathLike, mode: string | number): void

	
/**
 * Asynchronous fchmod(2) - Change permissions of a file.
 * @param fd A file descriptor.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function fchmod(
fd: number,
mode: string | number,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$fchmod: {
        __promisify__: typeof fchmod$__promisify__,
        
      }

/**
 * Asynchronous fchmod(2) - Change permissions of a file.
 * @param fd A file descriptor.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function fchmod$__promisify__(fd: number, mode: string | number): Promise<void>

	
/**
 * Synchronous fchmod(2) - Change permissions of a file.
 * @param fd A file descriptor.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function fchmodSync(fd: number, mode: string | number): void

	
/**
 * Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function lchmod(
path: PathLike,
mode: string | number,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$lchmod: {
        __promisify__: typeof lchmod$__promisify__,
        
      }

/**
 * Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function lchmod$__promisify__(path: PathLike, mode: string | number): Promise<void>

	
/**
 * Synchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function lchmodSync(path: PathLike, mode: string | number): void

	
/**
 * Asynchronous stat(2) - Get file status.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function stat(
path: PathLike,
callback: (err: NodeJS$NodeJS$ErrnoException, stats: Stats) => void): void

	
      declare var npm$namespace$stat: {
        __promisify__: typeof stat$__promisify__,
        
      }

/**
 * Asynchronous stat(2) - Get file status.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function stat$__promisify__(path: PathLike): Promise<Stats>

	
/**
 * Synchronous stat(2) - Get file status.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function statSync(path: PathLike): Stats

	
/**
 * Asynchronous fstat(2) - Get file status.
 * @param fd A file descriptor.
 */
declare function fstat(
fd: number,
callback: (err: NodeJS$NodeJS$ErrnoException, stats: Stats) => void): void

	
      declare var npm$namespace$fstat: {
        __promisify__: typeof fstat$__promisify__,
        
      }

/**
 * Asynchronous fstat(2) - Get file status.
 * @param fd A file descriptor.
 */
declare function fstat$__promisify__(fd: number): Promise<Stats>

	
/**
 * Synchronous fstat(2) - Get file status.
 * @param fd A file descriptor.
 */
declare function fstatSync(fd: number): Stats

	
/**
 * Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function lstat(
path: PathLike,
callback: (err: NodeJS$NodeJS$ErrnoException, stats: Stats) => void): void

	
      declare var npm$namespace$lstat: {
        __promisify__: typeof lstat$__promisify__,
        
      }

/**
 * Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function lstat$__promisify__(path: PathLike): Promise<Stats>

	
/**
 * Synchronous lstat(2) - Get file status. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function lstatSync(path: PathLike): Stats

	
/**
 * Asynchronous link(2) - Create a new link (also known as a hard link) to an existing file.
 * @param existingPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function link(
existingPath: PathLike,
newPath: PathLike,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$link: {
        link: typeof link$link,
        
      }

/**
 * Asynchronous link(2) - Create a new link (also known as a hard link) to an existing file.
 * @param existingPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function link$link(existingPath: PathLike, newPath: PathLike): Promise<void>

	
/**
 * Synchronous link(2) - Create a new link (also known as a hard link) to an existing file.
 * @param existingPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function linkSync(existingPath: PathLike, newPath: PathLike): void

	
/**
 * Asynchronous symlink(2) - Create a new symbolic link to an existing file.
 * @param target A path to an existing file. If a URL is provided, it must use the `file:` protocol.
 * @param path A path to the new symlink. If a URL is provided, it must use the `file:` protocol.
 * @param type May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms).
When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.
 */
declare function symlink(
target: PathLike,
path: PathLike,
type: promises$symlink.symlink$Type | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
/**
 * Asynchronous symlink(2) - Create a new symbolic link to an existing file.
 * @param target A path to an existing file. If a URL is provided, it must use the `file:` protocol.
 * @param path A path to the new symlink. If a URL is provided, it must use the `file:` protocol.
 */
declare function symlink(
target: PathLike,
path: PathLike,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$symlink: {
        __promisify__: typeof symlink$__promisify__,
        
      }

/**
 * Asynchronous symlink(2) - Create a new symbolic link to an existing file.
 * @param target A path to an existing file. If a URL is provided, it must use the `file:` protocol.
 * @param path A path to the new symlink. If a URL is provided, it must use the `file:` protocol.
 * @param type May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms).
When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.
 */
declare function symlink$__promisify__(target: PathLike, path: PathLike, type?: string | null): Promise<void>


declare type symlink$Type = "dir" | "file" | "junction";
	
/**
 * Synchronous symlink(2) - Create a new symbolic link to an existing file.
 * @param target A path to an existing file. If a URL is provided, it must use the `file:` protocol.
 * @param path A path to the new symlink. If a URL is provided, it must use the `file:` protocol.
 * @param type May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms).
When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.
 */
declare function symlinkSync(
target: PathLike,
path: PathLike,
type?: promises$symlink.symlink$Type | null): void

	
/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readlink(
path: PathLike,
options: {
encoding?: BufferEncoding | null
} | BufferEncoding | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, linkString: string) => void): void

	
/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readlink(
path: PathLike,
options: {
encoding: "buffer"
} | "buffer",
callback: (err: NodeJS$NodeJS$ErrnoException, linkString: Buffer) => void): void

	
/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readlink(
path: PathLike,
options: {
encoding?: string | null
} | string | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, linkString: string | Buffer) => void): void

	
/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function readlink(
path: PathLike,
callback: (err: NodeJS$NodeJS$ErrnoException, linkString: string) => void): void

	
      declare var npm$namespace$readlink: {
        __promisify__: typeof readlink$__promisify__,
        
      }

/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readlink$__promisify__(
path: PathLike,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): Promise<string>



/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readlink$__promisify__(path: PathLike, options: {
encoding: "buffer"
} | "buffer"): Promise<Buffer>



/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readlink$__promisify__(
path: PathLike,
options?: {
encoding?: string | null
} | string | null): Promise<string | Buffer>

	
/**
 * Synchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readlinkSync(
path: PathLike,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): string

	
/**
 * Synchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readlinkSync(path: PathLike, options: {
encoding: "buffer"
} | "buffer"): Buffer

	
/**
 * Synchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readlinkSync(
path: PathLike,
options?: {
encoding?: string | null
} | string | null): string | Buffer

	
/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function realpath(
path: PathLike,
options: {
encoding?: BufferEncoding | null
} | BufferEncoding | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, resolvedPath: string) => void): void

	
/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function realpath(
path: PathLike,
options: {
encoding: "buffer"
} | "buffer",
callback: (err: NodeJS$NodeJS$ErrnoException, resolvedPath: Buffer) => void): void

	
/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function realpath(
path: PathLike,
options: {
encoding?: string | null
} | string | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, resolvedPath: string | Buffer) => void): void

	
/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function realpath(
path: PathLike,
callback: (err: NodeJS$NodeJS$ErrnoException, resolvedPath: string) => void): void

	
      declare var npm$namespace$realpath: {
        __promisify__: typeof realpath$__promisify__,
native: typeof realpath$native,
        
      }

/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function realpath$__promisify__(
path: PathLike,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): Promise<string>



/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function realpath$__promisify__(path: PathLike, options: {
encoding: "buffer"
} | "buffer"): Promise<Buffer>



/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function realpath$__promisify__(
path: PathLike,
options?: {
encoding?: string | null
} | string | null): Promise<string | Buffer>


declare function realpath$native(
path: PathLike,
options: {
encoding?: BufferEncoding | null
} | BufferEncoding | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, resolvedPath: string) => void): void


declare function realpath$native(
path: PathLike,
options: {
encoding: "buffer"
} | "buffer",
callback: (err: NodeJS$NodeJS$ErrnoException, resolvedPath: Buffer) => void): void


declare function realpath$native(
path: PathLike,
options: {
encoding?: string | null
} | string | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, resolvedPath: string | Buffer) => void): void


declare function realpath$native(
path: PathLike,
callback: (err: NodeJS$NodeJS$ErrnoException, resolvedPath: string) => void): void

	
/**
 * Synchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function realpathSync(
path: PathLike,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): string

	
/**
 * Synchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function realpathSync(path: PathLike, options: {
encoding: "buffer"
} | "buffer"): Buffer

	
/**
 * Synchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function realpathSync(
path: PathLike,
options?: {
encoding?: string | null
} | string | null): string | Buffer

	
      declare var npm$namespace$realpathSync: {
        native: typeof realpathSync$native,
        
      }
declare function realpathSync$native(
path: PathLike,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): string


declare function realpathSync$native(path: PathLike, options: {
encoding: "buffer"
} | "buffer"): Buffer


declare function realpathSync$native(
path: PathLike,
options?: {
encoding?: string | null
} | string | null): string | Buffer

	
/**
 * Asynchronous unlink(2) - delete a name and possibly the file it refers to.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function unlink(path: PathLike, callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$unlink: {
        __promisify__: typeof unlink$__promisify__,
        
      }

/**
 * Asynchronous unlink(2) - delete a name and possibly the file it refers to.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function unlink$__promisify__(path: PathLike): Promise<void>

	
/**
 * Synchronous unlink(2) - delete a name and possibly the file it refers to.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function unlinkSync(path: PathLike): void

	
/**
 * Asynchronous rmdir(2) - delete a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function rmdir(path: PathLike, callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$rmdir: {
        __promisify__: typeof rmdir$__promisify__,
        
      }

/**
 * Asynchronous rmdir(2) - delete a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function rmdir$__promisify__(path: PathLike): Promise<void>

	
/**
 * Synchronous rmdir(2) - delete a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function rmdirSync(path: PathLike): void

	declare export interface MakeDirectoryOptions {

/**
 * Indicates whether parent folders should be created.
 * @default false
 */
recursive?: boolean,

/**
 * A file mode. If a string is passed, it is parsed as an octal integer. If not specified
 * @default 0o777.
 */
mode?: number
} 
	
/**
 * Asynchronous mkdir(2) - create a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options Either the file mode, or an object optionally specifying the file mode and whether parent folders
should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.
 */
declare function mkdir(
path: PathLike,
options: number
| string
| MakeDirectoryOptions
| void
| null,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
/**
 * Asynchronous mkdir(2) - create a directory with a mode of `0o777`.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function mkdir(path: PathLike, callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$mkdir: {
        __promisify__: typeof mkdir$__promisify__,
        
      }

/**
 * Asynchronous mkdir(2) - create a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options Either the file mode, or an object optionally specifying the file mode and whether parent folders
should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.
 */
declare function mkdir$__promisify__(
path: PathLike,
options?: number | string | MakeDirectoryOptions | null): Promise<void>

	
/**
 * Synchronous mkdir(2) - create a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options Either the file mode, or an object optionally specifying the file mode and whether parent folders
should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.
 */
declare function mkdirSync(path: PathLike, options?: number | string | MakeDirectoryOptions | null): void

	
/**
 * Asynchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function mkdtemp(
prefix: string,
options: {
encoding?: BufferEncoding | null
} | BufferEncoding | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, folder: string) => void): void

	
/**
 * Asynchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function mkdtemp(
prefix: string,
options: "buffer" | {
encoding: "buffer"
},
callback: (err: NodeJS$NodeJS$ErrnoException, folder: Buffer) => void): void

	
/**
 * Asynchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function mkdtemp(
prefix: string,
options: {
encoding?: string | null
} | string | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, folder: string | Buffer) => void): void

	
/**
 * Asynchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 */
declare function mkdtemp(
prefix: string,
callback: (err: NodeJS$NodeJS$ErrnoException, folder: string) => void): void

	
      declare var npm$namespace$mkdtemp: {
        __promisify__: typeof mkdtemp$__promisify__,
        
      }

/**
 * Asynchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function mkdtemp$__promisify__(
prefix: string,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): Promise<string>



/**
 * Asynchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function mkdtemp$__promisify__(prefix: string, options: {
encoding: "buffer"
} | "buffer"): Promise<Buffer>



/**
 * Asynchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function mkdtemp$__promisify__(
prefix: string,
options?: {
encoding?: string | null
} | string | null): Promise<string | Buffer>

	
/**
 * Synchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function mkdtempSync(
prefix: string,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): string

	
/**
 * Synchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function mkdtempSync(prefix: string, options: {
encoding: "buffer"
} | "buffer"): Buffer

	
/**
 * Synchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function mkdtempSync(
prefix: string,
options?: {
encoding?: string | null
} | string | null): string | Buffer

	
/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readdir(
path: PathLike,
options: {
encoding: BufferEncoding | null,
withFileTypes?: false
} | BufferEncoding | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, files: string[]) => void): void

	
/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readdir(
path: PathLike,
options: {
encoding: "buffer",
withFileTypes?: false
} | "buffer",
callback: (err: NodeJS$NodeJS$ErrnoException, files: Buffer[]) => void): void

	
/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readdir(
path: PathLike,
options: {
encoding?: string | null,
withFileTypes?: false
} | string | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, files: string[] | Buffer[]) => void): void

	
/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function readdir(
path: PathLike,
callback: (err: NodeJS$NodeJS$ErrnoException, files: string[]) => void): void

	
/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options If called with `withFileTypes: true` the result data will be an array of Dirent.
 */
declare function readdir(
path: PathLike,
options: {
withFileTypes: true
},
callback: (err: NodeJS$NodeJS$ErrnoException, files: Dirent[]) => void): void

	
      declare var npm$namespace$readdir: {
        __promisify__: typeof readdir$__promisify__,
        
      }

/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readdir$__promisify__(
path: PathLike,
options?: {
encoding: BufferEncoding | null,
withFileTypes?: false
} | BufferEncoding | null): Promise<string[]>



/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readdir$__promisify__(
path: PathLike,
options: "buffer" | {
encoding: "buffer",
withFileTypes?: false
}): Promise<Buffer[]>



/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readdir$__promisify__(
path: PathLike,
options?: {
encoding?: string | null,
withFileTypes?: false
} | string | null): Promise<string[] | Buffer[]>



/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options If called with `withFileTypes: true` the result data will be an array of Dirent
 */
declare function readdir$__promisify__(path: PathLike, options: {
withFileTypes: true
}): Promise<Dirent[]>

	
/**
 * Synchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readdirSync(
path: PathLike,
options?: {
encoding: BufferEncoding | null,
withFileTypes?: false
} | BufferEncoding | null): string[]

	
/**
 * Synchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readdirSync(
path: PathLike,
options: {
encoding: "buffer",
withFileTypes?: false
} | "buffer"): Buffer[]

	
/**
 * Synchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function readdirSync(
path: PathLike,
options?: {
encoding?: string | null,
withFileTypes?: false
} | string | null): string[] | Buffer[]

	
/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options If called with `withFileTypes: true` the result data will be an array of Dirent.
 */
declare function readdirSync(path: PathLike, options: {
withFileTypes: true
}): Dirent[]

	
/**
 * Asynchronous close(2) - close a file descriptor.
 * @param fd A file descriptor.
 */
declare function close(fd: number, callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$close: {
        __promisify__: typeof close$__promisify__,
        
      }

/**
 * Asynchronous close(2) - close a file descriptor.
 * @param fd A file descriptor.
 */
declare function close$__promisify__(fd: number): Promise<void>

	
/**
 * Synchronous close(2) - close a file descriptor.
 * @param fd A file descriptor.
 */
declare function closeSync(fd: number): void

	
/**
 * Asynchronous open(2) - open and possibly create a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.
 */
declare function open(
path: PathLike,
flags: string | number,
mode: string | number | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, fd: number) => void): void

	
/**
 * Asynchronous open(2) - open and possibly create a file. If the file is created, its mode will be `0o666`.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function open(
path: PathLike,
flags: string | number,
callback: (err: NodeJS$NodeJS$ErrnoException, fd: number) => void): void

	
      declare var npm$namespace$open: {
        __promisify__: typeof open$__promisify__,
        
      }

/**
 * Asynchronous open(2) - open and possibly create a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.
 */
declare function open$__promisify__(
path: PathLike,
flags: string | number,
mode?: string | number | null): Promise<number>

	
/**
 * Synchronous open(2) - open and possibly create a file, returning a file descriptor..
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.
 */
declare function openSync(path: PathLike, flags: string | number, mode?: string | number | null): number

	
/**
 * Asynchronously change file timestamps of the file referenced by the supplied path.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
declare function utimes(
path: PathLike,
atime: string | number | Date,
mtime: string | number | Date,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$utimes: {
        __promisify__: typeof utimes$__promisify__,
        
      }

/**
 * Asynchronously change file timestamps of the file referenced by the supplied path.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
declare function utimes$__promisify__(
path: PathLike,
atime: string | number | Date,
mtime: string | number | Date): Promise<void>

	
/**
 * Synchronously change file timestamps of the file referenced by the supplied path.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
declare function utimesSync(
path: PathLike,
atime: string | number | Date,
mtime: string | number | Date): void

	
/**
 * Asynchronously change file timestamps of the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
declare function futimes(
fd: number,
atime: string | number | Date,
mtime: string | number | Date,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$futimes: {
        __promisify__: typeof futimes$__promisify__,
        
      }

/**
 * Asynchronously change file timestamps of the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
declare function futimes$__promisify__(
fd: number,
atime: string | number | Date,
mtime: string | number | Date): Promise<void>

	
/**
 * Synchronously change file timestamps of the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
declare function futimesSync(fd: number, atime: string | number | Date, mtime: string | number | Date): void

	
/**
 * Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.
 * @param fd A file descriptor.
 */
declare function fsync(fd: number, callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$fsync: {
        __promisify__: typeof fsync$__promisify__,
        
      }

/**
 * Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.
 * @param fd A file descriptor.
 */
declare function fsync$__promisify__(fd: number): Promise<void>

	
/**
 * Synchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.
 * @param fd A file descriptor.
 */
declare function fsyncSync(fd: number): void

	
/**
 * Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 * @param length The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 */
declare function write<TBuffer: BinaryData>(
fd: number,
buffer: TBuffer,
offset: number | void | null,
length: number | void | null,
position: number | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, written: number, buffer: TBuffer) => void): void

	
/**
 * Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 * @param length The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.
 */
declare function write<TBuffer: BinaryData>(
fd: number,
buffer: TBuffer,
offset: number | void | null,
length: number | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, written: number, buffer: TBuffer) => void): void

	
/**
 * Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 */
declare function write<TBuffer: BinaryData>(
fd: number,
buffer: TBuffer,
offset: number | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, written: number, buffer: TBuffer) => void): void

	
/**
 * Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 */
declare function write<TBuffer: BinaryData>(
fd: number,
buffer: TBuffer,
callback: (err: NodeJS$NodeJS$ErrnoException, written: number, buffer: TBuffer) => void): void

	
/**
 * Asynchronously writes `string` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 * @param encoding The expected string encoding.
 */
declare function write(
fd: number,
string: any,
position: number | void | null,
encoding: string | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, written: number, str: string) => void): void

	
/**
 * Asynchronously writes `string` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 */
declare function write(
fd: number,
string: any,
position: number | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, written: number, str: string) => void): void

	
/**
 * Asynchronously writes `string` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 */
declare function write(
fd: number,
string: any,
callback: (err: NodeJS$NodeJS$ErrnoException, written: number, str: string) => void): void

	
      declare var npm$namespace$write: {
        __promisify__: typeof write$__promisify__,
        
      }

/**
 * Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 * @param length The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 */
declare function write$__promisify__<TBuffer: BinaryData>(
fd: number,
buffer?: TBuffer,
offset?: number,
length?: number,
position?: number | null): Promise<{
bytesWritten: number,
buffer: TBuffer
}>



/**
 * Asynchronously writes `string` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 * @param encoding The expected string encoding.
 */
declare function write$__promisify__(
fd: number,
string: any,
position?: number | null,
encoding?: string | null): Promise<{
bytesWritten: number,
buffer: string
}>

	
/**
 * Synchronously writes `buffer` to the file referenced by the supplied file descriptor, returning the number of bytes written.
 * @param fd A file descriptor.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 * @param length The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 */
declare function writeSync(
fd: number,
buffer: BinaryData,
offset?: number | null,
length?: number | null,
position?: number | null): number

	
/**
 * Synchronously writes `string` to the file referenced by the supplied file descriptor, returning the number of bytes written.
 * @param fd A file descriptor.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 * @param encoding The expected string encoding.
 */
declare function writeSync(
fd: number,
string: any,
position?: number | null,
encoding?: string | null): number

	
/**
 * Asynchronously reads data from the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param buffer The buffer that the data will be written to.
 * @param offset The offset in the buffer at which to start writing.
 * @param length The number of bytes to read.
 * @param position The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position.
 */
declare function read<TBuffer: BinaryData>(
fd: number,
buffer: TBuffer,
offset: number,
length: number,
position: number | null,
callback?: (err: NodeJS$NodeJS$ErrnoException, bytesRead: number, buffer: TBuffer) => void): void

	
      declare var npm$namespace$read: {
        __promisify__: typeof read$__promisify__,
        
      }

/**
 * @param fd A file descriptor.
 * @param buffer The buffer that the data will be written to.
 * @param offset The offset in the buffer at which to start writing.
 * @param length The number of bytes to read.
 * @param position The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position.
 */
declare function read$__promisify__<TBuffer: BinaryData>(
fd: number,
buffer: TBuffer,
offset: number,
length: number,
position: number | null): Promise<{
bytesRead: number,
buffer: TBuffer
}>

	
/**
 * Synchronously reads data from the file referenced by the supplied file descriptor, returning the number of bytes read.
 * @param fd A file descriptor.
 * @param buffer The buffer that the data will be written to.
 * @param offset The offset in the buffer at which to start writing.
 * @param length The number of bytes to read.
 * @param position The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position.
 */
declare function readSync(
fd: number,
buffer: BinaryData,
offset: number,
length: number,
position: number | null): number

	
/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
declare function readFile(
path: PathLike | number,
options: {
encoding?: null,
flag?: string
} | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, data: Buffer) => void): void

	
/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
declare function readFile(
path: PathLike | number,
options: {
encoding: string,
flag?: string
} | string,
callback: (err: NodeJS$NodeJS$ErrnoException, data: string) => void): void

	
/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
declare function readFile(
path: PathLike | number,
options: {
encoding?: string | null,
flag?: string
} | string | void | null,
callback: (err: NodeJS$NodeJS$ErrnoException, data: string | Buffer) => void): void

	
/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 */
declare function readFile(
path: PathLike | number,
callback: (err: NodeJS$NodeJS$ErrnoException, data: Buffer) => void): void

	
      declare var npm$namespace$readFile: {
        __promisify__: typeof readFile$__promisify__,
        
      }

/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
declare function readFile$__promisify__(
path: PathLike | number,
options?: {
encoding?: null,
flag?: string
} | null): Promise<Buffer>



/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
declare function readFile$__promisify__(
path: PathLike | number,
options: {
encoding: string,
flag?: string
} | string): Promise<string>



/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
declare function readFile$__promisify__(
path: PathLike | number,
options?: {
encoding?: string | null,
flag?: string
} | string | null): Promise<string | Buffer>

	
/**
 * Synchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`.
 */
declare function readFileSync(
path: PathLike | number,
options?: {
encoding?: null,
flag?: string
} | null): Buffer

	
/**
 * Synchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
declare function readFileSync(
path: PathLike | number,
options: {
encoding: string,
flag?: string
} | string): string

	
/**
 * Synchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
declare function readFileSync(
path: PathLike | number,
options?: {
encoding?: string | null,
flag?: string
} | string | null): string | Buffer

	declare type WriteFileOptions = {
encoding?: string | null,
mode?: number | string,
flag?: string
} | string | null;
	
/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `mode` is not supplied, the default of `0o666` is used.
If `mode` is a string, it is parsed as an octal integer.
If `flag` is not supplied, the default of `'w'` is used.
 */
declare function writeFile(
path: PathLike | number,
data: any,
options: WriteFileOptions,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 */
declare function writeFile(
path: PathLike | number,
data: any,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$writeFile: {
        __promisify__: typeof writeFile$__promisify__,
        
      }

/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `mode` is not supplied, the default of `0o666` is used.
If `mode` is a string, it is parsed as an octal integer.
If `flag` is not supplied, the default of `'w'` is used.
 */
declare function writeFile$__promisify__(path: PathLike | number, data: any, options?: WriteFileOptions): Promise<void>

	
/**
 * Synchronously writes data to a file, replacing the file if it already exists.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `mode` is not supplied, the default of `0o666` is used.
If `mode` is a string, it is parsed as an octal integer.
If `flag` is not supplied, the default of `'w'` is used.
 */
declare function writeFileSync(path: PathLike | number, data: any, options?: WriteFileOptions): void

	
/**
 * Asynchronously append data to a file, creating the file if it does not exist.
 * @param file A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `mode` is not supplied, the default of `0o666` is used.
If `mode` is a string, it is parsed as an octal integer.
If `flag` is not supplied, the default of `'a'` is used.
 */
declare function appendFile(
file: PathLike | number,
data: any,
options: WriteFileOptions,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
/**
 * Asynchronously append data to a file, creating the file if it does not exist.
 * @param file A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 */
declare function appendFile(
file: PathLike | number,
data: any,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$appendFile: {
        __promisify__: typeof appendFile$__promisify__,
        
      }

/**
 * Asynchronously append data to a file, creating the file if it does not exist.
 * @param file A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `mode` is not supplied, the default of `0o666` is used.
If `mode` is a string, it is parsed as an octal integer.
If `flag` is not supplied, the default of `'a'` is used.
 */
declare function appendFile$__promisify__(file: PathLike | number, data: any, options?: WriteFileOptions): Promise<void>

	
/**
 * Synchronously append data to a file, creating the file if it does not exist.
 * @param file A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `mode` is not supplied, the default of `0o666` is used.
If `mode` is a string, it is parsed as an octal integer.
If `flag` is not supplied, the default of `'a'` is used.
 */
declare function appendFileSync(file: PathLike | number, data: any, options?: WriteFileOptions): void

	
/**
 * Watch for changes on `filename`. The callback `listener` will be called each time the file is accessed.
 */
declare function watchFile(
filename: PathLike,
options: {
persistent?: boolean,
interval?: number
} | void,
listener: (curr: Stats, prev: Stats) => void): void

	
/**
 * Watch for changes on `filename`. The callback `listener` will be called each time the file is accessed.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function watchFile(filename: PathLike, listener: (curr: Stats, prev: Stats) => void): void

	
/**
 * Stop watching for changes on `filename`.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function unwatchFile(filename: PathLike, listener?: (curr: Stats, prev: Stats) => void): void

	
/**
 * Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 * @param options Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `persistent` is not supplied, the default of `true` is used.
If `recursive` is not supplied, the default of `false` is used.
 */
declare function watch(
filename: PathLike,
options: {
encoding?: BufferEncoding | null,
persistent?: boolean,
recursive?: boolean
} | BufferEncoding | void | null,
listener?: (event: string, filename: string) => void): FSWatcher

	
/**
 * Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 * @param options Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `persistent` is not supplied, the default of `true` is used.
If `recursive` is not supplied, the default of `false` is used.
 */
declare function watch(
filename: PathLike,
options: {
encoding: "buffer",
persistent?: boolean,
recursive?: boolean
} | "buffer",
listener?: (event: string, filename: Buffer) => void): FSWatcher

	
/**
 * Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 * @param options Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `persistent` is not supplied, the default of `true` is used.
If `recursive` is not supplied, the default of `false` is used.
 */
declare function watch(
filename: PathLike,
options: {
encoding?: string | null,
persistent?: boolean,
recursive?: boolean
} | string | null,
listener?: (event: string, filename: string | Buffer) => void): FSWatcher

	
/**
 * Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function watch(
filename: PathLike,
listener?: (event: string, filename: string) => any): FSWatcher

	
/**
 * Asynchronously tests whether or not the given path exists by checking with the file system.
 * @deprecated
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function exists(path: PathLike, callback: (exists: boolean) => void): void

	
      declare var npm$namespace$exists: {
        __promisify__: typeof exists$__promisify__,
        
      }

/**
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function exists$__promisify__(path: PathLike): Promise<boolean>

	
/**
 * Synchronously tests whether or not the given path exists by checking with the file system.
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function existsSync(path: PathLike): boolean

	
      declare var npm$namespace$constants: {
        
        F_OK: typeof constants$F_OK,
R_OK: typeof constants$R_OK,
W_OK: typeof constants$W_OK,
X_OK: typeof constants$X_OK,
COPYFILE_EXCL: typeof constants$COPYFILE_EXCL,
COPYFILE_FICLONE: typeof constants$COPYFILE_FICLONE,
COPYFILE_FICLONE_FORCE: typeof constants$COPYFILE_FICLONE_FORCE,
O_RDONLY: typeof constants$O_RDONLY,
O_WRONLY: typeof constants$O_WRONLY,
O_RDWR: typeof constants$O_RDWR,
O_CREAT: typeof constants$O_CREAT,
O_EXCL: typeof constants$O_EXCL,
O_NOCTTY: typeof constants$O_NOCTTY,
O_TRUNC: typeof constants$O_TRUNC,
O_APPEND: typeof constants$O_APPEND,
O_DIRECTORY: typeof constants$O_DIRECTORY,
O_NOATIME: typeof constants$O_NOATIME,
O_NOFOLLOW: typeof constants$O_NOFOLLOW,
O_SYNC: typeof constants$O_SYNC,
O_DSYNC: typeof constants$O_DSYNC,
O_SYMLINK: typeof constants$O_SYMLINK,
O_DIRECT: typeof constants$O_DIRECT,
O_NONBLOCK: typeof constants$O_NONBLOCK,
S_IFMT: typeof constants$S_IFMT,
S_IFREG: typeof constants$S_IFREG,
S_IFDIR: typeof constants$S_IFDIR,
S_IFCHR: typeof constants$S_IFCHR,
S_IFBLK: typeof constants$S_IFBLK,
S_IFIFO: typeof constants$S_IFIFO,
S_IFLNK: typeof constants$S_IFLNK,
S_IFSOCK: typeof constants$S_IFSOCK,
S_IRWXU: typeof constants$S_IRWXU,
S_IRUSR: typeof constants$S_IRUSR,
S_IWUSR: typeof constants$S_IWUSR,
S_IXUSR: typeof constants$S_IXUSR,
S_IRWXG: typeof constants$S_IRWXG,
S_IRGRP: typeof constants$S_IRGRP,
S_IWGRP: typeof constants$S_IWGRP,
S_IXGRP: typeof constants$S_IXGRP,
S_IRWXO: typeof constants$S_IRWXO,
S_IROTH: typeof constants$S_IROTH,
S_IWOTH: typeof constants$S_IWOTH,
S_IXOTH: typeof constants$S_IXOTH,
      }

/**
 * Constant for fs.access(). File is visible to the calling process.
 */
declare var constants$F_OK: number;


/**
 * Constant for fs.access(). File can be read by the calling process.
 */
declare var constants$R_OK: number;


/**
 * Constant for fs.access(). File can be written by the calling process.
 */
declare var constants$W_OK: number;


/**
 * Constant for fs.access(). File can be executed by the calling process.
 */
declare var constants$X_OK: number;


/**
 * Constant for fs.copyFile. Flag indicating the destination file should not be overwritten if it already exists.
 */
declare var constants$COPYFILE_EXCL: number;


/**
 * Constant for fs.copyFile. copy operation will attempt to create a copy-on-write reflink.
 * If the underlying platform does not support copy-on-write, then a fallback copy mechanism is used.
 */
declare var constants$COPYFILE_FICLONE: number;


/**
 * Constant for fs.copyFile. Copy operation will attempt to create a copy-on-write reflink.
 * If the underlying platform does not support copy-on-write, then the operation will fail with an error.
 */
declare var constants$COPYFILE_FICLONE_FORCE: number;


/**
 * Constant for fs.open(). Flag indicating to open a file for read-only access.
 */
declare var constants$O_RDONLY: number;


/**
 * Constant for fs.open(). Flag indicating to open a file for write-only access.
 */
declare var constants$O_WRONLY: number;


/**
 * Constant for fs.open(). Flag indicating to open a file for read-write access.
 */
declare var constants$O_RDWR: number;


/**
 * Constant for fs.open(). Flag indicating to create the file if it does not already exist.
 */
declare var constants$O_CREAT: number;


/**
 * Constant for fs.open(). Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists.
 */
declare var constants$O_EXCL: number;


/**
 * Constant for fs.open(). Flag indicating that if path identifies a terminal device,
 * opening the path shall not cause that terminal to become the controlling terminal for the process
 * (if the process does not already have one).
 */
declare var constants$O_NOCTTY: number;


/**
 * Constant for fs.open(). Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero.
 */
declare var constants$O_TRUNC: number;


/**
 * Constant for fs.open(). Flag indicating that data will be appended to the end of the file.
 */
declare var constants$O_APPEND: number;


/**
 * Constant for fs.open(). Flag indicating that the open should fail if the path is not a directory.
 */
declare var constants$O_DIRECTORY: number;


/**
 * constant for fs.open().
 * Flag indicating reading accesses to the file system will no longer result in
 * an update to the atime information associated with the file.
 * This flag is available on Linux operating systems only.
 */
declare var constants$O_NOATIME: number;


/**
 * Constant for fs.open(). Flag indicating that the open should fail if the path is a symbolic link.
 */
declare var constants$O_NOFOLLOW: number;


/**
 * Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O.
 */
declare var constants$O_SYNC: number;


/**
 * Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O with write operations waiting for data integrity.
 */
declare var constants$O_DSYNC: number;


/**
 * Constant for fs.open(). Flag indicating to open the symbolic link itself rather than the resource it is pointing to.
 */
declare var constants$O_SYMLINK: number;


/**
 * Constant for fs.open(). When set, an attempt will be made to minimize caching effects of file I/O.
 */
declare var constants$O_DIRECT: number;


/**
 * Constant for fs.open(). Flag indicating to open the file in nonblocking mode when possible.
 */
declare var constants$O_NONBLOCK: number;


/**
 * Constant for fs.Stats mode property for determining a file's type. Bit mask used to extract the file type code.
 */
declare var constants$S_IFMT: number;


/**
 * Constant for fs.Stats mode property for determining a file's type. File type constant for a regular file.
 */
declare var constants$S_IFREG: number;


/**
 * Constant for fs.Stats mode property for determining a file's type. File type constant for a directory.
 */
declare var constants$S_IFDIR: number;


/**
 * Constant for fs.Stats mode property for determining a file's type. File type constant for a character-oriented device file.
 */
declare var constants$S_IFCHR: number;


/**
 * Constant for fs.Stats mode property for determining a file's type. File type constant for a block-oriented device file.
 */
declare var constants$S_IFBLK: number;


/**
 * Constant for fs.Stats mode property for determining a file's type. File type constant for a FIFO/pipe.
 */
declare var constants$S_IFIFO: number;


/**
 * Constant for fs.Stats mode property for determining a file's type. File type constant for a symbolic link.
 */
declare var constants$S_IFLNK: number;


/**
 * Constant for fs.Stats mode property for determining a file's type. File type constant for a socket.
 */
declare var constants$S_IFSOCK: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by owner.
 */
declare var constants$S_IRWXU: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by owner.
 */
declare var constants$S_IRUSR: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by owner.
 */
declare var constants$S_IWUSR: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by owner.
 */
declare var constants$S_IXUSR: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by group.
 */
declare var constants$S_IRWXG: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by group.
 */
declare var constants$S_IRGRP: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by group.
 */
declare var constants$S_IWGRP: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by group.
 */
declare var constants$S_IXGRP: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by others.
 */
declare var constants$S_IRWXO: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by others.
 */
declare var constants$S_IROTH: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by others.
 */
declare var constants$S_IWOTH: number;


/**
 * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by others.
 */
declare var constants$S_IXOTH: number;
	
/**
 * Asynchronously tests a user's permissions for the file specified by path.
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function access(
path: PathLike,
mode: number | void,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
/**
 * Asynchronously tests a user's permissions for the file specified by path.
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function access(path: PathLike, callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$access: {
        __promisify__: typeof access$__promisify__,
        
      }

/**
 * Asynchronously tests a user's permissions for the file specified by path.
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function access$__promisify__(path: PathLike, mode?: number): Promise<void>

	
/**
 * Synchronously tests a user's permissions for the file specified by path.
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function accessSync(path: PathLike, mode?: number): void

	
/**
 * Returns a new `ReadStream` object.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function createReadStream(
path: PathLike,
options?: string | {
flags?: string,
encoding?: string,
fd?: number,
mode?: number,
autoClose?: boolean,
start?: number,
end?: number,
highWaterMark?: number
}): NodeJS$ReadStream

	
/**
 * Returns a new `WriteStream` object.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function createWriteStream(
path: PathLike,
options?: string | {
flags?: string,
encoding?: string,
fd?: number,
mode?: number,
autoClose?: boolean,
start?: number
}): NodeJS$WriteStream

	
/**
 * Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.
 * @param fd A file descriptor.
 */
declare function fdatasync(fd: number, callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$fdatasync: {
        __promisify__: typeof fdatasync$__promisify__,
        
      }

/**
 * Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.
 * @param fd A file descriptor.
 */
declare function fdatasync$__promisify__(fd: number): Promise<void>

	
/**
 * Synchronous fdatasync(2) - synchronize a file's in-core state with storage device.
 * @param fd A file descriptor.
 */
declare function fdatasyncSync(fd: number): void

	
/**
 * Asynchronously copies src to dest. By default, dest is overwritten if it already exists.
 * No arguments other than a possible exception are given to the callback function.
 * Node.js makes no guarantees about the atomicity of the copy operation.
 * If an error occurs after the destination file has been opened for writing, Node.js will attempt
 * to remove the destination.
 * @param src A path to the source file.
 * @param dest A path to the destination file.
 */
declare function copyFile(
src: PathLike,
dest: PathLike,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
/**
 * Asynchronously copies src to dest. By default, dest is overwritten if it already exists.
 * No arguments other than a possible exception are given to the callback function.
 * Node.js makes no guarantees about the atomicity of the copy operation.
 * If an error occurs after the destination file has been opened for writing, Node.js will attempt
 * to remove the destination.
 * @param src A path to the source file.
 * @param dest A path to the destination file.
 * @param flags An integer that specifies the behavior of the copy operation. The only supported flag is fs.constants.COPYFILE_EXCL, which causes the copy operation to fail if dest already exists.
 */
declare function copyFile(
src: PathLike,
dest: PathLike,
flags: number,
callback: (err: NodeJS$NodeJS$ErrnoException) => void): void

	
      declare var npm$namespace$copyFile: {
        __promisify__: typeof copyFile$__promisify__,
        
      }

/**
 * Asynchronously copies src to dest. By default, dest is overwritten if it already exists.
 * No arguments other than a possible exception are given to the callback function.
 * Node.js makes no guarantees about the atomicity of the copy operation.
 * If an error occurs after the destination file has been opened for writing, Node.js will attempt
 * to remove the destination.
 * @param src A path to the source file.
 * @param dest A path to the destination file.
 * @param flags An optional integer that specifies the behavior of the copy operation.
The only supported flag is fs.constants.COPYFILE_EXCL,
which causes the copy operation to fail if dest already exists.
 */
declare function copyFile$__promisify__(src: PathLike, dst: PathLike, flags?: number): Promise<void>

	
/**
 * Synchronously copies src to dest. By default, dest is overwritten if it already exists.
 * Node.js makes no guarantees about the atomicity of the copy operation.
 * If an error occurs after the destination file has been opened for writing, Node.js will attempt
 * to remove the destination.
 * @param src A path to the source file.
 * @param dest A path to the destination file.
 * @param flags An optional integer that specifies the behavior of the copy operation.
The only supported flag is fs.constants.COPYFILE_EXCL, which causes the copy operation to fail if dest already exists.
 */
declare function copyFileSync(src: PathLike, dest: PathLike, flags?: number): void

	
      declare var npm$namespace$promises: {
        access: typeof promises$access,
copyFile: typeof promises$copyFile,
open: typeof promises$open,
read: typeof promises$read,
write: typeof promises$write,
rename: typeof promises$rename,
truncate: typeof promises$truncate,
ftruncate: typeof promises$ftruncate,
rmdir: typeof promises$rmdir,
fdatasync: typeof promises$fdatasync,
fsync: typeof promises$fsync,
mkdir: typeof promises$mkdir,
readdir: typeof promises$readdir,
readlink: typeof promises$readlink,
symlink: typeof promises$symlink,
fstat: typeof promises$fstat,
lstat: typeof promises$lstat,
stat: typeof promises$stat,
link: typeof promises$link,
unlink: typeof promises$unlink,
fchmod: typeof promises$fchmod,
chmod: typeof promises$chmod,
lchmod: typeof promises$lchmod,
lchown: typeof promises$lchown,
fchown: typeof promises$fchown,
chown: typeof promises$chown,
utimes: typeof promises$utimes,
futimes: typeof promises$futimes,
realpath: typeof promises$realpath,
mkdtemp: typeof promises$mkdtemp,
writeFile: typeof promises$writeFile,
appendFile: typeof promises$appendFile,
readFile: typeof promises$readFile,
        
      }
declare interface promises$FileHandle {

/**
 * Gets the file descriptor for this file handle.
 */
+fd: number,

/**
 * Asynchronously append data to a file, creating the file if it does not exist. The underlying file will _not_ be closed automatically.
 * The `FileHandle` must have been opened for appending.
 * @param data The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `mode` is not supplied, the default of `0o666` is used.
If `mode` is a string, it is parsed as an octal integer.
If `flag` is not supplied, the default of `'a'` is used.
 */
appendFile(
data: any,
options?: {
encoding?: string | null,
mode?: string | number,
flag?: string | number
} | string | null): Promise<void>,

/**
 * Asynchronous fchown(2) - Change ownership of a file.
 */
chown(uid: number, gid: number): Promise<void>,

/**
 * Asynchronous fchmod(2) - Change permissions of a file.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
chmod(mode: string | number): Promise<void>,

/**
 * Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.
 */
datasync(): Promise<void>,

/**
 * Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.
 */
sync(): Promise<void>,

/**
 * Asynchronously reads data from the file.
 * The `FileHandle` must have been opened for reading.
 * @param buffer The buffer that the data will be written to.
 * @param offset The offset in the buffer at which to start writing.
 * @param length The number of bytes to read.
 * @param position The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position.
 */
read<TBuffer: Buffer | Uint8Array>(
buffer: TBuffer,
offset?: number | null,
length?: number | null,
position?: number | null): Promise<{
bytesRead: number,
buffer: TBuffer
}>,

/**
 * Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
 * The `FileHandle` must have been opened for reading.
 * @param options An object that may contain an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
readFile(options?: {
encoding?: null,
flag?: string | number
} | null): Promise<Buffer>,

/**
 * Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
 * The `FileHandle` must have been opened for reading.
 * @param options An object that may contain an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
readFile(
options: {
encoding: BufferEncoding,
flag?: string | number
} | BufferEncoding): Promise<string>,

/**
 * Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
 * The `FileHandle` must have been opened for reading.
 * @param options An object that may contain an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
readFile(
options?: {
encoding?: string | null,
flag?: string | number
} | string | null): Promise<string | Buffer>,

/**
 * Asynchronous fstat(2) - Get file status.
 */
stat(): Promise<Stats>,

/**
 * Asynchronous ftruncate(2) - Truncate a file to a specified length.
 * @param len If not specified, defaults to `0`.
 */
truncate(len?: number): Promise<void>,

/**
 * Asynchronously change file timestamps of the file.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
utimes(atime: string | number | Date, mtime: string | number | Date): Promise<void>,

/**
 * Asynchronously writes `buffer` to the file.
 * The `FileHandle` must have been opened for writing.
 * @param buffer The buffer that the data will be written to.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 * @param length The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 */
write<TBuffer: Buffer | Uint8Array>(
buffer: TBuffer,
offset?: number | null,
length?: number | null,
position?: number | null): Promise<{
bytesWritten: number,
buffer: TBuffer
}>,

/**
 * Asynchronously writes `string` to the file.
 * The `FileHandle` must have been opened for writing.
 * It is unsafe to call `write()` multiple times on the same file without waiting for the `Promise`
 * to be resolved (or rejected). For this scenario, `fs.createWriteStream` is strongly recommended.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 * @param encoding The expected string encoding.
 */
write(
data: any,
position?: number | null,
encoding?: string | null): Promise<{
bytesWritten: number,
buffer: string
}>,

/**
 * Asynchronously writes data to a file, replacing the file if it already exists. The underlying file will _not_ be closed automatically.
 * The `FileHandle` must have been opened for writing.
 * It is unsafe to call `writeFile()` multiple times on the same file without waiting for the `Promise` to be resolved (or rejected).
 * @param data The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `mode` is not supplied, the default of `0o666` is used.
If `mode` is a string, it is parsed as an octal integer.
If `flag` is not supplied, the default of `'w'` is used.
 */
writeFile(
data: any,
options?: {
encoding?: string | null,
mode?: string | number,
flag?: string | number
} | string | null): Promise<void>,

/**
 * Asynchronous close(2) - close a `FileHandle`.
 */
close(): Promise<void>
} 


/**
 * Asynchronously tests a user's permissions for the file specified by path.
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function promises$access(path: PathLike, mode?: number): Promise<void>



/**
 * Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it already exists.
 * Node.js makes no guarantees about the atomicity of the copy operation.
 * If an error occurs after the destination file has been opened for writing, Node.js will attempt
 * to remove the destination.
 * @param src A path to the source file.
 * @param dest A path to the destination file.
 * @param flags An optional integer that specifies the behavior of the copy operation. The only
supported flag is `fs.constants.COPYFILE_EXCL`, which causes the copy operation to fail if
`dest` already exists.
 */
declare function promises$copyFile(src: PathLike, dest: PathLike, flags?: number): Promise<void>



/**
 * Asynchronous open(2) - open and possibly create a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer. If not
supplied, defaults to `0o666`.
 */
declare function promises$open(
path: PathLike,
flags: string | number,
mode?: string | number): Promise<promises$FileHandle>



/**
 * Asynchronously reads data from the file referenced by the supplied `FileHandle`.
 * @param handle A `FileHandle`.
 * @param buffer The buffer that the data will be written to.
 * @param offset The offset in the buffer at which to start writing.
 * @param length The number of bytes to read.
 * @param position The offset from the beginning of the file from which data should be read. If
`null`, data will be read from the current position.
 */
declare function promises$read<TBuffer: Buffer | Uint8Array>(
handle: promises$FileHandle,
buffer: TBuffer,
offset?: number | null,
length?: number | null,
position?: number | null): Promise<{
bytesRead: number,
buffer: TBuffer
}>



/**
 * Asynchronously writes `buffer` to the file referenced by the supplied `FileHandle`.
 * It is unsafe to call `fsPromises.write()` multiple times on the same file without waiting for the `Promise`
 * to be resolved (or rejected). For this scenario, `fs.createWriteStream` is strongly recommended.
 * @param handle A `FileHandle`.
 * @param buffer The buffer that the data will be written to.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 * @param length The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 */
declare function promises$write<TBuffer: Buffer | Uint8Array>(
handle: promises$FileHandle,
buffer: TBuffer,
offset?: number | null,
length?: number | null,
position?: number | null): Promise<{
bytesWritten: number,
buffer: TBuffer
}>



/**
 * Asynchronously writes `string` to the file referenced by the supplied `FileHandle`.
 * It is unsafe to call `fsPromises.write()` multiple times on the same file without waiting for the `Promise`
 * to be resolved (or rejected). For this scenario, `fs.createWriteStream` is strongly recommended.
 * @param handle A `FileHandle`.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 * @param encoding The expected string encoding.
 */
declare function promises$write(
handle: promises$FileHandle,
string: any,
position?: number | null,
encoding?: string | null): Promise<{
bytesWritten: number,
buffer: string
}>



/**
 * Asynchronous rename(2) - Change the name or location of a file or directory.
 * @param oldPath A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
 */
declare function promises$rename(oldPath: PathLike, newPath: PathLike): Promise<void>



/**
 * Asynchronous truncate(2) - Truncate a file to a specified length.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param len If not specified, defaults to `0`.
 */
declare function promises$truncate(path: PathLike, len?: number): Promise<void>



/**
 * Asynchronous ftruncate(2) - Truncate a file to a specified length.
 * @param handle A `FileHandle`.
 * @param len If not specified, defaults to `0`.
 */
declare function promises$ftruncate(handle: promises$FileHandle, len?: number): Promise<void>



/**
 * Asynchronous rmdir(2) - delete a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function promises$rmdir(path: PathLike): Promise<void>



/**
 * Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.
 * @param handle A `FileHandle`.
 */
declare function promises$fdatasync(handle: promises$FileHandle): Promise<void>



/**
 * Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.
 * @param handle A `FileHandle`.
 */
declare function promises$fsync(handle: promises$FileHandle): Promise<void>



/**
 * Asynchronous mkdir(2) - create a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options Either the file mode, or an object optionally specifying the file mode and whether parent folders
should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.
 */
declare function promises$mkdir(
path: PathLike,
options?: number | string | MakeDirectoryOptions | null): Promise<void>



/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$readdir(
path: PathLike,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): Promise<string[]>



/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$readdir(path: PathLike, options: {
encoding: "buffer"
} | "buffer"): Promise<Buffer[]>



/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$readdir(
path: PathLike,
options?: {
encoding?: string | null
} | string | null): Promise<string[] | Buffer[]>



/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$readlink(
path: PathLike,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): Promise<string>



/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$readlink(path: PathLike, options: {
encoding: "buffer"
} | "buffer"): Promise<Buffer>



/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$readlink(
path: PathLike,
options?: {
encoding?: string | null
} | string | null): Promise<string | Buffer>



/**
 * Asynchronous symlink(2) - Create a new symbolic link to an existing file.
 * @param target A path to an existing file. If a URL is provided, it must use the `file:` protocol.
 * @param path A path to the new symlink. If a URL is provided, it must use the `file:` protocol.
 * @param type May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms).
When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.
 */
declare function promises$symlink(target: PathLike, path: PathLike, type?: string | null): Promise<void>



/**
 * Asynchronous fstat(2) - Get file status.
 * @param handle A `FileHandle`.
 */
declare function promises$fstat(handle: promises$FileHandle): Promise<Stats>



/**
 * Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function promises$lstat(path: PathLike): Promise<Stats>



/**
 * Asynchronous stat(2) - Get file status.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function promises$stat(path: PathLike): Promise<Stats>



/**
 * Asynchronous link(2) - Create a new link (also known as a hard link) to an existing file.
 * @param existingPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function promises$link(existingPath: PathLike, newPath: PathLike): Promise<void>



/**
 * Asynchronous unlink(2) - delete a name and possibly the file it refers to.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function promises$unlink(path: PathLike): Promise<void>



/**
 * Asynchronous fchmod(2) - Change permissions of a file.
 * @param handle A `FileHandle`.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function promises$fchmod(handle: promises$FileHandle, mode: string | number): Promise<void>



/**
 * Asynchronous chmod(2) - Change permissions of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function promises$chmod(path: PathLike, mode: string | number): Promise<void>



/**
 * Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
declare function promises$lchmod(path: PathLike, mode: string | number): Promise<void>



/**
 * Asynchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function promises$lchown(path: PathLike, uid: number, gid: number): Promise<void>



/**
 * Asynchronous fchown(2) - Change ownership of a file.
 * @param handle A `FileHandle`.
 */
declare function promises$fchown(handle: promises$FileHandle, uid: number, gid: number): Promise<void>



/**
 * Asynchronous chown(2) - Change ownership of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
declare function promises$chown(path: PathLike, uid: number, gid: number): Promise<void>



/**
 * Asynchronously change file timestamps of the file referenced by the supplied path.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
declare function promises$utimes(
path: PathLike,
atime: string | number | Date,
mtime: string | number | Date): Promise<void>



/**
 * Asynchronously change file timestamps of the file referenced by the supplied `FileHandle`.
 * @param handle A `FileHandle`.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
declare function promises$futimes(
handle: promises$FileHandle,
atime: string | number | Date,
mtime: string | number | Date): Promise<void>



/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$realpath(
path: PathLike,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): Promise<string>



/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$realpath(path: PathLike, options: {
encoding: "buffer"
} | "buffer"): Promise<Buffer>



/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$realpath(
path: PathLike,
options?: {
encoding?: string | null
} | string | null): Promise<string | Buffer>



/**
 * Asynchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$mkdtemp(
prefix: string,
options?: {
encoding?: BufferEncoding | null
} | BufferEncoding | null): Promise<string>



/**
 * Asynchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$mkdtemp(prefix: string, options: {
encoding: "buffer"
} | "buffer"): Promise<Buffer>



/**
 * Asynchronously creates a unique temporary directory.
 * Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
declare function promises$mkdtemp(
prefix: string,
options?: {
encoding?: string | null
} | string | null): Promise<string | Buffer>



/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 * It is unsafe to call `fsPromises.writeFile()` multiple times on the same file without waiting for the `Promise` to be resolved (or rejected).
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a `FileHandle` is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `mode` is not supplied, the default of `0o666` is used.
If `mode` is a string, it is parsed as an octal integer.
If `flag` is not supplied, the default of `'w'` is used.
 */
declare function promises$writeFile(
path: PathLike | promises$FileHandle,
data: any,
options?: {
encoding?: string | null,
mode?: string | number,
flag?: string | number
} | string | null): Promise<void>



/**
 * Asynchronously append data to a file, creating the file if it does not exist.
 * @param file A path to a file. If a URL is provided, it must use the `file:` protocol.
URL support is _experimental_.
If a `FileHandle` is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
If `encoding` is not supplied, the default of `'utf8'` is used.
If `mode` is not supplied, the default of `0o666` is used.
If `mode` is a string, it is parsed as an octal integer.
If `flag` is not supplied, the default of `'a'` is used.
 */
declare function promises$appendFile(
path: PathLike | promises$FileHandle,
data: any,
options?: {
encoding?: string | null,
mode?: string | number,
flag?: string | number
} | string | null): Promise<void>



/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
If a `FileHandle` is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
declare function promises$readFile(
path: PathLike | promises$FileHandle,
options?: {
encoding?: null,
flag?: string | number
} | null): Promise<Buffer>



/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
If a `FileHandle` is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
declare function promises$readFile(
path: PathLike | promises$FileHandle,
options: {
encoding: BufferEncoding,
flag?: string | number
} | BufferEncoding): Promise<string>



/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
If a `FileHandle` is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag.
If a flag is not provided, it defaults to `'r'`.
 */
declare function promises$readFile(
path: PathLike | promises$FileHandle,
options?: {
encoding?: string | null,
flag?: string | number
} | string | null): Promise<string | Buffer>

    }

	declare module 'path' {
        
/**
 * A parsed path object generated by path.parse() or consumed by path.format().
 */
declare interface ParsedPath {

/**
 * The root of the path such as '/' or 'c:\'
 */
root: string,

/**
 * The full directory path such as '/home/user/dir' or 'c:\path\dir'
 */
dir: string,

/**
 * The file name including extension (if any) such as 'index.html'
 */
base: string,

/**
 * The file extension (if any) such as '.html'
 */
ext: string,

/**
 * The file name without extension (if any) such as 'index'
 */
name: string
} 
	declare interface FormatInputPathObject {

/**
 * The root of the path such as '/' or 'c:\'
 */
root?: string,

/**
 * The full directory path such as '/home/user/dir' or 'c:\path\dir'
 */
dir?: string,

/**
 * The file name including extension (if any) such as 'index.html'
 */
base?: string,

/**
 * The file extension (if any) such as '.html'
 */
ext?: string,

/**
 * The file name without extension (if any) such as 'index'
 */
name?: string
} 
	
/**
 * Normalize a string path, reducing '..' and '.' parts.
 * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.
 * @param p string path to normalize.
 */
declare function normalize(p: string): string

	
/**
 * Join all arguments together and normalize the resulting path.
 * Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.
 * @param paths paths to join.
 */
declare function join(...paths: string[]): string

	
/**
 * The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.
 * 
 * Starting from leftmost {from} parameter, resolves {to} to an absolute path.
 * 
 * If {to} isn't already absolute, {from} arguments are prepended in right to left order,
 * until an absolute path is found. If after using all {from} paths still no absolute path is found,
 * the current working directory is used as well. The resulting path is normalized,
 * and trailing slashes are removed unless the path gets resolved to the root directory.
 * @param pathSegments string paths to join.  Non-string arguments are ignored.
 */
declare function resolve(...pathSegments: string[]): string

	
/**
 * Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
 * @param path path to test.
 */
declare function isAbsolute(path: string): boolean

	
/**
 * Solve the relative path from {from} to {to}.
 * At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.
 */
declare function relative(from: string, to: string): string

	
/**
 * Return the directory name of a path. Similar to the Unix dirname command.
 * @param p the path to evaluate.
 */
declare function dirname(p: string): string

	
/**
 * Return the last portion of a path. Similar to the Unix basename command.
 * Often used to extract the file name from a fully qualified path.
 * @param p the path to evaluate.
 * @param ext optionally, an extension to remove from the result.
 */
declare function basename(p: string, ext?: string): string

	
/**
 * Return the extension of the path, from the last '.' to end of string in the last portion of the path.
 * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
 * @param p the path to evaluate.
 */
declare function extname(p: string): string

	
/**
 * The platform-specific file separator. '\\' or '/'.
 */
declare var sep: "\\" | "/";
	
/**
 * The platform-specific file delimiter. ';' or ':'.
 */
declare var delimiter: ";" | ":";
	
/**
 * Returns an object from a path string - the opposite of format().
 * @param pathString path to evaluate.
 */
declare function parse(pathString: string): ParsedPath

	
/**
 * Returns a path string from an object - the opposite of parse().
 * @param pathString path to evaluate.
 */
declare function format(pathObject: FormatInputPathObject): string

	
      declare var npm$namespace$posix: {
        normalize: typeof posix$normalize,
join: typeof posix$join,
resolve: typeof posix$resolve,
isAbsolute: typeof posix$isAbsolute,
relative: typeof posix$relative,
dirname: typeof posix$dirname,
basename: typeof posix$basename,
extname: typeof posix$extname,
parse: typeof posix$parse,
format: typeof posix$format,
        sep: typeof posix$sep,
delimiter: typeof posix$delimiter,
      }
declare function posix$normalize(p: string): string


declare function posix$join(...paths: any[]): string


declare function posix$resolve(...pathSegments: any[]): string


declare function posix$isAbsolute(p: string): boolean


declare function posix$relative(from: string, to: string): string


declare function posix$dirname(p: string): string


declare function posix$basename(p: string, ext?: string): string


declare function posix$extname(p: string): string


declare var posix$sep: string;

declare var posix$delimiter: string;

declare function posix$parse(p: string): ParsedPath


declare function posix$format(pP: FormatInputPathObject): string

	
      declare var npm$namespace$win32: {
        normalize: typeof win32$normalize,
join: typeof win32$join,
resolve: typeof win32$resolve,
isAbsolute: typeof win32$isAbsolute,
relative: typeof win32$relative,
dirname: typeof win32$dirname,
basename: typeof win32$basename,
extname: typeof win32$extname,
parse: typeof win32$parse,
format: typeof win32$format,
        sep: typeof win32$sep,
delimiter: typeof win32$delimiter,
      }
declare function win32$normalize(p: string): string


declare function win32$join(...paths: any[]): string


declare function win32$resolve(...pathSegments: any[]): string


declare function win32$isAbsolute(p: string): boolean


declare function win32$relative(from: string, to: string): string


declare function win32$dirname(p: string): string


declare function win32$basename(p: string, ext?: string): string


declare function win32$extname(p: string): string


declare var win32$sep: string;

declare var win32$delimiter: string;

declare function win32$parse(p: string): ParsedPath


declare function win32$format(pP: FormatInputPathObject): string

    }

	declare module 'string_decoder' {
        declare interface NodeStringDecoder {
write(buffer: Buffer): string,
end(buffer?: Buffer): string
} 
	declare var StringDecoder: {
new (encoding?: string): NodeStringDecoder
};
    }

	declare module 'tls' {
        import typeof * as crypto from 'crypto';

	import typeof * as dns from 'dns';

	import typeof * as net from 'net';

	import typeof * as stream from 'stream';

	declare var CLIENT_RENEG_LIMIT: number;
	declare var CLIENT_RENEG_WINDOW: number;
	declare interface Certificate {

/**
 * Country code.
 */
C: string,

/**
 * Street.
 */
ST: string,

/**
 * Locality.
 */
L: string,

/**
 * Organization.
 */
O: string,

/**
 * Organizational unit.
 */
OU: string,

/**
 * Common name.
 */
CN: string
} 
	declare interface PeerCertificate {
subject: Certificate,
issuer: Certificate,
subjectaltname: string,
infoAccess: {
[index: string]: string[] | void
},
modulus: string,
exponent: string,
valid_from: string,
valid_to: string,
fingerprint: string,
ext_key_usage: string[],
serialNumber: string,
raw: Buffer
} 
	declare type DetailedPeerCertificate = {
issuerCertificate: DetailedPeerCertificate
} & PeerCertificate

	declare interface CipherNameAndProtocol {

/**
 * The cipher name.
 */
name: string,

/**
 * SSL/TLS protocol version.
 */
version: string
} 
	declare class TLSSocket mixins net.NodeJS$Socket {

/**
 * Construct a new tls.TLSSocket object from an existing TCP socket.
 */
constructor(socket: net.NodeJS$Socket, options?: {

/**
 * An optional TLS context object from tls.createSecureContext()
 */
secureContext?: SecureContext,

/**
 * If true the TLS socket will be instantiated in server-mode.
 * Defaults to false.
 */
isServer?: boolean,

/**
 * An optional net.Server instance.
 */
server?: net.Server,

/**
 * If true the server will request a certificate from clients that
 * connect and attempt to verify that certificate. Defaults to
 * false.
 */
requestCert?: boolean,

/**
 * If true the server will reject any connection which is not
 * authorized with the list of supplied CAs. This option only has an
 * effect if requestCert is true. Defaults to false.
 */
rejectUnauthorized?: boolean,

/**
 * An array of strings or a Buffer naming possible NPN protocols.
 * (Protocols should be ordered by their priority.)
 */
NPNProtocols?: string[]
| Buffer[]
| Uint8Array[]
| Buffer
| Uint8Array,

/**
 * An array of strings or a Buffer naming possible ALPN protocols.
 * (Protocols should be ordered by their priority.) When the server
 * receives both NPN and ALPN extensions from the client, ALPN takes
 * precedence over NPN and the server does not send an NPN extension
 * to the client.
 */
ALPNProtocols?: string[]
| Buffer[]
| Uint8Array[]
| Buffer
| Uint8Array,

/**
 * SNICallback(servername, cb) <Function> A function that will be
 * called if the client supports SNI TLS extension. Two arguments
 * will be passed when called: servername and cb. SNICallback should
 * invoke cb(null, ctx), where ctx is a SecureContext instance.
 * (tls.createSecureContext(...) can be used to get a proper
 * SecureContext.) If SNICallback wasn't provided the default callback
 * with high-level API will be used (see below).
 */
SNICallback?: (
servername: string,
cb: (err: Error | null, ctx: SecureContext) => void) => void,

/**
 * An optional Buffer instance containing a TLS session.
 */
session?: Buffer,

/**
 * If true, specifies that the OCSP status request extension will be
 * added to the client hello and an 'OCSPResponse' event will be
 * emitted on the socket before establishing a secure communication
 */
requestOCSP?: boolean
}): this;

/**
 * A boolean that is true if the peer certificate was signed by one of the specified CAs, otherwise false.
 */
authorized: boolean;

/**
 * The reason why the peer's certificate has not been verified.
 * This property becomes available only when tlsSocket.authorized === false.
 */
authorizationError: Error;

/**
 * Static boolean value, always true.
 * May be used to distinguish TLS sockets from regular ones.
 */
encrypted: boolean;

/**
 * String containing the selected ALPN protocol.
 * When ALPN has no selected protocol, tlsSocket.alpnProtocol equals false.
 */
alpnProtocol: string;

/**
 * Returns an object representing the cipher name and the SSL/TLS protocol version of the current connection.
 * @returns Returns an object representing the cipher name
and the SSL/TLS protocol version of the current connection.
 */
getCipher(): CipherNameAndProtocol;

/**
 * Returns an object representing the peer's certificate.
 * The returned object has some properties corresponding to the field of the certificate.
 * If detailed argument is true the full chain with issuer property will be returned,
 * if false only the top certificate without issuer property.
 * If the peer does not provide a certificate, it returns null or an empty object.
 * @param detailed - If true; the full chain with issuer property will be returned.
 * @returns An object representing the peer's certificate.
 */
getPeerCertificate(detailed: true): DetailedPeerCertificate;
getPeerCertificate(detailed?: false): PeerCertificate;
getPeerCertificate(detailed?: boolean): PeerCertificate | DetailedPeerCertificate;

/**
 * Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
 * The value `'unknown'` will be returned for connected sockets that have not completed the handshaking process.
 * The value `null` will be returned for server sockets or disconnected client sockets.
 * See https://www.openssl.org/docs/man1.0.2/ssl/SSL_get_version.html for more information.
 * @returns negotiated SSL/TLS protocol version of the current connection
 */
getProtocol(): string | null;

/**
 * Could be used to speed up handshake establishment when reconnecting to the server.
 * @returns ASN.1 encoded TLS session or undefined if none was negotiated.
 */
getSession(): any;

/**
 * NOTE: Works only with client TLS sockets.
 * Useful only for debugging, for session reuse provide session option to tls.connect().
 * @returns TLS session ticket or undefined if none was negotiated.
 */
getTLSTicket(): any;

/**
 * Initiate TLS renegotiation process.
 * 
 * NOTE: Can be used to request peer's certificate after the secure connection has been established.
 * ANOTHER NOTE: When running as the server, socket will be destroyed with an error after handshakeTimeout timeout.
 * @param options - The options may contain the following fields: rejectUnauthorized,
requestCert (See tls.createServer() for details).
 * @param callback - callback(err) will be executed with null as err, once the renegotiation
is successfully completed.
 */
renegotiate(
options: {
rejectUnauthorized?: boolean,
requestCert?: boolean
},
callback: (err: Error | null) => void): any;

/**
 * Set maximum TLS fragment size (default and maximum value is: 16384, minimum is: 512).
 * Smaller fragment size decreases buffering latency on the client: large fragments are buffered by
 * the TLS layer until the entire fragment is received and its integrity is verified;
 * large fragments can span multiple roundtrips, and their processing can be delayed due to packet
 * loss or reordering. However, smaller fragments add extra TLS framing bytes and CPU overhead,
 * which may decrease overall server throughput.
 * @param size - TLS fragment size (default and maximum value is: 16384, minimum is: 512).
 * @returns Returns true on success, false otherwise.
 */
setMaxSendFragment(size: number): boolean;

/**
 * events.EventEmitter
 * 1. OCSPResponse
 * 2. secureConnect
 */
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(event: "OCSPResponse", listener: (response: Buffer) => void): this;
addListener(event: "secureConnect", listener: () => void): this;
emit(event: string | Symbol, ...args: any[]): boolean;
emit(event: "OCSPResponse", response: Buffer): boolean;
emit(event: "secureConnect"): boolean;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "OCSPResponse", listener: (response: Buffer) => void): this;
on(event: "secureConnect", listener: () => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "OCSPResponse", listener: (response: Buffer) => void): this;
once(event: "secureConnect", listener: () => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "OCSPResponse", listener: (response: Buffer) => void): this;
prependListener(event: "secureConnect", listener: () => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "OCSPResponse", listener: (response: Buffer) => void): this;
prependOnceListener(event: "secureConnect", listener: () => void): this
}
	declare type TlsOptions = {
handshakeTimeout?: number,
requestCert?: boolean,
rejectUnauthorized?: boolean,
NPNProtocols?: string[]
| Buffer[]
| Uint8Array[]
| Buffer
| Uint8Array,
ALPNProtocols?: string[]
| Buffer[]
| Uint8Array[]
| Buffer
| Uint8Array,
SNICallback?: (
servername: string,
cb: (err: Error | null, ctx: SecureContext) => void) => void,
sessionTimeout?: number,
ticketKeys?: Buffer
} & SecureContextOptions

	declare type ConnectionOptions = {
host?: string,
port?: number,
path?: string,
socket?: net.NodeJS$Socket,
rejectUnauthorized?: boolean,
NPNProtocols?: string[]
| Buffer[]
| Uint8Array[]
| Buffer
| Uint8Array,
ALPNProtocols?: string[]
| Buffer[]
| Uint8Array[]
| Buffer
| Uint8Array,
checkServerIdentity?: typeof checkServerIdentity,
servername?: string,
session?: Buffer,
minDHSize?: number,
secureContext?: SecureContext,
lookup?: net.LookupFunction
} & SecureContextOptions

	declare class Server mixins net.Server {
addContext(hostName: string, credentials: {
key: string,
cert: string,
ca: string
}): void;

/**
 * events.EventEmitter
 * 1. tlsClientError
 * 2. newSession
 * 3. OCSPRequest
 * 4. resumeSession
 * 5. secureConnection
 */
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(
event: "tlsClientError",
listener: (err: Error, tlsSocket: TLSSocket) => void): this;
addListener(
event: "newSession",
listener: (
sessionId: any,
sessionData: any,
callback: (err: Error, resp: Buffer) => void) => void): this;
addListener(
event: "OCSPRequest",
listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void): this;
addListener(
event: "resumeSession",
listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
addListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;
emit(event: string | Symbol, ...args: any[]): boolean;
emit(event: "tlsClientError", err: Error, tlsSocket: TLSSocket): boolean;
emit(
event: "newSession",
sessionId: any,
sessionData: any,
callback: (err: Error, resp: Buffer) => void): boolean;
emit(
event: "OCSPRequest",
certificate: Buffer,
issuer: Buffer,
callback: Function): boolean;
emit(
event: "resumeSession",
sessionId: any,
callback: (err: Error, sessionData: any) => void): boolean;
emit(event: "secureConnection", tlsSocket: TLSSocket): boolean;
on(event: string, listener: (...args: any[]) => void): this;
on(
event: "tlsClientError",
listener: (err: Error, tlsSocket: TLSSocket) => void): this;
on(
event: "newSession",
listener: (
sessionId: any,
sessionData: any,
callback: (err: Error, resp: Buffer) => void) => void): this;
on(
event: "OCSPRequest",
listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void): this;
on(
event: "resumeSession",
listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
on(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(
event: "tlsClientError",
listener: (err: Error, tlsSocket: TLSSocket) => void): this;
once(
event: "newSession",
listener: (
sessionId: any,
sessionData: any,
callback: (err: Error, resp: Buffer) => void) => void): this;
once(
event: "OCSPRequest",
listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void): this;
once(
event: "resumeSession",
listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
once(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(
event: "tlsClientError",
listener: (err: Error, tlsSocket: TLSSocket) => void): this;
prependListener(
event: "newSession",
listener: (
sessionId: any,
sessionData: any,
callback: (err: Error, resp: Buffer) => void) => void): this;
prependListener(
event: "OCSPRequest",
listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void): this;
prependListener(
event: "resumeSession",
listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
prependListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(
event: "tlsClientError",
listener: (err: Error, tlsSocket: TLSSocket) => void): this;
prependOnceListener(
event: "newSession",
listener: (
sessionId: any,
sessionData: any,
callback: (err: Error, resp: Buffer) => void) => void): this;
prependOnceListener(
event: "OCSPRequest",
listener: (certificate: Buffer, issuer: Buffer, callback: Function) => void): this;
prependOnceListener(
event: "resumeSession",
listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void): this;
prependOnceListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this
}
	declare interface SecurePair {
encrypted: any,
cleartext: any
} 
	declare interface SecureContextOptions {
pfx?: string | Buffer | Array<string | Buffer | Object>,
key?: string | Buffer | Array<Buffer | Object>,
passphrase?: string,
cert?: string | Buffer | Array<string | Buffer>,
ca?: string | Buffer | Array<string | Buffer>,
ciphers?: string,
honorCipherOrder?: boolean,
ecdhCurve?: string,
clientCertEngine?: string,
crl?: string | Buffer | Array<string | Buffer>,
dhparam?: string | Buffer,
secureOptions?: number,
secureProtocol?: string,
sessionIdContext?: string
} 
	declare interface SecureContext {
context: any
} 
	declare function checkServerIdentity(host: string, cert: PeerCertificate): Error | void

	declare function createServer(
options: TlsOptions,
secureConnectionListener?: (socket: TLSSocket) => void): Server

	declare function connect(options: ConnectionOptions, secureConnectListener?: () => void): TLSSocket

	declare function connect(
port: number,
host?: string,
options?: ConnectionOptions,
secureConnectListener?: () => void): TLSSocket

	declare function connect(
port: number,
options?: ConnectionOptions,
secureConnectListener?: () => void): TLSSocket

	declare function createSecurePair(
credentials?: crypto.Credentials,
isServer?: boolean,
requestCert?: boolean,
rejectUnauthorized?: boolean): SecurePair

	declare function createSecureContext(details: SecureContextOptions): SecureContext

	declare function getCiphers(): string[]

	declare var DEFAULT_ECDH_CURVE: string;
    }

	declare module 'crypto' {
        import typeof * as stream from 'stream';

	declare interface Certificate {
exportChallenge(spkac: string | Buffer | NodeJS$NodeJS$TypedArray | DataView): Buffer,
exportPublicKey(spkac: string | Buffer | NodeJS$NodeJS$TypedArray | DataView): Buffer,
verifySpkac(spkac: Buffer | NodeJS$NodeJS$TypedArray | DataView): boolean
} 
	declare var Certificate: {
new (): Certificate,
(): Certificate
};
	
/**
 * @deprecated since v10.0.0
 */
declare var fips: boolean;
	declare interface CredentialDetails {
pfx: string,
key: string,
passphrase: string,
cert: string,
ca: string | string[],
crl: string | string[],
ciphers: string
} 
	declare interface Credentials {
context?: any
} 
	declare function createCredentials(details: CredentialDetails): Credentials

	declare function createHash(algorithm: string, options?: stream.internal$TransformOptions): Hash

	declare function createHmac(
algorithm: string,
key: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options?: stream.internal$TransformOptions): Hmac

	declare type Utf8AsciiLatin1Encoding = "utf8" | "ascii" | "latin1";
	declare type HexBase64Latin1Encoding = "latin1" | "hex" | "base64";
	declare type Utf8AsciiBinaryEncoding = "utf8" | "ascii" | "binary";
	declare type HexBase64BinaryEncoding = "binary" | "base64" | "hex";
	declare type ECDHKeyFormat = "compressed" | "uncompressed" | "hybrid";
	declare type Hash = {
update(data: string | Buffer | NodeJS$NodeJS$TypedArray | DataView): Hash,
update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Hash,
digest(): Buffer,
digest(encoding: HexBase64Latin1Encoding): string
} & NodeJS$NodeJS$ReadWriteStream

	declare type Hmac = {
update(data: string | Buffer | NodeJS$NodeJS$TypedArray | DataView): Hmac,
update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Hmac,
digest(): Buffer,
digest(encoding: HexBase64Latin1Encoding): string
} & NodeJS$NodeJS$ReadWriteStream

	declare type CipherCCMTypes = "aes-128-ccm" | "aes-192-ccm" | "aes-256-ccm";
	declare type CipherGCMTypes = "aes-128-gcm" | "aes-192-gcm" | "aes-256-gcm";
	declare type CipherCCMOptions = {
authTagLength: number
} & stream.internal$TransformOptions

	declare type CipherGCMOptions = {
authTagLength?: number
} & stream.internal$TransformOptions

	
/**
 * @deprecated since v10.0.0 use createCipheriv()
 */
declare function createCipher(
algorithm: CipherCCMTypes,
password: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options: CipherCCMOptions): CipherCCM

	
/**
 * @deprecated since v10.0.0 use createCipheriv()
 */
declare function createCipher(
algorithm: CipherGCMTypes,
password: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options?: CipherGCMOptions): CipherGCM

	
/**
 * @deprecated since v10.0.0 use createCipheriv()
 */
declare function createCipher(
algorithm: string,
password: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options?: stream.internal$TransformOptions): Cipher

	declare function createCipheriv(
algorithm: CipherCCMTypes,
key: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
iv: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options: CipherCCMOptions): CipherCCM

	declare function createCipheriv(
algorithm: CipherGCMTypes,
key: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
iv: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options?: CipherGCMOptions): CipherGCM

	declare function createCipheriv(
algorithm: string,
key: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
iv: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options?: stream.internal$TransformOptions): Cipher

	declare type Cipher = {
update(data: string | Buffer | NodeJS$NodeJS$TypedArray | DataView): Buffer,
update(data: string, input_encoding: Utf8AsciiBinaryEncoding): Buffer,
update(
data: Buffer | NodeJS$NodeJS$TypedArray | DataView,
output_encoding: HexBase64BinaryEncoding): string,
update(
data: Buffer | NodeJS$NodeJS$TypedArray | DataView,
input_encoding: any,
output_encoding: HexBase64BinaryEncoding): string,
update(
data: string,
input_encoding: Utf8AsciiBinaryEncoding,
output_encoding: HexBase64BinaryEncoding): string,
final(): Buffer,
final(output_encoding: string): string,
setAutoPadding(auto_padding?: boolean): this
} & NodeJS$NodeJS$ReadWriteStream

	declare type CipherCCM = {
setAAD(buffer: Buffer, options: {
plaintextLength: number
}): this,
getAuthTag(): Buffer
} & Cipher

	declare type CipherGCM = {
setAAD(buffer: Buffer, options?: {
plaintextLength: number
}): this,
getAuthTag(): Buffer
} & Cipher

	
/**
 * @deprecated since v10.0.0 use createCipheriv()
 */
declare function createDecipher(
algorithm: CipherCCMTypes,
password: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options: CipherCCMOptions): DecipherCCM

	
/**
 * @deprecated since v10.0.0 use createCipheriv()
 */
declare function createDecipher(
algorithm: CipherGCMTypes,
password: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options?: CipherGCMOptions): DecipherGCM

	
/**
 * @deprecated since v10.0.0 use createCipheriv()
 */
declare function createDecipher(
algorithm: string,
password: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options?: stream.internal$TransformOptions): Decipher

	declare function createDecipheriv(
algorithm: CipherCCMTypes,
key: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
iv: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options: CipherCCMOptions): DecipherCCM

	declare function createDecipheriv(
algorithm: CipherGCMTypes,
key: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
iv: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options?: CipherGCMOptions): DecipherGCM

	declare function createDecipheriv(
algorithm: string,
key: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
iv: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
options?: stream.internal$TransformOptions): Decipher

	declare type Decipher = {
update(data: Buffer | NodeJS$NodeJS$TypedArray | DataView): Buffer,
update(data: string, input_encoding: HexBase64BinaryEncoding): Buffer,
update(
data: Buffer | NodeJS$NodeJS$TypedArray | DataView,
input_encoding: any,
output_encoding: Utf8AsciiBinaryEncoding): string,
update(
data: string,
input_encoding: HexBase64BinaryEncoding,
output_encoding: Utf8AsciiBinaryEncoding): string,
final(): Buffer,
final(output_encoding: string): string,
setAutoPadding(auto_padding?: boolean): this
} & NodeJS$NodeJS$ReadWriteStream

	declare type DecipherCCM = {
setAuthTag(buffer: Buffer | NodeJS$NodeJS$TypedArray | DataView): this,
setAAD(
buffer: Buffer | NodeJS$NodeJS$TypedArray | DataView,
options: {
plaintextLength: number
}): this
} & Decipher

	declare type DecipherGCM = {
setAuthTag(buffer: Buffer | NodeJS$NodeJS$TypedArray | DataView): this,
setAAD(
buffer: Buffer | NodeJS$NodeJS$TypedArray | DataView,
options?: {
plaintextLength: number
}): this
} & Decipher

	declare function createSign(algorithm: string, options?: stream.internal$WritableOptions): Signer

	declare type Signer = {
update(data: string | Buffer | NodeJS$NodeJS$TypedArray | DataView): Signer,
update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Signer,
sign(
private_key: string | {
key: string,
passphrase?: string,
padding?: number,
saltLength?: number
}): Buffer,
sign(
private_key: string | {
key: string,
passphrase?: string,
padding?: number,
saltLength?: number
},
output_format: HexBase64Latin1Encoding): string
} & NodeJS$NodeJS$WritableStream

	declare function createVerify(algorith: string, options?: stream.internal$WritableOptions): Verify

	declare type Verify = {
update(data: string | Buffer | NodeJS$NodeJS$TypedArray | DataView): Verify,
update(data: string, input_encoding: Utf8AsciiLatin1Encoding): Verify,
verify(
object: string | Object,
signature: Buffer | NodeJS$NodeJS$TypedArray | DataView): boolean,
verify(
object: string | Object,
signature: string,
signature_format: HexBase64Latin1Encoding): boolean
} & NodeJS$NodeJS$WritableStream

	declare function createDiffieHellman(
prime_length: number,
generator?: number | Buffer | NodeJS$NodeJS$TypedArray | DataView): DiffieHellman

	declare function createDiffieHellman(prime: Buffer | NodeJS$NodeJS$TypedArray | DataView): DiffieHellman

	declare function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding): DiffieHellman

	declare function createDiffieHellman(
prime: string,
prime_encoding: HexBase64Latin1Encoding,
generator: number | Buffer | NodeJS$NodeJS$TypedArray | DataView): DiffieHellman

	declare function createDiffieHellman(
prime: string,
prime_encoding: HexBase64Latin1Encoding,
generator: string,
generator_encoding: HexBase64Latin1Encoding): DiffieHellman

	declare interface DiffieHellman {
generateKeys(): Buffer,
generateKeys(encoding: HexBase64Latin1Encoding): string,
computeSecret(other_public_key: Buffer | NodeJS$NodeJS$TypedArray | DataView): Buffer,
computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer,
computeSecret(
other_public_key: Buffer | NodeJS$NodeJS$TypedArray | DataView,
output_encoding: HexBase64Latin1Encoding): string,
computeSecret(
other_public_key: string,
input_encoding: HexBase64Latin1Encoding,
output_encoding: HexBase64Latin1Encoding): string,
getPrime(): Buffer,
getPrime(encoding: HexBase64Latin1Encoding): string,
getGenerator(): Buffer,
getGenerator(encoding: HexBase64Latin1Encoding): string,
getPublicKey(): Buffer,
getPublicKey(encoding: HexBase64Latin1Encoding): string,
getPrivateKey(): Buffer,
getPrivateKey(encoding: HexBase64Latin1Encoding): string,
setPublicKey(public_key: Buffer | NodeJS$NodeJS$TypedArray | DataView): void,
setPublicKey(public_key: string, encoding: string): void,
setPrivateKey(private_key: Buffer | NodeJS$NodeJS$TypedArray | DataView): void,
setPrivateKey(private_key: string, encoding: string): void,
verifyError: number
} 
	declare function getDiffieHellman(group_name: string): DiffieHellman

	declare function pbkdf2(
password: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
salt: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
iterations: number,
keylen: number,
digest: string,
callback: (err: Error | null, derivedKey: Buffer) => any): void

	declare function pbkdf2Sync(
password: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
salt: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
iterations: number,
keylen: number,
digest: string): Buffer

	declare function randomBytes(size: number): Buffer

	declare function randomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void

	declare function pseudoRandomBytes(size: number): Buffer

	declare function pseudoRandomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void

	declare function randomFillSync<T: Buffer | NodeJS$NodeJS$TypedArray | DataView>(
buffer: T,
offset?: number,
size?: number): T

	declare function randomFill<T: Buffer | NodeJS$NodeJS$TypedArray | DataView>(
buffer: T,
callback: (err: Error | null, buf: T) => void): void

	declare function randomFill<T: Buffer | NodeJS$NodeJS$TypedArray | DataView>(
buffer: T,
offset: number,
callback: (err: Error | null, buf: T) => void): void

	declare function randomFill<T: Buffer | NodeJS$NodeJS$TypedArray | DataView>(
buffer: T,
offset: number,
size: number,
callback: (err: Error | null, buf: T) => void): void

	declare interface ScryptOptions {
N?: number,
r?: number,
p?: number,
maxmem?: number
} 
	declare function scrypt(
password: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
salt: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
keylen: number,
callback: (err: Error | null, derivedKey: Buffer) => void): void

	declare function scrypt(
password: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
salt: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
keylen: number,
options: ScryptOptions,
callback: (err: Error | null, derivedKey: Buffer) => void): void

	declare function scryptSync(
password: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
salt: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
keylen: number,
options?: ScryptOptions): Buffer

	declare interface RsaPublicKey {
key: string,
padding?: number
} 
	declare interface RsaPrivateKey {
key: string,
passphrase?: string,
padding?: number
} 
	declare function publicEncrypt(
public_key: string | RsaPublicKey,
buffer: Buffer | NodeJS$NodeJS$TypedArray | DataView): Buffer

	declare function privateDecrypt(
private_key: string | RsaPrivateKey,
buffer: Buffer | NodeJS$NodeJS$TypedArray | DataView): Buffer

	declare function privateEncrypt(
private_key: string | RsaPrivateKey,
buffer: Buffer | NodeJS$NodeJS$TypedArray | DataView): Buffer

	declare function publicDecrypt(
public_key: string | RsaPublicKey,
buffer: Buffer | NodeJS$NodeJS$TypedArray | DataView): Buffer

	declare function getCiphers(): string[]

	declare function getCurves(): string[]

	declare function getHashes(): string[]

	declare class ECDH  {
static convertKey(
key: string | Buffer | NodeJS$NodeJS$TypedArray | DataView,
curve: string,
inputEncoding?: HexBase64Latin1Encoding,
outputEncoding?: "latin1" | "hex" | "base64",
win32$format?: "uncompressed" | "compressed" | "hybrid"): Buffer | string;
generateKeys(): Buffer;
generateKeys(encoding: HexBase64Latin1Encoding, win32$format?: ECDHKeyFormat): string;
computeSecret(other_public_key: Buffer | NodeJS$NodeJS$TypedArray | DataView): Buffer;
computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer;
computeSecret(
other_public_key: Buffer | NodeJS$NodeJS$TypedArray | DataView,
output_encoding: HexBase64Latin1Encoding): string;
computeSecret(
other_public_key: string,
input_encoding: HexBase64Latin1Encoding,
output_encoding: HexBase64Latin1Encoding): string;
getPrivateKey(): Buffer;
getPrivateKey(encoding: HexBase64Latin1Encoding): string;
getPublicKey(): Buffer;
getPublicKey(encoding: HexBase64Latin1Encoding, win32$format?: ECDHKeyFormat): string;
setPrivateKey(private_key: Buffer | NodeJS$NodeJS$TypedArray | DataView): void;
setPrivateKey(private_key: string, encoding: HexBase64Latin1Encoding): void
}
	declare function createECDH(curve_name: string): ECDH

	declare function timingSafeEqual(
a: Buffer | NodeJS$NodeJS$TypedArray | DataView,
b: Buffer | NodeJS$NodeJS$TypedArray | DataView): boolean

	
/**
 * @deprecated since v10.0.0
 */
declare var DEFAULT_ENCODING: string;
	declare export type KeyType = "rsa" | "dsa" | "ec";
	declare export type KeyFormat = "pem" | "der";
	declare interface BasePrivateKeyEncodingOptions<T: KeyFormat> {
win32$format: T,
cipher: string,
passphrase: string
} 
	declare interface RSAKeyPairOptions<PubF: KeyFormat, PrivF: KeyFormat> {

/**
 * Key size in bits
 */
modulusLength: number,

/**
 * @default 0x10001
 */
publicExponent?: number,
publicKeyEncoding: {
type: "pkcs1" | "spki",
win32$format: PubF
},
privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
type: "pkcs1" | "pkcs8"
}
} 
	declare interface DSAKeyPairOptions<PubF: KeyFormat, PrivF: KeyFormat> {

/**
 * Key size in bits
 */
modulusLength: number,

/**
 * Size of q in bits
 */
divisorLength: number,
publicKeyEncoding: {
type: "spki",
win32$format: PubF
},
privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
type: "pkcs8"
}
} 
	declare interface ECKeyPairOptions<PubF: KeyFormat, PrivF: KeyFormat> {

/**
 * Name of the curve to use.
 */
namedCurve: string,
publicKeyEncoding: {
type: "pkcs1" | "spki",
win32$format: PubF
},
privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
type: "sec1" | "pkcs8"
}
} 
	declare interface KeyPairSyncResult<T1: string | Buffer, T2: string | Buffer> {
publicKey: T1,
privateKey: T2
} 
	declare function generateKeyPairSync(
type: "rsa",
options: RSAKeyPairOptions<"pem", "pem">): KeyPairSyncResult<string, string>

	declare function generateKeyPairSync(
type: "rsa",
options: RSAKeyPairOptions<"pem", "der">): KeyPairSyncResult<string, Buffer>

	declare function generateKeyPairSync(
type: "rsa",
options: RSAKeyPairOptions<"der", "pem">): KeyPairSyncResult<Buffer, string>

	declare function generateKeyPairSync(
type: "rsa",
options: RSAKeyPairOptions<"der", "der">): KeyPairSyncResult<Buffer, Buffer>

	declare function generateKeyPairSync(
type: "dsa",
options: DSAKeyPairOptions<"pem", "pem">): KeyPairSyncResult<string, string>

	declare function generateKeyPairSync(
type: "dsa",
options: DSAKeyPairOptions<"pem", "der">): KeyPairSyncResult<string, Buffer>

	declare function generateKeyPairSync(
type: "dsa",
options: DSAKeyPairOptions<"der", "pem">): KeyPairSyncResult<Buffer, string>

	declare function generateKeyPairSync(
type: "dsa",
options: DSAKeyPairOptions<"der", "der">): KeyPairSyncResult<Buffer, Buffer>

	declare function generateKeyPairSync(
type: "ec",
options: ECKeyPairOptions<"pem", "pem">): KeyPairSyncResult<string, string>

	declare function generateKeyPairSync(
type: "ec",
options: ECKeyPairOptions<"pem", "der">): KeyPairSyncResult<string, Buffer>

	declare function generateKeyPairSync(
type: "ec",
options: ECKeyPairOptions<"der", "pem">): KeyPairSyncResult<Buffer, string>

	declare function generateKeyPairSync(
type: "ec",
options: ECKeyPairOptions<"der", "der">): KeyPairSyncResult<Buffer, Buffer>

	declare function generateKeyPair(
type: "rsa",
options: RSAKeyPairOptions<"pem", "pem">,
callback: (err: Error | null, publicKey: string, privateKey: string) => void): void

	declare function generateKeyPair(
type: "rsa",
options: RSAKeyPairOptions<"pem", "der">,
callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void

	declare function generateKeyPair(
type: "rsa",
options: RSAKeyPairOptions<"der", "pem">,
callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void

	declare function generateKeyPair(
type: "rsa",
options: RSAKeyPairOptions<"der", "der">,
callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void

	declare function generateKeyPair(
type: "dsa",
options: DSAKeyPairOptions<"pem", "pem">,
callback: (err: Error | null, publicKey: string, privateKey: string) => void): void

	declare function generateKeyPair(
type: "dsa",
options: DSAKeyPairOptions<"pem", "der">,
callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void

	declare function generateKeyPair(
type: "dsa",
options: DSAKeyPairOptions<"der", "pem">,
callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void

	declare function generateKeyPair(
type: "dsa",
options: DSAKeyPairOptions<"der", "der">,
callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void

	declare function generateKeyPair(
type: "ec",
options: ECKeyPairOptions<"pem", "pem">,
callback: (err: Error | null, publicKey: string, privateKey: string) => void): void

	declare function generateKeyPair(
type: "ec",
options: ECKeyPairOptions<"pem", "der">,
callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void

	declare function generateKeyPair(
type: "ec",
options: ECKeyPairOptions<"der", "pem">,
callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void

	declare function generateKeyPair(
type: "ec",
options: ECKeyPairOptions<"der", "der">,
callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void

	
      declare var npm$namespace$generateKeyPair: {
        __promisify__: typeof generateKeyPair$__promisify__,
        
      }
declare function generateKeyPair$__promisify__(
type: "rsa",
options: RSAKeyPairOptions<"pem", "pem">): Promise<{
publicKey: string,
privateKey: string
}>


declare function generateKeyPair$__promisify__(
type: "rsa",
options: RSAKeyPairOptions<"pem", "der">): Promise<{
publicKey: string,
privateKey: Buffer
}>


declare function generateKeyPair$__promisify__(
type: "rsa",
options: RSAKeyPairOptions<"der", "pem">): Promise<{
publicKey: Buffer,
privateKey: string
}>


declare function generateKeyPair$__promisify__(
type: "rsa",
options: RSAKeyPairOptions<"der", "der">): Promise<{
publicKey: Buffer,
privateKey: Buffer
}>


declare function generateKeyPair$__promisify__(
type: "dsa",
options: DSAKeyPairOptions<"pem", "pem">): Promise<{
publicKey: string,
privateKey: string
}>


declare function generateKeyPair$__promisify__(
type: "dsa",
options: DSAKeyPairOptions<"pem", "der">): Promise<{
publicKey: string,
privateKey: Buffer
}>


declare function generateKeyPair$__promisify__(
type: "dsa",
options: DSAKeyPairOptions<"der", "pem">): Promise<{
publicKey: Buffer,
privateKey: string
}>


declare function generateKeyPair$__promisify__(
type: "dsa",
options: DSAKeyPairOptions<"der", "der">): Promise<{
publicKey: Buffer,
privateKey: Buffer
}>


declare function generateKeyPair$__promisify__(
type: "ec",
options: ECKeyPairOptions<"pem", "pem">): Promise<{
publicKey: string,
privateKey: string
}>


declare function generateKeyPair$__promisify__(
type: "ec",
options: ECKeyPairOptions<"pem", "der">): Promise<{
publicKey: string,
privateKey: Buffer
}>


declare function generateKeyPair$__promisify__(
type: "ec",
options: ECKeyPairOptions<"der", "pem">): Promise<{
publicKey: Buffer,
privateKey: string
}>


declare function generateKeyPair$__promisify__(
type: "ec",
options: ECKeyPairOptions<"der", "der">): Promise<{
publicKey: Buffer,
privateKey: Buffer
}>

    }

	declare module 'stream' {
        import typeof * as events from 'events';

	declare class internal mixins events.internal$EventEmitter {
pipe<T: NodeJS$NodeJS$WritableStream>(
destination: T,
options?: {
end?: boolean
}): T
}
	
      declare var npm$namespace$internal: {
        finished: typeof internal$finished,
pipeline: typeof internal$pipeline,
        
      }
declare class internal$Stream mixins internal {}

declare interface internal$ReadableOptions {
highWaterMark?: number,
encoding?: string,
objectMode?: boolean,
read(size: number): void,
destroy(error: Error | null, callback: (error: Error | null) => void): void
} 

declare class internal$Readable mixins internal$Stream, NodeJS$NodeJS$ReadableStream {
readable: boolean;
readableHighWaterMark: number;
readableLength: number;
constructor(opts?: internal$ReadableOptions): this;
_read(size: number): void;
read(size?: number): any;
setEncoding(encoding: string): this;
pause(): this;
resume(): this;
isPaused(): boolean;
unpipe(destination?: NodeJS$NodeJS$WritableStream): this;
unshift(chunk: any): void;
wrap(oldStream: NodeJS$NodeJS$ReadableStream): this;
push(chunk: any, encoding?: string): boolean;
_destroy(error: Error | null, callback: (error: Error | null) => void): void;
destroy(error?: Error): void;

/**
 * Event emitter
 * The defined events on documents including:
 * 1. close
 * 2. data
 * 3. end
 * 4. readable
 * 5. error
 */
addListener(event: "close", listener: () => void): this;
addListener(event: "data", listener: (chunk: any) => void): this;
addListener(event: "end", listener: () => void): this;
addListener(event: "readable", listener: () => void): this;
addListener(event: "error", listener: (err: Error) => void): this;
addListener(event: string | Symbol, listener: (...args: any[]) => void): this;
emit(event: "close"): boolean;
emit(event: "data", chunk: any): boolean;
emit(event: "end"): boolean;
emit(event: "readable"): boolean;
emit(event: "error", err: Error): boolean;
emit(event: string | Symbol, ...args: any[]): boolean;
on(event: "close", listener: () => void): this;
on(event: "data", listener: (chunk: any) => void): this;
on(event: "end", listener: () => void): this;
on(event: "readable", listener: () => void): this;
on(event: "error", listener: (err: Error) => void): this;
on(event: string | Symbol, listener: (...args: any[]) => void): this;
once(event: "close", listener: () => void): this;
once(event: "data", listener: (chunk: any) => void): this;
once(event: "end", listener: () => void): this;
once(event: "readable", listener: () => void): this;
once(event: "error", listener: (err: Error) => void): this;
once(event: string | Symbol, listener: (...args: any[]) => void): this;
prependListener(event: "close", listener: () => void): this;
prependListener(event: "data", listener: (chunk: any) => void): this;
prependListener(event: "end", listener: () => void): this;
prependListener(event: "readable", listener: () => void): this;
prependListener(event: "error", listener: (err: Error) => void): this;
prependListener(event: string | Symbol, listener: (...args: any[]) => void): this;
prependOnceListener(event: "close", listener: () => void): this;
prependOnceListener(event: "data", listener: (chunk: any) => void): this;
prependOnceListener(event: "end", listener: () => void): this;
prependOnceListener(event: "readable", listener: () => void): this;
prependOnceListener(event: "error", listener: (err: Error) => void): this;
prependOnceListener(event: string | Symbol, listener: (...args: any[]) => void): this;
removeListener(event: "close", listener: () => void): this;
removeListener(event: "data", listener: (chunk: any) => void): this;
removeListener(event: "end", listener: () => void): this;
removeListener(event: "readable", listener: () => void): this;
removeListener(event: "error", listener: (err: Error) => void): this;
removeListener(event: string | Symbol, listener: (...args: any[]) => void): this;
undefined(): AsyncIterableIterator<any>
}

declare interface internal$WritableOptions {
highWaterMark?: number,
decodeStrings?: boolean,
objectMode?: boolean,
write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void,
writev(
chunks: Array<{
chunk: any,
encoding: string
}>,
callback: (error?: Error | null) => void): void,
destroy(error: Error | null, callback: (error: Error | null) => void): void,
final(callback: (error?: Error | null) => void): void
} 

declare class internal$Writable mixins internal$Stream, NodeJS$NodeJS$WritableStream {
writable: boolean;
writableHighWaterMark: number;
writableLength: number;
constructor(opts?: internal$WritableOptions): this;
_write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
_writev(
chunks: Array<{
chunk: any,
encoding: string
}>,
callback: (error?: Error | null) => void): void;
_destroy(error: Error | null, callback: (error: Error | null) => void): void;
_final(callback: (error?: Error | null) => void): void;
write(chunk: any, cb?: (error: Error | null | void) => void): boolean;
write(
chunk: any,
encoding?: string,
cb?: (error: Error | null | void) => void): boolean;
setDefaultEncoding(encoding: string): this;
end(cb?: () => void): void;
end(chunk: any, cb?: () => void): void;
end(chunk: any, encoding?: string, cb?: () => void): void;
cork(): void;
uncork(): void;
destroy(error?: Error): void;

/**
 * Event emitter
 * The defined events on documents including:
 * 1. close
 * 2. drain
 * 3. error
 * 4. finish
 * 5. pipe
 * 6. unpipe
 */
addListener(event: "close", listener: () => void): this;
addListener(event: "drain", listener: () => void): this;
addListener(event: "error", listener: (err: Error) => void): this;
addListener(event: "finish", listener: () => void): this;
addListener(event: "pipe", listener: (src: internal$Readable) => void): this;
addListener(event: "unpipe", listener: (src: internal$Readable) => void): this;
addListener(event: string | Symbol, listener: (...args: any[]) => void): this;
emit(event: "close"): boolean;
emit(event: "drain"): boolean;
emit(event: "error", err: Error): boolean;
emit(event: "finish"): boolean;
emit(event: "pipe", src: internal$Readable): boolean;
emit(event: "unpipe", src: internal$Readable): boolean;
emit(event: string | Symbol, ...args: any[]): boolean;
on(event: "close", listener: () => void): this;
on(event: "drain", listener: () => void): this;
on(event: "error", listener: (err: Error) => void): this;
on(event: "finish", listener: () => void): this;
on(event: "pipe", listener: (src: internal$Readable) => void): this;
on(event: "unpipe", listener: (src: internal$Readable) => void): this;
on(event: string | Symbol, listener: (...args: any[]) => void): this;
once(event: "close", listener: () => void): this;
once(event: "drain", listener: () => void): this;
once(event: "error", listener: (err: Error) => void): this;
once(event: "finish", listener: () => void): this;
once(event: "pipe", listener: (src: internal$Readable) => void): this;
once(event: "unpipe", listener: (src: internal$Readable) => void): this;
once(event: string | Symbol, listener: (...args: any[]) => void): this;
prependListener(event: "close", listener: () => void): this;
prependListener(event: "drain", listener: () => void): this;
prependListener(event: "error", listener: (err: Error) => void): this;
prependListener(event: "finish", listener: () => void): this;
prependListener(event: "pipe", listener: (src: internal$Readable) => void): this;
prependListener(event: "unpipe", listener: (src: internal$Readable) => void): this;
prependListener(event: string | Symbol, listener: (...args: any[]) => void): this;
prependOnceListener(event: "close", listener: () => void): this;
prependOnceListener(event: "drain", listener: () => void): this;
prependOnceListener(event: "error", listener: (err: Error) => void): this;
prependOnceListener(event: "finish", listener: () => void): this;
prependOnceListener(event: "pipe", listener: (src: internal$Readable) => void): this;
prependOnceListener(event: "unpipe", listener: (src: internal$Readable) => void): this;
prependOnceListener(event: string | Symbol, listener: (...args: any[]) => void): this;
removeListener(event: "close", listener: () => void): this;
removeListener(event: "drain", listener: () => void): this;
removeListener(event: "error", listener: (err: Error) => void): this;
removeListener(event: "finish", listener: () => void): this;
removeListener(event: "pipe", listener: (src: internal$Readable) => void): this;
removeListener(event: "unpipe", listener: (src: internal$Readable) => void): this;
removeListener(event: string | Symbol, listener: (...args: any[]) => void): this
}

declare type internal$DuplexOptions = {
allowHalfOpen?: boolean,
readableObjectMode?: boolean,
writableObjectMode?: boolean,
read(size: number): void,
write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void,
writev(
chunks: Array<{
chunk: any,
encoding: string
}>,
callback: (error?: Error | null) => void): void,
final(callback: (error?: Error | null) => void): void,
destroy(error: Error | null, callback: (error: Error | null) => void): void
} & internal$ReadableOptions & internal$WritableOptions


declare class internal$Duplex mixins internal$Readable, internal$Writable {
writable: boolean;
writableHighWaterMark: number;
writableLength: number;
constructor(opts?: internal$DuplexOptions): this;
_write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
_writev(
chunks: Array<{
chunk: any,
encoding: string
}>,
callback: (error?: Error | null) => void): void;
_destroy(error: Error | null, callback: (error: Error | null) => void): void;
_final(callback: (error?: Error | null) => void): void;
write(chunk: any, cb?: (error: Error | null | void) => void): boolean;
write(
chunk: any,
encoding?: string,
cb?: (error: Error | null | void) => void): boolean;
setDefaultEncoding(encoding: string): this;
end(cb?: () => void): void;
end(chunk: any, cb?: () => void): void;
end(chunk: any, encoding?: string, cb?: () => void): void;
cork(): void;
uncork(): void
}

declare type internal$TransformCallback = (error?: Error, data?: any) => void;

declare type internal$TransformOptions = {
read(size: number): void,
write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void,
writev(
chunks: Array<{
chunk: any,
encoding: string
}>,
callback: (error?: Error | null) => void): void,
final(callback: (error?: Error | null) => void): void,
destroy(error: Error | null, callback: (error: Error | null) => void): void,
transform(chunk: any, encoding: string, callback: internal$TransformCallback): void,
flush(callback: internal$TransformCallback): void
} & internal$DuplexOptions


declare class internal$Transform mixins internal$Duplex {
constructor(opts?: internal$TransformOptions): this;
_transform(chunk: any, encoding: string, callback: internal$TransformCallback): void;
_flush(callback: internal$TransformCallback): void
}

declare class internal$PassThrough mixins internal$Transform {}

declare function internal$finished(
stream: NodeJS$NodeJS$ReadableStream | NodeJS$NodeJS$WritableStream | NodeJS$NodeJS$ReadWriteStream,
callback: (err?: NodeJS$NodeJS$ErrnoException) => void): () => void



      declare var npm$namespace$finished: {
        __promisify__: typeof finished$__promisify__,
        
      }
declare function finished$__promisify__(
stream: NodeJS$NodeJS$ReadableStream | NodeJS$NodeJS$WritableStream | NodeJS$NodeJS$ReadWriteStream): Promise<void>


declare function internal$pipeline<T: NodeJS$NodeJS$WritableStream>(
stream1: NodeJS$NodeJS$ReadableStream,
stream2: T,
callback?: (err: NodeJS$NodeJS$ErrnoException) => void): T


declare function internal$pipeline<T: NodeJS$NodeJS$WritableStream>(
stream1: NodeJS$NodeJS$ReadableStream,
stream2: NodeJS$NodeJS$ReadWriteStream,
stream3: T,
callback?: (err: NodeJS$NodeJS$ErrnoException) => void): T


declare function internal$pipeline<T: NodeJS$NodeJS$WritableStream>(
stream1: NodeJS$NodeJS$ReadableStream,
stream2: NodeJS$NodeJS$ReadWriteStream,
stream3: NodeJS$NodeJS$ReadWriteStream,
stream4: T,
callback?: (err: NodeJS$NodeJS$ErrnoException) => void): T


declare function internal$pipeline<T: NodeJS$NodeJS$WritableStream>(
stream1: NodeJS$NodeJS$ReadableStream,
stream2: NodeJS$NodeJS$ReadWriteStream,
stream3: NodeJS$NodeJS$ReadWriteStream,
stream4: NodeJS$NodeJS$ReadWriteStream,
stream5: T,
callback?: (err: NodeJS$NodeJS$ErrnoException) => void): T


declare function internal$pipeline(
streams: Array<NodeJS$NodeJS$ReadableStream | NodeJS$NodeJS$WritableStream | NodeJS$NodeJS$ReadWriteStream>,
callback?: (err: NodeJS$NodeJS$ErrnoException) => void): NodeJS$NodeJS$WritableStream


declare function internal$pipeline(
stream1: NodeJS$NodeJS$ReadableStream,
stream2: NodeJS$NodeJS$ReadWriteStream | NodeJS$NodeJS$WritableStream,
...streams: Array<NodeJS$NodeJS$ReadWriteStream | NodeJS$NodeJS$WritableStream | ((err: NodeJS$NodeJS$ErrnoException) => void)>): NodeJS$NodeJS$WritableStream



      declare var npm$namespace$pipeline: {
        __promisify__: typeof pipeline$__promisify__,
        
      }
declare function pipeline$__promisify__(
stream1: NodeJS$NodeJS$ReadableStream,
stream2: NodeJS$NodeJS$WritableStream): Promise<void>


declare function pipeline$__promisify__(
stream1: NodeJS$NodeJS$ReadableStream,
stream2: NodeJS$NodeJS$ReadWriteStream,
stream3: NodeJS$NodeJS$WritableStream): Promise<void>


declare function pipeline$__promisify__(
stream1: NodeJS$NodeJS$ReadableStream,
stream2: NodeJS$NodeJS$ReadWriteStream,
stream3: NodeJS$NodeJS$ReadWriteStream,
stream4: NodeJS$NodeJS$WritableStream): Promise<void>


declare function pipeline$__promisify__(
stream1: NodeJS$NodeJS$ReadableStream,
stream2: NodeJS$NodeJS$ReadWriteStream,
stream3: NodeJS$NodeJS$ReadWriteStream,
stream4: NodeJS$NodeJS$ReadWriteStream,
stream5: NodeJS$NodeJS$WritableStream): Promise<void>


declare function pipeline$__promisify__(
streams: Array<NodeJS$NodeJS$ReadableStream | NodeJS$NodeJS$WritableStream | NodeJS$NodeJS$ReadWriteStream>): Promise<void>


declare function pipeline$__promisify__(
stream1: NodeJS$NodeJS$ReadableStream,
stream2: NodeJS$NodeJS$ReadWriteStream | NodeJS$NodeJS$WritableStream,
...streams: Array<NodeJS$NodeJS$ReadWriteStream | NodeJS$NodeJS$WritableStream>): Promise<void>

	declare module.exports: typeof internal

    }

	declare module 'util' {
        declare type InspectOptions = {} & NodeJS$NodeJS$InspectOptions

	declare function format(win32$format: any, ...param: any[]): string

	declare function formatWithOptions(
inspectOptions: NodeJS$InspectOptions,
win32$format: string,
...param: any[]): string

	
/**
 * @deprecated since v0.11.3 - use `console.error()` instead.
 */
declare function debug(string: string): void

	
/**
 * @deprecated since v0.11.3 - use `console.error()` instead.
 */
declare function error(...param: any[]): void

	
/**
 * @deprecated since v0.11.3 - use `console.log()` instead.
 */
declare function puts(...param: any[]): void

	
/**
 * @deprecated since v0.11.3 - use `console.log()` instead.
 */
declare function print(...param: any[]): void

	
/**
 * @deprecated since v0.11.3 - use a third party module instead.
 */
declare function log(string: string): void

	declare var inspect: {
(object: any, showHidden?: boolean, depth?: number | null, color?: boolean): string,
(object: any, options: NodeJS$InspectOptions): string,
colors: {
[color: string]: [number, number] | void
},
styles: {
[style: string]: string | void
},
defaultOptions: NodeJS$InspectOptions,
custom: Symbol
};
	
/**
 * @deprecated since v4.0.0 - use `Array.isArray()` instead.
 */
declare function isArray(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `util.types.isRegExp()` instead.
 */
declare function isRegExp(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `util.types.isDate()` instead.
 */
declare function isDate(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `util.types.isNativeError()` instead.
 */
declare function isError(object: any): boolean

	declare function inherits(function Object() { [native code] }: any, superConstructor: any): void

	declare function debuglog(key: string): (msg: string, ...param: any[]) => void

	
/**
 * @deprecated since v4.0.0 - use `typeof value === 'boolean'` instead.
 */
declare function isBoolean(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `Buffer.isBuffer()` instead.
 */
declare function isBuffer(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `typeof value === 'function'` instead.
 */
declare function isFunction(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `value === null` instead.
 */
declare function isNull(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `value === null || value === undefined` instead.
 */
declare function isNullOrUndefined(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `typeof value === 'number'` instead.
 */
declare function isNumber(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `value !== null && typeof value === 'object'` instead.
 */
declare function isObject(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `(typeof value !== 'object' && typeof value !== 'function') || value === null` instead.
 */
declare function isPrimitive(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `typeof value === 'string'` instead.
 */
declare function isString(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `typeof value === 'symbol'` instead.
 */
declare function isSymbol(object: any): boolean

	
/**
 * @deprecated since v4.0.0 - use `value === undefined` instead.
 */
declare function isUndefined(object: any): boolean

	declare function deprecate<T: Function>(fn: T, message: string): T

	declare function isDeepStrictEqual(val1: any, val2: any): boolean

	declare type CustomPromisify<TCustom: Function> = {
pipeline$__promisify__: TCustom
} & Function

	declare function callbackify(
fn: () => Promise<void>): (callback: (err: NodeJS$NodeJS$ErrnoException) => void) => void

	declare function callbackify<TResult>(
fn: () => Promise<TResult>): (callback: (err: NodeJS$NodeJS$ErrnoException, result: TResult) => void) => void

	declare function callbackify<T1>(
fn: (arg1: T1) => Promise<void>): (arg1: T1, callback: (err: NodeJS$NodeJS$ErrnoException) => void) => void

	declare function callbackify<T1, TResult>(
fn: (arg1: T1) => Promise<TResult>): (
arg1: T1,
callback: (err: NodeJS$NodeJS$ErrnoException, result: TResult) => void) => void

	declare function callbackify<T1, T2>(
fn: (arg1: T1, arg2: T2) => Promise<void>): (
arg1: T1,
arg2: T2,
callback: (err: NodeJS$NodeJS$ErrnoException) => void) => void

	declare function callbackify<T1, T2, TResult>(
fn: (arg1: T1, arg2: T2) => Promise<TResult>): (
arg1: T1,
arg2: T2,
callback: (err: NodeJS$NodeJS$ErrnoException, result: TResult) => void) => void

	declare function callbackify<T1, T2, T3>(
fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<void>): (
arg1: T1,
arg2: T2,
arg3: T3,
callback: (err: NodeJS$NodeJS$ErrnoException) => void) => void

	declare function callbackify<T1, T2, T3, TResult>(
fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>): (
arg1: T1,
arg2: T2,
arg3: T3,
callback: (err: NodeJS$NodeJS$ErrnoException, result: TResult) => void) => void

	declare function callbackify<T1, T2, T3, T4>(
fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>): (
arg1: T1,
arg2: T2,
arg3: T3,
arg4: T4,
callback: (err: NodeJS$NodeJS$ErrnoException) => void) => void

	declare function callbackify<T1, T2, T3, T4, TResult>(
fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>): (
arg1: T1,
arg2: T2,
arg3: T3,
arg4: T4,
callback: (err: NodeJS$NodeJS$ErrnoException, result: TResult) => void) => void

	declare function callbackify<T1, T2, T3, T4, T5>(
fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>): (
arg1: T1,
arg2: T2,
arg3: T3,
arg4: T4,
arg5: T5,
callback: (err: NodeJS$NodeJS$ErrnoException) => void) => void

	declare function callbackify<T1, T2, T3, T4, T5, TResult>(
fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>): (
arg1: T1,
arg2: T2,
arg3: T3,
arg4: T4,
arg5: T5,
callback: (err: NodeJS$NodeJS$ErrnoException, result: TResult) => void) => void

	declare function callbackify<T1, T2, T3, T4, T5, T6>(
fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<void>): (
arg1: T1,
arg2: T2,
arg3: T3,
arg4: T4,
arg5: T5,
arg6: T6,
callback: (err: NodeJS$NodeJS$ErrnoException) => void) => void

	declare function callbackify<T1, T2, T3, T4, T5, T6, TResult>(
fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<TResult>): (
arg1: T1,
arg2: T2,
arg3: T3,
arg4: T4,
arg5: T5,
arg6: T6,
callback: (err: NodeJS$NodeJS$ErrnoException, result: TResult) => void) => void

	declare function promisify<TCustom: Function>(fn: CustomPromisify<TCustom>): TCustom

	declare function promisify<TResult>(
fn: (callback: (err: Error | null, result: TResult) => void) => void): () => Promise<TResult>

	declare function promisify(fn: (callback: (err?: Error | null) => void) => void): () => Promise<void>

	declare function promisify<T1, TResult>(
fn: (arg1: T1, callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1) => Promise<TResult>

	declare function promisify<T1>(
fn: (arg1: T1, callback: (err?: Error | null) => void) => void): (arg1: T1) => Promise<void>

	declare function promisify<T1, T2, TResult>(
fn: (
arg1: T1,
arg2: T2,
callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1, arg2: T2) => Promise<TResult>

	declare function promisify<T1, T2>(
fn: (arg1: T1, arg2: T2, callback: (err?: Error | null) => void) => void): (arg1: T1, arg2: T2) => Promise<void>

	declare function promisify<T1, T2, T3, TResult>(
fn: (
arg1: T1,
arg2: T2,
arg3: T3,
callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>

	declare function promisify<T1, T2, T3>(
fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err?: Error | null) => void) => void): (arg1: T1, arg2: T2, arg3: T3) => Promise<void>

	declare function promisify<T1, T2, T3, T4, TResult>(
fn: (
arg1: T1,
arg2: T2,
arg3: T3,
arg4: T4,
callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>

	declare function promisify<T1, T2, T3, T4>(
fn: (
arg1: T1,
arg2: T2,
arg3: T3,
arg4: T4,
callback: (err?: Error | null) => void) => void): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>

	declare function promisify<T1, T2, T3, T4, T5, TResult>(
fn: (
arg1: T1,
arg2: T2,
arg3: T3,
arg4: T4,
arg5: T5,
callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>

	declare function promisify<T1, T2, T3, T4, T5>(
fn: (
arg1: T1,
arg2: T2,
arg3: T3,
arg4: T4,
arg5: T5,
callback: (err?: Error | null) => void) => void): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>

	declare function promisify(fn: Function): Function

	
      declare var npm$namespace$promisify: {
        
        custom: typeof promisify$custom,
      }
declare var promisify$custom: Symbol;
	
      declare var npm$namespace$types: {
        isAnyArrayBuffer: typeof types$isAnyArrayBuffer,
isArgumentsObject: typeof types$isArgumentsObject,
isArrayBuffer: typeof types$isArrayBuffer,
isAsyncFunction: typeof types$isAsyncFunction,
isBooleanObject: typeof types$isBooleanObject,
isBoxedPrimitive: typeof types$isBoxedPrimitive,
isDataView: typeof types$isDataView,
isDate: typeof types$isDate,
isExternal: typeof types$isExternal,
isFloat32Array: typeof types$isFloat32Array,
isFloat64Array: typeof types$isFloat64Array,
isGeneratorFunction: typeof types$isGeneratorFunction,
isGeneratorObject: typeof types$isGeneratorObject,
isInt8Array: typeof types$isInt8Array,
isInt16Array: typeof types$isInt16Array,
isInt32Array: typeof types$isInt32Array,
isMap: typeof types$isMap,
isMapIterator: typeof types$isMapIterator,
isNativeError: typeof types$isNativeError,
isNumberObject: typeof types$isNumberObject,
isPromise: typeof types$isPromise,
isProxy: typeof types$isProxy,
isRegExp: typeof types$isRegExp,
isSet: typeof types$isSet,
isSetIterator: typeof types$isSetIterator,
isSharedArrayBuffer: typeof types$isSharedArrayBuffer,
isStringObject: typeof types$isStringObject,
isSymbolObject: typeof types$isSymbolObject,
isTypedArray: typeof types$isTypedArray,
isUint8Array: typeof types$isUint8Array,
isUint8ClampedArray: typeof types$isUint8ClampedArray,
isUint16Array: typeof types$isUint16Array,
isUint32Array: typeof types$isUint32Array,
isWeakMap: typeof types$isWeakMap,
isWeakSet: typeof types$isWeakSet,
isWebAssemblyCompiledModule: typeof types$isWebAssemblyCompiledModule,
        
      }
declare function types$isAnyArrayBuffer(object: any): boolean


declare function types$isArgumentsObject(object: any): boolean


declare function types$isArrayBuffer(object: any): boolean


declare function types$isAsyncFunction(object: any): boolean


declare function types$isBooleanObject(object: any): boolean


declare function types$isBoxedPrimitive(object: any): boolean


declare function types$isDataView(object: any): boolean


declare function types$isDate(object: any): boolean


declare function types$isExternal(object: any): boolean


declare function types$isFloat32Array(object: any): boolean


declare function types$isFloat64Array(object: any): boolean


declare function types$isGeneratorFunction(object: any): boolean


declare function types$isGeneratorObject(object: any): boolean


declare function types$isInt8Array(object: any): boolean


declare function types$isInt16Array(object: any): boolean


declare function types$isInt32Array(object: any): boolean


declare function types$isMap(object: any): boolean


declare function types$isMapIterator(object: any): boolean


declare function types$isNativeError(object: any): boolean


declare function types$isNumberObject(object: any): boolean


declare function types$isPromise(object: any): boolean


declare function types$isProxy(object: any): boolean


declare function types$isRegExp(object: any): boolean


declare function types$isSet(object: any): boolean


declare function types$isSetIterator(object: any): boolean


declare function types$isSharedArrayBuffer(object: any): boolean


declare function types$isStringObject(object: any): boolean


declare function types$isSymbolObject(object: any): boolean


declare function types$isTypedArray(object: any): boolean


declare function types$isUint8Array(object: any): boolean


declare function types$isUint8ClampedArray(object: any): boolean


declare function types$isUint16Array(object: any): boolean


declare function types$isUint32Array(object: any): boolean


declare function types$isWeakMap(object: any): boolean


declare function types$isWeakSet(object: any): boolean


declare function types$isWebAssemblyCompiledModule(object: any): boolean

	declare class TextDecoder  {
encoding: string;
fatal: boolean;
ignoreBOM: boolean;
constructor(encoding?: string, options?: {
fatal?: boolean,
ignoreBOM?: boolean
}): this;
decode(
input?: NodeJS$NodeJS$TypedArray | DataView | ArrayBuffer | null,
options?: {
stream?: boolean
}): string
}
	declare class TextEncoder  {
encoding: string;
constructor(): this;
encode(input?: string): Uint8Array
}
    }

	declare module 'assert' {
        declare function internal(value: any, message?: string | Error): void

	
      declare var npm$namespace$internal: {
        fail: typeof internal$fail,
ok: typeof internal$ok,
equal: typeof internal$equal,
notEqual: typeof internal$notEqual,
deepEqual: typeof internal$deepEqual,
notDeepEqual: typeof internal$notDeepEqual,
strictEqual: typeof internal$strictEqual,
notStrictEqual: typeof internal$notStrictEqual,
deepStrictEqual: typeof internal$deepStrictEqual,
notDeepStrictEqual: typeof internal$notDeepStrictEqual,
throws: typeof internal$throws,
doesNotThrow: typeof internal$doesNotThrow,
ifError: typeof internal$ifError,
rejects: typeof internal$rejects,
doesNotReject: typeof internal$doesNotReject,
        strict: typeof internal$strict,
      }
declare class internal$AssertionError mixins Error {
name: string;
message: string;
actual: any;
expected: any;
operator: string;
generatedMessage: boolean;
code: "ERR_ASSERTION";
constructor(options?: {
message?: string,
actual?: any,
expected?: any,
operator?: string,
stackStartFn?: Function
}): this
}

declare function internal$fail(message?: string | Error): empty



/**
 * @deprecated since v10.0.0 - use fail([message]) or other assert functions instead.
 */
declare function internal$fail(
actual: any,
expected: any,
message?: string | Error,
operator?: string,
stackStartFn?: Function): empty


declare function internal$ok(value: any, message?: string | Error): void



/**
 * @deprecated since v9.9.0 - use strictEqual() instead.
 */
declare function internal$equal(actual: any, expected: any, message?: string | Error): void



/**
 * @deprecated since v9.9.0 - use notStrictEqual() instead.
 */
declare function internal$notEqual(actual: any, expected: any, message?: string | Error): void



/**
 * @deprecated since v9.9.0 - use deepStrictEqual() instead.
 */
declare function internal$deepEqual(actual: any, expected: any, message?: string | Error): void



/**
 * @deprecated since v9.9.0 - use notDeepStrictEqual() instead.
 */
declare function internal$notDeepEqual(actual: any, expected: any, message?: string | Error): void


declare function internal$strictEqual(actual: any, expected: any, message?: string | Error): void


declare function internal$notStrictEqual(actual: any, expected: any, message?: string | Error): void


declare function internal$deepStrictEqual(actual: any, expected: any, message?: string | Error): void


declare function internal$notDeepStrictEqual(actual: any, expected: any, message?: string | Error): void


declare function internal$throws(block: Function, message?: string | Error): void


declare function internal$throws(
block: Function,
error: RegExp | Function | Object | Error,
message?: string | Error): void


declare function internal$doesNotThrow(block: Function, message?: string | Error): void


declare function internal$doesNotThrow(block: Function, error: RegExp | Function, message?: string | Error): void


declare function internal$ifError(value: any): void


declare function internal$rejects(block: Function | Promise<any>, message?: string | Error): Promise<void>


declare function internal$rejects(
block: Function | Promise<any>,
error: RegExp | Function | Object | Error,
message?: string | Error): Promise<void>


declare function internal$doesNotReject(block: Function | Promise<any>, message?: string | Error): Promise<void>


declare function internal$doesNotReject(
block: Function | Promise<any>,
error: RegExp | Function,
message?: string | Error): Promise<void>


declare var internal$strict: typeof internal;
	declare module.exports: typeof internal

    }

	declare module 'tty' {
        import typeof * as net from 'net';

	declare function isatty(fd: number): boolean

	declare class ReadStream mixins net.NodeJS$Socket {
isRaw: boolean;
setRawMode(mode: boolean): void;
isTTY: boolean
}
	declare class WriteStream mixins net.NodeJS$Socket {
columns: number;
rows: number;
isTTY: boolean
}
    }

	declare module 'domain' {
        import typeof * as events from 'events';

	declare class Domain mixins events.internal$EventEmitter, NodeJS$NodeJS$Domain {
run(fn: Function): void;
add(emitter: events.internal$EventEmitter): void;
remove(emitter: events.internal$EventEmitter): void;
bind(cb: (err: Error, data: any) => any): any;
intercept(cb: (data: any) => any): any;
members: any[];
enter(): void;
exit(): void
}
	declare function create(): NodeJS$Domain

    }

	declare module 'constants' {
        declare var E2BIG: number;
	declare var EACCES: number;
	declare var EADDRINUSE: number;
	declare var EADDRNOTAVAIL: number;
	declare var EAFNOSUPPORT: number;
	declare var EAGAIN: number;
	declare var EALREADY: number;
	declare var EBADF: number;
	declare var EBADMSG: number;
	declare var EBUSY: number;
	declare var ECANCELED: number;
	declare var ECHILD: number;
	declare var ECONNABORTED: number;
	declare var ECONNREFUSED: number;
	declare var ECONNRESET: number;
	declare var EDEADLK: number;
	declare var EDESTADDRREQ: number;
	declare var EDOM: number;
	declare var EEXIST: number;
	declare var EFAULT: number;
	declare var EFBIG: number;
	declare var EHOSTUNREACH: number;
	declare var EIDRM: number;
	declare var EILSEQ: number;
	declare var EINPROGRESS: number;
	declare var EINTR: number;
	declare var EINVAL: number;
	declare var EIO: number;
	declare var EISCONN: number;
	declare var EISDIR: number;
	declare var ELOOP: number;
	declare var EMFILE: number;
	declare var EMLINK: number;
	declare var EMSGSIZE: number;
	declare var ENAMETOOLONG: number;
	declare var ENETDOWN: number;
	declare var ENETRESET: number;
	declare var ENETUNREACH: number;
	declare var ENFILE: number;
	declare var ENOBUFS: number;
	declare var ENODATA: number;
	declare var ENODEV: number;
	declare var ENOENT: number;
	declare var ENOEXEC: number;
	declare var ENOLCK: number;
	declare var ENOLINK: number;
	declare var ENOMEM: number;
	declare var ENOMSG: number;
	declare var ENOPROTOOPT: number;
	declare var ENOSPC: number;
	declare var ENOSR: number;
	declare var ENOSTR: number;
	declare var ENOSYS: number;
	declare var ENOTCONN: number;
	declare var ENOTDIR: number;
	declare var ENOTEMPTY: number;
	declare var ENOTSOCK: number;
	declare var ENOTSUP: number;
	declare var ENOTTY: number;
	declare var ENXIO: number;
	declare var EOPNOTSUPP: number;
	declare var EOVERFLOW: number;
	declare var EPERM: number;
	declare var EPIPE: number;
	declare var EPROTO: number;
	declare var EPROTONOSUPPORT: number;
	declare var EPROTOTYPE: number;
	declare var ERANGE: number;
	declare var EROFS: number;
	declare var ESPIPE: number;
	declare var ESRCH: number;
	declare var ETIME: number;
	declare var ETIMEDOUT: number;
	declare var ETXTBSY: number;
	declare var EWOULDBLOCK: number;
	declare var EXDEV: number;
	declare var WSAEINTR: number;
	declare var WSAEBADF: number;
	declare var WSAEACCES: number;
	declare var WSAEFAULT: number;
	declare var WSAEINVAL: number;
	declare var WSAEMFILE: number;
	declare var WSAEWOULDBLOCK: number;
	declare var WSAEINPROGRESS: number;
	declare var WSAEALREADY: number;
	declare var WSAENOTSOCK: number;
	declare var WSAEDESTADDRREQ: number;
	declare var WSAEMSGSIZE: number;
	declare var WSAEPROTOTYPE: number;
	declare var WSAENOPROTOOPT: number;
	declare var WSAEPROTONOSUPPORT: number;
	declare var WSAESOCKTNOSUPPORT: number;
	declare var WSAEOPNOTSUPP: number;
	declare var WSAEPFNOSUPPORT: number;
	declare var WSAEAFNOSUPPORT: number;
	declare var WSAEADDRINUSE: number;
	declare var WSAEADDRNOTAVAIL: number;
	declare var WSAENETDOWN: number;
	declare var WSAENETUNREACH: number;
	declare var WSAENETRESET: number;
	declare var WSAECONNABORTED: number;
	declare var WSAECONNRESET: number;
	declare var WSAENOBUFS: number;
	declare var WSAEISCONN: number;
	declare var WSAENOTCONN: number;
	declare var WSAESHUTDOWN: number;
	declare var WSAETOOMANYREFS: number;
	declare var WSAETIMEDOUT: number;
	declare var WSAECONNREFUSED: number;
	declare var WSAELOOP: number;
	declare var WSAENAMETOOLONG: number;
	declare var WSAEHOSTDOWN: number;
	declare var WSAEHOSTUNREACH: number;
	declare var WSAENOTEMPTY: number;
	declare var WSAEPROCLIM: number;
	declare var WSAEUSERS: number;
	declare var WSAEDQUOT: number;
	declare var WSAESTALE: number;
	declare var WSAEREMOTE: number;
	declare var WSASYSNOTREADY: number;
	declare var WSAVERNOTSUPPORTED: number;
	declare var WSANOTINITIALISED: number;
	declare var WSAEDISCON: number;
	declare var WSAENOMORE: number;
	declare var WSAECANCELLED: number;
	declare var WSAEINVALIDPROCTABLE: number;
	declare var WSAEINVALIDPROVIDER: number;
	declare var WSAEPROVIDERFAILEDINIT: number;
	declare var WSASYSCALLFAILURE: number;
	declare var WSASERVICE_NOT_FOUND: number;
	declare var WSATYPE_NOT_FOUND: number;
	declare var WSA_E_NO_MORE: number;
	declare var WSA_E_CANCELLED: number;
	declare var WSAEREFUSED: number;
	declare var SIGHUP: number;
	declare var SIGINT: number;
	declare var SIGILL: number;
	declare var SIGABRT: number;
	declare var SIGFPE: number;
	declare var SIGKILL: number;
	declare var SIGSEGV: number;
	declare var SIGTERM: number;
	declare var SIGBREAK: number;
	declare var SIGWINCH: number;
	declare var SSL_OP_ALL: number;
	declare var SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
	declare var SSL_OP_CIPHER_SERVER_PREFERENCE: number;
	declare var SSL_OP_CISCO_ANYCONNECT: number;
	declare var SSL_OP_COOKIE_EXCHANGE: number;
	declare var SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
	declare var SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
	declare var SSL_OP_EPHEMERAL_RSA: number;
	declare var SSL_OP_LEGACY_SERVER_CONNECT: number;
	declare var SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
	declare var SSL_OP_MICROSOFT_SESS_ID_BUG: number;
	declare var SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
	declare var SSL_OP_NETSCAPE_CA_DN_BUG: number;
	declare var SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
	declare var SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
	declare var SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
	declare var SSL_OP_NO_COMPRESSION: number;
	declare var SSL_OP_NO_QUERY_MTU: number;
	declare var SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
	declare var SSL_OP_NO_SSLv2: number;
	declare var SSL_OP_NO_SSLv3: number;
	declare var SSL_OP_NO_TICKET: number;
	declare var SSL_OP_NO_TLSv1: number;
	declare var SSL_OP_NO_TLSv1_1: number;
	declare var SSL_OP_NO_TLSv1_2: number;
	declare var SSL_OP_PKCS1_CHECK_1: number;
	declare var SSL_OP_PKCS1_CHECK_2: number;
	declare var SSL_OP_SINGLE_DH_USE: number;
	declare var SSL_OP_SINGLE_ECDH_USE: number;
	declare var SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
	declare var SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
	declare var SSL_OP_TLS_BLOCK_PADDING_BUG: number;
	declare var SSL_OP_TLS_D5_BUG: number;
	declare var SSL_OP_TLS_ROLLBACK_BUG: number;
	declare var ENGINE_METHOD_DSA: number;
	declare var ENGINE_METHOD_DH: number;
	declare var ENGINE_METHOD_RAND: number;
	declare var ENGINE_METHOD_ECDH: number;
	declare var ENGINE_METHOD_ECDSA: number;
	declare var ENGINE_METHOD_CIPHERS: number;
	declare var ENGINE_METHOD_DIGESTS: number;
	declare var ENGINE_METHOD_STORE: number;
	declare var ENGINE_METHOD_PKEY_METHS: number;
	declare var ENGINE_METHOD_PKEY_ASN1_METHS: number;
	declare var ENGINE_METHOD_ALL: number;
	declare var ENGINE_METHOD_NONE: number;
	declare var DH_CHECK_P_NOT_SAFE_PRIME: number;
	declare var DH_CHECK_P_NOT_PRIME: number;
	declare var DH_UNABLE_TO_CHECK_GENERATOR: number;
	declare var DH_NOT_SUITABLE_GENERATOR: number;
	declare var NPN_ENABLED: number;
	declare var RSA_PKCS1_PADDING: number;
	declare var RSA_SSLV23_PADDING: number;
	declare var RSA_NO_PADDING: number;
	declare var RSA_PKCS1_OAEP_PADDING: number;
	declare var RSA_X931_PADDING: number;
	declare var RSA_PKCS1_PSS_PADDING: number;
	declare var POINT_CONVERSION_COMPRESSED: number;
	declare var POINT_CONVERSION_UNCOMPRESSED: number;
	declare var POINT_CONVERSION_HYBRID: number;
	declare var constants$O_RDONLY: number;
	declare var constants$O_WRONLY: number;
	declare var constants$O_RDWR: number;
	declare var constants$S_IFMT: number;
	declare var constants$S_IFREG: number;
	declare var constants$S_IFDIR: number;
	declare var constants$S_IFCHR: number;
	declare var constants$S_IFBLK: number;
	declare var constants$S_IFIFO: number;
	declare var constants$S_IFSOCK: number;
	declare var constants$S_IRWXU: number;
	declare var constants$S_IRUSR: number;
	declare var constants$S_IWUSR: number;
	declare var constants$S_IXUSR: number;
	declare var constants$S_IRWXG: number;
	declare var constants$S_IRGRP: number;
	declare var constants$S_IWGRP: number;
	declare var constants$S_IXGRP: number;
	declare var constants$S_IRWXO: number;
	declare var constants$S_IROTH: number;
	declare var constants$S_IWOTH: number;
	declare var constants$S_IXOTH: number;
	declare var constants$S_IFLNK: number;
	declare var constants$O_CREAT: number;
	declare var constants$O_EXCL: number;
	declare var constants$O_NOCTTY: number;
	declare var constants$O_DIRECTORY: number;
	declare var constants$O_NOATIME: number;
	declare var constants$O_NOFOLLOW: number;
	declare var constants$O_SYNC: number;
	declare var constants$O_DSYNC: number;
	declare var constants$O_SYMLINK: number;
	declare var constants$O_DIRECT: number;
	declare var constants$O_NONBLOCK: number;
	declare var constants$O_TRUNC: number;
	declare var constants$O_APPEND: number;
	declare var constants$F_OK: number;
	declare var constants$R_OK: number;
	declare var constants$W_OK: number;
	declare var constants$X_OK: number;
	declare var constants$COPYFILE_EXCL: number;
	declare var constants$COPYFILE_FICLONE: number;
	declare var constants$COPYFILE_FICLONE_FORCE: number;
	declare var UV_UDP_REUSEADDR: number;
	declare var SIGQUIT: number;
	declare var SIGTRAP: number;
	declare var SIGIOT: number;
	declare var SIGBUS: number;
	declare var SIGUSR1: number;
	declare var SIGUSR2: number;
	declare var SIGPIPE: number;
	declare var SIGALRM: number;
	declare var SIGCHLD: number;
	declare var SIGSTKFLT: number;
	declare var SIGCONT: number;
	declare var SIGSTOP: number;
	declare var SIGTSTP: number;
	declare var SIGTTIN: number;
	declare var SIGTTOU: number;
	declare var SIGURG: number;
	declare var SIGXCPU: number;
	declare var SIGXFSZ: number;
	declare var SIGVTALRM: number;
	declare var SIGPROF: number;
	declare var SIGIO: number;
	declare var SIGPOLL: number;
	declare var SIGPWR: number;
	declare var SIGSYS: number;
	declare var SIGUNUSED: number;
	declare var defaultCoreCipherList: string;
	declare var defaultCipherList: string;
	declare var ENGINE_METHOD_RSA: number;
	declare var ALPN_ENABLED: number;
    }

	declare module 'module' {
        declare module.exports: typeof NodeJS$NodeJS$Module

    }

	declare module 'process' {
        declare module.exports: typeof process

    }

	declare module 'v8' {
        declare interface HeapSpaceInfo {
space_name: string,
space_size: number,
space_used_size: number,
space_available_size: number,
physical_space_size: number
} 
	declare type DoesZapCodeSpaceFlag = 0 | 1;
	declare interface HeapInfo {
total_heap_size: number,
total_heap_size_executable: number,
total_physical_size: number,
total_available_size: number,
used_heap_size: number,
heap_size_limit: number,
malloced_memory: number,
peak_malloced_memory: number,
does_zap_garbage: DoesZapCodeSpaceFlag
} 
	declare function getHeapStatistics(): HeapInfo

	declare function getHeapSpaceStatistics(): HeapSpaceInfo[]

	declare function setFlagsFromString(flags: string): void

    }

	declare module 'timers' {
        declare function setTimeout(
callback: (...args: any[]) => void,
ms: number,
...args: any[]): NodeJS$NodeJS$Timeout

	
      declare var npm$namespace$setTimeout: {
        __promisify__: typeof setTimeout$__promisify__,
        
      }
declare function setTimeout$__promisify__(ms: number): Promise<void>


declare function setTimeout$__promisify__<T>(ms: number, value: T): Promise<T>

	declare function clearTimeout(timeoutId: NodeJS$NodeJS$Timeout): void

	declare function setInterval(
callback: (...args: any[]) => void,
ms: number,
...args: any[]): NodeJS$NodeJS$Timeout

	declare function clearInterval(intervalId: NodeJS$NodeJS$Timeout): void

	declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): NodeJS$NodeJS$Immediate

	
      declare var npm$namespace$setImmediate: {
        __promisify__: typeof setImmediate$__promisify__,
        
      }
declare function setImmediate$__promisify__(): Promise<void>


declare function setImmediate$__promisify__<T>(value: T): Promise<T>

	declare function clearImmediate(immediateId: NodeJS$NodeJS$Immediate): void

    }

	declare module 'console' {
        declare module.exports: typeof console

    }

	declare module 'async_hooks' {
        
/**
 * Returns the asyncId of the current execution context.
 */
declare function executionAsyncId(): number

	
/**
 * Returns the ID of the resource responsible for calling the callback that is currently being executed.
 */
declare function triggerAsyncId(): number

	declare interface HookCallbacks {

/**
 * Called when a class is constructed that has the possibility to emit an asynchronous event.
 * @param asyncId a unique ID for the async resource
 * @param type the type of the async resource
 * @param triggerAsyncId the unique ID of the async resource in whose execution context this async resource was created
 * @param resource reference to the resource representing the async operation, needs to be released during destroy
 */
init(asyncId: number, type: string, triggerAsyncId: number, resource: Object): void,

/**
 * When an asynchronous operation is initiated or completes a callback is called to notify the user.
 * The before callback is called just before said callback is executed.
 * @param asyncId the unique identifier assigned to the resource about to execute the callback.
 */
before(asyncId: number): void,

/**
 * Called immediately after the callback specified in before is completed.
 * @param asyncId the unique identifier assigned to the resource which has executed the callback.
 */
after(asyncId: number): void,

/**
 * Called when a promise has resolve() called. This may not be in the same execution id
 * as the promise itself.
 * @param asyncId the unique id for the promise that was resolve()d.
 */
promiseResolve(asyncId: number): void,

/**
 * Called after the resource corresponding to asyncId is destroyed
 * @param asyncId a unique ID for the async resource
 */
destroy(asyncId: number): void
} 
	declare interface AsyncHook {

/**
 * Enable the callbacks for a given AsyncHook instance. If no callbacks are provided enabling is a noop.
 */
enable(): this,

/**
 * Disable the callbacks for a given AsyncHook instance from the global pool of AsyncHook callbacks to be executed. Once a hook has been disabled it will not be called again until enabled.
 */
disable(): this
} 
	
/**
 * Registers functions to be called for different lifetime events of each async operation.
 * @param options the callbacks to register
 * @return an AsyncHooks instance used for disabling and enabling hooks
 */
declare function createHook(options: HookCallbacks): AsyncHook

	declare interface AsyncResourceOptions {

/**
 * The ID of the execution context that created this async event.
 * Default: `executionAsyncId()`
 */
triggerAsyncId?: number,

/**
 * Disables automatic `emitDestroy` when the object is garbage collected.
 * This usually does not need to be set (even if `emitDestroy` is called
 * manually), unless the resource's `asyncId` is retrieved and the
 * sensitive API's `emitDestroy` is called with it.
 * Default: `false`
 */
requireManualDestroy?: boolean
} 
	
/**
 * The class AsyncResource was designed to be extended by the embedder's async resources.
 * Using this users can easily trigger the lifetime events of their own resources.
 */
declare class AsyncResource  {

/**
 * AsyncResource() is meant to be extended. Instantiating a
 * new AsyncResource() also triggers init. If triggerAsyncId is omitted then
 * async_hook.executionAsyncId() is used.
 * @param type The type of async event.
 * @param triggerAsyncId The ID of the execution context that created
this async event (default: `executionAsyncId()`), or an
AsyncResourceOptions object (since 9.3)
 */
constructor(type: string, triggerAsyncId?: number | AsyncResourceOptions): this;

/**
 * Call AsyncHooks before callbacks.
 * @deprecated since 9.6 - Use asyncResource.runInAsyncScope() instead.
 */
emitBefore(): void;

/**
 * Call AsyncHooks after callbacks.
 * @deprecated since 9.6 - Use asyncResource.runInAsyncScope() instead.
 */
emitAfter(): void;

/**
 * Call the provided function with the provided arguments in the
 * execution context of the async resource. This will establish the
 * context, trigger the AsyncHooks before callbacks, call the function,
 * trigger the AsyncHooks after callbacks, and then restore the original
 * execution context.
 * @param fn The function to call in the execution context of this
async resource.
 * @param thisArg The receiver to be used for the function call.
 * @param args Optional arguments to pass to the function.
 */
runInAsyncScope<This, Result>(
fn: (...args: any[]) => Result,
thisArg?: This,
...args: any[]): Result;

/**
 * Call AsyncHooks destroy callbacks.
 */
emitDestroy(): void;

/**
 * @return the unique ID assigned to this AsyncResource instance.
 */
asyncId(): number;

/**
 * @return the trigger ID for this AsyncResource instance.
 */
triggerAsyncId(): number
}
    }

	declare module 'http2' {
        import typeof * as events from 'events';

	import typeof * as fs from 'fs';

	import typeof * as net from 'net';

	import typeof * as stream from 'stream';

	import typeof * as tls from 'tls';

	import typeof * as url from 'url';

	import type {
          Http1IncomingHttpHeaders,OutgoingHttpHeaders
        } from 'http';

	declare export {
          OutgoingHttpHeaders
        }from 'http';

	declare export interface IncomingHttpStatusHeader {
":status"?: number
} 
	declare export type IncomingHttpHeaders = {
":path"?: string,
":method"?: string,
":authority"?: string,
":scheme"?: string
} & Http1IncomingHttpHeaders

	declare export interface StreamPriorityOptions {
exclusive?: boolean,
parent?: number,
weight?: number,
silent?: boolean
} 
	declare export interface StreamState {
localWindowSize?: number,
state?: number,
streamLocalClose?: number,
streamRemoteClose?: number,
sumDependencyWeight?: number,
weight?: number
} 
	declare export interface ServerStreamResponseOptions {
endStream?: boolean,
waitForTrailers?: boolean
} 
	declare export interface StatOptions {
offset: number,
length: number
} 
	declare export interface ServerStreamFileResponseOptions {
statCheck?: (
stats: fs.Stats,
headers: OutgoingHttpHeaders,
statOptions: StatOptions) => void | boolean,
getTrailers?: (trailers: OutgoingHttpHeaders) => void,
offset?: number,
length?: number
} 
	declare export type ServerStreamFileResponseOptionsWithError = {
onError?: (err: NodeJS$NodeJS$ErrnoException) => void
} & ServerStreamFileResponseOptions

	declare export type Http2Stream = {
+aborted: boolean,
+closed: boolean,
+destroyed: boolean,
+pending: boolean,
+rstCode: number,
+sentHeaders: OutgoingHttpHeaders,
+sentInfoHeaders?: OutgoingHttpHeaders[],
+sentTrailers?: OutgoingHttpHeaders,
+session: Http2Session,
+state: StreamState,

/**
 * Set the true if the END_STREAM flag was set in the request or response HEADERS frame received,
 * indicating that no additional data should be received and the readable side of the Http2Stream will be closed.
 */
+endAfterHeaders: boolean,
close(code?: number, callback?: () => void): void,
priority(options: StreamPriorityOptions): void,
setTimeout(msecs: number, callback?: () => void): void,
addListener(event: string, listener: (...args: any[]) => void): this,
addListener(event: "aborted", listener: () => void): this,
addListener(event: "close", listener: () => void): this,
addListener(event: "data", listener: (chunk: Buffer | string) => void): this,
addListener(event: "drain", listener: () => void): this,
addListener(event: "end", listener: () => void): this,
addListener(event: "error", listener: (err: Error) => void): this,
addListener(event: "finish", listener: () => void): this,
addListener(
event: "frameError",
listener: (frameType: number, errorCode: number) => void): this,
addListener(event: "pipe", listener: (src: stream.internal$Readable) => void): this,
addListener(event: "unpipe", listener: (src: stream.internal$Readable) => void): this,
addListener(event: "streamClosed", listener: (code: number) => void): this,
addListener(event: "timeout", listener: () => void): this,
addListener(
event: "trailers",
listener: (trailers: IncomingHttpHeaders, flags: number) => void): this,
addListener(event: "wantTrailers", listener: () => void): this,
emit(event: string | Symbol, ...args: any[]): boolean,
emit(event: "aborted"): boolean,
emit(event: "close"): boolean,
emit(event: "data", chunk: Buffer | string): boolean,
emit(event: "drain"): boolean,
emit(event: "end"): boolean,
emit(event: "error", err: Error): boolean,
emit(event: "finish"): boolean,
emit(event: "frameError", frameType: number, errorCode: number): boolean,
emit(event: "pipe", src: stream.internal$Readable): boolean,
emit(event: "unpipe", src: stream.internal$Readable): boolean,
emit(event: "streamClosed", code: number): boolean,
emit(event: "timeout"): boolean,
emit(event: "trailers", trailers: IncomingHttpHeaders, flags: number): boolean,
emit(event: "wantTrailers"): boolean,
on(event: string, listener: (...args: any[]) => void): this,
on(event: "aborted", listener: () => void): this,
on(event: "close", listener: () => void): this,
on(event: "data", listener: (chunk: Buffer | string) => void): this,
on(event: "drain", listener: () => void): this,
on(event: "end", listener: () => void): this,
on(event: "error", listener: (err: Error) => void): this,
on(event: "finish", listener: () => void): this,
on(
event: "frameError",
listener: (frameType: number, errorCode: number) => void): this,
on(event: "pipe", listener: (src: stream.internal$Readable) => void): this,
on(event: "unpipe", listener: (src: stream.internal$Readable) => void): this,
on(event: "streamClosed", listener: (code: number) => void): this,
on(event: "timeout", listener: () => void): this,
on(
event: "trailers",
listener: (trailers: IncomingHttpHeaders, flags: number) => void): this,
on(event: "wantTrailers", listener: () => void): this,
once(event: string, listener: (...args: any[]) => void): this,
once(event: "aborted", listener: () => void): this,
once(event: "close", listener: () => void): this,
once(event: "data", listener: (chunk: Buffer | string) => void): this,
once(event: "drain", listener: () => void): this,
once(event: "end", listener: () => void): this,
once(event: "error", listener: (err: Error) => void): this,
once(event: "finish", listener: () => void): this,
once(
event: "frameError",
listener: (frameType: number, errorCode: number) => void): this,
once(event: "pipe", listener: (src: stream.internal$Readable) => void): this,
once(event: "unpipe", listener: (src: stream.internal$Readable) => void): this,
once(event: "streamClosed", listener: (code: number) => void): this,
once(event: "timeout", listener: () => void): this,
once(
event: "trailers",
listener: (trailers: IncomingHttpHeaders, flags: number) => void): this,
once(event: "wantTrailers", listener: () => void): this,
prependListener(event: string, listener: (...args: any[]) => void): this,
prependListener(event: "aborted", listener: () => void): this,
prependListener(event: "close", listener: () => void): this,
prependListener(event: "data", listener: (chunk: Buffer | string) => void): this,
prependListener(event: "drain", listener: () => void): this,
prependListener(event: "end", listener: () => void): this,
prependListener(event: "error", listener: (err: Error) => void): this,
prependListener(event: "finish", listener: () => void): this,
prependListener(
event: "frameError",
listener: (frameType: number, errorCode: number) => void): this,
prependListener(event: "pipe", listener: (src: stream.internal$Readable) => void): this,
prependListener(event: "unpipe", listener: (src: stream.internal$Readable) => void): this,
prependListener(event: "streamClosed", listener: (code: number) => void): this,
prependListener(event: "timeout", listener: () => void): this,
prependListener(
event: "trailers",
listener: (trailers: IncomingHttpHeaders, flags: number) => void): this,
prependListener(event: "wantTrailers", listener: () => void): this,
prependOnceListener(event: string, listener: (...args: any[]) => void): this,
prependOnceListener(event: "aborted", listener: () => void): this,
prependOnceListener(event: "close", listener: () => void): this,
prependOnceListener(event: "data", listener: (chunk: Buffer | string) => void): this,
prependOnceListener(event: "drain", listener: () => void): this,
prependOnceListener(event: "end", listener: () => void): this,
prependOnceListener(event: "error", listener: (err: Error) => void): this,
prependOnceListener(event: "finish", listener: () => void): this,
prependOnceListener(
event: "frameError",
listener: (frameType: number, errorCode: number) => void): this,
prependOnceListener(event: "pipe", listener: (src: stream.internal$Readable) => void): this,
prependOnceListener(event: "unpipe", listener: (src: stream.internal$Readable) => void): this,
prependOnceListener(event: "streamClosed", listener: (code: number) => void): this,
prependOnceListener(event: "timeout", listener: () => void): this,
prependOnceListener(
event: "trailers",
listener: (trailers: IncomingHttpHeaders, flags: number) => void): this,
prependOnceListener(event: "wantTrailers", listener: () => void): this,
sendTrailers(headers: OutgoingHttpHeaders): this
} & stream.internal$Duplex

	declare export type ClientHttp2Stream = {
addListener(event: string, listener: (...args: any[]) => void): this,
addListener(
event: "headers",
listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this,
addListener(
event: "push",
listener: (headers: IncomingHttpHeaders, flags: number) => void): this,
addListener(
event: "response",
listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this,
emit(event: string | Symbol, ...args: any[]): boolean,
emit(
event: "headers",
headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
flags: number): boolean,
emit(event: "push", headers: IncomingHttpHeaders, flags: number): boolean,
emit(
event: "response",
headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
flags: number): boolean,
on(event: string, listener: (...args: any[]) => void): this,
on(
event: "headers",
listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this,
on(
event: "push",
listener: (headers: IncomingHttpHeaders, flags: number) => void): this,
on(
event: "response",
listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this,
once(event: string, listener: (...args: any[]) => void): this,
once(
event: "headers",
listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this,
once(
event: "push",
listener: (headers: IncomingHttpHeaders, flags: number) => void): this,
once(
event: "response",
listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this,
prependListener(event: string, listener: (...args: any[]) => void): this,
prependListener(
event: "headers",
listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this,
prependListener(
event: "push",
listener: (headers: IncomingHttpHeaders, flags: number) => void): this,
prependListener(
event: "response",
listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this,
prependOnceListener(event: string, listener: (...args: any[]) => void): this,
prependOnceListener(
event: "headers",
listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this,
prependOnceListener(
event: "push",
listener: (headers: IncomingHttpHeaders, flags: number) => void): this,
prependOnceListener(
event: "response",
listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this
} & Http2Stream

	declare export type ServerHttp2Stream = {
additionalHeaders(headers: OutgoingHttpHeaders): void,
+headersSent: boolean,
+pushAllowed: boolean,
pushStream(
headers: OutgoingHttpHeaders,
callback?: (
err: Error | null,
pushStream: ServerHttp2Stream,
headers: OutgoingHttpHeaders) => void): void,
pushStream(
headers: OutgoingHttpHeaders,
options?: StreamPriorityOptions,
callback?: (
err: Error | null,
pushStream: ServerHttp2Stream,
headers: OutgoingHttpHeaders) => void): void,
respond(headers?: OutgoingHttpHeaders, options?: ServerStreamResponseOptions): void,
respondWithFD(
fd: number,
headers?: OutgoingHttpHeaders,
options?: ServerStreamFileResponseOptions): void,
respondWithFile(
path: string,
headers?: OutgoingHttpHeaders,
options?: ServerStreamFileResponseOptionsWithError): void
} & Http2Stream

	declare export interface Settings {
headerTableSize?: number,
enablePush?: boolean,
initialWindowSize?: number,
maxFrameSize?: number,
maxConcurrentStreams?: number,
maxHeaderListSize?: number
} 
	declare export interface ClientSessionRequestOptions {
endStream?: boolean,
exclusive?: boolean,
parent?: number,
weight?: number,
getTrailers?: (trailers: OutgoingHttpHeaders, flags: number) => void
} 
	declare export interface SessionState {
effectiveLocalWindowSize?: number,
effectiveRecvDataLength?: number,
nextStreamID?: number,
localWindowSize?: number,
lastProcStreamID?: number,
remoteWindowSize?: number,
outboundQueueSize?: number,
deflateDynamicTableSize?: number,
inflateDynamicTableSize?: number
} 
	declare export type Http2Session = {
+alpnProtocol?: string,
close(callback?: () => void): void,
+closed: boolean,
+connecting: boolean,
destroy(error?: Error, code?: number): void,
+destroyed: boolean,
+encrypted?: boolean,
goaway(
code?: number,
lastStreamID?: number,
opaqueData?: Buffer | DataView | NodeJS$NodeJS$TypedArray): void,
+localSettings: Settings,
+originSet?: string[],
+pendingSettingsAck: boolean,
ping(
callback: (err: Error | null, duration: number, payload: Buffer) => void): boolean,
ping(
payload: Buffer | DataView | NodeJS$NodeJS$TypedArray,
callback: (err: Error | null, duration: number, payload: Buffer) => void): boolean,
ref(): void,
+remoteSettings: Settings,
rstStream(stream: Http2Stream, code?: number): void,
setTimeout(msecs: number, callback?: () => void): void,
+socket: net.NodeJS$Socket | tls.TLSSocket,
+state: SessionState,
priority(stream: Http2Stream, options: StreamPriorityOptions): void,
settings(settings: Settings): void,
+type: number,
unref(): void,
addListener(event: string, listener: (...args: any[]) => void): this,
addListener(event: "close", listener: () => void): this,
addListener(event: "error", listener: (err: Error) => void): this,
addListener(
event: "frameError",
listener: (frameType: number, errorCode: number, streamID: number) => void): this,
addListener(
event: "goaway",
listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void): this,
addListener(event: "localSettings", listener: (settings: Settings) => void): this,
addListener(event: "remoteSettings", listener: (settings: Settings) => void): this,
addListener(event: "timeout", listener: () => void): this,
addListener(event: "ping", listener: () => void): this,
emit(event: string | Symbol, ...args: any[]): boolean,
emit(event: "close"): boolean,
emit(event: "error", err: Error): boolean,
emit(
event: "frameError",
frameType: number,
errorCode: number,
streamID: number): boolean,
emit(
event: "goaway",
errorCode: number,
lastStreamID: number,
opaqueData: Buffer): boolean,
emit(event: "localSettings", settings: Settings): boolean,
emit(event: "remoteSettings", settings: Settings): boolean,
emit(event: "timeout"): boolean,
emit(event: "ping"): boolean,
on(event: string, listener: (...args: any[]) => void): this,
on(event: "close", listener: () => void): this,
on(event: "error", listener: (err: Error) => void): this,
on(
event: "frameError",
listener: (frameType: number, errorCode: number, streamID: number) => void): this,
on(
event: "goaway",
listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void): this,
on(event: "localSettings", listener: (settings: Settings) => void): this,
on(event: "remoteSettings", listener: (settings: Settings) => void): this,
on(event: "timeout", listener: () => void): this,
on(event: "ping", listener: () => void): this,
once(event: string, listener: (...args: any[]) => void): this,
once(event: "close", listener: () => void): this,
once(event: "error", listener: (err: Error) => void): this,
once(
event: "frameError",
listener: (frameType: number, errorCode: number, streamID: number) => void): this,
once(
event: "goaway",
listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void): this,
once(event: "localSettings", listener: (settings: Settings) => void): this,
once(event: "remoteSettings", listener: (settings: Settings) => void): this,
once(event: "timeout", listener: () => void): this,
once(event: "ping", listener: () => void): this,
prependListener(event: string, listener: (...args: any[]) => void): this,
prependListener(event: "close", listener: () => void): this,
prependListener(event: "error", listener: (err: Error) => void): this,
prependListener(
event: "frameError",
listener: (frameType: number, errorCode: number, streamID: number) => void): this,
prependListener(
event: "goaway",
listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void): this,
prependListener(event: "localSettings", listener: (settings: Settings) => void): this,
prependListener(event: "remoteSettings", listener: (settings: Settings) => void): this,
prependListener(event: "timeout", listener: () => void): this,
prependListener(event: "ping", listener: () => void): this,
prependOnceListener(event: string, listener: (...args: any[]) => void): this,
prependOnceListener(event: "close", listener: () => void): this,
prependOnceListener(event: "error", listener: (err: Error) => void): this,
prependOnceListener(
event: "frameError",
listener: (frameType: number, errorCode: number, streamID: number) => void): this,
prependOnceListener(
event: "goaway",
listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void): this,
prependOnceListener(event: "localSettings", listener: (settings: Settings) => void): this,
prependOnceListener(event: "remoteSettings", listener: (settings: Settings) => void): this,
prependOnceListener(event: "timeout", listener: () => void): this,
prependOnceListener(event: "ping", listener: () => void): this
} & events.internal$EventEmitter

	declare export type ClientHttp2Session = {
request(
headers?: OutgoingHttpHeaders,
options?: ClientSessionRequestOptions): ClientHttp2Stream,
addListener(event: string, listener: (...args: any[]) => void): this,
addListener(
event: "altsvc",
listener: (alt: string, origin: string, stream: number) => void): this,
addListener(
event: "connect",
listener: (session: ClientHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): this,
addListener(
event: "stream",
listener: (
stream: ClientHttp2Stream,
headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
flags: number) => void): this,
emit(event: string | Symbol, ...args: any[]): boolean,
emit(event: "altsvc", alt: string, origin: string, stream: number): boolean,
emit(
event: "connect",
session: ClientHttp2Session,
socket: net.NodeJS$Socket | tls.TLSSocket): boolean,
emit(
event: "stream",
stream: ClientHttp2Stream,
headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
flags: number): boolean,
on(event: string, listener: (...args: any[]) => void): this,
on(
event: "altsvc",
listener: (alt: string, origin: string, stream: number) => void): this,
on(
event: "connect",
listener: (session: ClientHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): this,
on(
event: "stream",
listener: (
stream: ClientHttp2Stream,
headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
flags: number) => void): this,
once(event: string, listener: (...args: any[]) => void): this,
once(
event: "altsvc",
listener: (alt: string, origin: string, stream: number) => void): this,
once(
event: "connect",
listener: (session: ClientHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): this,
once(
event: "stream",
listener: (
stream: ClientHttp2Stream,
headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
flags: number) => void): this,
prependListener(event: string, listener: (...args: any[]) => void): this,
prependListener(
event: "altsvc",
listener: (alt: string, origin: string, stream: number) => void): this,
prependListener(
event: "connect",
listener: (session: ClientHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): this,
prependListener(
event: "stream",
listener: (
stream: ClientHttp2Stream,
headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
flags: number) => void): this,
prependOnceListener(event: string, listener: (...args: any[]) => void): this,
prependOnceListener(
event: "altsvc",
listener: (alt: string, origin: string, stream: number) => void): this,
prependOnceListener(
event: "connect",
listener: (session: ClientHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): this,
prependOnceListener(
event: "stream",
listener: (
stream: ClientHttp2Stream,
headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
flags: number) => void): this
} & Http2Session

	declare export interface AlternativeServiceOptions {
origin: number | string | url.URL
} 
	declare export type ServerHttp2Session = {
altsvc(
alt: string,
originOrStream: number | string | url.URL | AlternativeServiceOptions): void,
+server: Http2Server | Http2SecureServer,
addListener(event: string, listener: (...args: any[]) => void): this,
addListener(
event: "connect",
listener: (session: ServerHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): this,
addListener(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
emit(event: string | Symbol, ...args: any[]): boolean,
emit(
event: "connect",
session: ServerHttp2Session,
socket: net.NodeJS$Socket | tls.TLSSocket): boolean,
emit(
event: "stream",
stream: ServerHttp2Stream,
headers: IncomingHttpHeaders,
flags: number): boolean,
on(event: string, listener: (...args: any[]) => void): this,
on(
event: "connect",
listener: (session: ServerHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): this,
on(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
once(event: string, listener: (...args: any[]) => void): this,
once(
event: "connect",
listener: (session: ServerHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): this,
once(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
prependListener(event: string, listener: (...args: any[]) => void): this,
prependListener(
event: "connect",
listener: (session: ServerHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): this,
prependListener(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
prependOnceListener(event: string, listener: (...args: any[]) => void): this,
prependOnceListener(
event: "connect",
listener: (session: ServerHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): this,
prependOnceListener(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this
} & Http2Session

	declare export interface SessionOptions {
maxDeflateDynamicTableSize?: number,
maxReservedRemoteStreams?: number,
maxSendHeaderBlockLength?: number,
paddingStrategy?: number,
peerMaxConcurrentStreams?: number,
selectPadding?: (frameLen: number, maxFrameLen: number) => number,
settings?: Settings,
createConnection?: (option: SessionOptions) => stream.internal$Duplex
} 
	declare export type ClientSessionOptions = SessionOptions;
	declare export type ServerSessionOptions = SessionOptions;
	declare export type SecureClientSessionOptions = {} & ClientSessionOptions & tls.ConnectionOptions

	declare export type SecureServerSessionOptions = {} & ServerSessionOptions & tls.TlsOptions

	declare export type ServerOptions = {
allowHTTP1?: boolean
} & ServerSessionOptions

	declare export type SecureServerOptions = {
allowHTTP1?: boolean
} & SecureServerSessionOptions

	declare export type Http2Server = {
addListener(event: string, listener: (...args: any[]) => void): this,
addListener(
event: "checkContinue",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
addListener(
event: "request",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
addListener(event: "sessionError", listener: (err: Error) => void): this,
addListener(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
addListener(event: "timeout", listener: () => void): this,
emit(event: string | Symbol, ...args: any[]): boolean,
emit(
event: "checkContinue",
request: Http2ServerRequest,
response: Http2ServerResponse): boolean,
emit(
event: "request",
request: Http2ServerRequest,
response: Http2ServerResponse): boolean,
emit(event: "sessionError", err: Error): boolean,
emit(
event: "stream",
stream: ServerHttp2Stream,
headers: IncomingHttpHeaders,
flags: number): boolean,
emit(event: "timeout"): boolean,
on(event: string, listener: (...args: any[]) => void): this,
on(
event: "checkContinue",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
on(
event: "request",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
on(event: "sessionError", listener: (err: Error) => void): this,
on(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
on(event: "timeout", listener: () => void): this,
once(event: string, listener: (...args: any[]) => void): this,
once(
event: "checkContinue",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
once(
event: "request",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
once(event: "sessionError", listener: (err: Error) => void): this,
once(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
once(event: "timeout", listener: () => void): this,
prependListener(event: string, listener: (...args: any[]) => void): this,
prependListener(
event: "checkContinue",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
prependListener(
event: "request",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
prependListener(event: "sessionError", listener: (err: Error) => void): this,
prependListener(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
prependListener(event: "timeout", listener: () => void): this,
prependOnceListener(event: string, listener: (...args: any[]) => void): this,
prependOnceListener(
event: "checkContinue",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
prependOnceListener(
event: "request",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
prependOnceListener(event: "sessionError", listener: (err: Error) => void): this,
prependOnceListener(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
prependOnceListener(event: "timeout", listener: () => void): this
} & net.Server

	declare export type Http2SecureServer = {
addListener(event: string, listener: (...args: any[]) => void): this,
addListener(
event: "checkContinue",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
addListener(
event: "request",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
addListener(event: "sessionError", listener: (err: Error) => void): this,
addListener(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
addListener(event: "timeout", listener: () => void): this,
addListener(event: "unknownProtocol", listener: (socket: tls.TLSSocket) => void): this,
emit(event: string | Symbol, ...args: any[]): boolean,
emit(
event: "checkContinue",
request: Http2ServerRequest,
response: Http2ServerResponse): boolean,
emit(
event: "request",
request: Http2ServerRequest,
response: Http2ServerResponse): boolean,
emit(event: "sessionError", err: Error): boolean,
emit(
event: "stream",
stream: ServerHttp2Stream,
headers: IncomingHttpHeaders,
flags: number): boolean,
emit(event: "timeout"): boolean,
emit(event: "unknownProtocol", socket: tls.TLSSocket): boolean,
on(event: string, listener: (...args: any[]) => void): this,
on(
event: "checkContinue",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
on(
event: "request",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
on(event: "sessionError", listener: (err: Error) => void): this,
on(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
on(event: "timeout", listener: () => void): this,
on(event: "unknownProtocol", listener: (socket: tls.TLSSocket) => void): this,
once(event: string, listener: (...args: any[]) => void): this,
once(
event: "checkContinue",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
once(
event: "request",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
once(event: "sessionError", listener: (err: Error) => void): this,
once(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
once(event: "timeout", listener: () => void): this,
once(event: "unknownProtocol", listener: (socket: tls.TLSSocket) => void): this,
prependListener(event: string, listener: (...args: any[]) => void): this,
prependListener(
event: "checkContinue",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
prependListener(
event: "request",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
prependListener(event: "sessionError", listener: (err: Error) => void): this,
prependListener(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
prependListener(event: "timeout", listener: () => void): this,
prependListener(event: "unknownProtocol", listener: (socket: tls.TLSSocket) => void): this,
prependOnceListener(event: string, listener: (...args: any[]) => void): this,
prependOnceListener(
event: "checkContinue",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
prependOnceListener(
event: "request",
listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this,
prependOnceListener(event: "sessionError", listener: (err: Error) => void): this,
prependOnceListener(
event: "stream",
listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this,
prependOnceListener(event: "timeout", listener: () => void): this,
prependOnceListener(event: "unknownProtocol", listener: (socket: tls.TLSSocket) => void): this
} & tls.Server

	declare export class Http2ServerRequest mixins stream.internal$Readable {
constructor(): this;
headers: IncomingHttpHeaders;
httpVersion: string;
method: string;
rawHeaders: string[];
rawTrailers: string[];
setTimeout(msecs: number, callback?: () => void): void;
socket: net.NodeJS$Socket | tls.TLSSocket;
stream: ServerHttp2Stream;
trailers: IncomingHttpHeaders;
url: string;
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
emit(event: string | Symbol, ...args: any[]): boolean;
emit(event: "aborted", hadError: boolean, code: number): boolean;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "aborted", listener: (hadError: boolean, code: number) => void): this
}
	declare export class Http2ServerResponse mixins events.internal$EventEmitter {
constructor(): this;
addTrailers(trailers: OutgoingHttpHeaders): void;
connection: net.NodeJS$Socket | tls.TLSSocket;
end(callback?: () => void): void;
end(data?: string | Buffer, callback?: () => void): void;
end(data?: string | Buffer, encoding?: string, callback?: () => void): void;
internal$finished: boolean;
getHeader(name: string): string;
getHeaderNames(): string[];
getHeaders(): OutgoingHttpHeaders;
hasHeader(name: string): boolean;
headersSent: boolean;
removeHeader(name: string): void;
sendDate: boolean;
setHeader(name: string, value: number | string | string[]): void;
setTimeout(msecs: number, callback?: () => void): void;
socket: net.NodeJS$Socket | tls.TLSSocket;
statusCode: number;
statusMessage: "";
stream: ServerHttp2Stream;
write(chunk: string | Buffer, callback?: (err: Error) => void): boolean;
write(
chunk: string | Buffer,
encoding?: string,
callback?: (err: Error) => void): boolean;
writeContinue(): void;
writeHead(statusCode: number, headers?: OutgoingHttpHeaders): void;
writeHead(
statusCode: number,
statusMessage?: string,
headers?: OutgoingHttpHeaders): void;
createPushResponse(
headers: OutgoingHttpHeaders,
callback: (err: Error | null, res: Http2ServerResponse) => void): void;
addListener(event: string, listener: (...args: any[]) => void): this;
addListener(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
addListener(event: "close", listener: () => void): this;
addListener(event: "drain", listener: () => void): this;
addListener(event: "error", listener: (error: Error) => void): this;
addListener(event: "finish", listener: () => void): this;
emit(event: string | Symbol, ...args: any[]): boolean;
emit(event: "aborted", hadError: boolean, code: number): boolean;
emit(event: "close"): boolean;
emit(event: "drain"): boolean;
emit(event: "error", error: Error): boolean;
emit(event: "finish"): boolean;
on(event: string, listener: (...args: any[]) => void): this;
on(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
on(event: "close", listener: () => void): this;
on(event: "drain", listener: () => void): this;
on(event: "error", listener: (error: Error) => void): this;
on(event: "finish", listener: () => void): this;
once(event: string, listener: (...args: any[]) => void): this;
once(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
once(event: "close", listener: () => void): this;
once(event: "drain", listener: () => void): this;
once(event: "error", listener: (error: Error) => void): this;
once(event: "finish", listener: () => void): this;
prependListener(event: string, listener: (...args: any[]) => void): this;
prependListener(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
prependListener(event: "close", listener: () => void): this;
prependListener(event: "drain", listener: () => void): this;
prependListener(event: "error", listener: (error: Error) => void): this;
prependListener(event: "finish", listener: () => void): this;
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
prependOnceListener(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
prependOnceListener(event: "close", listener: () => void): this;
prependOnceListener(event: "drain", listener: () => void): this;
prependOnceListener(event: "error", listener: (error: Error) => void): this;
prependOnceListener(event: "finish", listener: () => void): this
}
	
      declare var npm$namespace$constants: {
        
        NGHTTP2_SESSION_SERVER: typeof constants$NGHTTP2_SESSION_SERVER,
NGHTTP2_SESSION_CLIENT: typeof constants$NGHTTP2_SESSION_CLIENT,
NGHTTP2_STREAM_STATE_IDLE: typeof constants$NGHTTP2_STREAM_STATE_IDLE,
NGHTTP2_STREAM_STATE_OPEN: typeof constants$NGHTTP2_STREAM_STATE_OPEN,
NGHTTP2_STREAM_STATE_RESERVED_LOCAL: typeof constants$NGHTTP2_STREAM_STATE_RESERVED_LOCAL,
NGHTTP2_STREAM_STATE_RESERVED_REMOTE: typeof constants$NGHTTP2_STREAM_STATE_RESERVED_REMOTE,
NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL: typeof constants$NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL,
NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE: typeof constants$NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE,
NGHTTP2_STREAM_STATE_CLOSED: typeof constants$NGHTTP2_STREAM_STATE_CLOSED,
NGHTTP2_NO_ERROR: typeof constants$NGHTTP2_NO_ERROR,
NGHTTP2_PROTOCOL_ERROR: typeof constants$NGHTTP2_PROTOCOL_ERROR,
NGHTTP2_INTERNAL_ERROR: typeof constants$NGHTTP2_INTERNAL_ERROR,
NGHTTP2_FLOW_CONTROL_ERROR: typeof constants$NGHTTP2_FLOW_CONTROL_ERROR,
NGHTTP2_SETTINGS_TIMEOUT: typeof constants$NGHTTP2_SETTINGS_TIMEOUT,
NGHTTP2_STREAM_CLOSED: typeof constants$NGHTTP2_STREAM_CLOSED,
NGHTTP2_FRAME_SIZE_ERROR: typeof constants$NGHTTP2_FRAME_SIZE_ERROR,
NGHTTP2_REFUSED_STREAM: typeof constants$NGHTTP2_REFUSED_STREAM,
NGHTTP2_CANCEL: typeof constants$NGHTTP2_CANCEL,
NGHTTP2_COMPRESSION_ERROR: typeof constants$NGHTTP2_COMPRESSION_ERROR,
NGHTTP2_CONNECT_ERROR: typeof constants$NGHTTP2_CONNECT_ERROR,
NGHTTP2_ENHANCE_YOUR_CALM: typeof constants$NGHTTP2_ENHANCE_YOUR_CALM,
NGHTTP2_INADEQUATE_SECURITY: typeof constants$NGHTTP2_INADEQUATE_SECURITY,
NGHTTP2_HTTP_1_1_REQUIRED: typeof constants$NGHTTP2_HTTP_1_1_REQUIRED,
NGHTTP2_ERR_FRAME_SIZE_ERROR: typeof constants$NGHTTP2_ERR_FRAME_SIZE_ERROR,
NGHTTP2_FLAG_NONE: typeof constants$NGHTTP2_FLAG_NONE,
NGHTTP2_FLAG_END_STREAM: typeof constants$NGHTTP2_FLAG_END_STREAM,
NGHTTP2_FLAG_END_HEADERS: typeof constants$NGHTTP2_FLAG_END_HEADERS,
NGHTTP2_FLAG_ACK: typeof constants$NGHTTP2_FLAG_ACK,
NGHTTP2_FLAG_PADDED: typeof constants$NGHTTP2_FLAG_PADDED,
NGHTTP2_FLAG_PRIORITY: typeof constants$NGHTTP2_FLAG_PRIORITY,
DEFAULT_SETTINGS_HEADER_TABLE_SIZE: typeof constants$DEFAULT_SETTINGS_HEADER_TABLE_SIZE,
DEFAULT_SETTINGS_ENABLE_PUSH: typeof constants$DEFAULT_SETTINGS_ENABLE_PUSH,
DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: typeof constants$DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE,
DEFAULT_SETTINGS_MAX_FRAME_SIZE: typeof constants$DEFAULT_SETTINGS_MAX_FRAME_SIZE,
MAX_MAX_FRAME_SIZE: typeof constants$MAX_MAX_FRAME_SIZE,
MIN_MAX_FRAME_SIZE: typeof constants$MIN_MAX_FRAME_SIZE,
MAX_INITIAL_WINDOW_SIZE: typeof constants$MAX_INITIAL_WINDOW_SIZE,
NGHTTP2_DEFAULT_WEIGHT: typeof constants$NGHTTP2_DEFAULT_WEIGHT,
NGHTTP2_SETTINGS_HEADER_TABLE_SIZE: typeof constants$NGHTTP2_SETTINGS_HEADER_TABLE_SIZE,
NGHTTP2_SETTINGS_ENABLE_PUSH: typeof constants$NGHTTP2_SETTINGS_ENABLE_PUSH,
NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS: typeof constants$NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS,
NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE: typeof constants$NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE,
NGHTTP2_SETTINGS_MAX_FRAME_SIZE: typeof constants$NGHTTP2_SETTINGS_MAX_FRAME_SIZE,
NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE: typeof constants$NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE,
PADDING_STRATEGY_NONE: typeof constants$PADDING_STRATEGY_NONE,
PADDING_STRATEGY_MAX: typeof constants$PADDING_STRATEGY_MAX,
PADDING_STRATEGY_CALLBACK: typeof constants$PADDING_STRATEGY_CALLBACK,
HTTP2_HEADER_STATUS: typeof constants$HTTP2_HEADER_STATUS,
HTTP2_HEADER_METHOD: typeof constants$HTTP2_HEADER_METHOD,
HTTP2_HEADER_AUTHORITY: typeof constants$HTTP2_HEADER_AUTHORITY,
HTTP2_HEADER_SCHEME: typeof constants$HTTP2_HEADER_SCHEME,
HTTP2_HEADER_PATH: typeof constants$HTTP2_HEADER_PATH,
HTTP2_HEADER_ACCEPT_CHARSET: typeof constants$HTTP2_HEADER_ACCEPT_CHARSET,
HTTP2_HEADER_ACCEPT_ENCODING: typeof constants$HTTP2_HEADER_ACCEPT_ENCODING,
HTTP2_HEADER_ACCEPT_LANGUAGE: typeof constants$HTTP2_HEADER_ACCEPT_LANGUAGE,
HTTP2_HEADER_ACCEPT_RANGES: typeof constants$HTTP2_HEADER_ACCEPT_RANGES,
HTTP2_HEADER_ACCEPT: typeof constants$HTTP2_HEADER_ACCEPT,
HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: typeof constants$HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN,
HTTP2_HEADER_AGE: typeof constants$HTTP2_HEADER_AGE,
HTTP2_HEADER_ALLOW: typeof constants$HTTP2_HEADER_ALLOW,
HTTP2_HEADER_AUTHORIZATION: typeof constants$HTTP2_HEADER_AUTHORIZATION,
HTTP2_HEADER_CACHE_CONTROL: typeof constants$HTTP2_HEADER_CACHE_CONTROL,
HTTP2_HEADER_CONNECTION: typeof constants$HTTP2_HEADER_CONNECTION,
HTTP2_HEADER_CONTENT_DISPOSITION: typeof constants$HTTP2_HEADER_CONTENT_DISPOSITION,
HTTP2_HEADER_CONTENT_ENCODING: typeof constants$HTTP2_HEADER_CONTENT_ENCODING,
HTTP2_HEADER_CONTENT_LANGUAGE: typeof constants$HTTP2_HEADER_CONTENT_LANGUAGE,
HTTP2_HEADER_CONTENT_LENGTH: typeof constants$HTTP2_HEADER_CONTENT_LENGTH,
HTTP2_HEADER_CONTENT_LOCATION: typeof constants$HTTP2_HEADER_CONTENT_LOCATION,
HTTP2_HEADER_CONTENT_MD5: typeof constants$HTTP2_HEADER_CONTENT_MD5,
HTTP2_HEADER_CONTENT_RANGE: typeof constants$HTTP2_HEADER_CONTENT_RANGE,
HTTP2_HEADER_CONTENT_TYPE: typeof constants$HTTP2_HEADER_CONTENT_TYPE,
HTTP2_HEADER_COOKIE: typeof constants$HTTP2_HEADER_COOKIE,
HTTP2_HEADER_DATE: typeof constants$HTTP2_HEADER_DATE,
HTTP2_HEADER_ETAG: typeof constants$HTTP2_HEADER_ETAG,
HTTP2_HEADER_EXPECT: typeof constants$HTTP2_HEADER_EXPECT,
HTTP2_HEADER_EXPIRES: typeof constants$HTTP2_HEADER_EXPIRES,
HTTP2_HEADER_FROM: typeof constants$HTTP2_HEADER_FROM,
HTTP2_HEADER_HOST: typeof constants$HTTP2_HEADER_HOST,
HTTP2_HEADER_IF_MATCH: typeof constants$HTTP2_HEADER_IF_MATCH,
HTTP2_HEADER_IF_MODIFIED_SINCE: typeof constants$HTTP2_HEADER_IF_MODIFIED_SINCE,
HTTP2_HEADER_IF_NONE_MATCH: typeof constants$HTTP2_HEADER_IF_NONE_MATCH,
HTTP2_HEADER_IF_RANGE: typeof constants$HTTP2_HEADER_IF_RANGE,
HTTP2_HEADER_IF_UNMODIFIED_SINCE: typeof constants$HTTP2_HEADER_IF_UNMODIFIED_SINCE,
HTTP2_HEADER_LAST_MODIFIED: typeof constants$HTTP2_HEADER_LAST_MODIFIED,
HTTP2_HEADER_LINK: typeof constants$HTTP2_HEADER_LINK,
HTTP2_HEADER_LOCATION: typeof constants$HTTP2_HEADER_LOCATION,
HTTP2_HEADER_MAX_FORWARDS: typeof constants$HTTP2_HEADER_MAX_FORWARDS,
HTTP2_HEADER_PREFER: typeof constants$HTTP2_HEADER_PREFER,
HTTP2_HEADER_PROXY_AUTHENTICATE: typeof constants$HTTP2_HEADER_PROXY_AUTHENTICATE,
HTTP2_HEADER_PROXY_AUTHORIZATION: typeof constants$HTTP2_HEADER_PROXY_AUTHORIZATION,
HTTP2_HEADER_RANGE: typeof constants$HTTP2_HEADER_RANGE,
HTTP2_HEADER_REFERER: typeof constants$HTTP2_HEADER_REFERER,
HTTP2_HEADER_REFRESH: typeof constants$HTTP2_HEADER_REFRESH,
HTTP2_HEADER_RETRY_AFTER: typeof constants$HTTP2_HEADER_RETRY_AFTER,
HTTP2_HEADER_SERVER: typeof constants$HTTP2_HEADER_SERVER,
HTTP2_HEADER_SET_COOKIE: typeof constants$HTTP2_HEADER_SET_COOKIE,
HTTP2_HEADER_STRICT_TRANSPORT_SECURITY: typeof constants$HTTP2_HEADER_STRICT_TRANSPORT_SECURITY,
HTTP2_HEADER_TRANSFER_ENCODING: typeof constants$HTTP2_HEADER_TRANSFER_ENCODING,
HTTP2_HEADER_TE: typeof constants$HTTP2_HEADER_TE,
HTTP2_HEADER_UPGRADE: typeof constants$HTTP2_HEADER_UPGRADE,
HTTP2_HEADER_USER_AGENT: typeof constants$HTTP2_HEADER_USER_AGENT,
HTTP2_HEADER_VARY: typeof constants$HTTP2_HEADER_VARY,
HTTP2_HEADER_VIA: typeof constants$HTTP2_HEADER_VIA,
HTTP2_HEADER_WWW_AUTHENTICATE: typeof constants$HTTP2_HEADER_WWW_AUTHENTICATE,
HTTP2_HEADER_HTTP2_SETTINGS: typeof constants$HTTP2_HEADER_HTTP2_SETTINGS,
HTTP2_HEADER_KEEP_ALIVE: typeof constants$HTTP2_HEADER_KEEP_ALIVE,
HTTP2_HEADER_PROXY_CONNECTION: typeof constants$HTTP2_HEADER_PROXY_CONNECTION,
HTTP2_METHOD_ACL: typeof constants$HTTP2_METHOD_ACL,
HTTP2_METHOD_BASELINE_CONTROL: typeof constants$HTTP2_METHOD_BASELINE_CONTROL,
HTTP2_METHOD_BIND: typeof constants$HTTP2_METHOD_BIND,
HTTP2_METHOD_CHECKIN: typeof constants$HTTP2_METHOD_CHECKIN,
HTTP2_METHOD_CHECKOUT: typeof constants$HTTP2_METHOD_CHECKOUT,
HTTP2_METHOD_CONNECT: typeof constants$HTTP2_METHOD_CONNECT,
HTTP2_METHOD_COPY: typeof constants$HTTP2_METHOD_COPY,
HTTP2_METHOD_DELETE: typeof constants$HTTP2_METHOD_DELETE,
HTTP2_METHOD_GET: typeof constants$HTTP2_METHOD_GET,
HTTP2_METHOD_HEAD: typeof constants$HTTP2_METHOD_HEAD,
HTTP2_METHOD_LABEL: typeof constants$HTTP2_METHOD_LABEL,
HTTP2_METHOD_LINK: typeof constants$HTTP2_METHOD_LINK,
HTTP2_METHOD_LOCK: typeof constants$HTTP2_METHOD_LOCK,
HTTP2_METHOD_MERGE: typeof constants$HTTP2_METHOD_MERGE,
HTTP2_METHOD_MKACTIVITY: typeof constants$HTTP2_METHOD_MKACTIVITY,
HTTP2_METHOD_MKCALENDAR: typeof constants$HTTP2_METHOD_MKCALENDAR,
HTTP2_METHOD_MKCOL: typeof constants$HTTP2_METHOD_MKCOL,
HTTP2_METHOD_MKREDIRECTREF: typeof constants$HTTP2_METHOD_MKREDIRECTREF,
HTTP2_METHOD_MKWORKSPACE: typeof constants$HTTP2_METHOD_MKWORKSPACE,
HTTP2_METHOD_MOVE: typeof constants$HTTP2_METHOD_MOVE,
HTTP2_METHOD_OPTIONS: typeof constants$HTTP2_METHOD_OPTIONS,
HTTP2_METHOD_ORDERPATCH: typeof constants$HTTP2_METHOD_ORDERPATCH,
HTTP2_METHOD_PATCH: typeof constants$HTTP2_METHOD_PATCH,
HTTP2_METHOD_POST: typeof constants$HTTP2_METHOD_POST,
HTTP2_METHOD_PRI: typeof constants$HTTP2_METHOD_PRI,
HTTP2_METHOD_PROPFIND: typeof constants$HTTP2_METHOD_PROPFIND,
HTTP2_METHOD_PROPPATCH: typeof constants$HTTP2_METHOD_PROPPATCH,
HTTP2_METHOD_PUT: typeof constants$HTTP2_METHOD_PUT,
HTTP2_METHOD_REBIND: typeof constants$HTTP2_METHOD_REBIND,
HTTP2_METHOD_REPORT: typeof constants$HTTP2_METHOD_REPORT,
HTTP2_METHOD_SEARCH: typeof constants$HTTP2_METHOD_SEARCH,
HTTP2_METHOD_TRACE: typeof constants$HTTP2_METHOD_TRACE,
HTTP2_METHOD_UNBIND: typeof constants$HTTP2_METHOD_UNBIND,
HTTP2_METHOD_UNCHECKOUT: typeof constants$HTTP2_METHOD_UNCHECKOUT,
HTTP2_METHOD_UNLINK: typeof constants$HTTP2_METHOD_UNLINK,
HTTP2_METHOD_UNLOCK: typeof constants$HTTP2_METHOD_UNLOCK,
HTTP2_METHOD_UPDATE: typeof constants$HTTP2_METHOD_UPDATE,
HTTP2_METHOD_UPDATEREDIRECTREF: typeof constants$HTTP2_METHOD_UPDATEREDIRECTREF,
HTTP2_METHOD_VERSION_CONTROL: typeof constants$HTTP2_METHOD_VERSION_CONTROL,
HTTP_STATUS_CONTINUE: typeof constants$HTTP_STATUS_CONTINUE,
HTTP_STATUS_SWITCHING_PROTOCOLS: typeof constants$HTTP_STATUS_SWITCHING_PROTOCOLS,
HTTP_STATUS_PROCESSING: typeof constants$HTTP_STATUS_PROCESSING,
HTTP_STATUS_OK: typeof constants$HTTP_STATUS_OK,
HTTP_STATUS_CREATED: typeof constants$HTTP_STATUS_CREATED,
HTTP_STATUS_ACCEPTED: typeof constants$HTTP_STATUS_ACCEPTED,
HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION: typeof constants$HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION,
HTTP_STATUS_NO_CONTENT: typeof constants$HTTP_STATUS_NO_CONTENT,
HTTP_STATUS_RESET_CONTENT: typeof constants$HTTP_STATUS_RESET_CONTENT,
HTTP_STATUS_PARTIAL_CONTENT: typeof constants$HTTP_STATUS_PARTIAL_CONTENT,
HTTP_STATUS_MULTI_STATUS: typeof constants$HTTP_STATUS_MULTI_STATUS,
HTTP_STATUS_ALREADY_REPORTED: typeof constants$HTTP_STATUS_ALREADY_REPORTED,
HTTP_STATUS_IM_USED: typeof constants$HTTP_STATUS_IM_USED,
HTTP_STATUS_MULTIPLE_CHOICES: typeof constants$HTTP_STATUS_MULTIPLE_CHOICES,
HTTP_STATUS_MOVED_PERMANENTLY: typeof constants$HTTP_STATUS_MOVED_PERMANENTLY,
HTTP_STATUS_FOUND: typeof constants$HTTP_STATUS_FOUND,
HTTP_STATUS_SEE_OTHER: typeof constants$HTTP_STATUS_SEE_OTHER,
HTTP_STATUS_NOT_MODIFIED: typeof constants$HTTP_STATUS_NOT_MODIFIED,
HTTP_STATUS_USE_PROXY: typeof constants$HTTP_STATUS_USE_PROXY,
HTTP_STATUS_TEMPORARY_REDIRECT: typeof constants$HTTP_STATUS_TEMPORARY_REDIRECT,
HTTP_STATUS_PERMANENT_REDIRECT: typeof constants$HTTP_STATUS_PERMANENT_REDIRECT,
HTTP_STATUS_BAD_REQUEST: typeof constants$HTTP_STATUS_BAD_REQUEST,
HTTP_STATUS_UNAUTHORIZED: typeof constants$HTTP_STATUS_UNAUTHORIZED,
HTTP_STATUS_PAYMENT_REQUIRED: typeof constants$HTTP_STATUS_PAYMENT_REQUIRED,
HTTP_STATUS_FORBIDDEN: typeof constants$HTTP_STATUS_FORBIDDEN,
HTTP_STATUS_NOT_FOUND: typeof constants$HTTP_STATUS_NOT_FOUND,
HTTP_STATUS_METHOD_NOT_ALLOWED: typeof constants$HTTP_STATUS_METHOD_NOT_ALLOWED,
HTTP_STATUS_NOT_ACCEPTABLE: typeof constants$HTTP_STATUS_NOT_ACCEPTABLE,
HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED: typeof constants$HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED,
HTTP_STATUS_REQUEST_TIMEOUT: typeof constants$HTTP_STATUS_REQUEST_TIMEOUT,
HTTP_STATUS_CONFLICT: typeof constants$HTTP_STATUS_CONFLICT,
HTTP_STATUS_GONE: typeof constants$HTTP_STATUS_GONE,
HTTP_STATUS_LENGTH_REQUIRED: typeof constants$HTTP_STATUS_LENGTH_REQUIRED,
HTTP_STATUS_PRECONDITION_FAILED: typeof constants$HTTP_STATUS_PRECONDITION_FAILED,
HTTP_STATUS_PAYLOAD_TOO_LARGE: typeof constants$HTTP_STATUS_PAYLOAD_TOO_LARGE,
HTTP_STATUS_URI_TOO_LONG: typeof constants$HTTP_STATUS_URI_TOO_LONG,
HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE: typeof constants$HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE,
HTTP_STATUS_RANGE_NOT_SATISFIABLE: typeof constants$HTTP_STATUS_RANGE_NOT_SATISFIABLE,
HTTP_STATUS_EXPECTATION_FAILED: typeof constants$HTTP_STATUS_EXPECTATION_FAILED,
HTTP_STATUS_TEAPOT: typeof constants$HTTP_STATUS_TEAPOT,
HTTP_STATUS_MISDIRECTED_REQUEST: typeof constants$HTTP_STATUS_MISDIRECTED_REQUEST,
HTTP_STATUS_UNPROCESSABLE_ENTITY: typeof constants$HTTP_STATUS_UNPROCESSABLE_ENTITY,
HTTP_STATUS_LOCKED: typeof constants$HTTP_STATUS_LOCKED,
HTTP_STATUS_FAILED_DEPENDENCY: typeof constants$HTTP_STATUS_FAILED_DEPENDENCY,
HTTP_STATUS_UNORDERED_COLLECTION: typeof constants$HTTP_STATUS_UNORDERED_COLLECTION,
HTTP_STATUS_UPGRADE_REQUIRED: typeof constants$HTTP_STATUS_UPGRADE_REQUIRED,
HTTP_STATUS_PRECONDITION_REQUIRED: typeof constants$HTTP_STATUS_PRECONDITION_REQUIRED,
HTTP_STATUS_TOO_MANY_REQUESTS: typeof constants$HTTP_STATUS_TOO_MANY_REQUESTS,
HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE: typeof constants$HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE,
HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS: typeof constants$HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS,
HTTP_STATUS_INTERNAL_SERVER_ERROR: typeof constants$HTTP_STATUS_INTERNAL_SERVER_ERROR,
HTTP_STATUS_NOT_IMPLEMENTED: typeof constants$HTTP_STATUS_NOT_IMPLEMENTED,
HTTP_STATUS_BAD_GATEWAY: typeof constants$HTTP_STATUS_BAD_GATEWAY,
HTTP_STATUS_SERVICE_UNAVAILABLE: typeof constants$HTTP_STATUS_SERVICE_UNAVAILABLE,
HTTP_STATUS_GATEWAY_TIMEOUT: typeof constants$HTTP_STATUS_GATEWAY_TIMEOUT,
HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED: typeof constants$HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED,
HTTP_STATUS_VARIANT_ALSO_NEGOTIATES: typeof constants$HTTP_STATUS_VARIANT_ALSO_NEGOTIATES,
HTTP_STATUS_INSUFFICIENT_STORAGE: typeof constants$HTTP_STATUS_INSUFFICIENT_STORAGE,
HTTP_STATUS_LOOP_DETECTED: typeof constants$HTTP_STATUS_LOOP_DETECTED,
HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED: typeof constants$HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED,
HTTP_STATUS_NOT_EXTENDED: typeof constants$HTTP_STATUS_NOT_EXTENDED,
HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED: typeof constants$HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED,
      }
declare var constants$NGHTTP2_SESSION_SERVER: number;

declare var constants$NGHTTP2_SESSION_CLIENT: number;

declare var constants$NGHTTP2_STREAM_STATE_IDLE: number;

declare var constants$NGHTTP2_STREAM_STATE_OPEN: number;

declare var constants$NGHTTP2_STREAM_STATE_RESERVED_LOCAL: number;

declare var constants$NGHTTP2_STREAM_STATE_RESERVED_REMOTE: number;

declare var constants$NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL: number;

declare var constants$NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE: number;

declare var constants$NGHTTP2_STREAM_STATE_CLOSED: number;

declare var constants$NGHTTP2_NO_ERROR: number;

declare var constants$NGHTTP2_PROTOCOL_ERROR: number;

declare var constants$NGHTTP2_INTERNAL_ERROR: number;

declare var constants$NGHTTP2_FLOW_CONTROL_ERROR: number;

declare var constants$NGHTTP2_SETTINGS_TIMEOUT: number;

declare var constants$NGHTTP2_STREAM_CLOSED: number;

declare var constants$NGHTTP2_FRAME_SIZE_ERROR: number;

declare var constants$NGHTTP2_REFUSED_STREAM: number;

declare var constants$NGHTTP2_CANCEL: number;

declare var constants$NGHTTP2_COMPRESSION_ERROR: number;

declare var constants$NGHTTP2_CONNECT_ERROR: number;

declare var constants$NGHTTP2_ENHANCE_YOUR_CALM: number;

declare var constants$NGHTTP2_INADEQUATE_SECURITY: number;

declare var constants$NGHTTP2_HTTP_1_1_REQUIRED: number;

declare var constants$NGHTTP2_ERR_FRAME_SIZE_ERROR: number;

declare var constants$NGHTTP2_FLAG_NONE: number;

declare var constants$NGHTTP2_FLAG_END_STREAM: number;

declare var constants$NGHTTP2_FLAG_END_HEADERS: number;

declare var constants$NGHTTP2_FLAG_ACK: number;

declare var constants$NGHTTP2_FLAG_PADDED: number;

declare var constants$NGHTTP2_FLAG_PRIORITY: number;

declare var constants$DEFAULT_SETTINGS_HEADER_TABLE_SIZE: number;

declare var constants$DEFAULT_SETTINGS_ENABLE_PUSH: number;

declare var constants$DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: number;

declare var constants$DEFAULT_SETTINGS_MAX_FRAME_SIZE: number;

declare var constants$MAX_MAX_FRAME_SIZE: number;

declare var constants$MIN_MAX_FRAME_SIZE: number;

declare var constants$MAX_INITIAL_WINDOW_SIZE: number;

declare var constants$NGHTTP2_DEFAULT_WEIGHT: number;

declare var constants$NGHTTP2_SETTINGS_HEADER_TABLE_SIZE: number;

declare var constants$NGHTTP2_SETTINGS_ENABLE_PUSH: number;

declare var constants$NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS: number;

declare var constants$NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE: number;

declare var constants$NGHTTP2_SETTINGS_MAX_FRAME_SIZE: number;

declare var constants$NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE: number;

declare var constants$PADDING_STRATEGY_NONE: number;

declare var constants$PADDING_STRATEGY_MAX: number;

declare var constants$PADDING_STRATEGY_CALLBACK: number;

declare var constants$HTTP2_HEADER_STATUS: string;

declare var constants$HTTP2_HEADER_METHOD: string;

declare var constants$HTTP2_HEADER_AUTHORITY: string;

declare var constants$HTTP2_HEADER_SCHEME: string;

declare var constants$HTTP2_HEADER_PATH: string;

declare var constants$HTTP2_HEADER_ACCEPT_CHARSET: string;

declare var constants$HTTP2_HEADER_ACCEPT_ENCODING: string;

declare var constants$HTTP2_HEADER_ACCEPT_LANGUAGE: string;

declare var constants$HTTP2_HEADER_ACCEPT_RANGES: string;

declare var constants$HTTP2_HEADER_ACCEPT: string;

declare var constants$HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: string;

declare var constants$HTTP2_HEADER_AGE: string;

declare var constants$HTTP2_HEADER_ALLOW: string;

declare var constants$HTTP2_HEADER_AUTHORIZATION: string;

declare var constants$HTTP2_HEADER_CACHE_CONTROL: string;

declare var constants$HTTP2_HEADER_CONNECTION: string;

declare var constants$HTTP2_HEADER_CONTENT_DISPOSITION: string;

declare var constants$HTTP2_HEADER_CONTENT_ENCODING: string;

declare var constants$HTTP2_HEADER_CONTENT_LANGUAGE: string;

declare var constants$HTTP2_HEADER_CONTENT_LENGTH: string;

declare var constants$HTTP2_HEADER_CONTENT_LOCATION: string;

declare var constants$HTTP2_HEADER_CONTENT_MD5: string;

declare var constants$HTTP2_HEADER_CONTENT_RANGE: string;

declare var constants$HTTP2_HEADER_CONTENT_TYPE: string;

declare var constants$HTTP2_HEADER_COOKIE: string;

declare var constants$HTTP2_HEADER_DATE: string;

declare var constants$HTTP2_HEADER_ETAG: string;

declare var constants$HTTP2_HEADER_EXPECT: string;

declare var constants$HTTP2_HEADER_EXPIRES: string;

declare var constants$HTTP2_HEADER_FROM: string;

declare var constants$HTTP2_HEADER_HOST: string;

declare var constants$HTTP2_HEADER_IF_MATCH: string;

declare var constants$HTTP2_HEADER_IF_MODIFIED_SINCE: string;

declare var constants$HTTP2_HEADER_IF_NONE_MATCH: string;

declare var constants$HTTP2_HEADER_IF_RANGE: string;

declare var constants$HTTP2_HEADER_IF_UNMODIFIED_SINCE: string;

declare var constants$HTTP2_HEADER_LAST_MODIFIED: string;

declare var constants$HTTP2_HEADER_LINK: string;

declare var constants$HTTP2_HEADER_LOCATION: string;

declare var constants$HTTP2_HEADER_MAX_FORWARDS: string;

declare var constants$HTTP2_HEADER_PREFER: string;

declare var constants$HTTP2_HEADER_PROXY_AUTHENTICATE: string;

declare var constants$HTTP2_HEADER_PROXY_AUTHORIZATION: string;

declare var constants$HTTP2_HEADER_RANGE: string;

declare var constants$HTTP2_HEADER_REFERER: string;

declare var constants$HTTP2_HEADER_REFRESH: string;

declare var constants$HTTP2_HEADER_RETRY_AFTER: string;

declare var constants$HTTP2_HEADER_SERVER: string;

declare var constants$HTTP2_HEADER_SET_COOKIE: string;

declare var constants$HTTP2_HEADER_STRICT_TRANSPORT_SECURITY: string;

declare var constants$HTTP2_HEADER_TRANSFER_ENCODING: string;

declare var constants$HTTP2_HEADER_TE: string;

declare var constants$HTTP2_HEADER_UPGRADE: string;

declare var constants$HTTP2_HEADER_USER_AGENT: string;

declare var constants$HTTP2_HEADER_VARY: string;

declare var constants$HTTP2_HEADER_VIA: string;

declare var constants$HTTP2_HEADER_WWW_AUTHENTICATE: string;

declare var constants$HTTP2_HEADER_HTTP2_SETTINGS: string;

declare var constants$HTTP2_HEADER_KEEP_ALIVE: string;

declare var constants$HTTP2_HEADER_PROXY_CONNECTION: string;

declare var constants$HTTP2_METHOD_ACL: string;

declare var constants$HTTP2_METHOD_BASELINE_CONTROL: string;

declare var constants$HTTP2_METHOD_BIND: string;

declare var constants$HTTP2_METHOD_CHECKIN: string;

declare var constants$HTTP2_METHOD_CHECKOUT: string;

declare var constants$HTTP2_METHOD_CONNECT: string;

declare var constants$HTTP2_METHOD_COPY: string;

declare var constants$HTTP2_METHOD_DELETE: string;

declare var constants$HTTP2_METHOD_GET: string;

declare var constants$HTTP2_METHOD_HEAD: string;

declare var constants$HTTP2_METHOD_LABEL: string;

declare var constants$HTTP2_METHOD_LINK: string;

declare var constants$HTTP2_METHOD_LOCK: string;

declare var constants$HTTP2_METHOD_MERGE: string;

declare var constants$HTTP2_METHOD_MKACTIVITY: string;

declare var constants$HTTP2_METHOD_MKCALENDAR: string;

declare var constants$HTTP2_METHOD_MKCOL: string;

declare var constants$HTTP2_METHOD_MKREDIRECTREF: string;

declare var constants$HTTP2_METHOD_MKWORKSPACE: string;

declare var constants$HTTP2_METHOD_MOVE: string;

declare var constants$HTTP2_METHOD_OPTIONS: string;

declare var constants$HTTP2_METHOD_ORDERPATCH: string;

declare var constants$HTTP2_METHOD_PATCH: string;

declare var constants$HTTP2_METHOD_POST: string;

declare var constants$HTTP2_METHOD_PRI: string;

declare var constants$HTTP2_METHOD_PROPFIND: string;

declare var constants$HTTP2_METHOD_PROPPATCH: string;

declare var constants$HTTP2_METHOD_PUT: string;

declare var constants$HTTP2_METHOD_REBIND: string;

declare var constants$HTTP2_METHOD_REPORT: string;

declare var constants$HTTP2_METHOD_SEARCH: string;

declare var constants$HTTP2_METHOD_TRACE: string;

declare var constants$HTTP2_METHOD_UNBIND: string;

declare var constants$HTTP2_METHOD_UNCHECKOUT: string;

declare var constants$HTTP2_METHOD_UNLINK: string;

declare var constants$HTTP2_METHOD_UNLOCK: string;

declare var constants$HTTP2_METHOD_UPDATE: string;

declare var constants$HTTP2_METHOD_UPDATEREDIRECTREF: string;

declare var constants$HTTP2_METHOD_VERSION_CONTROL: string;

declare var constants$HTTP_STATUS_CONTINUE: number;

declare var constants$HTTP_STATUS_SWITCHING_PROTOCOLS: number;

declare var constants$HTTP_STATUS_PROCESSING: number;

declare var constants$HTTP_STATUS_OK: number;

declare var constants$HTTP_STATUS_CREATED: number;

declare var constants$HTTP_STATUS_ACCEPTED: number;

declare var constants$HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION: number;

declare var constants$HTTP_STATUS_NO_CONTENT: number;

declare var constants$HTTP_STATUS_RESET_CONTENT: number;

declare var constants$HTTP_STATUS_PARTIAL_CONTENT: number;

declare var constants$HTTP_STATUS_MULTI_STATUS: number;

declare var constants$HTTP_STATUS_ALREADY_REPORTED: number;

declare var constants$HTTP_STATUS_IM_USED: number;

declare var constants$HTTP_STATUS_MULTIPLE_CHOICES: number;

declare var constants$HTTP_STATUS_MOVED_PERMANENTLY: number;

declare var constants$HTTP_STATUS_FOUND: number;

declare var constants$HTTP_STATUS_SEE_OTHER: number;

declare var constants$HTTP_STATUS_NOT_MODIFIED: number;

declare var constants$HTTP_STATUS_USE_PROXY: number;

declare var constants$HTTP_STATUS_TEMPORARY_REDIRECT: number;

declare var constants$HTTP_STATUS_PERMANENT_REDIRECT: number;

declare var constants$HTTP_STATUS_BAD_REQUEST: number;

declare var constants$HTTP_STATUS_UNAUTHORIZED: number;

declare var constants$HTTP_STATUS_PAYMENT_REQUIRED: number;

declare var constants$HTTP_STATUS_FORBIDDEN: number;

declare var constants$HTTP_STATUS_NOT_FOUND: number;

declare var constants$HTTP_STATUS_METHOD_NOT_ALLOWED: number;

declare var constants$HTTP_STATUS_NOT_ACCEPTABLE: number;

declare var constants$HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED: number;

declare var constants$HTTP_STATUS_REQUEST_TIMEOUT: number;

declare var constants$HTTP_STATUS_CONFLICT: number;

declare var constants$HTTP_STATUS_GONE: number;

declare var constants$HTTP_STATUS_LENGTH_REQUIRED: number;

declare var constants$HTTP_STATUS_PRECONDITION_FAILED: number;

declare var constants$HTTP_STATUS_PAYLOAD_TOO_LARGE: number;

declare var constants$HTTP_STATUS_URI_TOO_LONG: number;

declare var constants$HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE: number;

declare var constants$HTTP_STATUS_RANGE_NOT_SATISFIABLE: number;

declare var constants$HTTP_STATUS_EXPECTATION_FAILED: number;

declare var constants$HTTP_STATUS_TEAPOT: number;

declare var constants$HTTP_STATUS_MISDIRECTED_REQUEST: number;

declare var constants$HTTP_STATUS_UNPROCESSABLE_ENTITY: number;

declare var constants$HTTP_STATUS_LOCKED: number;

declare var constants$HTTP_STATUS_FAILED_DEPENDENCY: number;

declare var constants$HTTP_STATUS_UNORDERED_COLLECTION: number;

declare var constants$HTTP_STATUS_UPGRADE_REQUIRED: number;

declare var constants$HTTP_STATUS_PRECONDITION_REQUIRED: number;

declare var constants$HTTP_STATUS_TOO_MANY_REQUESTS: number;

declare var constants$HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE: number;

declare var constants$HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS: number;

declare var constants$HTTP_STATUS_INTERNAL_SERVER_ERROR: number;

declare var constants$HTTP_STATUS_NOT_IMPLEMENTED: number;

declare var constants$HTTP_STATUS_BAD_GATEWAY: number;

declare var constants$HTTP_STATUS_SERVICE_UNAVAILABLE: number;

declare var constants$HTTP_STATUS_GATEWAY_TIMEOUT: number;

declare var constants$HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED: number;

declare var constants$HTTP_STATUS_VARIANT_ALSO_NEGOTIATES: number;

declare var constants$HTTP_STATUS_INSUFFICIENT_STORAGE: number;

declare var constants$HTTP_STATUS_LOOP_DETECTED: number;

declare var constants$HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED: number;

declare var constants$HTTP_STATUS_NOT_EXTENDED: number;

declare var constants$HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED: number;
	declare export function getDefaultSettings(): Settings

	declare export function getPackedSettings(settings: Settings): Settings

	declare export function getUnpackedSettings(buf: Buffer | Uint8Array): Settings

	declare export function createServer(
onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2Server

	declare export function createServer(
options: ServerOptions,
onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2Server

	declare export function createSecureServer(
onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2SecureServer

	declare export function createSecureServer(
options: SecureServerOptions,
onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2SecureServer

	declare export function connect(
authority: string | url.URL,
listener?: (session: ClientHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): ClientHttp2Session

	declare export function connect(
authority: string | url.URL,
options?: ClientSessionOptions | SecureClientSessionOptions,
listener?: (session: ClientHttp2Session, socket: net.NodeJS$Socket | tls.TLSSocket) => void): ClientHttp2Session

    }

	declare module 'perf_hooks' {
        import type {
          AsyncResource
        } from 'async_hooks';

	declare interface PerformanceEntry {

/**
 * The total number of milliseconds elapsed for this entry.
 * This value will not be meaningful for all Performance Entry types.
 */
+duration: number,

/**
 * The name of the performance entry.
 */
+name: string,

/**
 * The high resolution millisecond timestamp marking the starting time of the Performance Entry.
 */
+startTime: number,

/**
 * The type of the performance entry.
 * Currently it may be one of: 'node', 'mark', 'measure', 'gc', or 'function'.
 */
+entryType: string,

/**
 * When performanceEntry.entryType is equal to 'gc', the performance.kind property identifies
 * the type of garbage collection operation that occurred.
 * The value may be one of perf_hooks.constants.
 */
+kind?: number
} 
	declare type PerformanceNodeTiming = {

/**
 * The high resolution millisecond timestamp at which the Node.js process completed bootstrap.
 */
+bootstrapComplete: number,

/**
 * The high resolution millisecond timestamp at which cluster processing ended.
 */
+clusterSetupEnd: number,

/**
 * The high resolution millisecond timestamp at which cluster processing started.
 */
+clusterSetupStart: number,

/**
 * The high resolution millisecond timestamp at which the Node.js event loop exited.
 */
+loopExit: number,

/**
 * The high resolution millisecond timestamp at which the Node.js event loop started.
 */
+loopStart: number,

/**
 * The high resolution millisecond timestamp at which main module load ended.
 */
+moduleLoadEnd: number,

/**
 * The high resolution millisecond timestamp at which main module load started.
 */
+moduleLoadStart: number,

/**
 * The high resolution millisecond timestamp at which the Node.js process was initialized.
 */
+nodeStart: number,

/**
 * The high resolution millisecond timestamp at which preload module load ended.
 */
+preloadModuleLoadEnd: number,

/**
 * The high resolution millisecond timestamp at which preload module load started.
 */
+preloadModuleLoadStart: number,

/**
 * The high resolution millisecond timestamp at which third_party_main processing ended.
 */
+thirdPartyMainEnd: number,

/**
 * The high resolution millisecond timestamp at which third_party_main processing started.
 */
+thirdPartyMainStart: number,

/**
 * The high resolution millisecond timestamp at which the V8 platform was initialized.
 */
+v8Start: number
} & PerformanceEntry

	declare interface Performance {

/**
 * If name is not provided, removes all PerformanceFunction objects from the Performance Timeline.
 * If name is provided, removes entries with name.
 * @param name
 */
clearFunctions(name?: string): void,

/**
 * If name is not provided, removes all PerformanceMark objects from the Performance Timeline.
 * If name is provided, removes only the named mark.
 * @param name
 */
clearMarks(name?: string): void,

/**
 * If name is not provided, removes all PerformanceMeasure objects from the Performance Timeline.
 * If name is provided, removes only objects whose performanceEntry.name matches name.
 */
clearMeasures(name?: string): void,

/**
 * Returns a list of all PerformanceEntry objects in chronological order with respect to performanceEntry.startTime.
 * @return list of all PerformanceEntry objects
 */
getEntries(): PerformanceEntry[],

/**
 * Returns a list of all PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
 * whose performanceEntry.name is equal to name, and optionally, whose performanceEntry.entryType is equal to type.
 * @param name
 * @param type
 * @return list of all PerformanceEntry objects
 */
getEntriesByName(name: string, type?: string): PerformanceEntry[],

/**
 * Returns a list of all PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
 * whose performanceEntry.entryType is equal to type.
 * @param type
 * @return list of all PerformanceEntry objects
 */
getEntriesByType(type: string): PerformanceEntry[],

/**
 * Creates a new PerformanceMark entry in the Performance Timeline.
 * A PerformanceMark is a subclass of PerformanceEntry whose performanceEntry.entryType is always 'mark',
 * and whose performanceEntry.duration is always 0.
 * Performance marks are used to mark specific significant moments in the Performance Timeline.
 * @param name
 */
mark(name?: string): void,

/**
 * Creates a new PerformanceMeasure entry in the Performance Timeline.
 * A PerformanceMeasure is a subclass of PerformanceEntry whose performanceEntry.entryType is always 'measure',
 * and whose performanceEntry.duration measures the number of milliseconds elapsed since startMark and endMark.
 * 
 * The startMark argument may identify any existing PerformanceMark in the the Performance Timeline, or may identify
 * any of the timestamp properties provided by the PerformanceNodeTiming class. If the named startMark does not exist,
 * then startMark is set to timeOrigin by default.
 * 
 * The endMark argument must identify any existing PerformanceMark in the the Performance Timeline or any of the timestamp
 * properties provided by the PerformanceNodeTiming class. If the named endMark does not exist, an error will be thrown.
 * @param name
 * @param startMark
 * @param endMark
 */
measure(name: string, startMark: string, endMark: string): void,

/**
 * An instance of the PerformanceNodeTiming class that provides performance metrics for specific Node.js operational milestones.
 */
+nodeTiming: PerformanceNodeTiming,

/**
 * @return the current high resolution millisecond timestamp
 */
now(): number,

/**
 * The timeOrigin specifies the high resolution millisecond timestamp from which all performance metric durations are measured.
 */
+timeOrigin: number,

/**
 * Wraps a function within a new function that measures the running time of the wrapped function.
 * A PerformanceObserver must be subscribed to the 'function' event type in order for the timing details to be accessed.
 * @param fn
 */
timerify<T: (...optionalParams: any[]) => any>(fn: T): T
} 
	declare interface PerformanceObserverEntryList {

/**
 * @return a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime.
 */
getEntries(): PerformanceEntry[],

/**
 * @return a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
whose performanceEntry.name is equal to name, and optionally, whose performanceEntry.entryType is equal to type.
 */
getEntriesByName(name: string, type?: string): PerformanceEntry[],

/**
 * @return Returns a list of PerformanceEntry objects in chronological order with respect to performanceEntry.startTime
whose performanceEntry.entryType is equal to type.
 */
getEntriesByType(type: string): PerformanceEntry[]
} 
	declare type PerformanceObserverCallback = (list: PerformanceObserverEntryList, observer: PerformanceObserver) => void;
	declare class PerformanceObserver mixins AsyncResource {
constructor(callback: PerformanceObserverCallback): this;

/**
 * Disconnects the PerformanceObserver instance from all notifications.
 */
disconnect(): void;

/**
 * Subscribes the PerformanceObserver instance to notifications of new PerformanceEntry instances identified by options.entryTypes.
 * When options.buffered is false, the callback will be invoked once for every PerformanceEntry instance.
 * Property buffered defaults to false.
 * @param options
 */
observe(options: {
entryTypes: string[],
buffered?: boolean
}): void
}
	
      declare var npm$namespace$constants: {
        
        NODE_PERFORMANCE_GC_MAJOR: typeof constants$NODE_PERFORMANCE_GC_MAJOR,
NODE_PERFORMANCE_GC_MINOR: typeof constants$NODE_PERFORMANCE_GC_MINOR,
NODE_PERFORMANCE_GC_INCREMENTAL: typeof constants$NODE_PERFORMANCE_GC_INCREMENTAL,
NODE_PERFORMANCE_GC_WEAKCB: typeof constants$NODE_PERFORMANCE_GC_WEAKCB,
      }
declare var constants$NODE_PERFORMANCE_GC_MAJOR: number;

declare var constants$NODE_PERFORMANCE_GC_MINOR: number;

declare var constants$NODE_PERFORMANCE_GC_INCREMENTAL: number;

declare var constants$NODE_PERFORMANCE_GC_WEAKCB: number;
	declare var performance: Performance;
    }

	declare module 'trace_events' {
        
/**
 * The `Tracing` object is used to enable or disable tracing for sets of
 * categories. Instances are created using the
 * `trace_events.createTracing()` method.
 * 
 * When created, the `Tracing` object is disabled. Calling the
 * `tracing.enable()` method adds the categories to the set of enabled trace
 * event categories. Calling `tracing.disable()` will remove the categories
 * from the set of enabled trace event categories.
 */
declare export interface Tracing {

/**
 * A comma-separated list of the trace event categories covered by this
 * `Tracing` object.
 */
+categories: string,

/**
 * Disables this `Tracing` object.
 * 
 * Only trace event categories _not_ covered by other enabled `Tracing`
 * objects and _not_ specified by the `--trace-event-categories` flag
 * will be disabled.
 */
disable(): void,

/**
 * Enables this `Tracing` object for the set of categories covered by
 * the `Tracing` object.
 */
enable(): void,

/**
 * `true` only if the `Tracing` object has been enabled.
 */
+enabled: boolean
} 
	declare interface CreateTracingOptions {

/**
 * An array of trace category names. Values included in the array are
 * coerced to a string when possible. An error will be thrown if the
 * value cannot be coerced.
 */
categories: string[]
} 
	
/**
 * Creates and returns a Tracing object for the given set of categories.
 */
declare export function createTracing(options: CreateTracingOptions): Tracing

	
/**
 * Returns a comma-separated list of all currently-enabled trace event
 * categories. The current set of enabled trace event categories is
 * determined by the union of all currently-enabled `Tracing` objects and
 * any categories enabled using the `--trace-event-categories` flag.
 */
declare export function getEnabledCategories(): string

    }

    }
