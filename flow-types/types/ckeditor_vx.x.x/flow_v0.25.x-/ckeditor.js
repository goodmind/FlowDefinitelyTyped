declare module "ckeditor" {
  declare interface Window {
    CKEDITOR_BASEPATH?: string;
  }

  declare var npm$namespace$CKEDITOR: {
    add: typeof CKEDITOR$add,
    addCss: typeof CKEDITOR$addCss,
    addTemplate: typeof CKEDITOR$addTemplate,
    appendTo: typeof CKEDITOR$appendTo,
    domReady: typeof CKEDITOR$domReady,
    editorConfig: typeof CKEDITOR$editorConfig,
    error: typeof CKEDITOR$error,
    getCss: typeof CKEDITOR$getCss,
    getTemplate: typeof CKEDITOR$getTemplate,
    getUrl: typeof CKEDITOR$getUrl,
    inline: typeof CKEDITOR$inline,
    inlineAll: typeof CKEDITOR$inlineAll,
    loadFullCore: typeof CKEDITOR$loadFullCore,
    replace: typeof CKEDITOR$replace,
    replaceAll: typeof CKEDITOR$replaceAll,
    warn: typeof CKEDITOR$warn,
    capture: typeof CKEDITOR$capture,
    define: typeof CKEDITOR$define,
    fire: typeof CKEDITOR$fire,
    fireOnce: typeof CKEDITOR$fireOnce,
    hasListeners: typeof CKEDITOR$hasListeners,
    on: typeof CKEDITOR$on,
    once: typeof CKEDITOR$once,
    removeAllListeners: typeof CKEDITOR$removeAllListeners,
    removeListener: typeof CKEDITOR$removeListener,
    disableAutoInline: typeof CKEDITOR$disableAutoInline,
    replaceClass: typeof CKEDITOR$replaceClass,
    skinName: typeof CKEDITOR$skinName,
    ALT: typeof CKEDITOR$ALT,
    CTRL: typeof CKEDITOR$CTRL,
    DATA_TRANSFER_CROSS_EDITORS: typeof CKEDITOR$DATA_TRANSFER_CROSS_EDITORS,
    DATA_TRANSFER_EXTERNAL: typeof CKEDITOR$DATA_TRANSFER_EXTERNAL,
    DATA_TRANSFER_INTERNAL: typeof CKEDITOR$DATA_TRANSFER_INTERNAL,
    DIALOG_RESIZE_BOTH: typeof CKEDITOR$DIALOG_RESIZE_BOTH,
    DIALOG_RESIZE_HEIGHT: typeof CKEDITOR$DIALOG_RESIZE_HEIGHT,
    DIALOG_RESIZE_NONE: typeof CKEDITOR$DIALOG_RESIZE_NONE,
    DIALOG_RESIZE_WIDTH: typeof CKEDITOR$DIALOG_RESIZE_WIDTH,
    DIALOG_STATE_BUSY: typeof CKEDITOR$DIALOG_STATE_BUSY,
    DIALOG_STATE_IDLE: typeof CKEDITOR$DIALOG_STATE_IDLE,
    ELEMENT_MODE_APPENDTO: typeof CKEDITOR$ELEMENT_MODE_APPENDTO,
    ELEMENT_MODE_INLINE: typeof CKEDITOR$ELEMENT_MODE_INLINE,
    ELEMENT_MODE_NONE: typeof CKEDITOR$ELEMENT_MODE_NONE,
    ELEMENT_MODE_REPLACE: typeof CKEDITOR$ELEMENT_MODE_REPLACE,
    END: typeof CKEDITOR$END,
    ENLARGE_BLOCK_CONTENTS: typeof CKEDITOR$ENLARGE_BLOCK_CONTENTS,
    ENLARGE_ELEMENT: typeof CKEDITOR$ENLARGE_ELEMENT,
    ENLARGE_INLINE: typeof CKEDITOR$ENLARGE_INLINE,
    ENLARGE_LIST_ITEM_CONTENTS: typeof CKEDITOR$ENLARGE_LIST_ITEM_CONTENTS,
    ENTER_BR: typeof CKEDITOR$ENTER_BR,
    ENTER_DIV: typeof CKEDITOR$ENTER_DIV,
    ENTER_P: typeof CKEDITOR$ENTER_P,
    EVENT_PHASE_AT_TARGET: typeof CKEDITOR$EVENT_PHASE_AT_TARGET,
    EVENT_PHASE_BUBBLING: typeof CKEDITOR$EVENT_PHASE_BUBBLING,
    EVENT_PHASE_CAPTURING: typeof CKEDITOR$EVENT_PHASE_CAPTURING,
    FILTER_SKIP_TREE: typeof CKEDITOR$FILTER_SKIP_TREE,
    LINEUTILS_AFTER: typeof CKEDITOR$LINEUTILS_AFTER,
    LINEUTILS_BEFORE: typeof CKEDITOR$LINEUTILS_BEFORE,
    LINEUTIS_INSIDE: typeof CKEDITOR$LINEUTIS_INSIDE,
    MOUSE_BUTTON_LEFT: typeof CKEDITOR$MOUSE_BUTTON_LEFT,
    MOUSE_BUTTON_MIDDLE: typeof CKEDITOR$MOUSE_BUTTON_MIDDLE,
    MOUSE_BUTTON_RIGHT: typeof CKEDITOR$MOUSE_BUTTON_RIGHT,
    NODE_COMMENT: typeof CKEDITOR$NODE_COMMENT,
    NODE_DOCUMENT: typeof CKEDITOR$NODE_DOCUMENT,
    NODE_DOCUMENT_FRAGMENT: typeof CKEDITOR$NODE_DOCUMENT_FRAGMENT,
    NODE_ELEMENT: typeof CKEDITOR$NODE_ELEMENT,
    NODE_TEXT: typeof CKEDITOR$NODE_TEXT,
    POSITION_AFTER_END: typeof CKEDITOR$POSITION_AFTER_END,
    POSITION_AFTER_START: typeof CKEDITOR$POSITION_AFTER_START,
    POSITION_BEFORE_END: typeof CKEDITOR$POSITION_BEFORE_END,
    POSITION_BEFORE_START: typeof CKEDITOR$POSITION_BEFORE_START,
    POSITION_CONTAINS: typeof CKEDITOR$POSITION_CONTAINS,
    POSITION_DISCONNECTED: typeof CKEDITOR$POSITION_DISCONNECTED,
    POSITION_FOLLOWING: typeof CKEDITOR$POSITION_FOLLOWING,
    POSITION_IDENTICAL: typeof CKEDITOR$POSITION_IDENTICAL,
    POSITION_IS_CONTAINED: typeof CKEDITOR$POSITION_IS_CONTAINED,
    POSITION_PRECEDING: typeof CKEDITOR$POSITION_PRECEDING,
    SELECTION_ELEMENT: typeof CKEDITOR$SELECTION_ELEMENT,
    SELECTION_NONE: typeof CKEDITOR$SELECTION_NONE,
    SELECTION_TEXT: typeof CKEDITOR$SELECTION_TEXT,
    SHIFT: typeof CKEDITOR$SHIFT,
    SHRINK_ELEMENT: typeof CKEDITOR$SHRINK_ELEMENT,
    SHRINK_TEXT: typeof CKEDITOR$SHRINK_TEXT,
    START: typeof CKEDITOR$START,
    STYLE_BLOCK: typeof CKEDITOR$STYLE_BLOCK,
    STYLE_INLINE: typeof CKEDITOR$STYLE_INLINE,
    STYLE_OBJECT: typeof CKEDITOR$STYLE_OBJECT,
    TRISTATE_DISABLED: typeof CKEDITOR$TRISTATE_DISABLED,
    TRISTATE_OFF: typeof CKEDITOR$TRISTATE_OFF,
    TRISTATE_ON: typeof CKEDITOR$TRISTATE_ON,
    UI_BUTTON: typeof CKEDITOR$UI_BUTTON,
    UI_MENUBUTTON: typeof CKEDITOR$UI_MENUBUTTON,
    UI_PANEL: typeof CKEDITOR$UI_PANEL,
    UI_PANELBUTTON: typeof CKEDITOR$UI_PANELBUTTON,
    UI_RICHCOMBO: typeof CKEDITOR$UI_RICHCOMBO,
    UI_SEPARATOR: typeof CKEDITOR$UI_SEPARATOR,
    VERBOSITY_ERROR: typeof CKEDITOR$VERBOSITY_ERROR,
    VERBOSITY_WARN: typeof CKEDITOR$VERBOSITY_WARN,
    basePath: typeof CKEDITOR$basePath,
    currentInstance: typeof CKEDITOR$currentInstance,
    document: typeof CKEDITOR$document,
    instances: typeof CKEDITOR$instances,
    loadFullCoreTimeout: typeof CKEDITOR$loadFullCoreTimeout,
    revision: typeof CKEDITOR$revision,
    rnd: typeof CKEDITOR$rnd,
    status: typeof CKEDITOR$status,
    timestamp: typeof CKEDITOR$timestamp,
    verbosity: typeof CKEDITOR$verbosity,
    version: typeof CKEDITOR$version,
    config: typeof CKEDITOR$config,
    dtd: typeof CKEDITOR$dtd,
    stylesSet: typeof CKEDITOR$stylesSet,

    command: typeof CKEDITOR$command,
    dialog: typeof CKEDITOR$dialog,
    dialogCommand: typeof CKEDITOR$dialogCommand,
    editable: typeof CKEDITOR$editable,
    editor: typeof CKEDITOR$editor,
    event: typeof CKEDITOR$event,
    filter: typeof CKEDITOR$filter,
    focusManager: typeof CKEDITOR$focusManager,
    htmlDataProcessor: typeof CKEDITOR$htmlDataProcessor,
    htmlWriter: typeof CKEDITOR$htmlWriter,
    keystrokeHandler: typeof CKEDITOR$keystrokeHandler,
    menu: typeof CKEDITOR$menu,
    resourceManager: typeof CKEDITOR$resourceManager,
    style: typeof CKEDITOR$style,
    styleCommand: typeof CKEDITOR$styleCommand,
    template: typeof CKEDITOR$template,
    ui: typeof CKEDITOR$ui,
    xml: typeof CKEDITOR$xml,
    dom: typeof npm$namespace$CKEDITOR$dom,
    ajax: typeof npm$namespace$CKEDITOR$ajax,
    dialog: typeof npm$namespace$CKEDITOR$dialog,
    env: typeof npm$namespace$CKEDITOR$env,
    fileTools: typeof npm$namespace$CKEDITOR$fileTools,
    filter: typeof npm$namespace$CKEDITOR$filter,
    htmlParser: typeof npm$namespace$CKEDITOR$htmlParser,
    lang: typeof npm$namespace$CKEDITOR$lang,
    loader: typeof npm$namespace$CKEDITOR$loader,
    plugins: typeof npm$namespace$CKEDITOR$plugins,
    scriptLoader: typeof npm$namespace$CKEDITOR$scriptLoader,
    skin: typeof npm$namespace$CKEDITOR$skin,
    style: typeof npm$namespace$CKEDITOR$style,
    tools: typeof npm$namespace$CKEDITOR$tools,
    ui: typeof npm$namespace$CKEDITOR$ui
  };
  declare var CKEDITOR$disableAutoInline: boolean;

  declare var CKEDITOR$replaceClass: string;

  declare var CKEDITOR$skinName: string;

  declare var CKEDITOR$ALT: number;

  declare var CKEDITOR$CTRL: number;

  declare var CKEDITOR$DATA_TRANSFER_CROSS_EDITORS: number;

  declare var CKEDITOR$DATA_TRANSFER_EXTERNAL: number;

  declare var CKEDITOR$DATA_TRANSFER_INTERNAL: number;

  declare var CKEDITOR$DIALOG_RESIZE_BOTH: number;

  declare var CKEDITOR$DIALOG_RESIZE_HEIGHT: number;

  declare var CKEDITOR$DIALOG_RESIZE_NONE: number;

  declare var CKEDITOR$DIALOG_RESIZE_WIDTH: number;

  declare var CKEDITOR$DIALOG_STATE_BUSY: number;

  declare var CKEDITOR$DIALOG_STATE_IDLE: number;

  declare var CKEDITOR$ELEMENT_MODE_APPENDTO: number;

  declare var CKEDITOR$ELEMENT_MODE_INLINE: number;

  declare var CKEDITOR$ELEMENT_MODE_NONE: number;

  declare var CKEDITOR$ELEMENT_MODE_REPLACE: number;

  declare var CKEDITOR$END: number;

  declare var CKEDITOR$ENLARGE_BLOCK_CONTENTS: number;

  declare var CKEDITOR$ENLARGE_ELEMENT: number;

  declare var CKEDITOR$ENLARGE_INLINE: number;

  declare var CKEDITOR$ENLARGE_LIST_ITEM_CONTENTS: number;

  declare var CKEDITOR$ENTER_BR: number;

  declare var CKEDITOR$ENTER_DIV: number;

  declare var CKEDITOR$ENTER_P: number;

  declare var CKEDITOR$EVENT_PHASE_AT_TARGET: number;

  declare var CKEDITOR$EVENT_PHASE_BUBBLING: number;

  declare var CKEDITOR$EVENT_PHASE_CAPTURING: number;

  declare var CKEDITOR$FILTER_SKIP_TREE: number;

  declare var CKEDITOR$LINEUTILS_AFTER: number;

  declare var CKEDITOR$LINEUTILS_BEFORE: number;

  declare var CKEDITOR$LINEUTIS_INSIDE: number;

  declare var CKEDITOR$MOUSE_BUTTON_LEFT: number;

  declare var CKEDITOR$MOUSE_BUTTON_MIDDLE: number;

  declare var CKEDITOR$MOUSE_BUTTON_RIGHT: number;

  declare var CKEDITOR$NODE_COMMENT: number;

  declare var CKEDITOR$NODE_DOCUMENT: number;

  declare var CKEDITOR$NODE_DOCUMENT_FRAGMENT: number;

  declare var CKEDITOR$NODE_ELEMENT: number;

  declare var CKEDITOR$NODE_TEXT: number;

  declare var CKEDITOR$POSITION_AFTER_END: number;

  declare var CKEDITOR$POSITION_AFTER_START: number;

  declare var CKEDITOR$POSITION_BEFORE_END: number;

  declare var CKEDITOR$POSITION_BEFORE_START: number;

  declare var CKEDITOR$POSITION_CONTAINS: number;

  declare var CKEDITOR$POSITION_DISCONNECTED: number;

  declare var CKEDITOR$POSITION_FOLLOWING: number;

  declare var CKEDITOR$POSITION_IDENTICAL: number;

  declare var CKEDITOR$POSITION_IS_CONTAINED: number;

  declare var CKEDITOR$POSITION_PRECEDING: number;

  declare var CKEDITOR$SELECTION_ELEMENT: number;

  declare var CKEDITOR$SELECTION_NONE: number;

  declare var CKEDITOR$SELECTION_TEXT: number;

  declare var CKEDITOR$SHIFT: number;

  declare var CKEDITOR$SHRINK_ELEMENT: number;

  declare var CKEDITOR$SHRINK_TEXT: number;

  declare var CKEDITOR$START: number;

  declare var CKEDITOR$STYLE_BLOCK: string;

  declare var CKEDITOR$STYLE_INLINE: string;

  declare var CKEDITOR$STYLE_OBJECT: string;

  declare var CKEDITOR$TRISTATE_DISABLED: number;

  declare var CKEDITOR$TRISTATE_OFF: number;

  declare var CKEDITOR$TRISTATE_ON: number;

  declare var CKEDITOR$UI_BUTTON: string;

  declare var CKEDITOR$UI_MENUBUTTON: string;

  declare var CKEDITOR$UI_PANEL: string;

  declare var CKEDITOR$UI_PANELBUTTON: string;

  declare var CKEDITOR$UI_RICHCOMBO: string;

  declare var CKEDITOR$UI_SEPARATOR: string;

  declare var CKEDITOR$VERBOSITY_ERROR: number;

  declare var CKEDITOR$VERBOSITY_WARN: number;

  declare var CKEDITOR$basePath: string;

  declare var CKEDITOR$currentInstance: CKEDITOR$editor;

  declare var CKEDITOR$document: CKEDITOR$dom$document;

  declare var CKEDITOR$instances: {
    [id: string]: CKEDITOR$editor
  };

  declare var CKEDITOR$loadFullCoreTimeout: number;

  declare var CKEDITOR$revision: string;

  declare var CKEDITOR$rnd: number;

  declare var CKEDITOR$status: string;

  declare var CKEDITOR$timestamp: string;

  declare var CKEDITOR$verbosity: number;

  declare var CKEDITOR$version: string;

  declare var CKEDITOR$config: CKEDITOR$config;

  declare function CKEDITOR$add(editor: CKEDITOR$editor): void;

  declare function CKEDITOR$addCss(css: string): void;

  declare function CKEDITOR$addTemplate(
    name: string,
    source: string
  ): CKEDITOR$template;

  declare function CKEDITOR$appendTo(
    element: string | HTMLElement,
    config?: CKEDITOR$config,
    data?: string
  ): CKEDITOR$editor;

  declare function CKEDITOR$domReady(): void;

  declare function CKEDITOR$editorConfig(config: CKEDITOR$config): void;

  declare function CKEDITOR$error(
    errorCode: string,
    additionalData?: any
  ): void;

  declare function CKEDITOR$getCss(): string;

  declare function CKEDITOR$getTemplate(name: string): CKEDITOR$template;

  declare function CKEDITOR$getUrl(resource: string): string;

  declare function CKEDITOR$inline(
    element: string | HTMLElement,
    instanceConfig?: CKEDITOR$config
  ): CKEDITOR$editor;

  declare function CKEDITOR$inlineAll(): void;

  declare function CKEDITOR$loadFullCore(): void;

  declare function CKEDITOR$replace(
    element: string | HTMLTextAreaElement,
    config?: CKEDITOR$config
  ): CKEDITOR$editor;

  declare function CKEDITOR$replaceAll(className?: string): void;

  declare function CKEDITOR$replaceAll(
    assertionFunction: (
      textarea: HTMLTextAreaElement,
      config: CKEDITOR$config
    ) => boolean
  ): void;

  declare function CKEDITOR$warn(errorCode: string, additionalData?: any): void;

  declare function CKEDITOR$capture(): void;

  declare function CKEDITOR$define(
    name: string,
    meta: {
      [key: string]: any
    }
  ): void;

  declare function CKEDITOR$fire(
    eventName: string,
    data?: {
      [key: string]: any
    },
    editor?: CKEDITOR$editor
  ): any;

  declare function CKEDITOR$fireOnce(
    eventName: string,
    data?: {
      [key: string]: any
    },
    editor?: CKEDITOR$editor
  ): any;

  declare function CKEDITOR$hasListeners(eventName: string): boolean;

  declare function CKEDITOR$on(
    eventName: string,
    listenerFunction: (eventInfo: CKEDITOR$eventInfo) => void,
    scopeObj?: {
      [key: string]: any
    },
    listenerData?: {
      [key: string]: any
    },
    priority?: number
  ): void;

  declare function CKEDITOR$once(
    eventName: string,
    listenerFunction: (eventInfo: CKEDITOR$eventInfo) => void,
    scopeObj?: {
      [key: string]: any
    },
    listenerData?: {
      [key: string]: any
    },
    priority?: number
  ): void;

  declare function CKEDITOR$removeAllListeners(): void;

  declare function CKEDITOR$removeListener(
    eventName: string,
    listenerFunction: (eventInfo: CKEDITOR$eventInfo) => void
  ): void;

  declare interface CKEDITOR$listenerRegistration {
    removeListener: () => void;
  }

  declare var npm$namespace$CKEDITOR$dom: {
    comment: typeof CKEDITOR$dom$comment,
    document: typeof CKEDITOR$dom$document,
    documentFragment: typeof CKEDITOR$dom$documentFragment,
    domObject: typeof CKEDITOR$dom$domObject,
    element: typeof CKEDITOR$dom$element,
    elementPath: typeof CKEDITOR$dom$elementPath,
    event: typeof CKEDITOR$dom$event,
    iterator: typeof CKEDITOR$dom$iterator,
    node: typeof CKEDITOR$dom$node,
    nodeList: typeof CKEDITOR$dom$nodeList,
    range: typeof CKEDITOR$dom$range,
    rangeList: typeof CKEDITOR$dom$rangeList,
    selection: typeof CKEDITOR$dom$selection,
    text: typeof CKEDITOR$dom$text,
    walker: typeof CKEDITOR$dom$walker,
    window: typeof CKEDITOR$dom$window
  };
  declare interface CKEDITOR$dom$bookmark {
    startNode: CKEDITOR$dom$node | string;
    endNode: CKEDITOR$dom$node | string;
    serializable: boolean;
    collapsed: boolean;
  }

  declare interface CKEDITOR$dom$bookmark2 {
    start: number[];
    end: number[];
    startOffset: number;
    endOffset: number;
    collapsed: boolean;
    normalized: boolean;
    is2: boolean;
  }

  declare class CKEDITOR$dom$comment mixins CKEDITOR$dom$node {
    notification$type: number;
    constructor(
      comment: string | Node,
      ownerDocument?: CKEDITOR$document
    ): this;
    getOuterHtml(): string;
  }

  declare class CKEDITOR$dom$document mixins CKEDITOR$dom$domObject {
    $: Document;
    notification$type: number;
    constructor(domDocument: {
      [key: string]: any
    }): this;
    appendStyleSheet(cssFileUrl: string): void;
    appendStyleText(cssStyleText: string): CSSStyleSheet;
    createElement(
      name: string,
      attribsAndStyles?: {
        attributes?: {
          [key: string]: string
        },
        styles?: {
          [key: string]: string
        }
      }
    ): htmlParser$element;
    createText(text: string): htmlParser$element;
    find(selector: string): dom$nodeList;
    findOne(selector: string): htmlParser$element;
    focus(): void;
    getActive(): htmlParser$element;
    getBody(): htmlParser$element;
    getByAddress(address: any[], normalized?: boolean): htmlParser$node;
    getById(elementId: string): htmlParser$element;
    getDocumentElement(): htmlParser$element;
    getElementsByTag(tagName: string): dom$nodeList;
    getHead(): htmlParser$element;
    getSelection(): dom$selection;
    getWindow(): dom$window;
    write(html: string): void;
  }

  declare class CKEDITOR$dom$documentFragment mixins CKEDITOR$dom$node {
    notification$type: number;
    constructor(nodeOrDoc: {
      [key: string]: any
    }): this;
    insertAfterNode(node: htmlParser$node): void;
  }

  declare class CKEDITOR$dom$domObject mixins CKEDITOR$event {
    $: any;
    constructor(nativeDomObject: {
      [key: string]: any
    }): this;
    clearCustomData(): void;
    equals(object: any): boolean;
    getCustomData(key: string): any;
    getPrivate(): any;
    getUniqueId(): number;
    removeAllListeners(): void;
    removeCustomData(key: string): any;
    setCustomData(key: string, value: any): CKEDITOR$dom$domObject;
  }

  declare class CKEDITOR$dom$element mixins CKEDITOR$dom$node {
    $: HTMLElement;
    notification$type: number;
    constructor(
      element: string | HTMLElement,
      ownerDocument?: CKEDITOR$dom$document
    ): this;
    addClass(className: string): void;
    append(node: htmlParser$node | string, toStart?: boolean): htmlParser$node;
    appendBogus(force: boolean): void;
    appendHtml(html: string): void;
    appendText(text: string): htmlParser$node;
    breakParent(parent: CKEDITOR$dom$element): void;
    contains(node: htmlParser$node): boolean;
    copyAttributes(
      dest: CKEDITOR$dom$element,
      skipAttributes: {
        [key: string]: string
      }
    ): void;
    data(name: string, value?: string | false): string;
    disableContextMenu(): void;
    find(selector: string): dom$nodeList;
    findOne(selector: string): CKEDITOR$dom$element;
    focus(defer?: boolean): void;
    focusNext(ignoreChildren?: boolean, indexToUse?: number): void;
    focusPrevious(ignoreChildren?: boolean, indexToUse?: number): void;
    forEach(
      callback: (node: htmlParser$node) => void,
      type?: number,
      skipRoot?: boolean
    ): void;
    getAttribute(name: string): string;
    getBogus(): htmlParser$node | boolean;
    getChild(indices: number | number[]): htmlParser$node;
    getChildCount(): number;
    getChildren(): dom$nodeList;
    getClientRect(): ClientRect;
    getComputedStyle(propertyName: string): string;
    getDirection(useComputed: boolean): string;
    getDocumentPosition(refDocument: CKEDITOR$dom$document): dom$position;
    getDtd(): CKEDITOR$dtdDefinition;
    getEditor(): CKEDITOR$editor;
    getElementsByTag(tagName: string): dom$nodeList;
    getFirst(evaluator?: (node: htmlParser$node) => boolean): htmlParser$node;
    getFrameDocument(): CKEDITOR$dom$document;
    getHtml(): string;
    getId(): string;
    getLast(evaluator?: (node: htmlParser$node) => boolean): htmlParser$node;
    getName(): string;
    getNameAtt(): string;
    getOuterHtml(): string;
    getPositionedAncestor(): CKEDITOR$dom$element;
    getSize(type: string, isBorderBox: boolean): void;
    getStyle(name: string): string;
    getTabIndex(): number;
    getText(): string;
    getValue(): string;
    getWindow(): dom$window;
    hasAttributes(): boolean;
    hasAttribute(name: string): boolean;
    hasClass(className: string): boolean;
    hide(): void;
    is(...name: string[]): boolean;
    is(name: any): boolean;
    isBlockBoundary(customNodeNames: {
      [tagName: string]: 1
    }): boolean;
    isEditable(textCursor?: boolean): boolean;
    isEmptyInlineRemoveable(): boolean;
    isIdentical(otherElement: CKEDITOR$dom$element): boolean;
    isVisible(): boolean;
    mergeSiblings(inlineOnly?: boolean): void;
    moveChildren(target: CKEDITOR$dom$element, toStart?: boolean): void;
    removeAttribute(name: string): void;
    removeAttributes(attributes?: string[]): void;
    removeClass(className: string): void;
    removeStyle(name: string): void;
    renameNode(newTag: string): void;
    scrollIntoParent(
      parent: CKEDITOR$dom$element | dom$window,
      alignToTop: boolean,
      hscroll: boolean
    ): void;
    scrollIntoView(alignToTop?: boolean): void;
    setAttribute(name: string, value: string): CKEDITOR$dom$element;
    setAttributes(attributesPairs: {
      [key: string]: string
    }): CKEDITOR$dom$element;
    setHtml(html: string): string;
    setOpacity(opacity: number): void;
    setSize(type: string, size: number, isBorderBox: boolean): void;
    setState(state: number, base?: string, useAria?: boolean): void;
    setStyle(name: string, value: string): CKEDITOR$dom$element;
    setStyles(stylesPair: {
      [key: string]: string
    }): CKEDITOR$dom$element;
    setText(text: string): string;
    setValue(value: string): CKEDITOR$dom$element;
    show(): void;
    unselectable(): void;
    static clearAllMarkers(database: any): any;
    static clearMarkers(
      database: any,
      element: CKEDITOR$dom$element,
      removeFromDatabase: boolean
    ): void;
    static createFromHtml(html: string): CKEDITOR$dom$element;
    static get(
      element: string | HTMLElement | CKEDITOR$dom$element
    ): CKEDITOR$dom$element;
    static setMarker(
      database: any,
      element: CKEDITOR$dom$element,
      name: string,
      value: any
    ): CKEDITOR$dom$element;
  }

  declare class CKEDITOR$dom$elementPath {
    panel$block: CKEDITOR$dom$element;
    blockLimit: CKEDITOR$dom$element;
    elements: CKEDITOR$dom$element[];
    lastElement: CKEDITOR$dom$element;
    root: CKEDITOR$dom$element;
    constructor(
      startNode: CKEDITOR$dom$element,
      root?: CKEDITOR$dom$element
    ): this;
    compare(otherPath: CKEDITOR$dom$elementPath): boolean;
    contains(
      query:
        | string
        | string[]
        | ((element: CKEDITOR$dom$element) => boolean)
        | {
            [key: string]: any
          }
        | CKEDITOR$dom$element,
      excludeRoot?: boolean,
      fromTop?: boolean
    ): CKEDITOR$dom$element;
    direction(): "ltr" | "rtl";
    isContextFor(tag: string): boolean;
  }

  declare class CKEDITOR$dom$event {
    constructor(domEvent: Event): this;
    getKey(): number;
    getKeystroke(): number;
    preventDefault(stopPropagation?: boolean): void;
    stopPropagation(): void;
    getTarget(): htmlParser$node;
    getPhase(): number;
    getPhaseOffset(): dom$position;
    on(
      eventName: string,
      listenerFunction: (eventInfo: CKEDITOR$eventInfo) => void,
      scopeObj?: any,
      listenerData?: any,
      priority?: number
    ): {
      removeListener: () => void
    };
  }

  declare class CKEDITOR$dom$iterator {
    activeFilter: array$filter;
    enforceRealBlocks: boolean;
    enlargeBr: boolean;
    array$filter: array$filter;
    forceBrBreak: boolean;
    dom$range: dom$range;
    constructor(range: dom$range): this;
    getNextParagraph(blockTag?: string): CKEDITOR$dom$element;
  }

  declare class CKEDITOR$dom$node mixins CKEDITOR$dom$domObject {
    notification$type: number;
    constructor(domNode: Node): this;
    appendTo(element: CKEDITOR$dom$element): CKEDITOR$dom$element;
    clone(includeChildren: boolean, cloneId: boolean): CKEDITOR$dom$node;
    hasPrevious(): boolean;
    hasNext(): boolean;
    insertAfter(node: CKEDITOR$dom$node): CKEDITOR$dom$node;
    insertBefore(node: CKEDITOR$dom$node): CKEDITOR$dom$node;
    insertBeforeMe(node: CKEDITOR$dom$node): CKEDITOR$dom$node;
    getAddress(normalized?: boolean): number[];
    getAscendant(reference: string, includeSelf?: boolean): CKEDITOR$dom$node;
    getCommonAncestor(node: CKEDITOR$dom$node): void;
    getDocument(): CKEDITOR$dom$document;
    getIndex(normalized?: boolean): number;
    getNext(
      evaluator?: (node: CKEDITOR$dom$node) => boolean
    ): CKEDITOR$dom$node;
    getNextSourceNode(
      startFromSibling?: boolean,
      nodeType?: number,
      guard?: CKEDITOR$dom$node | ((node: CKEDITOR$dom$node) => boolean)
    ): CKEDITOR$dom$node;
    getParent(allowFragmentParent?: boolean): CKEDITOR$dom$element;
    getParents(closerFirst?: boolean): CKEDITOR$dom$node[];
    getPosition(otherNode: CKEDITOR$dom$node): void;
    getPrevious(
      evaluator?: (node: CKEDITOR$dom$node) => boolean
    ): CKEDITOR$dom$node;
    getPreviousSourceNode(
      startFromSibling?: boolean,
      nodeType?: number,
      guard?: CKEDITOR$dom$node | ((node: CKEDITOR$dom$node) => boolean)
    ): CKEDITOR$dom$node;
    hasAscendant(name: string, includeSelf: boolean): boolean;
    remove(preserveChildren?: boolean): CKEDITOR$dom$node;
    replace(nodeToReplace: CKEDITOR$dom$node): void;
    trim(): void;
    ltrim(): void;
    rtrim(): void;
    isReadOnly(): boolean;
  }

  declare class CKEDITOR$dom$nodeList {
    constructor(nativeList: NodeList): this;
    count(): number;
    getItem(index: number): CKEDITOR$dom$node;
    toArray(): CKEDITOR$dom$node[];
  }

  declare class CKEDITOR$dom$range {
    collapsed: boolean;
    CKEDITOR$dom$document: CKEDITOR$dom$document;
    endContainer: CKEDITOR$dom$element | htmlParser$text;
    endOffset: number;
    root: CKEDITOR$dom$element;
    startContainer: CKEDITOR$dom$element | htmlParser$text;
    startOffset: number;
    constructor(root: CKEDITOR$dom$element | CKEDITOR$dom$document): this;
    checkBoundaryOfElement(
      element: CKEDITOR$dom$element,
      checkType: number
    ): boolean;
    checkEndOfBlock(): boolean;
    checkReadOnly(): boolean;
    checkStartOfBlock(): boolean;
    clone(cloneId?: boolean): CKEDITOR$dom$range;
    cloneContents(): CKEDITOR$dom$documentFragment;
    collapse(toStart?: boolean): boolean;
    createBookmark(serializable?: boolean): CKEDITOR$dom$bookmark;
    createBookmark2(normalized?: boolean): CKEDITOR$dom$bookmark2;
    createIterator(): CKEDITOR$dom$iterator;
    deleteContents(mergeThen?: boolean): void;
    endPath(): CKEDITOR$dom$elementPath;
    enlarge(unit: number, excludeBrs?: boolean): void;
    extractContents(
      mergeThen?: boolean,
      cloneId?: boolean
    ): CKEDITOR$dom$documentFragment;
    fixBlock(isStart: boolean, blockTag: string): CKEDITOR$dom$element;
    getBoundaryNodes(): {
      startNode: CKEDITOR$dom$node,
      endNode: CKEDITOR$dom$node
    };
    getCommonAncestor(
      includeSelf?: boolean,
      ignoreTextNode?: boolean
    ): CKEDITOR$dom$element;
    getEnclosedNode(): CKEDITOR$dom$node;
    getNextEditableNode(): CKEDITOR$dom$element | htmlParser$text;
    getNextNode(
      evaluator?: (element: CKEDITOR$dom$element) => boolean,
      guard?: (element: CKEDITOR$dom$element) => boolean,
      boundary?: CKEDITOR$dom$element
    ): CKEDITOR$dom$element;
    getPreviousEditableNode(): CKEDITOR$dom$element | htmlParser$text;
    getPreviousNode(
      evaluator?: (element: CKEDITOR$dom$element) => boolean,
      guard?: (element: CKEDITOR$dom$element) => boolean,
      boundary?: CKEDITOR$dom$element
    ): CKEDITOR$dom$element;
    getTouchedEndNode(): CKEDITOR$dom$node;
    getTouchedStartNode(): CKEDITOR$dom$node;
    insertNode(node: CKEDITOR$dom$node): void;
    moveToBookmark(
      bookmark: CKEDITOR$dom$bookmark | CKEDITOR$dom$bookmark2
    ): void;
    moveToClosestEditablePosition(
      element?: CKEDITOR$dom$element,
      isMoveForward?: boolean
    ): boolean;
    moveToElementEditEnd(target: CKEDITOR$dom$element): boolean;
    moveToElementEditStart(target: CKEDITOR$dom$element): boolean;
    moveToElementEditablePosition(
      element: CKEDITOR$dom$element,
      isMoveToEnd: boolean
    ): boolean;
    moveToPosition(node: CKEDITOR$dom$node, position: number): void;
    moveToRange(range: CKEDITOR$dom$range): void;
    optimize(): void;
    optimizeBookmark(): void;
    removeEmptyBlocksAtEnd(atEnd: boolean): void;
    scrollIntoView(): void;
    select(): dom$selection;
    selectNodeContents(node: CKEDITOR$dom$node): void;
    setEnd(endNode: CKEDITOR$dom$node, endOffset: number): void;
    setEndAfter(node: CKEDITOR$dom$node): void;
    setEndAt(node: CKEDITOR$dom$node, position: number): void;
    setEndBefore(node: CKEDITOR$dom$node): void;
    setStart(startNode: CKEDITOR$dom$node, startOffset: number): void;
    setStartAfter(node: CKEDITOR$dom$node): void;
    setStartAt(node: CKEDITOR$dom$node, position: number): void;
    setStartBefore(node: CKEDITOR$dom$node): void;
    shrink(
      mode: number,
      selectContents?: boolean,
      options?: boolean | dom$shrinkOptions
    ): void;
    splitBlock(cloneId?: boolean): void;
    splitElement(
      toSplit: CKEDITOR$dom$element,
      cloneId?: boolean
    ): CKEDITOR$dom$element;
    startPath(): CKEDITOR$dom$elementPath;
    trim(ignoreStart?: boolean, ignoreEnd?: boolean): void;
    static mergeRanges(ranges: CKEDITOR$dom$range[]): CKEDITOR$dom$range[];
  }

  declare interface CKEDITOR$dom$shrinkOptions {
    shrinkOnBlockBoundary?: boolean;
    skipBogus?: boolean;
  }

  declare class CKEDITOR$dom$rangeList {
    constructor(ranges?: CKEDITOR$dom$range | CKEDITOR$dom$range[]): this;
    createBokmarks(serializable?: boolean): CKEDITOR$dom$bookmark[];
    createBookmarks2(normalized?: boolean): CKEDITOR$dom$bookmark2[];
    createIterator(): dom$rangeListIterator;
    moveToBookmarks(bookmarks: CKEDITOR$dom$bookmark[]): void;
  }

  declare interface CKEDITOR$dom$rangeListIterator {
    getNextRange(mergeConsequent?: boolean): CKEDITOR$dom$range;
  }

  declare class CKEDITOR$dom$selection {
    FILLING_CHAR_SEQUENCE: string;
    CKEDITOR$dom$document: CKEDITOR$dom$document;
    isFake: boolean;
    isLocked: boolean;
    rev: number;
    root: CKEDITOR$dom$element;
    constructor(
      target:
        | CKEDITOR$dom$document
        | CKEDITOR$dom$element
        | CKEDITOR$dom$selection
    ): this;
    createBookmarks(serializable: any): CKEDITOR$dom$bookmark[];
    createBookmarks2(normalized: any): CKEDITOR$dom$bookmark2[];
    fake(element: CKEDITOR$dom$element, ariaLabel?: boolean): void;
    getCommonAncestor(): CKEDITOR$dom$element;
    getNative(): Selection;
    getRanges(onlyEditables?: boolean): CKEDITOR$dom$range[];
    getSelectedElement(): CKEDITOR$dom$element;
    getSelectedText(): string;
    getStartElement(): CKEDITOR$dom$element;
    getType(): number;
    isCollapsed(): boolean;
    isHidden(): boolean;
    isInTable(allowPartialSelection?: boolean): boolean;
    lock(): void;
    removeAllRanges(): void;
    reset(): void;
    scrollIntoView(): void;
    selectBookmarks(
      bookmarks: Array<CKEDITOR$dom$bookmark | CKEDITOR$dom$bookmark2>
    ): CKEDITOR$dom$selection;
    selectElement(element: CKEDITOR$dom$element): void;
    selectRanges(ranges: CKEDITOR$dom$range[]): void;
    unlock(restore: boolean): void;
  }

  declare class CKEDITOR$dom$text mixins CKEDITOR$dom$node {
    $: Text;
    notification$type: number;
    constructor(
      text: Text | string,
      ownerDocument?: CKEDITOR$dom$document
    ): this;
    getLength(): number;
    getText(): string;
    setText(text: string): void;
    split(offset: number): CKEDITOR$dom$text;
    substring(indexA: number, indexB?: number): void;
  }

  declare class CKEDITOR$dom$walker {
    evaluator: (node: CKEDITOR$dom$node) => boolean;
    guard: (node: CKEDITOR$dom$node, movingOut?: boolean) => boolean;
    static validEmptyBlockContainers: {
      [key: string]: any
    };
    constructor(range: CKEDITOR$dom$range): this;
    checkBackward(): boolean;
    checkForward(): boolean;
    end(): void;
    lastBackward(): CKEDITOR$dom$node;
    lastForward(): CKEDITOR$dom$node;
    next(): CKEDITOR$dom$node;
    previous(): CKEDITOR$dom$node;
    reset(): void;
    static blockBoundary(
      customNodeNames: any
    ): (node: CKEDITOR$dom$node) => boolean;
    static bogus(isReject?: boolean): (node: CKEDITOR$dom$node) => boolean;
    static bookmark(
      contentOnly?: boolean,
      isReject?: boolean
    ): (node: CKEDITOR$dom$node) => boolean;
    static editable(isReject?: boolean): (node: CKEDITOR$dom$node) => boolean;
    static empty(isReject?: boolean): (node: CKEDITOR$dom$node) => boolean;
    static ignored(isReject?: boolean): (node: CKEDITOR$dom$node) => boolean;
    static invisible(isReject?: boolean): (node: CKEDITOR$dom$node) => boolean;
    static listItemBoundary(): (node: CKEDITOR$dom$node) => boolean;
    static nodeType(
      type: number,
      isReject?: boolean
    ): (node: CKEDITOR$dom$node) => boolean;
    static temp(isReject?: boolean): (node: CKEDITOR$dom$node) => boolean;
    static whitespaces(
      isReject?: boolean
    ): (node: CKEDITOR$dom$node) => boolean;
  }

  declare interface CKEDITOR$dom$position {
    x: number;
    y: number;
  }

  declare interface CKEDITOR$dom$widthAndHeight {
    width: number;
    height: number;
  }

  declare class CKEDITOR$dom$window mixins CKEDITOR$dom$domObject {
    constructor(domWindow: Window): this;
    focus(): void;
    getViewPaneSize(): CKEDITOR$dom$widthAndHeight;
    getScrollPosition(): CKEDITOR$dom$position;
    getFrame(): CKEDITOR$dom$element;
  }

  declare var npm$namespace$CKEDITOR$ajax: {
    load: typeof CKEDITOR$ajax$load,
    loadXml: typeof CKEDITOR$ajax$loadXml,
    post: typeof CKEDITOR$ajax$post
  };
  declare function CKEDITOR$ajax$load(
    url: string,
    callback?: (data: any) => void
  ): string;

  declare function CKEDITOR$ajax$loadXml(
    url: string,
    callback?: (data: any) => void
  ): CKEDITOR$xml;

  declare function CKEDITOR$ajax$post(
    url: string,
    data: any,
    contentType?: string,
    callback?: (data: any) => void
  ): void;

  declare class CKEDITOR$command
    mixins CKEDITOR$event, CKEDITOR$commandDefinition {
    fakeKeystroke: number;
    previousState: number;
    copyformatting$state: number;
    uiItems: any[];
    constructor(
      editor: CKEDITOR$editor,
      commandDefinition: CKEDITOR$commandDefinition
    ): this;
    checkAllowed(noCache: boolean): boolean;
    disable(): void;
    enable(): void;
    exec(data?: {
      [key: string]: any
    }): boolean;
    refresh(editor: CKEDITOR$editor, path: CKEDITOR$dom$elementPath): void;
    setState(newState: number): boolean;
    toggleState(): void;
  }

  declare interface CKEDITOR$commandDefinition {
    async?: boolean;
    canUndo?: boolean;
    context?: boolean;
    contextSensitive?: boolean;
    editorFocus?: boolean;
    fakeKeystroke?: number;
    modes?: {
      [key: string]: any
    };
    startDisabled?: boolean;
    readOnly?: boolean;
    exec(editor: CKEDITOR$editor, data?: any): boolean;
    refresh?: (editor: CKEDITOR$editor, path: CKEDITOR$dom$elementPath) => void;
  }

  declare interface CKEDITOR$config {
    allowedContent?: boolean | CKEDITOR$filter$allowedContentRules;
    autoEmbed_widget?: string | ((url: string) => string);
    autoGrow_bottomSpace?: number;
    autoGrow_maxHeight?: number;
    autoGrow_minHeight?: number;
    autoGrow_onStartup?: boolean;
    autoUpdateElement?: boolean;
    baseFloatZIndex?: number;
    baseHref?: string;
    basicEntities?: boolean;
    blockedKeystrokes?: number[];
    bodyClass?: string;
    bodyId?: string;
    browserContextMenuOnCtrl?: boolean;
    clipboard_defaultContentType?: "html" | "text";
    clipboard_notificationDuration?: number;
    cloudServices_tokenUrl?: string;
    cloudServices_uploadUrl?: string;
    codeSnippetGeshi_url?: string;
    codeSnippet_codeClass?: string;
    codeSnippet_languages?: {
      [key: string]: any
    };
    coceSnippet_theme?: string;
    colorButton_backStyle?: CKEDITOR$config$styleObject;
    colorButton_colors?: string;
    colorButton_colorsPerRow?: number;
    colorButton_enableAutomatic?: boolean;
    colorButton_enableMore?: boolean;
    colorButton_foreStyle?: CKEDITOR$config$styleObject;
    colorButton_normalizeBackground?: boolean;
    contentsCss?: string | string[];
    contentsLangDirection?: string;
    contentsLanguage?: string;
    copyFormatting_allowRules?: string;
    copyFormatting_allowedContexts?: boolean | string[];
    copyFormatting_keystrokeCopy?: number;
    copyFormatting_keystrokePaste?: number;
    copyFormatting_outerCursor?: boolean;
    coreStyles_bold?: CKEDITOR$config$styleObject;
    coreStyles_italic?: CKEDITOR$config$styleObject;
    coreStyles_strike?: CKEDITOR$config$styleObject;
    coreStyles_subscript?: CKEDITOR$config$styleObject;
    coreStyles_superscript?: CKEDITOR$config$styleObject;
    coreStyles_underline?: CKEDITOR$config$styleObject;
    customConfig?: string;
    dataIndentationChars?: string;
    defaultLanguage?: string;
    devtools_styles?: string;
    devtools_textCallback?: (
      editor: CKEDITOR$editor,
      dialog: ui$dialog,
      element: CKEDITOR$dom$element,
      tabName: string
    ) => string;
    dialog_backgroundCoverColor?: string;
    dialog_backgroundCoverOpacity?: number;
    dialog_buttonsOrder?: string;
    dialog_magnetDistance?: number;
    dialog_noConfirmCancel?: boolean;
    dialog_startupFocusTab?: boolean;
    disableNativeSpellChecker?: boolean;
    disableNativeTableHandles?: boolean;
    disableNativeObjectResizing?: boolean;
    disableNativeReadonlyStyling?: boolean;
    disallowedContent?: CKEDITOR$filter$disallowedContentRules;
    div_wrapTable?: boolean;
    docType?: string;
    easyimage_class?: string;
    easyimage_defaultStyle?: string;
    easyimage_styles?: {
      [key: string]: any
    };
    easyimage_toolbar?: string[] | string;
    emailProtection?: string;
    embed_provider?: string;
    enableTabKeyTools?: boolean;
    enterMode?: number;
    entities?: boolean;
    entities_additional?: string;
    entities_greek?: boolean;
    entities_latin?: boolean;
    entities_processNumerical?: boolean | string;
    extraAllowedContent?: CKEDITOR$filter$allowedContentRules;
    extraPlugins?: string;
    fileTools_defaultFileName?: string;
    fileTools_requestHeaders?: {
      [key: string]: any
    };
    filebrowserBrowseUrl?: string;
    filebrowserFlashBrowseUrl?: string;
    filebrowserFlashUploadUrl?: string;
    filebrowserImageBrowseLinkUrl?: string;
    filebrowserImageBrowseUrl?: string;
    filebrowserImageUploadUrl?: string;
    filebrowserUploadMethod?: string;
    filebrowserUploadUrl?: string;
    filebrowserWindowFeatures?: string;
    filebrowserWindowHeight?: number | string;
    filebrowserWindowWidth?: number | string;
    fillEmptyBlocks?:
      | boolean
      | ((element: CKEDITOR$htmlParser$element) => boolean);
    find_highlight?: CKEDITOR$config$styleObject;
    flashAddEmbedTag?: boolean;
    flashConvertOnEdit?: boolean;
    flashEmbedTagOnly?: boolean;
    floatSpaceDockedOffsetX?: number;
    floatSpaceDockedOffsetY?: number;
    floatSpacePinnedOffsetX?: number;
    floatSpacePinnedOffsetY?: number;
    floatSpacePreferRight?: boolean;
    fontSize_defaultLabel?: string;
    fontSize_sizes?: string;
    fontSize_style?: CKEDITOR$config$styleObject;
    font_defaultLabel?: string;
    font_names?: string;
    font_style?: CKEDITOR$config$styleObject;
    forceEnterMode?: boolean;
    forcePasteAsPlainText?: boolean;
    forceSimpleAmpersand?: boolean;
    format_address?: CKEDITOR$config$styleObject;
    format_div?: CKEDITOR$config$styleObject;
    format_h1?: CKEDITOR$config$styleObject;
    format_h2?: CKEDITOR$config$styleObject;
    format_h3?: CKEDITOR$config$styleObject;
    format_h4?: CKEDITOR$config$styleObject;
    format_h5?: CKEDITOR$config$styleObject;
    format_h6?: CKEDITOR$config$styleObject;
    format_p?: CKEDITOR$config$styleObject;
    format_pre?: CKEDITOR$config$styleObject;
    format_tags?: string;
    fullPage?: boolean;
    grayt_autoStartup?: boolean;
    height?: string | number;
    htmlEncodeOutput?: boolean;
    ignoreEmptyParagraph?: boolean;
    image2_alignClasses?: string[];
    image2_altRequired?: boolean;
    image2_captionedClass?: string;
    image2_disableResizer?: boolean;
    image2_prefillDimensions?: boolean;
    imageUploadUrl?: string;
    image_prefillDimensions?: boolean;
    image_previewText?: string;
    image_removeLinkByEmptyUrl?: boolean;
    indentClasses?: string[];
    indentOffset?: number;
    indentUnit?: string;
    jqueryOverrideVal?: boolean;
    justifyClasses?: string[];
    keystrokes?: Array<[number, string]>;
    language?: string;
    language_list?: string[];
    linkJavaScriptLinksAllowed?: boolean;
    linkShowAdvancedTab?: boolean;
    linkShowTargetTab?: boolean;
    magicline_color?: string;
    magicline_everywhere?: boolean;
    magicline_holdDistance?: number;
    magicline_keystrokeNext?: number;
    magicline_keystrokePrevious?: number;
    magicline_tabuList?: string[];
    magicline_triggerOffset?: number;
    mathJaxClass?: string;
    mathJaxLib?: string;
    menu_groups?: string;
    menu_subMenuDelay?: number;
    newpage_html?: string;
    notification_duration?: number;
    on?: CKEDITOR$editor$eventObject;
    pasteFilter?: string;
    pasteFromWordCleanupFile?: string;
    pasteFromWordNumberedHeadingToList?: boolean;
    pasteFromWordPromptCleanup?: boolean;
    pasteFromWordRemoveFontStyles?: boolean;
    pasteFromWordRemoveStyles?: boolean;
    pasteFromWord_heuristicsEdgeList?: boolean;
    pasteFromWord_inlineImages?: boolean;
    plugins?: string;
    protectedSource?: RegExp[];
    readOnly?: boolean;
    removeButtons?: string;
    removeDialogTabs?: string;
    removeFormatAttributes?: string;
    removeFormatTags?: string;
    removePlugins?: string;
    resize_dir?: string;
    resize_enabled?: boolean;
    resize_maxHeight?: number;
    resize_maxWidth?: number;
    resize_minHeight?: number;
    resize_minWidth?: number;
    scayt_autoStartup?: boolean;
    scayt_contextCommands?: string;
    scayt_contextMenuItemsOrder?: string;
    scayt_customDictionaryIds?: string;
    scayt_customerId?: string;
    scayt_disableOptionsStorage?: string | string[];
    scayt_elementsToIgnore?: string;
    scayt_handleCheckDirty?: string;
    scayt_handleUndoRedo?: string;
    scayt_ignoreAllCapsWords?: boolean;
    scayt_ignoreDomainNames?: boolean;
    scayt_ignoreWordsWithMixedCases?: boolean;
    scayt_ignoreWordsWithNumbers?: boolean;
    scayt_inlineModeImmediateMarkup?: boolean;
    scayt_maxSuggestions?: number;
    scayt_minWordLength?: number;
    scayt_moreSuggestions?: string;
    scayt_multiLanguageMode?: boolean;
    scayt_multiLanguageStyles?: {
      [key: string]: any
    };
    scayt_sLang?: string;
    scayt_serviceHost?: string;
    scayt_servicePath?: string;
    scayt_servicePort?: string;
    scayt_serviceProtocol?: string;
    scayt_srcUrl?: string;
    scayt_uiTabs?: string;
    scayt_userDictionaryName?: string;
    sharedSpaces?: CKEDITOR$sharedSpace;
    shiftEnterMode?: number;
    skin?: string;
    smiley_columns?: number;
    smiley_descriptions?: string[];
    smiley_images?: string[];
    smiley_path?: string;
    sourceAreaTabSize?: number;
    specialChars?: Array<string | [string, string]>;
    startupFocus?: string | boolean;
    startupMode?: string;
    startupOutlineBlocks?: boolean;
    startupShowBorders?: boolean;
    stylesSet?: string | boolean | CKEDITOR$config$styleObject[];
    stylesheetParser_skipSelectors?: RegExp;
    stylesheetParser_validSelectors?: RegExp;
    tabIndex?: number;
    tabSpaces?: number;
    templates?: string;
    templates_files?: {
      [key: string]: any
    };
    templates_replaceContent?: boolean;
    title?: string | boolean;
    toolbar?:
      | string
      | Array<
          | string
          | string[]
          | {
              name: string,
              items?: string[],
              groups?: string[]
            }
        >
      | null;
    toolbarCanCollapse?: boolean;
    toolbarGroupCycling?: boolean;
    toolbarGroups?: Array<CKEDITOR$toolbarGroups | string>;
    toolbarLocation?: string;
    toolbarStartupExpanded?: boolean;
    uiColor?: string;
    undoStackSize?: number;
    uploadUrl?: string;
    useComputedState?: boolean;
    width?: string | number;
    wsc_cmd?: string;
    wsc_customDictionaryIds?: string;
    wsc_customLoaderScript?: string;
    wsc_customerId?: string;
    wsc_height?: string;
    wsc_lang?: string;
    wsc_left?: string;
    wsc_top?: string;
    wsc_userDictionaryName?: string;
    wsc_width?: string;
  }

  declare interface CKEDITOR$dataProcessor {
    toDataFormat(html: string, fixForBody: string): void;
    toHtml(data: string, fixForBody?: string): void;
  }

  declare class CKEDITOR$dialog {
    copyformatting$state: number;
    constructor(editor: CKEDITOR$editor, dialogName: string): this;
    addFocusable(element: CKEDITOR$dom$element, index?: number): void;
    addPage(contents: {
      [key: string]: any
    }): void;
    click(id: string): any;
    commitContent(): void;
    disableButton(id: string): void;
    enableButton(id: string): void;
    foreach(fn: () => void): CKEDITOR$dialog;
    getButton(id: string): CKEDITOR$ui$dialog$button;
    getContentElement(
      pageId: string,
      elementId: string
    ): CKEDITOR$ui$dialog$uiElement;
    getElement(): CKEDITOR$dom$element;
    getName(): string;
    getPageCount(): number;
    getParentEditor(): CKEDITOR$editor;
    getPosition(): {
      [key: string]: any
    };
    getSelectedElement(): CKEDITOR$dom$element;
    getSize(): {
      [key: string]: any
    };
    getValueOf(pageId: string, elementId: string): any;
    hide(): void;
    hidePage(id: string): void;
    layout(): void;
    move(x: number, y: number, save: boolean): void;
    reset(): CKEDITOR$dialog;
    resize(width: number, height: number): void;
    selectPage(id: string): void;
    setState(state: number): void;
    setValueOf(pageId: string, elementId: string, value: any): void;
    setupContent(): void;
    show(): void;
    showPage(id: string): void;
    updateStyle(): void;
    static add(
      name: string,
      dialogDefinition:
        | string
        | ((editor: CKEDITOR$editor) => CKEDITOR$dialog$IDialogDefinition)
    ): void;
    static addIframe(
      name: string,
      title: string,
      minWidth: number,
      minHeight: number,
      onContentLoad?: () => void,
      userDefinition?: {
        [key: string]: any
      }
    ): void;
    static addUIElement(typeName: string, builder: () => void): void;
    static cancelButton(): void;
    static exists(name: string | number): void;
    static getCurrent(): CKEDITOR$dialog;
    static isTabEnabled(
      editor: CKEDITOR$editor,
      dialogName: string,
      tabName: string
    ): boolean;
    static okButton(): void;
  }

  declare type CKEDITOR$dialog$definition$button = {
    disabled?: boolean
  } & CKEDITOR$dialog$definition$uiElement;

  declare type CKEDITOR$dialog$definition$checkbox = {
    default?: string,
    validate?: () => boolean
  } & CKEDITOR$dialog$definition$uiElement;

  declare interface CKEDITOR$dialog$definition$content {
    accessKey?: string;
    elements?: CKEDITOR$dialog$definition$uiElement[];
    id?: string;
    label?: string;
    title?: string;
  }

  declare type CKEDITOR$dialog$definition$file = {
    action?: string,
    size?: string,
    validate?: () => boolean
  } & CKEDITOR$dialog$definition$labeledElement;

  declare type CKEDITOR$dialog$definition$fileButton = {
    filebrowser?: string,
    for?: string,
    validate?: () => boolean
  } & CKEDITOR$dialog$definition$uiElement;

  declare type CKEDITOR$dialog$definition$hbox = {
    children?: CKEDITOR$ui$dialog$uiElement[],
    height?: number,
    padding?: number,
    validate?: () => boolean,
    widths?: number[]
  } & CKEDITOR$dialog$definition$uiElement;

  declare type CKEDITOR$dialog$definition$html = {
    html?: string
  } & CKEDITOR$dialog$definition$uiElement;

  declare type CKEDITOR$dialog$definition$labeledElement = {
    controlStyle?: string,
    inputStyle?: string,
    labelLayout?: string,
    labelStyle?: string,
    widths?: number[]
  } & CKEDITOR$dialog$definition$uiElement;

  declare type CKEDITOR$dialog$definition$radio = {
    default?: string,
    items?: string[] | string[][],
    validate?: () => boolean
  } & CKEDITOR$dialog$definition$labeledElement;

  declare type CKEDITOR$dialog$definition$select = {
    default?: string,
    items?: string[] | string[][],
    multiple?: boolean,
    size?: number,
    validate?: () => boolean
  } & CKEDITOR$dialog$definition$labeledElement;

  declare type CKEDITOR$dialog$definition$textarea = {
    bidi?: boolean,
    cols?: number,
    default?: string,
    rows?: number,
    validate?: () => boolean
  } & CKEDITOR$dialog$definition$labeledElement;

  declare type CKEDITOR$dialog$definition$textInput = {
    bidi?: boolean,
    default?: string,
    maxLength?: number,
    size?: number,
    validate?: () => boolean
  } & CKEDITOR$dialog$definition$labeledElement;

  declare interface CKEDITOR$dialog$definition$uiElement {
    align?: string;
    className?: string;
    commit?: (widget: CKEDITOR$plugins$widget) => void;
    id?: string;
    label?: string;
    onHide?: (elem: CKEDITOR$ui$dialog$uiElement) => void;
    onLoad?: (elem: CKEDITOR$ui$dialog$uiElement) => void;
    onShow?: (elem: CKEDITOR$ui$dialog$uiElement) => void;
    requiredContent?:
      | string
      | {
          [key: string]: any
        }
      | tools$style;
    setup?: (widget: CKEDITOR$plugins$widget) => void;
    style?: string;
    title?: string;
    type?: string;
  }

  declare type CKEDITOR$dialog$definition$vbox = {
    children?: CKEDITOR$ui$dialog$uiElement[],
    expand?: boolean,
    heights?: number[],
    padding?: number,
    styles?: string,
    width?: number[]
  } & CKEDITOR$dialog$definition$uiElement;

  declare interface CKEDITOR$dialog$IDialogDefinition {
    buttons?: CKEDITOR$dialog$definition$button[];
    contents?: CKEDITOR$dialog$definition$content[];
    height?: number;
    minHeight?: number;
    minWidth?: number;
    onCancel?: () => void;
    onLoad?: () => void;
    onOk?: () => void;
    onShow?: () => void;
    onHide?: () => void;
    resizable?: number;
    title?: string;
    width?: number;
  }

  declare class CKEDITOR$dialogCommand {
    value: any;
    constructor(
      dialogName: string,
      ext?: {
        tabId?: string
      }
    ): this;
  }

  declare interface CKEDITOR$dtdDefinition {
    [outerTagName: string]: {
      [innerTagName: string]: 1
    };
    $block: {
      [tagName: string]: 1
    };
    $blockLimit: {
      [tagName: string]: 1
    };
    $cdata: {
      [tagName: string]: 1
    };
    $editable: {
      [tagName: string]: 1
    };
    $empty: {
      [tagName: string]: 1
    };
    $inline: {
      [tagName: string]: 1
    };
    $intermediate: {
      [tagName: string]: 1
    };
    $list: {
      [tagName: string]: 1
    };
    $listItem: {
      [tagName: string]: 1
    };
    $nonBodyContent: {
      [tagName: string]: 1
    };
    $nonEditable: {
      [tagName: string]: 1
    };
    $object: {
      [tagName: string]: 1
    };
    $removeEmpty: {
      [tagName: string]: 1
    };
    $tabIndex: {
      [tagName: string]: 1
    };
    $tableContent: {
      [tagName: string]: 1
    };
    $transparent: {
      [tagName: string]: 1
    };
  }

  declare var CKEDITOR$dtd: CKEDITOR$dtdDefinition;

  declare class CKEDITOR$editable mixins CKEDITOR$dom$element {
    hasFocus: boolean;
    CKEDITOR$status: string;
    constructor(
      editor: CKEDITOR$editor,
      element: HTMLElement | CKEDITOR$dom$element
    ): this;
    attachClass(className: string): void;
    attachListener(
      obj: CKEDITOR$dom$event | CKEDITOR$editable,
      eventName: string,
      listenerFunction: (ei: CKEDITOR$eventInfo) => void,
      scopeobj?: {},
      listenerData?: any,
      priority?: number
    ): CKEDITOR$listenerRegistration;
    changeAttr(attr: string, val: string): void;
    detach(): void;
    insertElement(
      element: CKEDITOR$dom$element,
      range?: CKEDITOR$dom$range
    ): void;
    insertHtml(data: string, mode?: string, range?: CKEDITOR$dom$range): void;
    insertText(text: CKEDITOR$dom$text): void;
    isInline(): boolean;
    setReadOnly(isReadOnly: boolean): void;
  }

  declare class CKEDITOR$editor mixins CKEDITOR$event {
    activeEnterMode: number;
    activeFilter: array$filter;
    activeShiftEnterMode: number;
    blockless: boolean;
    CKEDITOR$config: CKEDITOR$config;
    container: CKEDITOR$dom$element;
    plugins$contextMenu: CKEDITOR$plugins$contextMenu;
    copyFormatting: CKEDITOR$plugins$copyformatting$state;
    CKEDITOR$dataProcessor: CKEDITOR$dataProcessor;
    CKEDITOR$dom$document: CKEDITOR$dom$document;
    CKEDITOR$dom$element: CKEDITOR$dom$element;
    elementMode: number;
    enterMode: number;
    array$filter: array$filter;
    CKEDITOR$focusManager: CKEDITOR$focusManager;
    id: string;
    CKEDITOR$keystrokeHandler: CKEDITOR$keystrokeHandler;
    CKEDITOR$lang: any;
    langCode: string;
    mode: string;
    name: string;
    pasteFilter: array$filter;
    CKEDITOR$plugins: any;
    readOnly: boolean;
    shiftEnterMode: number;
    CKEDITOR$status: string;
    tabIndex: number;
    balloonPanel$templates: any;
    title: any;
    toolbar: any;
    CKEDITOR$ui: CKEDITOR$ui;
    widgets: CKEDITOR$plugins$widget$repository;
    CKEDITOR$dom$window: CKEDITOR$dom$window;
    constructor(
      instanceConfig?: CKEDITOR$config,
      element?: CKEDITOR$dom$element,
      mode?: number
    ): this;
    addCommand(
      commandName: string,
      commandDefinition: CKEDITOR$commandDefinition
    ): void;
    addContentsCss(cssPath: string): void;
    addFeature(feature: CKEDITOR$feature): boolean;
    addMenuGroup(name: string, order?: number): void;
    addMenuItem(name: string, definition?: CKEDITOR$IMenuItemDefinition): void;
    addMenuItems(definitions: {
      [id: string]: CKEDITOR$IMenuItemDefinition
    }): void;
    addMode(mode: string, exec: () => void): void;
    addRemoveFormatFilter(
      func: (element: CKEDITOR$dom$element) => boolean
    ): void;
    applyStyle(style: tools$style): void;
    attachStyleStateChange(
      style: tools$style,
      callback: (state: number) => void
    ): void;
    checkDirty(): boolean;
    createFakeElement(
      realElement: CKEDITOR$dom$element,
      className: string,
      realElementType: string,
      isResizable: boolean
    ): void;
    createFakeParserElement(
      realElement: CKEDITOR$dom$element,
      className: string,
      realElementType: string,
      isResizable: boolean
    ): void;
    createRange(): CKEDITOR$dom$range;
    destroy(noUpdate?: boolean): void;
    editable(
      elementOrEditable?: CKEDITOR$dom$element | CKEDITOR$editable
    ): CKEDITOR$editable;
    elementPath(startNode?: CKEDITOR$dom$node): CKEDITOR$dom$elementPath;
    execCommand(commandName: string, data?: any): boolean;
    extractSelectedHtml(
      toString?: boolean,
      removeEmptyBlock?: boolean
    ): CKEDITOR$dom$documentFragment | string | void;
    focus(): void;
    forceNextSelectionCheck(): void;
    getClipboardData(
      callbackOrOptions:
        | {
            title: string
          }
        | ((data: any) => void),
      callback: (data: any) => void
    ): void;
    getColorFromDialog(
      callback: (color: string) => void,
      scope?: {
        [key: string]: any
      }
    ): void;
    getCommand(commandName: string): CKEDITOR$command;
    getCommandKeystroke(command: CKEDITOR$command | string): number | null;
    getData(internal?: boolean): string;
    getMenuItem(name: string): CKEDITOR$IMenuItemDefinition;
    getResizable(forContents: boolean): CKEDITOR$dom$element;
    getSelectedHtml(toString?: false): CKEDITOR$dom$documentFragment;
    getSelectedHtml(toString: true): string;
    getSelectedHtml(toString?: boolean): CKEDITOR$dom$documentFragment | string;
    getSelection(forceRealSelection?: boolean): CKEDITOR$dom$selection;
    getSnapshot(): string;
    getStylesSet(
      callback: (stylesDefinitions: CKEDITOR$style$definition[]) => void
    ): void;
    getUiColor(): string;
    insertElement(element: CKEDITOR$dom$element): void;
    insertHtml(html: string, mode?: string, range?: CKEDITOR$dom$range): void;
    insertText(text: string): void;
    loadSnapshot(snapshot: any): void;
    lockSelection(sel?: CKEDITOR$dom$selection): boolean;
    openDialog(dialogName: string, callback: () => void): CKEDITOR$dialog;
    popup(
      url: string,
      width?: number | string,
      height?: number | string,
      options?: string
    ): void;
    removeMenuItem(name: string): void;
    removeStyle(style: tools$style): void;
    resetDirty(): void;
    resetUndo(): void;
    resize(
      width: number | string,
      height: number | string,
      isContentHeight?: boolean,
      resizeInner?: boolean
    ): void;
    restoreRealElement(fakeElement: CKEDITOR$dom$element): CKEDITOR$dom$element;
    selectionChange(checkNow?: boolean): void;
    setActiveEnterMode(enterMode: number, shiftEnterMode: number): void;
    setActiveFilter(filter: array$filter): void;
    setData(
      data: string,
      options?: {
        internal?: boolean,
        callback?: () => void,
        noSnapshot?: boolean
      }
    ): void;
    setKeystroke(keystroke: number, behavior: string | boolean): void;
    setKeystroke(keystroke: Array<[number, string | boolean]>): void;
    setMode(newMode: string, callback: () => void): void;
    setReadOnly(isReadOnly?: boolean): void;
    setUiColor(color: string): void;
    showNotification(
      message: string,
      type: CKEDITOR$plugins$notification$type,
      progressOrDuration: number
    ): CKEDITOR$plugins$notification;
    unlockSelection(restore?: boolean): void;
    updateElement(): void;
  }

  declare interface CKEDITOR$editor$eventObject {
    activeEnterModeChange?: (evt: CKEDITOR$eventInfo) => void;
    activeFilterChange?: (evt: CKEDITOR$eventInfo) => void;
    afterCommandExec?: (evt: CKEDITOR$eventInfo) => void;
    afterInsertHtml?: (evt: CKEDITOR$eventInfo) => void;
    afterPaste?: (evt: CKEDITOR$eventInfo) => void;
    afterPasteFromWord?: (evt: CKEDITOR$eventInfo) => void;
    afterSetData?: (evt: CKEDITOR$eventInfo) => void;
    afterUndoImage?: (evt: CKEDITOR$eventInfo) => void;
    ariaEditorHelpLabel?: (evt: CKEDITOR$eventInfo) => void;
    ariaWidget?: (evt: CKEDITOR$eventInfo) => void;
    autogrow?: (evt: CKEDITOR$eventInfo) => void;
    beforeCommandExec?: (evt: CKEDITOR$eventInfo) => void;
    beforeDestroy?: (evt: CKEDITOR$eventInfo) => void;
    beforeGetData?: (evt: CKEDITOR$eventInfo) => void;
    beforeModeUnload?: (evt: CKEDITOR$eventInfo) => void;
    beforeSetMode?: (evt: CKEDITOR$eventInfo) => void;
    beforeUndoImage?: (evt: CKEDITOR$eventInfo) => void;
    blur?: (evt: CKEDITOR$eventInfo) => void;
    change?: (evt: CKEDITOR$eventInfo) => void;
    configLoaded?: (evt: CKEDITOR$eventInfo) => void;
    contentDirChanged?: (evt: CKEDITOR$eventInfo) => void;
    contentDom?: (evt: CKEDITOR$eventInfo) => void;
    contentDomInvalidated?: (evt: CKEDITOR$eventInfo) => void;
    contentDomUnload?: (evt: CKEDITOR$eventInfo) => void;
    customConfigLoaded?: (evt: CKEDITOR$eventInfo) => void;
    dataFiltered?: (evt: CKEDITOR$eventInfo) => void;
    dataReady?: (evt: CKEDITOR$eventInfo) => void;
    destroy?: (evt: CKEDITOR$eventInfo) => void;
    dialogHide?: (evt: CKEDITOR$eventInfo) => void;
    dialogShow?: (evt: CKEDITOR$eventInfo) => void;
    dirChanged?: (evt: CKEDITOR$eventInfo) => void;
    doubleclick?: (evt: CKEDITOR$eventInfo) => void;
    dragend?: (evt: CKEDITOR$eventInfo) => void;
    dragstart?: (evt: CKEDITOR$eventInfo) => void;
    drop?: (evt: CKEDITOR$eventInfo) => void;
    elementsPathUpdate?: (evt: CKEDITOR$eventInfo) => void;
    fileUploadRequest?: (evt: CKEDITOR$eventInfo) => void;
    fileUploadResponse?: (evt: CKEDITOR$eventInfo) => void;
    floatingSpaceLayout?: (evt: CKEDITOR$eventInfo) => void;
    focus?: (evt: CKEDITOR$eventInfo) => void;
    getData?: (evt: CKEDITOR$eventInfo) => void;
    getSnapshot?: (evt: CKEDITOR$eventInfo) => void;
    insertElement?: (evt: CKEDITOR$eventInfo) => void;
    insertHtml?: (evt: CKEDITOR$eventInfo) => void;
    insertText?: (evt: CKEDITOR$eventInfo) => void;
    instanceReady?: (evt: CKEDITOR$eventInfo) => void;
    key?: (evt: CKEDITOR$eventInfo) => void;
    langLoaded?: (evt: CKEDITOR$eventInfo) => void;
    loadSnapshot?: (evt: CKEDITOR$eventInfo) => void;
    loaded?: (evt: CKEDITOR$eventInfo) => void;
    lockSnapshot?: (evt: CKEDITOR$eventInfo) => void;
    maximize?: (evt: CKEDITOR$eventInfo) => void;
    menuShow?: (evt: CKEDITOR$eventInfo) => void;
    mode?: (evt: CKEDITOR$eventInfo) => void;
    notificationHide?: (evt: CKEDITOR$eventInfo) => void;
    notificationShow?: (evt: CKEDITOR$eventInfo) => void;
    notificationUpdate?: (evt: CKEDITOR$eventInfo) => void;
    paste?: (evt: CKEDITOR$eventInfo) => void;
    pasteFromWord?: (evt: CKEDITOR$eventInfo) => void;
    pluginsLoaded?: (evt: CKEDITOR$eventInfo) => void;
    readOnly?: (evt: CKEDITOR$eventInfo) => void;
    removeFormatCleanup?: (evt: CKEDITOR$eventInfo) => void;
    required?: (evt: CKEDITOR$eventInfo) => void;
    resize?: (evt: CKEDITOR$eventInfo) => void;
    save?: (evt: CKEDITOR$eventInfo) => void;
    saveSnapshot?: (evt: CKEDITOR$eventInfo) => void;
    selectionChange?: (evt: CKEDITOR$eventInfo) => void;
    setData?: (evt: CKEDITOR$eventInfo) => void;
    stylesSet?: (evt: CKEDITOR$eventInfo) => void;
    template?: (evt: CKEDITOR$eventInfo) => void;
    toDataFormat?: (evt: CKEDITOR$eventInfo) => void;
    toHtml?: (evt: CKEDITOR$eventInfo) => void;
    unlockSnapshot?: (evt: CKEDITOR$eventInfo) => void;
    updateSnapshot?: (evt: CKEDITOR$eventInfo) => void;
    widgetDefinition?: (evt: CKEDITOR$eventInfo) => void;
  }

  declare var npm$namespace$CKEDITOR$env: {
    secure: typeof CKEDITOR$env$secure,
    air: typeof CKEDITOR$env$air,
    chrome: typeof CKEDITOR$env$chrome,
    cssClass: typeof CKEDITOR$env$cssClass,
    edge: typeof CKEDITOR$env$edge,
    gecko: typeof CKEDITOR$env$gecko,
    hc: typeof CKEDITOR$env$hc,
    hidpi: typeof CKEDITOR$env$hidpi,
    iOS: typeof CKEDITOR$env$iOS,
    ie: typeof CKEDITOR$env$ie,
    isCompatible: typeof CKEDITOR$env$isCompatible,
    mac: typeof CKEDITOR$env$mac,
    needsBrFiller: typeof CKEDITOR$env$needsBrFiller,
    needsNbspFiller: typeof CKEDITOR$env$needsNbspFiller,
    quirks: typeof CKEDITOR$env$quirks,
    safari: typeof CKEDITOR$env$safari,
    version: typeof CKEDITOR$env$version,
    webkit: typeof CKEDITOR$env$webkit
  };
  declare var CKEDITOR$env$air: boolean;

  declare var CKEDITOR$env$chrome: boolean;

  declare var CKEDITOR$env$cssClass: string;

  declare var CKEDITOR$env$edge: boolean;

  declare var CKEDITOR$env$gecko: boolean;

  declare var CKEDITOR$env$hc: boolean;

  declare var CKEDITOR$env$hidpi: boolean;

  declare var CKEDITOR$env$iOS: boolean;

  declare var CKEDITOR$env$ie: boolean;

  declare var CKEDITOR$env$isCompatible: boolean;

  declare var CKEDITOR$env$mac: boolean;

  declare var CKEDITOR$env$needsBrFiller: boolean;

  declare var CKEDITOR$env$needsNbspFiller: boolean;

  declare var CKEDITOR$env$quirks: boolean;

  declare var CKEDITOR$env$safari: boolean;

  declare var CKEDITOR$env$version: number;

  declare var CKEDITOR$env$webkit: boolean;

  declare function CKEDITOR$env$secure(): boolean;

  declare class CKEDITOR$event {
    static useCapture: boolean;
    constructor(): this;
    capture(): void;
    define(
      name: string,
      meta: {
        [key: string]: any
      }
    ): void;
    fire(
      eventName: string,
      data?: {
        [key: string]: any
      },
      editor?: CKEDITOR$editor
    ): any;
    fireOnce(
      eventName: string,
      data?: {
        [key: string]: any
      },
      editor?: CKEDITOR$editor
    ): any;
    hasListeners(eventName: string): boolean;
    on(
      eventName: string,
      listenerFunction: (eventInfo: CKEDITOR$eventInfo) => void,
      scopeObj?: {
        [key: string]: any
      } | null,
      listenerData?: any,
      priority?: number
    ): CKEDITOR$listenerRegistration;
    once(
      eventName: string,
      listenerFunction: (eventInfo: CKEDITOR$eventInfo) => void,
      scopeObj?: {
        [key: string]: any
      } | null,
      listenerData?: any,
      priority?: number
    ): CKEDITOR$listenerRegistration;
    removeAllListeners(): void;
    removeListener(
      eventName: string,
      listenerFunction: (eventInfo: CKEDITOR$eventInfo) => void
    ): void;
    static implementOn(targetObject: {
      [key: string]: any
    }): void;
  }

  declare interface CKEDITOR$eventInfo {
    data: any;
    editor: CKEDITOR$editor;
    listenerData: any;
    name: string;
    sender: {
      [key: string]: any
    };
    cancel(): void;
    removeListener(): void;
    stop(): void;
  }

  declare interface CKEDITOR$feature {
    allowedContent?: CKEDITOR$filter$allowedContentRules;
    contentForms?: any;
    contentTransformations?: any;
    name?: string;
    requiredContent?: string | tools$style;
    toFeature?: () => CKEDITOR$feature;
  }

  declare var npm$namespace$CKEDITOR$fileTools: {
    addUploadWidget: typeof CKEDITOR$fileTools$addUploadWidget,
    bindNotification: typeof CKEDITOR$fileTools$bindNotification,
    getUploadUrl: typeof CKEDITOR$fileTools$getUploadUrl,
    isTypeSupported: typeof CKEDITOR$fileTools$isTypeSupported,
    markElement: typeof CKEDITOR$fileTools$markElement,
    isFileUploadSupported: typeof CKEDITOR$fileTools$isFileUploadSupported,

    fileLoader: typeof CKEDITOR$fileTools$fileLoader,
    uploadRepository: typeof CKEDITOR$fileTools$uploadRepository
  };
  declare var CKEDITOR$fileTools$isFileUploadSupported: boolean;

  declare function CKEDITOR$fileTools$addUploadWidget(
    editor: CKEDITOR$editor,
    name: string,
    def: fileTools$uploadWidgetDefinition
  ): void;

  declare function CKEDITOR$fileTools$bindNotification(
    editor: CKEDITOR$editor,
    fileLoader: fileTools$fileLoader
  ): void;

  declare function CKEDITOR$fileTools$getUploadUrl(
    config: {
      [key: string]: any
    },
    type?: string
  ): string;

  declare function CKEDITOR$fileTools$isTypeSupported(
    file: Blob,
    supportedTypes: RegExp
  ): boolean;

  declare function CKEDITOR$fileTools$markElement(
    element: CKEDITOR$dom$element,
    widgetName: string,
    loaderId: number
  ): void;

  declare class CKEDITOR$fileTools$fileLoader mixins CKEDITOR$event {
    data: string;
    CKEDITOR$dialog$definition$file: Blob;
    fileName: string;
    id: number;
    loaded: number;
    message: string;
    reader: FileReader;
    responseData: any;
    CKEDITOR$status: string;
    total: number;
    uploadTotal: number;
    uploadUrl: string;
    uploaded: string;
    url: string;
    xhr: XMLHttpRequest;
    constructor(
      editor: CKEDITOR$editor,
      fileOrData: Blob | string,
      fileName?: string
    ): this;
    abort(): void;
    isFinished(): boolean;
    load(): void;
    loadAndUpload(url: string, additionalRequestParameters?: any): void;
    update(): void;
    upload(url: string, additionalRequestParameters?: any): void;
  }

  declare class CKEDITOR$fileTools$uploadRepository mixins CKEDITOR$event {
    loaders: CKEDITOR$fileTools$fileLoader[];
    constructor(editor: CKEDITOR$editor): this;
    create(
      fileOrData: Blob | string,
      fileName: string,
      loaderType?: any
    ): CKEDITOR$fileTools$fileLoader;
    isFinished(): boolean;
  }

  declare type CKEDITOR$fileTools$uploadWidgetDefinition = {
    additionalRequestParameters: any,
    fileToElement: (pastedFile: any) => HTMLElement,
    loadMethod: string,
    loaderType: any,
    onAbort: () => boolean,
    onError: () => boolean,
    onLoaded: () => boolean,
    onUploaded: () => boolean,
    onUploading: () => boolean,
    replaceWith: () => any,
    skipNotifications: boolean,
    supportedTypes: string,
    uploadUrl: string
  } & CKEDITOR$plugins$widget$definition;

  declare var npm$namespace$CKEDITOR$filter: {
    transformationTools: typeof CKEDITOR$filter$transformationTools
  };
  declare type CKEDITOR$filter$allowedContentRule =
    | string
    | tools$style
    | {
        [key: string]: any
      };

  declare type CKEDITOR$filter$allowedContentRules =
    | CKEDITOR$filter$allowedContentRule
    | CKEDITOR$filter$allowedContentRule[];

  declare type CKEDITOR$filter$contentRule = string | tools$style;

  declare type CKEDITOR$filter$disallowedContentRules =
    | string
    | {
        [key: string]: any
      };

  declare interface CKEDITOR$filter$transformation {
    check?: string;
    element?: string | tools$style;
    left?: (element: CKEDITOR$htmlParser$element | tools$style) => boolean;
    right: (
      element: CKEDITOR$htmlParser$element,
      tools: string | CKEDITOR$filter$transformationTools
    ) => boolean;
  }

  declare var CKEDITOR$filter$transformationTools: CKEDITOR$filter$transformationTools;

  declare interface CKEDITOR$filter$transformationTools {
    alignmentToAttribute(element: CKEDITOR$htmlParser$element): void;
    alignmentToStyle(element: CKEDITOR$htmlParser$element): void;
    lengthToAttribute(
      element: CKEDITOR$htmlParser$element,
      styleName: string,
      attrName?: string
    ): void;
    lengthToStyle(
      element: CKEDITOR$htmlParser$element,
      styleName: string,
      attrName?: string
    ): void;
    matchesTyle(element: CKEDITOR$htmlParser$element, style: tools$style): void;
    sizeToAttribute(element: CKEDITOR$htmlParser$element): void;
    sizeToStyle(element: CKEDITOR$htmlParser$element): void;
    splitBorderShorthand(element: CKEDITOR$htmlParser$element): void;
    splitMarginShorthand(element: CKEDITOR$htmlParser$element): void;
    transform(
      element: CKEDITOR$htmlParser$element,
      form: tools$style | string
    ): void;
  }

  declare class CKEDITOR$filter {
    allowedContent: CKEDITOR$filter$allowedContentRules[];
    customConfig: boolean;
    disabled: boolean;
    disallowedContent: any[];
    CKEDITOR$editor: CKEDITOR$editor;
    elementCallbacks: Array<(element: CKEDITOR$htmlParser$element) => number>;
    id: number;
    static CKEDITOR$instances: {
      [id: string]: CKEDITOR$filter
    };
    constructor(
      editorOrRules: CKEDITOR$editor | CKEDITOR$filter$allowedContentRules
    ): this;
    addContentForms(forms: any[]): void;
    addElementCallback(
      callback: (element: CKEDITOR$htmlParser$element) => number
    ): void;
    addFeature(feature: CKEDITOR$feature): boolean;
    addTransformations(
      transformations: Array<Array<string | CKEDITOR$filter$transformation>>
    ): void;
    allow(
      newRules: CKEDITOR$filter$allowedContentRules,
      featureName?: string,
      overrideCustom?: boolean
    ): boolean;
    applyTo(
      fragment: CKEDITOR$htmlParser$fragment | CKEDITOR$htmlParser$element,
      toHrml: boolean,
      transformOnly: boolean,
      enterMode: number
    ): boolean;
    check(
      test: CKEDITOR$filter$contentRule,
      applyTransformations?: boolean,
      strictCheck?: boolean
    ): boolean;
    checkFeature(feature: CKEDITOR$feature): boolean;
    clone(): CKEDITOR$filter;
    destroy(): void;
    disable(): void;
    disallow(newRules: CKEDITOR$filter$disallowedContentRules): void;
    getAllowedEnterMode(defaultMode: number, reverse?: boolean): number;
  }

  declare class CKEDITOR$focusManager {
    currentActive: CKEDITOR$dom$domObject;
    hasFocus: boolean;
    constructor(editor: CKEDITOR$editor): this;
    add(element: CKEDITOR$dom$element, isCapture: boolean): void;
    blur(noDelay?: boolean): void;
    focus(currentActive?: CKEDITOR$dom$element): void;
    lock(): void;
    remove(element: CKEDITOR$dom$element): void;
    unlock(): void;
  }

  declare class CKEDITOR$htmlDataProcessor mixins CKEDITOR$dataProcessor {
    dataFilter: CKEDITOR$htmlParser$filter;
    htmlFilter: CKEDITOR$htmlParser$filter;
    writer: CKEDITOR$htmlParser$basicWriter;
    constructor(editor: CKEDITOR$editor): this;
    toDataFormat(
      html: string,
      options?:
        | string
        | {
            context?: string,
            filter?: CKEDITOR$filter,
            enterMode?: number
          }
    ): string;
    toHtml(
      data: string,
      options?: string | CKEDITOR$htmlDataProcessorOptions
    ): string;
  }

  declare interface CKEDITOR$htmlDataProcessorOptions {
    context?: string;
    fixForBody?: boolean;
    filter?: CKEDITOR$filter;
    dontFilter?: boolean;
    enterMode?: number;
    protectedWhitespaces?: boolean;
  }

  declare var npm$namespace$CKEDITOR$htmlParser: {
    basicWriter: typeof CKEDITOR$htmlParser$basicWriter,
    cdata: typeof CKEDITOR$htmlParser$cdata,
    comment: typeof CKEDITOR$htmlParser$comment,
    cssStyle: typeof CKEDITOR$htmlParser$cssStyle,
    element: typeof CKEDITOR$htmlParser$element,
    filter: typeof CKEDITOR$htmlParser$filter,
    filterRulesGroup: typeof CKEDITOR$htmlParser$filterRulesGroup,
    fragment: typeof CKEDITOR$htmlParser$fragment,
    node: typeof CKEDITOR$htmlParser$node,
    text: typeof CKEDITOR$htmlParser$text
  };
  declare class CKEDITOR$htmlParser$basicWriter {
    constructor(): this;
    attribute(attName: string, attValue: string): void;
    closeTag(tagName: string): void;
    comment(comment: string): void;
    getHtml(reset: boolean): string;
    openTag(
      tagName: string,
      attributes: {
        [key: string]: string
      }
    ): void;
    openTagClose(tagName: string, isSelfClose: boolean): void;
    reset(): void;
    text(text: string): void;
    write(data: string): void;
  }

  declare class CKEDITOR$htmlParser$cdata mixins CKEDITOR$htmlParser$node {
    constructor(value: string): this;
    notification$type: number;
    writeHtml(writer: CKEDITOR$htmlParser$basicWriter): void;
  }

  declare class CKEDITOR$htmlParser$comment mixins CKEDITOR$htmlParser$node {
    notification$type: number;
    value: string;
    constructor(value: string): this;
    filter(filter: CKEDITOR$filter): boolean;
    writeHtml(
      writer: CKEDITOR$htmlParser$basicWriter,
      filter?: CKEDITOR$htmlParser$filter
    ): void;
  }

  declare class CKEDITOR$htmlParser$cssStyle {
    constructor(elementOrStyleText: CKEDITOR$htmlParser$element | string): this;
    populate(
      obj:
        | CKEDITOR$htmlParser$element
        | CKEDITOR$dom$element
        | {
            [key: string]: any
          }
    ): void;
  }

  declare class CKEDITOR$htmlParser$element mixins CKEDITOR$htmlParser$node {
    attributes: {
      [name: string]: string
    };
    children: CKEDITOR$htmlParser$node[];
    name: string;
    notification$type: number;
    constructor(
      name: string,
      attributes: {
        [name: string]: string
      }
    ): this;
    add(node: CKEDITOR$dom$node, index?: number): void;
    addClass(className: string): void;
    clone(): CKEDITOR$htmlParser$element;
    filter(filter: CKEDITOR$htmlParser$filter): boolean;
    filterChildren(filter: CKEDITOR$htmlParser$filter): void;
    find(
      criteria: string | ((el: CKEDITOR$htmlParser$node) => boolean),
      recursive?: boolean
    ): CKEDITOR$htmlParser$node[];
    forEach(
      callback: (node: CKEDITOR$htmlParser$node) => void | false,
      type?: number,
      skipRoot?: boolean
    ): void;
    getFirst(
      condition:
        | string
        | {
            [key: string]: string
          }
        | ((node: CKEDITOR$htmlParser$node) => boolean)
    ): CKEDITOR$htmlParser$node;
    getHtml(): string;
    getOuterHtml(): string;
    hasClass(className: string): boolean;
    removeClass(className: string): void;
    replaceWithChildren(): void;
    setHtml(html: string): void;
    split(index: number): CKEDITOR$htmlParser$element;
    writeChildrenHtml(
      writer: CKEDITOR$htmlParser$basicWriter,
      filter?: CKEDITOR$htmlParser$filter
    ): void;
    writeHtml(
      writer: CKEDITOR$htmlParser$basicWriter,
      filter?: CKEDITOR$htmlParser$filter
    ): void;
  }

  declare class CKEDITOR$htmlParser$filter {
    attributeNameRules: htmlParser$filterRulesGroup;
    attributesRules: {
      [name: string]: htmlParser$filterRulesGroup
    };
    commentRules: htmlParser$filterRulesGroup;
    elementNameRules: htmlParser$filterRulesGroup;
    elementsRules: {
      [name: string]: htmlParser$filterRulesGroup
    };
    id: number;
    rootRules: htmlParser$filterRulesGroup;
    textRules: htmlParser$filterRulesGroup;
    constructor(rules?: htmlParser$filterRulesDefinition): this;
    addRules(
      rules: htmlParser$filterRulesDefinition,
      options?:
        | number
        | {
            priority?: number,
            applyToAll?: boolean
          }
    ): void;
    applyTo(node: CKEDITOR$dom$node): void;
  }

  declare interface CKEDITOR$htmlParser$filterRulesDefinition {
    elementNames?: any;
    attributeNames?: any;
    elements?: any;
    attributes?: any;
    text?: any;
    comment?: any;
    root?: any;
  }

  declare class CKEDITOR$htmlParser$filterRulesGroup {
    rules: Array<{
      value: htmlParser$rule,
      priority: number,
      option: htmlParser$ruleOptions
    }>;
    add(
      rule: htmlParser$rule,
      priority: number,
      options: htmlParser$ruleOptions
    ): void;
    addMany(
      rules: Array<{
        [key: string]: any
      }>,
      priority: number,
      options: htmlParser$ruleOptions
    ): void;
    exec(
      currentValue:
        | CKEDITOR$htmlParser$node
        | CKEDITOR$htmlParser$fragment
        | string
    ): CKEDITOR$htmlParser$node | CKEDITOR$htmlParser$fragment | string;
    execOnName(currentName: string): string;
    findIndex(priority: number): number;
  }

  declare class CKEDITOR$htmlParser$fragment {
    children: CKEDITOR$htmlParser$node[];
    parent: CKEDITOR$htmlParser$fragment;
    notification$type: number;
    constructor(): this;
    add(node: CKEDITOR$htmlParser$node, index?: number): void;
    filter(filter: CKEDITOR$htmlParser$filter): void;
    filterChildren(
      filter: CKEDITOR$htmlParser$filter,
      filterRoot?: boolean
    ): void;
    forEach(
      callback: (node: CKEDITOR$htmlParser$node) => void | false,
      type?: number,
      skipRoot?: boolean
    ): void;
    writeChildrenHtml(
      writer: CKEDITOR$htmlParser$basicWriter,
      filter?: CKEDITOR$htmlParser$filter,
      filterRoot?: boolean
    ): void;
    writeHtml(
      writer: CKEDITOR$htmlParser$basicWriter,
      filter?: CKEDITOR$htmlParser$filter
    ): void;
    static fromBBCode(source: string): CKEDITOR$htmlParser$fragment;
    static fromHtml(
      fragmentHtml: string,
      parent?: CKEDITOR$htmlParser$element | string,
      fixingBlock?: string | boolean
    ): CKEDITOR$htmlParser$fragment | CKEDITOR$htmlParser$element;
  }

  declare class CKEDITOR$htmlParser$node {
    constructor(): this;
    getAscendant(
      condition:
        | string
        | {
            [name: string]: string
          }
        | ((node: CKEDITOR$htmlParser$element) => boolean)
    ): CKEDITOR$htmlParser$element;
    getIndex(): number;
    insertAfter(node: CKEDITOR$htmlParser$node): void;
    insertBefore(node: CKEDITOR$htmlParser$node): void;
    remove(): CKEDITOR$htmlParser$node;
    replaceWith(node: CKEDITOR$htmlParser$node): void;
    wrapWith(wrapper: CKEDITOR$htmlParser$element): CKEDITOR$htmlParser$element;
  }

  declare type CKEDITOR$htmlParser$rule =
    | ((
        value: CKEDITOR$htmlParser$node | CKEDITOR$htmlParser$fragment | string
      ) => boolean)
    | [string, string];

  declare interface CKEDITOR$htmlParser$ruleOptions {
    applyToAll?: boolean;
    excludeNestedEditable?: boolean;
  }

  declare class CKEDITOR$htmlParser$text mixins CKEDITOR$htmlParser$node {
    constructor(value: string): this;
    notification$type: number;
    filter(filter: CKEDITOR$htmlParser$filter): boolean;
    writeHtml(
      writer: CKEDITOR$htmlParser$basicWriter,
      filter?: CKEDITOR$htmlParser$filter
    ): void;
  }

  declare class CKEDITOR$htmlWriter mixins CKEDITOR$htmlParser$basicWriter {
    indentationChars: string;
    lineBreakChars: string;
    selfClosingEnd: string;
    indentation(): void;
    lineBreak(): void;
    setRules(
      tagName: string,
      rules: {
        [key: string]: any
      }
    ): void;
  }

  declare class CKEDITOR$keystrokeHandler {
    blockedKeystrokes: {
      [key: number]: string | boolean
    };
    keystrokes: {
      [key: number]: string | boolean
    };
    constructor(editor: CKEDITOR$editor): this;
    attach(domObject: CKEDITOR$dom$domObject): void;
  }

  declare var npm$namespace$CKEDITOR$lang: {
    detect: typeof CKEDITOR$lang$detect,
    load: typeof CKEDITOR$lang$load,
    languages: typeof CKEDITOR$lang$languages,
    rtl: typeof CKEDITOR$lang$rtl
  };
  declare var CKEDITOR$lang$languages: {
    [code: string]: number
  };

  declare var CKEDITOR$lang$rtl: {
    [code: string]: number
  };

  declare function CKEDITOR$lang$detect(
    defaultLanguage: string,
    probeLanguage?: string
  ): string;

  declare function CKEDITOR$lang$load(
    languageCode: string,
    defaultLanguage: string,
    callback: (code: string, entries: any) => void
  ): void;

  declare var npm$namespace$CKEDITOR$loader: {
    load: typeof CKEDITOR$loader$load,
    loadPending: typeof CKEDITOR$loader$loadPending,
    loadedScripts: typeof CKEDITOR$loader$loadedScripts,
    scripts: typeof CKEDITOR$loader$scripts
  };
  declare var CKEDITOR$loader$loadedScripts: string[];

  declare var CKEDITOR$loader$scripts: string[];

  declare function CKEDITOR$loader$load(
    scriptName: string,
    defer?: boolean
  ): void;

  declare function CKEDITOR$loader$loadPending(): void;

  declare class CKEDITOR$menu {
    constructor(): this;
    add(item: any): void;
    addListener(
      listenerFn: (
        startElement: CKEDITOR$dom$element,
        selection: CKEDITOR$dom$selection,
        path: CKEDITOR$dom$elementPath
      ) => any
    ): void;
    findItemByCommandName(
      commandName: string
    ): {
      item: any,
      element: CKEDITOR$dom$element
    };
    hide(returnFocus?: boolean): void;
    removeAll(): void;
    show(
      offsetParent: CKEDITOR$dom$element,
      corner?: number,
      offsetX?: number,
      offsetY?: number
    ): void;
  }

  declare interface CKEDITOR$pluginDefinition {
    hidpi?: boolean;
    lang?: string | string[];
    requires?: string | string[];
    afterInit?: (editor: CKEDITOR$editor) => any;
    beforeInit?: (editor: CKEDITOR$editor) => any;
    init?: (editor: CKEDITOR$editor) => void;
    onLoad?: () => any;
  }

  declare var npm$namespace$CKEDITOR$plugins: {
    add: typeof CKEDITOR$plugins$add,
    addExternal: typeof CKEDITOR$plugins$addExternal,
    get: typeof CKEDITOR$plugins$get,
    getFilePath: typeof CKEDITOR$plugins$getFilePath,
    getPath: typeof CKEDITOR$plugins$getPath,
    load: typeof CKEDITOR$plugins$load,
    setLang: typeof CKEDITOR$plugins$setLang,
    registered: typeof CKEDITOR$plugins$registered,

    autoEmbed: typeof CKEDITOR$plugins$autoEmbed,
    contextMenu: typeof CKEDITOR$plugins$contextMenu,
    list: typeof CKEDITOR$plugins$list,
    notification: typeof CKEDITOR$plugins$notification,
    notificationAggregator: typeof CKEDITOR$plugins$notificationAggregator,
    widget: typeof CKEDITOR$plugins$widget,
    cloudservices: typeof npm$namespace$CKEDITOR$plugins$cloudservices,
    balloontoolbar: typeof npm$namespace$CKEDITOR$plugins$balloontoolbar,
    clipboard: typeof npm$namespace$CKEDITOR$plugins$clipboard,
    condesnippet: typeof npm$namespace$CKEDITOR$plugins$condesnippet,
    copyformatting: typeof npm$namespace$CKEDITOR$plugins$copyformatting,
    embedBase: typeof npm$namespace$CKEDITOR$plugins$embedBase,
    image2: typeof npm$namespace$CKEDITOR$plugins$image2,
    imagebase: typeof npm$namespace$CKEDITOR$plugins$imagebase,
    indent: typeof npm$namespace$CKEDITOR$plugins$indent,
    indentList: typeof npm$namespace$CKEDITOR$plugins$indentList,
    link: typeof npm$namespace$CKEDITOR$plugins$link,
    notificationAggregator: typeof npm$namespace$CKEDITOR$plugins$notificationAggregator,
    pastefromword: typeof npm$namespace$CKEDITOR$plugins$pastefromword,
    tableselection: typeof npm$namespace$CKEDITOR$plugins$tableselection,
    widget: typeof npm$namespace$CKEDITOR$plugins$widget
  };

  declare var npm$namespace$CKEDITOR$plugins$cloudservices: {
    cloudServicesLoader: typeof CKEDITOR$plugins$cloudservices$cloudServicesLoader
  };
  declare class CKEDITOR$plugins$cloudservices$cloudServicesLoader
    mixins CKEDITOR$fileTools$fileLoader {
    customToken: string;
    constructor(
      editor: CKEDITOR$editor,
      fileOrData: Blob | string,
      fileName?: string,
      token?: string
    ): this;
    loadAndUpload(url?: string, additionalRequestParameters?: any): void;
    upload(url?: string, additionalRequestParameters?: any): void;
  }

  declare class CKEDITOR$plugins$autoEmbed {
    getWidgetDefinition(
      editor: CKEDITOR$editor,
      url: string
    ): CKEDITOR$plugins$widget$definition;
  }

  declare var npm$namespace$CKEDITOR$plugins$balloontoolbar: {
    PRIORITY: typeof CKEDITOR$plugins$balloontoolbar$PRIORITY,

    context: typeof CKEDITOR$plugins$balloontoolbar$context,
    contextManager: typeof CKEDITOR$plugins$balloontoolbar$contextManager
  };
  declare var CKEDITOR$plugins$balloontoolbar$PRIORITY: {
    [pri: string]: number
  };

  declare class CKEDITOR$plugins$balloontoolbar$context {
    CKEDITOR$editor: CKEDITOR$editor;
    notification$options: balloontoolbar$contextDefinition;
    toolbar: CKEDITOR$ui$balloonToolbar;
    constructor(
      editor: CKEDITOR$editor,
      options: balloontoolbar$contextDefinition
    ): this;
    destroy(): void;
    hide(): void;
    refresh(): void;
    show(pointedElement?: CKEDITOR$dom$element): void;
  }

  declare interface CKEDITOR$plugins$balloontoolbar$contextDefinition {
    cssSelector?: string;
    priority?: number;
    widgets?: string[] | string;
    refresh?: (
      editor: CKEDITOR$editor,
      path: CKEDITOR$dom$elementPath,
      selection: CKEDITOR$dom$selection
    ) => CKEDITOR$dom$element;
  }

  declare class CKEDITOR$plugins$balloontoolbar$contextManager {
    CKEDITOR$editor: CKEDITOR$editor;
    constructor(editor: CKEDITOR$editor): this;
    add(context: CKEDITOR$plugins$balloontoolbar$context): void;
    check(selection?: CKEDITOR$dom$selection): void;
    create(
      options: CKEDITOR$plugins$balloontoolbar$contextDefinition
    ): CKEDITOR$plugins$balloontoolbar$context;
    destroy(): void;
    hide(): void;
  }

  declare var npm$namespace$CKEDITOR$plugins$clipboard: {
    addPasteButton: typeof CKEDITOR$plugins$clipboard$addPasteButton,
    canClipboardApiBeTrusted: typeof CKEDITOR$plugins$clipboard$canClipboardApiBeTrusted,
    getDropTarget: typeof CKEDITOR$plugins$clipboard$getDropTarget,
    getRangeAtDropPosition: typeof CKEDITOR$plugins$clipboard$getRangeAtDropPosition,
    initDragDataTransfer: typeof CKEDITOR$plugins$clipboard$initDragDataTransfer,
    initPasteDataTransfer: typeof CKEDITOR$plugins$clipboard$initPasteDataTransfer,
    preventDefaultDropOnElement: typeof CKEDITOR$plugins$clipboard$preventDefaultDropOnElement,
    resetDragDataTransfer: typeof CKEDITOR$plugins$clipboard$resetDragDataTransfer,
    isCustomCopyCutSupported: typeof CKEDITOR$plugins$clipboard$isCustomCopyCutSupported,
    isCustomDataTypesSupported: typeof CKEDITOR$plugins$clipboard$isCustomDataTypesSupported,
    isFileApiSupported: typeof CKEDITOR$plugins$clipboard$isFileApiSupported,
    mainPasteEvent: typeof CKEDITOR$plugins$clipboard$mainPasteEvent,

    dataTransfer: typeof CKEDITOR$plugins$clipboard$dataTransfer,
    fallbackDataTransfer: typeof CKEDITOR$plugins$clipboard$fallbackDataTransfer
  };
  declare var CKEDITOR$plugins$clipboard$isCustomCopyCutSupported: boolean;

  declare var CKEDITOR$plugins$clipboard$isCustomDataTypesSupported: boolean;

  declare var CKEDITOR$plugins$clipboard$isFileApiSupported: boolean;

  declare var CKEDITOR$plugins$clipboard$mainPasteEvent: string;

  declare function CKEDITOR$plugins$clipboard$addPasteButton(
    editor: CKEDITOR$editor,
    name: string,
    definition: {
      [key: string]: any
    }
  ): void;

  declare function CKEDITOR$plugins$clipboard$canClipboardApiBeTrusted(
    dataTransfer: clipboard$dataTransfer,
    editor: CKEDITOR$editor
  ): boolean;

  declare function CKEDITOR$plugins$clipboard$getDropTarget(
    editor: CKEDITOR$editor
  ): CKEDITOR$dom$domObject;

  declare function CKEDITOR$plugins$clipboard$getRangeAtDropPosition(
    domEvent: Event,
    editor: CKEDITOR$editor
  ): CKEDITOR$dom$range;

  declare function CKEDITOR$plugins$clipboard$initDragDataTransfer(
    evt?: CKEDITOR$dom$event,
    editor?: CKEDITOR$editor
  ): void;

  declare function CKEDITOR$plugins$clipboard$initPasteDataTransfer(
    evt?: CKEDITOR$dom$event,
    sourceEditor?: CKEDITOR$editor
  ): void;

  declare function CKEDITOR$plugins$clipboard$preventDefaultDropOnElement(
    element: CKEDITOR$dom$element
  ): void;

  declare function CKEDITOR$plugins$clipboard$resetDragDataTransfer(): void;

  declare class CKEDITOR$plugins$clipboard$dataTransfer {
    $: DataTransfer;
    id: string;
    sourceEditor: CKEDITOR$editor;
    constructor(
      nativeDataTransfer?: DataTransfer,
      editor?: CKEDITOR$editor
    ): this;
    cacheData(): void;
    getData(type: string, getNative?: boolean): string;
    getFile(i: number): File;
    getFilesCount(): number;
    getTransferType(targetEditor: CKEDITOR$editor): number;
    isEmpty(): boolean;
    setData(type: string, value: string): void;
    storeId(): void;
  }

  declare class CKEDITOR$plugins$clipboard$fallbackDataTransfer {
    constructor(dataTransfer: CKEDITOR$plugins$clipboard$dataTransfer): this;
    getData(type: string, getNative?: boolean): string;
    isRequired(): boolean;
    setData(type: string, value: string): string;
  }

  declare var npm$namespace$CKEDITOR$plugins$condesnippet: {
    setHighlighter: typeof CKEDITOR$plugins$condesnippet$setHighlighter,

    highlighter: typeof CKEDITOR$plugins$condesnippet$highlighter
  };
  declare function CKEDITOR$plugins$condesnippet$setHighlighter(
    highlighter: condesnippet$highlighter
  ): void;

  declare class CKEDITOR$plugins$condesnippet$highlighter {
    CKEDITOR$plugins$condesnippet$highlighter: (
      code: string,
      lang: string,
      callback: (highlightedCode: string) => void
    ) => void;
    init: (ready: () => void) => void;
    CKEDITOR$lang$languages: {
      [lang: string]: string
    };
    scriptLoader$queue: Array<
      (
        code: string,
        lang: string,
        callback: (highlightedCode: string) => void
      ) => void
    >;
    ready: boolean;
    highlight(
      code: string,
      lang: string,
      callback: (highlightedCode: string) => void
    ): void;
  }

  declare class CKEDITOR$plugins$contextMenu mixins CKEDITOR$menu {
    constructor(editor: CKEDITOR$editor): this;
    addTarget(
      element: CKEDITOR$dom$element,
      nativeContextMenuOnCtrl?: boolean
    ): void;
    open(
      offsetParent: CKEDITOR$dom$element,
      corner?: number,
      offsetX?: number,
      offsetY?: number
    ): void;
  }

  declare var npm$namespace$CKEDITOR$plugins$copyformatting: {
    breakOnElements: typeof CKEDITOR$plugins$copyformatting$breakOnElements,
    elementsForInlineTransform: typeof CKEDITOR$plugins$copyformatting$elementsForInlineTransform,
    excludedAttributes: typeof CKEDITOR$plugins$copyformatting$excludedAttributes,
    excludedAttributesFromInlineTransform: typeof CKEDITOR$plugins$copyformatting$excludedAttributesFromInlineTransform,
    inlineBoundary: typeof CKEDITOR$plugins$copyformatting$inlineBoundary,
    preservedElements: typeof CKEDITOR$plugins$copyformatting$preservedElements,

    state: typeof CKEDITOR$plugins$copyformatting$state
  };
  declare var CKEDITOR$plugins$copyformatting$breakOnElements: string[];

  declare var CKEDITOR$plugins$copyformatting$elementsForInlineTransform: string[];

  declare var CKEDITOR$plugins$copyformatting$excludedAttributes: string[];

  declare var CKEDITOR$plugins$copyformatting$excludedAttributesFromInlineTransform: string[];

  declare var CKEDITOR$plugins$copyformatting$inlineBoundary: string[];

  declare var CKEDITOR$plugins$copyformatting$preservedElements: string[];

  declare class CKEDITOR$plugins$copyformatting$state mixins CKEDITOR$event {
    CKEDITOR$editor: CKEDITOR$editor;
    CKEDITOR$htmlParser$filter: CKEDITOR$htmlParser$filter;
    sticky: boolean;
    pastefromword$styles: tools$style[];
    constructor(editor: CKEDITOR$editor): this;
  }

  declare var npm$namespace$CKEDITOR$plugins$embedBase: {
    createWidgetBaseDefinition: typeof CKEDITOR$plugins$embedBase$createWidgetBaseDefinition
  };
  declare function CKEDITOR$plugins$embedBase$createWidgetBaseDefinition(
    editor: CKEDITOR$editor
  ): embedBase$baseDefinition;

  declare type CKEDITOR$plugins$embedBase$baseDefinition = {
    providerUrl: CKEDITOR$template,
    urlRegExp: RegExp,
    getErrorMessage(
      messageTypeOrMessage: string,
      url?: string,
      suffix?: string
    ): string,
    isUrlValid(url: string): boolean,
    loadContent(
      url: string,
      callback?: () => void,
      errorCallback?: (error: string) => void,
      noNotifications?: boolean
    ): embedBase$request
  } & CKEDITOR$plugins$widget$definition;

  declare interface CKEDITOR$plugins$embedBase$request {
    callback: () => void;
    errorCallback: (error: string) => void;
    response: {
      [key: string]: string
    };
    task: CKEDITOR$plugins$notificationAggregator$task;
    url: string;
    cancel(): void;
  }

  declare var npm$namespace$CKEDITOR$plugins$image2: {
    checkHasNaturalRatio: typeof CKEDITOR$plugins$image2$checkHasNaturalRatio,
    getLinkAttributesGetter: typeof CKEDITOR$plugins$image2$getLinkAttributesGetter,
    getLinkAttributesParser: typeof CKEDITOR$plugins$image2$getLinkAttributesParser,
    getNatural: typeof CKEDITOR$plugins$image2$getNatural
  };
  declare function CKEDITOR$plugins$image2$checkHasNaturalRatio(
    image: CKEDITOR$dom$element
  ): boolean;

  declare function CKEDITOR$plugins$image2$getLinkAttributesGetter(): (
    editor: CKEDITOR$editor,
    data: {
      [key: string]: string
    }
  ) => {
    set: {
      [tag: string]: string
    },
    removed: string[]
  };

  declare function CKEDITOR$plugins$image2$getLinkAttributesParser(): (
    editor: CKEDITOR$editor,
    element: CKEDITOR$dom$element
  ) => {
    [key: string]: string
  };

  declare function CKEDITOR$plugins$image2$getNatural(
    image: CKEDITOR$dom$element
  ): {
    [key: string]: string
  };

  declare var npm$namespace$CKEDITOR$plugins$imagebase: {
    addFeature: typeof CKEDITOR$plugins$imagebase$addFeature,
    addImageWidget: typeof CKEDITOR$plugins$imagebase$addImageWidget,
    featuresDefinitions: typeof CKEDITOR$plugins$imagebase$featuresDefinitions,

    progressBar: typeof CKEDITOR$plugins$imagebase$progressBar,
    progressReporter: typeof CKEDITOR$plugins$imagebase$progressReporter
  };
  declare var CKEDITOR$plugins$imagebase$featuresDefinitions: {
    [key: string]: string
  };

  declare function CKEDITOR$plugins$imagebase$addFeature(
    editor: CKEDITOR$editor,
    name: string,
    definition: imagebase$imageWidgetDefinition
  ): imagebase$imageWidgetDefinition;

  declare function CKEDITOR$plugins$imagebase$addImageWidget(
    editor: CKEDITOR$editor,
    name: string,
    definition: imagebase$imageWidgetDefinition
  ): void;

  declare type CKEDITOR$plugins$imagebase$imageWidgetDefinition = {
    features: string[],
    upcast: string
  } & CKEDITOR$plugins$widget$definition;

  declare class CKEDITOR$plugins$imagebase$progressBar
    mixins CKEDITOR$plugins$imagebase$progressReporter {
    bar: CKEDITOR$dom$element;
    constructor(): this;
  }

  declare class CKEDITOR$plugins$imagebase$progressReporter {
    wrapper: CKEDITOR$dom$element;
    constructor(wrapperHtml?: string): this;
    aborted(): void;
    bindLoader(loader: CKEDITOR$fileTools$fileLoader): void;
    done(): void;
    failed(): void;
    remove(): void;
    updated(progress: number): void;
  }

  declare var npm$namespace$CKEDITOR$plugins$indent: {
    registerCommands: typeof CKEDITOR$plugins$indent$registerCommands,

    genericDefinition: typeof CKEDITOR$plugins$indent$genericDefinition,
    specificDefinition: typeof CKEDITOR$plugins$indent$specificDefinition
  };
  declare function CKEDITOR$plugins$indent$registerCommands(
    editor: CKEDITOR$editor,
    commands: {
      [key: string]: CKEDITOR$command
    }
  ): void;

  declare class CKEDITOR$plugins$indent$genericDefinition
    mixins CKEDITOR$commandDefinition {
    async: boolean;
    canUndo: boolean;
    CKEDITOR$plugins$balloontoolbar$context: boolean;
    contextSensitive: boolean;
    editorFocus: boolean;
    fakeKeystroke: number;
    isIndent: boolean;
    modes: {
      [key: string]: any
    };
    readOnly: boolean;
    startDisabled: boolean;
    exec(editor: CKEDITOR$editor, data?: any): boolean;
    refresh(editor: CKEDITOR$editor, path: CKEDITOR$dom$elementPath): void;
  }

  declare class CKEDITOR$plugins$indent$specificDefinition {
    database: {
      [key: string]: any
    };
    enterBr: boolean;
    indentKey: {
      [key: string]: any
    };
    isIndent: boolean;
    jobs: {
      [priority: string]: {
        refresh: (
          editor: CKEDITOR$editor,
          path: CKEDITOR$dom$elementPath
        ) => number,
        exec: (editor: CKEDITOR$editor) => boolean
      }
    };
    relatedGlobal: {
      [key: string]: any
    };
    execJob(editor: CKEDITOR$editor, priority: number): boolean;
    getContext(node: CKEDITOR$dom$elementPath): CKEDITOR$dom$element;
    refreshJob(editor: CKEDITOR$editor, priority: number): number;
  }

  declare var npm$namespace$CKEDITOR$plugins$indentList: {
    firstItemInPath: typeof CKEDITOR$plugins$indentList$firstItemInPath
  };
  declare function CKEDITOR$plugins$indentList$firstItemInPath(
    query:
      | string
      | string[]
      | {
          [tagName: string]: any
        }
      | CKEDITOR$dom$element
      | ((element: CKEDITOR$dom$element) => boolean)
  ): boolean;

  declare var npm$namespace$CKEDITOR$plugins$link: {
    getEditorAnchors: typeof CKEDITOR$plugins$link$getEditorAnchors,
    getLinkAttributes: typeof CKEDITOR$plugins$link$getLinkAttributes,
    getSelectedLink: typeof CKEDITOR$plugins$link$getSelectedLink,
    parseLinkAttributes: typeof CKEDITOR$plugins$link$parseLinkAttributes,
    showDisplayTextForElement: typeof CKEDITOR$plugins$link$showDisplayTextForElement,
    tryRestoreFakeAnchor: typeof CKEDITOR$plugins$link$tryRestoreFakeAnchor,
    emptyAnchorFix: typeof CKEDITOR$plugins$link$emptyAnchorFix,
    fakeAnchor: typeof CKEDITOR$plugins$link$fakeAnchor,
    synAnchorSelector: typeof CKEDITOR$plugins$link$synAnchorSelector
  };
  declare var CKEDITOR$plugins$link$emptyAnchorFix: boolean;

  declare var CKEDITOR$plugins$link$fakeAnchor: boolean;

  declare var CKEDITOR$plugins$link$synAnchorSelector: boolean;

  declare function CKEDITOR$plugins$link$getEditorAnchors(
    editor: CKEDITOR$editor
  ): CKEDITOR$dom$element[];

  declare function CKEDITOR$plugins$link$getLinkAttributes(
    editor: CKEDITOR$editor,
    data: {
      [key: string]: any
    }
  ): {
    set: {
      [key: string]: string
    },
    removed: string[]
  };

  declare function CKEDITOR$plugins$link$getSelectedLink(
    editor: CKEDITOR$editor,
    returnMultiple?: boolean
  ): CKEDITOR$dom$element | CKEDITOR$dom$element[];

  declare function CKEDITOR$plugins$link$parseLinkAttributes(
    editor: CKEDITOR$editor,
    element: CKEDITOR$dom$element
  ): {
    [key: string]: any
  };

  declare function CKEDITOR$plugins$link$showDisplayTextForElement(
    element: CKEDITOR$dom$element,
    editor: CKEDITOR$editor
  ): boolean;

  declare function CKEDITOR$plugins$link$tryRestoreFakeAnchor(
    editor: CKEDITOR$editor,
    element: CKEDITOR$dom$element
  ): CKEDITOR$dom$element;

  declare class CKEDITOR$plugins$list {
    arrayToList(
      listArray: any,
      database: any,
      paragraphMode: any,
      dir: any
    ): void;
    listToArray(
      listNode: any,
      database: any,
      baseArray: any,
      baseIndentLevel: any,
      grandparentNode: any
    ): void;
  }

  declare class CKEDITOR$plugins$notification {
    notification$area: CKEDITOR$plugins$notification$area;
    duration: number;
    CKEDITOR$editor: CKEDITOR$editor;
    CKEDITOR$htmlParser$element: CKEDITOR$dom$element;
    id: number;
    message: string;
    progress: number;
    notification$type: CKEDITOR$plugins$notification$type;
    constructor(
      editor: CKEDITOR$editor,
      options: CKEDITOR$plugins$notification$options
    ): this;
    hide(): void;
    isVisible(): boolean;
    show(): void;
    update(options: CKEDITOR$plugins$notification$updateOptions): void;
  }

  declare interface CKEDITOR$plugins$notification$area {
    +editor: CKEDITOR$editor;
    +element: CKEDITOR$dom$element;
    +notifications: CKEDITOR$plugins$notification[];
    add(notification: CKEDITOR$plugins$notification): void;
    remove(notification: CKEDITOR$plugins$notification): void;
  }

  declare interface CKEDITOR$plugins$notification$optionsBase {
    duration?: number;
    progress?: number;
    type?: notification$type;
  }

  declare type CKEDITOR$plugins$notification$options = {
    message: string
  } & CKEDITOR$plugins$notification$optionsBase;

  declare type CKEDITOR$plugins$notification$updateOptions = {
    message?: string,
    important?: boolean
  } & CKEDITOR$plugins$notification$optionsBase;

  declare type CKEDITOR$plugins$notification$type =
    | "info"
    | "warning"
    | "success"
    | "progress";

  declare class CKEDITOR$plugins$notificationAggregator mixins CKEDITOR$event {
    CKEDITOR$editor: CKEDITOR$editor;
    CKEDITOR$plugins$notification: CKEDITOR$plugins$notification;
    constructor(
      editor: CKEDITOR$editor,
      message: string,
      singularMessage?: string
    ): this;
    createTask(options?: {
      weight?: number
    }): CKEDITOR$plugins$notificationAggregator$task;
    getDoneTaskCount(): number;
    getPercentage(): number;
    getTaskCount(): number;
    isFinished(): boolean;
    update(): void;
  }

  declare var npm$namespace$CKEDITOR$plugins$notificationAggregator: {
    task: typeof CKEDITOR$plugins$notificationAggregator$task
  };
  declare class CKEDITOR$plugins$notificationAggregator$task
    mixins CKEDITOR$event {
    constructor(weight?: number): this;
    cancel(): void;
    done(): void;
    isCanceled(): boolean;
    isDone(): boolean;
    update(weight: number): void;
  }

  declare var npm$namespace$CKEDITOR$plugins$pastefromword: {
    lists: typeof CKEDITOR$plugins$pastefromword$lists,
    styles: typeof CKEDITOR$plugins$pastefromword$styles,
    lists: typeof npm$namespace$CKEDITOR$plugins$pastefromword$lists
  };
  declare class CKEDITOR$plugins$pastefromword$lists {
    lists$numbering: CKEDITOR$plugins$pastefromword$lists$numbering;
  }

  declare var npm$namespace$CKEDITOR$plugins$pastefromword$lists: {
    numbering: typeof CKEDITOR$plugins$pastefromword$lists$numbering
  };
  declare class CKEDITOR$plugins$pastefromword$lists$numbering {
    getStyle(marker: string): string;
    toNumber(marker: string, markerType: string): number;
  }

  declare class CKEDITOR$plugins$pastefromword$styles {
    pushStylesLower(
      element: CKEDITOR$htmlParser$element,
      exceptions: {
        [style: string]: boolean
      },
      wrapText?: boolean
    ): boolean;
  }

  declare var npm$namespace$CKEDITOR$plugins$tableselection: {
    getCellsBetween: typeof CKEDITOR$plugins$tableselection$getCellsBetween
  };
  declare function CKEDITOR$plugins$tableselection$getCellsBetween(
    first: CKEDITOR$dom$element,
    last: CKEDITOR$dom$element
  ): CKEDITOR$dom$element[];

  declare var npm$namespace$CKEDITOR$plugins$widget: {
    getNestedEditable: typeof CKEDITOR$plugins$widget$getNestedEditable,
    isDomDragHandler: typeof CKEDITOR$plugins$widget$isDomDragHandler,
    isDomDragHandlerContainer: typeof CKEDITOR$plugins$widget$isDomDragHandlerContainer,
    isDomNestedEditable: typeof CKEDITOR$plugins$widget$isDomNestedEditable,
    isDomWidget: typeof CKEDITOR$plugins$widget$isDomWidget,
    isDomWidgetElement: typeof CKEDITOR$plugins$widget$isDomWidgetElement,
    isDomWidgetWrapper: typeof CKEDITOR$plugins$widget$isDomWidgetWrapper,
    isParserWidgetElement: typeof CKEDITOR$plugins$widget$isParserWidgetElement,
    isParserWidgetWrapper: typeof CKEDITOR$plugins$widget$isParserWidgetWrapper,
    WRAPPER_CLASS_PREFIX: typeof CKEDITOR$plugins$widget$WRAPPER_CLASS_PREFIX,

    nestedEditable: typeof CKEDITOR$plugins$widget$nestedEditable,
    repository: typeof CKEDITOR$plugins$widget$repository,
    widgetselection: typeof CKEDITOR$plugins$widget$widgetselection
  };
  declare var CKEDITOR$plugins$widget$WRAPPER_CLASS_PREFIX: string;

  declare function CKEDITOR$plugins$widget$getNestedEditable(
    guard: CKEDITOR$dom$element,
    node: CKEDITOR$dom$node
  ): CKEDITOR$dom$element;

  declare function CKEDITOR$plugins$widget$isDomDragHandler(
    node: CKEDITOR$dom$node
  ): boolean;

  declare function CKEDITOR$plugins$widget$isDomDragHandlerContainer(
    node: CKEDITOR$dom$node
  ): boolean;

  declare function CKEDITOR$plugins$widget$isDomNestedEditable(
    node: CKEDITOR$dom$node
  ): boolean;

  declare function CKEDITOR$plugins$widget$isDomWidget(
    node: CKEDITOR$dom$node
  ): boolean;

  declare function CKEDITOR$plugins$widget$isDomWidgetElement(
    node: CKEDITOR$dom$node
  ): boolean;

  declare function CKEDITOR$plugins$widget$isDomWidgetWrapper(
    node: CKEDITOR$dom$node
  ): boolean;

  declare function CKEDITOR$plugins$widget$isParserWidgetElement(
    node: CKEDITOR$dom$node
  ): boolean;

  declare function CKEDITOR$plugins$widget$isParserWidgetWrapper(
    node: CKEDITOR$dom$node
  ): boolean;

  declare interface CKEDITOR$plugins$widget$nestedEditable$definition {
    allowedContent?: CKEDITOR$filter$allowedContentRules;
    disallowedContent?: CKEDITOR$filter$disallowedContentRules;
    pathName?: string;
    selector?: string;
  }

  declare class CKEDITOR$plugins$widget$nestedEditable
    mixins CKEDITOR$dom$element {
    CKEDITOR$editor: CKEDITOR$editor;
    enterMode: number;
    CKEDITOR$htmlParser$filter: CKEDITOR$htmlParser$filter;
    shiftEnterMode: number;
    constructor(
      editor: CKEDITOR$editor,
      element: CKEDITOR$dom$element,
      config: {
        filter?: CKEDITOR$htmlParser$filter
      }
    ): this;
    getData(): string;
    setData(data: string): void;
  }

  declare type CKEDITOR$plugins$widget$definition = {
    button?: string,
    data?: (evt: CKEDITOR$eventInfo) => void,
    defaults?: {
      [key: string]: any
    },
    dialog?: string,
    downcast?: string | ((element: CKEDITOR$htmlParser$element) => void),
    downcasts?: {
      [key: string]: any
    },
    draggable?: boolean,
    edit?: () => void,
    editables?: {
      [key: string]: any
    },
    getLabel?: () => any,
    init?: () => void,
    inline?: boolean,
    insert?: () => void,
    mask?: boolean,
    parts?: {
      [key: string]: any
    },
    pathName?: string,
    styleToAllowedContentRules?: (
      style: tools$style
    ) => CKEDITOR$filter$allowedContentRules,
    styleableElements?: string,
    template?: string | CKEDITOR$template,
    upcast?:
      | string
      | ((element: CKEDITOR$htmlParser$element, data: any) => boolean),
    upcastPriority?: number,
    upcasts?: {
      [key: string]: any
    }
  } & CKEDITOR$feature;

  declare class CKEDITOR$plugins$widget$repository mixins CKEDITOR$event {
    CKEDITOR$editor: CKEDITOR$editor;
    focused: customHandlers$widget;
    CKEDITOR$instances: {
      [id: string]: customHandlers$widget
    };
    registered: {
      [name: string]: CKEDITOR$plugins$widget$definition
    };
    selected: customHandlers$widget[];
    widgetHoldingFocusedEditable: customHandlers$widget;
    add(name: string, widgetDef: CKEDITOR$plugins$widget$definition): void;
    addUpcastCallback(
      callback: (element: CKEDITOR$htmlParser$element, data: any) => boolean
    ): void;
    checkSelection(): void;
    checkWidgets(options?: {
      initOnlyNew?: boolean,
      focusInited?: boolean
    }): void;
    del(widget: CKEDITOR$plugins$widget): void;
    destroy(widget: CKEDITOR$plugins$widget, offline?: boolean): void;
    destroyAll(offline?: boolean): void;
    finalizeCreation(container: any): void;
    getByElement(
      element: any,
      checkWrapperOnly: boolean
    ): CKEDITOR$plugins$widget;
    initOn(
      element: CKEDITOR$dom$element,
      widgetDef?: string | CKEDITOR$plugins$widget$definition,
      startupData?: {
        [key: string]: any
      }
    ): CKEDITOR$plugins$widget;
    initOnAll(container?: CKEDITOR$dom$element): CKEDITOR$plugins$widget[];
    parseElementClasses(classes: string): any;
    wrapElement(element: any, widgetName?: string): any;
  }

  declare class CKEDITOR$plugins$widget$widgetselection {
    addFillers(editable: CKEDITOR$editable): boolean;
    removeFillers(editable: CKEDITOR$editable): void;
  }

  declare class CKEDITOR$plugins$widget
    mixins CKEDITOR$event, CKEDITOR$plugins$widget$definition {
    dataReady: boolean;
    CKEDITOR$plugins$widget$definition: CKEDITOR$plugins$widget$definition;
    CKEDITOR$editor: CKEDITOR$editor;
    CKEDITOR$htmlParser$element: CKEDITOR$dom$element;
    focusedEditable: CKEDITOR$plugins$widget$nestedEditable;
    id: number;
    inited: boolean;
    ready: boolean;
    CKEDITOR$plugins$widget$repository: CKEDITOR$plugins$widget$repository;
    wrapper: CKEDITOR$dom$element;
    constructor(
      widgetsRepo: CKEDITOR$plugins$widget$repository,
      id: number,
      element: CKEDITOR$dom$element,
      widgetDef: CKEDITOR$plugins$widget$definition,
      starupData?: any
    ): this;
    addClass(className: string): void;
    applyStyle(style: tools$style): void;
    checkStyleActive(style: tools$style): boolean;
    destroy(offline?: boolean): void;
    destroyEditable(editableName: string, offline?: boolean): void;
    edit(): boolean;
    focus(): void;
    getClasses(): any;
    hasClass(className: string, Whether: boolean): void;
    initEditable(
      editableName: string,
      definition: CKEDITOR$plugins$widget$nestedEditable$definition
    ): boolean;
    isInited(): boolean;
    isReady(): boolean;
    removeClass(className: string): void;
    removeStyle(style: tools$style): void;
    setData(keyOrData: any, value: any): CKEDITOR$plugins$widget;
    setFocused(selected: boolean): CKEDITOR$plugins$widget;
    setSelected(selected: boolean): CKEDITOR$plugins$widget;
    updateDragHandlerPosition(): void;
  }

  declare function CKEDITOR$plugins$add(
    name: string,
    definition?: CKEDITOR$pluginDefinition
  ): void;

  declare function CKEDITOR$plugins$addExternal(
    name: string,
    path: string,
    fileName?: string
  ): void;

  declare function CKEDITOR$plugins$get(name: string): any;

  declare function CKEDITOR$plugins$getFilePath(name: string): string;

  declare function CKEDITOR$plugins$getPath(name: string): string;

  declare function CKEDITOR$plugins$load(
    name: string,
    callback: (plugins: string[]) => void,
    scope?: {
      [key: string]: any
    }
  ): void;

  declare function CKEDITOR$plugins$setLang(
    pluginName: string,
    languageCode: string,
    languageEntries: any
  ): void;

  declare var CKEDITOR$plugins$registered: {
    [key: string]: CKEDITOR$pluginDefinition
  };

  declare class CKEDITOR$resourceManager {
    CKEDITOR$basePath: string;
    externals: {
      [key: string]: any
    };
    fileName: string;
    loaded: {
      [key: string]: any
    };
    CKEDITOR$plugins$registered: {
      [key: string]: any
    };
    constructor(basePath: string, fileName: string): this;
    add(name: string, definition?: CKEDITOR$pluginDefinition): void;
    addExternal(names: string, path: string, fileName?: string): void;
    get(name: string): CKEDITOR$pluginDefinition;
    getFilePath(name: string): string;
    getPath(name: string): string;
    load(
      name: string | string[],
      callback: (loaded: string[]) => void,
      scope?: {
        [key: string]: any
      }
    ): void;
  }

  declare var npm$namespace$CKEDITOR$scriptLoader: {
    load: typeof CKEDITOR$scriptLoader$load,
    queue: typeof CKEDITOR$scriptLoader$queue
  };
  declare function CKEDITOR$scriptLoader$load(
    scriptUrls: string | string[],
    callback: (succeededUrls: boolean | string[], failedUrls: string[]) => void,
    scope?: any,
    showBusy?: boolean
  ): void;

  declare function CKEDITOR$scriptLoader$queue(
    scriptUrl: string,
    callback?: (succeeded: boolean) => void
  ): void;

  declare var npm$namespace$CKEDITOR$skin: {
    addIcon: typeof CKEDITOR$skin$addIcon,
    chameleon: typeof CKEDITOR$skin$chameleon,
    getIconStyle: typeof CKEDITOR$skin$getIconStyle,
    getPath: typeof CKEDITOR$skin$getPath,
    loadPart: typeof CKEDITOR$skin$loadPart,
    path: typeof CKEDITOR$skin$path,
    icons: typeof CKEDITOR$skin$icons,
    name: typeof CKEDITOR$skin$name,
    ua: typeof CKEDITOR$skin$ua,
    ua_dialog: typeof CKEDITOR$skin$ua_dialog,
    ua_editor: typeof CKEDITOR$skin$ua_editor
  };
  declare var CKEDITOR$skin$icons: {
    [name: string]: {
      path: string
    }
  };

  declare var CKEDITOR$skin$name: string;

  declare var CKEDITOR$skin$ua: {
    [name: string]: any
  };

  declare var CKEDITOR$skin$ua_dialog: string;

  declare var CKEDITOR$skin$ua_editor: string;

  declare function CKEDITOR$skin$addIcon(
    name: string,
    path: string,
    offset?: number,
    bgsize?: string
  ): void;

  declare function CKEDITOR$skin$chameleon(editor: string, part: string): void;

  declare function CKEDITOR$skin$getIconStyle(
    name: string,
    rtl?: boolean,
    overridePath?: number,
    overrideBgsize?: string
  ): any;

  declare function CKEDITOR$skin$getPath(part: string): any;

  declare function CKEDITOR$skin$loadPart(part: string, fn: () => void): void;

  declare function CKEDITOR$skin$path(): string;

  declare var npm$namespace$CKEDITOR$style: {
    addCustomHandler: typeof CKEDITOR$style$addCustomHandler,
    getStyleText: typeof CKEDITOR$style$getStyleText,

    customHandlers: typeof npm$namespace$CKEDITOR$style$customHandlers
  };
  declare function CKEDITOR$style$addCustomHandler(
    defintion: style$customHandler
  ): tools$style;

  declare function CKEDITOR$style$getStyleText(
    style: CKEDITOR$plugins$widget$definition
  ): string;

  declare var npm$namespace$CKEDITOR$style$customHandlers: {
    widget: typeof CKEDITOR$style$customHandlers$widget
  };
  declare class CKEDITOR$style$customHandlers$widget mixins CKEDITOR$style {
    group: any[];
    CKEDITOR$style$customHandlers$widget: string;
    checkElement(element: CKEDITOR$dom$element): boolean;
    getClassesArray(): string[];
    getDefintion(): CKEDITOR$plugins$widget$definition;
    removeStylesFromSameGroup(editor: CKEDITOR$editor): boolean;
  }

  declare interface CKEDITOR$style$definition {
    attributes?: {
      [att: string]: string
    };
    element: string;
    name?: string;
    styles?: {
      [att: string]: string
    };
    type?: string | number;
  }

  declare interface CKEDITOR$style$customHandler {
    type: string | number;
    setup?: (style: CKEDITOR$style$definition) => void;
    assignedTo?: number;
  }

  declare class CKEDITOR$style {
    alwaysRemoveElement: boolean;
    includeReadonly: boolean;
    constructor(
      styleDefinition: CKEDITOR$style$definition,
      variableValues: any
    ): this;
    apply(editor: CKEDITOR$editor): void;
    applyToObject(element: CKEDITOR$dom$element, editor: CKEDITOR$editor): void;
    applyToRange(range: CKEDITOR$dom$range, editor: CKEDITOR$editor): void;
    buildPreview(label?: string): string;
    checkActive(
      elementPath: CKEDITOR$dom$elementPath,
      editor: CKEDITOR$editor
    ): boolean;
    checkApplicable(
      elementPath: CKEDITOR$dom$elementPath,
      editor: CKEDITOR$editor,
      filter?: CKEDITOR$htmlParser$filter
    ): boolean;
    checkElementMatch(
      element: CKEDITOR$dom$element,
      fullMatch: boolean,
      editor: CKEDITOR$editor
    ): boolean;
    checkElementRemovable(
      element: CKEDITOR$dom$element,
      fullMatch: boolean,
      editor: CKEDITOR$editor
    ): boolean;
    getDefintion(): CKEDITOR$style$definition;
    remove(editor: CKEDITOR$editor): void;
    removeFromRange(range: CKEDITOR$dom$range, editor: CKEDITOR$editor): void;
    toAllowedContentRules(
      editor?: CKEDITOR$editor
    ): CKEDITOR$filter$allowedContentRules;
  }

  declare class CKEDITOR$styleCommand {
    constructor(style: CKEDITOR$style, ext?: any): this;
    exec(editor: CKEDITOR$editor): void;
  }

  declare var CKEDITOR$stylesSet: CKEDITOR$resourceManager;

  declare class CKEDITOR$template {
    source: string;
    constructor(source: string): this;
    output(data: any, buffer?: any[]): string | number;
  }

  declare var npm$namespace$CKEDITOR$tools: {
    addFunction: typeof CKEDITOR$tools$addFunction,
    arrayCompare: typeof CKEDITOR$tools$arrayCompare,
    clone: typeof CKEDITOR$tools$clone,
    copy: typeof CKEDITOR$tools$copy,
    createClass: typeof CKEDITOR$tools$createClass,
    cssStyleToDomStyle: typeof CKEDITOR$tools$cssStyleToDomStyle,
    cssVendorPrefix: typeof CKEDITOR$tools$cssVendorPrefix,
    defer: typeof CKEDITOR$tools$defer,
    enableHtml5Elements: typeof CKEDITOR$tools$enableHtml5Elements,
    escapeCss: typeof CKEDITOR$tools$escapeCss,
    eventsBuffer: typeof CKEDITOR$tools$eventsBuffer,
    extend: typeof CKEDITOR$tools$extend,
    fixDomain: typeof CKEDITOR$tools$fixDomain,
    genKey: typeof CKEDITOR$tools$genKey,
    getCookie: typeof CKEDITOR$tools$getCookie,
    getCsrfToken: typeof CKEDITOR$tools$getCsrfToken,
    getIndex: typeof CKEDITOR$tools$getIndex,
    getMouseButton: typeof CKEDITOR$tools$getMouseButton,
    getNextId: typeof CKEDITOR$tools$getNextId,
    getNextNumber: typeof CKEDITOR$tools$getNextNumber,
    getUniqueId: typeof CKEDITOR$tools$getUniqueId,
    htmlDecode: typeof CKEDITOR$tools$htmlDecode,
    htmlDecodeAttr: typeof CKEDITOR$tools$htmlDecodeAttr,
    htmlEncode: typeof CKEDITOR$tools$htmlEncode,
    htmlEncodeAttr: typeof CKEDITOR$tools$htmlEncodeAttr,
    indexOf: typeof CKEDITOR$tools$indexOf,
    isArray: typeof CKEDITOR$tools$isArray,
    isEmpty: typeof CKEDITOR$tools$isEmpty,
    keystrokeToArray: typeof CKEDITOR$tools$keystrokeToArray,
    keystrokeToString: typeof CKEDITOR$tools$keystrokeToString,
    ltrim: typeof CKEDITOR$tools$ltrim,
    normalizeCssText: typeof CKEDITOR$tools$normalizeCssText,
    normalizeHex: typeof CKEDITOR$tools$normalizeHex,
    objectCompare: typeof CKEDITOR$tools$objectCompare,
    objectKeys: typeof CKEDITOR$tools$objectKeys,
    override: typeof CKEDITOR$tools$override,
    parseCssText: typeof CKEDITOR$tools$parseCssText,
    prototypedCopy: typeof CKEDITOR$tools$prototypedCopy,
    removeFunction: typeof CKEDITOR$tools$removeFunction,
    repeat: typeof CKEDITOR$tools$repeat,
    rtrim: typeof CKEDITOR$tools$rtrim,
    search: typeof CKEDITOR$tools$search,
    setCookie: typeof CKEDITOR$tools$setCookie,
    setTimeout: typeof CKEDITOR$tools$setTimeout,
    transformPlainTextToHtml: typeof CKEDITOR$tools$transformPlainTextToHtml,
    trim: typeof CKEDITOR$tools$trim,
    tryThese: typeof CKEDITOR$tools$tryThese,
    writeCssText: typeof CKEDITOR$tools$writeCssText,

    array: typeof npm$namespace$CKEDITOR$tools$array,
    object: typeof npm$namespace$CKEDITOR$tools$object,
    style: typeof npm$namespace$CKEDITOR$tools$style
  };
  declare function CKEDITOR$tools$addFunction(
    fn: () => any,
    scope?: any
  ): number;

  declare function CKEDITOR$tools$arrayCompare(
    arrayA: any[],
    arrayB: any[]
  ): boolean;

  declare function CKEDITOR$tools$clone(source: {
    [key: string]: any
  }): {
    [key: string]: any
  };

  declare function CKEDITOR$tools$copy(source: {
    [key: string]: any
  }): {
    [key: string]: any
  };

  declare function CKEDITOR$tools$createClass(definition: {
    [key: string]: any
  }): any;

  declare function CKEDITOR$tools$cssStyleToDomStyle(cssName: string): string;

  declare function CKEDITOR$tools$cssVendorPrefix(
    property: string,
    value: string,
    asString?: boolean
  ): {
    [cssClass: string]: string | number
  };

  declare function CKEDITOR$tools$defer<T: Function>(fn: T): T;

  declare function CKEDITOR$tools$enableHtml5Elements(
    doc: Document | DocumentFragment,
    withAppend?: boolean
  ): void;

  declare function CKEDITOR$tools$escapeCss(selector: string): string;

  declare function CKEDITOR$tools$eventsBuffer(
    minInterval: number,
    output: () => void,
    scopeObj: any
  ): {
    input: () => void,
    reset: () => void
  };

  declare function CKEDITOR$tools$extend(
    target: {
      [key: string]: any
    },
    source: {
      [key: string]: any
    },
    overwrite: boolean,
    properties: {
      [key: string]: any
    }
  ): {
    [key: string]: any
  };

  declare function CKEDITOR$tools$fixDomain(): boolean;

  declare function CKEDITOR$tools$genKey(subKey: string): string;

  declare function CKEDITOR$tools$getCookie(name: string): string;

  declare function CKEDITOR$tools$getCsrfToken(): string;

  declare function CKEDITOR$tools$getIndex<T>(
    array: T[],
    compareFunction: (element: T) => boolean
  ): number;

  declare function CKEDITOR$tools$getMouseButton(
    evt: CKEDITOR$dom$event
  ): boolean;

  declare function CKEDITOR$tools$getNextId(): string;

  declare function CKEDITOR$tools$getNextNumber(): number;

  declare function CKEDITOR$tools$getUniqueId(): string;

  declare function CKEDITOR$tools$htmlDecode(text: string): string;

  declare function CKEDITOR$tools$htmlDecodeAttr(text: string): string;

  declare function CKEDITOR$tools$htmlEncode(text: string): string;

  declare function CKEDITOR$tools$htmlEncodeAttr(text: string): string;

  declare function CKEDITOR$tools$indexOf<T>(
    array: T[],
    value: T | ((el: T) => boolean)
  ): number;

  declare function CKEDITOR$tools$isArray<T>(object: any): boolean;

  declare function CKEDITOR$tools$isEmpty(object: {
    [key: string]: any
  }): boolean;

  declare function CKEDITOR$tools$keystrokeToArray(
    lang: {
      [key: string]: any
    },
    keystroke: number
  ): {
    display: string[],
    aria: string[]
  };

  declare function CKEDITOR$tools$keystrokeToString(
    lang: {
      [key: string]: any
    },
    keystroke: number
  ): {
    display: string,
    aria: string
  };

  declare function CKEDITOR$tools$ltrim(str: string): string;

  declare function CKEDITOR$tools$normalizeCssText(
    styleText: string,
    nativeNormalize: boolean
  ): string;

  declare function CKEDITOR$tools$normalizeHex(styleText: string): string;

  declare function CKEDITOR$tools$objectCompare(
    left: {
      [key: string]: any
    },
    right: {
      [key: string]: any
    },
    onlyLef?: boolean
  ): boolean;

  declare function CKEDITOR$tools$objectKeys(obj: {
    [key: string]: any
  }): string[];

  declare function CKEDITOR$tools$override<T: Function>(
    originalFunction: T,
    functionBuilder: (originalFunction: T) => T
  ): T;

  declare function CKEDITOR$tools$parseCssText(
    styleText: string,
    normalize?: boolean,
    nativeNormalize?: boolean
  ): {
    [key: string]: any
  };

  declare function CKEDITOR$tools$prototypedCopy(source: {
    [key: string]: any
  }): {
    [key: string]: any
  };

  declare function CKEDITOR$tools$removeFunction(ref: number): void;

  declare function CKEDITOR$tools$repeat(str: string, times: number): string;

  declare function CKEDITOR$tools$rtrim(str: string): string;

  declare function CKEDITOR$tools$search<T>(
    array: T[],
    value: T | ((element: T) => boolean)
  ): T;

  declare function CKEDITOR$tools$setCookie(name: string, value: string): void;

  declare function CKEDITOR$tools$setTimeout(
    func: Function,
    milliseconds?: number,
    scope?: {
      [key: string]: any
    },
    args?: any,
    ownerWindow?: Window
  ): number;

  declare function CKEDITOR$tools$transformPlainTextToHtml(
    text: string,
    etnerMode: number
  ): string;

  declare function CKEDITOR$tools$trim(str: string): string;

  declare function CKEDITOR$tools$tryThese(fn: Function[]): any;

  declare function CKEDITOR$tools$writeCssText(
    styles: {
      [key: string]: any
    },
    sort?: boolean
  ): string;

  declare var npm$namespace$CKEDITOR$tools$array: {
    every: typeof CKEDITOR$tools$array$every,
    filter: typeof CKEDITOR$tools$array$filter,
    forEach: typeof CKEDITOR$tools$array$forEach,
    isArray: typeof CKEDITOR$tools$array$isArray,
    map: typeof CKEDITOR$tools$array$map,
    reduce: typeof CKEDITOR$tools$array$reduce
  };
  declare function CKEDITOR$tools$array$every<T>(
    array: T[],
    fn: (value: T, index: number, array: T[]) => boolean,
    thisArg?: {
      [key: string]: any
    }
  ): boolean;

  declare function CKEDITOR$tools$array$filter<T>(
    array: T[],
    fn: (value: T, index: number, array: T[]) => boolean,
    thisArg?: {
      [key: string]: any
    }
  ): T[];

  declare function CKEDITOR$tools$array$forEach<T>(
    array: T[],
    fn: (value: T, index: number, array: T[]) => void,
    thisArg?: {
      [key: string]: any
    }
  ): void;

  declare function CKEDITOR$tools$array$isArray(object: any): boolean;

  declare function CKEDITOR$tools$array$map<T, K>(
    array: T[],
    fn: (value: T) => K,
    thisArg?: {
      [key: string]: any
    }
  ): K[];

  declare function CKEDITOR$tools$array$reduce<T, K>(
    array: T[],
    fn: (accumulator: K, a: T, index: number, array: T[]) => K,
    initial: K,
    thisArg?: {
      [key: string]: any
    }
  ): K;

  declare var npm$namespace$CKEDITOR$tools$object: {
    findKey: typeof CKEDITOR$tools$object$findKey,
    merge: typeof CKEDITOR$tools$object$merge
  };
  declare function CKEDITOR$tools$object$findKey(
    obj: {
      [key: string]: any
    },
    value: any
  ): string;

  declare function CKEDITOR$tools$object$merge(
    obj1: {
      [key: string]: any
    },
    obj2: {
      [key: string]: any
    }
  ): {
    [key: string]: any
  };

  declare var npm$namespace$CKEDITOR$tools$style: {
    parse: typeof npm$namespace$CKEDITOR$tools$style$parse
  };

  declare var npm$namespace$CKEDITOR$tools$style$parse: {
    background: typeof CKEDITOR$tools$style$parse$background,
    border: typeof CKEDITOR$tools$style$parse$border,
    margin: typeof CKEDITOR$tools$style$parse$margin
  };
  declare function CKEDITOR$tools$style$parse$background(
    value: string
  ): {
    color: string,
    unprocessed: string
  };

  declare function CKEDITOR$tools$style$parse$border(
    value: string
  ): {
    width: string,
    style: string,
    color: string
  };

  declare function CKEDITOR$tools$style$parse$margin(
    value: string
  ): {
    top: number,
    right: number,
    bottom: number,
    left: number
  };

  declare class CKEDITOR$ui mixins CKEDITOR$event {
    constructor(editor: CKEDITOR$editor): this;
    add(
      name: string,
      type: {
        [key: string]: any
      },
      definition: {
        [key: string]: any
      }
    ): void;
    addButton(name: string, definition: CKEDITOR$buttonDefinition): void;
    addHandler(
      type: {
        [key: string]: any
      },
      handler: {
        [key: string]: any
      }
    ): void;
    addRichCombo(
      name: string,
      definition: {
        [key: string]: any
      }
    ): void;
    addToolbarGroup(
      name: string,
      previous: number | string,
      subgroupOf?: string
    ): void;
    create(
      name: string
    ): {
      [key: string]: any
    };
    get(
      name: string
    ): {
      [key: string]: any
    };
    space(name: string): CKEDITOR$dom$element;
    spaceId(name: string): string;
  }

  declare var npm$namespace$CKEDITOR$ui: {
    balloonPanel: typeof CKEDITOR$ui$balloonPanel,
    balloonToolbar: typeof CKEDITOR$ui$balloonToolbar,
    button: typeof CKEDITOR$ui$button,
    floatPanel: typeof CKEDITOR$ui$floatPanel,
    handlerDefinition: typeof CKEDITOR$ui$handlerDefinition,
    menuButton: typeof CKEDITOR$ui$menuButton,
    panel: typeof CKEDITOR$ui$panel,
    panelButton: typeof CKEDITOR$ui$panelButton,
    richCombo: typeof CKEDITOR$ui$richCombo,
    dialog: typeof npm$namespace$CKEDITOR$ui$dialog,
    panel: typeof npm$namespace$CKEDITOR$ui$panel
  };

  declare var npm$namespace$CKEDITOR$ui$dialog: {
    button: typeof CKEDITOR$ui$dialog$button,
    checkbox: typeof CKEDITOR$ui$dialog$checkbox,
    fieldset: typeof CKEDITOR$ui$dialog$fieldset,
    file: typeof CKEDITOR$ui$dialog$file,
    fileButton: typeof CKEDITOR$ui$dialog$fileButton,
    hbox: typeof CKEDITOR$ui$dialog$hbox,
    html: typeof CKEDITOR$ui$dialog$html,
    iframeElement: typeof CKEDITOR$ui$dialog$iframeElement,
    labeledElement: typeof CKEDITOR$ui$dialog$labeledElement,
    radio: typeof CKEDITOR$ui$dialog$radio,
    select: typeof CKEDITOR$ui$dialog$select,
    textarea: typeof CKEDITOR$ui$dialog$textarea,
    textInput: typeof CKEDITOR$ui$dialog$textInput,
    uiElement: typeof CKEDITOR$ui$dialog$uiElement,
    vbox: typeof CKEDITOR$ui$dialog$vbox
  };
  declare class CKEDITOR$ui$dialog$button mixins CKEDITOR$ui$dialog$uiElement {
    constructor(
      dialog: CKEDITOR$dialog,
      elementDefinition: CKEDITOR$ui$dialog$definitions$button,
      htmlList: any[]
    ): this;
    accessKeyDown(): void;
    accessKeyUp(): void;
    click(): any;
  }

  declare class CKEDITOR$ui$dialog$checkbox
    mixins CKEDITOR$ui$dialog$uiElement {
    constructor(
      dialog: CKEDITOR$dialog,
      elementDefinition: CKEDITOR$ui$dialog$definitions$checkbox,
      htmlList: any[]
    ): this;
    accessKeyUp(): void;
    getValue(): boolean;
    setValue(checked: boolean, noChangeEvent: boolean): void;
  }

  declare interface CKEDITOR$ui$dialog$definitions$button {
    label: string;
    disabled?: boolean;
  }

  declare interface CKEDITOR$ui$dialog$definitions$checkbox {
    checked?: boolean;
    validate?: () => boolean;
    label?: string;
  }

  declare interface CKEDITOR$ui$dialog$definitions$fieldSet {
    label?: string;
    children: any[];
  }

  declare interface CKEDITOR$ui$dialog$definitions$file {
    validate?: () => boolean;
  }

  declare interface CKEDITOR$ui$dialog$definitions$fileButton {
    for: string;
    validate?: () => boolean;
  }

  declare interface CKEDITOR$ui$dialog$definitions$hbox {
    widths?: string[];
    height?: string;
    padding?: string;
    align?: string;
  }

  declare interface CKEDITOR$ui$dialog$definitions$html {
    html: string;
  }

  declare interface CKEDITOR$ui$dialog$definitions$iframeElement {
    src: string;
    width: string;
    height: string;
    onContentLoad?: () => void;
  }

  declare interface CKEDITOR$ui$dialog$definitions$labeledElement {
    label: string;
    labelLayout?: "horizontal" | "vertical";
    widths?: [string, string];
    role?: string;
    includeLabel?: boolean;
  }

  declare interface CKEDITOR$ui$dialog$definitions$radio {
    default: any;
    validate?: () => boolean;
    items: Array<[string, string] | [string]>;
  }

  declare interface CKEDITOR$ui$dialog$definitions$select {
    default: any;
    validate?: () => boolean;
    items: Array<[string, string] | [string]>;
    multiple?: boolean;
    size?: number;
  }

  declare interface CKEDITOR$ui$dialog$definitions$textarea {
    rows?: number;
    cols?: number;
    default?: string;
    validate?: () => boolean;
  }

  declare interface CKEDITOR$ui$dialog$definitions$textInput {
    default?: string;
    validate?: () => boolean;
    maxLength?: number;
    size?: string;
  }

  declare interface CKEDITOR$ui$dialog$definitions$uiElement {
    id: string;
    type: number;
    title?: string;
    hidden?: boolean;
    className?: string;
    style?: string;
    accessKey?: string;
  }

  declare interface CKEDITOR$ui$dialog$definitions$vbox {
    width?: string;
    heights?: string[];
    align?: string;
    padding?: string;
    expand?: boolean;
  }

  declare class CKEDITOR$ui$dialog$fieldset
    mixins CKEDITOR$ui$dialog$uiElement {
    constructor(
      dialog: CKEDITOR$dialog,
      childObjList: any[],
      childHtmlList: any[],
      htmlList: any[],
      elementDefinition: CKEDITOR$ui$dialog$definitions$fieldSet
    ): this;
  }

  declare class CKEDITOR$ui$dialog$file
    mixins CKEDITOR$ui$dialog$labeledElement {
    constructor(
      dialog: CKEDITOR$dialog,
      elementDefinition: CKEDITOR$ui$dialog$definitions$file,
      htmlList: any[]
    ): this;
    getAction(): string;
    registerEvents(definition: {
      [key: string]: any
    }): CKEDITOR$ui$dialog$file;
    reset(): void;
    setInitValue(): void;
    submit(): CKEDITOR$ui$dialog$file;
  }

  declare class CKEDITOR$ui$dialog$fileButton mixins CKEDITOR$ui$dialog$button {
    constructor(
      dialog: CKEDITOR$dialog,
      elementDefinition: CKEDITOR$ui$dialog$definitions$fileButton,
      htmlList: any[]
    ): this;
  }

  declare class CKEDITOR$ui$dialog$hbox mixins CKEDITOR$ui$dialog$uiElement {
    constructor(
      dialog: CKEDITOR$dialog,
      childObjList: any[],
      childHtmlList: any[],
      htmlList: any[],
      elementDefinition: CKEDITOR$ui$dialog$definitions$hbox
    ): this;
    getChild(indices: number): CKEDITOR$ui$dialog$uiElement;
    getChild(indices: number[]): CKEDITOR$ui$dialog$uiElement[];
  }

  declare class CKEDITOR$ui$dialog$html mixins CKEDITOR$ui$dialog$uiElement {
    constructor(
      dialog: CKEDITOR$dialog,
      elementDefinition: CKEDITOR$ui$dialog$definitions$html,
      htmlList: any[]
    ): this;
  }

  declare class CKEDITOR$ui$dialog$iframeElement
    mixins CKEDITOR$ui$dialog$uiElement {}

  declare class CKEDITOR$ui$dialog$labeledElement
    mixins CKEDITOR$ui$dialog$uiElement {
    constructor(
      dialog: CKEDITOR$dialog,
      elementDefinition: CKEDITOR$ui$dialog$definitions$labeledElement,
      htmlList: any[],
      contentHtml: () => string
    ): this;
    getLabel(): string;
    setlabel(label: string): CKEDITOR$ui$dialog$labeledElement;
  }

  declare class CKEDITOR$ui$dialog$radio
    mixins CKEDITOR$ui$dialog$labeledElement {
    constructor(
      dialog: CKEDITOR$dialog,
      elementDefinition: CKEDITOR$ui$dialog$definitions$radio,
      htmlList: any[]
    ): this;
    accessKeyUp(): void;
    getValue(): string;
    setValue(value: string, noChangeEvent: boolean): void;
  }

  declare class CKEDITOR$ui$dialog$select mixins CKEDITOR$ui$dialog$uiElement {
    constructor(
      dialog: CKEDITOR$dialog,
      elementDefinition: CKEDITOR$ui$dialog$definitions$select,
      htmlList: any[]
    ): this;
    add(
      label: string,
      value?: string,
      indexedDB?: number
    ): CKEDITOR$ui$dialog$select;
    clear(): CKEDITOR$ui$dialog$select;
    remove(index: number): CKEDITOR$ui$dialog$select;
  }

  declare class CKEDITOR$ui$dialog$textarea
    mixins CKEDITOR$ui$dialog$labeledElement {
    constructor(
      dialog: CKEDITOR$dialog,
      elementDefinition: CKEDITOR$ui$dialog$definitions$textarea,
      htmlList: any[]
    ): this;
  }

  declare class CKEDITOR$ui$dialog$textInput
    mixins CKEDITOR$ui$dialog$labeledElement {
    constructor(
      dialog: CKEDITOR$dialog,
      elementDefinition: CKEDITOR$ui$dialog$definitions$textInput,
      htmlList: any[]
    ): this;
    accessKeyUp(): void;
    focus(): void;
    getDirectionMarker(): string;
    getValue(): string;
    select(): void;
    setDirectionMarker(dir: string): void;
    setValue(
      value: string,
      noChangeEvent: boolean
    ): CKEDITOR$ui$dialog$textInput;
  }

  declare class CKEDITOR$ui$dialog$uiElement {
    eventProcessors: any;
    constructor(
      dialog: CKEDITOR$dialog,
      elementDefinition: CKEDITOR$ui$dialog$definitions$uiElement,
      htmlList: any[],
      nodeNameArg?: () => string | string,
      stylesArg?: () =>
        | {
            [key: string]: any
          }
        | {
            [key: string]: any
          },
      attributesArg?: () =>
        | {
            [key: string]: any
          }
        | {
            [key: string]: any
          },
      contentsArg?: () =>
        | {
            [key: string]: any
          }
        | string
    ): this;
    accessKeyDown(dialog: CKEDITOR$dialog, key: string): void;
    accessKeyUp(dialog: CKEDITOR$dialog, key: string): void;
    disable(): void;
    enable(): void;
    focus(): CKEDITOR$ui$dialog$uiElement | void;
    getDialog(): CKEDITOR$dialog;
    getElement(): CKEDITOR$dom$element;
    getInputElement(): CKEDITOR$dom$element;
    getValue(): any;
    isChanged(): boolean;
    isEnabled(): boolean;
    isFocusable(): boolean;
    isVisible(): boolean;
    registerEvents(
      definition: CKEDITOR$dialog$definition$uiElement
    ): CKEDITOR$ui$dialog$uiElement;
    selectParentTab(): CKEDITOR$ui$dialog$uiElement;
    setValue(
      value: any,
      noChangeEvent: boolean
    ): CKEDITOR$ui$dialog$uiElement | void;
  }

  declare class CKEDITOR$ui$dialog$vbox mixins CKEDITOR$ui$dialog$hbox {
    constructor(
      dialog: CKEDITOR$dialog,
      childObjList: any[],
      childHtmlList: any[],
      htmlList: any[],
      elementDefinition: CKEDITOR$ui$dialog$definitions$vbox
    ): this;
  }

  declare class CKEDITOR$ui$balloonPanel {
    activeShowListeners: {
      [id: number]: {
        removeListener: CKEDITOR$listenerRegistration
      }
    };
    CKEDITOR$editor: CKEDITOR$editor;
    focusables: {
      [id: number]: CKEDITOR$dom$element
    };
    height: string;
    balloonPanel$parts: CKEDITOR$ui$balloonPanel$parts;
    balloonPanel$rect: CKEDITOR$ui$balloonPanel$rect;
    showListeners: {
      [id: number]: () => CKEDITOR$listenerRegistration
    };
    balloonPanel$templateDefinitions: CKEDITOR$ui$balloonPanel$templateDefinitions;
    balloonPanel$templates: CKEDITOR$ui$balloonPanel$templates;
    triangleHeight: number;
    triangleMinDistance: number;
    triangleWidth: number;
    width: number;
    activeShowListener(id: number): void;
    activateShowListeners(): void;
    addShowListener(
      listener: () => CKEDITOR$listenerRegistration
    ): CKEDITOR$listenerRegistration;
    attach(
      element: CKEDITOR$dom$element,
      options?:
        | CKEDITOR$dom$element
        | boolean
        | {
            focusElement?: CKEDITOR$dom$element | boolean,
            show?: boolean
          }
    ): void;
    blur(): void;
    build(): void;
    deactivateShowListener(id: number): void;
    deregisterFocusable(element: CKEDITOR$dom$element): void;
    destroy(): void;
    getHeight(): number;
    getWidth(): number;
    hide(): void;
    move(top: number, left: number): void;
    registerFocusable(element: CKEDITOR$dom$element): void;
    removeShowListener(id: number): void;
    resize(width: number, height: number): void;
    setTitle(title: string): void;
    setTriangle(side: "left" | "right" | "top" | "bottom"): void;
    show(): void;
  }

  declare interface CKEDITOR$ui$balloonPanel$definition {
    content?: string;
    title?: string;
  }

  declare interface CKEDITOR$ui$balloonPanel$templates {
    close?: CKEDITOR$template;
    content?: CKEDITOR$template;
    panel?: CKEDITOR$template;
    title?: CKEDITOR$template;
    triangle?: CKEDITOR$template;
    triangleInner?: CKEDITOR$template;
    triangleOuter?: CKEDITOR$template;
  }

  declare interface CKEDITOR$ui$balloonPanel$templateDefinitions {
    close?: string;
    content?: string;
    panel?: string;
    title?: string;
    triangle?: string;
    triangleInner?: string;
    triangleOuter?: string;
  }

  declare interface CKEDITOR$ui$balloonPanel$rect {
    height?: number;
    left?: number;
    top?: number;
    visible?: boolean;
    width?: number;
  }

  declare interface CKEDITOR$ui$balloonPanel$parts {
    close?: CKEDITOR$dom$element;
    content?: CKEDITOR$dom$element;
    panel?: CKEDITOR$dom$element;
    title?: CKEDITOR$dom$element;
    triangle?: CKEDITOR$dom$element;
    triangleInner?: CKEDITOR$dom$element;
    triangleOuter?: CKEDITOR$dom$element;
  }

  declare class CKEDITOR$ui$balloonToolbar {
    constructor(
      editor: CKEDITOR$editor,
      definition: {
        [key: string]: any
      }
    ): this;
    addItem(
      name: string,
      element: CKEDITOR$ui$dialog$definitions$button | ui$richCombo
    ): void;
    addItems(elements: {
      [itemName: string]: CKEDITOR$ui$dialog$definitions$button | ui$richCombo
    }): void;
    deleteItem(name: string): void;
    destroy(): void;
    getItem(name: string): CKEDITOR$ui$dialog$definitions$button | ui$richCombo;
    hide(): void;
    refresh(): void;
    show(): void;
  }

  declare class CKEDITOR$ui$button {
    static handler: ui$handlerDefinition<CKEDITOR$ui$button>;
    constructor(definition: {
      [key: string]: any
    }): this;
    getState(): number;
    render(editor: CKEDITOR$editor, output: string[]): void;
    setState(state: number): void;
    toFeature(editor: CKEDITOR$editor): CKEDITOR$feature;
  }

  declare class CKEDITOR$ui$floatPanel {
    constructor(
      editor: CKEDITOR$editor,
      parentElement: CKEDITOR$dom$element,
      definition: {
        [key: string]: any
      },
      level: number
    ): this;
    addBlock(
      name: string,
      block: {
        [key: string]: any
      }
    ): void;
    addListBlock(name: string, multiSelect: boolean): void;
    allowBlur(allow: boolean): void;
    blur(): void;
    focus(): void;
    getBlock(name: string): CKEDITOR$ui$panel$block;
    hide(returnFocus: boolean): void;
    hideChild(restoreFocus: boolean): void;
    reposition(): void;
    showAsChild(
      panel: CKEDITOR$ui$floatPanel,
      blckName: string,
      offsetParent: CKEDITOR$dom$element,
      corner: number,
      offsetX?: number,
      offsetY?: number
    ): void;
    showBlock(
      name: string,
      offsetParent: CKEDITOR$dom$element,
      corner: number,
      offsetX?: number,
      offsetY?: number,
      callback?: () => void
    ): void;
  }

  declare class CKEDITOR$ui$handlerDefinition<T> {
    contentsElement: CKEDITOR$dom$element;
    create(definition: {
      [key: string]: any
    }): T;
  }

  declare class CKEDITOR$ui$menuButton mixins CKEDITOR$ui$button {}

  declare class CKEDITOR$ui$panel {
    constructor(
      document: CKEDITOR$dom$document,
      definition: {
        [key: string]: any
      }
    ): this;
    addBlock(
      name: string,
      block: {
        [key: string]: any
      }
    ): void;
    getBlock(name: string): CKEDITOR$ui$panel$block;
    render(editor: CKEDITOR$editor, output?: string[]): void;
    showBlock(name: string): void;
  }

  declare var npm$namespace$CKEDITOR$ui$panel: {
    handler: typeof CKEDITOR$ui$panel$handler,

    block: typeof CKEDITOR$ui$panel$block
  };
  declare class CKEDITOR$ui$panel$block {
    getItems(): CKEDITOR$dom$nodeList;
    markItem(index: number): void;
  }

  declare var CKEDITOR$ui$panel$handler: CKEDITOR$ui$handlerDefinition<CKEDITOR$ui$panel>;

  declare class CKEDITOR$ui$panelButton mixins CKEDITOR$ui$button {}

  declare class CKEDITOR$ui$richCombo {
    static CKEDITOR$ui$panel$handler: CKEDITOR$ui$handlerDefinition<CKEDITOR$ui$richCombo>;
    render(editor: CKEDITOR$editor, output: string[]): void;
  }

  declare class CKEDITOR$xml {
    baseXml: any;
    constructor(xmlObjectOrData: any): this;
    getInnerXml(xpath: string, contextNode?: any): string;
    selectNodes(xpath: string, contextNode?: any): any[];
    selectSingleNode(xpath: string, contextNode?: any): any;
  }

  declare interface CKEDITOR$toolbarGroups {
    name?: string;
    groups?: string[];
  }

  declare interface CKEDITOR$config$styleObject {
    name?: string;
    element: string;
    attributes?: {
      [key: string]: any
    };
    styles?: {
      [key: string]: any
    };
    overrides?: {
      [key: string]: any
    };
  }

  declare interface CKEDITOR$sharedSpace {
    top?: string | HTMLElement;
    bottom?: string | HTMLElement;
  }

  declare interface CKEDITOR$IMenuItemDefinition {
    label: string;
    command: string;
    icon: string;
    group: string;
    order: number;
  }

  declare interface CKEDITOR$buttonDefinition {
    icon?: string;
    iconOffset?: number;
    label: string;
    command: string;
    toolbar: string;
  }
}
