declare module "prosemirror-schema-basic" {
  import type { MarkSpec, NodeSpec, Schema } from "prosemirror-model";

  /**
   * [Specs](#model.NodeSpec) for the nodes defined in this schema.
   */
  declare export var nodes: {
    doc: NodeSpec,
    paragraph: NodeSpec,
    blockquote: NodeSpec,
    horizontal_rule: NodeSpec,
    heading: NodeSpec,
    code_block: NodeSpec,
    text: NodeSpec,
    image: NodeSpec,
    hard_break: NodeSpec
  };

  /**
   * [Specs](#model.MarkSpec) for the marks in the schema.
   */
  declare export var marks: {
    link: MarkSpec,
    em: MarkSpec,
    strong: MarkSpec,
    code: MarkSpec
  };

  /**
   * This schema rougly corresponds to the document schema used by
   * [CommonMark](http://commonmark.org/), minus the list elements,
   * which are defined in the [`prosemirror-schema-list`](#schema-list)
   * module.
   *
   * To reuse elements from this schema, extend or read from its
   * `spec.nodes` and `spec.marks` [properties](#model.Schema.spec).
   */
  declare export var schema: Schema<$Keys<typeof nodes>, $Keys<typeof marks>>;
}
