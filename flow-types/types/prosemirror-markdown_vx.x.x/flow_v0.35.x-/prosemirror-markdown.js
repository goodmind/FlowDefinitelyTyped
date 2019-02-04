declare module 'prosemirror-markdown' {
        import type {
          ProsemirrorNode,Schema
        } from 'prosemirror-model';

	
/**
 * A configuration of a Markdown parser. Such a parser uses
 * [markdown-it](https://github.com/markdown-it/markdown-it) to
 * tokenize a file, and then runs the custom rules it is given over
 * the tokens to create a ProseMirror document tree.
 */
declare export class MarkdownParser<S: Schema>  {

/**
 * Create a parser with the given configuration. You can configure
 * the markdown-it parser to parse the dialect you want, and provide
 * a description of the ProseMirror entities those tokens map to in
 * the `tokens` object, which maps token names to descriptions of
 * what to do with them. Such a description is an object, and may
 * have the following properties:
 * 
 * **`node`**`: ?string`
 * : This token maps to a single node, whose type can be looked up
 * in the schema under the given name. Exactly one of `node`,
 * `block`, or `mark` must be set.
 * 
 * **`block`**`: ?string`
 * : This token comes in `_open` and `_close` variants (which are
 * appended to the base token name provides a the object
 * property), and wraps a block of content. The block should be
 * wrapped in a node of the type named to by the property's
 * value.
 * 
 * **`mark`**`: ?string`
 * : This token also comes in `_open` and `_close` variants, but
 * should add a mark (named by the value) to its content, rather
 * than wrapping it in a node.
 * 
 * **`attrs`**`: ?Object`
 * : Attributes for the node or mark. When `getAttrs` is provided,
 * it takes precedence.
 * 
 * **`getAttrs`**`: ?(MarkdownToken) → Object`
 * : A function used to compute the attributes for the node or mark
 * that takes a [markdown-it
 * token](https://markdown-it.github.io/markdown-it/#Token) and
 * returns an attribute object.
 * 
 * **`ignore`**`: ?bool`
 * : When true, ignore content for the matched token.
 */
constructor(schema: S, tokenizer: MarkdownIt, tokens: {
[key: string]: any
}): this;

/**
 * The value of the `tokens` object used to construct
 * this parser. Can be useful to copy and modify to base other
 * parsers on.
 */
tokens: {
[key: string]: any
};

/**
 * Parse a string as [CommonMark](http://commonmark.org/) markup,
 * and create a ProseMirror document as prescribed by this parser's
 * rules.
 */
parse(text: string): ProsemirrorNode<S>
}
	
/**
 * A parser parsing unextended [CommonMark](http://commonmark.org/),
 * without inline HTML, and producing a document in the basic schema.
 */
declare export var defaultMarkdownParser: MarkdownParser;
	
/**
 * A specification for serializing a ProseMirror document as
 * Markdown/CommonMark text.
 */
declare export class MarkdownSerializer<S: Schema>  {
constructor(nodes: {
[name: string]: (
state: MarkdownSerializerState<S>,
node: ProsemirrorNode<S>,
parent: ProsemirrorNode<S>,
index: number) => void
}, marks: {
[key: string]: any
}): this;

/**
 * The node serializer
 * functions for this serializer.
 */
nodes: {
[name: string]: (p1: MarkdownSerializerState<S>, p2: ProsemirrorNode<S>) => void
};

/**
 * The mark serializer info.
 */
marks: {
[key: string]: any
};

/**
 * Serialize the content of the given node to
 * [CommonMark](http://commonmark.org/).
 */
serialize(content: ProsemirrorNode<S>, options?: {
[key: string]: any
}): string
}
	
/**
 * A serializer for the [basic schema](#schema).
 */
declare export var defaultMarkdownSerializer: MarkdownSerializer;
	
/**
 * This is an object used to track state and expose
 * methods related to markdown serialization. Instances are passed to
 * node and mark serialization methods (see `toMarkdown`).
 */
declare export class MarkdownSerializerState<S: Schema>  {

/**
 * The options passed to the serializer.
 */
options: {
tightLists?: boolean | null
};

/**
 * Render a block, prefixing each line with `delim`, and the first
 * line in `firstDelim`. `node` should be the node that is closed at
 * the end of the block, and `f` is a function that renders the
 * content of the block.
 */
wrapBlock(
delim: string,
firstDelim: string | void,
node: ProsemirrorNode<S>,
f: () => void): void;

/**
 * Ensure the current content ends with a newline.
 */
ensureNewLine(): void;

/**
 * Prepare the state for writing output (closing closed paragraphs,
 * adding delimiters, and so on), and then optionally add content
 * (unescaped) to the output.
 */
write(content?: string): void;

/**
 * Close the block for the given node.
 */
closeBlock(node: ProsemirrorNode<S>): void;

/**
 * Add the given text to the document. When escape is not `false`,
 * it will be escaped.
 */
text(text: string, escape?: boolean): void;

/**
 * Render the given node as a block.
 */
render(node: ProsemirrorNode<S>): void;

/**
 * Render the contents of `parent` as block nodes.
 */
renderContent(parent: ProsemirrorNode<S>): void;

/**
 * Render the contents of `parent` as inline content.
 */
renderInline(parent: ProsemirrorNode<S>): void;

/**
 * Render a node's content as a list. `delim` should be the extra
 * indentation added to all lines except the first in an item,
 * `firstDelim` is a function going from an item index to a
 * delimiter for the first line of the item.
 */
renderList(
node: ProsemirrorNode<S>,
delim: string,
firstDelim: (p: number) => string): void;

/**
 * Escape the given string so that it can safely appear in Markdown
 * content. If `startOfLine` is true, also escape characters that
 * has special meaning only at the start of the line.
 */
esc(str: string, startOfLine?: boolean): string;

/**
 * Repeat the given string `n` times.
 */
repeat(str: string, n: number): string;

/**
 * Get leading and trailing whitespace from a string. Values of
 * leading or trailing property of the return object will be undefined
 * if there is no match.
 */
getEnclosingWhitespace(text: string): {
leading?: string | null,
trailing?: string | null
}
}
    }
