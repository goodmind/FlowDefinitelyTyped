declare module "@ckeditor/ckeditor5-core" {
  import typeof * as engine from "ckeditor__ckeditor5-engine";

  import typeof * as ckutils from "ckeditor__ckeditor5-utils";

  declare export interface AlignmentConfig {}
  declare export interface AutosaveConfig {}
  declare export interface CKFinderAdapterConfig {}
  declare export interface CloudServicesConfig {}
  declare export interface FontFamilyConfig {}
  declare export interface FontSizeConfig {}
  declare export interface HeadingConfig {}
  declare export interface HighlightConfig {}
  declare export interface ImageConfig {}
  declare export interface MediaEmbedConfig {}
  declare export interface TypingConfig {}
  declare export interface ComponentFactory {}
  declare export interface EditorUIView {}

  declare var npm$namespace$editor: {
    Editor: typeof editor$Editor,
    EditorUI: typeof editor$EditorUI,
    utils: typeof npm$namespace$editor$utils
  };

  declare var npm$namespace$editor$utils: {
    attachToForm: typeof editor$utils$attachToForm,
    DataApiMixin: typeof editor$utils$DataApiMixin,
    ElementApiMixin: typeof editor$utils$ElementApiMixin
  };
  declare function editor$utils$attachToForm(
    editor: editor$Editor & utils$ElementApi
  ): void;

  declare var editor$utils$DataApiMixin: utils$DataApi;

  declare interface editor$utils$DataApi {
    getData(): string;
    setData(data: string): void;
  }

  declare var editor$utils$ElementApiMixin: utils$ElementApi;

  declare interface editor$utils$ElementApi {
    +sourceElement: HTMLElement;
    updateSourceElement(): void;
  }

  declare class editor$Editor mixins ckutils.Emitter, ckutils.Observable {
    commands: CommandCollection;
    config: ckutils.Config;
    conversion: engine.conversion.Conversion;
    data: engine.controller.DataController;
    editing: engine.controller.EditingController;
    isReadOnly: boolean;
    keystrokes: EditingKeystrokeHandler;
    locale: ckutils.Locale;
    model: engine.model.Model;
    plugins: PluginCollection<Plugin<any>>;
    state: "initializing" | "ready" | "destroyed";
    static builtinPlugins: Array<Plugin<any>>;
    static defaultConfig: { [key: string]: any };
    constructor(config?: { [key: string]: any }): this;
    destroy(): Promise<void>;
    execute(commandName: string, ...commandParams: any[]): void;
    initPlugins(): Promise<void>;
    t(str: string, values?: string[]): string;
    static create(config: { [key: string]: any }): Promise<any>;
    delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
    fire(
      eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>,
      ...args: any[]
    ): any;
    listenTo(
      emitter: ckutils.Emitter,
      event: string,
      callback: Function,
      options?: {
        priority?: ckutils.PriorityString | number
      }
    ): void;
    off(event: string, callback?: Function): void;
    on(
      event: string,
      callback: Function,
      options?: {
        priority: ckutils.PriorityString | number
      }
    ): void;
    once(
      event: string,
      callback: Function,
      options?: {
        priority: ckutils.PriorityString | number
      }
    ): void;
    stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
    stopListening(
      emitter?: ckutils.Emitter,
      event?: string,
      callback?: Function
    ): void;
    bind(...bindProperties: string[]): ckutils.BindChain;
    decorate(methodName: string): void;
    set(name: { [key: string]: any }): void;
    set(name: string, value: any): void;
    unbind(...unbindProperties: string[]): void;
  }

  declare interface editor$EditorConfig {
    alignment: AlignmentConfig;
    autosave: AutosaveConfig;
    balloonToolbar: string[];
    blockToolbar: string[];
    ckfinder: CKFinderAdapterConfig;
    cloudServices: CloudServicesConfig;
    fontFamily: FontFamilyConfig;
    fontSize: FontSizeConfig;
    heading: HeadingConfig;
    highlight: HighlightConfig;
    image: ImageConfig;
    language: string;
    mediaEmbed: MediaEmbedConfig;
    plugins: Array<string | Plugin<>>;
    removePlugins: string[];
    toolbar:
      | string[]
      | {
          items: string[],
          viewportTopOffset: number
        };
    typing: TypingConfig;
  }

  declare class editor$EditorUI mixins ckutils.Emitter {
    componentFactory: ComponentFactory;
    editor: editor$Editor;
    focusTracker: ckutils.FocusTracker;
    view: EditorUIView;
    constructor(editor: editor$Editor, view: EditorUIView): this;
    destroy(): void;
    update(): void;
    delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
    fire(
      eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>,
      ...args: any[]
    ): any;
    listenTo(
      emitter: ckutils.Emitter,
      event: string,
      callback: Function,
      options?: {
        priority?: ckutils.PriorityString | number
      }
    ): void;
    off(event: string, callback?: Function): void;
    on(
      event: string,
      callback: Function,
      options?: {
        priority: ckutils.PriorityString | number
      }
    ): void;
    once(
      event: string,
      callback: Function,
      options?: {
        priority: ckutils.PriorityString | number
      }
    ): void;
    stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
    stopListening(
      emitter?: ckutils.Emitter,
      event?: string,
      callback?: Function
    ): void;
  }

  declare interface editor$EditorWithUI {
    +element: HTMLElement | null;
    +ui: editor$EditorUI;
  }
  declare export class Command<T = void>
    mixins ckutils.Emitter, ckutils.Observable {
    editor: editor$Editor;
    isEnabled: boolean;
    value: T | void;
    constructor(editor: editor$Editor): this;
    destroy(): void;
    execute(): void;
    refresh(): void;
    delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
    fire(
      eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>,
      ...args: any[]
    ): any;
    listenTo(
      emitter: ckutils.Emitter,
      event: string,
      callback: Function,
      options?: {
        priority?: ckutils.PriorityString | number
      }
    ): void;
    off(event: string, callback?: Function): void;
    on(
      event: string,
      callback: Function,
      options?: {
        priority: ckutils.PriorityString | number
      }
    ): void;
    once(
      event: string,
      callback: Function,
      options?: {
        priority: ckutils.PriorityString | number
      }
    ): void;
    stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
    stopListening(
      emitter?: ckutils.Emitter,
      event?: string,
      callback?: Function
    ): void;
    bind(...bindProperties: string[]): ckutils.BindChain;
    decorate(methodName: string): void;
    set(name: { [key: string]: any }): void;
    set(name: string, value: any): void;
    unbind(...unbindProperties: string[]): void;
  }
  declare export class CommandCollection {
    constructor(): this;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): Iterator<
      [string, Command<>]
    >;
    add(commandName: string, command: Command<>): void;
    commands(): IterableIterator<Command<>>;
    destroy(): void;
    execute(commandName: string, ...commandParams: any[]): void;
    get(commandName: string): Command<>;
    names(): IterableIterator<string>;
  }
  declare export class EditingKeystrokeHandler mixins ckutils.KeystrokeHandler {
    editor: editor$Editor;
    constructor(editor: editor$Editor): this;
    set(
      keystroke: string | Array<string | number>,
      callback:
        | string
        | ((
            keyEvtData: engine.view.observer.KeyEventData,
            cancel: () => void
          ) => void),
      options?: {
        priority: ckutils.PriorityString | number
      }
    ): void;
  }
  declare export class PendingActions mixins Plugin {
    static pluginName: "PendingActions";
    first:
      | null
      | (ckutils.Observable & {
          message: string
        });
    hasAny: boolean;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): Iterator<
      ckutils.Observable & {
        message: string
      }
    >;
    add(
      message: string
    ): ckutils.Observable & {
      message: string
    };
    remove(
      action: ckutils.Observable & {
        message: string
      }
    ): void;
  }
  declare export class Plugin<T = void>
    mixins ckutils.Emitter, ckutils.Observable {
    editor: editor$Editor;
    static pluginName: string;
    static requires: Array<(editor: editor$Editor) => Plugin<>>;
    constructor(editor: editor$Editor): this;
    afterInit(): null | Promise<T>;
    destroy(): null | Promise<T>;
    init(): null | Promise<T>;
    delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
    fire(
      eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>,
      ...args: any[]
    ): any;
    listenTo(
      emitter: ckutils.Emitter,
      event: string,
      callback: Function,
      options?: {
        priority?: ckutils.PriorityString | number
      }
    ): void;
    off(event: string, callback?: Function): void;
    on(
      event: string,
      callback: Function,
      options?: {
        priority: ckutils.PriorityString | number
      }
    ): void;
    once(
      event: string,
      callback: Function,
      options?: {
        priority: ckutils.PriorityString | number
      }
    ): void;
    stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
    stopListening(
      emitter?: ckutils.Emitter,
      event?: string,
      callback?: Function
    ): void;
    bind(...bindProperties: string[]): ckutils.BindChain;
    decorate(methodName: string): void;
    set(name: { [key: string]: any }): void;
    set(name: string, value: any): void;
    unbind(...unbindProperties: string[]): void;
  }
  declare export class PluginCollection<P: Plugin<any>> {
    constructor(
      editor: editor$Editor,
      availablePlugins?: Array<(editor: editor$Editor) => P>
    ): this;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): Iterator<
      [(editor: editor$Editor) => P, P]
    >;
    destroy(): Promise<
      Array<
        P & {
          destroy(): void | null | Promise<any>
        }
      >
    >;
    get(key: string | ((editor: editor$Editor) => P)): P | void;
    load(
      plugins: Array<string | ((editor: editor$Editor) => P)>,
      removePlugins?: Array<string | ((editor: editor$Editor) => P)>
    ): Promise<P[]>;
  }
}
