declare module "react-rte" {
  import type { Component, Node } from "react";

  import type { ContentBlock, EditorState } from "draft-js";

  import typeof * as draftjs from "draft-js";

  declare type CustomBlockFn = (
    element: Element
  ) => void | null | CustomBlockObject;
  declare type CustomInlineFn = (
    element: Element,
    inlineCreators: InlineCreators
  ) => void | null | Style | draftjs.EntityInstance;
  declare interface CustomBlockObject {
    type?: string;
    data?: { [key: string]: any };
  }
  declare interface InlineCreators {
    Style: (style: string) => Style;
    Entity: (
      type: string,
      data?: { [key: string]: any }
    ) => draftjs.EntityInstance;
  }
  declare interface Style {
    type: "STYLE";
    style: string;
  }
  declare interface ImportOptions {
    parser?: (html: string) => HTMLBodyElement;
    elementStyles?: {
      [styleName: string]: string
    };
    customBlockFn?: CustomBlockFn;
    customInlineFn?: CustomInlineFn;
  }
  declare function stateFromHTML(
    html: string,
    options?: ImportOptions
  ): draftjs.ContentState;

  declare type BlockStyleFn = (block: draftjs.ContentBlock) => RenderConfig;
  declare type EntityStyleFn = (entity: draftjs.EntityInstance) => RenderConfig;
  declare type BlockRenderer = (block: draftjs.ContentBlock) => string;
  declare interface RenderConfig {
    element?: string;
    attributes?: any;
    style?: any;
  }
  declare interface ExportOptions {
    inlineStyles?: {
      [styleName: string]: RenderConfig
    };
    blockRenderers?: {
      [blockType: string]: BlockRenderer
    };
    blockStyleFn?: BlockStyleFn;
    entityStyleFn?: EntityStyleFn;
  }
  declare function stateToHTML(
    content: draftjs.ContentState,
    options?: ExportOptions
  ): string;

  declare interface StringMap {
    [key: string]: string;
  }
  declare export class EditorValue {
    constructor(editorState: EditorState, cache: StringMap): this;
    getEditorState(): EditorState;
    setEditorState(editorState: EditorState): EditorValue;
    toString(format: string, options?: ExportOptions): string;
    setContentFromString(
      markup: string,
      format: string,
      options?: ImportOptions
    ): EditorValue;
    static createEmpty(decorator?: any): EditorValue;
    static createFromState(editorState: EditorState): EditorValue;
    static createFromString(
      markup: string,
      format: string,
      decorator?: any,
      options?: ImportOptions
    ): EditorValue;
  }
  declare interface StyleConfig {
    label: string;
    style: string;
    className?: string;
  }
  declare type StyleConfigList = StyleConfig[];
  declare type ChangeHandler = (value: EditorValue) => any;
  declare type GetControlState = (key: string) => string | void;
  declare type SetControlState = (key: string, value: string) => void;
  declare type CustControlFunc = (
    set: SetControlState,
    get: GetControlState,
    state: EditorState
  ) => Node;
  declare type CustomControl = Node | CustControlFunc;
  declare type GroupName =
    | "INLINE_STYLE_BUTTONS"
    | "BLOCK_TYPE_BUTTONS"
    | "LINK_BUTTONS"
    | "BLOCK_TYPE_DROPDOWN"
    | "HISTORY_BUTTONS"
    | "IMAGE_BUTTON";
  declare interface ToolbarConfig {
    display: GroupName[];
    extraProps?: { [key: string]: any };
    INLINE_STYLE_BUTTONS: StyleConfigList;
    BLOCK_TYPE_DROPDOWN: StyleConfigList;
    BLOCK_TYPE_BUTTONS: StyleConfigList;
  }
  declare interface Props {
    className?: string;
    toolbarClassName?: string;
    editorClassName?: string;
    value: EditorValue;
    onChange?: ChangeHandler;
    placeholder?: string;
    customStyleMap?: {
      [style: string]: {
        [key: string]: any
      }
    };
    handleReturn?: (event: { [key: string]: any }) => boolean;
    customControls?: CustomControl[];
    readOnly?: boolean;
    disabled?: boolean;
    toolbarConfig?: ToolbarConfig;
    blockStyleFn?: (block: ContentBlock) => string | void;
    autoFocus?: boolean;
    keyBindingFn?: (event: { [key: string]: any }) => string | void;
    rootStyle?: { [key: string]: any };
    editorStyle?: { [key: string]: any };
    toolbarStyle?: { [key: string]: any };
  }
  declare class RichTextEditor mixins Component<Props, any> {
    static createEmptyValue(): EditorValue;
    static createValueFromString(
      markup: string,
      format: string,
      options?: ImportOptions
    ): EditorValue;
  }
  declare export default typeof RichTextEditor;
}
