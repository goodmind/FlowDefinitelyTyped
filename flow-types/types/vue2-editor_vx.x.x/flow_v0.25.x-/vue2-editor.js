declare module "vue2-editor" {
  import type { VueConstructor } from "vue";

  import type { DirectiveOptions } from "vue/types/options";

  declare export default typeof VueEditor;

  declare export var VueEditor: VueEditorConstructor;
  declare export interface VueEditorProps {
    id: string;
    placeholder: string;
    value: string;
    disabled: boolean;
    editorToolbar: any[];
    editorOptions: any;
    useCustomImageHandler: any;
    useMarkdownShortcuts: boolean;
  }
  declare export interface VueEditorData {
    quill: any;
  }
  declare export interface VueEditorWatch {
    value: (val: any) => void;
    disabled: (status: boolean) => void;
  }
  declare export interface VueEditorMethods {
    initializeEditor: () => void;
    setupQuillEditor: () => void;
    setModules: () => void;
    prepareEditorConfig: (editorConfig: any) => void;
    registerPrototypes: () => void;
    registerEditorEventListeners: () => void;
    listenForEditorEvent: (type: any) => void;
    handleInitialContent: () => void;
    handleSelectionChange: (range: any, oldRange: any) => void;
    handleTextChange: () => void;
    checkForCustomImageHandler: () => void;
    setupCustomImageHandler: () => void;
    customImageHandler: (image: any, callback: any) => void;
    emitImageInfo: ($event: Event) => void;
  }
  declare export type VueEditorConstructor = {
    props: VueEditorProps,
    data: () => VueEditorData,
    watch: VueEditorWatch,
    methods: VueEditorMethods
  } & VueConstructor;
}
