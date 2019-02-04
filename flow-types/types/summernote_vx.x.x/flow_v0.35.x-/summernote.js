declare module 'summernote' {
        declare module 'global' {
        declare interface Summernote$Options {
airMode?: boolean,
callbacks?: any,
codemirror?: Summernote$CodemirrorOptions,
colors?: Summernote$colorsDef,
dialogsInBody?: boolean,
dialogsFade?: boolean,
direction?: string,
disableDragAndDrop?: boolean,
focus?: boolean,
fontNames?: string[],
fontNamesIgnoreCheck?: string[],
height?: number,
hint?: Summernote$HintOptions,
icons?: Summernote$IconsOptions,
insertTableMaxSize?: Summernote$InsertTableMaxSizeOptions,
keyMap?: Summernote$KeyMapOptions,
lang?: string,
lineHeights?: string[],
minHeight?: number,
maxHeight?: number,
maximumImageFileSize?: any,
modules?: Summernote$ModuleOptions,
popover?: Summernote$PopoverOptions,
placeholder?: string,
shortcuts?: boolean,
styleTags?: Summernote$styleTagsOptions[],
styleWithSpan?: boolean,
tabsize?: number,
tableClassName?: string,
textareaAutoSync?: boolean,
toolbar?: Summernote$toolbarDef,
width?: number
} 

declare type Summernote$toolbarStyleGroupOptions = "style"
| "bold"
| "italic"
| "underline"
| "clear";

declare type Summernote$toolbarFontGroupOptions = "strikethrough" | "superscript" | "subscript";

declare type Summernote$toolbarFontsizeGroupOptions = "fontsize";

declare type Summernote$toolbarColorGroupOptions = "color";

declare type Summernote$toolbarParaGroupOptions = "ul" | "ol" | "paragraph";

declare type Summernote$toolbarHeightGroupOptions = "height";

declare type Summernote$toolbarTableGroupOptions = "table";

declare type Summernote$toolbarInsertGroupOptions = "link" | "picture" | "hr";

declare type Summernote$toolbarViewGroupOptions = "fullscreen" | "codeview";

declare type Summernote$toolbarHelpGroupOptions = "help";

declare type Summernote$toolbarDef = [["style", Summernote$toolbarStyleGroupOptions[]]
| ["font", Summernote$toolbarFontGroupOptions[]]
| ["fontsize", Summernote$toolbarFontsizeGroupOptions[]]
| ["color", Summernote$toolbarColorGroupOptions[]]
| ["para", Summernote$toolbarParaGroupOptions[]]
| ["height", Summernote$toolbarHeightGroupOptions[]]
| ["table", Summernote$toolbarTableGroupOptions[]]
| ["insert", Summernote$toolbarInsertGroupOptions[]]
| ["view", Summernote$toolbarViewGroupOptions[]]
| ["help", Summernote$toolbarHelpGroupOptions[]]];

declare type Summernote$colorsDef = Array<[string[]]>;

declare type Summernote$styleTagsOptions = "p"
| "blockquote"
| "pre"
| "h1"
| "h2"
| "h3"
| "h4"
| "h5"
| "h6";

declare interface Summernote$InsertTableMaxSizeOptions {
col: number,
row: number
} 

declare interface Summernote$IconsOptions {
options?: any
} 

declare interface Summernote$KeyMapOptions {
pc?: Summernote$KeyMapPcOptions,
mac?: Summernote$KeyMapMacOptions
} 

declare interface Summernote$KeyMapPcOptions {
options?: any
} 

declare interface Summernote$KeyMapMacOptions {
options?: any
} 

declare type Summernote$htmlElement = string;

declare interface Summernote$HintOptions {
words?: string[],
mentions?: string[],
match: RegExp,
search: (keyword: string, callback: (plausibleItems: string[]) => void) => void,
template?: (item: string) => Summernote$htmlElement,
content?: (item: string) => Summernote$htmlElement | JQuery.Node
} 

declare interface Summernote$CodemirrorOptions {
mode?: string,
htmlNode?: boolean,
lineNumbers?: boolean,
theme?: string
} 

declare type Summernote$popoverImageOptionsImagesize = "imageSize100" | "imageSize50" | "imageSize25";

declare type Summernote$popoverImageOptionsFloat = "floatLeft" | "floatRight" | "floatNone";

declare type Summernote$popoverImageOptionsRemove = "removeMedia";

declare type Summernote$popoverImageDef = [["imagesize", Summernote$popoverImageOptionsImagesize[]], ["float", Summernote$popoverImageOptionsFloat[]], ["remove", Summernote$popoverImageOptionsRemove[]]];

declare type Summernote$popoverLinkLinkOptions = "linkDialogShow" | "unlink";

declare type Summernote$popoverLinkDef = [["link", Summernote$popoverLinkLinkOptions[]]];

declare type Summernote$popoverAirOptionsColor = "color";

declare type Summernote$popoverAirOptionsFont = "bold" | "underline" | "clear";

declare type Summernote$popoverAirOptionsPara = "ul" | "paragraph";

declare type Summernote$popoverAirOptionsTable = "table";

declare type Summernote$popoverAirOptionsInsert = "link" | "picture";

declare type Summernote$popoverAirDef = [["color", Summernote$popoverAirOptionsColor], ["font", Summernote$popoverAirOptionsFont], ["para", Summernote$popoverAirOptionsPara], ["table", Summernote$popoverAirOptionsTable], ["insert", Summernote$popoverAirOptionsInsert]];

declare interface Summernote$PopoverOptions {
image?: Summernote$popoverImageDef,
link?: Summernote$popoverLinkDef,
air?: Summernote$popoverAirDef
} 

declare interface Summernote$ModuleOptions {
options?: any
} 

declare interface Summernote$CreateLinkOptions {
text: string,
url: string,
newWindow: boolean
} 

declare type Summernote$EditImageCallback = ($image: JQuery.Node) => void;
	declare interface JQuery {
summernote(): JQuery,
summernote(command: string): JQuery,
summernote(options?: Summernote$Summernote$Options): JQuery,
summernote(command: string, markupString: string): JQuery,
summernote(command: string, value: number): JQuery,
summernote(command: string, node: JQuery.Node): JQuery,
summernote(
command: string,
url: string,
filename?: (string | Summernote$Summernote$EditImageCallback)): JQuery,
summernote(command: "destroy"): JQuery,
summernote(command: "code", markupStr?: string): JQuery,
summernote(command: "editor.pasteHTML" | "pasteHTML", markup: string): JQuery,
summernote(command: "editor.createRange" | "createRange"): JQuery,
summernote(command: "editor.saveRange" | "saveRange"): JQuery,
summernote(command: "editor.restoreRange" | "restoreRange"): JQuery,
summernote(command: "editor.undo" | "undo"): JQuery,
summernote(command: "editor.redo" | "redo"): JQuery,
summernote(command: "editor.focus" | "focus"): JQuery,
summernote(command: "editor.isEmpty" | "isEmpty"): boolean,
summernote(command: "reset"): JQuery,
summernote(command: "disable"): JQuery,
summernote(command: "enable"): JQuery,
summernote(fontStyle: "editor.bold" | "bold"): JQuery,
summernote(fontStyle: "editor.italic" | "italic"): JQuery,
summernote(fontStyle: "editor.underline" | "underline"): JQuery,
summernote(fontStyle: "editor.strikethrough" | "strikethrough"): JQuery,
summernote(command: "editor.superscript" | "superscript"): JQuery,
summernote(command: "editor.subscript" | "subscript"): JQuery,
summernote(command: "editor.removeFormat" | "removeFormat"): JQuery,
summernote(command: "backColor", color: string): JQuery,
summernote(command: "foreColor", color: string): JQuery,
summernote(command: "fontName", fontName: string): JQuery,
summernote(command: "editor.fontSize" | "fontSize", fontSize: number): JQuery,
summernote(command: "editor.justifyLeft" | "justifyLeft"): JQuery,
summernote(command: "editor.justifyRight" | "justifyRight"): JQuery,
summernote(command: "editor.justifyCenter" | "justifyCenter"): JQuery,
summernote(command: "editor.justifyFull" | "justifyFull"): JQuery,
summernote(command: "insertParagraph"): JQuery,
summernote(command: "editor.insertOrderedList" | "insertOrderedList"): JQuery,
summernote(command: "editor.insertUnorderedList" | "insertUnorderedList"): JQuery,
summernote(command: "editor.indent" | "indent"): JQuery,
summernote(command: "editor.outdent" | "outdent"): JQuery,
summernote(command: "formatPara"): JQuery,
summernote(command: "formatH1"): JQuery,
summernote(command: "formatH2"): JQuery,
summernote(command: "formatH3"): JQuery,
summernote(command: "formatH4"): JQuery,
summernote(command: "formatH5"): JQuery,
summernote(command: "formatH6"): JQuery,
summernote(
command: "editor.insertImage" | "insertImage",
url: string,
filename?: (string | Summernote$Summernote$EditImageCallback)): JQuery,
summernote(command: "editor.insertNode" | "insertNode", node: JQuery.Node): JQuery,
summernote(command: "editor.insertText" | "insertText", text: string): JQuery,
summernote(
command: "createLink",
options: Summernote$Summernote$CreateLinkOptions): JQuery
} 
    }

	declare export {
          
        }

    }
