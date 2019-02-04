declare module 'incremental-dom' {
        declare type NameOrCtorDef = string | {
new (...args: any[]): Element
};
	
/**
 * Patches the document starting at node with the provided function. This
 * function may be called during an existing patch operation.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType" | "NO PRINT IMPLEMENTED: JSDocNonNullableType"} node The Element or Documen to patch.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} fn A function containing open/close/etc. calls that
describe the DOM.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} data An argument passed to fn to represent DOM state.
 * @return {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} The patched node.
 * @template
 */
declare export var patchInner: <T>(node: Element | DocumentFragment, fn: (data: T) => void, data?: T) => Node;
	
/**
 * Patches the document starting at node with the provided function. This
 * function may be called during an existing patch operation.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType" | "NO PRINT IMPLEMENTED: JSDocNonNullableType"} node The Element or Documen to patch.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} fn A function containing open/close/etc. calls that
describe the DOM.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} data An argument passed to fn to represent DOM state.
 * @return {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} The patched node.
 * @template
 */
declare export var patch: typeof patchInner;
	
/**
 * Patches an Element with the the provided function. Exactly one top level
 * element call should be made corresponding to `node`.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} node The Element where the patch should start.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} fn A function containing open/close/etc. calls that
describe the DOM. This should have at most one top level element call.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} data An argument passed to fn to represent DOM state.
 * @return {"NO PRINT IMPLEMENTED: JSDocNullableType"} The node if it was updated, its replacedment or null if it
was removed.
 * @template
 */
declare export var patchOuter: <T>(node: Element, fn: (data: T) => void, data?: T) => Node | null;
	
/**
 * Makes sure that the current node is an Element with a matching nameOrCtor and
 * key.
 * @param {NameOrCtorDef} nameOrCtor The tag or constructor for the Element.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} key The key used to identify this element. This can be an
empty string, but performance may be better if a unique value is used
when iterating over an array of items.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} typeId An type identifier that avoids reuse between elements that
would otherwise match.
 * @return {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} The corresponding Element.
 */
declare export var open: (nameOrCtor: NameOrCtorDef, key?: string, typeId?: any) => Element;
	
/**
 * Closes the currently open Element, removing any unvisited children if
 * necessary.
 * @return {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} The corresponding Element.
 */
declare export var close: () => Element;
	
/**
 * Gets the current Element being patched.
 * @return {"NO PRINT IMPLEMENTED: JSDocNonNullableType"}
 */
declare export var currentElement: () => Element;
	
/**
 * @return {Node} The Node that will be evaluated for the next instruction.
 */
declare export var currentPointer: () => Node;
	
/**
 * Skips the children in a subtree, allowing an Element to be closed without
 * clearing out the children.
 */
declare export var skip: () => void;
	
/**
 * Skips the next Node to be patched, moving the pointer forward to the next
 * sibling of the current pointer.
 */
declare export var skipNode: () => void;
	
/**
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} key The key used to identify this element. This can be an
empty string, but performance may be better if a unique value is used
when iterating over an array of items.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} statics An array of attribute name/value pairs of the
static attributes for the Element. These will only be set once when the
Element is created.
 * @param {"NO PRINT IMPLEMENTED: JSDocVariadicType"} var_args , Attribute name/value pairs of the dynamic attributes
for the Element.
 * @return {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} The corresponding Element.
 */
declare export var elementOpen: (
nameOrCtor: NameOrCtorDef,
key?: string,
statics?: any[],
...var_args: any[]) => Element;
	
/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} key The key used to identify this element. This can be an
empty string, but performance may be better if a unique value is used
when iterating over an array of items.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} statics An array of attribute name/value pairs of the
static attributes for the Element. These will only be set once when the
Element is created.
 */
declare export var elementOpenStart: (nameOrCtor: NameOrCtorDef, key?: string, statics?: any[]) => void;
	
/**
 * *
 * Defines a virtual attribute at this point of the DOM. This is only valid
 * when called between elementOpenStart and elementOpenEnd.
 * @param {string} name
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} value
 */
declare export var attr: (name: string, value: any) => void;
	
/**
 * Closes an open tag started with elementOpenStart.
 * @return {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} The corresponding Element.
 */
declare export var elementOpenEnd: () => Element;
	
/**
 * Closes an open virtual Element.
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @return {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} The corresponding Element.
 */
declare export var elementClose: (nameOrCtor: NameOrCtorDef) => Element;
	
/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 * @param {NameOrCtorDef} nameOrCtor The Element's tag or constructor.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} key The key used to identify this element. This can be an
empty string, but performance may be better if a unique value is used
when iterating over an array of items.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} statics An array of attribute name/value pairs of the
static attributes for the Element. These will only be set once when the
Element is created.
 * @param {"NO PRINT IMPLEMENTED: JSDocVariadicType"} var_args Attribute name/value pairs of the dynamic attributes
for the Element.
 * @return {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} The corresponding Element.
 */
declare export var elementVoid: (
nameOrCtor: NameOrCtorDef,
key?: string,
statics?: any[],
...var_args: any[]) => Element;
	
/**
 * Declares a virtual Text at this point in the document.
 * @param {string | number | boolean} value The value of the Text.
 * @param {"NO PRINT IMPLEMENTED: JSDocVariadicType"} var_args Functions to format the value which are called only when the value has
changed.
 * @return {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} The corresponding text node.
 */
declare export var text: (value: string | number | boolean) => Text;
	
/**
 * @const
 */
declare export var symbols: any;
	
/**
 * A publicly mutable object to provide custom mutators for attributes.
 * @const {!Object<string, function(!Element, string, *)>}
 */
declare export var attributes: any;
	
/**
 * Applies an attribute or property to a given Element. If the value is null
 * or undefined, it is removed from the Element. Otherwise, the value is set
 * as an attribute.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} el
 * @param {string} name The attribute's name.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} value The attribute's value.
 */
declare export var applyAttr: (el: Element, name: string, value?: boolean | number | string) => void;
	
/**
 * Applies a property to a given Element.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} el
 * @param {string} name The property's name.
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} value The property's value.
 */
declare export var applyProp: (el: Element, name: string, value?: any) => void;
	
/**
 * Imports node and its subtree, initializing caches.
 * @param {"NO PRINT IMPLEMENTED: JSDocNullableType"} node The Node to import.
 */
declare export var importNode: (node?: Node) => void;
    }
