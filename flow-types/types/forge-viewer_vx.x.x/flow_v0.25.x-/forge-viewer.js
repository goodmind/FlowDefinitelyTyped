declare var npm$namespace$UI: {
  COLLAPSED_CHANGED: typeof UI$COLLAPSED_CHANGED,
  VISIBILITY_CHANGED: typeof UI$VISIBILITY_CHANGED,
  CONTROL_ADDED: typeof UI$CONTROL_ADDED,
  CONTROL_REMOVED: typeof UI$CONTROL_REMOVED,
  SIZE_CHANGED: typeof UI$SIZE_CHANGED
};
declare interface UI$DockingPanelOptions {
  localizeTitle?: boolean;
  [key: string]: any;
}

declare interface UI$ScrollContainerOptions {
  left: boolean;
  heightAdjustment: number;
  marginTop: number;
  [key: string]: any;
}

declare interface UI$ContentSize {
  height: number;
  width: number;
}

declare interface UI$ResizeOptions {
  maxHeight: number;
  [key: string]: any;
}

declare interface UI$AddPropertyOptions {
  localizeCategory: boolean;
  localizeProperty: boolean;
  [key: string]: any;
}

declare interface UI$ControlOptions {
  collapsible?: boolean;
  [key: string]: any;
}

declare interface UI$AddControlOptions {
  index?: { [key: string]: any };
  [key: string]: any;
}

declare interface UI$DisplayCategoryOptions {
  localize?: boolean;
  [key: string]: any;
}

declare interface UI$MenuItem {
  title: string;
  target: () => void | UI$MenuItem[];
}

declare var UI$COLLAPSED_CHANGED: any; // "Control.VisibilityChanged";

declare var UI$VISIBILITY_CHANGED: any; // "Control.CollapsedChanged";

declare var UI$CONTROL_ADDED: any; // "ControlGroup.ControlAdded";

declare var UI$CONTROL_REMOVED: any; // "ControlGroup.ControlRemoved";

declare var UI$SIZE_CHANGED: any; // "ControlGroup.SizeChanged";

declare class UI$DockingPanel {
  constructor(
    parentContainer: HTMLElement,
    id: string,
    title: string,
    options?: UI$DockingPanelOptions
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
  createScrollContainer(options: UI$ScrollContainerOptions): void;
  createTitleBar(title: string): HTMLElement;
  getContainerBoundingRect(): ClientRect;
  getContentSize(): UI$ContentSize;
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
  resizeToContent(options: UI$ResizeOptions): void;
  setTitle(text: string, options: UI$DockingPanelOptions): void;
  setVisible(show: boolean): void;
  uninitialize(): void;
  visibilityChanged(): void;
}

declare class UI$LayersPanel mixins UI$DockingPanel {
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

declare class UI$PropertyPanel mixins UI$DockingPanel {
  addProperty(
    name: string,
    value: string,
    category: string,
    options?: UI$AddPropertyOptions
  ): boolean;
  areDefaultPropertiesShown(): void;
  displayCategory(
    category: { [key: string]: any },
    parent: HTMLElement,
    options: UI$DisplayCategoryOptions
  ): HTMLElement[];
  displayProperty(
    property: { [key: string]: any },
    parent: HTMLElement,
    options: UI$DisplayCategoryOptions
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

declare class UI$SettingsPanel mixins UI$DockingPanel {
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
    items: UI$MenuItem[],
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

declare class UI$ModelStructurePanel mixins UI$DockingPanel {
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
  setSelection(nodes: Viewing$Model[]): void;
  shouldInclude(node: Viewing$Model): boolean;
}

declare class UI$ObjectContextMenu {
  constructor(viewer: Viewing$Viewer3D): this;
  buildMenu(event: Event, status: { [key: string]: any }): UI$MenuItem[];
  hide(): boolean;
  show(event: Event): void;
}

declare class UI$ControlEventArgs {
  UI$VISIBILITY_CHANGED: "Control.VisibilityChanged";
  UI$COLLAPSED_CHANGED: "Control.CollapsedChanged";
  ACTIVE_BUTTON_CHANGED: "RadioButtonGroup.ActiveButtonChanged";
  STATE_CHANGED: "Button.StateChanged";
  CLICK: "click";
}

declare class UI$Control {
  constructor(id?: string, options?: UI$ControlOptions): this;
  Event: UI$ControlEventArgs;
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
    listener?: Viewing$ViewerEvent,
    options?: boolean | AddEventListenerOptions
  ): void;
  dispatchEvent(evt: Event): boolean;
  removeEventListener(
    type: string,
    listener?: Viewing$ViewerEvent,
    options?: boolean | EventListenerOptions
  ): void;
}

declare class UI$ControlGroup mixins UI$Control {
  container: HTMLElement;
  addControl(control: UI$Control, options?: UI$AddControlOptions): boolean;
  getControl(controlId: string): UI$Control;
  getControlId(index: number): string;
  getNumberOfControls(): number;
  indexOf(control: string | UI$Control): number;
  removeControl(control: string | UI$Control): boolean;
  setCollapsed(collapsed: boolean): boolean;
}

declare class UI$ToolBar mixins UI$ControlGroup {
  constructor(id: string, options?: { [key: string]: any }): this;
}

declare class UI$RadioButtonGroup mixins UI$ControlGroup {
  constructor(id: string, options?: { [key: string]: any }): this;
  Event: UI$ControlEventArgs;
  addControl(control: UI$Control, options: { [key: string]: any }): boolean;
  getActiveButton(): UI$Button;
  removeControl(control: string | UI$Control): boolean;
}

declare class UI$ControlStates {
  constructor(...args: empty): mixed;
  static +ACTIVE: Class<UI$ControlStates__ACTIVE> &
    UI$ControlStates__ACTIVE &
    0; // 0
  static +INACTIVE: Class<UI$ControlStates__INACTIVE> &
    UI$ControlStates__INACTIVE &
    1; // 1
  static +DISABLED: Class<UI$ControlStates__DISABLED> &
    UI$ControlStates__DISABLED &
    2; // 2
}

declare class UI$ControlStates__ACTIVE mixins UI$ControlStates {}
declare class UI$ControlStates__INACTIVE mixins UI$ControlStates {}
declare class UI$ControlStates__DISABLED mixins UI$ControlStates {}

declare class UI$Button mixins UI$Control {
  constructor(id: string, options?: { [key: string]: any }): this;
  State: UI$ControlStates;
  Event: UI$ControlEventArgs;
  getState(): UI$ControlStates;
  onClick: (event: Event) => void;
  onMouseOut: (event: Event) => void;
  onMouseOver: (event: Event) => void;
  setIcon(iconClass: string): void;
  setState(state: UI$ControlStates): boolean;
}

declare class UI$ComboButton mixins UI$Button {
  constructor(id: string, options?: { [key: string]: any }): this;
  addControl(): void;
  restoreDefault(): void;
  saveAsDefault(): void;
}
declare var npm$namespace$HudMessage: {
  displayMessage: typeof HudMessage$displayMessage,
  dismiss: typeof HudMessage$dismiss
};
declare function HudMessage$displayMessage(
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

declare function HudMessage$dismiss(): boolean;

declare var npm$namespace$Private: {
  getHtmlTemplate: typeof Private$getHtmlTemplate,
  formatValueWithUnits: typeof Private$formatValueWithUnits,
  convertUnits: typeof Private$convertUnits,
  calculatePrecision: typeof Private$calculatePrecision,
  env: typeof Private$env
};
declare function Private$getHtmlTemplate(
  url: string,
  callback: (error: string, content: string) => void
): void;

declare var Private$env: string;

declare function Private$formatValueWithUnits(
  value: number,
  units: string,
  type: number,
  precision: number
): string;

declare function Private$convertUnits(
  fromUnits: string,
  toUnits: string,
  calibrationFactor: number,
  d: number,
  type: string
): number;

declare function Private$calculatePrecision(value: string | number): number;

declare interface Private$PreferencesOptions {
  localStorage?: boolean;
  prefix?: string;
}

declare class Private$Preferences {
  constructor(
    viewer: Viewing$Viewer3D,
    options: Private$PreferencesOptions
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

declare class Private$ViewerState {
  constructor(viewer: Viewing$Viewer3D): this;
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

declare class Private$GuiViewer3D mixins Viewing$Viewer3D {
  canvas: HTMLCanvasElement;
  toolController: Viewing$ToolController;
  impl: Private$Viewer3DImpl;
  model: Viewing$Model;
  navigation: Viewing$Navigation;
  addPanel(panel: UI$UI$PropertyPanel): boolean;
  getToolbar(create: boolean): UI$UI$ToolBar;
  removePanel(panel: UI$UI$PropertyPanel): boolean;
  resizePanels(options?: Viewing$ResizePanelOptions): void;
  setLayersPanel(layersPanel: UI$UI$LayersPanel): boolean;
  setModelStructurePanel(
    modelStructurePanel: UI$UI$ModelStructurePanel
  ): boolean;
  setPropertyPanel(propertyPanel: UI$UI$PropertyPanel): boolean;
  setSettingsPanel(settingsPanel: UI$UI$SettingsPanel): boolean;
  updateToolbarButtons(): void;
}

declare interface Private$HitTestResult {
  dbId: number;
  face: THREE.Face3;
  fragId: number;
  intersectPoint: THREE.Vector3;
  model: Viewing$Model;
}

declare class Private$Viewer3DImpl {
  constructor(thecanvas: any, theapi: any): this;
  visibilityManager: Private$VisibilityManager;
  clientToViewport(clientX: number, clientY: number): THREE.Vector3;
  hitTest(
    clientX: number,
    clientY: number,
    ignoreTransparent: boolean
  ): Private$HitTestResult;
  hitTestViewport(
    vpVec: THREE.Vector3,
    ignoreTransparent: boolean
  ): Private$HitTestResult;
  initialize(): void;
  setLightPreset(index: number, force?: boolean): void;
  viewportToClient(viewportX: number, viewportY: number): THREE.Vector3;
  getMaterials(): any;
  getRenderProxy(model: Viewing$Model, fragId: number): any;
  sceneUpdated(param: boolean): void;
}

declare class Private$VisibilityManager {
  constructor(viewerImpl: any, model: any): this;
  getHiddenNodes(): any;
  getInstanceTree(): Viewing$InstanceTree;
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
declare var npm$namespace$Viewing: {
  Initializer: typeof Viewing$Initializer,
  AGGREGATE_SELECTION_CHANGED_EVENT: typeof Viewing$AGGREGATE_SELECTION_CHANGED_EVENT,
  ANIMATION_READY_EVENT: typeof Viewing$ANIMATION_READY_EVENT,
  CAMERA_CHANGE_EVENT: typeof Viewing$CAMERA_CHANGE_EVENT,
  CUTPLANES_CHANGE_EVENT: typeof Viewing$CUTPLANES_CHANGE_EVENT,
  ESCAPE_EVENT: typeof Viewing$ESCAPE_EVENT,
  EXPLODE_CHANGE_EVENT: typeof Viewing$EXPLODE_CHANGE_EVENT,
  EXTENSION_LOADED_EVENT: typeof Viewing$EXTENSION_LOADED_EVENT,
  EXTENSION_UNLOADED_EVENT: typeof Viewing$EXTENSION_UNLOADED_EVENT,
  FINAL_FRAME_RENDERED_CHANGED_EVENT: typeof Viewing$FINAL_FRAME_RENDERED_CHANGED_EVENT,
  FIT_TO_VIEW_EVENT: typeof Viewing$FIT_TO_VIEW_EVENT,
  FRAGMENTS_LOADED_EVENT: typeof Viewing$FRAGMENTS_LOADED_EVENT,
  FULLSCREEN_MODE_EVENT: typeof Viewing$FULLSCREEN_MODE_EVENT,
  GEOMETRY_LOADED_EVENT: typeof Viewing$GEOMETRY_LOADED_EVENT,
  HIDE_EVENT: typeof Viewing$HIDE_EVENT,
  HYPERLINK_EVENT: typeof Viewing$HYPERLINK_EVENT,
  ISOLATE_EVENT: typeof Viewing$ISOLATE_EVENT,
  LAYER_VISIBILITY_CHANGED_EVENT: typeof Viewing$LAYER_VISIBILITY_CHANGED_EVENT,
  LOAD_MISSING_GEOMETRY: typeof Viewing$LOAD_MISSING_GEOMETRY,
  MODEL_ROOT_LOADED_EVENT: typeof Viewing$MODEL_ROOT_LOADED_EVENT,
  MODEL_UNLOADED_EVENT: typeof Viewing$MODEL_UNLOADED_EVENT,
  NAVIGATION_MODE_CHANGED_EVENT: typeof Viewing$NAVIGATION_MODE_CHANGED_EVENT,
  OBJECT_TREE_CREATED_EVENT: typeof Viewing$OBJECT_TREE_CREATED_EVENT,
  OBJECT_TREE_UNAVAILABLE_EVENT: typeof Viewing$OBJECT_TREE_UNAVAILABLE_EVENT,
  PREF_CHANGED_EVENT: typeof Viewing$PREF_CHANGED_EVENT,
  PREF_RESET_EVENT: typeof Viewing$PREF_RESET_EVENT,
  PROGRESS_UPDATE_EVENT: typeof Viewing$PROGRESS_UPDATE_EVENT,
  RENDER_OPTION_CHANGED_EVENT: typeof Viewing$RENDER_OPTION_CHANGED_EVENT,
  RENDER_PRESENTED_EVENT: typeof Viewing$RENDER_PRESENTED_EVENT,
  RESET_EVENT: typeof Viewing$RESET_EVENT,
  RESTORE_DEFAULT_SETTINGS_EVENT: typeof Viewing$RESTORE_DEFAULT_SETTINGS_EVENT,
  SELECTION_CHANGED_EVENT: typeof Viewing$SELECTION_CHANGED_EVENT,
  SHOW_EVENT: typeof Viewing$SHOW_EVENT,
  TEXTURES_LOADED_EVENT: typeof Viewing$TEXTURES_LOADED_EVENT,
  TOOL_CHANGE_EVENT: typeof Viewing$TOOL_CHANGE_EVENT,
  TOOLBAR_CREATED_EVENT: typeof Viewing$TOOLBAR_CREATED_EVENT,
  VIEWER_INITIALIZED: typeof Viewing$VIEWER_INITIALIZED,
  VIEWER_RESIZE_EVENT: typeof Viewing$VIEWER_RESIZE_EVENT,
  VIEWER_STATE_RESTORED_EVENT: typeof Viewing$VIEWER_STATE_RESTORED_EVENT,
  VIEWER_UNINITIALIZED: typeof Viewing$VIEWER_UNINITIALIZED,
  theExtensionManager: typeof Viewing$theExtensionManager
};
declare class Viewing$ErrorCodes {
  constructor(...args: empty): mixed;
  static +UNKNOWN_FAILURE: Class<Viewing$ErrorCodes__UNKNOWN_FAILURE> &
    Viewing$ErrorCodes__UNKNOWN_FAILURE &
    1; // 1
  static +BAD_DATA: Class<Viewing$ErrorCodes__BAD_DATA> &
    Viewing$ErrorCodes__BAD_DATA &
    2; // 2
  static +NETWORK_FAILURE: Class<Viewing$ErrorCodes__NETWORK_FAILURE> &
    Viewing$ErrorCodes__NETWORK_FAILURE &
    3; // 3
  static +NETWORK_ACCESS_DENIED: Class<Viewing$ErrorCodes__NETWORK_ACCESS_DENIED> &
    Viewing$ErrorCodes__NETWORK_ACCESS_DENIED &
    4; // 4
  static +NETWORK_FILE_NOT_FOUND: Class<Viewing$ErrorCodes__NETWORK_FILE_NOT_FOUND> &
    Viewing$ErrorCodes__NETWORK_FILE_NOT_FOUND &
    5; // 5
  static +NETWORK_SERVER_ERROR: Class<Viewing$ErrorCodes__NETWORK_SERVER_ERROR> &
    Viewing$ErrorCodes__NETWORK_SERVER_ERROR &
    6; // 6
  static +NETWORK_UNHANDLED_RESPONSE_CODE: Class<Viewing$ErrorCodes__NETWORK_UNHANDLED_RESPONSE_CODE> &
    Viewing$ErrorCodes__NETWORK_UNHANDLED_RESPONSE_CODE &
    7; // 7
  static +BROWSER_WEBGL_NOT_SUPPORTED: Class<Viewing$ErrorCodes__BROWSER_WEBGL_NOT_SUPPORTED> &
    Viewing$ErrorCodes__BROWSER_WEBGL_NOT_SUPPORTED &
    8; // 8
  static +BAD_DATA_NO_VIEWABLE_CONTENT: Class<Viewing$ErrorCodes__BAD_DATA_NO_VIEWABLE_CONTENT> &
    Viewing$ErrorCodes__BAD_DATA_NO_VIEWABLE_CONTENT &
    9; // 9
  static +BROWSER_WEBGL_DISABLED: Class<Viewing$ErrorCodes__BROWSER_WEBGL_DISABLED> &
    Viewing$ErrorCodes__BROWSER_WEBGL_DISABLED &
    10; // 10
  static +BAD_DATA_MODEL_IS_EMPTY: Class<Viewing$ErrorCodes__BAD_DATA_MODEL_IS_EMPTY> &
    Viewing$ErrorCodes__BAD_DATA_MODEL_IS_EMPTY &
    11; // 11
  static +RTC_ERROR: Class<Viewing$ErrorCodes__RTC_ERROR> &
    Viewing$ErrorCodes__RTC_ERROR &
    12; // 12
  static +UNSUPORTED_FILE_EXTENSION: Class<Viewing$ErrorCodes__UNSUPORTED_FILE_EXTENSION> &
    Viewing$ErrorCodes__UNSUPORTED_FILE_EXTENSION &
    13; // 13
  static +VIEWER_INTERNAL_ERROR: Class<Viewing$ErrorCodes__VIEWER_INTERNAL_ERROR> &
    Viewing$ErrorCodes__VIEWER_INTERNAL_ERROR &
    14; // 14
}

declare class Viewing$ErrorCodes__UNKNOWN_FAILURE mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__BAD_DATA mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__NETWORK_FAILURE mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__NETWORK_ACCESS_DENIED
  mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__NETWORK_FILE_NOT_FOUND
  mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__NETWORK_SERVER_ERROR
  mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__NETWORK_UNHANDLED_RESPONSE_CODE
  mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__BROWSER_WEBGL_NOT_SUPPORTED
  mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__BAD_DATA_NO_VIEWABLE_CONTENT
  mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__BROWSER_WEBGL_DISABLED
  mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__BAD_DATA_MODEL_IS_EMPTY
  mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__RTC_ERROR mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__UNSUPORTED_FILE_EXTENSION
  mixins Viewing$ErrorCodes {}
declare class Viewing$ErrorCodes__VIEWER_INTERNAL_ERROR
  mixins Viewing$ErrorCodes {}

declare class Viewing$SelectionMode {
  constructor(...args: empty): mixed;
  static +MIXED: Class<Viewing$SelectionMode__MIXED> &
    Viewing$SelectionMode__MIXED &
    0; // 0
  static +REGULAR: Class<Viewing$SelectionMode__REGULAR> &
    Viewing$SelectionMode__REGULAR &
    1; // 1
  static +OVERLAYED: Class<Viewing$SelectionMode__OVERLAYED> &
    Viewing$SelectionMode__OVERLAYED &
    2; // 2
  static +LEAF_OBJECT: Class<Viewing$SelectionMode__LEAF_OBJECT> &
    Viewing$SelectionMode__LEAF_OBJECT &
    3; // 3
  static +FIRST_OBJECT: Class<Viewing$SelectionMode__FIRST_OBJECT> &
    Viewing$SelectionMode__FIRST_OBJECT &
    4; // 4
  static +LAST_OBJECT: Class<Viewing$SelectionMode__LAST_OBJECT> &
    Viewing$SelectionMode__LAST_OBJECT &
    5; // 5
}

declare class Viewing$SelectionMode__MIXED mixins Viewing$SelectionMode {}
declare class Viewing$SelectionMode__REGULAR mixins Viewing$SelectionMode {}
declare class Viewing$SelectionMode__OVERLAYED mixins Viewing$SelectionMode {}
declare class Viewing$SelectionMode__LEAF_OBJECT mixins Viewing$SelectionMode {}
declare class Viewing$SelectionMode__FIRST_OBJECT
  mixins Viewing$SelectionMode {}
declare class Viewing$SelectionMode__LAST_OBJECT mixins Viewing$SelectionMode {}

declare class Viewing$ProgressState {
  constructor(...args: empty): mixed;
  static +ROOT_LOADED: Class<Viewing$ProgressState__ROOT_LOADED> &
    Viewing$ProgressState__ROOT_LOADED &
    0; // 0
  static +LOADING: Class<Viewing$ProgressState__LOADING> &
    Viewing$ProgressState__LOADING &
    1; // 1
  static +RENDERING: Class<Viewing$ProgressState__RENDERING> &
    Viewing$ProgressState__RENDERING &
    2; // 2
}

declare class Viewing$ProgressState__ROOT_LOADED mixins Viewing$ProgressState {}
declare class Viewing$ProgressState__LOADING mixins Viewing$ProgressState {}
declare class Viewing$ProgressState__RENDERING mixins Viewing$ProgressState {}

declare class Viewing$KeyCode {
  constructor(...args: empty): mixed;
  static +BACKSPACE: Class<Viewing$KeyCode__BACKSPACE> &
    Viewing$KeyCode__BACKSPACE &
    8; // 8
  static +TAB: Class<Viewing$KeyCode__TAB> & Viewing$KeyCode__TAB & 9; // 9
  static +ENTER: Class<Viewing$KeyCode__ENTER> & Viewing$KeyCode__ENTER & 13; // 13
  static +SHIFT: Class<Viewing$KeyCode__SHIFT> & Viewing$KeyCode__SHIFT & 16; // 16
  static +CONTROL: Class<Viewing$KeyCode__CONTROL> &
    Viewing$KeyCode__CONTROL &
    17; // 17
  static +ALT: Class<Viewing$KeyCode__ALT> & Viewing$KeyCode__ALT & 18; // 18
  static +ESCAPE: Class<Viewing$KeyCode__ESCAPE> & Viewing$KeyCode__ESCAPE & 27; // 27
  static +SPACE: Class<Viewing$KeyCode__SPACE> & Viewing$KeyCode__SPACE & 32; // 32
  static +PAGEUP: Class<Viewing$KeyCode__PAGEUP> & Viewing$KeyCode__PAGEUP & 33; // 33
  static +PAGEDOWN: Class<Viewing$KeyCode__PAGEDOWN> &
    Viewing$KeyCode__PAGEDOWN &
    34; // 34
  static +END: Class<Viewing$KeyCode__END> & Viewing$KeyCode__END & 35; // 35
  static +HOME: Class<Viewing$KeyCode__HOME> & Viewing$KeyCode__HOME & 36; // 36
  static +LEFT: Class<Viewing$KeyCode__LEFT> & Viewing$KeyCode__LEFT & 37; // 37
  static +UP: Class<Viewing$KeyCode__UP> & Viewing$KeyCode__UP & 38; // 38
  static +RIGHT: Class<Viewing$KeyCode__RIGHT> & Viewing$KeyCode__RIGHT & 39; // 39
  static +DOWN: Class<Viewing$KeyCode__DOWN> & Viewing$KeyCode__DOWN & 40; // 40
  static +INSERT: Class<Viewing$KeyCode__INSERT> & Viewing$KeyCode__INSERT & 45; // 45
  static +DELETE: Class<Viewing$KeyCode__DELETE> & Viewing$KeyCode__DELETE & 46; // 46
  static +ZERO: Class<Viewing$KeyCode__ZERO> & Viewing$KeyCode__ZERO & 48; // 48
  static +SEMICOLONMOZ: Class<Viewing$KeyCode__SEMICOLONMOZ> &
    Viewing$KeyCode__SEMICOLONMOZ &
    59; // 59
  static +EQUALSMOZ: Class<Viewing$KeyCode__EQUALSMOZ> &
    Viewing$KeyCode__EQUALSMOZ &
    61; // 61
  static +a: Class<Viewing$KeyCode__a> & Viewing$KeyCode__a & 65; // 65
  static +b: Class<Viewing$KeyCode__b> & Viewing$KeyCode__b & 66; // 66
  static +c: Class<Viewing$KeyCode__c> & Viewing$KeyCode__c & 67; // 67
  static +d: Class<Viewing$KeyCode__d> & Viewing$KeyCode__d & 68; // 68
  static +e: Class<Viewing$KeyCode__e> & Viewing$KeyCode__e & 69; // 69
  static +f: Class<Viewing$KeyCode__f> & Viewing$KeyCode__f & 70; // 70
  static +g: Class<Viewing$KeyCode__g> & Viewing$KeyCode__g & 71; // 71
  static +h: Class<Viewing$KeyCode__h> & Viewing$KeyCode__h & 72; // 72
  static +i: Class<Viewing$KeyCode__i> & Viewing$KeyCode__i & 73; // 73
  static +j: Class<Viewing$KeyCode__j> & Viewing$KeyCode__j & 74; // 74
  static +k: Class<Viewing$KeyCode__k> & Viewing$KeyCode__k & 75; // 75
  static +l: Class<Viewing$KeyCode__l> & Viewing$KeyCode__l & 76; // 76
  static +m: Class<Viewing$KeyCode__m> & Viewing$KeyCode__m & 77; // 77
  static +n: Class<Viewing$KeyCode__n> & Viewing$KeyCode__n & 78; // 78
  static +o: Class<Viewing$KeyCode__o> & Viewing$KeyCode__o & 79; // 79
  static +p: Class<Viewing$KeyCode__p> & Viewing$KeyCode__p & 80; // 80
  static +q: Class<Viewing$KeyCode__q> & Viewing$KeyCode__q & 81; // 81
  static +r: Class<Viewing$KeyCode__r> & Viewing$KeyCode__r & 82; // 82
  static +s: Class<Viewing$KeyCode__s> & Viewing$KeyCode__s & 83; // 83
  static +t: Class<Viewing$KeyCode__t> & Viewing$KeyCode__t & 84; // 84
  static +u: Class<Viewing$KeyCode__u> & Viewing$KeyCode__u & 85; // 85
  static +v: Class<Viewing$KeyCode__v> & Viewing$KeyCode__v & 86; // 86
  static +w: Class<Viewing$KeyCode__w> & Viewing$KeyCode__w & 87; // 87
  static +x: Class<Viewing$KeyCode__x> & Viewing$KeyCode__x & 88; // 88
  static +y: Class<Viewing$KeyCode__y> & Viewing$KeyCode__y & 89; // 89
  static +z: Class<Viewing$KeyCode__z> & Viewing$KeyCode__z & 90; // 90
  static +LCOMMAND: Class<Viewing$KeyCode__LCOMMAND> &
    Viewing$KeyCode__LCOMMAND &
    91; // 91
  static +RCOMMAND: Class<Viewing$KeyCode__RCOMMAND> &
    Viewing$KeyCode__RCOMMAND &
    93; // 93
  static +PLUS: Class<Viewing$KeyCode__PLUS> & Viewing$KeyCode__PLUS & 107; // 107
  static +PLUSMOZ: Class<Viewing$KeyCode__PLUSMOZ> &
    Viewing$KeyCode__PLUSMOZ &
    171; // 171
  static +DASHMOZ: Class<Viewing$KeyCode__DASHMOZ> &
    Viewing$KeyCode__DASHMOZ &
    109; // 109
  static +F1: Class<Viewing$KeyCode__F1> & Viewing$KeyCode__F1 & 112; // 112
  static +F2: Class<Viewing$KeyCode__F2> & Viewing$KeyCode__F2 & 113; // 113
  static +F3: Class<Viewing$KeyCode__F3> & Viewing$KeyCode__F3 & 114; // 114
  static +F4: Class<Viewing$KeyCode__F4> & Viewing$KeyCode__F4 & 115; // 115
  static +F5: Class<Viewing$KeyCode__F5> & Viewing$KeyCode__F5 & 116; // 116
  static +F6: Class<Viewing$KeyCode__F6> & Viewing$KeyCode__F6 & 117; // 117
  static +F7: Class<Viewing$KeyCode__F7> & Viewing$KeyCode__F7 & 118; // 118
  static +F8: Class<Viewing$KeyCode__F8> & Viewing$KeyCode__F8 & 119; // 119
  static +F9: Class<Viewing$KeyCode__F9> & Viewing$KeyCode__F9 & 120; // 120
  static +F10: Class<Viewing$KeyCode__F10> & Viewing$KeyCode__F10 & 121; // 121
  static +F11: Class<Viewing$KeyCode__F11> & Viewing$KeyCode__F11 & 122; // 122
  static +F12: Class<Viewing$KeyCode__F12> & Viewing$KeyCode__F12 & 123; // 123
  static +DASHMOZNEW: Class<Viewing$KeyCode__DASHMOZNEW> &
    Viewing$KeyCode__DASHMOZNEW &
    173; // 173
  static +SEMICOLON: Class<Viewing$KeyCode__SEMICOLON> &
    Viewing$KeyCode__SEMICOLON &
    186; // 186
  static +EQUALS: Class<Viewing$KeyCode__EQUALS> &
    Viewing$KeyCode__EQUALS &
    187; // 187
  static +COMMA: Class<Viewing$KeyCode__COMMA> & Viewing$KeyCode__COMMA & 188; // 188
  static +DASH: Class<Viewing$KeyCode__DASH> & Viewing$KeyCode__DASH & 189; // 189
  static +PERIOD: Class<Viewing$KeyCode__PERIOD> &
    Viewing$KeyCode__PERIOD &
    190; // 190
  static +SLASH: Class<Viewing$KeyCode__SLASH> & Viewing$KeyCode__SLASH & 191; // 191
  static +LBRACKET: Class<Viewing$KeyCode__LBRACKET> &
    Viewing$KeyCode__LBRACKET &
    219; // 219
  static +RBRACKET: Class<Viewing$KeyCode__RBRACKET> &
    Viewing$KeyCode__RBRACKET &
    221; // 221
  static +SINGLEQUOTE: Class<Viewing$KeyCode__SINGLEQUOTE> &
    Viewing$KeyCode__SINGLEQUOTE &
    222; // 222
  static +COMMANDMOZ: Class<Viewing$KeyCode__COMMANDMOZ> &
    Viewing$KeyCode__COMMANDMOZ &
    224; // 224
}

declare class Viewing$KeyCode__BACKSPACE mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__TAB mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__ENTER mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__SHIFT mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__CONTROL mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__ALT mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__ESCAPE mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__SPACE mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__PAGEUP mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__PAGEDOWN mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__END mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__HOME mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__LEFT mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__UP mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__RIGHT mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__DOWN mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__INSERT mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__DELETE mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__ZERO mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__SEMICOLONMOZ mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__EQUALSMOZ mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__a mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__b mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__c mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__d mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__e mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__f mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__g mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__h mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__i mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__j mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__k mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__l mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__m mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__n mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__o mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__p mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__q mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__r mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__s mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__t mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__u mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__v mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__w mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__x mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__y mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__z mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__LCOMMAND mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__RCOMMAND mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__PLUS mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__PLUSMOZ mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__DASHMOZ mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F1 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F2 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F3 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F4 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F5 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F6 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F7 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F8 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F9 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F10 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F11 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__F12 mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__DASHMOZNEW mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__SEMICOLON mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__EQUALS mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__COMMA mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__DASH mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__PERIOD mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__SLASH mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__LBRACKET mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__RBRACKET mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__SINGLEQUOTE mixins Viewing$KeyCode {}
declare class Viewing$KeyCode__COMMANDMOZ mixins Viewing$KeyCode {}

declare interface Viewing$ViewerEvent {
  (event: any): void;
}

declare interface Viewing$Viewer3DConfig {
  startOnInitialize?: boolean;
  theme?: "dark-theme" | "light-theme" | string;
  [key: string]: any;
}

declare interface Viewing$ViewingApplicationOptions {
  disableBrowserContextMenu?: boolean;
  [key: string]: any;
}

declare interface Viewing$ViewerConfig {
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

declare interface Viewing$ItemSelectedObserver {
  onItemSelected(viewer: Viewing$Viewer3D): void;
}

declare interface Viewing$SelectionVisibility {
  hasVisible: boolean;
  hasHidden: boolean;
}

declare interface Viewing$ThumbnailOptions {
  urn: string;
  width: number;
  height: number;
  guid: string;
  acmsession: string;
}

declare interface Viewing$FileLoaderOptions {
  ids?: string;
  sharedPropertyDbPath?: string;
  [key: string]: any;
}

declare interface Viewing$LoadModelOptions {
  fileLoader?: Viewing$FileLoader;
  loadOptions?: { [key: string]: any };
  sharedPropertyDbPath?: string;
  ids?: string;
  [key: string]: any;
}

declare interface Viewing$PropertyOptions {
  propFilter?: string[];
  ignoreHidden?: boolean;
  [key: string]: any;
}

declare interface Viewing$ResizePanelOptions {
  dockingPanels?: UI$UI$DockingPanel[];
  viewer?: Viewing$Viewer3D;
  dimensions?: {
    width: number,
    height: number
  };
}

declare class Viewing$FileLoader {
  constructor(viewer: Viewing$Viewer3D): this;
  is3d(): boolean;
  loadFile(
    url: string,
    options: Viewing$FileLoaderOptions,
    onSuccess: () => void,
    onError: () => void
  ): void;
}

declare interface Viewing$ViewerItem {
  children?: Viewing$ViewerItem[];
  guid: string;
  hasThumbnail: boolean;
  name: string;
  parent: Viewing$ViewerItem;
  progress: string;
  role: "3d" | "2d" | string;
  size: number;
  status: string;
  success: string;
  type: "view" | "geometry" | string;
  viewableID: string;
}

declare interface Viewing$ExtensionOptions {
  defaultModelStructureTitle: string;
  extensions: string[];
  startOnInitialize: boolean;
  viewableName: string;
  [key: string]: any;
}

declare var Viewing$AGGREGATE_SELECTION_CHANGED_EVENT: any; // "aggregateSelection";

declare var Viewing$ANIMATION_READY_EVENT: any; // "animationReady";

declare var Viewing$CAMERA_CHANGE_EVENT: any; // "cameraChanged";

declare var Viewing$CUTPLANES_CHANGE_EVENT: any; // "cutplanesChanged";

declare var Viewing$ESCAPE_EVENT: any; // "escape";

declare var Viewing$EXPLODE_CHANGE_EVENT: any; // "explodeChanged";

declare var Viewing$EXTENSION_LOADED_EVENT: any; // "extensionLoaded";

declare var Viewing$EXTENSION_UNLOADED_EVENT: any; // "extensionUnloaded";

declare var Viewing$FINAL_FRAME_RENDERED_CHANGED_EVENT: any; // "finalFrameRenderedChanged";

declare var Viewing$FIT_TO_VIEW_EVENT: any; // "fitToView";

declare var Viewing$FRAGMENTS_LOADED_EVENT: any; // "fragmentsLoaded";

declare var Viewing$FULLSCREEN_MODE_EVENT: any; // "fullscreenMode";

declare var Viewing$GEOMETRY_LOADED_EVENT: any; // "geometryLoaded";

declare var Viewing$HIDE_EVENT: any; // "hide";

declare var Viewing$HYPERLINK_EVENT: any; // "hyperlink";

declare var Viewing$ISOLATE_EVENT: any; // "isolate";

declare var Viewing$LAYER_VISIBILITY_CHANGED_EVENT: any; // "layerVisibilityChanged";

declare var Viewing$LOAD_MISSING_GEOMETRY: any; // "loadMissingGeometry";

declare var Viewing$MODEL_ROOT_LOADED_EVENT: any; // "modelRootLoaded";

declare var Viewing$MODEL_UNLOADED_EVENT: any; // "modelUnloaded";

declare var Viewing$NAVIGATION_MODE_CHANGED_EVENT: any; // "navigationModeChanged";

declare var Viewing$OBJECT_TREE_CREATED_EVENT: any; // "objectTreeCreated";

declare var Viewing$OBJECT_TREE_UNAVAILABLE_EVENT: any; // "objectTreeUnavailable";

declare var Viewing$PREF_CHANGED_EVENT: any; // "prefChanged";

declare var Viewing$PREF_RESET_EVENT: any; // "prefReset";

declare var Viewing$PROGRESS_UPDATE_EVENT: any; // "progressUpdate";

declare var Viewing$RENDER_OPTION_CHANGED_EVENT: any; // "renderOptionChanged";

declare var Viewing$RENDER_PRESENTED_EVENT: any; // "renderPresented";

declare var Viewing$RESET_EVENT: any; // "reset";

declare var Viewing$RESTORE_DEFAULT_SETTINGS_EVENT: any; // "restoreDefaultSettings";

declare var Viewing$SELECTION_CHANGED_EVENT: any; // "selection";

declare var Viewing$SHOW_EVENT: any; // "show";

declare var Viewing$TEXTURES_LOADED_EVENT: any; // "texturesLoaded";

declare var Viewing$TOOL_CHANGE_EVENT: any; // "toolChanged";

declare var Viewing$TOOLBAR_CREATED_EVENT: any; // "toolbarCreated";

declare var Viewing$VIEWER_INITIALIZED: any; // "viewerInitialized";

declare var Viewing$VIEWER_RESIZE_EVENT: any; // "viewerResize";

declare var Viewing$VIEWER_STATE_RESTORED_EVENT: any; // "viewerStateRestored";

declare var Viewing$VIEWER_UNINITIALIZED: any; // "viewerUninitialized";

declare interface Viewing$ViewerEventArgs {
  target?: Viewing$Viewer3D;
  model?: Viewing$ViewerItem;
  type: string;
  [key: string]: any;
}

declare interface Viewing$BubbleNodeSearchProps {
  role?: "3d" | "2d" | string;
  type?: "view" | "geometry" | string;
  mime?: string;
}

declare class Viewing$BubbleNode {
  static MODEL_NODE: Viewing$BubbleNodeSearchProps;
  static GEOMETRY_SVF_NODE: Viewing$BubbleNodeSearchProps;
  static SHEET_NODE: Viewing$BubbleNodeSearchProps;
  static GEOMETRY_F2D_NODE: Viewing$BubbleNodeSearchProps;
  static VIEWABLE_NODE: Viewing$BubbleNodeSearchProps;
  parent: Viewing$BubbleNode;
  id: number;
  data: Viewing$ViewerItem;
  isLeaf: boolean;
  sharedPropertyDbPath: string;
  lodNode: { [key: string]: any };
  children: Viewing$BubbleNode[];
  constructor(
    rawNode: { [key: string]: any },
    parent?: Viewing$BubbleNode
  ): this;
  findByGuid(guid: string): Viewing$BubbleNode;
  findParentGeom2Dor3D(): Viewing$BubbleNode;
  findPropertyDbPath(): string;
  findViewableParent(): Viewing$BubbleNode;
  getLodNode(): boolean;
  getNamedViews(): string[];
  getPlacementTransform(): { [key: string]: any };
  getRootNode(): Viewing$BubbleNode;
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
  search(propsToMatch: Viewing$BubbleNodeSearchProps): Viewing$BubbleNode[];
  searchByTag(tagsToMatch: { [key: string]: any }): Viewing$BubbleNode[];
  setTag(tag: string, value: any): void;
  traverse(cb: () => void): boolean;
  urn(searchParent: boolean): string;
}

declare var Viewing$theExtensionManager: Viewing$ExtensionManager;

declare interface Viewing$InitializerOptions {
  Private$env?: string;
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

declare function Viewing$Initializer(
  options: Viewing$InitializerOptions,
  callback?: () => void
): void;

declare class Viewing$Document {
  constructor(
    dataJSON: { [key: string]: any },
    path: string,
    acmsession: string
  ): this;
  static load(
    documentId: string,
    successCallback: (doc: Viewing$Document) => void,
    errorCallback: (
      errorCode: Viewing$ErrorCodes,
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
  getRoot(): Viewing$BubbleNode;
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
  ): Viewing$ThumbnailOptions;
  getThumbnailPath(item: string, width: number, height: number): string;
  getViewableItems(document: Viewing$Document): void;
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

declare class Viewing$Extension {
  viewer: Private$Private$GuiViewer3D;
  options: any;
  constructor(viewer: Private$Private$GuiViewer3D, options: any): this;
  load(): boolean;
  unload(): boolean;
}

declare class Viewing$ExtensionManager {
  extensions: {
    [key: string]: Viewing$Extension
  };
  extensionsAsync: {
    [key: string]: Viewing$Extension
  };
  registerExtension(
    extensionId: string,
    extension: { [key: string]: any }
  ): boolean;
  getExtension(extensionId: string): Viewing$Extension | null;
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

declare class Viewing$InstanceTree {
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

declare class Viewing$InstanceTreeAccess {
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

declare interface Viewing$InstanceTreeNode {
  dbId: number;
  name: string;
  fragments: number[];
  children: Viewing$InstanceTreeNode[];
}

declare class Viewing$Model {
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
    successCallback?: (result: Viewing$InstanceTree) => void,
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
  getInstanceTree(): Viewing$InstanceTree;
  visibilityManager: Private$Private$VisibilityManager;
}

declare interface Viewing$PropertyResult {
  dbId: number;
  externalId?: string;
  name?: string;
  properties: Viewing$Property[];
}

declare interface Viewing$Property {
  displayCategory: string;
  displayName: string;
  displayValue: string;
  hidden: boolean;
  type: number;
  units: string;
}

declare class Viewing$Navigation {
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

declare interface Viewing$Properties {
  type: string;
  role: string;
}

declare class Viewing$ToolController {
  activateTool(name: string): boolean;
  deactivateTool(name: string): boolean;
  registerTool(tool: any): boolean;
  deregisterTool(tool: any): boolean;
  getToolNames(): string[];
  getActiveToolName(): string;
}

declare interface Viewing$ToolInterface {
  getCursor?: () => string;
  getName(): string;
  getNames(): string[];
  register(): void;
  deregister(): void;
  activate(name: string, viewerApi?: Private$Private$GuiViewer3D): void;
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

declare class Viewing$UnifiedCamera {}

declare interface Viewing$ContextMenuCallbackStatus {
  hasHidden: boolean;
  hasSelected: boolean;
  hasVisible: boolean;
  numSelected: number;
}

declare interface Viewing$ContextMenuItem {
  target: () => void;
  title: string;
}

declare class Viewing$ScreenMode {}

declare class Viewing$ScreenModeDelegate {
  constructor(viewer: Viewing$Viewer3D): this;
  doScreenModeChange(
    oldMode: Viewing$ScreenMode,
    newMode: Viewing$ScreenMode
  ): void;
  fullscreenEventListener(): void;
  getEscapeMode(): Viewing$ScreenMode | void;
  getMode(): Viewing$ScreenMode;
  getNextMode(): Viewing$ScreenMode | void;
  isModeSupported(mode: Viewing$ScreenMode): boolean;
  onScreenModeChanged(
    oldMode: Viewing$ScreenMode,
    newMode: Viewing$ScreenMode
  ): void;
  setMode(mode: Viewing$ScreenMode): boolean;
  uninitialize(): void;
}

declare class Viewing$AppScreenModeDelegate mixins Viewing$ScreenModeDelegate {
  constructor(viewer: Viewing$Viewer3D): this;
}

declare class Viewing$NullScreenModeDelegate mixins Viewing$ScreenModeDelegate {
  constructor(viewer: Viewing$Viewer3D): this;
}

declare class Viewing$Viewer3D {
  constructor(container: HTMLElement, config?: Viewing$Viewer3DConfig): this;
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
  fitToView(objectIds?: number[], model?: Viewing$Model): boolean;
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
  getVisibleModels(): Viewing$Model[];
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
  initialize(): number | Viewing$ErrorCodes;
  initSettings(): void;
  isExtensionActive(extensionID: string): boolean;
  isExtensionLoaded(extensionID: string): boolean;
  isLayerVisible(node: { [key: string]: any }): boolean;
  isNodeVisible(nodeId: number, model?: Viewing$Model): boolean;
  joinLiveReview(sessionId: string): void;
  leaveLiveReview(): void;
  load(
    urn: string,
    sharedPropertyDbPath?: string,
    onSuccesfullCallback?: () => void,
    onErrorCallback?: (
      errorCode: Viewing$ErrorCodes,
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
      errorCode: Viewing$ErrorCodes,
      errorMessage: string,
      statusCode: number,
      statusText: string
    ) => void
  ): any;
  loadDocumentNode(
    lmvDocument: Viewing$Document,
    bubbleNode: Viewing$BubbleNode,
    options?: { [key: string]: any }
  ): void;
  localize(): void;
  modelHasTopology(): boolean;
  playAnimation(callback?: () => void): void;
  registerContextMenuCallback(
    id: string,
    callback: (
      menu: Viewing$ContextMenuItem[],
      status: Viewing$ContextMenuCallbackStatus
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
  setModelUnits(model: Viewing$Model): void;
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
    selectionType: Viewing$SelectionMode
  ): void;
  setSelectionMode(mode: Viewing$SelectionMode): void;
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
    options?: Viewing$LoadModelOptions,
    onSuccessCallback?: () => void,
    onErrorCallback?: () => void
  ): number | Viewing$ErrorCodes;
  tearDown(): void;
  toggleSelect(dbid: number, selectionType: Viewing$SelectionMode): void;
  toggleVisibility(node: number): void;
  toolbar: UI$UI$ToolBar;
  trackADPSettingsOptions(): void;
  transferModel(): void;
  uninitialize(): void;
  unregisterContextMenuCallback(id: string): void;
  worldToClient(point: THREE.Vector3): THREE.Vector3;
  addEventListener(
    type: string,
    listener?: Viewing$ViewerEvent,
    options?: boolean | AddEventListenerOptions
  ): void;
  dispatchEvent(evt: Event): boolean;
  removeEventListener(
    type: string,
    listener?: Viewing$ViewerEvent,
    options?: boolean | EventListenerOptions
  ): void;
}

declare class Viewing$ViewingApplication {
  k3D: "3D";
  bubble: Viewing$BubbleNode;
  appContainerId: string;
  container: HTMLElement;
  options: Viewing$ViewingApplicationOptions;
  myRegisteredViewers: any;
  myDocument: Viewing$Document;
  myCurrentViewer: Viewing$Viewer3D;
  urn: string;
  selectedItem: Viewing$ViewerItem | null;
  extensionCache: { [key: string]: any };
  constructor(
    containerId: string,
    options?: Viewing$ViewingApplicationOptions
  ): this;
  addItemSelectedObserver(observer: Viewing$ItemSelectedObserver): void;
  finish(): void;
  getCurrentViewer(): Viewing$Viewer3D;
  getDefaultGeometry(geometryItems: any[]): { [key: string]: any };
  getNamedViews(item: { [key: string]: any }): any[];
  getSelectedItem(): { [key: string]: any } | null;
  getViewer(config: Viewing$Viewer3DConfig): Viewing$Viewer3D;
  getViewerContainer(): HTMLElement;
  loadDocument(
    documentId: any,
    onDocumentLoad?: (document: Viewing$Document) => void,
    onLoadFailed?: (errorCode: string, errorMsg: string, errors: any[]) => void,
    accessControlProperties?: { [key: string]: any }
  ): void;
  registerViewer(
    viewableType: string,
    viewerClass: any,
    config?: Viewing$ViewerConfig
  ): void;
  selectItem(
    item: Viewing$ViewerItem | Viewing$BubbleNode,
    onSuccessCallback: (
      viewer: Viewing$Viewer3D,
      item: Viewing$ViewerItem
    ) => void,
    onErrorCallback: (
      errorCode: Viewing$ErrorCodes,
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
  setCurrentViewer(viewer: Viewing$Viewer3D): void;
  setDocument(docManifest: { [key: string]: any }): boolean;
}

declare class Viewing$ViewingUtilities {
  getHitPoint(x: number, y: number): THREE.Vector3;
}
declare module "forge-viewer" {
}
