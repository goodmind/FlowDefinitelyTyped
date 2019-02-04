declare module 'forge-viewer' {
        
      declare var npm$namespace$Viewing: {
        Initializer: typeof Viewing$Initializer,
        ESCAPE_EVENT: typeof Viewing$ESCAPE_EVENT,
PROGRESS_UPDATE_EVENT: typeof Viewing$PROGRESS_UPDATE_EVENT,
FULLSCREEN_MODE_EVENT: typeof Viewing$FULLSCREEN_MODE_EVENT,
NAVIGATION_MODE_CHANGED_EVENT: typeof Viewing$NAVIGATION_MODE_CHANGED_EVENT,
VIEWER_STATE_RESTORED_EVENT: typeof Viewing$VIEWER_STATE_RESTORED_EVENT,
VIEWER_RESIZE_EVENT: typeof Viewing$VIEWER_RESIZE_EVENT,
VIEWER_UNINITIALIZED: typeof Viewing$VIEWER_UNINITIALIZED,
MODEL_ROOT_LOADED_EVENT: typeof Viewing$MODEL_ROOT_LOADED_EVENT,
GEOMETRY_LOADED_EVENT: typeof Viewing$GEOMETRY_LOADED_EVENT,
TOOLBAR_CREATED_EVENT: typeof Viewing$TOOLBAR_CREATED_EVENT,
OBJECT_TREE_CREATED_EVENT: typeof Viewing$OBJECT_TREE_CREATED_EVENT,
OBJECT_TREE_UNAVAILABLE_EVENT: typeof Viewing$OBJECT_TREE_UNAVAILABLE_EVENT,
MODEL_UNLOADED_EVENT: typeof Viewing$MODEL_UNLOADED_EVENT,
SELECTION_CHANGED_EVENT: typeof Viewing$SELECTION_CHANGED_EVENT,
AGGREGATE_SELECTION_CHANGED_EVENT: typeof Viewing$AGGREGATE_SELECTION_CHANGED_EVENT,
ISOLATE_EVENT: typeof Viewing$ISOLATE_EVENT,
HIDE_EVENT: typeof Viewing$HIDE_EVENT,
SHOW_EVENT: typeof Viewing$SHOW_EVENT,
HIGHLIGHT_EVENT: typeof Viewing$HIGHLIGHT_EVENT,
CAMERA_CHANGE_EVENT: typeof Viewing$CAMERA_CHANGE_EVENT,
EXPLODE_CHANGE_EVENT: typeof Viewing$EXPLODE_CHANGE_EVENT,
CUTPLANES_CHANGE_EVENT: typeof Viewing$CUTPLANES_CHANGE_EVENT,
TOOL_CHANGE_EVENT: typeof Viewing$TOOL_CHANGE_EVENT,
RENDER_OPTION_CHANGED_EVENT: typeof Viewing$RENDER_OPTION_CHANGED_EVENT,
LAYER_VISIBILITY_CHANGED_EVENT: typeof Viewing$LAYER_VISIBILITY_CHANGED_EVENT,
RESET_EVENT: typeof Viewing$RESET_EVENT,
ANIMATION_READY_EVENT: typeof Viewing$ANIMATION_READY_EVENT,
theExtensionManager: typeof Viewing$theExtensionManager,
      }
declare var Viewing$ESCAPE_EVENT: string;

declare var Viewing$PROGRESS_UPDATE_EVENT: string;

declare var Viewing$FULLSCREEN_MODE_EVENT: string;

declare var Viewing$NAVIGATION_MODE_CHANGED_EVENT: string;

declare var Viewing$VIEWER_STATE_RESTORED_EVENT: string;

declare var Viewing$VIEWER_RESIZE_EVENT: string;

declare var Viewing$VIEWER_UNINITIALIZED: string;

declare var Viewing$MODEL_ROOT_LOADED_EVENT: string;

declare var Viewing$GEOMETRY_LOADED_EVENT: string;

declare var Viewing$TOOLBAR_CREATED_EVENT: string;

declare var Viewing$OBJECT_TREE_CREATED_EVENT: string;

declare var Viewing$OBJECT_TREE_UNAVAILABLE_EVENT: string;

declare var Viewing$MODEL_UNLOADED_EVENT: string;

declare var Viewing$SELECTION_CHANGED_EVENT: string;

declare var Viewing$AGGREGATE_SELECTION_CHANGED_EVENT: string;

declare var Viewing$ISOLATE_EVENT: string;

declare var Viewing$HIDE_EVENT: string;

declare var Viewing$SHOW_EVENT: string;

declare var Viewing$HIGHLIGHT_EVENT: string;

declare var Viewing$CAMERA_CHANGE_EVENT: string;

declare var Viewing$EXPLODE_CHANGE_EVENT: string;

declare var Viewing$CUTPLANES_CHANGE_EVENT: string;

declare var Viewing$TOOL_CHANGE_EVENT: string;

declare var Viewing$RENDER_OPTION_CHANGED_EVENT: string;

declare var Viewing$LAYER_VISIBILITY_CHANGED_EVENT: string;

declare var Viewing$RESET_EVENT: string;

declare var Viewing$ANIMATION_READY_EVENT: string;

declare  class Viewing$SelectionMode {
  constructor(...args: empty): mixed;
static +LEAF_OBJECT: Class<Viewing$SelectionMode__LEAF_OBJECT> & Viewing$SelectionMode__LEAF_OBJECT & 0;// 0
static +FIRST_OBJECT: Class<Viewing$SelectionMode__FIRST_OBJECT> & Viewing$SelectionMode__FIRST_OBJECT & 1;// 1
static +LAST_OBJECT: Class<Viewing$SelectionMode__LAST_OBJECT> & Viewing$SelectionMode__LAST_OBJECT & 2;// 2

}

declare class Viewing$SelectionMode__LEAF_OBJECT mixins Viewing$SelectionMode {}
declare class Viewing$SelectionMode__FIRST_OBJECT mixins Viewing$SelectionMode {}
declare class Viewing$SelectionMode__LAST_OBJECT mixins Viewing$SelectionMode {}


declare var Viewing$theExtensionManager: Viewing$ExtensionManager;

declare interface Viewing$InitializerOptions {
env?: string,
language?: string,
webGLHelpLink?: string,
getAccessToken(callback?: (accessToken: string, expires: number) => void): void,
refreshToken(callback?: (accessToken: string, expires: number) => void): void
} 

declare function Viewing$Initializer(options: Viewing$InitializerOptions, callback?: () => void): void


declare class Viewing$Document  {
static load(
documentId: string,
successCallback: (doc: Viewing$Document) => void,
errorCallback: (errorCode: number, errorMsg: string, messages: any[]) => void,
accessControlProperties: any): void;
static getSubItemsWithProperties(
item: {[key: string]: any},
properties: Viewing$Properties,
recursive: boolean): {[key: string]: any}[];
acmSessionId: string;
getRootItem(): {[key: string]: any};
getViewablePath(item: {[key: string]: any}): string
}

declare class Viewing$Extension  {
viewer: Private$Private$GuiViewer3D;
options: any;
constructor(viewer: Private$Private$GuiViewer3D, options: any): this;
load(): boolean;
unload(): boolean
}

declare class Viewing$ExtensionManager  {
registerExtension(extensionId: string, extension: any): boolean;
unregisterExtension(extensionId: string): boolean;
getExtension(extensionId: string): any
}

declare class Viewing$InstanceTree  {
maxDepth: number;
nodeAccess: Viewing$InstanceTreeAccess;
numHidden: number;
numOff: number;
objectCount: number;
enumNodeChildren(node: any, callback: (dbId: number) => void, recursive?: boolean): void;
enumNodeFragments(node: any, callback: (fragId: number) => void, recursive?: boolean): void;
getChildCount(dbId: number): number;
getNodeBox(dbId: number, nodeBox: Float32Array): void;
getNodeParentId(dbId: number): number;
getRootId(): number;
setFlagGlobal(flag: any, value: any): void;
setFlagNode(dbId: number, flag: any, value: any): boolean
}

declare class Viewing$InstanceTreeAccess  {
children: any;
dbIdToIndex: any;
nameSuffixes: any;
names: any;
nodeBoxes: any;
nodes: any;
numNodes: number;
rootId: number;
strings: string[];
visibleIds: number
}

declare interface Viewing$InstanceTreeNode {
dbId: number,
name: string,
fragments: number[],
children: Viewing$InstanceTreeNode[]
} 

declare class Viewing$Model  {
getBoundingBox(): THREE.Box3;
getBulkProperties(
dbIds: number[],
propFilter?: string[],
successCallback?: (r: any) => void,
errorCallback?: (err: any) => void): void;
getData(): any;
getFragmentList(): any;
getObjectTree(
successCallback?: (result: Viewing$InstanceTree) => void,
errorCallback?: (err: any) => void): void;
getProperties(
dbId: number,
successCallback?: (r: Viewing$PropertyResult) => void,
errorCallback?: (err: any) => void): void;
getUnitScale(): number;
getUnitString(): number;
search(
text: string,
successCallback: (r: number[]) => void,
errorCallback?: (err: any) => void,
attributeNames?: string[]): void;
clearThemingColors(): void;
getInstanceTree(): Viewing$InstanceTree;
visibilityManager: Private$Private$VisibilityManager
}

declare interface Viewing$PropertyResult {
dbId: number,
externalId?: string,
name?: string,
properties: Viewing$Property[]
} 

declare interface Viewing$Property {
displayCategory: string,
displayName: string,
displayValue: string,
hidden: boolean,
type: number,
units: string
} 

declare class Viewing$Navigation  {
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
getScreenViewport(): UI$ClientRect;
setScreenViewport(viewport: UI$ClientRect): void;
setView(position: THREE.Vector3, target: THREE.Vector3): void;
setCameraUpVector(up: THREE.Vector): void
}

declare interface Viewing$Properties {
type: string,
role: string
} 

declare class Viewing$ToolController  {
activateTool(name: string): boolean;
deactivateTool(name: string): boolean;
registerTool(tool: any): boolean;
deregisterTool(tool: any): boolean;
getToolNames(): string[];
getActiveToolName(): string
}

declare interface Viewing$ToolInterface {
getCursor(): string,
getName(): string,
getNames(): string[],
register(): void,
deregister(): void,
activate(name: string, viewerApi?: Private$Private$GuiViewer3D): void,
deactivate(name: string): void,
update(): boolean,
handleSingleClick(event: MouseEvent, button: number): boolean,
handleDoubleClick(event: MouseEvent, button: number): boolean,
handleSingleTap(event: ToolBar$Event): boolean,
handleDoubleTap(event: ToolBar$Event): boolean,
handleKeyDown(event: KeyboardEvent, keyCode: number): boolean,
handleKeyUp(event: KeyboardEvent, keyCode: number): boolean,
handleWheelInput(delta: number): boolean,
handleButtonDown(event: MouseEvent, button: number): boolean,
handleButtonUp(event: MouseEvent, button: number): boolean,
handleMouseMove(event: MouseEvent): boolean,
handleGesture(event: ToolBar$Event): boolean,
handleBlur(event: ToolBar$Event): boolean,
handleResize(): void
} 

declare class Viewing$UnifiedCamera  {}

declare interface Viewing$ContextMenuCallbackStatus {
hasHidden: boolean,
hasSelected: boolean,
hasVisible: boolean,
numSelected: number
} 

declare interface Viewing$ContextMenuItem {
target: () => void,
title: string
} 

declare class Viewing$Viewer3D  {
id: number;
clearSelection(): void;
clearThemingColors(model: any): void;
clientToWorld(point: THREE.Vector3): THREE.Vector3;
createViewCube(): void;
displayViewCube(display: boolean): void;
fitToView(objectIds?: number[], model?: Viewing$Model): boolean;
getHiddenNodes(): number[];
getIsolatedNodes(): number[];
getSelection(): number[];
getSelectionCount(): number;
getSelectionVisibility(): {
hasVisible: boolean,
hasHidden: boolean
};
getState(filter?: any): any;
hide(node: number | number[]): void;
hideById(node: number): void;
isolate(node: number | number[]): void;
isolateById(dbIds: number | number[]): void;
registerContextMenuCallback(
id: string,
callback: (
menu: Viewing$ContextMenuItem[],
status: Viewing$ContextMenuCallbackStatus) => void): void;
resize(): void;
restoreState(state: any, filter?: any, immediate?: boolean): boolean;
search(
text: string,
successCallback: (r: number[]) => void,
errorCallback: (err: any) => void,
attributeNames?: string[]): void;
select(dbIds: number | number[]): void;
setCutPlanes(planes: THREE.Vector4[]): void;
setSelectionMode(mode: Viewing$SelectionMode): void;
setThemingColor(dbId: number, color: THREE.Vector4, model?: any): void;
setUp(config?: any): void;
setViewCube(face: string): void;
show(node: number | number[]): void;
showAll(): void;
tearDown(): void;
toggleSelect(dbid: number): void;
unregisterContextMenuCallback(id: string): void;
worldToClient(point: THREE.Vector3): THREE.Vector3
}

declare class Viewing$ViewingUtilities  {
getHitPoint(x: number, y: number): THREE.Vector3
}


      declare var npm$namespace$Private: {
        getHtmlTemplate: typeof Private$getHtmlTemplate,
        
      }
declare function Private$getHtmlTemplate(url: string, callback: (error: string, content: string) => void): void


declare class Private$GuiViewer3D mixins Viewing$Viewer3D {
constructor(container: HTMLElement, config?: {[key: string]: any}): this;
canvas: HTMLCanvasElement;
container: Element;
toolController: Viewing$ToolController;
impl: Private$Viewer3DImpl;
model: Viewing$Model;
navigation: Viewing$Navigation;
getCamera(): Viewing$UnifiedCamera;
getToolbar(create: boolean): UI$UI$ToolBar;
initialize(): any;
load(
urn: string,
sharedPropertyDbPath?: string,
onSuccesfullCallback?: () => void,
onErrorCallback?: (
errorCode: number,
errorMessage: string,
statusCode: number,
statusText: string) => void): any;
loadModel(
urn: string,
options?: any,
onSuccesfullCallback?: () => void,
onErrorCallback?: (
errorCode: number,
errorMessage: string,
statusCode: number,
statusText: string) => void): any;
start(path?: string, options?: {[key: string]: any}): any;
finish(): any;
setUsePivotAlways(value: boolean): any;
setGroundShadow(param: boolean): void;
setGroundReflection(param: boolean): void;
setOptimizeNavigation(param: boolean): void;
setQualityLevel(useSAO: boolean, useFXAA: boolean): void;
loadExtension(extensionId: string, options?: {[key: string]: any}): boolean;
unloadExtension(extensionId: string): boolean;
getExtension(extensionId: string): Viewing$Extension;
addPanel(panel: UI$UI$DockingPanel): boolean;
removePanel(panel: UI$UI$DockingPanel): boolean;
resizePanels(options: any): void;
addEventListener(event: string, callback: (event: any) => void, useCapture?: boolean): void;
removeEventListener(event: string, callback: (event: any) => void, useCapture?: boolean): void
}

declare interface Private$HitTestResult {
dbId: number,
face: THREE.Face3,
fragId: number,
intersectPoint: THREE.Vector3,
model: Viewing$Model
} 


      declare var npm$namespace$HudMessage: {
        displayMessage: typeof HudMessage$displayMessage,
dismiss: typeof HudMessage$dismiss,
        
      }
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
checkboxCallback?: (event: any) => void): void


declare function HudMessage$dismiss(): boolean


declare class Private$Viewer3DImpl  {
constructor(thecanvas: any, theapi: any): this;
visibilityManager: Private$VisibilityManager;
clientToViewport(clientX: number, clientY: number): THREE.Vector3;
hitTest(
clientX: number,
clientY: number,
ignoreTransparent: boolean): Private$HitTestResult;
hitTestViewport(vpVec: THREE.Vector3, ignoreTransparent: boolean): Private$HitTestResult;
initialize(): void;
setLightPreset(index: number, force?: boolean): void;
viewportToClient(viewportX: number, viewportY: number): THREE.Vector3;
getMaterials(): any;
getRenderProxy(model: Viewing$Model, fragId: number): any;
sceneUpdated(param: boolean): void
}

declare class Private$VisibilityManager  {
constructor(viewerImpl: any, model: any): this;
getHiddenNodes(): any;
getInstanceTree(): Viewing$InstanceTree;
getIsolatedNodes(): any;
hide(node: number | {[key: string]: any}): void;
isNodeVisible(dbId: number): boolean;
isolate(node: number | {[key: string]: any}): void;
isolateMultiple(nodeList: any[]): void;
isolateNone(): void;
setAllVisibility(visible: boolean): void;
setVisibilityOnNode(node: number | {[key: string]: any}, visible: boolean): void;
setNodeOff(node: number | {[key: string]: any}, isOff: boolean): void;
show(node: number | {[key: string]: any}): void;
toggleVisibility(node: number | {[key: string]: any}): void;
updateNodeVisibilityTracking(node: number | {[key: string]: any}, visible: boolean): void
}

declare class UI$Control  {
container: HTMLElement;
getId(): string;
isCollapsed(): boolean;
setCollapsed(collappsed: boolean): boolean;
setToolTip(toolTipText: string): void;
getToolTip(): string;
isVisible(): boolean;
setVisible(visible: boolean): boolean
}

declare class UI$Button mixins UI$Control {
constructor(id: string, options?: any): this;
setIcon(iconClass: string): void;
getState(): UI$Button.Button$State;
setState(state: UI$Button.Button$State): boolean;
onClick(event: MouseEvent): void;
onMouseOver(event: MouseEvent): void;
onMouseOut(event: MouseEvent): void
}

declare  class Button$State {
  constructor(...args: empty): mixed;
static +ACTIVE: Class<Button$State__ACTIVE> & Button$State__ACTIVE & 0;// 0
static +INACTIVE: Class<Button$State__INACTIVE> & Button$State__INACTIVE & 1;// 1
static +DISABLED: Class<Button$State__DISABLED> & Button$State__DISABLED & 2;// 2

}

declare class Button$State__ACTIVE mixins Button$State {}
declare class Button$State__INACTIVE mixins Button$State {}
declare class Button$State__DISABLED mixins Button$State {}


declare class UI$ControlGroup mixins UI$Control {
constructor(id: string, options?: any): this;
addClass(name: string): void;
addControl(control: UI$Control, options?: any): any;
removeControl(control: UI$Control | string): any;
getControl(controlId: string): UI$Control;
getNumberOfControls(): number
}

declare class UI$ToolBar mixins UI$ControlGroup {
addEventListener(event: string, callback: () => void): void;
getDimensions(): {
width: number,
height: number
}
}

declare interface ToolBar$Event {
SIZE_CHANGED: string,
CONTROL_REMOVED: string,
CONTROL_ADDED: string,
COLLAPSED_CHANGED: string,
VISIBILITY_CHANGED: string
} 

declare interface UI$ClientRect {
bottom: number,
height: number,
left: number,
right: number,
top: number,
width: number
} 

declare interface UI$ContentSize {
height: number,
width: number
} 

declare class UI$DockingPanel  {
constructor(parentContainer: any, id: string, title: string, options?: any): this;
closer: HTMLElement;
container: any;
content: any;
id: string;
scrollContainer: HTMLElement;
title: string;
titleTable: string;
initialize(): void;
uninitialize(): void;
setVisible(show: boolean): void;
isVisible(): boolean;
getContentSize(): UI$ContentSize;
resizeToContent(): void;
getContainerBoundingRect(): UI$ClientRect;
setTitle(text: string, options: any): void;
createCloseButton(): HTMLElement;
createScrollContainer(
options: {
heightAdjustment?: number,
left?: boolean,
marginTop?: number
}): void;
initializeMoveHandlers(mover: HTMLElement): void;
initializeCloseHandler(close: HTMLElement): void;
visibilityChanged(): void;
onStartMove(event: MouseEvent, startX: number, startY: number): void;
onEndMove(event: MouseEvent, endX: number, endY: number): void;
onMove(event: MouseEvent, currentX: number, currentY: number): void;
onTitleClick(event: ToolBar$Event): void;
onTitleDoubleClick(event: ToolBar$Event): void;
addVisibilityListener(callback: (state: boolean) => void): void;
addEventListener(
target: {[key: string]: any},
eventId: string,
callback: (event: any) => void): void;
removeEventListener(
target: {[key: string]: any},
eventId: string,
callback: (event: any) => void): boolean
}
    }
