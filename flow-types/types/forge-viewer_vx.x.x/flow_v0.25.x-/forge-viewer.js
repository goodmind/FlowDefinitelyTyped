declare module "forge-viewer" {
  declare var npm$namespace$Autodesk: {
    Viewing: typeof npm$namespace$Autodesk$Viewing
  };

  declare var npm$namespace$Autodesk$Viewing: {
    Initializer: typeof Autodesk$Viewing$Initializer,
    AGGREGATE_SELECTION_CHANGED_EVENT: typeof Autodesk$Viewing$AGGREGATE_SELECTION_CHANGED_EVENT,
    ANIMATION_READY_EVENT: typeof Autodesk$Viewing$ANIMATION_READY_EVENT,
    CAMERA_CHANGE_EVENT: typeof Autodesk$Viewing$CAMERA_CHANGE_EVENT,
    CUTPLANES_CHANGE_EVENT: typeof Autodesk$Viewing$CUTPLANES_CHANGE_EVENT,
    ESCAPE_EVENT: typeof Autodesk$Viewing$ESCAPE_EVENT,
    EXPLODE_CHANGE_EVENT: typeof Autodesk$Viewing$EXPLODE_CHANGE_EVENT,
    EXTENSION_LOADED_EVENT: typeof Autodesk$Viewing$EXTENSION_LOADED_EVENT,
    EXTENSION_UNLOADED_EVENT: typeof Autodesk$Viewing$EXTENSION_UNLOADED_EVENT,
    FINAL_FRAME_RENDERED_CHANGED_EVENT: typeof Autodesk$Viewing$FINAL_FRAME_RENDERED_CHANGED_EVENT,
    FIT_TO_VIEW_EVENT: typeof Autodesk$Viewing$FIT_TO_VIEW_EVENT,
    FRAGMENTS_LOADED_EVENT: typeof Autodesk$Viewing$FRAGMENTS_LOADED_EVENT,
    FULLSCREEN_MODE_EVENT: typeof Autodesk$Viewing$FULLSCREEN_MODE_EVENT,
    GEOMETRY_LOADED_EVENT: typeof Autodesk$Viewing$GEOMETRY_LOADED_EVENT,
    HIDE_EVENT: typeof Autodesk$Viewing$HIDE_EVENT,
    HYPERLINK_EVENT: typeof Autodesk$Viewing$HYPERLINK_EVENT,
    ISOLATE_EVENT: typeof Autodesk$Viewing$ISOLATE_EVENT,
    LAYER_VISIBILITY_CHANGED_EVENT: typeof Autodesk$Viewing$LAYER_VISIBILITY_CHANGED_EVENT,
    LOAD_MISSING_GEOMETRY: typeof Autodesk$Viewing$LOAD_MISSING_GEOMETRY,
    MODEL_ROOT_LOADED_EVENT: typeof Autodesk$Viewing$MODEL_ROOT_LOADED_EVENT,
    MODEL_UNLOADED_EVENT: typeof Autodesk$Viewing$MODEL_UNLOADED_EVENT,
    NAVIGATION_MODE_CHANGED_EVENT: typeof Autodesk$Viewing$NAVIGATION_MODE_CHANGED_EVENT,
    OBJECT_TREE_CREATED_EVENT: typeof Autodesk$Viewing$OBJECT_TREE_CREATED_EVENT,
    OBJECT_TREE_UNAVAILABLE_EVENT: typeof Autodesk$Viewing$OBJECT_TREE_UNAVAILABLE_EVENT,
    PREF_CHANGED_EVENT: typeof Autodesk$Viewing$PREF_CHANGED_EVENT,
    PREF_RESET_EVENT: typeof Autodesk$Viewing$PREF_RESET_EVENT,
    PROGRESS_UPDATE_EVENT: typeof Autodesk$Viewing$PROGRESS_UPDATE_EVENT,
    RENDER_OPTION_CHANGED_EVENT: typeof Autodesk$Viewing$RENDER_OPTION_CHANGED_EVENT,
    RENDER_PRESENTED_EVENT: typeof Autodesk$Viewing$RENDER_PRESENTED_EVENT,
    RESET_EVENT: typeof Autodesk$Viewing$RESET_EVENT,
    RESTORE_DEFAULT_SETTINGS_EVENT: typeof Autodesk$Viewing$RESTORE_DEFAULT_SETTINGS_EVENT,
    SELECTION_CHANGED_EVENT: typeof Autodesk$Viewing$SELECTION_CHANGED_EVENT,
    SHOW_EVENT: typeof Autodesk$Viewing$SHOW_EVENT,
    TEXTURES_LOADED_EVENT: typeof Autodesk$Viewing$TEXTURES_LOADED_EVENT,
    TOOL_CHANGE_EVENT: typeof Autodesk$Viewing$TOOL_CHANGE_EVENT,
    TOOLBAR_CREATED_EVENT: typeof Autodesk$Viewing$TOOLBAR_CREATED_EVENT,
    VIEWER_INITIALIZED: typeof Autodesk$Viewing$VIEWER_INITIALIZED,
    VIEWER_RESIZE_EVENT: typeof Autodesk$Viewing$VIEWER_RESIZE_EVENT,
    VIEWER_STATE_RESTORED_EVENT: typeof Autodesk$Viewing$VIEWER_STATE_RESTORED_EVENT,
    VIEWER_UNINITIALIZED: typeof Autodesk$Viewing$VIEWER_UNINITIALIZED,
    theExtensionManager: typeof Autodesk$Viewing$theExtensionManager,
    ErrorCodes: typeof Autodesk$Viewing$ErrorCodes,
    SelectionMode: typeof Autodesk$Viewing$SelectionMode,
    ProgressState: typeof Autodesk$Viewing$ProgressState,
    KeyCode: typeof Autodesk$Viewing$KeyCode,
    FileLoader: typeof Autodesk$Viewing$FileLoader,
    BubbleNode: typeof Autodesk$Viewing$BubbleNode,
    Document: typeof Autodesk$Viewing$Document,
    Extension: typeof Autodesk$Viewing$Extension,
    ExtensionManager: typeof Autodesk$Viewing$ExtensionManager,
    InstanceTree: typeof Autodesk$Viewing$InstanceTree,
    InstanceTreeAccess: typeof Autodesk$Viewing$InstanceTreeAccess,
    Model: typeof Autodesk$Viewing$Model,
    Navigation: typeof Autodesk$Viewing$Navigation,
    ToolController: typeof Autodesk$Viewing$ToolController,
    UnifiedCamera: typeof Autodesk$Viewing$UnifiedCamera,
    ScreenMode: typeof Autodesk$Viewing$ScreenMode,
    ScreenModeDelegate: typeof Autodesk$Viewing$ScreenModeDelegate,
    AppScreenModeDelegate: typeof Autodesk$Viewing$AppScreenModeDelegate,
    NullScreenModeDelegate: typeof Autodesk$Viewing$NullScreenModeDelegate,
    Viewer3D: typeof Autodesk$Viewing$Viewer3D,
    ViewingApplication: typeof Autodesk$Viewing$ViewingApplication,
    ViewingUtilities: typeof Autodesk$Viewing$ViewingUtilities,
    Private: typeof npm$namespace$Autodesk$Viewing$Private,
    UI: typeof npm$namespace$Autodesk$Viewing$UI
  };

  declare var Autodesk$Viewing$ErrorCodes: {|
    +UNKNOWN_FAILURE: 1, // 1
    +BAD_DATA: 2, // 2
    +NETWORK_FAILURE: 3, // 3
    +NETWORK_ACCESS_DENIED: 4, // 4
    +NETWORK_FILE_NOT_FOUND: 5, // 5
    +NETWORK_SERVER_ERROR: 6, // 6
    +NETWORK_UNHANDLED_RESPONSE_CODE: 7, // 7
    +BROWSER_WEBGL_NOT_SUPPORTED: 8, // 8
    +BAD_DATA_NO_VIEWABLE_CONTENT: 9, // 9
    +BROWSER_WEBGL_DISABLED: 10, // 10
    +BAD_DATA_MODEL_IS_EMPTY: 11, // 11
    +RTC_ERROR: 12, // 12
    +UNSUPORTED_FILE_EXTENSION: 13, // 13
    +VIEWER_INTERNAL_ERROR: 14 // 14
  |};

  declare var Autodesk$Viewing$SelectionMode: {|
    +MIXED: 0, // 0
    +REGULAR: 1, // 1
    +OVERLAYED: 2, // 2
    +LEAF_OBJECT: 3, // 3
    +FIRST_OBJECT: 4, // 4
    +LAST_OBJECT: 5 // 5
  |};

  declare var Autodesk$Viewing$ProgressState: {|
    +ROOT_LOADED: 0, // 0
    +LOADING: 1, // 1
    +RENDERING: 2 // 2
  |};

  declare var Autodesk$Viewing$KeyCode: {|
    +BACKSPACE: 8, // 8
    +TAB: 9, // 9
    +ENTER: 13, // 13
    +SHIFT: 16, // 16
    +CONTROL: 17, // 17
    +ALT: 18, // 18
    +ESCAPE: 27, // 27
    +SPACE: 32, // 32
    +PAGEUP: 33, // 33
    +PAGEDOWN: 34, // 34
    +END: 35, // 35
    +HOME: 36, // 36
    +LEFT: 37, // 37
    +UP: 38, // 38
    +RIGHT: 39, // 39
    +DOWN: 40, // 40
    +INSERT: 45, // 45
    +DELETE: 46, // 46
    +ZERO: 48, // 48
    +SEMICOLONMOZ: 59, // 59
    +EQUALSMOZ: 61, // 61
    +a: 65, // 65
    +b: 66, // 66
    +c: 67, // 67
    +d: 68, // 68
    +e: 69, // 69
    +f: 70, // 70
    +g: 71, // 71
    +h: 72, // 72
    +i: 73, // 73
    +j: 74, // 74
    +k: 75, // 75
    +l: 76, // 76
    +m: 77, // 77
    +n: 78, // 78
    +o: 79, // 79
    +p: 80, // 80
    +q: 81, // 81
    +r: 82, // 82
    +s: 83, // 83
    +t: 84, // 84
    +u: 85, // 85
    +v: 86, // 86
    +w: 87, // 87
    +x: 88, // 88
    +y: 89, // 89
    +z: 90, // 90
    +LCOMMAND: 91, // 91
    +RCOMMAND: 93, // 93
    +PLUS: 107, // 107
    +PLUSMOZ: 171, // 171
    +DASHMOZ: 109, // 109
    +F1: 112, // 112
    +F2: 113, // 113
    +F3: 114, // 114
    +F4: 115, // 115
    +F5: 116, // 116
    +F6: 117, // 117
    +F7: 118, // 118
    +F8: 119, // 119
    +F9: 120, // 120
    +F10: 121, // 121
    +F11: 122, // 122
    +F12: 123, // 123
    +DASHMOZNEW: 173, // 173
    +SEMICOLON: 186, // 186
    +EQUALS: 187, // 187
    +COMMA: 188, // 188
    +DASH: 189, // 189
    +PERIOD: 190, // 190
    +SLASH: 191, // 191
    +LBRACKET: 219, // 219
    +RBRACKET: 221, // 221
    +SINGLEQUOTE: 222, // 222
    +COMMANDMOZ: 224 // 224
  |};

  declare interface Autodesk$Viewing$ViewerEvent {
    (event: any): void;
  }

  declare interface Autodesk$Viewing$Viewer3DConfig {
    startOnInitialize?: boolean;
    theme?: "dark-theme" | "light-theme" | string;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$ViewingApplicationOptions {
    disableBrowserContextMenu?: boolean;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$ViewerConfig {
    disableBrowserContextMenu?: boolean;
    extensions?: string[];
    useConsolidation?: boolean;
    consolidationMemoryLimit?: number;
    sharedPropertyDbPath?: string;
    bubbleNode?: Viewing$BubbleNode;
    canvasConfig?: any;
    startOnInitialize?: boolean;
    experimental?: any[];
    theme?: "dark-theme" | "light-theme" | string;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$ItemSelectedObserver {
    onItemSelected(viewer: Viewing$Viewer3D): void;
  }

  declare interface Autodesk$Viewing$SelectionVisibility {
    hasVisible: boolean;
    hasHidden: boolean;
  }

  declare interface Autodesk$Viewing$ThumbnailOptions {
    urn: string;
    width: number;
    height: number;
    guid: string;
    acmsession: string;
  }

  declare interface Autodesk$Viewing$FileLoaderOptions {
    ids?: string;
    sharedPropertyDbPath?: string;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$LoadModelOptions {
    fileLoader?: Viewing$FileLoader;
    loadOptions?: { [key: string]: any };
    sharedPropertyDbPath?: string;
    ids?: string;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$PropertyOptions {
    propFilter?: string[];
    ignoreHidden?: boolean;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$ResizePanelOptions {
    dockingPanels?: UI$DockingPanel[];
    viewer?: Viewing$Viewer3D;
    dimensions?: {
      width: number,
      height: number
    };
  }

  declare class Autodesk$Viewing$FileLoader {
    constructor(viewer: Viewing$Viewer3D): this;
    is3d(): boolean;
    loadFile(
      url: string,
      options: Autodesk$Viewing$FileLoaderOptions,
      onSuccess: () => void,
      onError: () => void
    ): void;
  }

  declare interface Autodesk$Viewing$ViewerItem {
    children?: Autodesk$Viewing$ViewerItem[];
    guid: string;
    hasThumbnail: boolean;
    name: string;
    parent: Autodesk$Viewing$ViewerItem;
    progress: string;
    role: "3d" | "2d" | string;
    size: number;
    status: string;
    success: string;
    type: "view" | "geometry" | string;
    viewableID: string;
  }

  declare interface Autodesk$Viewing$ExtensionOptions {
    defaultModelStructureTitle: string;
    extensions: string[];
    startOnInitialize: boolean;
    viewableName: string;
    [key: string]: any;
  }

  declare var Autodesk$Viewing$AGGREGATE_SELECTION_CHANGED_EVENT: any; // "aggregateSelection";

  declare var Autodesk$Viewing$ANIMATION_READY_EVENT: any; // "animationReady";

  declare var Autodesk$Viewing$CAMERA_CHANGE_EVENT: any; // "cameraChanged";

  declare var Autodesk$Viewing$CUTPLANES_CHANGE_EVENT: any; // "cutplanesChanged";

  declare var Autodesk$Viewing$ESCAPE_EVENT: any; // "escape";

  declare var Autodesk$Viewing$EXPLODE_CHANGE_EVENT: any; // "explodeChanged";

  declare var Autodesk$Viewing$EXTENSION_LOADED_EVENT: any; // "extensionLoaded";

  declare var Autodesk$Viewing$EXTENSION_UNLOADED_EVENT: any; // "extensionUnloaded";

  declare var Autodesk$Viewing$FINAL_FRAME_RENDERED_CHANGED_EVENT: any; // "finalFrameRenderedChanged";

  declare var Autodesk$Viewing$FIT_TO_VIEW_EVENT: any; // "fitToView";

  declare var Autodesk$Viewing$FRAGMENTS_LOADED_EVENT: any; // "fragmentsLoaded";

  declare var Autodesk$Viewing$FULLSCREEN_MODE_EVENT: any; // "fullscreenMode";

  declare var Autodesk$Viewing$GEOMETRY_LOADED_EVENT: any; // "geometryLoaded";

  declare var Autodesk$Viewing$HIDE_EVENT: any; // "hide";

  declare var Autodesk$Viewing$HYPERLINK_EVENT: any; // "hyperlink";

  declare var Autodesk$Viewing$ISOLATE_EVENT: any; // "isolate";

  declare var Autodesk$Viewing$LAYER_VISIBILITY_CHANGED_EVENT: any; // "layerVisibilityChanged";

  declare var Autodesk$Viewing$LOAD_MISSING_GEOMETRY: any; // "loadMissingGeometry";

  declare var Autodesk$Viewing$MODEL_ROOT_LOADED_EVENT: any; // "modelRootLoaded";

  declare var Autodesk$Viewing$MODEL_UNLOADED_EVENT: any; // "modelUnloaded";

  declare var Autodesk$Viewing$NAVIGATION_MODE_CHANGED_EVENT: any; // "navigationModeChanged";

  declare var Autodesk$Viewing$OBJECT_TREE_CREATED_EVENT: any; // "objectTreeCreated";

  declare var Autodesk$Viewing$OBJECT_TREE_UNAVAILABLE_EVENT: any; // "objectTreeUnavailable";

  declare var Autodesk$Viewing$PREF_CHANGED_EVENT: any; // "prefChanged";

  declare var Autodesk$Viewing$PREF_RESET_EVENT: any; // "prefReset";

  declare var Autodesk$Viewing$PROGRESS_UPDATE_EVENT: any; // "progressUpdate";

  declare var Autodesk$Viewing$RENDER_OPTION_CHANGED_EVENT: any; // "renderOptionChanged";

  declare var Autodesk$Viewing$RENDER_PRESENTED_EVENT: any; // "renderPresented";

  declare var Autodesk$Viewing$RESET_EVENT: any; // "reset";

  declare var Autodesk$Viewing$RESTORE_DEFAULT_SETTINGS_EVENT: any; // "restoreDefaultSettings";

  declare var Autodesk$Viewing$SELECTION_CHANGED_EVENT: any; // "selection";

  declare var Autodesk$Viewing$SHOW_EVENT: any; // "show";

  declare var Autodesk$Viewing$TEXTURES_LOADED_EVENT: any; // "texturesLoaded";

  declare var Autodesk$Viewing$TOOL_CHANGE_EVENT: any; // "toolChanged";

  declare var Autodesk$Viewing$TOOLBAR_CREATED_EVENT: any; // "toolbarCreated";

  declare var Autodesk$Viewing$VIEWER_INITIALIZED: any; // "viewerInitialized";

  declare var Autodesk$Viewing$VIEWER_RESIZE_EVENT: any; // "viewerResize";

  declare var Autodesk$Viewing$VIEWER_STATE_RESTORED_EVENT: any; // "viewerStateRestored";

  declare var Autodesk$Viewing$VIEWER_UNINITIALIZED: any; // "viewerUninitialized";

  declare interface Autodesk$Viewing$ViewerEventArgs {
    target?: Viewing$Viewer3D;
    model?: Autodesk$Viewing$ViewerItem;
    type: string;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$BubbleNodeSearchProps {
    role?: "3d" | "2d" | string;
    type?: "view" | "geometry" | string;
    mime?: string;
  }

  declare class Autodesk$Viewing$BubbleNode {
    static MODEL_NODE: Autodesk$Viewing$BubbleNodeSearchProps;
    static GEOMETRY_SVF_NODE: Autodesk$Viewing$BubbleNodeSearchProps;
    static SHEET_NODE: Autodesk$Viewing$BubbleNodeSearchProps;
    static GEOMETRY_F2D_NODE: Autodesk$Viewing$BubbleNodeSearchProps;
    static VIEWABLE_NODE: Autodesk$Viewing$BubbleNodeSearchProps;
    parent: Autodesk$Viewing$BubbleNode;
    id: number;
    data: Autodesk$Viewing$ViewerItem;
    isLeaf: boolean;
    sharedPropertyDbPath: string;
    lodNode: { [key: string]: any };
    children: Autodesk$Viewing$BubbleNode[];
    constructor(
      rawNode: { [key: string]: any },
      parent?: Autodesk$Viewing$BubbleNode
    ): this;
    findByGuid(guid: string): Autodesk$Viewing$BubbleNode;
    findParentGeom2Dor3D(): Autodesk$Viewing$BubbleNode;
    findPropertyDbPath(): string;
    findViewableParent(): Autodesk$Viewing$BubbleNode;
    getLodNode(): boolean;
    getNamedViews(): string[];
    getPlacementTransform(): { [key: string]: any };
    getRootNode(): Autodesk$Viewing$BubbleNode;
    getTag(tag: string): any;
    getViewableRootPath(): string;
    guid(): string;
    is2D(): boolean;
    is2DGeom(): boolean;
    is3D(): boolean;
    is3DGeom(): boolean;
    isGeometry(): boolean;
    isGeomLeaf(): boolean;
    isMetadata(): boolean;
    isViewable(): boolean;
    name(): string;
    search(
      propsToMatch: Autodesk$Viewing$BubbleNodeSearchProps
    ): Autodesk$Viewing$BubbleNode[];
    searchByTag(tagsToMatch: {
      [key: string]: any
    }): Autodesk$Viewing$BubbleNode[];
    setTag(tag: string, value: any): void;
    traverse(cb: () => void): boolean;
    urn(searchParent: boolean): string;
  }

  declare var Autodesk$Viewing$theExtensionManager: Viewing$ExtensionManager;

  declare interface Autodesk$Viewing$InitializerOptions {
    env?: string;
    webGLHelpLink?: string;
    getAccessToken?: (
      callback?: (accessToken: string, expires: number) => void
    ) => void;
    refreshToken?: (
      callback?: (accessToken: string, expires: number) => void
    ) => void;
    language?: string;
    accessToken?: string;
    useADP?: boolean;
    [key: string]: any;
  }

  declare function Autodesk$Viewing$Initializer(
    options: Autodesk$Viewing$InitializerOptions,
    callback?: () => void
  ): void;

  declare class Autodesk$Viewing$Document {
    constructor(
      dataJSON: { [key: string]: any },
      path: string,
      acmsession: string
    ): this;
    static load(
      documentId: string,
      successCallback: (doc: Autodesk$Viewing$Document) => void,
      errorCallback: (
        errorCode: Autodesk$Viewing$ErrorCodes,
        errorMsg: string,
        messages: any[]
      ) => void,
      accessControlProperties?: any
    ): void;
    static getSubItemsWithProperties(
      item: { [key: string]: any },
      properties: Viewing$Properties,
      recursive: boolean
    ): { [key: string]: any }[];
    acmSessionId: string;
    getFullPath(urn: string): string;
    getItemById(id: string): { [key: string]: any };
    getMessages(itemId: string, excludeGlobal: boolean): { [key: string]: any };
    getNumViews(item: { [key: string]: any }): number;
    getParentId(item: string): string;
    getPath(): string;
    getPropertyDbPath(): string;
    getRoot(): Autodesk$Viewing$BubbleNode;
    getRootItem(): { [key: string]: any };
    getSubItemsWithProperties(
      item: { [key: string]: any },
      properties: { [key: string]: any },
      recursive: boolean
    ): { [key: string]: any };
    getThumbnailOptions(
      item: { [key: string]: any },
      width: number,
      height: number
    ): Autodesk$Viewing$ThumbnailOptions;
    getThumbnailPath(item: string, width: number, height: number): string;
    getViewableItems(document: Autodesk$Viewing$Document): void;
    getViewablePath(
      item: { [key: string]: any },
      outLoadOptions?: { [key: string]: any }
    ): string;
    getViewGeometry(item: { [key: string]: any }): { [key: string]: any };
    load(
      documentId: string,
      onSuccessCallback: () => void,
      onErrorCallback: () => void,
      accessControlProperties?: { [key: string]: any }
    ): void;
    requestThumbnailWithSecurity(
      data: string,
      onComplete: (err: Error, response: any) => void
    ): void;
  }

  declare class Autodesk$Viewing$Extension {
    viewer: Private$GuiViewer3D;
    options: any;
    constructor(viewer: Private$GuiViewer3D, options: any): this;
    load(): boolean;
    unload(): boolean;
  }

  declare class Autodesk$Viewing$ExtensionManager {
    extensions: {
      [key: string]: Autodesk$Viewing$Extension
    };
    extensionsAsync: {
      [key: string]: Autodesk$Viewing$Extension
    };
    registerExtension(
      extensionId: string,
      extension: { [key: string]: any }
    ): boolean;
    getExtension(extensionId: string): Autodesk$Viewing$Extension | null;
    unregisterExtension(extensionId: string): boolean;
    registerExternalExtension(extensionId: string, urlPath: string): boolean;
    getExternalPath(extensionId: string): string | null;
    unregisterExternalExtension(extensionId: string): boolean;
    getRegisteredExtensions(): Array<{
      id: string,
      inMemory: boolean,
      isAsync: boolean
    }>;
    popuplateOptions(options: any): void;
  }

  declare class Autodesk$Viewing$InstanceTree {
    maxDepth: number;
    nodeAccess: Viewing$InstanceTreeAccess;
    numHidden: number;
    numOff: number;
    objectCount: number;
    enumNodeChildren(
      node: any,
      callback: (dbId: number) => void,
      recursive?: boolean
    ): void;
    enumNodeFragments(
      node: any,
      callback: (fragId: number) => void,
      recursive?: boolean
    ): void;
    getChildCount(dbId: number): number;
    getNodeBox(dbId: number, nodeBox: Float32Array): void;
    getNodeParentId(dbId: number): number;
    getRootId(): number;
    setFlagGlobal(flag: any, value: any): void;
    setFlagNode(dbId: number, flag: any, value: any): boolean;
  }

  declare class Autodesk$Viewing$InstanceTreeAccess {
    children: any;
    dbIdToIndex: any;
    nameSuffixes: any;
    names: any;
    nodeBoxes: any;
    nodes: any;
    numNodes: number;
    rootId: number;
    strings: string[];
    visibleIds: number;
  }

  declare interface Autodesk$Viewing$InstanceTreeNode {
    dbId: number;
    name: string;
    fragments: number[];
    children: Autodesk$Viewing$InstanceTreeNode[];
  }

  declare class Autodesk$Viewing$Model {
    getBoundingBox(): THREE.Box3;
    getBulkProperties(
      dbIds: number[],
      propFilter?: string[],
      successCallback?: (r: any) => void,
      errorCallback?: (err: any) => void
    ): void;
    getData(): any;
    getFragmentList(): any;
    getObjectTree(
      successCallback?: (result: Autodesk$Viewing$InstanceTree) => void,
      errorCallback?: (err: any) => void
    ): void;
    getProperties(
      dbId: number,
      successCallback?: (r: Viewing$PropertyResult) => void,
      errorCallback?: (err: any) => void
    ): void;
    getUnitScale(): number;
    getUnitString(): number;
    search(
      text: string,
      successCallback: (r: number[]) => void,
      errorCallback?: (err: any) => void,
      attributeNames?: string[]
    ): void;
    clearThemingColors(): void;
    getInstanceTree(): Autodesk$Viewing$InstanceTree;
    visibilityManager: Private$VisibilityManager;
  }

  declare interface Autodesk$Viewing$PropertyResult {
    dbId: number;
    externalId?: string;
    name?: string;
    properties: Viewing$Property[];
  }

  declare interface Autodesk$Viewing$Property {
    displayCategory: string;
    displayName: string;
    displayValue: string;
    hidden: boolean;
    type: number;
    units: string;
  }

  declare class Autodesk$Viewing$Navigation {
    getCamera(): any;
    getEyeVector(): THREE.Vector3;
    getFovMin(): number;
    getFovMax(): number;
    getPivotPoint(): THREE.Vector3;
    setPivotPoint(pivot: THREE.Vector3): void;
    getPosition(): THREE.Vector3;
    setPosition(pos: THREE.Vector3): void;
    getTarget(): THREE.Vector3;
    setTarget(target: THREE.Vector3): void;
    getScreenViewport(): ClientRect;
    setScreenViewport(viewport: ClientRect): void;
    setView(position: THREE.Vector3, target: THREE.Vector3): void;
    setCameraUpVector(up: THREE.Vector): void;
  }

  declare interface Autodesk$Viewing$Properties {
    type: string;
    role: string;
  }

  declare class Autodesk$Viewing$ToolController {
    activateTool(name: string): boolean;
    deactivateTool(name: string): boolean;
    registerTool(tool: any): boolean;
    deregisterTool(tool: any): boolean;
    getToolNames(): string[];
    getActiveToolName(): string;
  }

  declare interface Autodesk$Viewing$ToolInterface {
    getCursor?: () => string;
    getName(): string;
    getNames(): string[];
    register(): void;
    deregister(): void;
    activate(name: string, viewerApi?: Private$GuiViewer3D): void;
    deactivate(name: string): void;
    update(): boolean;
    handleSingleClick?: (event: MouseEvent, button: number) => boolean;
    handleDoubleClick?: (event: MouseEvent, button: number) => boolean;
    handleSingleTap?: (event: Event) => boolean;
    handleDoubleTap?: (event: Event) => boolean;
    handleKeyDown?: (event: KeyboardEvent, keyCode: number) => boolean;
    handleKeyUp?: (event: KeyboardEvent, keyCode: number) => boolean;
    handleWheelInput?: (delta: number) => boolean;
    handleButtonDown?: (event: MouseEvent, button: number) => boolean;
    handleButtonUp?: (event: MouseEvent, button: number) => boolean;
    handleMouseMove?: (event: MouseEvent) => boolean;
    handleGesture?: (event: Event) => boolean;
    handleBlur?: (event: Event) => boolean;
    handleResize?: () => void;
  }

  declare class Autodesk$Viewing$UnifiedCamera {}

  declare interface Autodesk$Viewing$ContextMenuCallbackStatus {
    hasHidden: boolean;
    hasSelected: boolean;
    hasVisible: boolean;
    numSelected: number;
  }

  declare interface Autodesk$Viewing$ContextMenuItem {
    target: () => void;
    title: string;
  }

  declare class Autodesk$Viewing$ScreenMode {}

  declare class Autodesk$Viewing$ScreenModeDelegate {
    constructor(viewer: Viewing$Viewer3D): this;
    doScreenModeChange(
      oldMode: Autodesk$Viewing$ScreenMode,
      newMode: Autodesk$Viewing$ScreenMode
    ): void;
    fullscreenEventListener(): void;
    getEscapeMode(): Autodesk$Viewing$ScreenMode | void;
    getMode(): Autodesk$Viewing$ScreenMode;
    getNextMode(): Autodesk$Viewing$ScreenMode | void;
    isModeSupported(mode: Autodesk$Viewing$ScreenMode): boolean;
    onScreenModeChanged(
      oldMode: Autodesk$Viewing$ScreenMode,
      newMode: Autodesk$Viewing$ScreenMode
    ): void;
    setMode(mode: Autodesk$Viewing$ScreenMode): boolean;
    uninitialize(): void;
  }

  declare class Autodesk$Viewing$AppScreenModeDelegate
    mixins ScreenModeDelegate {
    constructor(viewer: Viewing$Viewer3D): this;
  }

  declare class Autodesk$Viewing$NullScreenModeDelegate
    mixins ScreenModeDelegate {
    constructor(viewer: Viewing$Viewer3D): this;
  }

  declare class Autodesk$Viewing$Viewer3D {
    constructor(
      container: HTMLElement,
      config?: Autodesk$Viewing$Viewer3DConfig
    ): this;
    id: number;
    activateLayerState(stateName: string): void;
    activateExtension(extensionID: string, mode: string): boolean;
    anyLayerHidden(): boolean;
    applyCamera(camera: THREE.Camera, fit?: boolean): void;
    areAllVisible(): boolean;
    clearSelection(): void;
    clearThemingColors(model: any): void;
    clientToWorld(point: THREE.Vector3): THREE.Vector3;
    container: Element;
    createViewCube(): void;
    deactivateExtension(extensionID: string): boolean;
    displayViewCube(display: boolean): void;
    displayViewCubeUI(display: boolean): void;
    explode(scale: number): void;
    finish(): void;
    fitToView(objectIds?: number[], model?: Autodesk$Viewing$Model): boolean;
    getActiveNavigationTool(): string;
    getAggregateSelection(callback?: () => void): { [key: string]: any }[];
    getBimWalkToolPopup(): boolean;
    getCamera(): any;
    getClickConfig(what: string, where: string): string[] | null;
    getCutPlanes(): { [key: string]: any }[];
    getDefaultNavigationToolName(): { [key: string]: any };
    getDimensions(): { [key: string]: any };
    getExplodeScale(): number;
    getExtensionModes(extensionID: string): string[];
    getFirstPersonToolPopup(): boolean;
    getFocalLength(): number;
    getFOV(): number;
    getVisibleModels(): Autodesk$Viewing$Model[];
    getHiddenModels(): any[];
    getHiddenNodes(): any[];
    getHotkeyManager(): any;
    getIsolatedNodes(): number[];
    getLayerStates(): any[];
    getLoadedExtensions(): any[];
    getMemoryInfo(): any;
    getNavigationLock(): boolean;
    getNavigationLockSettings(): { [key: string]: any };
    getObjectTree(
      onSuccessCallback?: () => void,
      onErrorCallback?: () => void
    ): void;
    getProperties(
      dbid: number,
      onSuccessCallback?: () => void,
      onErrorCallback?: () => void
    ): void;
    getScreenShot(w?: number, h?: number, cb?: () => void): any;
    getSelection(): number[];
    getSelectionCount(): number;
    getSelectionVisibility(): {
      hasVisible: boolean,
      hasHidden: boolean
    };
    getState(filter?: any): any;
    hide(node: number | number[]): void;
    hideLines(hide: boolean): void;
    hideModel(modelId: number): boolean;
    hidePoints(hide: boolean): void;
    hideById(node: number): void;
    isolate(node: number | number[]): void;
    isolateById(dbIds: number | number[]): void;
    initialize(): number | Autodesk$Viewing$ErrorCodes;
    initSettings(): void;
    isExtensionActive(extensionID: string): boolean;
    isExtensionLoaded(extensionID: string): boolean;
    isLayerVisible(node: { [key: string]: any }): boolean;
    isNodeVisible(nodeId: number, model?: Autodesk$Viewing$Model): boolean;
    joinLiveReview(sessionId: string): void;
    leaveLiveReview(): void;
    load(
      urn: string,
      sharedPropertyDbPath?: string,
      onSuccesfullCallback?: () => void,
      onErrorCallback?: (
        errorCode: Autodesk$Viewing$ErrorCodes,
        errorMessage: string,
        statusCode: number,
        statusText: string
      ) => void
    ): any;
    loadModel(
      urn: string,
      options?: any,
      onSuccesfullCallback?: () => void,
      onErrorCallback?: (
        errorCode: Autodesk$Viewing$ErrorCodes,
        errorMessage: string,
        statusCode: number,
        statusText: string
      ) => void
    ): any;
    loadDocumentNode(
      lmvDocument: Autodesk$Viewing$Document,
      bubbleNode: Autodesk$Viewing$BubbleNode,
      options?: { [key: string]: any }
    ): void;
    localize(): void;
    modelHasTopology(): boolean;
    playAnimation(callback?: () => void): void;
    registerContextMenuCallback(
      id: string,
      callback: (
        menu: Autodesk$Viewing$ContextMenuItem[],
        status: Autodesk$Viewing$ContextMenuCallbackStatus
      ) => void
    ): void;
    resize(): void;
    restoreState(state: any, filter?: any, immediate?: boolean): boolean;
    search(
      text: string,
      successCallback: (r: number[]) => void,
      errorCallback: (err: any) => void,
      attributeNames?: string[]
    ): void;
    select(dbIds: number | number[]): void;
    setActiveNavigationTool(toolName?: string): boolean;
    setBackgroundColor(
      red: number,
      green: number,
      blue: number,
      red2: number,
      green2: number,
      blue2: number
    ): void;
    setBimWalkToolPopup(value: boolean): void;
    setCanvasClickBehavior(config: { [key: string]: any }): void;
    setClickConfig(
      what: string,
      where: string,
      newAction: string | string[]
    ): boolean;
    setClickToSetCOI(state: boolean, updatePrefs?: boolean): void;
    setContextMenu(contextMenu: any): void;
    setCutPlanes(planes: THREE.Vector4[]): void;
    setDefaultContextMenu(): boolean;
    setDefaultNavigationTool(toolName: string): void;
    setDisplayEdges(show: boolean): void;
    setEnvMapBackground(value: boolean): void;
    setFirstPersonToolPopup(value: boolean): void;
    setFocalLength(mm: number): void;
    setFOV(degrees: number): void;
    setGhosting(value: boolean): void;
    setGrayscale(value: boolean): void;
    setGroundReflection(value: boolean): void;
    setGroundReflectionAlpha(alpha: number): void;
    setGroundReflectionColor(color: THREE.Color): void;
    setGroundShadow(value: boolean): void;
    setGroundShadowAlpha(alpha: number): void;
    setGroundShadowColor(color: THREE.Color): void;
    setLayerVisible(nodes: any[], visible: boolean, isolate?: boolean): void;
    setLightPreset(index: number): void;
    setModelUnits(model: Autodesk$Viewing$Model): void;
    setNavigationLock(value: boolean): void;
    setNavigationLockSettings(settings: {
      [key: string]: boolean
    }): void;
    setOptimizeNavigation(value: boolean): void;
    setOrbitPastWorldPoles(value: boolean): void;
    setProgressiveRendering(value: boolean): void;
    setQualityLevel(useSAO: boolean, useFXAA: boolean): void;
    setRenderCache(value: boolean): void;
    setReverseHorizontalLookDirection(value: boolean): void;
    setReverseVerticalLookDirection(value: boolean): void;
    setReverseZoomDirection(value: boolean): void;
    setSelectionColor(
      color: THREE.Color,
      selectionType: Autodesk$Viewing$SelectionMode
    ): void;
    setSelectionMode(mode: Autodesk$Viewing$SelectionMode): void;
    setSwapBlackAndWhite(value: boolean): void;
    setTheme(name: "dark-theme" | "light-theme" | string): void;
    setThemingColor(dbId: number, color: THREE.Vector4, model?: any): void;
    setUp(config?: any): void;
    setUseLeftHandedInput(value: boolean): void;
    setUsePivotAlways(value: boolean): void;
    setViewCube(face: string): void;
    setViewFromArray(params: any[]): void;
    setViewFromFile(): void;
    setViewFromViewBox(viewbox: any[], name?: string): void;
    setZoomTowardsPivot(value: boolean): void;
    show(node: number | number[]): void;
    showAll(): void;
    showModel(modelId: number): boolean;
    start(
      url?: string,
      options?: Autodesk$Viewing$LoadModelOptions,
      onSuccessCallback?: () => void,
      onErrorCallback?: () => void
    ): number | Autodesk$Viewing$ErrorCodes;
    tearDown(): void;
    toggleSelect(
      dbid: number,
      selectionType: Autodesk$Viewing$SelectionMode
    ): void;
    toggleVisibility(node: number): void;
    toolbar: UI$ToolBar;
    trackADPSettingsOptions(): void;
    transferModel(): void;
    uninitialize(): void;
    unregisterContextMenuCallback(id: string): void;
    worldToClient(point: THREE.Vector3): THREE.Vector3;
    addEventListener(
      type: string,
      listener?: Autodesk$Viewing$ViewerEvent,
      options?: boolean | AddEventListenerOptions
    ): void;
    dispatchEvent(evt: Event): boolean;
    removeEventListener(
      type: string,
      listener?: Autodesk$Viewing$ViewerEvent,
      options?: boolean | EventListenerOptions
    ): void;
  }

  declare class Autodesk$Viewing$ViewingApplication {
    k3D: "3D";
    bubble: Autodesk$Viewing$BubbleNode;
    appContainerId: string;
    container: HTMLElement;
    options: Autodesk$Viewing$ViewingApplicationOptions;
    myRegisteredViewers: any;
    myDocument: Autodesk$Viewing$Document;
    myCurrentViewer: Autodesk$Viewing$Viewer3D;
    urn: string;
    selectedItem: Autodesk$Viewing$ViewerItem | null;
    extensionCache: { [key: string]: any };
    constructor(
      containerId: string,
      options?: Autodesk$Viewing$ViewingApplicationOptions
    ): this;
    addItemSelectedObserver(
      observer: Autodesk$Viewing$ItemSelectedObserver
    ): void;
    finish(): void;
    getCurrentViewer(): Autodesk$Viewing$Viewer3D;
    getDefaultGeometry(geometryItems: any[]): { [key: string]: any };
    getNamedViews(item: { [key: string]: any }): any[];
    getSelectedItem(): { [key: string]: any } | null;
    getViewer(
      config: Autodesk$Viewing$Viewer3DConfig
    ): Autodesk$Viewing$Viewer3D;
    getViewerContainer(): HTMLElement;
    loadDocument(
      documentId: any,
      onDocumentLoad?: (document: Autodesk$Viewing$Document) => void,
      onLoadFailed?: (
        errorCode: string,
        errorMsg: string,
        errors: any[]
      ) => void,
      accessControlProperties?: { [key: string]: any }
    ): void;
    registerViewer(
      viewableType: string,
      viewerClass: any,
      config?: Autodesk$Viewing$ViewerConfig
    ): void;
    selectItem(
      item: Autodesk$Viewing$ViewerItem | Autodesk$Viewing$BubbleNode,
      onSuccessCallback: (
        viewer: Autodesk$Viewing$Viewer3D,
        item: Autodesk$Viewing$ViewerItem
      ) => void,
      onErrorCallback: (
        errorCode: Autodesk$Viewing$ErrorCodes,
        errorMsg: string,
        statusCode: string,
        statusText: string,
        messages: string
      ) => void
    ): boolean;
    selectItemById(
      itemId: number,
      onItemSelectedCallback: (
        item: { [key: string]: any },
        viewGeometryItem: { [key: string]: any }
      ) => void,
      onItemFailedToSelectCallback: () => void
    ): boolean;
    setCurrentViewer(viewer: Autodesk$Viewing$Viewer3D): void;
    setDocument(docManifest: { [key: string]: any }): boolean;
  }

  declare class Autodesk$Viewing$ViewingUtilities {
    getHitPoint(x: number, y: number): THREE.Vector3;
  }

  declare var npm$namespace$Autodesk$Viewing$Private: {
    getHtmlTemplate: typeof Autodesk$Viewing$Private$getHtmlTemplate,
    formatValueWithUnits: typeof Autodesk$Viewing$Private$formatValueWithUnits,
    convertUnits: typeof Autodesk$Viewing$Private$convertUnits,
    calculatePrecision: typeof Autodesk$Viewing$Private$calculatePrecision,
    env: typeof Autodesk$Viewing$Private$env,

    Preferences: typeof Autodesk$Viewing$Private$Preferences,
    ViewerState: typeof Autodesk$Viewing$Private$ViewerState,
    GuiViewer3D: typeof Autodesk$Viewing$Private$GuiViewer3D,
    Viewer3DImpl: typeof Autodesk$Viewing$Private$Viewer3DImpl,
    VisibilityManager: typeof Autodesk$Viewing$Private$VisibilityManager,
    HudMessage: typeof npm$namespace$Autodesk$Viewing$Private$HudMessage
  };
  declare function Autodesk$Viewing$Private$getHtmlTemplate(
    url: string,
    callback: (error: string, content: string) => void
  ): void;

  declare var Autodesk$Viewing$Private$env: string;

  declare function Autodesk$Viewing$Private$formatValueWithUnits(
    value: number,
    units: string,
    type: number,
    precision: number
  ): string;

  declare function Autodesk$Viewing$Private$convertUnits(
    fromUnits: string,
    toUnits: string,
    calibrationFactor: number,
    d: number,
    type: string
  ): number;

  declare function Autodesk$Viewing$Private$calculatePrecision(
    value: string | number
  ): number;

  declare interface Autodesk$Viewing$Private$PreferencesOptions {
    localStorage?: boolean;
    prefix?: string;
  }

  declare class Autodesk$Viewing$Private$Preferences {
    constructor(
      viewer: Autodesk$Viewing$Viewer3D,
      options: Autodesk$Viewing$Private$PreferencesOptions
    ): this;
    add(name: string, defaultValue: any, tags?: string[] | string): boolean;
    addListeners(
      name: string,
      onChangedCallback: () => void,
      onResetCallback: () => void
    ): void;
    get(): any;
    hasTag(name: string, tag: string): boolean;
    load(defaultValues: { [key: string]: any }): void;
    remove(name: string, removeFromWebStorage?: boolean): boolean;
    removeListeners(name: string): void;
    reset(tag?: string, include?: boolean): void;
    set(name: string, value: any, notify?: boolean): boolean;
    tag(tag: string, names?: string[] | string): void;
    untag(tag: string, names?: string[] | string): void;
  }

  declare class Autodesk$Viewing$Private$ViewerState {
    constructor(viewer: Autodesk$Viewing$Viewer3D): this;
    areEqual(
      viewerStateA: { [key: string]: any },
      viewerStateB: { [key: string]: any },
      filter?: { [key: string]: any }
    ): boolean;
    getSeedUrn(): string;
    getState(filter?: { [key: string]: any }): { [key: string]: any };
    restoreState(
      viewerState: { [key: string]: any },
      filter?: { [key: string]: any },
      immediate?: boolean
    ): boolean;
  }

  declare class Autodesk$Viewing$Private$GuiViewer3D mixins Viewer3D {
    canvas: HTMLCanvasElement;
    toolController: Autodesk$Viewing$ToolController;
    impl: Private$Viewer3DImpl;
    model: Autodesk$Viewing$Model;
    navigation: Autodesk$Viewing$Navigation;
    addPanel(panel: UI$PropertyPanel): boolean;
    getToolbar(create: boolean): UI$ToolBar;
    removePanel(panel: UI$PropertyPanel): boolean;
    resizePanels(options?: Autodesk$Viewing$ResizePanelOptions): void;
    setLayersPanel(layersPanel: UI$LayersPanel): boolean;
    setModelStructurePanel(
      modelStructurePanel: UI$ModelStructurePanel
    ): boolean;
    setPropertyPanel(propertyPanel: UI$PropertyPanel): boolean;
    setSettingsPanel(settingsPanel: UI$SettingsPanel): boolean;
    updateToolbarButtons(): void;
  }

  declare interface Autodesk$Viewing$Private$HitTestResult {
    dbId: number;
    face: THREE.Face3;
    fragId: number;
    intersectPoint: THREE.Vector3;
    model: Autodesk$Viewing$Model;
  }

  declare var npm$namespace$Autodesk$Viewing$Private$HudMessage: {
    displayMessage: typeof Autodesk$Viewing$Private$HudMessage$displayMessage,
    dismiss: typeof Autodesk$Viewing$Private$HudMessage$dismiss
  };
  declare function Autodesk$Viewing$Private$HudMessage$displayMessage(
    container: Element,
    messageSpec: {
      msgTitleKey: string,
      msgTitleDefault?: string,
      messageKey: string,
      messageDefaultValue?: string,
      buttonText?: string,
      checkboxChecked?: boolean
    },
    closeCallback?: (event: any) => void,
    buttonCallback?: (event: any) => void,
    checkboxCallback?: (event: any) => void
  ): void;

  declare function Autodesk$Viewing$Private$HudMessage$dismiss(): boolean;

  declare class Autodesk$Viewing$Private$Viewer3DImpl {
    constructor(thecanvas: any, theapi: any): this;
    visibilityManager: Private$VisibilityManager;
    clientToViewport(clientX: number, clientY: number): THREE.Vector3;
    hitTest(
      clientX: number,
      clientY: number,
      ignoreTransparent: boolean
    ): Autodesk$Viewing$Private$HitTestResult;
    hitTestViewport(
      vpVec: THREE.Vector3,
      ignoreTransparent: boolean
    ): Autodesk$Viewing$Private$HitTestResult;
    initialize(): void;
    setLightPreset(index: number, force?: boolean): void;
    viewportToClient(viewportX: number, viewportY: number): THREE.Vector3;
    getMaterials(): any;
    getRenderProxy(model: Autodesk$Viewing$Model, fragId: number): any;
    sceneUpdated(param: boolean): void;
  }

  declare class Autodesk$Viewing$Private$VisibilityManager {
    constructor(viewerImpl: any, model: any): this;
    getHiddenNodes(): any;
    getInstanceTree(): Autodesk$Viewing$InstanceTree;
    getIsolatedNodes(): any;
    hide(node: number | { [key: string]: any }): void;
    isNodeVisible(dbId: number): boolean;
    isolate(node: number | { [key: string]: any }): void;
    isolateMultiple(nodeList: any[]): void;
    isolateNone(): void;
    setAllVisibility(visible: boolean): void;
    setVisibilityOnNode(
      node: number | { [key: string]: any },
      visible: boolean
    ): void;
    setNodeOff(node: number | { [key: string]: any }, isOff: boolean): void;
    show(node: number | { [key: string]: any }): void;
    toggleVisibility(node: number | { [key: string]: any }): void;
    updateNodeVisibilityTracking(
      node: number | { [key: string]: any },
      visible: boolean
    ): void;
  }

  declare var npm$namespace$Autodesk$Viewing$UI: {
    COLLAPSED_CHANGED: typeof Autodesk$Viewing$UI$COLLAPSED_CHANGED,
    VISIBILITY_CHANGED: typeof Autodesk$Viewing$UI$VISIBILITY_CHANGED,
    CONTROL_ADDED: typeof Autodesk$Viewing$UI$CONTROL_ADDED,
    CONTROL_REMOVED: typeof Autodesk$Viewing$UI$CONTROL_REMOVED,
    SIZE_CHANGED: typeof Autodesk$Viewing$UI$SIZE_CHANGED,
    ControlStates: typeof Autodesk$Viewing$UI$ControlStates,
    DockingPanel: typeof Autodesk$Viewing$UI$DockingPanel,
    LayersPanel: typeof Autodesk$Viewing$UI$LayersPanel,
    PropertyPanel: typeof Autodesk$Viewing$UI$PropertyPanel,
    SettingsPanel: typeof Autodesk$Viewing$UI$SettingsPanel,
    ModelStructurePanel: typeof Autodesk$Viewing$UI$ModelStructurePanel,
    ObjectContextMenu: typeof Autodesk$Viewing$UI$ObjectContextMenu,
    ControlEventArgs: typeof Autodesk$Viewing$UI$ControlEventArgs,
    Control: typeof Autodesk$Viewing$UI$Control,
    ControlGroup: typeof Autodesk$Viewing$UI$ControlGroup,
    ToolBar: typeof Autodesk$Viewing$UI$ToolBar,
    RadioButtonGroup: typeof Autodesk$Viewing$UI$RadioButtonGroup,
    Button: typeof Autodesk$Viewing$UI$Button,
    ComboButton: typeof Autodesk$Viewing$UI$ComboButton
  };
  declare interface Autodesk$Viewing$UI$DockingPanelOptions {
    localizeTitle?: boolean;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$UI$ScrollContainerOptions {
    left: boolean;
    heightAdjustment: number;
    marginTop: number;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$UI$ContentSize {
    height: number;
    width: number;
  }

  declare interface Autodesk$Viewing$UI$ResizeOptions {
    maxHeight: number;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$UI$AddPropertyOptions {
    localizeCategory: boolean;
    localizeProperty: boolean;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$UI$ControlOptions {
    collapsible?: boolean;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$UI$AddControlOptions {
    index?: { [key: string]: any };
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$UI$DisplayCategoryOptions {
    localize?: boolean;
    [key: string]: any;
  }

  declare interface Autodesk$Viewing$UI$MenuItem {
    title: string;
    target: () => void | Autodesk$Viewing$UI$MenuItem[];
  }

  declare var Autodesk$Viewing$UI$COLLAPSED_CHANGED: any; // "Control.VisibilityChanged";

  declare var Autodesk$Viewing$UI$VISIBILITY_CHANGED: any; // "Control.CollapsedChanged";

  declare var Autodesk$Viewing$UI$CONTROL_ADDED: any; // "ControlGroup.ControlAdded";

  declare var Autodesk$Viewing$UI$CONTROL_REMOVED: any; // "ControlGroup.ControlRemoved";

  declare var Autodesk$Viewing$UI$SIZE_CHANGED: any; // "ControlGroup.SizeChanged";

  declare class Autodesk$Viewing$UI$DockingPanel {
    constructor(
      parentContainer: HTMLElement,
      id: string,
      title: string,
      options?: Autodesk$Viewing$UI$DockingPanelOptions
    ): this;
    closer: HTMLElement;
    container: HTMLElement;
    content: Node;
    title: HTMLElement;
    titleLabel: string;
    addEventListener(
      target: { [key: string]: any },
      eventId: string,
      callback: () => void
    ): void;
    addVisibilityListener(callback: () => void): void;
    createCloseButton(): HTMLElement;
    createScrollContainer(
      options: Autodesk$Viewing$UI$ScrollContainerOptions
    ): void;
    createTitleBar(title: string): HTMLElement;
    getContainerBoundingRect(): ClientRect;
    getContentSize(): Autodesk$Viewing$UI$ContentSize;
    initialize(): void;
    initializeCloseHandler(closer: HTMLElement): void;
    initializeMoveHandlers(mover: HTMLElement): void;
    isVisible(): boolean;
    onEndMove(event: MouseEvent, endX: number, endY: number): void;
    onMove(event: MouseEvent, currentX: number, currentY: number): void;
    onStartMove(event: MouseEvent, startX: number, startY: number): void;
    onTitleClick(event: Event): void;
    onTitleDoubleClick(event: Event): void;
    removeEventListener(
      target: { [key: string]: any },
      eventId: string,
      callback: () => void
    ): boolean;
    resizeToContent(options: Autodesk$Viewing$UI$ResizeOptions): void;
    setTitle(
      text: string,
      options: Autodesk$Viewing$UI$DockingPanelOptions
    ): void;
    setVisible(show: boolean): void;
    uninitialize(): void;
    visibilityChanged(): void;
  }

  declare class Autodesk$Viewing$UI$LayersPanel mixins DockingPanel {
    build(): void;
    createNode(node: { [key: string]: any }, parent: HTMLElement): void;
    getNodeClass(node: { [key: string]: any }): string;
    getNodeLabel(node: { [key: string]: any }): string;
    isGroupCollapsed(node: { [key: string]: any }): boolean;
    isGroupNode(node: { [key: string]: any }): boolean;
    onClick(node: { [key: string]: any }, event: Event): void;
    onDoubleClick(node: { [key: string]: any }, event: Event): void;
    onIconClick(node: { [key: string]: any }, event: Event): void;
    onImageClick(node: { [key: string]: any }, event: Event): void;
    onRightClick(node: { [key: string]: any }, event: Event): void;
    setGroupCollapsed(node: { [key: string]: any }, collapse: boolean): void;
    setLayerVisible(node: { [key: string]: any }, collapse: boolean): void;
    shouldInclude(node: { [key: string]: any }): boolean;
    update(): void;
  }

  declare class Autodesk$Viewing$UI$PropertyPanel mixins DockingPanel {
    addProperty(
      name: string,
      value: string,
      category: string,
      options?: Autodesk$Viewing$UI$AddPropertyOptions
    ): boolean;
    areDefaultPropertiesShown(): void;
    displayCategory(
      category: { [key: string]: any },
      parent: HTMLElement,
      options: Autodesk$Viewing$UI$DisplayCategoryOptions
    ): HTMLElement[];
    displayProperty(
      property: { [key: string]: any },
      parent: HTMLElement,
      options: Autodesk$Viewing$UI$DisplayCategoryOptions
    ): HTMLElement[];
    getCategoryClass(category: { [key: string]: any }): string;
    getPropertyClass(property: { [key: string]: any }): string;
    hasProperties(): boolean;
    highlight(text: string, options: { [key: string]: any }): void;
    isCategoryCollapsed(category: { [key: string]: any }): boolean;
    onCategoryClick(category: { [key: string]: any }, event: Event): void;
    onCategoryDoubleClick(category: { [key: string]: any }, event: Event): void;
    onCategoryIconClick(category: { [key: string]: any }, event: Event): void;
    onCategoryRightClick(category: { [key: string]: any }, event: Event): void;
    onPropertyClick(property: { [key: string]: any }, event: Event): void;
    onPropertyDoubleClick(property: { [key: string]: any }, event: Event): void;
    onPropertyIconClick(property: { [key: string]: any }, event: Event): void;
    onPropertyRightClick(property: { [key: string]: any }, event: Event): void;
    removeAllProperties(): void;
    removeProperty(
      name: string,
      value: string,
      category: string,
      options?: { [key: string]: any }
    ): boolean;
    setCategoryCollapsed(
      category: { [key: string]: any },
      collapsed: boolean
    ): void;
    setProperties(
      properties: Array<{
        displayName: string,
        displayValue: any
      }>,
      options?: { [key: string]: any }
    ): void;
    showDefaultProperties(): void;
    showNoProperties(): void;
  }

  declare class Autodesk$Viewing$UI$SettingsPanel mixins DockingPanel {
    addCheckbox(
      tabId: string,
      caption: string,
      initialState: boolean,
      onchange: () => void,
      options?: { [key: string]: any }
    ): string;
    addControl(
      tabId: string,
      control: { [key: string]: any } | HTMLElement,
      options: { [key: string]: any } | void
    ): string;
    addDropDownMenu(
      tabId: string,
      caption: string,
      items: Autodesk$Viewing$UI$MenuItem[],
      initialItemIndex: number,
      onchange: () => void,
      options: { [key: string]: any } | void
    ): string;
    addSlider(
      tabId: string,
      caption: string,
      min: number,
      max: number,
      initialValue: number,
      onchange: () => void,
      options: { [key: string]: any } | void
    ): string;
    addTab(
      tabId: string,
      tabTitle: string,
      options: { [key: string]: any } | void
    ): boolean;
    getControl(controlId: string): { [key: string]: any };
    hasTab(tabId: string): boolean;
    isTabSelected(tabId: string): boolean;
    removeCheckbox(checkboxId: string | UI$Control): boolean;
    removeControl(controlId: string | UI$Control): boolean;
    removeDropdownMenu(dropdownMenuId: string | UI$Control): boolean;
    removeSlider(sliderId: string | UI$Control): boolean;
    removeTab(tabId: string): boolean;
    selectTab(tabId: string): boolean;
    setVisible(show: boolean, skipTransition?: boolean): void;
  }

  declare class Autodesk$Viewing$UI$ModelStructurePanel mixins DockingPanel {
    addClass(id: string, className: string): boolean;
    getNodeClass(node: { [key: string]: any }): string;
    getNodeLabel(node: { [key: string]: any }): string;
    isGroupCollapsed(node: { [key: string]: any }): boolean;
    isGroupNode(node: { [key: string]: any }): boolean;
    onClick(node: { [key: string]: any }, event: Event): void;
    onDoubleClick(node: { [key: string]: any }, event: Event): void;
    onHover(node: { [key: string]: any }, event: Event): void;
    onIconClick(node: { [key: string]: any }, event: Event): void;
    onRightClick(node: { [key: string]: any }, event: Event): void;
    removeClass(id: string, className: string): boolean;
    setGroupCollapsed(node: { [key: string]: any }, collapsed: boolean): void;
    setModel(instanceTree: { [key: string]: any }, modelTitle: string): void;
    setSelection(nodes: Autodesk$Viewing$Model[]): void;
    shouldInclude(node: Autodesk$Viewing$Model): boolean;
  }

  declare class Autodesk$Viewing$UI$ObjectContextMenu {
    constructor(viewer: Autodesk$Viewing$Viewer3D): this;
    buildMenu(
      event: Event,
      status: { [key: string]: any }
    ): Autodesk$Viewing$UI$MenuItem[];
    hide(): boolean;
    show(event: Event): void;
  }

  declare class Autodesk$Viewing$UI$ControlEventArgs {
    Autodesk$Viewing$UI$VISIBILITY_CHANGED: "Control.VisibilityChanged";
    Autodesk$Viewing$UI$COLLAPSED_CHANGED: "Control.CollapsedChanged";
    ACTIVE_BUTTON_CHANGED: "RadioButtonGroup.ActiveButtonChanged";
    STATE_CHANGED: "Button.StateChanged";
    CLICK: "click";
  }

  declare class Autodesk$Viewing$UI$Control {
    constructor(
      id?: string,
      options?: Autodesk$Viewing$UI$ControlOptions
    ): this;
    Event: Autodesk$Viewing$UI$ControlEventArgs;
    addClass(cssClass: string): void;
    getDimensions(): { [key: string]: any };
    getId(): string;
    getPosition(): { [key: string]: any };
    getToolTip(): string;
    isCollapsed(): boolean;
    isCollapsible(): boolean;
    isVisible(): boolean;
    removeClass(cssClass: string): void;
    setCollapsed(collapsed: boolean): boolean;
    setToolTip(toolTipText: string): boolean;
    setVisible(visible: boolean): boolean;
    addEventListener(
      type: string,
      listener?: Autodesk$Viewing$ViewerEvent,
      options?: boolean | AddEventListenerOptions
    ): void;
    dispatchEvent(evt: Event): boolean;
    removeEventListener(
      type: string,
      listener?: Autodesk$Viewing$ViewerEvent,
      options?: boolean | EventListenerOptions
    ): void;
  }

  declare class Autodesk$Viewing$UI$ControlGroup mixins Control {
    container: HTMLElement;
    addControl(
      control: Autodesk$Viewing$UI$Control,
      options?: Autodesk$Viewing$UI$AddControlOptions
    ): boolean;
    getControl(controlId: string): Autodesk$Viewing$UI$Control;
    getControlId(index: number): string;
    getNumberOfControls(): number;
    indexOf(control: string | Autodesk$Viewing$UI$Control): number;
    removeControl(control: string | Autodesk$Viewing$UI$Control): boolean;
    setCollapsed(collapsed: boolean): boolean;
  }

  declare class Autodesk$Viewing$UI$ToolBar mixins ControlGroup {
    constructor(id: string, options?: { [key: string]: any }): this;
  }

  declare class Autodesk$Viewing$UI$RadioButtonGroup mixins ControlGroup {
    constructor(id: string, options?: { [key: string]: any }): this;
    Event: Autodesk$Viewing$UI$ControlEventArgs;
    addControl(
      control: Autodesk$Viewing$UI$Control,
      options: { [key: string]: any }
    ): boolean;
    getActiveButton(): UI$Button;
    removeControl(control: string | Autodesk$Viewing$UI$Control): boolean;
  }

  declare var Autodesk$Viewing$UI$ControlStates: {|
    +ACTIVE: 0, // 0
    +INACTIVE: 1, // 1
    +DISABLED: 2 // 2
  |};

  declare class Autodesk$Viewing$UI$Button mixins Control {
    constructor(id: string, options?: { [key: string]: any }): this;
    State: Autodesk$Viewing$UI$ControlStates;
    Event: Autodesk$Viewing$UI$ControlEventArgs;
    getState(): Autodesk$Viewing$UI$ControlStates;
    onClick: (event: Event) => void;
    onMouseOut: (event: Event) => void;
    onMouseOver: (event: Event) => void;
    setIcon(iconClass: string): void;
    setState(state: Autodesk$Viewing$UI$ControlStates): boolean;
  }

  declare class Autodesk$Viewing$UI$ComboButton mixins Button {
    constructor(id: string, options?: { [key: string]: any }): this;
    addControl(): void;
    restoreDefault(): void;
    saveAsDefault(): void;
  }
}
