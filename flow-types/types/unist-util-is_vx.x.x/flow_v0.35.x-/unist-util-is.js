declare module 'unist-util-is' {
        import typeof * as Unist from 'unist';

	
/**
 * @param node Node to test
 * @param index Position of node in parent
 * @param parent Parent of node
 */
declare type unistUtilIs$TestFunction = (node: mixed, index?: number, parent?: Unist.Parent) => boolean | void;

declare type unistUtilIs$Test = unistUtilIs$TestFunction | $Shape<Unist.Node> | string | null;
	
/**
 * Unist utility to check if a node passes a test.
 * @param test When not given, checks if `node` is a `Node`.
When `string`, works like passing `function (node) {return node.type === test}`.
When `array`, checks any one of the subtests pass.
When `object`, checks that all keys in test are in node, and that they have (strictly) equal values
 * @param node Node to check. `false` is returned
 * @param index Position of `node` in `parent`
 * @param parent Parent of `node`
 * @param context Context object to invoke `test` with
 * @returns Whether test passed and `node` is a `Node` (object with `type` set to non-empty `string`).
 */
declare function unistUtilIs(
test: unistUtilIs$unistUtilIs$Test | unistUtilIs$unistUtilIs$Test[],
node: mixed,
index?: number,
parent?: Unist.Parent,
context?: any): boolean

	declare module.exports: typeof unistUtilIs

    }
