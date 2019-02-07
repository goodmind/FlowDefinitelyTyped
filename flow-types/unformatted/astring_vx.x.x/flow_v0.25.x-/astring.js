declare module 'astring' {
        import typeof * as ESTree from 'estree';

	import 'node';

	import type {
          Stream
        } from 'stream';

	declare export interface Options {

/**
 * string to use for indentation (defaults to "  ")
 */
indent?: string,

/**
 * string to use for line endings (defaults to "\n")
 */
lineEnd?: string,

/**
 * indent level to start from (defaults to 0)
 */
startingIndentLevel?: number,

/**
 * generate comments if true (defaults to false)
 */
comments?: boolean,

/**
 * custom code generator (defaults to astring.baseGenerator)
 */
generator?: {[key: string]: any},

/**
 * source map generator (defaults to null), see https://github.com/mozilla/source-map#sourcemapgenerator
 */
sourceMap?: any
} 
	
/**
 * Returns a string representing the rendered code of the provided AST `node`. However, if an `output` stream is provided in the options, it writes to that stream and returns it.
 */
declare export function generate(node: ESTree.Node, options?: Options): string

	
/**
 * Returns a string representing the rendered code of the provided AST `node`. However, if an `output` stream is provided in the options, it writes to that stream and returns it.
 */
declare export function generate(
node: ESTree.Node,
options: Options & {

/**
 * output stream to write the rendered code to (defaults to null)
 */
output: Stream
}): Stream

	
/**
 * A code generator consists of a mapping of node names and functions that take two arguments: `node` and `state`.
 * The `node` points to the node from which to generate the code and the `state` exposes the `write` method that takes generated code strings.
 */
declare export type Generator = $ObjMapi<{[k: $ElementType<ESTree.Node, "type">]: any}, <key>(key) => (
node: Extract<ESTree.Node, {
type: key
}>,
state: {
write(s: string): void
}) => void>;
	
/**
 * Base generator that can be used to extend Astring. See https://github.com/davidbonnet/astring#extending
 */
declare export var baseGenerator: Generator;
	declare module 'global' {
        declare interface astring {
generate: typeof generate,

/**
 * Base generator that can be used to extend Astring. See https://github.com/davidbonnet/astring#extending
 */
baseGenerator: Generator
} 
	declare var astring: astring;
    }

    }
