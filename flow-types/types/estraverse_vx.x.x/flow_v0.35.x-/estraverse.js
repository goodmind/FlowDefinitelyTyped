declare module 'estraverse' {
        import typeof * as ESTree from 'estree';

	declare export interface Visitor {
enter?: (
node: ESTree.Node,
parentNode: ESTree.Node | null) => VisitorOption | ESTree.Node | void,
leave?: (
node: ESTree.Node,
parentNode: ESTree.Node | null) => VisitorOption | ESTree.Node | void,
fallback?: "iteration" | ((node: ESTree.Node) => string[]),
keys?: {
[nodeType: string]: string[]
}
} 
	declare export  class VisitorOption {
  constructor(...args: empty): mixed;
static +Skip: Class<VisitorOption__Skip> & VisitorOption__Skip & 0;// 0
static +Break: Class<VisitorOption__Break> & VisitorOption__Break & 1;// 1
static +Remove: Class<VisitorOption__Remove> & VisitorOption__Remove & 2;// 2

}

declare class VisitorOption__Skip mixins VisitorOption {}
declare class VisitorOption__Break mixins VisitorOption {}
declare class VisitorOption__Remove mixins VisitorOption {}

	declare export function traverse(ast: ESTree.Node, visitor: Visitor): void

	declare export function replace(ast: ESTree.Node, visitor: Visitor): ESTree.Node

    }
