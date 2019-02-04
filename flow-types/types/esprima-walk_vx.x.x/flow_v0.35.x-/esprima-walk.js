declare module 'esprima-walk' {
        import typeof * as ESTree from 'estree';

	declare type NodeWithParent = ESTree.Node & {
parent?: ESTree.Node
};
	
/**
 * Walk the provided AST; fn is called once for each node with a `type`
 * @param {ESTree.Program} ast program to walk
 * @param {function} fn function invoked for each node with type
 */
declare function walk(ast: ESTree.Program, fn: (node: ESTree.Node) => void): void

	
      declare var npm$namespace$walk: {
        walk: typeof walk$walk,
walkAddParent: typeof walk$walkAddParent,
        
      }

/**
 * Walk the provided AST; fn is called once for each node with a `type`
 * @param {ESTree.Program} ast program to walk
 * @param {function} fn function invoked for each node
 */
declare export function walk$walk(ast: ESTree.Program, fn: (node: ESTree.Node) => void): void



/**
 * Walk the provided AST; fn is called once for each node with a `type`.
 * Adds a parent property prior to invoking fn when applicable
 * @param {ESTree.Program} ast program to walk
 * @param {function} fn function invoked for each node
 */
declare export function walk$walkAddParent(ast: ESTree.Program, fn: (node: NodeWithParent) => void): void

	declare module.exports: typeof walk$walk

    }
