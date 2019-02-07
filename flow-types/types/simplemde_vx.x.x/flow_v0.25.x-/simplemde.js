declare module "simplemde" {
  declare interface SimpleMDE$AutoSaveOptions {
    enabled?: boolean;
    delay?: number;
    uniqueId: string;
  }

  declare interface SimpleMDE$BlockStyleOptions {
    bold?: string;
    code?: string;
    italic?: string;
  }

  declare interface SimpleMDE$InsertTextOptions {
    horizontalRule?: string[];
    image?: string[];
    link?: string[];
    table?: string[];
  }

  declare interface SimpleMDE$ParsingOptions {
    allowAtxHeaderWithoutSpace?: boolean;
    strikethrough?: boolean;
    underscoresBreakWords?: boolean;
  }

  declare interface SimpleMDE$RenderingOptions {
    singleLineBreaks?: boolean;
    codeSyntaxHighlighting: boolean;
  }

  declare interface SimpleMDE$ShortcutsArray {
    [action: string]: string | void;
    toggleBlockquote?: string;
    toggleBold?: string;
    cleanBlock?: string;
    toggleHeadingSmaller?: string;
    toggleItalic?: string;
    drawLink?: string;
    toggleUnorderedList?: string;
    togglePreview?: string;
    toggleCodeBlock?: string;
    drawImage?: string;
    toggleOrderedList?: string;
    toggleHeadingBigger?: string;
    toggleSideBySide?: string;
    toggleFullScreen?: string;
  }

  declare interface SimpleMDE$StatusBarItem {
    className: string;
    defaultValue: (element: HTMLElement) => void;
    onUpdate: (element: HTMLElement) => void;
  }

  declare interface SimpleMDE$ToolbarIcon {
    name: string;
    action: string | ((editor: SimpleMDE) => void);
    className: string;
    title: string;
  }

  declare interface SimpleMDE$Options {
    autoDownloadFontAwesome?: boolean;
    autofocus?: boolean;
    autosave?: SimpleMDE$AutoSaveOptions;
    blockStyles?: SimpleMDE$BlockStyleOptions;
    element?: HTMLElement;
    forceSync?: boolean;
    hideIcons?: string[];
    indentWithTabs?: boolean;
    initialValue?: string;
    insertTexts?: SimpleMDE$InsertTextOptions;
    lineWrapping?: boolean;
    parsingConfig?: SimpleMDE$ParsingOptions;
    placeholder?: string;
    previewRender?: (
      markdownPlaintext: string,
      previewElement?: HTMLElement
    ) => string;
    promptURLs?: boolean;
    renderingConfig?: SimpleMDE$RenderingOptions;
    shortcuts?: SimpleMDE$ShortcutsArray;
    showIcons?: string[];
    spellChecker?: boolean;
    status?: boolean | Array<string | SimpleMDE$StatusBarItem>;
    styleSelectedText?: boolean;
    tabSize?: number;
    toolbar?: boolean | Array<string | SimpleMDE$ToolbarIcon>;
    toolbarTips?: boolean;
  }
  declare class SimpleMDE {
    constructor(): this;
    constructor(options: SimpleMDE$SimpleMDE$Options): this;
    value(): string;
    value(val: string): void;
    codemirror: any;
    toTextArea(): void;
    isPreviewActive(): boolean;
    isSideBySideActive(): boolean;
    isFullscreenActive(): boolean;
    clearAutosavedValue(): void;
    static toggleBold: (editor: SimpleMDE) => void;
    static toggleItalic: (editor: SimpleMDE) => void;
    static toggleStrikethrough: (editor: SimpleMDE) => void;
    static toggleHeadingSmaller: (editor: SimpleMDE) => void;
    static toggleHeadingBigger: (editor: SimpleMDE) => void;
    static toggleHeading1: (editor: SimpleMDE) => void;
    static toggleHeading2: (editor: SimpleMDE) => void;
    static toggleHeading3: (editor: SimpleMDE) => void;
    static toggleCodeBlock: (editor: SimpleMDE) => void;
    static toggleBlockquote: (editor: SimpleMDE) => void;
    static toggleUnorderedList: (editor: SimpleMDE) => void;
    static toggleOrderedList: (editor: SimpleMDE) => void;
    static cleanBlock: (editor: SimpleMDE) => void;
    static drawLink: (editor: SimpleMDE) => void;
    static drawImage: (editor: SimpleMDE) => void;
    static drawTable: (editor: SimpleMDE) => void;
    static drawHorizontalRule: (editor: SimpleMDE) => void;
    static togglePreview: (editor: SimpleMDE) => void;
    static toggleSideBySide: (editor: SimpleMDE) => void;
    static toggleFullScreen: (editor: SimpleMDE) => void;
    static undo: (editor: SimpleMDE) => void;
    static redo: (editor: SimpleMDE) => void;
  }
  declare module.exports: typeof SimpleMDE;
}
