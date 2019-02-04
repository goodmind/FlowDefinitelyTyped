declare module 'yandex-maps' {
        
      declare var npm$namespace$ymaps: {
        ready: typeof ymaps$ready,
        
      }
declare interface ymaps$IClassConstructor<T> {
new (): T
} 

declare type ymaps$ControlSingleKey = "fullscreenControl"
| "geolocationControl"
| "routeEditor"
| "rulerControl"
| "searchControl"
| "trafficControl"
| "typeSelector"
| "zoomControl";

declare type ymaps$ControlSetKey = "smallMapDefaultSet" | "mediumMapDefaultSet" | "largeMapDefaultSet" | "default";

declare type ymaps$ControlKey = ymaps$ControlSingleKey | ymaps$ControlSetKey;

declare type ymaps$OverlayKey = "default#placemark"
| "default#pin"
| "default#circle"
| "default#rectangle"
| "default#polyline"
| "default#polygon"
| "hotspot#placemark"
| "hotspot#circle"
| "hotspot#rectangle"
| "hotspot#polyline"
| "hotspot#polygon"
| "html#balloon"
| "html#hint"
| "html#placemark"
| "html#rectangle"
| string
| ymaps$IClassConstructor<ymaps$IOverlay>
| ((
geometry: ymaps$IPixelLineStringGeometry,
data: ymaps$IDataManager | {[key: string]: any},
options: {[key: string]: any}) => vow$Promise<string | ymaps$IClassConstructor<ymaps$IOverlay>>);

declare type ymaps$InteractivityModelKey = "default#opaque"
| "default#geoObject"
| "default#layer"
| "default#transparent"
| "default#silent"
| string;

declare type ymaps$PresetKey = string;


      declare var npm$namespace$behavior: {
        
        storage: typeof behavior$storage,
      }
declare class behavior$DblClickZoom mixins ymaps$IBehavior {
constructor(options?: behavior$IDblClickZoomOptions): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
disable(): void;
enable(): void;
isEnabled(): boolean;
getParent(): ymaps$IControlParent | null;
setParent(parent: ymaps$IControlParent): this
}

declare type behavior$IDblClickZoomOptions = {
centering?: boolean,
duration?: number
} & ymaps$IMapMarginOptions


declare class behavior$Drag mixins ymaps$IBehavior {
constructor(options?: behavior$IDragOptions): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
disable(): void;
enable(): void;
isEnabled(): boolean;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this
}

declare interface behavior$IDragOptions {
actionCursor?: string,
cursor?: string,
inertia?: boolean,
inertiaDuration?: number,
tremor?: number
} 

declare class behavior$LeftMouseButtonMagnifier mixins ymaps$IBehavior {
constructor(options?: behavior$ILeftMouseButtonMagnifierOptions): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
disable(): void;
enable(): void;
isEnabled(): boolean;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this
}

declare interface behavior$ILeftMouseButtonMagnifierOptions {
actionCursor?: string,
cursor?: string,
duration?: number
} 

declare class behavior$MultiTouch mixins ymaps$IBehavior {
constructor(options?: behavior$IMultiTouchOptions): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
disable(): void;
enable(): void;
isEnabled(): boolean;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this
}

declare interface behavior$IMultiTouchOptions {
tremor?: number
} 

declare class behavior$RightMouseButtonMagnifier mixins ymaps$IBehavior {
constructor(options?: behavior$IRightMouseButtonMagnifierOptions): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
disable(): void;
enable(): void;
isEnabled(): boolean;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this
}

declare interface behavior$IRightMouseButtonMagnifierOptions {
actionCursor?: string,
duration?: number
} 

declare class behavior$RouteEditor mixins ymaps$IBehavior {
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
disable(): void;
enable(): void;
isEnabled(): boolean;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getRoute(): router$router$Route;
getState(): string;
setState(state: string | null): void
}

declare class behavior$Ruler mixins ymaps$IBehavior {
constructor(options?: behavior$IRulerOptions): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
disable(): void;
enable(): void;
isEnabled(): boolean;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
close(): boolean;
getState(): string;
setState(state: string | null): void
}

declare interface behavior$IRulerOptions {
balloonAutoPan?: boolean
} 

declare class behavior$ScrollZoom mixins ymaps$IBehavior {
constructor(options?: behavior$IScrollZoomOptions): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
disable(): void;
enable(): void;
isEnabled(): boolean;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this
}

declare interface behavior$IScrollZoomOptions {
maximumDelta?: number,
speed?: number
} 

declare var behavior$storage: util$util$Storage;

declare class clusterer$Balloon mixins ymaps$IBalloonManager<ymaps$Clusterer> {
constructor(clusterer: ymaps$Clusterer): this;
events: ymaps$IEventManager;
autoPan(): vow$Promise<ymaps$Clusterer>;
close(force?: boolean): vow$Promise<ymaps$Clusterer>;
destroy(): void;
getData(): {[key: string]: any} | null;
getOptions(): ymaps$IOptionManager | null;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getPosition(): number[] | null;
isOpen(): boolean;
open(
position?: number[],
data?: {[key: string]: any} | string | HTMLElement,
options?: {[key: string]: any}): vow$Promise<ymaps$Clusterer>;
setData(
data: {[key: string]: any} | string | HTMLElement): vow$Promise<ymaps$Clusterer>;
setOptions(options: {[key: string]: any}): vow$Promise<ymaps$Clusterer>;
setPosition(position: number[]): vow$Promise<ymaps$Clusterer>
}

declare class clusterer$Hint mixins ymaps$IHintManager<ymaps$Clusterer> {
constructor(clusterer: ymaps$Clusterer): this;
events: ymaps$IEventManager;
close(force?: boolean): vow$Promise<ymaps$Clusterer>;
destroy(): void;
getData(): {[key: string]: any} | null;
getOptions(): ymaps$IOptionManager | null;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getPosition(): number[] | null;
isOpen(): boolean;
open(
position?: number[],
data?: {[key: string]: any} | string | HTMLElement,
options?: {[key: string]: any}): vow$Promise<ymaps$Clusterer>;
setData(
data: {[key: string]: any} | string | HTMLElement): vow$Promise<ymaps$Clusterer>;
setOptions(options: {[key: string]: any}): vow$Promise<ymaps$Clusterer>;
setPosition(position: number[]): vow$Promise<ymaps$Clusterer>
}

declare class collection$Item mixins ymaps$IChildOnMap, ymaps$ICustomizable, ymaps$IEventEmitter, ymaps$IParentOnMap {
constructor(options?: {[key: string]: any}): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getMap(): ymaps$Map;
onAddToMap(map: ymaps$Map): void;
onRemoveFromMap(oldMap: ymaps$Map): void
}

declare class control$Button mixins ymaps$ICustomizable, ymaps$ISelectableControl {
constructor(parameters?: control$IButtonParameters | string): this;
options: ymaps$IOptionManager;
events: ymaps$IEventManager;
data: data$cursor$Manager;
state: data$cursor$Manager;
deselect(): void;
disable(): void;
enable(): void;
isEnabled(): boolean;
isSelected(): boolean;
select(): void;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this
}

declare interface control$IBaseButtonParametersOptions {
adjustMapMargin?: boolean,
float?: "none" | "left" | "right",
floatIndex?: number,
layout?: ymaps$IClassConstructor<ymaps$ISelectableControlLayout> | string,
maxWidth?: number[][] | number[] | number,
position?: {
bottom?: number | string,
left?: number | string,
right?: number | string,
top?: number | string
},
visible?: boolean
} 

declare interface control$IButtonParameters {
data?: {
content?: string,
image?: string,
title?: string
},
options?: control$IBaseButtonParametersOptions & {
selectOnClick?: boolean,
size?: "auto" | "small" | "medium" | "large"
},
state?: {
enabled?: boolean,
selected?: boolean
}
} 

declare class control$FullscreenControl mixins control$Button {
constructor(parameters?: control$IFullscreenControlParameters): this;
enterFullscreen(): void;
exitFullscreen(): void
}

declare interface control$IFullscreenControlParameters {
data?: {
title?: string
},
options?: control$IBaseButtonParametersOptions & {
collapseOnBlur?: boolean,
expandOnClick?: boolean,
popupFloat?: "left" | "right"
},
state?: {
expanded?: boolean
}
} 

declare class control$GeolocationControl mixins control$Button {
constructor(parameters?: control$IGeolocationControlParameters): this
}

declare type control$IGeolocationControlParameters = {
data?: {
image?: string,
title?: string
},
options?: control$IBaseButtonParametersOptions
} & control$IButtonParameters


declare class control$ListBox mixins ymaps$ICollection, ymaps$IControl, ymaps$ICustomizable {
constructor(parameters?: control$IListBoxParameters): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
data: data$cursor$Manager;
state: data$cursor$Manager;
add(object: {[key: string]: any}): this;
getIterator(): ymaps$IIterator;
remove(object: {[key: string]: any}): this;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this
}

declare type control$IListBoxParameters = {
options?: control$IBaseButtonParametersOptions & {
noPlacemark?: boolean
}
} & control$IButtonParameters


declare class control$ListBoxItem mixins ymaps$ICustomizable, ymaps$ISelectableControl {
constructor(parameters?: control$IListBoxItemParameters): this;
options: ymaps$IOptionManager;
events: ymaps$IEventManager;
data: data$cursor$Manager;
state: data$cursor$Manager;
deselect(): void;
disable(): void;
enable(): void;
isEnabled(): boolean;
isSelected(): boolean;
select(): void;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getMap(): ymaps$Map
}

declare interface control$IListBoxItemParameters {
data?: {
content?: string
},
options?: {
layout?: string | ymaps$IClassConstructor<ymaps$ISelectableControlLayout>,
selectableLayout?: string | ymaps$IClassConstructor<ymaps$ISelectableControlLayout>,
selectOnClick?: boolean,
separatorLayout?: string | ymaps$IClassConstructor<ymaps$ISelectableControlLayout>,
type?: "selectable" | "separator",
visible?: boolean
},
state?: {
selected?: boolean
}
} 

declare class control$Manager  {
constructor(map: ymaps$Map, controls?: Array<string | ymaps$IControl>, options?: control$IManagerOptions): this;
events: event$control$Manager;
options: option$control$Manager;
state: data$control$Manager;
add(
control: ymaps$IControl | ymaps$ControlKey,
options?: control$IManagerControlOptions): this;
each(
callback: (control: ymaps$IControl) => void,
context: {[key: string]: any}): this;
get(index: number | string): ymaps$IControl | null;
getChildElement(control: ymaps$IControl): vow$Promise<HTMLElement>;
getContainer(): HTMLElement;
getMap(): ymaps$Map;
indexOf(childToFind: ymaps$IControl | string): number;
remove(control: ymaps$IControl | string): this
}

declare interface control$IManagerOptions {
margin?: number,
pane?: ymaps$IPane,
states?: string[]
} 

declare interface control$IManagerControlOptions {
float?: "none" | "left" | "right",
floatIndex?: number,
position?: {
bottom?: number | string,
left?: number | string,
right?: number | string,
top?: number | string
}
} 

declare class control$RouteButton mixins ymaps$IControl, ymaps$ICustomizable {
constructor(parameters?: control$IRouteButtonParameters): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
routePanel: ymaps$IRoutePanel;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this
}

declare interface control$IRouteButtonParameters {
options?: {
adjustMapMargin?: boolean,
collapseOnBlur?: boolean,
float?: "none" | "left" | "right",
floatIndex?: number,
popupAnimate?: boolean,
popupFloat?: "auto" | "left" | "right",
popupWidth?: string,
position?: {
bottom?: number | string,
left?: number | string,
right?: number | string,
top?: number | string
},
size?: "auto" | "small" | "medium" | "large",
visible?: boolean
},
state?: {
expanded?: boolean
}
} 

declare class control$RouteEditor mixins control$Button {
constructor(parameters?: control$IRouteEditorParameters): this;
getRoute(): router$router$Route
}

declare interface control$IRouteEditorParameters {
data?: {
image?: string,
title?: string
},
options?: control$IBaseButtonParametersOptions,
state?: {}
} 

declare class control$RulerControl mixins control$Button {
constructor(parameters?: control$IRulerControlParameters): this
}

declare interface control$IRulerControlParameters {
data?: {},
options?: {
adjustMapMargin?: boolean,
position?: {
bottom?: number | string,
left?: number | string,
right?: number | string,
top?: number | string
},
scaleLine?: boolean,
visible?: boolean
},
state?: {}
} 

declare class control$SearchControl mixins ymaps$IControl, ymaps$ICustomizable {
constructor(parameters?: control$ISearchControlParameters): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
state: data$control$Manager;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
clear(): void;
getMap(): ymaps$Map;
getRequestString(): string;
getResponseMetaData(): {[key: string]: any};
getResult(index: number): vow$Promise<{[key: string]: any}>;
getResultsArray(): {[key: string]: any}[];
getResultsCount(): number;
getSelectedIndex(): number;
hideResult(): void;
search(request: string): vow$Promise<void>;
showResult(index: number): this
}

declare interface control$ISearchControlParameters {
data?: {},
options?: {
adjustMapMargin?: boolean,
boundedBy?: number[][],
fitMaxWidth?: boolean,
float?: "none" | "left" | "right",
floatIndex?: number,
formLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
kind?: "house"
| "street"
| "metro"
| "district"
| "locality",
layout?: string | ymaps$IClassConstructor<ymaps$ISearchControlLayout>,
maxWidth?: number[][] | number[] | number,
noCentering?: boolean,
noPlacemark?: boolean,
noPopup?: boolean,
noSelect?: boolean,
noSuggestPanel?: boolean,
placeholderContent?: string,
popupItemLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
popupLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
position?: {
bottom?: number | string,
left?: number | string,
right?: number | string,
top?: number | string
},
provider?: ymaps$IGeocodeProvider | "yandex#map" | "yandex#search",
searchCoordOrder?: "latlong" | "longlat",
size?: "auto" | "small" | "medium" | "large",
strictBounds?: boolean,
suppressYandexSearch?: boolean,
useMapBounds?: boolean,
zoomMargin?: number,
visible?: boolean
},
state?: {}
} 

declare class data$Manager mixins ymaps$IDataManager, ymaps$IFreezable {
constructor(data?: {[key: string]: any}): this;
events: ymaps$IEventManager;
get(path: string, defaultValue: {[key: string]: any}): {[key: string]: any};
getAll(): {[key: string]: any};
set(path: {[key: string]: any} | string, value: {[key: string]: any}): this;
setAll(): this;
unset(path: {[key: string]: any} | string): this;
unsetAll(): this;
freeze(): ymaps$IFreezable;
isFrozen(): boolean;
unfreeze(): ymaps$IFreezable;
add(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
getParent(): ymaps$IEventManager | null;
group(): ymaps$IEventGroup;
remove(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
setParent(parent: ymaps$IEventManager | null): this;
fire(type: string, eventobject: {[key: string]: any} | ymaps$IEvent): this
}

declare class event$Manager mixins ymaps$IEventManager {
constructor(params?: {
context?: {[key: string]: any},
controllers?: ymaps$IEventWorkflowController[],
parent?: ymaps$IEventManager
}): this;
add(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
getParent(): ymaps$IEventManager | null;
group(): ymaps$IEventGroup;
remove(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
setParent(parent: ymaps$IEventManager | null): this;
fire(type: string, eventobject: {[key: string]: any} | ymaps$IEvent): this;
createEventobject(
type: string,
event: {[key: string]: any},
target: {[key: string]: any}): ymaps$Event;
once(
types: string[][] | string[] | string,
callback: (event: ymaps$IEvent) => any,
context?: {[key: string]: any},
priority?: number): this
}

declare class base$LineString mixins ymaps$IBaseLineStringGeometry {
events: ymaps$IEventManager;
static fromEncodedCoordinates(encodedCoordinates: string): geometry$base$LineString;
static toEncodedCoordinates(geometry: geometry$base$LineString): string;
getBounds(): number[][] | null;
getType(): string;
get(index: number): number[];
getChildGeometry(index: number): ymaps$IPointGeometryAccess;
getClosest(anchorPosition: number[]): {[key: string]: any};
getCoordinates(): number[][];
getLength(): number;
insert(index: number, coordinates: number[][]): ymaps$ILineStringGeometryAccess;
remove(index: number): number[];
remove(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
set(index: number, coordinates: number[]): ymaps$ILineStringGeometryAccess;
setCoordinates(coordinates: number[]): ymaps$ILineStringGeometryAccess;
splice(index: number, length: number): number[][];
freeze(): ymaps$IFreezable;
isFrozen(): boolean;
unfreeze(): ymaps$IFreezable;
add(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
getParent(): {[key: string]: any} | null;
group(): ymaps$IEventGroup;
setParent(parent: ymaps$IEventManager | null): this;
fire(type: string, eventobject: {[key: string]: any} | ymaps$IEvent): this
}

declare class base$Point mixins ymaps$IBasePointGeometry {
events: ymaps$IEventManager;
getBounds(): number[][] | null;
getType(): string;
getCoordinates(): number[] | null;
setCoordinates(coordinates: number[] | null): this
}

declare class base$Polygon mixins ymaps$IBasePointGeometry {
constructor(coordinates?: number[][][], fillRule?: "evenOdd" | "nonZero"): this;
events: ymaps$IEventManager;
static fromEncodedCoordinates(encodedCoordinates: string): base$Polygon;
static toEncodedCoordinates(geometry: base$Polygon): string;
contains(position: number[]): boolean;
freeze(): ymaps$IFreezable;
get(index: number): number[][];
getBounds(): number[][] | null;
getChildGeometry(index: number): ymaps$ILinearRingGeometryAccess;
getClosest(anchorPosition: number[]): {[key: string]: any};
getCoordinates(): number[] | null;
getFillRule(): string;
getLength(): number;
getType(): string;
insert(index: number, path: number[][]): ymaps$IPolygonGeometryAccess;
isFrozen(): boolean;
remove(index: number): ymaps$ILinearRingGeometryAccess;
set(index: number, path: number[][]): ymaps$IPolygonGeometryAccess;
setCoordinates(coordinates: number[] | null): this;
setFillRule(fillRule: string): ymaps$IPolygonGeometryAccess;
splice(index: number, number: number): ymaps$ILinearRingGeometryAccess[];
unfreeze(): ymaps$IFreezable
}

declare class geometry$LineString mixins ymaps$ILineStringGeometry {
constructor(coordinates?: number[][], options?: {
coordRendering?: "shortestPath" | "straightPath",
geodesic?: boolean,
pixelRendering?: "jumpy" | "static",
projection?: ymaps$IProjection,
simplification?: boolean
}): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
static fromEncodedCoordinates(encodedCoordinates: string): geometry$LineString;
static toEncodedCoordinates(geometry: geometry$LineString): string;
getMap(): ymaps$Map | null;
getPixelGeometry(options?: {[key: string]: any}): ymaps$IPixelGeometry;
setMap(map: ymaps$Map): void;
getBounds(): number[][] | null;
getType(): string;
get(index: number): number[];
getChildGeometry(index: number): ymaps$IPointGeometryAccess;
getClosest(anchorPosition: number[]): {[key: string]: any};
getCoordinates(): number[][];
getLength(): number;
insert(index: number, coordinates: number[][]): ymaps$ILineStringGeometryAccess;
remove(index: number): number[];
remove(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
set(index: number, coordinates: number[]): ymaps$ILineStringGeometryAccess;
setCoordinates(coordinates: number[]): ymaps$ILineStringGeometryAccess;
splice(index: number, length: number): number[][];
freeze(): ymaps$IFreezable;
isFrozen(): boolean;
unfreeze(): ymaps$IFreezable;
add(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
getParent(): {[key: string]: any} | null;
group(): ymaps$IEventGroup;
setParent(parent: ymaps$IEventManager | null): this;
fire(type: string, eventobject: {[key: string]: any} | ymaps$IEvent): this
}

declare class geometry$Point mixins ymaps$IPointGeometry {
constructor(coordinates?: number[] | null): this;
options: ymaps$IOptionManager;
events: ymaps$IEventManager;
getMap(): ymaps$Map | null;
getPixelGeometry(options?: {[key: string]: any}): ymaps$IPixelGeometry;
setMap(map: ymaps$Map): void;
getBounds(): number[][] | null;
getType(): string;
getCoordinates(): number[] | null;
setCoordinates(coordinates: number[] | null): this
}

declare class geometry$Polygon mixins ymaps$IPolygonGeometry {
constructor(coordinates?: number[][][], fillRule?: "evenOdd" | "nonZero", options?: {[key: string]: any}): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
static fromEncodedCoordinates(encodedCoordinates: string): geometry$Polygon;
static toEncodedCoordinates(geometry: geometry$Polygon): string;
add(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
contains(position: number[]): boolean;
fire(type: string, eventobject: {[key: string]: any} | ymaps$IEvent): this;
freeze(): ymaps$IFreezable;
get(index: number): number[][];
getBounds(): number[][] | null;
getChildGeometry(index: number): ymaps$ILinearRingGeometryAccess;
getClosest(anchorPosition: number[]): {[key: string]: any};
getCoordinates(): number[][][];
getFillRule(): string;
getLength(): number;
getMap(): ymaps$Map | null;
getParent(): {[key: string]: any} | null;
getPixelGeometry(options?: {[key: string]: any}): ymaps$IPixelGeometry;
getType(): string;
group(): ymaps$IEventGroup;
insert(index: number, path: number[][]): ymaps$IPolygonGeometryAccess;
isFrozen(): boolean;
remove(index: number): ymaps$ILinearRingGeometryAccess;
set(index: number, path: number[][]): ymaps$IPolygonGeometryAccess;
setCoordinates(coordinates: number[][][]): ymaps$IPolygonGeometryAccess;
setFillRule(fillRule: string): ymaps$IPolygonGeometryAccess;
setMap(map: ymaps$Map): void;
setParent(parent: {[key: string]: any} | null): this;
splice(index: number, number: number): ymaps$ILinearRingGeometryAccess[];
unfreeze(): ymaps$IFreezable
}

declare class geometryEditor$Circle mixins ymaps$IGeometryEditor {
constructor(geometry: ymaps$ICircleGeometry, options?: {[key: string]: any}): this;
events: ymaps$IEventManager;
geometry: ymaps$IGeometry;
options: ymaps$IOptionManager;
state: ymaps$IDataManager;
startDrawing(): vow$vow$Promise;
startEditing(): void;
stopDrawing(): vow$vow$Promise;
stopEditing(): void
}

declare class geometryEditor$LineString mixins ymaps$IGeometryEditor {
constructor(geometry: ymaps$ILineStringGeometry, options?: {[key: string]: any}): this;
events: ymaps$IEventManager;
geometry: ymaps$IGeometry;
options: ymaps$IOptionManager;
state: ymaps$IDataManager;
getModel(): vow$vow$Promise;
getModelSync(): model$model$RootLineString | null;
getView(): vow$vow$Promise;
getViewSync(): view$masstransit$Path | null;
startDrawing(): vow$vow$Promise;
startEditing(): vow$vow$Promise;
startFraming(): vow$vow$Promise;
stopDrawing(): void;
stopEditing(): void;
stopFraming(): void
}

declare class model$ChildLinearRing mixins model$ChildLineString {}

declare class model$ChildLineString mixins ymaps$IGeometryEditorChildModel {
editor: ymaps$IGeometryEditor;
events: ymaps$IEventManager;
geometry: ymaps$IBaseGeometry;
destroy(): void;
getAllVerticesNumber(): number;
getEdgeModels(): view$Edge[];
getIndex(): number;
getParent(): ymaps$IGeometryEditorModel;
getPixels(): number[];
getVertexModels(): model$ChildVertex[];
setIndex(index: number): void;
setPixels(pixels: number[]): void;
spliceVertices(start: number, deleteCount: number): number[][]
}

declare class model$ChildVertex mixins ymaps$IGeometryEditorChildModel {
editor: ymaps$IGeometryEditor;
events: ymaps$IEventManager;
geometry: ymaps$IBaseGeometry;
destroy(): void;
getAllVerticesNumber(): number;
getIndex(): number;
getNextVertex(): model$ChildVertex | null;
getParent(): ymaps$IGeometryEditorModel;
getPixels(): number[];
getPrevVertex(): model$ChildVertex | null;
setGlobalPixels(pixels: number[]): void;
setIndex(index: number): void;
setNextVertex(nextVertex: model$ChildVertex): void;
setPixels(pixels: number[]): void;
setPrevVertex(prevVertex: model$ChildVertex): void
}

declare class model$Edge mixins ymaps$IGeometryEditorRootModel {
events: ymaps$IEventManager;
destroy(): void;
getNextVertex(): model$ChildVertex | null;
getPixels(): number[];
getPrevVertex(): model$ChildVertex | null;
setNextVertex(nextVertex: model$ChildVertex): void;
setPrevVertex(prevVertex: model$ChildVertex): void
}

declare class model$EdgeGeometry mixins ymaps$IGeometry {
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
getBounds(): number[][] | null;
getMap(): ymaps$Map | null;
getPixelGeometry(options?: {[key: string]: any}): ymaps$IPixelGeometry;
getType(): string;
setMap(map: ymaps$Map): void
}

declare class model$RootLineString mixins ymaps$IGeometryEditorRootModel {
events: ymaps$IEventManager;
destroy(): void;
getAllVerticesNumber(): number;
getPixels(): number[];
getVertexModels(): model$ChildVertex[];
spliceVertices(start: number, deleteCount: number): number[][]
}

declare class model$RootPolygon mixins ymaps$IGeometryEditorRootModel {
events: ymaps$IEventManager;
destroy(): void;
getAllVerticesNumber(): number;
getPathModels(): model$ChildLinearRing[];
getPixels(): number[];
splicePaths(start: number, deleteCount: number): number[][]
}

declare class geometryEditor$Point mixins ymaps$IGeometryEditor {
events: ymaps$IEventManager;
geometry: ymaps$IGeometry;
options: ymaps$IOptionManager;
state: ymaps$IDataManager;
startDrawing(): vow$vow$Promise;
startEditing(): void;
stopDrawing(): vow$vow$Promise;
stopEditing(): void
}

declare class geometryEditor$Polygon mixins ymaps$IGeometryEditor {
constructor(geometry: ymaps$IPolygonGeometry, options: {[key: string]: any}): this;
events: ymaps$IEventManager;
geometry: ymaps$IGeometry;
options: ymaps$IOptionManager;
state: ymaps$IDataManager;
getModel(): vow$vow$Promise;
getModelSync(): model$model$RootPolygon | null;
getView(): vow$vow$Promise;
getViewSync(): view$view$MultiPath | null;
startDrawing(): vow$vow$Promise;
startEditing(): vow$vow$Promise;
startFraming(): vow$vow$Promise;
stopDrawing(): void;
stopEditing(): void;
stopFraming(): void
}

declare class view$Edge  {
getPlacemark(): ymaps$GeoObject
}

declare class view$MultiPath  {
getEdgePlacemarks(): ymaps$GeoObjectCollection;
getPathViews(): masstransit$Path[];
getVertexPlacemarks(): ymaps$GeoObjectCollection
}

declare class view$Path  {
getEdgePlacemarks(): ymaps$GeoObjectCollection;
getEdgeViews(): view$Edge[];
getVertexPlacemarks(): ymaps$GeoObjectCollection;
getVertexViews(): view$Vertex[]
}

declare class view$Vertex  {
getPlacemark(): ymaps$GeoObject
}

declare class geoObject$Balloon mixins ymaps$IBalloonManager<ymaps$GeoObject> {
constructor(geoObject: ymaps$GeoObject): this;
events: ymaps$IEventManager;
autoPan(): vow$Promise<ymaps$GeoObject>;
close(force?: boolean): vow$Promise<ymaps$GeoObject>;
destroy(): void;
getData(): {[key: string]: any} | null;
getOptions(): ymaps$IOptionManager | null;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getPosition(): number[] | null;
isOpen(): boolean;
open(
position?: number[],
data?: {[key: string]: any} | string | HTMLElement,
options?: {[key: string]: any}): vow$Promise<ymaps$GeoObject>;
setData(
data: {[key: string]: any} | string | HTMLElement): vow$Promise<ymaps$GeoObject>;
setOptions(options: {[key: string]: any}): vow$Promise<ymaps$GeoObject>;
setPosition(position: number[]): vow$Promise<ymaps$GeoObject>
}

declare class geoObject$Hint mixins ymaps$IHintManager<ymaps$GeoObject> {
constructor(geoObject: ymaps$GeoObject): this;
events: ymaps$IEventManager;
close(force?: boolean): vow$Promise<ymaps$GeoObject>;
destroy(): void;
getData(): {[key: string]: any} | null;
getOptions(): ymaps$IOptionManager | null;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getPosition(): number[] | null;
isOpen(): boolean;
open(
position?: number[],
data?: {[key: string]: any} | string | HTMLElement,
options?: {[key: string]: any}): vow$Promise<ymaps$GeoObject>;
setData(
data: {[key: string]: any} | string | HTMLElement): vow$Promise<ymaps$GeoObject>;
setOptions(options: {[key: string]: any}): vow$Promise<ymaps$GeoObject>;
setPosition(position: number[]): vow$Promise<ymaps$GeoObject>
}

declare class geoObject$Sequence mixins ymaps$IGeoObject, ymaps$IGeoObjectSequence {
constructor(geoObject: ymaps$GeoObject): this;
geometry: ymaps$IGeometry | null;
properties: ymaps$IDataManager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getMap(): ymaps$Map;
each(
callback: (geoObject: ymaps$IGeoObject) => void,
context?: {[key: string]: any}): void;
get(index: number): ymaps$IGeoObject;
getBounds(): number[][] | null;
getIterator(): ymaps$IIterator;
getLength(): number;
getPixelBounds(): number[][] | null;
indexOf(geoObject: ymaps$IGeoObject): number
}

declare class templateBased$Base mixins ymaps$ILayout {
constructor(data: {[key: string]: any}): this;
events: ymaps$IEventManager;
destroy(): void;
getData(): {[key: string]: any};
getParentElement(): HTMLElement;
getShape(): ymaps$IShape | null;
isEmpty(): boolean;
setData(data: {[key: string]: any}): void;
setParentElement(parent: HTMLElement | null): this;
build(): void;
clear(): void;
onSublayoutSizeChange(
sublayoutInfo: {[key: string]: any},
nodeSizeByContent: {[key: string]: any}): void;
rebuild(): void
}

declare class action$Manager mixins ymaps$IEventEmitter {
constructor(map: ymaps$Map): this;
events: ymaps$IEventManager;
breakTick(): void;
execute(action: ymaps$IMapAction): void;
getCurrentState(): {[key: string]: any};
getMap(): ymaps$Map;
setCorrection(userFunction: () => void): void;
stop(): void
}

declare class behavior$Manager mixins ymaps$ICustomizable, ymaps$IEventEmitter, ymaps$IParentOnMap {
constructor(map: ymaps$Map, behaviors?: string[][] | string[], options?: {[key: string]: any}): this;
options: ymaps$IOptionManager;
events: ymaps$IEventManager;
getMap(): ymaps$Map;
disable(behaviors: string[][] | string[] | string): this;
enable(behaviors: string[][] | string[] | string): this;
get(behaviorName: string): ymaps$IBehavior;
isEnabled(behaviorName: string): boolean
}

declare class layer$Manager mixins ymaps$ILayer, ymaps$IMapObjectCollection {
constructor(map: ymaps$Map, options?: {
trafficImageZIndex?: number,
trafficInfoZIndex?: number,
trafficJamZIndex?: number
}): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
add(object: {[key: string]: any}): this;
getIterator(): ymaps$IIterator;
remove(object: {[key: string]: any}): this;
getMap(): ymaps$Map
}

declare class margin$Accessor  {
constructor(screenArea: {[key: string]: any}): this;
getArea(): {[key: string]: any};
remove(): this;
setArea(screenArea: {[key: string]: any}): this
}

declare class margin$Manager  {
constructor(map: ymaps$Map): this;
addArea(screenArea: {[key: string]: any}): margin$Accessor;
destroy(): this;
getMargin(): number[];
getOffset(): number[];
setDefaultMargin(margin: number[][] | number[] | number): void
}

declare class pane$Manager  {
constructor(map: ymaps$Map): this;
append(key: string, pane: ymaps$IPane): void;
destroy(): void;
get(key: string): ymaps$IPane | null;
getLower(): string;
getUpper(): string;
insertBefore(key: string, pane: ymaps$IPane, referenceKey: string): void;
remove(pane: ymaps$IPane): void
}

declare class map$Balloon mixins ymaps$IBalloonManager<map$Balloon> {
constructor(map: ymaps$Map): this;
events: ymaps$IEventManager;
autoPan(): vow$Promise<map$Balloon>;
close(force?: boolean): vow$Promise<map$Balloon>;
destroy(): void;
getData(): {[key: string]: any} | null;
getOptions(): ymaps$IOptionManager | null;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getPosition(): number[] | null;
isOpen(): boolean;
open(
position?: number[],
data?: {[key: string]: any} | string | HTMLElement,
options?: {[key: string]: any}): vow$Promise<map$Balloon>;
setData(data: {[key: string]: any} | string | HTMLElement): vow$Promise<map$Balloon>;
setOptions(options: {[key: string]: any}): vow$Promise<map$Balloon>;
setPosition(position: number[]): vow$Promise<map$Balloon>
}

declare class map$Container mixins ymaps$IDomEventEmitter {
constructor(parentElement: string | HTMLElement): this;
events: ymaps$IEventManager;
enterFullscreen(): void;
exitFullscreen(): void;
fitToViewport(preservePixelPosition?: boolean): void;
getElement(): HTMLElement;
getOffset(): number[];
getParentElement(): HTMLElement;
getSize(): number[];
isFullscreen(): boolean
}

declare class map$Converter  {
constructor(map: ymaps$Map): this;
globalToPage(globalPixelPoint: number[]): number[];
pageToGlobal(pagePixelPoint: number[]): number[]
}

declare class map$Copyrights  {
constructor(map: ymaps$Map): this;
add(
customCopyrights: string | HTMLElement | Array<string | HTMLElement>): ymaps$ICopyrightsAccessor;
addProvider(provider: ymaps$ICopyrightsProvider): this;
get(point?: number[], zoom?: number): vow$Promise<Array<string | HTMLElement>>;
getPromoLink(): string;
removeProvider(provider: ymaps$ICopyrightsProvider): this
}

declare class map$GeoObjects mixins ymaps$IGeoObjectCollection {
constructor(map: ymaps$Map, options?: {[key: string]: any}): this;
options: ymaps$IOptionManager;
events: ymaps$IEventManager;
add(child: ymaps$IGeoObject, index?: number): this;
each(
callback: (object: ymaps$IGeoObject) => void,
context: {[key: string]: any}): void;
get(index: number): ymaps$IGeoObject;
getBounds(): number[][] | null;
getIterator(): ymaps$IIterator;
getLength(): number;
getPixelBounds(): number[][] | null;
indexOf(object: ymaps$IGeoObject): number;
remove(child: ymaps$IGeoObject): this;
removeAll(): this;
set(index: number, child: ymaps$IGeoObject): this;
splice(index: number, length: number): this;
getMap(): ymaps$Map
}

declare class map$Hint mixins ymaps$IHintManager<map$Hint> {
constructor(map: ymaps$Map): this;
events: ymaps$IEventManager;
close(force?: boolean): vow$Promise<map$Hint>;
destroy(): void;
getData(): {[key: string]: any} | null;
getOptions(): ymaps$IOptionManager | null;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getPosition(): number[] | null;
isOpen(): boolean;
open(
position?: number[],
data?: {[key: string]: any} | string | HTMLElement,
options?: {[key: string]: any}): vow$Promise<map$Hint>;
setData(data: {[key: string]: any} | string | HTMLElement): vow$Promise<map$Hint>;
setOptions(options: {[key: string]: any}): vow$Promise<map$Hint>;
setPosition(position: number[]): vow$Promise<map$Hint>
}

declare class map$ZoomRange mixins ymaps$IEventEmitter {
constructor(map: ymaps$Map, constraints: number[]): this;
events: ymaps$IEventManager;
get(coords?: number[]): vow$Promise<number[]>;
getCurrent(): number[]
}

declare class driving$Path mixins ymaps$IGeoObject {
geometry: ymaps$IGeometry | null;
properties: data$pane$Manager;
state: ymaps$IDataManager;
model: masstransit$PathModel;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): {[key: string]: any} | null;
setParent(parent: {[key: string]: any}): this;
getMap(): ymaps$Map;
getSegments(): ymaps$GeoObjectCollection
}

declare class driving$PathModel mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
properties: data$pane$Manager;
route: masstransit$RouteModel;
destroy(): void;
getSegments(): driving$SegmentModel[];
getType(): string;
update(pathJson: {[key: string]: any}): void
}

declare class driving$Route mixins ymaps$IGeoObject {
geometry: ymaps$IGeometry | null;
properties: ymaps$IDataManager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): {[key: string]: any} | null;
setParent(parent: {[key: string]: any}): this;
getMap(): ymaps$Map;
getPaths(): ymaps$GeoObjectCollection
}

declare class driving$RouteModel mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
multiRoute: multiRouter$MultiRouteModel;
properties: data$pane$Manager;
destroy(): void;
getPaths(): driving$PathModel[];
update(routeJson: {[key: string]: any}): void;
getType(): string
}

declare class driving$Segment mixins ymaps$IGeoObject {
geometry: ymaps$IGeometry | null;
properties: data$pane$Manager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): {[key: string]: any} | null;
setParent(parent: {[key: string]: any}): this;
getMap(): ymaps$Map
}

declare class driving$SegmentModel mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
geometry: geometry$base.geometryEditor$LineString;
path: driving$PathModel;
destroy(): void;
getType(): string;
getViaPoints(): multiRouter$ViaPointModel[];
update(segmentJson: {[key: string]: any}): void
}

declare class masstransit$Path mixins ymaps$IGeoObject {
geometry: ymaps$IGeometry | null;
properties: data$pane$Manager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
model: driving$PathModel;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): {[key: string]: any} | null;
setParent(parent: {[key: string]: any}): this;
getMap(): ymaps$Map;
getSegmentMarkers(): ymaps$GeoObjectCollection;
getSegments(): ymaps$GeoObjectCollection
}

declare class masstransit$PathModel mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
properties: data$pane$Manager;
route: driving$RouteModel;
destroy(): void;
getSegments(
): Array<masstransit$TransferSegmentModel | masstransit$TransportSegmentModel | masstransit$WalkSegmentModel>;
getType(): string;
update(pathJson: {[key: string]: any}): void
}

declare class masstransit$Route mixins ymaps$IGeoObject {
geometry: ymaps$IGeometry | null;
properties: data$pane$Manager;
model: driving$RouteModel;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): {[key: string]: any} | null;
setParent(parent: {[key: string]: any}): this;
getMap(): ymaps$Map;
getPaths(): ymaps$GeoObjectCollection
}

declare class masstransit$RouteModel mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
multiRoute: multiRouter$MultiRouteModel;
properties: data$pane$Manager;
destroy(): void;
getPaths(): masstransit$PathModel[];
getType(): string;
update(routeJson: {[key: string]: any}): void
}

declare class masstransit$StopModel mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
geometry: geometry$base.geometryEditor$Point;
properties: data$pane$Manager;
segment: masstransit$TransportSegmentModel;
update(stopJson: {[key: string]: any}): void
}

declare class masstransit$TransferSegment mixins ymaps$IGeoObject {
geometry: ymaps$IGeometry | null;
properties: data$pane$Manager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
model: masstransit$TransferSegmentModel;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): {[key: string]: any} | null;
setParent(parent: {[key: string]: any}): this;
getMap(): ymaps$Map
}

declare class masstransit$TransferSegmentModel mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
geometry: geometry$base.geometryEditor$LineString;
path: masstransit$PathModel;
properties: data$pane$Manager;
destroy(segmentJson: {[key: string]: any}): void;
getType(): string
}

declare class masstransit$TransportSegment mixins ymaps$IGeoObject {
geometry: ymaps$IGeometry | null;
properties: data$pane$Manager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
model: masstransit$TransportSegmentModel;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): {[key: string]: any} | null;
setParent(parent: {[key: string]: any}): this;
getMap(): ymaps$Map
}

declare class masstransit$TransportSegmentModel mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
geometry: geometry$base.geometryEditor$LineString;
path: masstransit$PathModel;
properties: data$pane$Manager;
destroy(): void;
getStops(): masstransit$StopModel[];
getType(): string;
update(segmentJson: {[key: string]: any}): void
}

declare class masstransit$WalkSegment mixins ymaps$IGeoObject {
geometry: ymaps$IGeometry | null;
properties: data$pane$Manager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
model: masstransit$WalkSegmentModel;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): {[key: string]: any} | null;
setParent(parent: {[key: string]: any}): this;
getMap(): ymaps$Map
}

declare class masstransit$WalkSegmentModel mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
geometry: geometry$base.geometryEditor$LineString;
path: masstransit$PathModel;
properties: data$pane$Manager;
destroy(): void;
getType(): string
}

declare class multiRouter$EditorAddon mixins ymaps$ICustomizable, ymaps$IEventEmitter {
options: ymaps$IOptionManager;
events: ymaps$IEventManager;
state: data$pane$Manager;
isActive(): boolean;
start(state: {[key: string]: any}): void;
stop(): void
}

declare class multiRouter$MultiRoute mixins ymaps$IGeoObject {
constructor(model: multiRouter$MultiRouteModel | ymaps$IMultiRouteModelJson, options?: {
activeRouteAutoSelection?: boolean,
boundsAutoApply?: boolean,
dragUpdateInterval?: string | number,
preventDragUpdate?: boolean,
useMapMargin?: boolean,
zoomMargin?: number[][] | number[] | number,
[index: string]: any
}): this;
editor: multiRouter$EditorAddon;
model: multiRouter$MultiRouteModel;
geometry: ymaps$IGeometry | null;
properties: ymaps$IDataManager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): {[key: string]: any} | null;
setParent(parent: {[key: string]: any}): this;
getMap(): ymaps$Map;
getActiveRoute(): driving$masstransit$Route | masstransit$masstransit$Route | null;
getBounds(): number[][] | null;
getPixelBounds(): number[][] | null;
getRoutes(): ymaps$GeoObjectCollection;
getViaPoints(): ymaps$GeoObjectCollection;
getWayPoints(): ymaps$GeoObjectCollection;
setActiveRoute(route: driving$masstransit$Route | masstransit$masstransit$Route | null): void
}

declare class multiRouter$MultiRouteModel mixins ymaps$IEventEmitter {
constructor(referencePoints: ymaps$IMultiRouteReferencePoint[], params?: ymaps$IMultiRouteParams): this;
events: ymaps$IEventManager;
properties: data$pane$Manager;
destroy(): void;
getAllPoints(): Array<multiRouter$WayPointModel | multiRouter$ViaPointModel>;
getJson(): {[key: string]: any};
getParams(): ymaps$IMultiRouteParams;
getPoints(): Array<multiRouter$WayPointModel | multiRouter$ViaPointModel>;
getReferencePointIndexes(): {[key: string]: any};
getReferencePoints(): ymaps$IMultiRouteReferencePoint[];
getRoutes(): driving$masstransit$RouteModel[] | masstransit$masstransit$RouteModel[];
getViaPoints(): multiRouter$ViaPointModel[];
getWayPoints(): multiRouter$WayPointModel[];
setParams(
params: ymaps$IMultiRouteParams,
extend?: boolean,
clearRequests?: boolean): void;
setReferencePoints(
referencePoints: ymaps$IMultiRouteReferencePoint[],
viaIndexes?: number[],
clearRequests?: boolean): void
}

declare class multiRouter$ViaPoint mixins ymaps$IGeoObject {
geometry: ymaps$IGeometry | null;
properties: data$pane$Manager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): {[key: string]: any} | null;
setParent(parent: {[key: string]: any}): this;
getMap(): ymaps$Map
}

declare class multiRouter$ViaPointModel mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
geometry: geometry$base.geometryEditor$Point;
multiRoute: multiRouter$MultiRouteModel;
properties: data$pane$Manager;
destroy(): void;
getReferencePoint(): {[key: string]: any};
getReferencePointIndex(): number;
setReferencePoint(referencePoint: {[key: string]: any}): void;
update(viaPointJson: {[key: string]: any}): void
}

declare class multiRouter$WayPoint mixins ymaps$IGeoObject {
geometry: ymaps$IGeometry | null;
properties: data$pane$Manager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
model: multiRouter$WayPointModel;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): {[key: string]: any} | null;
setParent(parent: {[key: string]: any}): this;
getMap(): ymaps$Map
}

declare class multiRouter$WayPointModel mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
geometry: geometry$base.geometryEditor$Point;
multiRoute: multiRouter$MultiRouteModel;
properties: data$pane$Manager;
destroy(): void;
getReferencePoint(): {[key: string]: any};
getReferencePointIndex(): number;
setReferencePoint(referencePoint: {[key: string]: any}): void;
update(wayPointJson: {[key: string]: any}): void
}

declare class option$Manager mixins ymaps$IOptionManager {
constructor(options?: {[key: string]: any}, parent?: ymaps$IOptionManager, name?: string): this;
events: ymaps$IEventManager;
get(key: string, defaultValue: {[key: string]: any}): {[key: string]: any};
getAll(): {[key: string]: any};
getName(): string;
getNative(key: string): {[key: string]: any};
resolve(key: string, name?: string): {[key: string]: any};
set(key: {[key: string]: any} | string, value?: {[key: string]: any}): this;
unset(keys: string[][] | string[] | string): this;
unsetAll(): this;
setName(name: string): void;
getParent(): null | ymaps$IOptionManager;
setParent(parent: ymaps$IOptionManager): this;
freeze(): ymaps$IFreezable;
isFrozen(): boolean;
unfreeze(): ymaps$IFreezable;
add(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
group(): ymaps$IEventGroup;
remove(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
fire(type: string, eventobject: {[key: string]: any} | ymaps$IEvent): this
}

declare class panorama$Manager mixins ymaps$IEventEmitter {
events: ymaps$IEventManager;
closePlayer(): void;
disableLookup(): void;
enableLookup(): void;
getPlayer(): panorama$Player;
isLookupEnabled(): boolean;
openPlayer(panorama: ymaps$IPanorama[] | number): vow$Promise<void>
}

declare class panorama$Player mixins ymaps$IEventEmitter {
constructor(element: HTMLElement | string, panorama: ymaps$IPanorama, options?: {
autoFitToViewport?: "none" | "ifNull" | "always",
controls?: string[],
direction?: number[] | string,
hotkeysEnabled?: boolean,
scrollZoomBehavior?: boolean,
span?: number[] | string,
suppressMapOpenBlock?: boolean
}): this;
events: ymaps$IEventManager;
destroy(): void;
fitToViewport(): void;
getDirection(): number[];
getPanorama(): ymaps$IPanorama;
getSpan(): number[];
lookAt(point: number[]): this;
moveTo(
point: number[],
options?: {
direction?: number[] | string,
layer?: "yandex#panorama" | "yandex#airPanorama",
span?: number[] | string
}): vow$Promise<void>;
setDirection(direction: number[] | string): this;
setPanorama(panorama: ymaps$IPanorama): this;
setSpan(span: number[] | string): this
}

declare class router$Editor mixins ymaps$ICustomizable, ymaps$IEventEmitter {
options: ymaps$IOptionManager;
events: ymaps$IEventManager;
start(
options?: {
addViaPoints?: boolean,
addWayPoints?: boolean,
editViaPoints?: boolean,
editWayPoints?: boolean,
removeViaPoints?: boolean,
removeWayPoints?: boolean
}): void;
stop(): void
}

declare class router$Route mixins ymaps$IGeoObject {
geometry: ymaps$IGeometry | null;
properties: ymaps$IDataManager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
editor: router$Editor;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getMap(): ymaps$Map;
getHumanJamsTime(): string;
getHumanLength(): string;
getHumanTime(): string;
getJamsTime(): number;
getLength(): number;
getPaths(): ymaps$GeoObjectCollection;
getTime(): number;
getViaPoints(): ymaps$GeoObjectCollection;
getWayPoints(): ymaps$GeoObjectCollection
}

declare class ymaps$Balloon mixins ymaps$Popup<ymaps$Balloon>, ymaps$IBaloon<ymaps$Balloon> {
constructor(map: ymaps$Map, options?: ymaps$IBalloonOptions): this;
getData(): {[key: string]: any};
close(force?: boolean): vow$Promise<ymaps$Balloon>;
getParent(): ymaps$Balloon | null;
setParent(parent: ymaps$Balloon): this;
autoPan(): vow$Promise<ymaps$Balloon>;
freeze(): ymaps$IFreezable;
isFrozen(): boolean;
unfreeze(): ymaps$IFreezable;
add(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
group(): ymaps$IEventGroup;
remove(
types: string[][] | string[] | string,
callback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: {[key: string]: any},
priority?: number): this;
fire(type: string, eventobject: {[key: string]: any} | ymaps$IEvent): this
}

declare interface ymaps$IBalloonOptions {
autoPan?: boolean,
autoPanCheckZoomRange?: boolean,
autoPanDuration?: number,
autoPanMargin?: number[][] | number[] | number,
autoPanUseMapMargin?: boolean,
closeButton?: boolean,
contentLayout?: ymaps$IClassConstructor<ymaps$ILayout> | string,
layout?: ymaps$IClassConstructor<ymaps$ILayout> | string,
maxHeight?: number,
maxWidth?: number,
minHeight?: number,
minWidth?: number,
offset?: number[],
pane?: string,
panelContentLayout?: ymaps$IClassConstructor<ymaps$ILayout> | string,
panelMaxHeightRatio?: number,
panelMaxMapArea?: number,
shadow?: boolean,
shadowLayout?: ymaps$IClassConstructor<ymaps$ILayout> | string,
shadowOffset?: number[]
} 

declare class ymaps$Circle mixins ymaps$GeoObject {
constructor(geometry: ymaps$ICircleGeometry[][][][] | number[][] | {[key: string]: any}, properties?: {[key: string]: any} | ymaps$IDataManager, options?: ymaps$ICircleOptions): this;
balloon: geoObject$ymaps$Balloon;
editor: ymaps$IGeometryEditor;
hint: geoObject$map$Hint;
events: event$panorama$Manager;
options: option$panorama$Manager;
properties: data$panorama$Manager;
state: data$panorama$Manager;
geometry: ymaps$IGeometry | null;
indices: ArrayBuffer;
vertices: ArrayBuffer;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getMap(): ymaps$Map
}

declare interface ymaps$ICircleOptions {
circleOverlay?: string | ((
geometry: ymaps$IPixelCircleGeometry,
data: {[key: string]: any},
options: {[key: string]: any}) => vow$Promise<ymaps$IOverlay>),
cursor?: string,
draggable?: boolean,
fill?: boolean,
fillColor?: string,
fillImageHref?: string,
fillMethod?: "stretch" | "tile",
fillOpacity?: number,
hasBalloon?: boolean,
hasHint?: boolean,
hideIconOnBalloonOpen?: boolean,
interactiveZIndex?: boolean,
interactivityModel?: ymaps$InteractivityModelKey,
opacity?: number,
openBalloonOnClick?: boolean,
openEmptyBalloon?: boolean,
openEmptyHint?: boolean,
openHintOnHover?: boolean,
outline?: boolean,
pane?: string,
strokeColor?: string[][] | string[] | string,
strokeOpacity?: number[][] | number[] | number,
strokeStyle?: string[][][]
| {[key: string]: any}[][]
| string[]
| {[key: string]: any}[]
| string
| {[key: string]: any},
strokeWidth?: number[][] | number[] | number,
syncOverlayInit?: boolean,
useMapMarginInDragging?: boolean,
visible?: boolean,
zIndex?: number,
zIndexActive?: number,
zIndexDrag?: number,
zIndexHover?: number
} 

declare class ymaps$Clusterer mixins ymaps$IChildOnMap, ymaps$ICustomizable, ymaps$IEventEmitter, ymaps$IParentOnMap {
constructor(options?: ymaps$IClustererOptions): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
balloon: clusterer$ymaps$Balloon;
hint: clusterer$map$Hint;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getMap(): ymaps$Map
}

declare interface ymaps$IClustererOptions {
gridSize?: number,
groupByCoordinates?: boolean,
hasBalloon?: boolean,
hasHint?: boolean,
margin?: number[][] | number[] | number,
maxZoom?: number[] | number,
minClusterSize?: number,
preset?: ymaps$PresetKey,
showInAlphabeticalOrder?: boolean,
useMapMargin?: boolean,
viewportMargin?: number[][] | number[] | number,
zoomMargin?: number[][] | number[] | number
} 

declare class ymaps$ClusterPlacemark mixins ymaps$IGeoObject, collection$collection$Item {
constructor(geometry: number[] | {[key: string]: any} | ymaps$IPointGeometry, properties: ymaps$IClusterPlacemarkProperties, options?: ymaps$IClusterPlacemarkOptions): this;
geometry: ymaps$IGeometry | null;
properties: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
state: data$panorama$Manager;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getMap(): ymaps$Map;
onAddToMap(map: ymaps$Map): void;
onRemoveFromMap(oldMap: ymaps$Map): void;
getBounds(): number[][] | null;
getGeoObjects(): ymaps$IGeoObject[]
}

declare type ymaps$IClusterPlacemarkProperties = {
geoObjects: ymaps$IGeoObject[]
} & ymaps$IDataManager


declare interface ymaps$IClusterPlacemarkOptions {
balloonContentLayout?: "cluster#balloonTwoColumns"
| "cluster#balloonCarousel"
| "cluster#balloonAccordion"
| string
| ymaps$IClassConstructor<ymaps$ILayout>,
balloonContentLayoutHeight?: number,
balloonContentLayoutWidth?: number,
balloonItemContentLayout?: ymaps$ILayout | string,
balloonPanelContentLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
cursor?: string,
disableClickZoom?: boolean,
hideIconOnBalloonOpen?: boolean,
iconColor?: string,
iconContentLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
iconLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
icons?: Array<{
href: string,
size: number[],
ooffset: number[],
shape?: ymaps$IShape | ymaps$IGeometryJson
}>,
iconShape?: ymaps$IGeometryJson,
interactivityModel?: ymaps$InteractivityModelKey,
numbers?: number[],
openBalloonOnClick?: boolean,
openEmptyHint?: boolean,
openHintOnHover?: boolean,
zIndexHover?: number
} 

declare class ymaps$Collection mixins ymaps$ICollection, collection$collection$Item {
constructor(options?: {[key: string]: any}): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
add(object: {[key: string]: any}): this;
getIterator(): ymaps$IIterator;
remove(object: {[key: string]: any}): this;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getMap(): ymaps$Map;
onAddToMap(map: ymaps$Map): void;
onRemoveFromMap(oldMap: ymaps$Map): void;
filter(
filterFunction: (object: {[key: string]: any}) => boolean): {[key: string]: any}[];
get(index: number): {[key: string]: any};
getAll(): {[key: string]: any}[];
getLength(): number;
indexOf(childToFind: {[key: string]: any}): number;
removeAll(): this
}

declare class ymaps$Event mixins ymaps$IEvent {
constructor(originalEvent: {[key: string]: any}, sourceEvent: ymaps$IEvent): this;
allowMapEvent(): void;
callMethod(name: string): void;
get(name: string): {[key: string]: any};
getSourceEvent(): ymaps$IEvent | null;
isDefaultPrevented(): boolean;
isImmediatePropagationStopped(): boolean;
isMapEventAllowed(): boolean;
isPropagationStopped(): boolean;
preventDefault(): boolean;
stopImmediatePropagation(): boolean;
stopPropagation(): boolean
}

declare class ymaps$GeoObject mixins ymaps$IGeoObject {
constructor(feature?: ymaps$IGeoObjectFeature, options?: ymaps$IGeoObjectOptions): this;
geometry: ymaps$IGeometry | null;
balloon: geoObject$ymaps$Balloon;
editor: ymaps$IGeometryEditor;
hint: geoObject$map$Hint;
events: event$panorama$Manager;
options: option$panorama$Manager;
properties: data$panorama$Manager;
state: data$panorama$Manager;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getMap(): ymaps$Map
}

declare interface ymaps$IGeoObjectFeature {
geometry?: ymaps$IGeometry | ymaps$IGeometryJson,
properties?: ymaps$IDataManager | {[key: string]: any}
} 

declare type ymaps$IGeoObjectOptions = {
iconCaptionMaxWidth?: number,
iconColor?: string,
iconContentLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
iconContentOffset?: number[],
iconContentPadding?: number[],
iconContentSize?: number[],
iconImageClipRect?: number[][],
iconImageHref?: string,
iconImageOffset?: number[],
iconImageShape?: ymaps$IShape | null,
iconImageSize?: number[],
iconLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
iconMaxHeight?: number,
iconMaxWidth?: number,
iconOffset?: number[],
iconShadow?: boolean,
iconShadowImageClipRect?: number[][],
iconShadowImageHref?: string,
iconShadowImageOffset?: number[],
iconShadowImageSize?: number[],
iconShadowLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
iconShadowOffset?: number[],
lineStringOverlay?: ymaps$OverlayKey,
pointOverlay?: ymaps$OverlayKey,
polygonOverlay?: ymaps$OverlayKey,
preset?: string,
rectangleOverlay?: ymaps$OverlayKey,
setMapCursorInDragging?: boolean
} & ymaps$ICircleOptions


declare class ymaps$GeoObjectCollection mixins ymaps$IGeoObject, ymaps$IGeoObjectCollection {
constructor(feature?: {
children?: ymaps$IGeoObject[],
geometry?: ymaps$IGeometry | {[key: string]: any},
properties?: ymaps$IDataManager | {[key: string]: any}
}, options?: {[key: string]: any}): this;
geometry: ymaps$IGeometry | null;
properties: ymaps$IDataManager;
state: ymaps$IDataManager;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
getOverlay(): vow$Promise<ymaps$IOverlay | null>;
getOverlaySync(): ymaps$IOverlay | null;
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getMap(): ymaps$Map;
add(child: ymaps$IGeoObject, index?: number): this;
each(
callback: (object: ymaps$IGeoObject) => void,
context: {[key: string]: any}): void;
get(index: number): ymaps$IGeoObject;
getBounds(): number[][] | null;
getIterator(): ymaps$IIterator;
getLength(): number;
getPixelBounds(): number[][] | null;
indexOf(object: ymaps$IGeoObject): number;
remove(child: ymaps$IGeoObject): this;
removeAll(): this;
set(index: number, child: ymaps$IGeoObject): this;
splice(index: number, length: number): this;
toArray(): ymaps$IGeoObject[]
}

declare class ymaps$Layer mixins ymaps$ILayer, ymaps$IParentOnMap, ymaps$IPositioningContext {
constructor(tileUrlTemplate: string | ((tileNumber: number[], tileZoom: number) => string)): this;
events: ymaps$IEventManager;
options: ymaps$IOptionManager;
fromClientPixels(clientPixelPoint: number[]): number[];
getZoom(): number;
toClientPixels(globalPixelPoint: number[]): number[];
getParent(): null | ymaps$IControlParent;
setParent(parent: ymaps$IControlParent): this;
getMap(): ymaps$Map
}

declare class ymaps$Map mixins ymaps$IDomEventEmitter {
constructor(parentElement: HTMLElement | string, state: ymaps$IMapState, options?: ymaps$IMapOptions): this;
action: map$action.panorama$Manager;
balloon: map$ymaps$Balloon;
behaviors: map$behavior.panorama$Manager;
container: map$map$Container;
controls: control$panorama$Manager;
converter: map$map$Converter;
copyrights: map$map$Copyrights;
cursors: util$cursor.panorama$Manager;
events: event$panorama$Manager;
geoObjects: map$map$GeoObjects;
hint: map$map$Hint;
layers: map$layer.panorama$Manager;
margin: map$margin.panorama$Manager;
options: option$panorama$Manager;
panes: map$pane.panorama$Manager;
zoomRange: map$map$ZoomRange;
destroy(): void;
getBounds(options?: ymaps$IMapMarginOptions): number[][];
getCenter(options?: ymaps$IMapMarginOptions): number[];
getGlobalPixelCenter(options?: ymaps$IMapMarginOptions): number[];
getPanoramaManager(): vow$Promise<panorama$panorama$Manager>;
getType(): string | ymaps$MapType;
getZoom(): number;
panTo(
center: number[] | {[key: string]: any}[],
options?: ymaps$IMapPanOptions): vow$Promise<void>;
setBounds(bounds: number[][], options?: ymaps$IMapBoundsOptions): vow$Promise<void>;
setCenter(
center: number[],
zoom?: number,
options?: ymaps$IMapPositionOptions): vow$Promise<void>;
setGlobalPixelCenter(
globalPixelCenter: number[],
zoom?: number,
options?: ymaps$IMapPositionOptions): vow$Promise<void>;
setType(
type: string | ymaps$MapType,
options?: ymaps$IMapCheckZoomRangeOptions): vow$Promise<void>;
setZoom(zoom: number, options?: ymaps$IMapZoomOptions): vow$Promise<void>
}

declare interface ymaps$IMapMarginOptions {
useMapMargin?: boolean
} 

declare interface ymaps$IMapCheckZoomRangeOptions {
checkZoomRange?: boolean
} 

declare type ymaps$IMapZoomOptions = {
duration?: number
} & ymaps$IMapMarginOptions & ymaps$IMapCheckZoomRangeOptions


declare type ymaps$IMapPositionOptions = {
timingFunction?: string
} & ymaps$IMapZoomOptions


declare type ymaps$IMapBoundsOptions = {
preciseZoom?: boolean,
zoomMargin?: number[][] | number[]
} & ymaps$IMapPositionOptions


declare type ymaps$IMapPanOptions = {
delay?: number,
flying?: boolean,
safe?: boolean
} & ymaps$IMapPositionOptions


declare class ymaps$MapType  {
constructor(name: string, layers: Array<ymaps$IClassConstructor<ymaps$Layer> | string>): this
}

declare interface ymaps$IMapState {
behaviors?: string[],
bounds?: number[][],
center?: number[],
controls?: string[],
margin?: number[][] | number[],
type?: "yandex#map" | "yandex#satellite" | "yandex#hybrid",
zoom?: number
} 

declare interface ymaps$IMapOptions {
autoFitToViewport?: "none" | "ifNull" | "always",
avoidFractionalZoom?: boolean,
exitFullscreenByEsc?: boolean,
fullscreenZIndex?: number,
mapAutoFocus?: boolean,
maxAnimationZoomDifference?: number,
maxZoom?: number,
minZoom?: number,
nativeFullscreen?: boolean,
projection?: ymaps$IProjection,
restrictMapArea?: boolean,
suppressMapOpenBlock?: boolean,
suppressObsoleteBrowserNotifier?: boolean,
yandexMapAutoSwitch?: boolean,
yandexMapDisablePoiInteractivity?: boolean
} 

declare class ymaps$Placemark mixins ymaps$GeoObject {
constructor(geometry: number[] | {[key: string]: any} | ymaps$IPointGeometry, properties: {[key: string]: any} | ymaps$IDataManager, options?: ymaps$IPlacemarkOptions): this
}

declare interface ymaps$IPlacemarkOptions {
cursor?: string,
draggable?: boolean,
hasBalloon?: boolean,
hasHint?: boolean,
hideIconOnBalloonOpen?: boolean,
iconOffset?: number[],
iconShape?: ymaps$IGeometryJson | null,
interactiveZIndex?: boolean,
interactivityModel?: string,
openBalloonOnClick?: boolean,
openEmptyBalloon?: boolean,
openEmptyHint?: boolean,
openHintOnHover?: boolean,
pane?: string,
pointOverlay?: string,
syncOverlayInit?: boolean,
useMapMarginInDragging?: boolean,
visible?: boolean,
zIndex?: number,
zIndexActive?: number,
zIndexDrag?: number,
zIndexHover?: number
} 

declare class ymaps$Polygon mixins ymaps$GeoObject {
constructor(geometry: number[][][] | {[key: string]: any} | ymaps$IPolygonGeometry, properties?: {[key: string]: any} | ymaps$IDataManager, options?: ymaps$IPolygonOptions): this
}

declare interface ymaps$IPolygonOptions {
cursor?: string,
draggable?: boolean,
fill?: boolean,
fillColor?: string,
fillImageHref?: string,
fillMethod?: "stretch" | "tile",
fillOpacity?: number,
hasBalloon?: boolean,
hasHint?: boolean,
interactiveZIndex?: boolean,
interactivityModel?: string,
opacity?: number,
openBalloonOnClick?: boolean,
openEmptyBalloon?: boolean,
openEmptyHint?: boolean,
openHintOnHover?: boolean,
outline?: boolean,
pane?: string,
polygonOverlay?: string,
strokeColor?: string | string[],
strokeOpacity?: number | number[],
strokeStyle?: string | string[] | {[key: string]: any} | {[key: string]: any}[],
strokeWidth?: number | number[],
syncOverlayInit?: boolean,
useMapMarginInDragging?: boolean,
visible?: boolean,
zIndex?: number,
zIndexActive?: number,
zIndexDrag?: number,
zIndexHover?: number
} 

declare class ymaps$Polyline mixins ymaps$GeoObject {
constructor(geometry: number[][] | {[key: string]: any} | ymaps$ILineStringGeometry, properties?: {[key: string]: any} | ymaps$IDataManager, options?: ymaps$IPolylineOptions): this
}

declare interface ymaps$IPolylineOptions {
cursor?: string,
draggable?: boolean,
hasBalloon?: boolean,
hasHint?: boolean,
interactiveZIndex?: boolean,
interactivityModel?: string,
lineStringOverlay?: () => {[key: string]: any} | string,
opacity?: number,
openBalloonOnClick?: boolean,
openEmptyBalloon?: boolean,
openEmptyHint?: boolean,
openHintOnHover?: boolean,
pane?: string,
strokeColor?: string | string[],
strokeOpacity?: number | number[],
strokeStyle?: string | string[] | {[key: string]: any} | {[key: string]: any}[],
strokeWidth?: number | number[],
syncOverlayInit?: boolean,
useMapMarginInDragging?: boolean,
visible?: boolean,
zIndex?: number,
zIndexActive?: number,
zIndexDrag?: number,
zIndexHover?: number
} 

declare class ymaps$Popup<T> mixins ymaps$IPopup<T> {
constructor(map: ymaps$Map, options?: ymaps$IPopupOptions): this;
options: ymaps$IOptionManager;
events: ymaps$IEventManager;
close(force?: boolean): vow$Promise<T>;
getData(): {[key: string]: any};
getOverlay(): vow$Promise<ymaps$IOverlay>;
getOverlaySync(): ymaps$IOverlay;
getPosition(): number[];
isOpen(): boolean;
open(
position: number[],
data: {[key: string]: any} | string | HTMLElement): vow$Promise<T>;
setData(data: {[key: string]: any} | string | HTMLElement): vow$Promise<T>;
setPosition(position: number[]): vow$Promise<T>
}

declare interface ymaps$IPopupOptions {
closeTimeout?: number,
interactivityModel?: ymaps$InteractivityModelKey,
openTimeout?: number,
pane?: ymaps$IPane | string,
projection?: ymaps$IProjection,
zIndex?: number
} 

declare function ymaps$ready(
successCallback?: () => any | ymaps$IReadyobject,
errorCallback?: () => any,
context?: {[key: string]: any}): vow$Promise<void>


declare interface ymaps$IReadyobject {
require?: string[],
context?: {[key: string]: any},
successCallback(): void,
errorCallback(): void
} 


      declare var npm$namespace$templateLayoutFactory: {
        createClass: typeof templateLayoutFactory$createClass,
        
      }
declare function templateLayoutFactory$createClass(
template: string,
overrides?: {[key: string]: any},
staticMethods?: {[key: string]: any}): ymaps$IClassConstructor<layout$templateBased.templateBased$Base>


declare class cursor$Accessor  {
constructor(key: string): this;
getKey(): string;
remove(): void;
setKey(): void
}

declare class cursor$Manager  {
constructor(element: HTMLElement): this;
push(key: string): cursor$Accessor
}

declare class util$Storage  {
add(key: string, object: {[key: string]: any}): this;
get(key: string | {[key: string]: any}): {[key: string]: any} | string;
remove(key: string): {[key: string]: any}
}

declare class vow$Deferred  {
promise(): vow$Promise;
reject(reason: {[key: string]: any}): void;
resolve(value: {[key: string]: any}): void
}

declare class vow$Promise  {
constructor(resolver?: () => void): this;
done(
onFulfilled?: () => void,
onRejected?: () => void,
onProgress?: () => void,
ctx?: {[key: string]: any}): void;
spread(
onFulfilled?: () => void,
onRejected?: () => void,
ctx?: {[key: string]: any}): vow$Promise;
then(
onFulfilled?: () => void,
onRejected?: () => void,
onProgress?: () => void,
ctx?: {[key: string]: any}): vow$Promise;
valueOf(): {[key: string]: any}
}

declare type ymaps$IBaloon<T> = {
autoPan(): vow$Promise<T>
} & ymaps$IPopup<T> & ymaps$ICustomizable & ymaps$IChild<T> & ymaps$IFreezable


declare type ymaps$IBalloonManager<T> = {
autoPan(): vow$Promise<T>
} & ymaps$IPopupManager<T>


declare type ymaps$IBaseGeometry = {
getBounds(): number[][] | null,
getType(): string
} & ymaps$IEventEmitter


declare type ymaps$IBaseLineStringGeometry = {} & ymaps$IBaseGeometry & ymaps$ILineStringGeometryAccess


declare type ymaps$IBasePointGeometry = {} & ymaps$IBaseGeometry & ymaps$IPointGeometryAccess


declare type ymaps$IBasePolygonGeometry = {} & ymaps$IBaseGeometry & ymaps$IPolygonGeometryAccess


declare type ymaps$IBehavior = {
disable(): void,
enable(): void,
isEnabled(): boolean
} & ymaps$IChildOnMap & ymaps$ICustomizable


declare type ymaps$IChild<T> = {
getParent(): {[key: string]: any} | null,
setParent(parent: {[key: string]: any} | null): this
} & ymaps$IEventEmitter


declare type ymaps$IChildOnMap = {} & ymaps$IChild<ymaps$IControlParent>


declare type ymaps$ICircleGeometry = {} & ymaps$ICircleGeometryAccess & ymaps$IGeometry


declare type ymaps$ICircleGeometryAccess = {
contains(position: number[]): boolean,
getClosest(anchorPosition: number[]): {[key: string]: any},
getCoordinates(): number[] | null,
getRadius(): number,
setCoordinates(coordinates: number[] | null): this,
setRadius(radius: number): this
} & ymaps$IFreezable


declare type ymaps$ICollection = {
add(object: {[key: string]: any}): this,
getIterator(): ymaps$IIterator,
remove(object: {[key: string]: any}): this
} & ymaps$IEventEmitter


declare type ymaps$IControl = {} & ymaps$IChildOnMap


declare type ymaps$IControlParent = {
getChildElement(child: ymaps$IControl): vow$Promise<HTMLElement>
} & ymaps$IParentOnMap


declare interface ymaps$ICoordSystem {
getDistance(point1: number[], point2: number[]): number,
solveDirectProblem(
startPoint: number[],
direction: number[],
distance: number): {[key: string]: any},
solveInverseProblem(
startPoint: number[],
endPoint: number[],
reverseDirection?: boolean): {[key: string]: any}
} 

declare type ymaps$ICopyrightsAccessor = {} & ymaps$ICopyrightsProvider


declare type ymaps$ICopyrightsProvider = {
getCopyrights(coords: number[], zoom: number): vow$Promise<Array<string | HTMLElement>>,
remove(): void,
setCopyrights(copyrights: string | HTMLElement | Array<string | HTMLElement>): void
} & ymaps$IEventEmitter


declare type ymaps$ICustomizable = {
options: ymaps$IOptionManager
} & ymaps$IEventEmitter


declare type ymaps$IDataManager = {
get(path: string, defaultValue: {[key: string]: any}): {[key: string]: any}
} & ymaps$IEventEmitter


declare type ymaps$IDomEventEmitter = {} & ymaps$IEventEmitter


declare interface ymaps$IEvent {
allowMapEvent(): void,
callMethod(name: string): void,
get(name: string): {[key: string]: any},
getSourceEvent(): ymaps$IEvent | null,
isDefaultPrevented(): boolean,
isImmediatePropagationStopped(): boolean,
isMapEventAllowed(): boolean,
isPropagationStopped(): boolean,
preventDefault(): boolean,
stopImmediatePropagation(): boolean,
stopPropagation(): boolean
} 

declare interface ymaps$IEventController {
onStartListening(events: ymaps$IEventManager, type: string): void,
onStopListening(events: ymaps$IEventManager, type: string): void
} 

declare interface ymaps$IEventEmitter {
events: ymaps$IEventManager
} 

declare interface ymaps$IEventGroup {
add(
types: string[][] | string[] | string,
callback: (event: {[key: string]: any} | ymaps$IEvent) => void,
context?: {[key: string]: any},
priority?: number): this,
remove(
types: string[][] | string[] | string,
callback: (event: {[key: string]: any} | ymaps$IEvent) => void,
context?: {[key: string]: any},
priority?: number): this,
removeAll(): this
} 

declare type ymaps$IEventManager = {
add(
types: string[][] | string[] | string,
callback: (event: {[key: string]: any} | ymaps$IEvent) => void,
context?: {[key: string]: any},
priority?: number): this,
getParent(): {[key: string]: any} | null,
group(): ymaps$IEventGroup,
setParent(parent: {[key: string]: any} | null): this
} & ymaps$IEventTrigger


declare interface ymaps$IEventTrigger {
fire(type: string, eventobject: {[key: string]: any} | ymaps$IEvent): this
} 

declare type ymaps$IEventWorkflowController = {
onAfterEventFiring(events: ymaps$IEventManager, type: string, event?: ymaps$IEvent): void,
onBeforeEventFiring(events: ymaps$IEventManager, type: string, event?: ymaps$IEvent): void
} & ymaps$IEventController


declare type ymaps$IExpandableControlLayout = {} & ymaps$ILayout


declare type ymaps$IFreezable = {
freeze(): ymaps$IFreezable,
isFrozen(): boolean,
unfreeze(): ymaps$IFreezable
} & ymaps$IEventManager


declare interface ymaps$IGeocodeProvider {
geocode(
request: string,
options?: {
boundedBy?: number[][],
results?: number,
skip?: number,
strictBounds?: boolean
}): vow$Promise<{[key: string]: any}>,
suggest(
request: string,
options?: {
boundedBy?: number[][],
results?: number,
strictBounds?: boolean
}): vow$Promise<{[key: string]: any}>
} 

declare type ymaps$IGeometry = {
getMap(): ymaps$Map | null,
getPixelGeometry(options?: {[key: string]: any}): ymaps$IPixelGeometry,
setMap(map: ymaps$Map): void
} & ymaps$IBaseGeometry & ymaps$ICustomizable


declare type ymaps$IGeometryEditor = {
geometry: ymaps$IGeometry,
state: ymaps$IDataManager,
startEditing(): void,
stopEditing(): void
} & ymaps$ICustomizable & ymaps$IEventEmitter


declare type ymaps$IGeometryEditorChildModel = {
editor: ymaps$IGeometryEditor,
geometry: ymaps$IBaseGeometry,
getParent(): ymaps$IGeometryEditorModel,
setPixels(pixels: number[]): void
} & ymaps$IGeometryEditorModel


declare type ymaps$IGeometryEditorModel = {
destroy(): void,
getPixels(): number[]
} & ymaps$IEventEmitter


declare type ymaps$IGeometryEditorRootModel = {} & ymaps$IGeometryEditorModel


declare interface ymaps$IGeometryJson {
type: string
} 

declare type ymaps$IGeoObject = {
geometry: ymaps$IGeometry | null,
properties: ymaps$IDataManager,
state: ymaps$IDataManager,
getOverlay(): vow$Promise<ymaps$IOverlay | null>,
getOverlaySync(): ymaps$IOverlay | null
} & ymaps$IChildOnMap & ymaps$ICustomizable & ymaps$IDomEventEmitter & ymaps$IParentOnMap


declare type ymaps$IGeoObjectCollection = {
add(child: ymaps$IGeoObject, index?: number): this,
each(
callback: (object: ymaps$IGeoObject) => void,
context: {[key: string]: any}): void,
get(index: number): ymaps$IGeoObject,
getBounds(): number[][] | null,
getIterator(): ymaps$IIterator,
getLength(): number,
getPixelBounds(): number[][] | null,
indexOf(object: ymaps$IGeoObject): number,
remove(child: ymaps$IGeoObject): this,
removeAll(): this,
set(index: number, child: ymaps$IGeoObject): this,
splice(index: number, length: number): this
} & ymaps$ICustomizable & ymaps$IEventEmitter & ymaps$IParentOnMap


declare type ymaps$IGeoObjectSequence = {
each(
callback: (geoObject: ymaps$IGeoObject) => void,
context?: {[key: string]: any}): void,
get(index: number): ymaps$IGeoObject,
getBounds(): number[][] | null,
getIterator(): ymaps$IIterator,
getLength(): number,
getPixelBounds(): number[][] | null,
indexOf(geoObject: ymaps$IGeoObject): number
} & ymaps$ICustomizable & ymaps$IEventEmitter & ymaps$IParentOnMap


declare type ymaps$IHintManager<T> = {} & ymaps$IPopupManager<T>


declare interface ymaps$IIterator {
getNext(): {[key: string]: any} | null
} 

declare type ymaps$ILayer = {
getBrightness(): number,
getCopyrights(coords: number[], zoom: number): vow$Promise<Array<string | HTMLElement>>,
getZoomRange(point: number[]): vow$Promise<number[]>
} & ymaps$IChildOnMap & ymaps$ICustomizable & ymaps$IEventEmitter


declare type ymaps$ILayout = {
destroy(): void,
getData(): {[key: string]: any},
getParentElement(): HTMLElement,
getShape(): ymaps$IShape | null,
isEmpty(): boolean,
setData(data: {[key: string]: any}): void,
setParentElement(parent: HTMLElement | null): void
} & ymaps$IDomEventEmitter


declare type ymaps$ILinearRingGeometryAccess = {
contain(position: number): boolean,
freeze(): ymaps$IFreezable,
get(index: number): number[],
getChildGeometry(index: number): ymaps$IPointGeometryAccess,
getClosest(anchorPosition: number[]): {[key: string]: any},
getCoordinates(): number[][],
getFillRule(): string,
getLength(): number,
insert(index: number, coordinates: number[]): ymaps$ILinearRingGeometryAccess,
isFrozen(): boolean,
remove(index: number): number[],
set(index: number, coordinates: number[]): ymaps$ILinearRingGeometryAccess,
setCoordinates(coordinates: number[][]): ymaps$ILinearRingGeometryAccess,
setFillRule(fillRule: string): ymaps$ILinearRingGeometryAccess,
splice(index: number, number: number): number[][],
unfreeze(): ymaps$IFreezable
} & ymaps$IFreezable


declare type ymaps$ILineStringGeometry = {} & ymaps$IGeometry & ymaps$ILineStringGeometryAccess


declare type ymaps$ILineStringGeometryAccess = {
get(index: number): number[],
getChildGeometry(index: number): ymaps$IPointGeometryAccess,
getClosest(anchorPosition: number[]): {[key: string]: any},
getCoordinates(): number[][],
getLength(): number,
insert(index: number, coordinates: number[][]): ymaps$ILineStringGeometryAccess,
remove(index: number): number[],
set(index: number, coordinates: number[]): ymaps$ILineStringGeometryAccess,
setCoordinates(coordinates: number[]): ymaps$ILineStringGeometryAccess,
splice(index: number, length: number): number[][]
} & ymaps$IFreezable


declare type ymaps$IMapAction = {
begin(mapActionManager: map$action.cursor$Manager): void,
end(): void
} & ymaps$IEventEmitter


declare type ymaps$IMapObjectCollection = {} & ymaps$ICollection & ymaps$ICustomizable & ymaps$IParentOnMap


declare interface ymaps$IMultiRouteModelJson {
params: ymaps$IMultiRouteParams,
referencePoints: ymaps$IMultiRouteReferencePoint[]
} 

declare interface ymaps$IMultiRouteParams {
avoidTrafficJams?: boolean,
boundedBy?: number[][] | null,
requestSendInterval?: string | number,
results?: number,
reverseGeocoding?: boolean,
routingMode?: "auto" | "masstransit" | "pedestrian",
searchCoordOrder?: string,
strictBounds?: boolean,
viaIndexes?: number[]
} 

declare type ymaps$IMultiRouteReferencePoint = string | number[] | geometry$geometryEditor$Point;

declare type ymaps$IOptionManager = {
get(key: string, defaultValue: {[key: string]: any}): {[key: string]: any},
getAll(): {[key: string]: any},
getName(): string,
getNative(key: string): {[key: string]: any},
resolve(key: string, name?: string): {[key: string]: any},
setName(name: string): void
} & ymaps$IChild<ymaps$IOptionManager> & ymaps$IEventEmitter & ymaps$IFreezable


declare type ymaps$IOverlay = {
getData(): {[key: string]: any},
getGeometry(): ymaps$IPixelGeometry,
getMap(): ymaps$Map | null,
getShape(): ymaps$IShape | null,
isEmpty(): boolean,
setData(data: {[key: string]: any}): void,
setGeometry(geometry: ymaps$IPixelGeometry): void,
setMap(map: ymaps$Map | null): void
} & ymaps$ICustomizable & ymaps$IDomEventEmitter


declare type ymaps$IPane = {
destroy(): void,
getElement(): HTMLElement,
getMap(): ymaps$Map,
getOverflow(): "visible" | "hidden",
getZIndex(): number
} & ymaps$IEventEmitter


declare interface ymaps$IPanorama {
getAngularBBox(): number[],
getConnectionArrows(): ymaps$IPanoramaConnectionArrow[],
getConnectionMarkers(): ymaps$IPanoramaConnectionMarker[],
getCoordSystem(): ymaps$ICoordSystem,
getDefaultDirection(): number[],
getDefaultSpan(): number[],
getGraph(): ymaps$IPanoramaGraph | null,
getMarkers(): ymaps$IPanoramaMarker[],
getName(): string,
getPosition(): number[],
getTileLevels(): ymaps$IPanoramaTileLevel[],
getTileSize(): number[]
} 

declare interface ymaps$IPanoramaConnection {
getConnectedPanorama(): vow$Promise<ymaps$IPanorama>
} 

declare type ymaps$IPanoramaConnectionArrow = {
properties: data$cursor$Manager,
getDirection(): number[],
getPanorama(): ymaps$IPanorama
} & ymaps$IPanoramaConnection


declare type ymaps$IPanoramaConnectionMarker = {} & ymaps$IPanoramaConnection & ymaps$IPanoramaMarker


declare interface ymaps$IPanoramaGraph {
getEdges(): ymaps$IPanoramaGraphEdge[],
getNodes(): ymaps$IPanoramaGraphEdge[],
getPanorama(): ymaps$IPanorama
} 

declare interface ymaps$IPanoramaGraphEdge {
getEndNodes(): ymaps$IPanoramaGraphNode[]
} 

declare interface ymaps$IPanoramaGraphNode {
getConnectedPanorama(): vow$Promise<ymaps$IPanorama>
} 

declare interface ymaps$IPanoramaMarker {
properties: data$cursor$Manager,
getIconSet(): vow$Promise<ymaps$IPanoramaMarkerIconSet>,
getPanorama(): ymaps$IPanorama,
getPosition(): number[]
} 

declare interface ymaps$IPanoramaMarkerIcon {
image: HTMLCanvasElement | HTMLImageElement,
offset: number[]
} 

declare interface ymaps$IPanoramaMarkerIconSet {
default: ymaps$IPanoramaMarkerIcon | null,
expanded: ymaps$IPanoramaMarkerIcon | null,
expandedHovered: ymaps$IPanoramaMarkerIcon | null,
hovered: ymaps$IPanoramaMarkerIcon | null
} 

declare interface ymaps$IPanoramaTileLevel {
getImageSize(): number[],
getTileUrl(x: number, y: number): string
} 

declare interface ymaps$IParentOnMap {
getMap(): ymaps$Map
} 

declare type ymaps$IPixelCircleGeometry = {
getCoordinates(): number[],
getRadius(): number
} & ymaps$IPixelGeometry


declare type ymaps$IPixelLineStringGeometry = {
getClosest(anchorPosition: number[]): {[key: string]: any},
getCoordinates(): number[][],
getLength(): number
} & ymaps$IPixelGeometry


declare type ymaps$IPixelGeometry = {
equals(geometry: ymaps$IPixelGeometry): boolean,
getMetaData(): {[key: string]: any},
scale(factor: number): ymaps$IPixelGeometry,
shift(offset: number[]): ymaps$IPixelGeometry
} & ymaps$IBaseGeometry


declare type ymaps$IPointGeometry = {} & ymaps$IGeometry & ymaps$IPointGeometryAccess


declare interface ymaps$IPointGeometryAccess {
getCoordinates(): number[] | null,
setCoordinates(coordinates: number[] | null): this
} 

declare type ymaps$IPolygonGeometry = {} & ymaps$IGeometry & ymaps$IPolygonGeometryAccess


declare type ymaps$IPolygonGeometryAccess = {
contains(position: number[]): boolean,
get(index: number): number[][],
getChildGeometry(index: number): ymaps$ILinearRingGeometryAccess,
getClosest(anchorPosition: number[]): {[key: string]: any},
getCoordinates(): number[][][],
getFillRule(): string,
getLength(): number,
insert(index: number, path: number[][]): ymaps$IPolygonGeometryAccess,
remove(index: number): ymaps$ILinearRingGeometryAccess,
set(index: number, path: number[][]): ymaps$IPolygonGeometryAccess,
setCoordinates(coordinates: number[][][]): ymaps$IPolygonGeometryAccess,
setFillRule(fillRule: string): ymaps$IPolygonGeometryAccess,
splice(index: number, number: number): ymaps$ILinearRingGeometryAccess[]
} & ymaps$IFreezable


declare type ymaps$IPopup<T> = {
close(force?: boolean): vow$Promise<T>,
getData(): {[key: string]: any},
getOverlay(): vow$Promise<ymaps$IOverlay>,
getOverlaySync(): ymaps$IOverlay,
getPosition(): number[],
isOpen(): boolean,
open(
position: number[],
data: {[key: string]: any} | string | HTMLElement): vow$Promise<T>,
setData(data: {[key: string]: any} | string | HTMLElement): vow$Promise<T>,
setPosition(position: number[]): vow$Promise<T>
} & ymaps$ICustomizable & ymaps$IEventEmitter


declare type ymaps$IPopupManager<T> = {
close(force?: boolean): vow$Promise<T>,
destroy(): void,
getData(): {[key: string]: any} | null,
getOptions(): ymaps$IOptionManager | null,
getOverlay(): vow$Promise<ymaps$IOverlay | null>,
getOverlaySync(): ymaps$IOverlay | null,
getPosition(): number[] | null,
isOpen(): boolean,
open(
position?: number[],
data?: {[key: string]: any} | string | HTMLElement,
options?: {[key: string]: any}): vow$Promise<T>,
setData(data: {[key: string]: any} | string | HTMLElement): vow$Promise<T>,
setOptions(options: {[key: string]: any}): vow$Promise<T>,
setPosition(position: number[]): vow$Promise<T>
} & ymaps$IEventEmitter


declare interface ymaps$IPositioningContext {
fromClientPixels(clientPixelPoint: number[]): number[],
getZoom(): number,
toClientPixels(globalPixelPoint: number[]): number[]
} 

declare interface ymaps$IProjection {
fromGlobalPixels(globalPixelPoint: number[], zoom: number): number[],
getCoordSystem(): ymaps$ICoordSystem,
isCycled(): boolean[],
toGlobalPixels(coordPoint: number[], zoom: number): number[]
} 

declare interface ymaps$IRoutePanel {
options: ymaps$IOptionManager,
state: ymaps$IDataManager,
getRoute(): multiRouter$multiRouter$MultiRoute,
switchPoints(): void
} 

declare type ymaps$ISearchControlLayout = {} & ymaps$IExpandableControlLayout


declare type ymaps$ISelectableControl = {
deselect(): void,
disable(): void,
enable(): void,
isEnabled(): boolean,
isSelected(): boolean,
select(): void
} & ymaps$IControl


declare type ymaps$ISelectableControlLayout = {} & ymaps$ILayout


declare interface ymaps$IShape {
contains(position: number[]): boolean,
equals(shape: ymaps$IShape): boolean,
getBounds(): number[][] | null,
getGeometry(): ymaps$IPixelGeometry,
getType(): string,
scale(factor: number): ymaps$IShape,
shift(offset: number[]): ymaps$IShape
} 

declare class ymaps$Monitor  {
constructor(dataManager: ymaps$IDataManager | ymaps$IOptionManager): this;
add(
name: string[] | string,
changeCallback: (event: ({[key: string]: any} | ymaps$IEvent)) => void,
context?: any,
params?: any): ymaps$Monitor;
forceChange(): ymaps$Monitor;
get(name: string): any;
remove(name: string): ymaps$Monitor;
removeAll(): ymaps$Monitor
}
    }
