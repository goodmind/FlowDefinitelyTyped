declare module 'es-feature-detection' {
        declare export type ES2015Builtins = "__all"
| "Array.from"
| "Array.of"
| "Array.prototype.fill"
| "Array.prototype.find"
| "Array.prototype.findIndex"
| "Array.prototype.entries"
| "Array.prototype.keys"
| "Array.prototype.copyWithin"
| "base64"
| "Map"
| "Set"
| "WeakMap"
| "WeakSet"
| "Math.imul"
| "Math.clz32"
| "Math.fround"
| "Math.log10"
| "Math.log2"
| "Math.log1p"
| "Math.expm1"
| "Math.cosh"
| "Math.sinh"
| "Math.tanh"
| "Math.acosh"
| "Math.asinh"
| "Math.hypot"
| "Math.trunc"
| "Math.sign"
| "Math.cbrt"
| "Number.isNaN"
| "Number.isFinite"
| "Number.isInteger"
| "Number.parseInt"
| "Number.parseFloat"
| "Number.EPSILON"
| "Number.MAX_SAFE_INTEGER"
| "Number.MIN_SAFE_INTEGER"
| "Number.isSafeInteger"
| "Object.prototype.__proto__"
| "Object.is"
| "Object.setPrototypeOf"
| "Object.assign"
| "Object.getOwnPropertySymbols"
| "Promise"
| "Proxy"
| "Reflect"
| "requestAnimationFrame"
| "String.fromCodePoint"
| "String.prototype.codePointAt"
| "String.prototype.startsWith"
| "String.prototype.endsWith"
| "String.prototype.includes"
| "String.prototype.repeat"
| "String.prototype.normalize"
| "String.raw"
| "Symbol"
| "TypedArrays"
| "new.target";
	declare export type ES2016Builtins = "__all" | "Array.prototype.includes" | "TypedArray.prototype.includes";
	declare export type ES2017Builtins = "__all"
| "Atomics"
| "Object.values"
| "Object.entries"
| "Object.getOwnPropertyDescriptors"
| "String.prototype.padEnd"
| "String.prototype.padStart"
| "SharedArrayBuffer";
	declare export type ES2015Syntax = "__all"
| "for...of"
| "RegExp.prototype.sticky"
| "RegExp.prototype.unicode"
| "const"
| "let"
| "Destructuring"
| "Spread Array"
| "Spread Function call"
| "Rest parameters"
| "Default parameters"
| "Arrow function"
| "Generator function"
| "Binary literals"
| "Octal literals"
| "Template Strings"
| "Shorthand property"
| "Shorthand method"
| "Computed property"
| "Block level function declaration"
| "class";
	declare export type ES2016Syntax = "__all" | "Exponentiation operator" | "Rest destructuring";
	declare export type ES2017Syntax = "__all" | "async/await" | "Trailing parameter commas";
	declare export function builtins(
): Record<ES2015Builtins | ES2016Builtins | ES2017Builtins, boolean> & {
es2015: Record<ES2015Builtins, boolean>,
es2016: Record<ES2016Builtins, boolean>,
es2017: Record<ES2017Builtins, boolean>
}

	declare export function syntax(
): Record<ES2015Syntax | ES2016Syntax | ES2017Syntax, boolean> & {
es2015: Record<ES2015Syntax, boolean>,
es2016: Record<ES2016Syntax, boolean>,
es2017: Record<ES2017Syntax, boolean>
}

    }
