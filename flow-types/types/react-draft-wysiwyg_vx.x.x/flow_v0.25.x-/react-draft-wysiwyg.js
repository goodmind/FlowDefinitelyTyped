declare module "react-draft-wysiwyg" {
  import typeof * as React from "react";

  import typeof * as Draft from "draft-js";

  declare export type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;
  declare export type SyntheticEvent = React.SyntheticEvent<{}>;
  declare export type RawDraftContentState = Draft.RawDraftContentState;
  declare export class EditorState mixins Draft.EditorState {}
  declare export class ContentState mixins Draft.ContentState {}
  declare export class ContentBlock mixins Draft.ContentBlock {}
  declare export class SelectionState mixins Draft.SelectionState {}
  declare export interface EditorProps {
    onChange?: (contentState: ContentState) => RawDraftContentState;
    onEditorStateChange?: (editorState: EditorState) => void;
    onContentStateChange?: (contentState: ContentState) => RawDraftContentState;
    initialContentState?: RawDraftContentState;
    defaultContentState?: RawDraftContentState;
    contentState?: RawDraftContentState;
    editorState?: EditorState;
    defaultEditorState?: EditorState;
    toolbarOnFocus?: boolean;
    spellCheck?: boolean;
    stripPastedStyles?: boolean;
    toolbar?: { [key: string]: any };
    toolbarCustomButtons?: Array<React.ReactElement<HTMLElement>>;
    toolbarClassName?: string;
    toolbarHidden?: boolean;
    locale?: string;
    localization?: { [key: string]: any };
    editorClassName?: string;
    wrapperClassName?: string;
    toolbarStyle?: { [key: string]: any };
    editorStyle?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
    uploadCallback?: (file: { [key: string]: any }) => Promise<{
      [key: string]: any
    }>;
    onFocus?: (event: SyntheticEvent) => void;
    onBlur?: (event: SyntheticEvent) => void;
    onTab?: (event: SyntheticKeyboardEvent) => void;
    onEscape?: (e: SyntheticKeyboardEvent) => void;
    onUpArrow?: (e: SyntheticKeyboardEvent) => void;
    onDownArrow?: (e: SyntheticKeyboardEvent) => void;
    onRightArrow?: (e: SyntheticKeyboardEvent) => void;
    onLeftArrow?: (e: SyntheticKeyboardEvent) => void;
    mention?: { [key: string]: any };
    hashtag?: { [key: string]: any };
    textAlignment?: string;
    readOnly?: boolean;
    tabIndex?: number;
    placeholder?: string;
    ariaLabel?: string;
    ariaOwneeID?: string;
    ariaActiveDescendantID?: string;
    ariaAutoComplete?: string;
    ariaDescribedBy?: string;
    ariaExpanded?: string;
    ariaHasPopup?: string;
    customBlockRenderFunc?: (block: ContentBlock) => any;
    wrapperId?: number;
    customDecorators?: { [key: string]: any }[];
    editorRef?: (ref: { [key: string]: any }) => void;
    handlePastedText?: (
      text: string,
      html: string,
      editorState: EditorState,
      onChange: (editorState: EditorState) => void
    ) => boolean;
  }
  declare export class Editor mixins React.Component<EditorProps> {
    constructor(props: $ReadOnly<EditorProps>): this;
    focusEditor(): void;
  }
}
