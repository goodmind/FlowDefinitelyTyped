declare module 'idyll-compiler' {
        declare export type PropType = "variable" | "value" | "expression";
	declare export type PropData = string | number | boolean;
	declare export type PropKey = string;
	declare export type PropValue = [PropType, PropData];
	declare export type Property = [PropKey, PropValue];
	declare type __RecursiveNode<T> = [string, Property[], T[]];
	declare export type TreeNode = {} & __RecursiveNode<Node>

	declare export type Node = TreeNode | string;
	declare export type AST = Node[];
	declare export type PostProcessor = ((ast: AST) => AST) | ((ast: AST, callback: (err: any, value: AST) => void) => void);
	declare export interface Options {
spellcheck?: boolean,
smartquotes?: boolean,

/**
 * If false and there is no postprocessors, compiler returns the AST synchronously
 * Otherwise, a promise is returned
 */
async?: boolean,

/**
 * compiler plugins
 * If provided, compiler always compiles asynchronously
 */
postProcessors?: PostProcessor[]
} 
	
/**
 * Compiles the given idyllMarkup and returns an AST either synchronously
 * or asynchronously.
 * 
 * If postProcessors are provided or options.async is set to true:
 *       compiler returns a promise
 * Otherwise, compile returns the AST synchronously
 */
declare function compiler(input: string, options?: Options, callback?: () => void): Promise<AST> | AST

	declare export default typeof compiler

    }
