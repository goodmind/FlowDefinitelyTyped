declare module "jsdom" {
  import type { EventEmitter } from "events";

  import type { MarkupData } from "parse5";

  import typeof * as tough from "tough-cookie";

  import type { Script } from "vm";

  declare export class JSDOM {
    static fromURL(url: string, options?: FromUrlOptions): Promise<JSDOM>;
    static fromFile(url: string, options?: FromFileOptions): Promise<JSDOM>;
    static fragment(html: string): DocumentFragment;
    constructor(
      html?: string | Buffer | BinaryData,
      options?: ConstructorOptions
    ): this;
    window: DOMWindow;
    virtualConsole: VirtualConsole;
    cookieJar: CookieJar;

    /**
     * The serialize() method will return the HTML serialization of the document, including the doctype.
     */
    serialize(): string;

    /**
     * The nodeLocation() method will find where a DOM node is within the source document, returning the parse5 location info for the node.
     */
    nodeLocation(node: Node): MarkupData.ElementLocation | null;

    /**
     * The built-in vm module of Node.js allows you to create Script instances,
     * which can be compiled ahead of time and then run multiple times on a given "VM context".
     * Behind the scenes, a jsdom Window is indeed a VM context.
     * To get access to this ability, use the runVMScript() method.
     */
    runVMScript(script: Script): void;
    reconfigure(settings: ReconfigureSettings): void;
  }
  declare export interface Options {
    /**
     * referrer just affects the value read from document.referrer.
     * It defaults to no referrer (which reflects as the empty string).
     */
    referrer?: string;

    /**
     * userAgent affects the value read from navigator.userAgent, as well as the User-Agent header sent while fetching subresources.
     * It defaults to `Mozilla/5.0 (${process.platform}) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/${jsdomVersion}`.
     */
    userAgent?: string;

    /**
     * includeNodeLocations preserves the location info produced by the HTML parser,
     * allowing you to retrieve it with the nodeLocation() method (described below).
     * It defaults to false to give the best performance,
     * and cannot be used with an XML content type since our XML parser does not support location info.
     */
    includeNodeLocations?: boolean;
    runScripts?: "dangerously" | "outside-only";
    resources?: "usable" | ResourceLoader;
    virtualConsole?: VirtualConsole;
    cookieJar?: CookieJar;
    beforeParse?: (window: DOMWindow) => void;
  }
  declare export type FromUrlOptions = Options;
  declare export type FromFileOptions = Options & {
    /**
     * url sets the value returned by window.location, document.URL, and document.documentURI,
     * and affects things like resolution of relative URLs within the document
     * and the same-origin restrictions and referrer used while fetching subresources.
     * It will default to a file URL corresponding to the given filename, instead of to "about:blank".
     */
    url?: string,

    /**
     * contentType affects the value read from document.contentType, and how the document is parsed: as HTML or as XML.
     * Values that are not "text/html" or an XML mime type will throw. It will default to "application/xhtml+xml" if
     * the given filename ends in .xhtml or .xml; otherwise it will continue to default to "text/html".
     */
    contentType?: string
  };
  declare export type ConstructorOptions = Options & {
    /**
     * url sets the value returned by window.location, document.URL, and document.documentURI,
     * and affects things like resolution of relative URLs within the document
     * and the same-origin restrictions and referrer used while fetching subresources.
     * It defaults to "about:blank".
     */
    url?: string,

    /**
     * contentType affects the value read from document.contentType, and how the document is parsed: as HTML or as XML.
     * Values that are not "text/html" or an XML mime type will throw. It defaults to "text/html".
     */
    contentType?: string,

    /**
     * jsdom does not have the capability to render visual content, and will act like a headless browser by default.
     * It provides hints to web pages through APIs such as document.hidden that their content is not visible.
     *
     * When the pretendToBeVisual option is set to true, jsdom will pretend that it is rendering and displaying
     * content.
     */
    pretendToBeVisual?: boolean,

    /**
     * The maximum size in code units for the separate storage areas used by localStorage and sessionStorage.
     * Attempts to store data larger than this limit will cause a DOMException to be thrown. By default, it is set
     * to 5,000,000 code units per origin, as inspired by the HTML specification.
     */
    storageQuota?: number
  };
  declare export type DOMWindow = {
    eval(script: string): void,
    DOMException: typeof DOMException,
    Attr: typeof Attr,
    Node: typeof Node,
    Element: typeof Element,
    DocumentFragment: typeof DocumentFragment,
    Document: typeof Document,
    HTMLDocument: typeof HTMLDocument,
    XMLDocument: typeof XMLDocument,
    CharacterData: typeof CharacterData,
    Text: typeof Text,
    CDATASection: typeof CDATASection,
    ProcessingInstruction: typeof ProcessingInstruction,
    Comment: typeof Comment,
    DocumentType: typeof DocumentType,
    DOMImplementation: typeof DOMImplementation,
    NodeList: typeof NodeList,
    HTMLCollection: typeof HTMLCollection,
    HTMLOptionsCollection: typeof HTMLOptionsCollection,
    DOMStringMap: typeof DOMStringMap,
    DOMTokenList: typeof DOMTokenList,
    Event: typeof Event,
    CustomEvent: typeof CustomEvent,
    MessageEvent: typeof MessageEvent,
    ErrorEvent: typeof ErrorEvent,
    HashChangeEvent: typeof HashChangeEvent,
    FocusEvent: typeof FocusEvent,
    PopStateEvent: typeof PopStateEvent,
    UIEvent: typeof UIEvent,
    MouseEvent: typeof MouseEvent,
    KeyboardEvent: typeof KeyboardEvent,
    TouchEvent: typeof TouchEvent,
    ProgressEvent: typeof ProgressEvent,
    CompositionEvent: typeof CompositionEvent,
    WheelEvent: typeof WheelEvent,
    EventTarget: typeof EventTarget,
    Location: typeof Location,
    History: typeof History,
    Blob: typeof Blob,
    File: typeof File,
    FileList: typeof FileList,
    DOMParser: typeof DOMParser,
    FormData: typeof FormData,
    XMLHttpRequestEventTarget: XMLHttpRequestEventTarget,
    XMLHttpRequestUpload: typeof XMLHttpRequestUpload,
    NodeIterator: typeof NodeIterator,
    TreeWalker: typeof TreeWalker,
    NamedNodeMap: typeof NamedNodeMap,
    URL: typeof URL,
    URLSearchParams: typeof URLSearchParams,
    HTMLElement: typeof HTMLElement,
    HTMLAnchorElement: typeof HTMLAnchorElement,
    HTMLAppletElement: typeof HTMLAppletElement,
    HTMLAreaElement: typeof HTMLAreaElement,
    HTMLAudioElement: typeof HTMLAudioElement,
    HTMLBaseElement: typeof HTMLBaseElement,
    HTMLBodyElement: typeof HTMLBodyElement,
    HTMLBRElement: typeof HTMLBRElement,
    HTMLButtonElement: typeof HTMLButtonElement,
    HTMLCanvasElement: typeof HTMLCanvasElement,
    HTMLDataElement: typeof HTMLDataElement,
    HTMLDataListElement: typeof HTMLDataListElement,
    HTMLDirectoryElement: typeof HTMLDirectoryElement,
    HTMLDivElement: typeof HTMLDivElement,
    HTMLDListElement: typeof HTMLDListElement,
    HTMLEmbedElement: typeof HTMLEmbedElement,
    HTMLFieldSetElement: typeof HTMLFieldSetElement,
    HTMLFontElement: typeof HTMLFontElement,
    HTMLFormElement: typeof HTMLFormElement,
    HTMLFrameElement: typeof HTMLFrameElement,
    HTMLFrameSetElement: typeof HTMLFrameSetElement,
    HTMLHeadingElement: typeof HTMLHeadingElement,
    HTMLHeadElement: typeof HTMLHeadElement,
    HTMLHRElement: typeof HTMLHRElement,
    HTMLHtmlElement: typeof HTMLHtmlElement,
    HTMLIFrameElement: typeof HTMLIFrameElement,
    HTMLImageElement: typeof HTMLImageElement,
    HTMLInputElement: typeof HTMLInputElement,
    HTMLLabelElement: typeof HTMLLabelElement,
    HTMLLegendElement: typeof HTMLLegendElement,
    HTMLLIElement: typeof HTMLLIElement,
    HTMLLinkElement: typeof HTMLLinkElement,
    HTMLMapElement: typeof HTMLMapElement,
    HTMLMarqueeElement: typeof HTMLMarqueeElement,
    HTMLMediaElement: typeof HTMLMediaElement,
    HTMLMenuElement: typeof HTMLMenuElement,
    HTMLMetaElement: typeof HTMLMetaElement,
    HTMLMeterElement: typeof HTMLMeterElement,
    HTMLModElement: typeof HTMLModElement,
    HTMLObjectElement: typeof HTMLObjectElement,
    HTMLOListElement: typeof HTMLOListElement,
    HTMLOptGroupElement: typeof HTMLOptGroupElement,
    HTMLOptionElement: typeof HTMLOptionElement,
    HTMLOutputElement: typeof HTMLOutputElement,
    HTMLParagraphElement: typeof HTMLParagraphElement,
    HTMLParamElement: typeof HTMLParamElement,
    HTMLPictureElement: typeof HTMLPictureElement,
    HTMLPreElement: typeof HTMLPreElement,
    HTMLProgressElement: typeof HTMLProgressElement,
    HTMLQuoteElement: typeof HTMLQuoteElement,
    HTMLScriptElement: typeof HTMLScriptElement,
    HTMLSelectElement: typeof HTMLSelectElement,
    HTMLSourceElement: typeof HTMLSourceElement,
    HTMLSpanElement: typeof HTMLSpanElement,
    HTMLStyleElement: typeof HTMLStyleElement,
    HTMLTableCaptionElement: typeof HTMLTableCaptionElement,
    HTMLTableCellElement: typeof HTMLTableCellElement,
    HTMLTableColElement: typeof HTMLTableColElement,
    HTMLTableElement: typeof HTMLTableElement,
    HTMLTimeElement: typeof HTMLTimeElement,
    HTMLTitleElement: typeof HTMLTitleElement,
    HTMLTableRowElement: typeof HTMLTableRowElement,
    HTMLTableSectionElement: typeof HTMLTableSectionElement,
    HTMLTemplateElement: typeof HTMLTemplateElement,
    HTMLTextAreaElement: typeof HTMLTextAreaElement,
    HTMLTrackElement: typeof HTMLTrackElement,
    HTMLUListElement: typeof HTMLUListElement,
    HTMLUnknownElement: typeof HTMLUnknownElement,
    HTMLVideoElement: typeof HTMLVideoElement,
    StyleSheet: typeof StyleSheet,
    MediaList: typeof MediaList,
    CSSStyleSheet: typeof CSSStyleSheet,
    CSSRule: typeof CSSRule,
    CSSStyleRule: typeof CSSStyleRule,
    CSSMediaRule: typeof CSSMediaRule,
    CSSImportRule: typeof CSSImportRule,
    CSSStyleDeclaration: typeof CSSStyleDeclaration,
    StyleSheetList: typeof StyleSheetList,
    XPathExpression: typeof XPathExpression,
    XPathResult: typeof XPathResult,
    XPathEvaluator: typeof XPathEvaluator,
    NodeFilter: typeof NodeFilter
  } & Window;

  declare export type BinaryData =
    | ArrayBuffer
    | DataView
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array;
  declare export class VirtualConsole mixins EventEmitter {
    on<K: $Keys<Console>>(method: K, callback: $ElementType<Console, K>): this;
    on(event: "jsdomError", callback: (e: Error) => void): this;
    sendTo(console: Console, options?: VirtualConsoleSendToOptions): this;
  }
  declare export interface VirtualConsoleSendToOptions {
    omitJSDOMErrors: boolean;
  }
  declare export class CookieJar mixins tough.CookieJar {}
  declare export var toughCookie: typeof tough;
  declare export interface ReconfigureSettings {
    windowTop?: DOMWindow;
    url?: string;
  }
  declare export interface FetchOptions {
    cookieJar?: CookieJar;
    referrer?: string;
    accept?: string;
    element?:
      | HTMLScriptElement
      | HTMLLinkElement
      | HTMLIFrameElement
      | HTMLImageElement;
  }
  declare export interface ResourceLoaderConstructorOptions {
    strictSSL?: boolean;
    proxy?: string;
    userAgent?: string;
  }
  declare export class ResourceLoader {
    fetch(url: string, options: FetchOptions): Promise<Buffer> | null;
    constructor(obj?: ResourceLoaderConstructorOptions): this;
  }
}
