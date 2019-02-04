declare module 'parse5-htmlparser2-tree-adapter' {
        import typeof * as parse5 from 'parse5';

	
/**
 * htmlparser2 tree adapter Node interface.
 */
declare interface treeAdapter$Node {

/**
 * The type of the node. E.g. {@link Document} will have `type` equal to 'root'`.
 *          *
 */
type: string,

/**
 * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible node {@link type}.
 */
nodeType: number,

/**
 * Parent node.
 */
parent: treeAdapter$ParentNode,

/**
 * Same as {@link parent}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
 */
parentNode: treeAdapter$ParentNode,

/**
 * Previous sibling.
 */
prev: treeAdapter$Node,

/**
 * Same as {@link prev}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
 */
previousSibling: treeAdapter$Node,

/**
 * Next sibling.
 */
next: treeAdapter$Node,

/**
 * Same as {@link next}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
 */
nextSibling: treeAdapter$Node
} 


/**
 * htmlparser2 tree adapter ParentNode interface.
 */
declare type treeAdapter$ParentNode = {

/**
 * Child nodes.
 */
children: treeAdapter$Node[],

/**
 * Same as {@link children}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
 */
childNodes: treeAdapter$Node[],

/**
 * First child of the node.
 */
firstChild: treeAdapter$Node,

/**
 * Last child of the node.
 */
lastChild: treeAdapter$Node
} & treeAdapter$Node



/**
 * htmlparser2 tree adapter DocumentType interface.
 */
declare type treeAdapter$DocumentType = {

/**
 * The type of the node.
 */
type: "directive",

/**
 * Node name.
 */
name: "!doctype",

/**
 * Serialized doctype {@link name}, {@link publicId} and {@link systemId}.
 */
data: string,

/**
 * Document type name.
 */
"x-name": string,

/**
 * Document type public identifier.
 */
"x-publicId": string,

/**
 * Document type system identifier.
 */
"x-systemId": string
} & treeAdapter$Node



/**
 * htmlparser2 tree adapter Document interface.
 */
declare type treeAdapter$Document = {

/**
 * The type of the node.
 */
type: "root",

/**
 * The name of the node.
 */
name: "root",

/**
 * [Document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
 */
"x-mode": parse5.DocumentMode
} & treeAdapter$ParentNode



/**
 * htmlparser2 tree adapter DocumentFragment interface.
 */
declare type treeAdapter$DocumentFragment = {

/**
 * The type of the node.
 */
type: "root",

/**
 * The name of the node.
 */
name: "root"
} & treeAdapter$ParentNode



/**
 * htmlparser2 tree adapter Element interface.
 */
declare type treeAdapter$Element = {

/**
 * The name of the node. Equals to element {@link tagName}.
 */
name: string,

/**
 * Element tag name.
 */
tagName: string,

/**
 * Element namespace.
 */
namespace: string,

/**
 * Element attributes.
 */
attribs: {
[name: string]: string
},

/**
 * Element attribute namespaces.
 */
"x-attribsNamespace": {
[name: string]: string
},

/**
 * Element attribute namespace-related prefixes.
 */
"x-attribsPrefix": {
[name: string]: string
},

/**
 * Element source code location info. Available if location info is enabled via ParserOptions.
 */
sourceCodeLocation?: parse5.ElementLocation
} & treeAdapter$ParentNode



/**
 * htmlparser2 tree adapter CommentNode interface.
 */
declare type treeAdapter$CommentNode = {

/**
 * The name of the node.
 */
name: "comment",

/**
 * Comment text.
 */
data: string,

/**
 * Same as {@link data}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
 */
nodeValue: string,

/**
 * Comment source code location info. Available if location info is enabled via ParserOptions.
 */
sourceCodeLocation?: parse5.Location
} & treeAdapter$Node



/**
 * htmlparser2 tree adapter TextNode interface.
 */
declare type treeAdapter$TextNode = {

/**
 * The name of the node.
 */
name: "text",

/**
 * Text content.
 */
data: string,

/**
 * Same as {@link data}. [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
 */
nodeValue: string,

/**
 * Comment source code location info. Available if location info is enabled via ParserOptions.
 */
sourceCodeLocation?: parse5.Location
} & treeAdapter$Node

	declare var treeAdapter: parse5.TreeAdapter;
	declare module.exports: typeof treeAdapter

    }
