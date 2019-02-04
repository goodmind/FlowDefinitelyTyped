declare module 'waypoints' {
        declare interface WaypointOptionsBase {
offset?: string | number | (() => number),
continuous?: boolean,
enabled?: boolean,
group?: string,
horizontal?: boolean
} 
	declare type WaypointOptions = {
element: HTMLElement,
handler: (direction?: string) => void,
context?: HTMLElement
} & WaypointOptionsBase

	declare class WaypointGroup  {
first: () => Waypoint;
last: () => Waypoint;
name: string;
axis: string;
waypoints: Waypoint[]
}
	declare class WaypointContext  {
adapter: WaypointAdapter;
element: HTMLElement | Window;
waypoints: {
horizontal: {},
vertical: {}
};
destroy: () => Waypoint;
refresh: () => Waypoint
}
	declare class WaypointAdapter  {
constructor(element: HTMLElement): this;
innerHeight(): number;
innerWidth(): number;
off(event: string): void;
offset(): {
top: number,
left: number
};
on(event: string, handler: () => void): void;
outerHeight(includeMargin: boolean): number;
outerWidth(includeMargin: boolean): number;
scrollLeft(): number;
scrollTop(): number;
static extend(...objects: any[]): any;
static inArray(value: any, array: any[], startIndex: number): number;
static isEmptyObject(object: any): boolean
}
	declare class Waypoint  {
constructor(options: WaypointOptions): this;
adapter: WaypointAdapter;
context: WaypointContext;
element: HTMLElement;
group: WaypointGroup;
options: WaypointOptions;
triggerPoint: number;
destroy(): Waypoint;
disable(): Waypoint;
enable(): Waypoint;
next(): Waypoint | string;
previous(): Waypoint | string;
static destroyAll(): void;
static disableAll(): void;
static enableAll(): void;
static refreshAll(): void;
static viewportHeight(): number;
static viewportWidth(): number;
static adapters: {
push: ({
name: string,
Adapter: WaypointAdapter
})
};
static Adapter: WaypointAdapter;
static Context: {
findByElement(element: HTMLElement): WaypointContext | void
}
}
    }
