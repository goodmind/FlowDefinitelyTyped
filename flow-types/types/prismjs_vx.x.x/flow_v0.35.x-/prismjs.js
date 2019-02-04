declare module 'prismjs' {
        declare export var util: Util;
	declare export var languages: Languages;
	declare export var plugins: any;
	declare export var hooks: Hooks;
	
/**
 * Used to highlight all elements on current website. Calls Prism.highlightAllUnder on `document`.
 * @see highlightAllUnder
 * @param async Whether to use Web Workers to improve performance and avoid blocking the UI when highlighting
very large chunks of code. False by default.
 * @param callback An optional callback to be invoked after the highlighting is done. Mostly useful when async
is true, since in that case, the highlighting is done asynchronously.
 */
declare export function highlightAll(async?: boolean, callback?: (element: Element) => void): void

	
/**
 * This is the most high-level function in Prism’s API. It fetches all the elements inside `container` that
 * have a .language-xxxx class and then calls Prism.highlightElement() on each one of them.
 * @param container The element which contains elements containing code.
 * @param async Whether to use Web Workers to improve performance and avoid blocking the UI when highlighting
very large chunks of code. False by default.
 * @param callback An optional callback to be invoked after the highlighting is done. Mostly useful when async
is true, since in that case, the highlighting is done asynchronously.
 */
declare export function highlightAllUnder(
container: Element,
async?: boolean,
callback?: (element: Element) => void): void

	
/**
 * Highlights the code inside a single element.
 * @param element The element containing the code. It must have a class of language-xxxx to be processed,
where xxxx is a valid language identifier.
 * @param async Whether to use Web Workers to improve performance and avoid blocking the UI when
highlighting very large chunks of code. False by default.
 * @param callback An optional callback to be invoked after the highlighting is done.
Mostly useful when async is true, since in that case, the highlighting is done asynchronously.
 */
declare export function highlightElement(element: Element, async?: boolean, callback?: (element: Element) => void): void

	
/**
 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the language
 * definitions to use, and returns a string with the HTML produced.
 * @param text A string with the code to be highlighted.
 * @param grammar - An object containing the tokens to use. Usually a language definition like
Prism.languages.markup
 * @returns The highlighted HTML
 */
declare export function highlight(
text: string,
grammar: LanguageDefinition,
language?: LanguageDefinition): string

	
/**
 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input and the
 * language definitions to use, and returns an array with the tokenized code. When the language definition includes
 * nested tokens, the function is called recursively on each of these tokens. This method could be useful in other
 * contexts as well, as a very crude parser.
 * @param text A string with the code to be highlighted.
 * @param grammar An object containing the tokens to use. Usually a language definition like
Prism.languages.markup
 * @returns An array of strings, tokens (class Prism.Token) and other arrays.
 */
declare export function tokenize(text: string, grammar: LanguageDefinition): Array<Token | string>

	declare export function fileHighlight(): void

	declare export interface Environment {
element?: Element,
language?: LanguageDefinition,
grammar?: any,
code?: any,
highlightedCode?: any,
type?: string,
content?: string,
tag?: string,
classes?: string[],
attributes?: any,
parent?: Element
} 
	declare export interface Identifier {
value: number
} 
	declare export interface Util {

/**
 * Encode raw strings in tokens in preparation to display as HTML
 */
encode(tokens: TokenNode): TokenNode,

/**
 * Determine the type of the object
 */
type(o: any): string,

/**
 * Get the unique id of this object or give it one if it does not have one
 */
objId(obj: any): Identifier,

/**
 * Deep clone a language definition (e.g. to extend it)
 */
clone(o: LanguageDefinition): LanguageDefinition
} 
	declare export interface LanguageDefinition {
keyword?: RegExp | LanguageDefinition,
number?: RegExp | LanguageDefinition,
function?: RegExp | LanguageDefinition,
string?: RegExp | LanguageDefinition,
boolean?: RegExp | LanguageDefinition,
operator?: RegExp | LanguageDefinition,
punctuation?: RegExp | LanguageDefinition,
atrule?: RegExp | LanguageDefinition,
url?: RegExp | LanguageDefinition,
selector?: RegExp | LanguageDefinition,
property?: RegExp | LanguageDefinition,
important?: RegExp | LanguageDefinition,
style?: RegExp | LanguageDefinition,

/**
 * This option can be used to define one or more aliases for the matched token. The result will be, that the styles
 * of the token and its aliases are combined. This can be useful, to combine the styling of a well known token,
 * which is already supported by most of the themes, with a semantically correct token name. The option can be
 * set to a string literal or an array of string literals. In the following example the token name latex-equation
 * is not supported by any theme, but it will be highlighted the same as a string.
 */
alias?: string,
pattern?: RegExp,

/**
 * This option mitigates JavaScript’s lack of lookbehind. When set to true, the first capturing group in the regex
 * pattern is discarded when matching this token, so it effectively behaves as if it was lookbehind
 */
lookbehind?: boolean,

/**
 * This property accepts another object literal, with tokens that are allowed to be nested in this token.
 * This makes it easier to define certain languages. However, keep in mind that they’re slower and if coded poorly,
 * can even result in infinite recursion. For an example of nested tokens, check out the Markup language definition
 */
inside?: LanguageDefinition,

/**
 * Accepts an object literal with tokens and appends them to the end of the current object literal.
 */
rest?: Token[]
} 
	declare export type Languages = LanguageMap & LanguageMapProtocol;
	declare export interface LanguageMap {

/**
 * Get a defined language's definition
 */
[key: string]: LanguageDefinition
} 
	declare export interface LanguageMapProtocol {

/**
 * Extend a language definition
 * @param id The language definition to extend
 * @param redef The new language definition to extend the original
 */
extend(id: string, redef: LanguageDefinition): LanguageDefinition,

/**
 * Insert a token before another token in a language literal
 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
 * we cannot just provide an object, we need anobject and a key.
 * @param inside The key (or language id) of the parent
 * @param before The key to insert before. If not provided, the function appends instead.
 * @param insert Object with the key/value pairs to insert
 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
 */
insertBefore(
inside: string,
before: string,
insert: LanguageDefinition,
root: LanguageDefinition): LanguageDefinition
} 
	declare export type HookCallback = (env: Environment) => void;
	declare export type AvailableHooks = "before-highlightall"
| "before-sanity-check"
| "before-highlight"
| "before-insert"
| "after-highlight"
| "complete"
| "wrap";
	declare export interface Hooks {
all: Array<Array<(env: Environment) => void>>,
add(name: AvailableHooks | string, callback: HookCallback): void,
run(name: AvailableHooks | string, env: Environment): void
} 
	declare export type TokenNode = Token | string | Array<Token | string>;
	declare export class Token  {

/**
 * Given a token or string input, convert it to highlighted HTML
 * @param type The token(s) to stringify
 * @param language The language definition that understands the given token(s)
 * @param parent The parent element element to pass into hook callbacks
 * @returns The HTML that represents the given token(s)
 */
static stringify(token: TokenNode, language: LanguageDefinition, parent: HTMLPreElement): string;

/**
 * The constructor for the Prism Token class
 * @param type The type of the token
 * @param content The contents of the token
 * @param alias Aliases for the current token (added as classes to this token's HTML)
 * @param matchedStr The matched string that generated this token
 * @param greedy Value that determines whether or not this token was generated using a greedy parsing algorithm
 */
constructor(type: string, content: TokenNode, alias: any, matchedStr: string, greedy: boolean): this;

/**
 * The type of the token
 */
type: string;

/**
 * The content of the token
 */
content: TokenNode;

/**
 * Other names for this token (added as classes to this token's HTML)
 */
alias: string
}
    }
