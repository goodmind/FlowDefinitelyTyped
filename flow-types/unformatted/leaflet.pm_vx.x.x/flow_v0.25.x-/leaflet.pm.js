declare module 'leaflet.pm' {
        import typeof * as L from 'leaflet';

	declare module 'leaflet' {
        declare interface Map {
pm: PM$PM$Map
} 
	declare interface Polygon {
pm: PM$Edit.Edit$Line
} 
	declare interface Polyline {
pm: PM$Edit.Edit$Line
} 
	declare interface Marker {
pm: PM$Edit.Edit$Marker
} 
	declare interface LayerGroup {
pm: PM$Edit.Edit$LayerGroup
} 
	declare interface PM$Map {
addControls(options?: PM$ToolbarOptions): void,
enableDraw(shape: string, options?: PM$DrawOptions): void,
disableDraw(shape: string): void,
setPathOptions(options: PathOptions): void,
toggleRemoval(enabled: boolean): void,
globalEditEnabled(): boolean,
toggleGlobalEditMode(options?: PM$EditOptions): void,
PM$Draw: PM$Draw
} 

declare interface PM$Draw {
getShapes(): string[]
} 

declare interface PM$ToolbarOptions {
position?: string,
drawMarker?: boolean,
drawPolygon?: boolean,
drawPolyline?: boolean,
editPolygon?: boolean,
deleteLayer?: boolean
} 

declare interface PM$DrawOptions {
templineStyle?: PathOptions,
hintlineStyle?: PathOptions,
pathOptions?: PathOptions
} 

declare interface PM$EditOptions {
draggable?: boolean,
snappable?: boolean,
snapDistance?: number
} 

declare interface Edit$Line {
enable(options?: PM$EditOptions): void,
disable(poly?: Layer): void,
toggleEdit(options?: PM$EditOptions): void,
enabled(): boolean
} 

declare interface Edit$Marker {
enable(options?: PM$EditOptions): void,
disable(): void,
toggleEdit(options?: PM$EditOptions): void,
enabled(): boolean
} 

declare interface Edit$LayerGroup {
enable(options?: PM$EditOptions): void,
disable(): void,
toggleEdit(options?: PM$EditOptions): void,
enabled(): boolean,
findLayers(): Layer[],
dragging(): boolean,
getOptions(): PM$EditOptions
} 
    }

    }
