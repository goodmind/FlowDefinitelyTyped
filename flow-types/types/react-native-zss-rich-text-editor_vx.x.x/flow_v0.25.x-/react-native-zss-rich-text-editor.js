declare module "react-native-zss-rich-text-editor" {
  import type { Component, Node } from "react";

  import type {
    ImageStyle,
    StyleProp,
    TextStyle,
    ViewStyle,
    ImageProps,
    ImageSourcePropType
  } from "react-native";

  declare export type FunctionWithZeroArgs = () => void;
  declare export type LinkHandler = (url: string, title: string) => void;
  declare export type ImageHandler = (attributes: ImageProps) => void;
  declare export type ColorHandler = (color: string) => void;
  declare export type LinkDialogHandler = (
    optionalTitle: string,
    optionalUrl: string
  ) => void;
  declare export type PlaceHolderHandler = (placeholder: string) => void;
  declare export type ContentStylesHandler = (styles: RichTextStyles) => void;
  declare export type ContentSetHandler = (html: string) => void;
  declare export type ContentGetHandler = () => Promise<string>;
  declare export type FocusHandler = (callback: FunctionWithZeroArgs) => void;
  declare export type ElementStyles = StyleProp<
    ViewStyle | TextStyle | ImageStyle
  >;
  declare export interface ContentInset {
    top: number;
    left: number;
  }
  declare export interface RichTextStyles {
    [key: string]: ElementStyles;
  }
  declare export interface IconsMap {
    [key: string]: ImageSourcePropType;
  }

  declare export var ACTIONS: {|
    +enableOnChange: "ENABLE_ON_CHANGE", // "ENABLE_ON_CHANGE"
    +setTitleHtml: "SET_TITLE_HTML", // "SET_TITLE_HTML"
    +setContentHtml: "SET_CONTENT_HTML", // "SET_CONTENT_HTML"
    +getTitleHtml: "GET_TITLE_HTML", // "GET_TITLE_HTML"
    +getTitleText: "GET_TITLE_TEXT", // "GET_TITLE_TEXT"
    +toggleTitle: "TOGGLE_TITLE", // "TOGGLE_TITLE"
    +hideTitle: "HIDE_TITLE", // "HIDE_TITLE"
    +showTitle: "SHOW_TITLE", // "SHOW_TITLE"
    +getContentHtml: "GET_CONTENT_HTML", // "GET_CONTENT_HTML"
    +getSelectedText: "GET_SELECTED_TEXT", // "GET_SELECTED_TEXT"
    +blurTitleEditor: "BLUR_TITLE_EDITOR", // "BLUR_TITLE_EDITOR"
    +blurContentEditor: "BLUR_CONTENT_EDITOR", // "BLUR_CONTENT_EDITOR"
    +focusTitle: "FOCUS_TITLE", // "FOCUS_TITLE"
    +focusContent: "FOCUS_CONTENT", // "FOCUS_CONTENT"
    +setBold: "bold", // "bold"
    +setItalic: "italic", // "italic"
    +setUnderline: "underline", // "underline"
    +heading1: "h1", // "h1"
    +heading2: "h2", // "h2"
    +heading3: "h3", // "h3"
    +heading4: "h4", // "h4"
    +heading5: "h5", // "h5"
    +heading6: "h6", // "h6"
    +setParagraph: "SET_PARAGRAPH", // "SET_PARAGRAPH"
    +removeFormat: "REMOVE_FORMAT", // "REMOVE_FORMAT"
    +alignLeft: "justifyLeft", // "justifyLeft"
    +alignCenter: "justifyCenter", // "justifyCenter"
    +alignRight: "justifyRight", // "justifyRight"
    +alignFull: "justifyFull", // "justifyFull"
    +insertBulletsList: "unorderedList", // "unorderedList"
    +insertOrderedList: "orderedList", // "orderedList"
    +insertLink: "INST_LINK", // "INST_LINK"
    +updateLink: "UPDATE_LINK", // "UPDATE_LINK"
    +insertImage: "INST_IMAGE", // "INST_IMAGE"
    +setSubscript: "subscript", // "subscript"
    +setSuperscript: "superscript", // "superscript"
    +setStrikethrough: "strikeThrough", // "strikeThrough"
    +setHR: "horizontalRule", // "horizontalRule"
    +setIndent: "indent", // "indent"
    +setOutdent: "outdent", // "outdent"
    +setTitlePlaceholder: "SET_TITLE_PLACEHOLDER", // "SET_TITLE_PLACEHOLDER"
    +setContentPlaceholder: "SET_CONTENT_PLACEHOLDER", // "SET_CONTENT_PLACEHOLDER"
    +setTitleFocusHandler: "SET_TITLE_FOCUS_HANDLER", // "SET_TITLE_FOCUS_HANDLER"
    +setContentFocusHandler: "SET_CONTENT_FOCUS_HANDLER", // "SET_CONTENT_FOCUS_HANDLER"
    +prepareInsert: "PREPARE_INSERT", // "PREPARE_INSERT"
    +restoreSelection: "RESTORE_SELECTION", // "RESTORE_SELECTION"
    +setCustomCSS: "SET_CUSTOM_CSS", // "SET_CUSTOM_CSS"
    +setTextColor: "SET_TEXT_COLOR", // "SET_TEXT_COLOR"
    +setBackgroundColor: "SET_BACKGROUND_COLOR", // "SET_BACKGROUND_COLOR"
    +init: "ZSSS_INIT", // "ZSSS_INIT"
    +setEditorHeight: "SET_EDITOR_HEIGHT", // "SET_EDITOR_HEIGHT"
    +setFooterHeight: "SET_FOOTER_HEIGHT", // "SET_FOOTER_HEIGHT"
    +setPlatform: "SET_PLATFORM" // "SET_PLATFORM"
  |};

  declare export interface RichTextEditorProps {
    initialTitleHTML: string;
    initialContentHTML: string;
    titlePlaceholder: string;
    contentPlaceholder: string;
    customCSS: RichTextStyles;
    editorInitializedCallback: FunctionWithZeroArgs;
    hiddenTitle: boolean;
    enableOnChange: boolean;
    footerHeight: number;
    contentInset: ContentInset;
  }
  declare export interface RichTextToolbarOptionalProps {
    actions: $Values<typeof ACTIONS>[];
    onPressAddLink: FunctionWithZeroArgs;
    onPressAddImage: FunctionWithZeroArgs;
    selectedButtonStyle: ElementStyles;
    unselectedButtonStyle: ElementStyles;
    iconTint: string;
    selectedIconTint: string;
    renderAction: () => Node;
    iconMap: IconsMap;
  }
  declare export type RichTextToolbarProps = {
    getEditor: () => RichTextEditor
  } & $Shape<RichTextToolbarOptionalProps>;

  declare export class RichTextEditor
    mixins Component<$Shape<RichTextEditorProps>> {
    setBold: FunctionWithZeroArgs;
    setItalic: FunctionWithZeroArgs;
    setUnderline: FunctionWithZeroArgs;
    heading1: FunctionWithZeroArgs;
    heading2: FunctionWithZeroArgs;
    heading3: FunctionWithZeroArgs;
    heading4: FunctionWithZeroArgs;
    heading5: FunctionWithZeroArgs;
    heading6: FunctionWithZeroArgs;
    setParagraph: FunctionWithZeroArgs;
    removeFormat: FunctionWithZeroArgs;
    alignLeft: FunctionWithZeroArgs;
    alignCenter: FunctionWithZeroArgs;
    alignRight: FunctionWithZeroArgs;
    alignFull: FunctionWithZeroArgs;
    insertBulletsList: FunctionWithZeroArgs;
    insertOrderedList: FunctionWithZeroArgs;
    insertLink: LinkHandler;
    updateLink: LinkHandler;
    insertImage: ImageHandler;
    setSubscript: FunctionWithZeroArgs;
    setSuperscript: FunctionWithZeroArgs;
    setStrikethrough: FunctionWithZeroArgs;
    setHR: FunctionWithZeroArgs;
    setIndent: FunctionWithZeroArgs;
    setOutdent: FunctionWithZeroArgs;
    setBackgroundColor: ColorHandler;
    setTextColor: ColorHandler;
    showLinkDialog: LinkDialogHandler;
    setTitlePlaceholder: PlaceHolderHandler;
    setContentPlaceholder: PlaceHolderHandler;
    setCustomCSS: ContentStylesHandler;
    setTitleHTML: ContentSetHandler;
    setContentHTML: ContentSetHandler;
    prepareInsert: FunctionWithZeroArgs;
    restoreSelection: FunctionWithZeroArgs;
    getTitleHtml: ContentGetHandler;
    getTitleText: ContentGetHandler;
    getContentHtml: ContentGetHandler;
    getSelectedText: ContentGetHandler;
    focusTitle: FunctionWithZeroArgs;
    focusContent: FunctionWithZeroArgs;
    blurTitleEditor: FunctionWithZeroArgs;
    blurContentEditor: FunctionWithZeroArgs;
    setTitleFocusHandler: FocusHandler;
    setContentFocusHandler: FocusHandler;
    registerToolbar: (actions: $Values<typeof ACTIONS>[]) => void;
  }
  declare export class RichTextToolbar
    mixins Component<$Shape<RichTextToolbarProps>> {}
}
