declare module 'prosemirror-test-builder' {
        import type {
          Node as ProsemirrorNode,Schema
        } from 'prosemirror-model';

	declare export type NodeTypeAttributes = {
nodeType: string
} & Record<string, any>

	declare export type MarkTypeAttributes = {
markType: string
} & Record<string, any>

	declare export interface TaggedFlatObject<S: Schema= any> {
tag: Record<string, number>,
flat: Array<TaggedProsemirrorNode<S> | TaggedFlatObject<S>>
} 
	declare export type TaggedProsemirrorNode<S: Schema= any> = {} & TaggedFlatObject<S> & ProsemirrorNode

	declare type TestNodesUnion = "p"
| "pre"
| "h1"
| "h2"
| "h3"
| "li"
| "ul"
| "ol"
| "br"
| "img"
| "hr"
| "ordered_list"
| "bullet_list"
| "list_item"
| "doc"
| "paragraph"
| "blockquote"
| "horizontal_rule"
| "heading"
| "code_block"
| "text"
| "image"
| "hard_break";
	declare type TestMarksUnion = "a"
| "link"
| "em"
| "strong"
| "code";
	declare export type TestSchema = Schema<TestNodesUnion, TestMarksUnion>;
	declare type Args = Array<string | TaggedProsemirrorNode | TaggedFlatObject>;
	declare type NodeBuilderMethod<S: Schema= any> = (...args: Args) => TaggedProsemirrorNode<S>;
	declare type MarkBuilderMethod<S: Schema= any> = (...args: Args) => TaggedFlatObject<S>;
	declare export interface EqMethod {
eq(param: EqMethod): boolean
} 
	declare export type Builder = <Obj: Record<string, NodeTypeAttributes | MarkTypeAttributes>= Record<string, NodeTypeAttributes | MarkTypeAttributes>, N: string= string, M: string= string>(
testSchema: Schema<N, M>,
names: Obj) => Record<N, NodeBuilderMethod<Schema<N, M>>> & Record<M, MarkBuilderMethod<Schema<N, M>>> & $ObjMapi<Obj, <P>(P) => "There was Conditional Type, use $Call utility type">;
	declare export interface ProsemirrorTestBuilder {
schema: TestSchema,
builders: Builder,
eq(a: EqMethod, b: EqMethod): boolean,
p: NodeBuilderMethod<TestSchema>,
pre: NodeBuilderMethod<TestSchema>,
h1: NodeBuilderMethod<TestSchema>,
h2: NodeBuilderMethod<TestSchema>,
h3: NodeBuilderMethod<TestSchema>,
li: NodeBuilderMethod<TestSchema>,
ul: NodeBuilderMethod<TestSchema>,
ol: NodeBuilderMethod<TestSchema>,
br: NodeBuilderMethod<TestSchema>,
img: NodeBuilderMethod<TestSchema>,
hr: NodeBuilderMethod<TestSchema>,
a: MarkBuilderMethod<TestSchema>,
ordered_list: NodeBuilderMethod<TestSchema>,
bullet_list: NodeBuilderMethod<TestSchema>,
list_item: NodeBuilderMethod<TestSchema>,
doc: NodeBuilderMethod<TestSchema>,
paragraph: NodeBuilderMethod<TestSchema>,
blockquote: NodeBuilderMethod<TestSchema>,
horizontal_rule: NodeBuilderMethod<TestSchema>,
heading: NodeBuilderMethod<TestSchema>,
code_block: NodeBuilderMethod<TestSchema>,
text: NodeBuilderMethod<TestSchema>,
image: NodeBuilderMethod<TestSchema>,
hard_break: NodeBuilderMethod<TestSchema>,
link: MarkBuilderMethod<TestSchema>,
em: MarkBuilderMethod<TestSchema>,
strong: MarkBuilderMethod<TestSchema>,
code: MarkBuilderMethod<TestSchema>
} 
	declare var prosemirrorTestBuilder: ProsemirrorTestBuilder;
	declare export default typeof prosemirrorTestBuilder

    }
