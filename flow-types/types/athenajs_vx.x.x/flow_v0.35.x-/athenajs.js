declare module 'athenajs' {
        declare export function Dom(sel?: string | HTMLElement): _Dom<HTMLElement>

	declare export class Scene  {
constructor(options?: SceneOptions): this;
map: Map;
hudScene: Scene | null;
running: boolean;
opacity: number;
addObject(object: Drawable | Drawable[], layer?: number): Scene;
animate(fxName: string, options: EffectOptions): Promise;
bindEvents(eventList: string): void;
debug(bool?: boolean): void;
fadeIn(duration: number): Promise;
fadeOut(duration: number): Promise;
fadeInAndOut(inDuration: number, delay: number, outDuration: number): Promise;
getOpacity(): number;
getPlayTime(): number;
load(type: string, src: string, id?: string): void;
loadAudio(src: string, id?: string): void;
loadImage(src: string, id?: string): void;
loadMap(src: string, id?: string): void;
notify(name: string, data?: JSObject): void;
removeObject(obj: Drawable): void;
setBackgroundImage(image: string | HTMLImageElement): void;
setLayerPriority(layer: number, background: boolean): void;
setMap(map: Map | JSObject, x?: number, y?: number): void;
setOpacity(opacity: number): void;
setup(): void;
start(): void;
stop(): void
}
	declare export class Game  {
constructor(options: GameOptions): this;
bindEvents(eventList: string): void;
setScene(scene: Scene): void;
toggleFullscreen(): void;
toggleSound(bool: boolean): void;
toggleTileInspector(bool: boolean): void;
togglePause(): void;
scene: Scene;
sound: boolean
}
	declare export class Drawable  {
constructor(type: string, options: DrawableOptions): this;
addChild(child: Drawable): void;
animate(name: string, options: JSObject): Promise;
center(): Drawable;
destroy(data?: any): void;
moveTo(x: number, y: number, duration?: number): Drawable;
notify(id: string, data?: JSObject): void;
onCollision(object: Drawable): void;
onEvent(eventType: string, data?: JSObject): void;
playSound(id: string, options?: {
pan?: boolean,
loop?: false
}): void;
setBehavior(
behavior: string | {
new (sprite: Drawable, options?: JSObject): Behavior
},
options?: JSObject): void;
setScale(scale: number): void;
getCurrentWidth(): number;
getCurrentHeight(): number;
getProperty(prop: string): any;
setProperty(prop: string, value: any): void;
setMask(mask: MaskOptions | null, exclude?: boolean): void;
stopAnimate(endValue?: number): void;
reset(): void;
show(): void;
hide(): void;
type: string;
width: number;
height: number;
x: number;
y: number;
vx: number;
vy: number;
canCollide: boolean;
currentMovement: string;
running: boolean;
movable: boolean;
behavior: Behavior;
currentMap: Map;
data: JSObject;
visible: boolean
}
	declare export interface MaskOptions {
x: number,
y: number,
width: number,
height: number
} 
	declare export interface MenuItem {
text: string,
selectable: boolean,
visible: boolean,
active?: boolean
} 
	declare export interface MenuOptions {
title: string,
color: string,
menuItems: MenuItem[]
} 
	declare export class Menu mixins Drawable {
constructor(id: string, options: MenuOptions): this;
nextItem(): void;
getSelectedItemIndex(): number
}
	declare export class SimpleText mixins Drawable {
constructor(type: string, simpleTextOptions: SimpleTextOptions): this;
getCurrentOffsetX(): number;
getCurrentOffsetY(): number;
setColor(color: string): void;
setSize(width: number, height: number): void;
setText(text: string): void
}
	declare export class Paint mixins Drawable {
constructor(type: string, paintOptions: PaintOptions): this;
arc(
cx: number,
cy: number,
r: number,
starteAngle: number,
endAngle: number,
fillStyle: string,
borderSize: number): void;
fill(color?: string): void;
circle(
cx: number,
cy: number,
r: number,
fillStyle?: string,
borderWidth?: number,
borderStyle?: string): void;
rect(x: number, y: number, width: number, height: number, color: string): void;
name: string;
color: string
}
	declare export class BitmapText mixins Drawable {
constructor(type: string, textOptions: BitmapTextOptions): this;
setText(text: string): void
}
	declare export class Sprite mixins Drawable {
constructor(type: string, spriteOptions: SpriteOptions): this;
addAnimation(name: string, imgPath: string, options: AnimOptions): void;
setAnimation(name: string, fn?: Callback, frameNum?: number, revert?: boolean): void;
clearMove(): void
}
	declare export interface pixelPos {
x: number,
y: number
} 
	declare export class Map  {
constructor(options: MapOptions): this;
addObject(obj: Drawable, layerIndex?: number): void;
addTileSet(tiles: TileDesc[]): void;
checkMatrixForCollision(
buffer: number[],
matrixWidth: number,
x: number,
y: number,
behavior: number): boolean;
clear(tileNum?: number, behavior?: number): void;
getTileBehaviorAtIndex(col: number, row: number): number;
getTileIndexFromPixel(x: number, y: number): pixelPos;
moveTo(x: number, y: number): void;
respawn(): void;
setData(map: Uint8Array, behaviors: Uint8Array): void;
setEasing(easing: string): void;
shift(startLine: number, height: number): void;
updateTile(col: number, row: number, tileNum?: number, behavior?: number): void;
duration: number;
numRows: number;
numCols: number;
width: number;
height: number;
tileWidth: number;
tileHeight: number
}
	declare export class Tile  {
constructor(options: JSObject): this;
static TYPE: {
AIR: 1,
WALL: 2,
LADDER: 3
};
offsetX: number;
offsetY: number;
width: number;
height: number;
inertia: number;
upCollide: boolean;
downCollide: boolean
}
	declare export interface TileDesc {
offsetX: number,
offsetY: number,
width: number,
height: number
} 
	declare export interface MapOptions {
src: string,
tileWidth: number,
tileHeight: number,
width: number,
height: number,
viewportW?: number,
viewportH?: number,
buffer?: ArrayBuffer
} 
	declare export interface FXInstance {
addFX(
fxName: string,
FxClass: {
new (options: EffectOptions, display: Display): Effect
}): void
} 
	declare export var FX: FXInstance;
	declare export class _FX  {

/**
 * Creates the FX class, adding the linear easing
 */
constructor(): this;

/**
 * Add a new Effect
 */
addFX(fxName: string, FxClass: {
new (): Effect
}): void;

/**
 * Retrieve an effect Class by its name
 */
getEffect(fxName: string): Effect;

/**
 * Add a new easing function for other objects to use
 */
addEasing(
easingName: string,
easingFn: (x?: number, t?: number, b?: number, c?: number, d?: number) => void): void;

/**
 * Retrieves an easing function
 */
getEasing(
easingName: string): (x?: number, t?: number, b?: number, c?: number, d?: number) => void
}
	declare export interface EffectOptions {
easing?: string,
when?: string,
startValue?: number,
endValue?: number,
duration?: number
} 
	declare export class Effect  {
width: number;
height: number;
buffer: RenderingContext;
animProgress: number;
startValue: number;
ended: boolean;

/**
 * This the class constructor. Default options are:
 */
constructor(options: EffectOptions, display: Display): this;

/**
 * Changes the easing function used for the ffect
 */
setEasing(
easing: (x?: number, t?: number, b?: number, c?: number, d?: number) => void): void;

/**
 * Called when the ffect is started.
 * 
 * This method can be overriden but the super should always be called
 */
start(): Promise;

/**
 * called when the effect is stopped
 */
stop(object: any, setEndValue: any): void;

/**
 * Calculates current animation process
 * 
 * This method can be overridden but the super should always be calle first
 */
process(ctx: RenderingContext, fxCtx?: RenderingContext, obj?: any): boolean
}
	declare export type RenderingContext = CanvasRenderingContext2D;
	declare export interface DisplayOptions {
width: number,
height: number,
type: string,
layers?: boolean[],
name: string
} 
	declare export class Display  {

/**
 * Creates a new Display instance
 */
constructor(options: DisplayOptions, target: string | HTMLElement): this;

/**
 * Creates a new (offscreen) drawing buffer
 */
getBuffer(width: number, height: number): RenderingContext;

/**
 * Toggles fullscreen display scaling
 */
toggleFullscreen(): void;

/**
 * Changes the zIndex property of the specified layer canvas
 */
setLayerZIndex(layer: number, zIndex: number): void;

/**
 * Clears a canvas display buffer
 */
clearScreen(ctx: RenderingContext): void;

/**
 * Clears every rendering buffer, including the special fxCtx one
 */
clearAllScreens(): void;

/**
 * Changes the (CSS) opacity of a canvas
 */
setCanvasOpacity(canvas: HTMLElement, opacity: number): void;

/**
 * Renders the specified scene
 */
renderScene(scene: Scene): void;

/**
 * Prepares the canvas before rendering images.
 * 
 * Explanation: during development, I noticed that the very first time
 * the ctx.drawImage() was used to draw onto a canvas, it took a very long time,
 * like at least 10ms for a very small 32x32 pixels drawImage.
 * 
 * Subsequent calls do not have this problem and are instant.
 * Maybe some ColorFormat conversion happens.
 * 
 * This method makes sure that when the game starts rendering, we don't have
 * any of these delays that can impact gameplay and alter the gameplay experience
 * in a negative way.
 */
prepareCanvas(resources: JSObject[]): void;

/**
 * Starts an animation on the display
 */
animate(fxName: string, options: EffectOptions, context: RenderingContext): Promise;

/**
 * stops current animation
 * 
 * TODO
 */
stopAnimate(fxName?: string): void;

/**
 * Executes an effect on a frame at a given time
 */
executeFx(
ctx: RenderingContext,
fxCtx: RenderingContext,
obj: Drawable,
time: number,
when: string): void;

/**
 * Clears every display layer and clears fx queues
 */
clearDisplay(): void
}
	declare export var InputManager: _InputManager;
	declare export class MapEvent  {

/**
 * Creates a new MapEvent
 */
constructor(map: Map): this;

/**
 * Resets the MapEvent switches, events and items
 */
reset(): void;

/**
 * Adds a new [`Drawable`]{#item} onto the map
 */
addItem(id: string, item: Drawable): void;

/**
 * Returns an item
 */
getItem(id: string): Drawable | void;
setSwitch(id: string, bool: boolean): void;
toggleSwitch(id: string): void;

/**
 * Retrieves a switch from the map using its id
 */
getSwitch(id: string): any;

/**
 * checks of conditions of specified trigger are valid
 */
checkConditions(trigger: JSObject): boolean;
handleAction(options: JSObject): void;
handleEvent(options: JSObject): boolean;

/**
 * Schedule adding a new object to the map
 */
scheduleSprite(spriteId: string, spriteOptions: JSObject, delay: number): Drawable;

/**
 * Add a new wave of objects to the map
 * Used for example when the player triggers apparition of several enemies or bonuses
 * @related {Wave}
 */
handleWave(options: JSObject): boolean;
endWave(): void;
triggerEvent(id: string): void;
isEventTriggered(id: string): boolean
}
	declare export class Behavior  {
vx: number;
vy: number;
gravity: number;
sprite: Drawable;
constructor(sprite: Drawable, options?: JSObject): this;
onUpdate(timestamp: number): void;
onVXChange(vx: number): void;
onVYChange(vy: number): void;

/**
 * Returns current mapEvent
 */
getMapEvent(): MapEvent;
reset(): void
}
	declare export interface _AudioManager {
audioCache: JSObject,
enabled: boolean,

/**
 * Adds a new sound element to the audio cache.
 * *Note* if a sound with the same id has already been added, it will be replaced
 * by the new one.
 */
addSound(id: string, element: HTMLAudioElement): void,

/**
 * Toggles global sound playback
 */
toggleSound(bool: boolean): void,

/**
 * Plays the specified sound with `id`.
 */
play(id: string, loop?: boolean, volume?: number, panning?: number): any,

/**
 * Stops playing the sound id
 */
stop(id: string, instanceId: any): void
} 
	declare export var AudioManager: _AudioManager;
	declare export interface Res {
id: string,
type: string,
src: string
} 
	declare export type Callback = (...args: any[]) => void;
	declare export interface _NotificationManager {
notify(name: string, data?: JSObject): void
} 
	declare export var NotificationManager: _NotificationManager;
	declare export interface _ResourceManager {
addResources(resource: Res, group?: string): Promise,
getCanvasFromImage(image: HTMLImageElement): HTMLCanvasElement,
getResourceById(id: string, group?: string, fullObject?: boolean): any,
loadResources(group: string, progressCb?: Callback, errorCb?: Callback): void,
loadImage(res: Res, group?: string): Promise,
loadAudio(res: Res, group?: string): Promise,
newResourceFromPool(id: string): any,
registerScript(id: string, elt: any, poolSize?: number): void
} 
	declare export var ResourceManager: _ResourceManager;
	declare export interface _InputManager {

/**
 * A list of common keyCodes
 */
KEYS: {
"UP": 38,
"DOWN": 40,
"LEFT": 37,
"RIGHT": 39,
"SPACE": 32,
"ENTER": 13,
"ESCAPE": 27,
"CTRL": 17
},

/**
 * List of common pad buttons
 */
PAD_BUTTONS: {
32: 1,
FACE_0: 1,
FACE_3: 2,
FACE_4: 3,
LEFT_SHOULDER: 4,
RIGHT_SHOULDER: 5,
LEFT_SHOULDER_BOTTOM: 6,
RIGHT_SHOULDER_BOTTOM: 7,
SELECT: 8,
START: 9,
LEFT_ANALOGUE_STICK: 10,
RIGHT_ANALOGUE_STICK: 11,
38: 12,
40: 13,
37: 14,
39: 15
},
axes: JSObject,
newGamepadPollDelay: number,
gamepadSupport: boolean,
recording: boolean,
playingEvents: boolean,
playingPos: number,
pad: null,
latches: JSObject,
keyPressed: JSObject,
padPressed: JSObject,
keyCb: JSObject,
enabled: boolean,
inputMode: string,
dPadJoystick: null,
jPollInterval: number,

/**
 * Initializes the InputManager with a reference to the game.
 * 
 * This method prepares the InputManager by reseting keyboard states/handlers and
 * set current inputMode
 */
init(): void,

/**
 * Starts recording input events. They are stored into `InputManager.recordedEvents`
 */
startRecordingEvents(): void,

/**
 * Stops recording events.
 */
stopRecordingEvents(): void,

/**
 * After events have been reccorded they can be played back using this method.
 */
playRecordedEvents(): void,

/**
 * Sets next key states using recorded events
 * 
 * TODO: add an optional callback to be called at the end of the playback
 * so that demo can be looped.
 */
nextRecordedEvents(): void,

/**
 * Saves current event state onto the recordedEvents stack
 * Changes input mode
 */
setInputMode(mode: string): void,

/**
 * Returns an object with the state of all keys
 */
getAllKeysStatus(): JSObject,
getKeyStatus(key: string, latch: boolean): boolean,
isKeyDown(key: string | number, latch?: boolean): boolean,

/**
 * Install callback that gets called when a key is pressed/released
 */
installKeyCallback(
key: string,
event: string,
callback: (key: string, event: string) => void): void,
removeKeyCallback(key: string, event: string, callback: () => void): void,
clearEvents(): void
} 
	declare export interface Promise {
then(val?: () => any): Promise,
catch(val?: () => any): Promise
} 
	declare export class Deferred  {
constructor(): this;

/**
 * Creates and immediately resolves a new deferred.
 */
static resolve(val?: any): Promise;
promise: Promise;
reject(val: any): void;
resolve(val: any): void
}
	declare export type _Dom<TElement> = {
[key: number]: TElement,
length: number,
css(prop: string, val: string): _Dom<TElement>,
css(prop: JSObject): _Dom<TElement>,
css(prop: string): string | null,
find(selector: string): _Dom<TElement>,
appendTo(selector: string | _Dom<TElement> | HTMLElement): _Dom<TElement>,
attr(att: string, val: string): _Dom<TElement>,
attr(att: JSObject): _Dom<TElement>,
addClass(classes: string): _Dom<TElement>,
removeClass(classes: string): _Dom<TElement>,
html(str: string): _Dom<TElement>,
show(): _Dom<TElement>,
hide(): _Dom<TElement>
} & Iterable<TElement>

	declare export interface GameOptions {
name: string,
showFps: boolean,
width: number,
height: number,
debug: boolean,
scene?: Scene,
target?: string | HTMLElement,
sound?: boolean
} 
	declare export interface SceneOptions {
name?: string,
resources?: Res[],
opacity?: number,
layers?: number,
hudScene?: Scene
} 
	declare export interface DrawableOptions {
x?: number,
y?: number,
behavior?: {
new (sprite: Drawable, options?: JSObject): Behavior
},
canCollide?: boolean,
canCollideFriendBullet?: boolean,
collideGroup?: number,
objectId?: string,
layer?: number,
map?: Map,
visible?: boolean,
pool?: number
} 
	declare export type SimpleTextOptions = {
text?: string,
width?: number,
height?: number,
fontFace?: string,
fontSize?: string,
fontStyle?: string,
fontWeight?: string,
align?: string,
color?: string
} & DrawableOptions

	declare export type PaintOptions = {
width?: number,
height?: number,
color?: string,
lineHeight?: number
} & DrawableOptions

	declare export type BitmapTextOptions = {
width?: number,
height?: number,
offsetX: number,
startY: number,
charWidth: number,
charHeight: number,
imageId?: string,
imageSrc?: string,
scrollOffsetX?: number,
scrollOffsetY?: number,
text?: string,
size?: string
} & DrawableOptions

	declare export type SpriteOptions = {
easing?: string,
imageId?: string,
animations?: Animations,
data?: JSObject
} & DrawableOptions

	declare export interface AnimOptions {
numFrames: number,
frameWidth: number,
frameHeight: number,
frameDuration: number,
offsetX?: number,
offsetY?: number,
frameSpacing?: number
} 
	declare export interface AnimationObject {
frameDuration?: number,
frames: Array<{
offsetX: number,
offsetY: number,
width: number,
height: number,
hitBox?: {
x: number,
y: number,
x2: number,
y2: number
},
plane?: number
}>,
loop?: number,
speed?: number
} 
	declare export interface JSObject {
[key: string]: any
} 
	declare export interface Animations {
[key: string]: AnimationObject
} 
	declare export interface GameEvent {
type: string,
data: JSObject
} 
    }
