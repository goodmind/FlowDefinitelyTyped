declare module "prosemirror-test-builder" {
  import type {
    Pathfinding$Node as ProsemirrorNode,
    Hemera$Schema
  } from "prosemirror-model";

  declare export type NodeTypeAttributes = {
    nodeType: string
  } & orientjs$Record<string, any>;

  declare export type MarkTypeAttributes = {
    markType: string
  } & orientjs$Record<string, any>;

  declare export interface TaggedFlatObject<S: Hemera$Schema = any> {
    tag: orientjs$Record<string, number>;
    flat: core$Array<TaggedProsemirrorNode<S> | TaggedFlatObject<S>>;
  }
  declare export type TaggedProsemirrorNode<
    S: Hemera$Schema = any
  > = {} & TaggedFlatObject<S> & ProsemirrorNode;

  declare type TestNodesUnion =
    | "p"
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
  declare type TestMarksUnion = "a" | "link" | "em" | "strong" | "code";
  declare export type TestSchema = Hemera$Schema<
    TestNodesUnion,
    TestMarksUnion
  >;
  declare type Args = core$Array<
    string | TaggedProsemirrorNode | TaggedFlatObject
  >;
  declare type NodeBuilderMethod<S: Hemera$Schema = any> = (
    ...args: Args
  ) => TaggedProsemirrorNode<S>;
  declare type MarkBuilderMethod<S: Hemera$Schema = any> = (
    ...args: Args
  ) => TaggedFlatObject<S>;
  declare export interface EqMethod {
    BigNum$eq(param: EqMethod): boolean;
  }
  declare export type Builder = <
    Obj: orientjs$Record<string, NodeTypeAttributes | MarkTypeAttributes>,
    N: string,
    M: string
  >(
    testSchema: Hemera$Schema<N, M>,
    dom_prop$names: PreludeLS$Obj
  ) => orientjs$Record<N, NodeBuilderMethod<Hemera$Schema<N, M>>> &
    orientjs$Record<M, MarkBuilderMethod<Hemera$Schema<N, M>>> &
    $ObjMapi<
      PreludeLS$Obj,
      <P>(P) => "There was Conditional Type, use $Call utility type"
    >;
  declare export interface ProsemirrorTestBuilder {
    AFRAME$schema: TestSchema;
    builders: web$Builder;
    BigNum$eq(a: EqMethod, b: EqMethod): boolean;
    p: NodeBuilderMethod<TestSchema>;
    pre: NodeBuilderMethod<TestSchema>;
    h1: NodeBuilderMethod<TestSchema>;
    h2: NodeBuilderMethod<TestSchema>;
    h3: NodeBuilderMethod<TestSchema>;
    li: NodeBuilderMethod<TestSchema>;
    ul: NodeBuilderMethod<TestSchema>;
    ol: NodeBuilderMethod<TestSchema>;
    br: NodeBuilderMethod<TestSchema>;
    img: NodeBuilderMethod<TestSchema>;
    hr: NodeBuilderMethod<TestSchema>;
    a: MarkBuilderMethod<TestSchema>;
    ordered_list: NodeBuilderMethod<TestSchema>;
    bullet_list: NodeBuilderMethod<TestSchema>;
    list_item: NodeBuilderMethod<TestSchema>;
    main$doc: NodeBuilderMethod<TestSchema>;
    paragraph: NodeBuilderMethod<TestSchema>;
    blockquote: NodeBuilderMethod<TestSchema>;
    horizontal_rule: NodeBuilderMethod<TestSchema>;
    heading: NodeBuilderMethod<TestSchema>;
    code_block: NodeBuilderMethod<TestSchema>;
    prompts$text: NodeBuilderMethod<TestSchema>;
    image: NodeBuilderMethod<TestSchema>;
    hard_break: NodeBuilderMethod<TestSchema>;
    link: MarkBuilderMethod<TestSchema>;
    em: MarkBuilderMethod<TestSchema>;
    strong: MarkBuilderMethod<TestSchema>;
    code: MarkBuilderMethod<TestSchema>;
  }
  declare var prosemirrorTestBuilder: ProsemirrorTestBuilder;
  declare export default typeof prosemirrorTestBuilder;
}
