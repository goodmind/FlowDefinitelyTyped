declare module 'rot-js' {
        declare module 'global' {
        declare interface Array<T> {
random(): T,
randomize(): T[]
} 
	declare interface Number {
mod(n: number): number
} 
	declare interface FormatFunc {
(...args: any[]): string,
map: {
[key: string]: string
}
} 
	declare interface StringConstructor {
format: FormatFunc
} 
	declare interface String {
capitalize(): string,
lpad(character?: string, count?: number): string,
rpad(character?: string, count?: number): string,
format: FormatFunc
} 
    }

	declare export function isSupported(): boolean

	declare export var DEFAULT_WIDTH: number;
	declare export var DEFAULT_HEIGHT: number;
	
/**
 * Directional constants. Ordering is important!
 */
declare export var DIRS: {
"4": Array<[number, number]>,
"6": Array<[number, number]>,
"8": Array<[number, number]>
};
	
/**
 * Cancel key.
 */
declare export var VK_CANCEL: number;
	
/**
 * Help key.
 */
declare export var VK_HELP: number;
	
/**
 * Backspace key.
 */
declare export var VK_BACK_SPACE: number;
	
/**
 * Tab key.
 */
declare export var VK_TAB: number;
	
/**
 * 5 key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key.
 */
declare export var VK_CLEAR: number;
	
/**
 * Return/enter key on the main keyboard.
 */
declare export var VK_RETURN: number;
	
/**
 * Reserved, but not used.
 */
declare export var VK_ENTER: number;
	
/**
 * Shift key.
 */
declare export var VK_SHIFT: number;
	
/**
 * Control key.
 */
declare export var VK_CONTROL: number;
	
/**
 * Alt (Option on Mac) key.
 */
declare export var VK_ALT: number;
	
/**
 * Pause key.
 */
declare export var VK_PAUSE: number;
	
/**
 * Caps lock.
 */
declare export var VK_CAPS_LOCK: number;
	
/**
 * Escape key.
 */
declare export var VK_ESCAPE: number;
	
/**
 * Space bar.
 */
declare export var VK_SPACE: number;
	
/**
 * Page Up key.
 */
declare export var VK_PAGE_UP: number;
	
/**
 * Page Down key.
 */
declare export var VK_PAGE_DOWN: number;
	
/**
 * End key.
 */
declare export var VK_END: number;
	
/**
 * Home key.
 */
declare export var VK_HOME: number;
	
/**
 * Left arrow.
 */
declare export var VK_LEFT: number;
	
/**
 * Up arrow.
 */
declare export var VK_UP: number;
	
/**
 * Right arrow.
 */
declare export var VK_RIGHT: number;
	
/**
 * Down arrow.
 */
declare export var VK_DOWN: number;
	
/**
 * Print Screen key.
 */
declare export var VK_PRINTSCREEN: number;
	
/**
 * Ins(ert) key.
 */
declare export var VK_INSERT: number;
	
/**
 * Del(ete) key.
 */
declare export var VK_DELETE: number;
	declare export var VK_0: number;
	declare export var VK_1: number;
	declare export var VK_2: number;
	declare export var VK_3: number;
	declare export var VK_4: number;
	declare export var VK_5: number;
	declare export var VK_6: number;
	declare export var VK_7: number;
	declare export var VK_8: number;
	declare export var VK_9: number;
	
/**
 * Colon (:) key. Requires Gecko 15.0
 */
declare export var VK_COLON: number;
	
/**
 * Semicolon (;) key.
 */
declare export var VK_SEMICOLON: number;
	
/**
 * Less-than (<) key. Requires Gecko 15.0
 */
declare export var VK_LESS_THAN: number;
	
/**
 * Equals (=) key.
 */
declare export var VK_EQUALS: number;
	
/**
 * Greater-than (>) key. Requires Gecko 15.0
 */
declare export var VK_GREATER_THAN: number;
	
/**
 * Question mark (?) key. Requires Gecko 15.0
 */
declare export var VK_QUESTION_MARK: number;
	
/**
 * Atmark (@) key. Requires Gecko 15.0
 */
declare export var VK_AT: number;
	declare export var VK_A: number;
	declare export var VK_B: number;
	declare export var VK_C: number;
	declare export var VK_D: number;
	declare export var VK_E: number;
	declare export var VK_F: number;
	declare export var VK_G: number;
	declare export var VK_H: number;
	declare export var VK_I: number;
	declare export var VK_J: number;
	declare export var VK_K: number;
	declare export var VK_L: number;
	declare export var VK_M: number;
	declare export var VK_N: number;
	declare export var VK_O: number;
	declare export var VK_P: number;
	declare export var VK_Q: number;
	declare export var VK_R: number;
	declare export var VK_S: number;
	declare export var VK_T: number;
	declare export var VK_U: number;
	declare export var VK_V: number;
	declare export var VK_W: number;
	declare export var VK_X: number;
	declare export var VK_Y: number;
	declare export var VK_Z: number;
	declare export var VK_CONTEXT_MENU: number;
	
/**
 * 0 on the numeric keypad.
 */
declare export var VK_NUMPAD0: number;
	
/**
 * 1 on the numeric keypad.
 */
declare export var VK_NUMPAD1: number;
	
/**
 * 2 on the numeric keypad.
 */
declare export var VK_NUMPAD2: number;
	
/**
 * 3 on the numeric keypad.
 */
declare export var VK_NUMPAD3: number;
	
/**
 * 4 on the numeric keypad.
 */
declare export var VK_NUMPAD4: number;
	
/**
 * 5 on the numeric keypad.
 */
declare export var VK_NUMPAD5: number;
	
/**
 * 6 on the numeric keypad.
 */
declare export var VK_NUMPAD6: number;
	
/**
 * 7 on the numeric keypad.
 */
declare export var VK_NUMPAD7: number;
	
/**
 * 8 on the numeric keypad.
 */
declare export var VK_NUMPAD8: number;
	
/**
 * 9 on the numeric keypad.
 */
declare export var VK_NUMPAD9: number;
	
/**
 * * on the numeric keypad.
 */
declare export var VK_MULTIPLY: number;
	
/**
 * + on the numeric keypad.
 */
declare export var VK_ADD: number;
	declare export var VK_SEPARATOR: number;
	
/**
 * - on the numeric keypad.
 */
declare export var VK_SUBTRACT: number;
	
/**
 * Decimal point on the numeric keypad.
 */
declare export var VK_DECIMAL: number;
	
/**
 * / on the numeric keypad.
 */
declare export var VK_DIVIDE: number;
	
/**
 * F1 key.
 */
declare export var VK_F1: number;
	
/**
 * F2 key.
 */
declare export var VK_F2: number;
	
/**
 * F3 key.
 */
declare export var VK_F3: number;
	
/**
 * F4 key.
 */
declare export var VK_F4: number;
	
/**
 * F5 key.
 */
declare export var VK_F5: number;
	
/**
 * F6 key.
 */
declare export var VK_F6: number;
	
/**
 * F7 key.
 */
declare export var VK_F7: number;
	
/**
 * F8 key.
 */
declare export var VK_F8: number;
	
/**
 * F9 key.
 */
declare export var VK_F9: number;
	
/**
 * F10 key.
 */
declare export var VK_F10: number;
	
/**
 * F11 key.
 */
declare export var VK_F11: number;
	
/**
 * F12 key.
 */
declare export var VK_F12: number;
	
/**
 * F13 key.
 */
declare export var VK_F13: number;
	
/**
 * F14 key.
 */
declare export var VK_F14: number;
	
/**
 * F15 key.
 */
declare export var VK_F15: number;
	
/**
 * F16 key.
 */
declare export var VK_F16: number;
	
/**
 * F17 key.
 */
declare export var VK_F17: number;
	
/**
 * F18 key.
 */
declare export var VK_F18: number;
	
/**
 * F19 key.
 */
declare export var VK_F19: number;
	
/**
 * F20 key.
 */
declare export var VK_F20: number;
	
/**
 * F21 key.
 */
declare export var VK_F21: number;
	
/**
 * F22 key.
 */
declare export var VK_F22: number;
	
/**
 * F23 key.
 */
declare export var VK_F23: number;
	
/**
 * F24 key.
 */
declare export var VK_F24: number;
	
/**
 * Num Lock key.
 */
declare export var VK_NUM_LOCK: number;
	
/**
 * Scroll Lock key.
 */
declare export var VK_SCROLL_LOCK: number;
	
/**
 * Circumflex (^) key. Requires Gecko 15.0
 */
declare export var VK_CIRCUMFLEX: number;
	
/**
 * Exclamation (!) key. Requires Gecko 15.0
 */
declare export var VK_EXCLAMATION: number;
	
/**
 * Double quote () key. Requires Gecko 15.0
 */
declare export var VK_DOUBLE_QUOTE: number;
	
/**
 * Hash (#) key. Requires Gecko 15.0
 */
declare export var VK_HASH: number;
	
/**
 * Dollar sign ($) key. Requires Gecko 15.0
 */
declare export var VK_DOLLAR: number;
	
/**
 * Percent (%) key. Requires Gecko 15.0
 */
declare export var VK_PERCENT: number;
	
/**
 * Ampersand (&) key. Requires Gecko 15.0
 */
declare export var VK_AMPERSAND: number;
	
/**
 * Underscore (_) key. Requires Gecko 15.0
 */
declare export var VK_UNDERSCORE: number;
	
/**
 * Open parenthesis (() key. Requires Gecko 15.0
 */
declare export var VK_OPEN_PAREN: number;
	
/**
 * Close parenthesis ()) key. Requires Gecko 15.0
 */
declare export var VK_CLOSE_PAREN: number;
	declare export var VK_ASTERISK: number;
	
/**
 * Plus (+) key. Requires Gecko 15.0
 */
declare export var VK_PLUS: number;
	
/**
 * Pipe (|) key. Requires Gecko 15.0
 */
declare export var VK_PIPE: number;
	
/**
 * Hyphen-US/docs/Minus (-) key. Requires Gecko 15.0
 */
declare export var VK_HYPHEN_MINUS: number;
	
/**
 * Open curly bracket ({) key. Requires Gecko 15.0
 */
declare export var VK_OPEN_CURLY_BRACKET: number;
	
/**
 * Close curly bracket (}) key. Requires Gecko 15.0
 */
declare export var VK_CLOSE_CURLY_BRACKET: number;
	
/**
 * Tilde (~) key. Requires Gecko 15.0
 */
declare export var VK_TILDE: number;
	
/**
 * Comma (,) key.
 */
declare export var VK_COMMA: number;
	
/**
 * Period (.) key.
 */
declare export var VK_PERIOD: number;
	
/**
 * Slash (/) key.
 */
declare export var VK_SLASH: number;
	
/**
 * Back tick (`) key. *
 */
declare export var VK_BACK_QUOTE: number;
	
/**
 * Open square bracket ([) key.
 */
declare export var VK_OPEN_BRACKET: number;
	
/**
 * Back slash (\) key.
 */
declare export var VK_BACK_SLASH: number;
	
/**
 * Close square bracket (]) key.
 */
declare export var VK_CLOSE_BRACKET: number;
	
/**
 * Quote (''') key.
 */
declare export var VK_QUOTE: number;
	
/**
 * Meta key on Linux, Command key on Mac.
 */
declare export var VK_META: number;
	
/**
 * AltGr key on Linux. Requires Gecko 15.0
 */
declare export var VK_ALTGR: number;
	
/**
 * Windows logo key on Windows. Or Super or Hyper key on Linux. Requires Gecko 15.0
 */
declare export var VK_WIN: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_KANA: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_HANGUL: number;
	
/**
 * 英数 key on Japanese Mac keyboard. Requires Gecko 15.0
 */
declare export var VK_EISU: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_JUNJA: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_FINAL: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_HANJA: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_KANJI: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_CONVERT: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_NONCONVERT: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_ACCEPT: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_MODECHANGE: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_SELECT: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_PRINT: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_EXECUTE: number;
	
/**
 * Linux support for this keycode was added in Gecko 4.0.
 */
declare export var VK_SLEEP: number;
	declare export interface Size {
width: number,
height: number
} 
	
      declare var npm$namespace$Text: {
        measure: typeof Text$measure,
tokenize: typeof Text$tokenize,
        RE_COLORS: typeof Text$RE_COLORS,
TYPE_BG: typeof Text$TYPE_BG,
TYPE_FG: typeof Text$TYPE_FG,
TYPE_NEWLINE: typeof Text$TYPE_NEWLINE,
TYPE_TEXT: typeof Text$TYPE_TEXT,
      }
declare var Text$RE_COLORS: RegExp;

declare var Text$TYPE_BG: number;

declare var Text$TYPE_FG: number;

declare var Text$TYPE_NEWLINE: number;

declare var Text$TYPE_TEXT: number;

declare function Text$measure(str: string, maxWidth: number): Size


declare interface Text$Token {
type: number,
value?: string
} 

declare function Text$tokenize(str: string, maxWidth: number): Text$Token[]

	declare export interface RNGable {
getSeed(): number,
setSeed(seed: number): RNGable,
getUniform(): number,
getUniformInt(lowerBound: number, upperBound: number): number,
getNormal(mean?: number, stddev?: number): number,
getPercentage(): number,
getWeightedValue<K: string>(data: Record<K, number>): K,
getState(): [number, number, number, number],
setState(state: [number, number, number, number]): RNGable,
clone(): RNGable
} 
	
      declare var npm$namespace$RNG: {
        getSeed: typeof RNG$getSeed,
setSeed: typeof RNG$setSeed,
getUniform: typeof RNG$getUniform,
getUniformInt: typeof RNG$getUniformInt,
getNormal: typeof RNG$getNormal,
getPercentage: typeof RNG$getPercentage,
getWeightedValue: typeof RNG$getWeightedValue,
getState: typeof RNG$getState,
setState: typeof RNG$setState,
clone: typeof RNG$clone,
        
      }
declare function RNG$getSeed(): number


declare function RNG$setSeed(seed: number): RNGable


declare function RNG$getUniform(): number


declare function RNG$getUniformInt(lowerBound: number, upperBound: number): number


declare function RNG$getNormal(mean?: number, stddev?: number): number


declare function RNG$getPercentage(): number


declare function RNG$getWeightedValue(data: {
[key: string]: number
}): string


declare function RNG$getWeightedValue(data: any): any


declare function RNG$getState(): [number, number, number, number]


declare function RNG$setState(state: [number, number, number, number]): RNGable


declare function RNG$clone(): RNGable

	declare export interface DisplayOptions {
width?: number,
height?: number,
transpose?: boolean,
fontSize?: number,
fontFamily?: string,
fontStyle?: string,
fg?: string,
bg?: string,
spacing?: number,
border?: number,
layout?: string,
forceSquareRatio?: boolean,
tileWidth?: number,
tileHeight?: number,
tileMap?: any,
tileSet?: any,
tileColorize?: boolean,
termColor?: string
} 
	declare export class Display  {
DEBUG: DigCallback;
constructor(options?: DisplayOptions): this;
clear(): void;
computeSize(availWidth: number, availHeight: number): [number, number];
computeFontSize(availWidth: number, availHeight: number): number;
draw(
x: number,
y: number,
character: string | string[],
fg?: string | string[],
bg?: string | string[]): void;
drawText(x: number, y: number, text: string, maxWidth?: number): number;
eventToPosition(e: UIEvent): [number, number] | number;
getContainer(): Node;
getOptions(): DisplayOptions;
setOptions(options: DisplayOptions): Display
}
	declare export type DigCallback = (x: number, y: number, cellValue: number) => any;
	declare export type DoorCallback = (x: number, y: number) => any;
	declare export type CanBeDugCallback = (x: number, y: number) => boolean;
	declare export type IsWallCallback = (x: number, y: number) => boolean;
	declare export class Map  {
constructor(width: number, height: number): this;
create(callback?: DigCallback): Map
}
	declare export interface CellularOptions {
born?: number[],
survive?: number[],
topology?: number,
connected?: boolean
} 
	declare export interface DiggerOptions {
roomWidth?: [number, number],
roomHeight?: [number, number],
corridorLength?: [number, number],
dugPercentage?: number,
timeLimit?: number
} 
	declare export interface UniformOptions {
roomWidth?: [number, number],
roomHeight?: [number, number],
roomDugPercentage?: number,
timeLimit?: number
} 
	declare export interface RogueOptions {
cellWidth?: number,
cellHeight?: number,
roomWidth?: [number, number],
roomHeight?: [number, number]
} 
	declare export interface RoomOptions {
roomWidth?: [number, number],
roomHeight?: [number, number]
} 
	declare export interface CorridorOptions {
corridorLength: [number, number]
} 
	declare export type FeatureOptions = RoomOptions | CorridorOptions;
	declare class Map$Arena mixins Map {}

declare class Map$DividedMaze mixins Map {}

declare class Map$IceyMaze mixins Map {
constructor(width?: number, height?: number, regularity?: number): this
}

declare class Map$EllerMaze mixins Map {}

declare class Map$Cellular mixins Map {
constructor(width?: number, height?: number, options?: CellularOptions): this;
randomize(probability: number): this;
setOptions(options: CellularOptions): void;
set(x: number, y: number, value: any): void;
serviceCallback(callback: DigCallback): void;
connect(callback: DigCallback, value?: number, connectionCallback?: DoorCallback): void
}

declare class Map$Dungeon mixins Map {
getRooms(): Map$Feature.Feature$Room[];
getCorridors(): Map$Feature.Feature$Corridor[]
}

declare class Map$Digger mixins Map$Dungeon {
constructor(width?: number, height?: number, options?: DiggerOptions): this
}

declare class Map$Uniform mixins Map$Dungeon {
constructor(width?: number, height?: number, options?: UniformOptions): this
}

declare class Map$Rogue mixins Map {
constructor(width?: number, height?: number, options?: RogueOptions): this
}

declare class Map$Feature  {
isValid(canBeDugCallback: CanBeDugCallback): boolean;
create(digCallback: DigCallback): void;
debug(): void;
static createRandomAt(
x: number,
y: number,
dx: number,
dy: number,
options?: FeatureOptions): Map$Feature
}

declare class Feature$Room  {
constructor(x1: number, y1: number, x2: number, y2: number, doorX?: number, doorY?: number): this;
static createRandom(availWidth: number, availHeight: number, options?: RoomOptions): Feature$Room;
static createRandomAt(
x: number,
y: number,
dx: number,
dy: number,
options?: RoomOptions): Feature$Room;
static createRandomCenter(cx: number, cy: number, options?: RoomOptions): Feature$Room;
create(digCallback: DigCallback): void;
debug(): void;
addDoor(x: number, y: number): this;
getDoors(callback: DoorCallback): this;
clearDoors(): this;
addDoors(isWallCallback: IsWallCallback): this;
isValid(isWallCallback: IsWallCallback, canBeDugCallback: CanBeDugCallback): boolean;
getCenter(): [number, number];
getLeft(): number;
getRight(): number;
getTop(): number;
getBottom(): number
}

declare class Feature$Corridor  {
constructor(startX: number, startY: number, endX: number, endY: number): this;
static createRandomAt(
x: number,
y: number,
dx: number,
dy: number,
options?: CorridorOptions): Feature$Corridor;
create(digCallback: DigCallback): boolean;
debug(): void;
isValid(isWallCallback: IsWallCallback, canBeDugCallback: CanBeDugCallback): boolean;
createPriorityWalls(priorityWallCallback: DoorCallback): void
}
	declare export type LightPassesCallback = (x: number, y: number) => boolean;
	declare export type FOVCallback = (x: number, y: number, R: number, visibility: number) => any;
	declare export interface FOVOptions {
topology?: number
} 
	declare export class FOV  {
constructor(lightPassesCallback: LightPassesCallback, options?: FOVOptions): this;
compute(x: number, y: number, R: number, callback: FOVCallback): void
}
	declare class FOV$DiscreteShadowcasting mixins FOV {}

declare class FOV$PreciseShadowcasting mixins FOV {}

declare class FOV$RecursiveShadowcasting mixins FOV {
compute180(x: number, y: number, R: number, dir: number, callback: FOVCallback): void;
compute90(x: number, y: number, R: number, dir: number, callback: FOVCallback): void
}


      declare var npm$namespace$RecursiveShadowcasting: {
        
        OCTANTS: typeof RecursiveShadowcasting$OCTANTS,
      }
declare var RecursiveShadowcasting$OCTANTS: Array<[number, number, number, number]>;
	declare export type ColorArray = [number, number, number];
	
      declare var npm$namespace$Color: {
        fromString: typeof Color$fromString,
add: typeof Color$add,
add_: typeof Color$add_,
multiply: typeof Color$multiply,
multiply_: typeof Color$multiply_,
interpolate: typeof Color$interpolate,
interpolateHSL: typeof Color$interpolateHSL,
randomize: typeof Color$randomize,
rgb2hsl: typeof Color$rgb2hsl,
hsl2rgb: typeof Color$hsl2rgb,
toRGB: typeof Color$toRGB,
toHex: typeof Color$toHex,
        
      }
declare function Color$fromString(str: string): [number, number, number]


declare function Color$add(
color1: [number, number, number],
...colors2: Array<[number, number, number]>): [number, number, number]


declare function Color$add_(
color1: [number, number, number],
...colors2: Array<[number, number, number]>): [number, number, number]


declare function Color$multiply(
color1: [number, number, number],
...colors2: Array<[number, number, number]>): [number, number, number]


declare function Color$multiply_(
color1: [number, number, number],
...colors2: Array<[number, number, number]>): [number, number, number]


declare function Color$interpolate(
color1: [number, number, number],
color2: [number, number, number],
factor: number): [number, number, number]


declare function Color$interpolateHSL(
color1: [number, number, number],
color2: [number, number, number],
factor: number): [number, number, number]


declare function Color$randomize(
color: [number, number, number],
diff: number | [number, number, number]): [number, number, number]


declare function Color$rgb2hsl(color: [number, number, number]): [number, number, number]


declare function Color$hsl2rgb(color: [number, number, number]): [number, number, number]


declare function Color$toRGB(color: [number, number, number]): string


declare function Color$toHex(color: [number, number, number]): string

	declare export type ReflectivityCallback = (x: number, y: number) => number;
	declare export type LightingCallback = (x: number, y: number, color: [number, number, number]) => any;
	declare export interface LightingOptions {
passes?: number,
emissionThreshold?: number,
range?: number
} 
	declare export class Lighting  {
constructor(reflectivityCallback: ReflectivityCallback, options?: LightingOptions): this;
setOptions(options: LightingOptions): this;
setFOV(fov: FOV): this;
setLight(x: number, y: number, color: string | [number, number, number]): this;
clearLights(): void;
reset(): this;
compute(lightingCallback: LightingCallback): this
}
	declare export type PassableCallback = (x: number, y: number) => boolean;
	declare export type PathCallback = (x: number, y: number) => any;
	declare export interface PathOptions {
topology?: number
} 
	declare export class Path  {
constructor(toX: number, toY: number, passableCallback: PassableCallback, options?: PathOptions): this;
compute(fromX: number, fromY: number, callback: PathCallback): void
}
	declare class Path$Dijkstra mixins Path {}

declare class Path$AStar mixins Path {}
	declare export interface Noise {
get(x: number, y: number): number
} 
	declare class Noise$Simplex mixins Noise {
constructor(gradients?: number): this;
get(xin: number, yin: number): number
}
	declare export class EventQueue<T>  {
getTime(): number;
clear(): void;
add(event: T, time: number): void;
get(): T;
getEventTime(event: T): number;
remove(event: T): boolean;
remove(index: number): boolean
}
	declare export class Scheduler  {
getTime(): number;
add(item: any, repeat: boolean, time?: number): Scheduler;
getTimeOf(item: any): number;
clear(): Scheduler;
remove(item: any): any;
next(): any
}
	declare class Scheduler$Simple mixins Scheduler {}

declare class Scheduler$Speed mixins Scheduler {}

declare class Scheduler$Action mixins Scheduler {
setDuration(time: number): Scheduler$Action
}
	declare export class Engine  {
constructor(scheduler: Scheduler): this;
start(): Engine;
lock(): Engine;
unlock(): Engine
}
	declare export interface StringGeneratorOptions {
words?: boolean,
order?: number,
prior?: number
} 
	declare export class StringGenerator  {
constructor(options?: StringGeneratorOptions): this;
clear(): void;
generate(): string;
observe(str: string): void;
getStats(): string
}
    }
