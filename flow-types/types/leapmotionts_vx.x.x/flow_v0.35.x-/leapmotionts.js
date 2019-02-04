declare module 'leapmotionts' {
        declare export class EventDispatcher  {
constructor(): this;
hasEventListener(type: string, listener: Function): boolean;
addEventListener(typeStr: string, listenerFunc: Function): void;
removeEventListener(typeStr: string, listenerFunc: Function): void;
dispatchEvent(evt: LeapEvent): void
}
	declare export interface Listener {
onConnect(controller: Controller): void,
onDisconnect(controller: Controller): void,
onExit(controller: Controller): void,
onFrame(controller: Controller, frame: Frame): void,
onInit(controller: Controller): void
} 
	declare export class DefaultListener mixins EventDispatcher, Listener {
constructor(): this;
onConnect(controller: Controller): void;
onDisconnect(controller: Controller): void;
onExit(controller: Controller): void;
onFrame(controller: Controller, frame: Frame): void;
onInit(controller: Controller): void
}
	declare export class LeapEvent  {
static LEAPMOTION_INIT: string;
static LEAPMOTION_CONNECTED: string;
static LEAPMOTION_DISCONNECTED: string;
static LEAPMOTION_EXIT: string;
static LEAPMOTION_FRAME: string;
frame: Frame;
constructor(type: string, targetListener: Listener, frame?: Frame): this;
getTarget(): any;
getType(): string
}
	declare export class LeapUtil  {
static PI: number;
static DEG_TO_RAD: number;
static RAD_TO_DEG: number;
static TWO_PI: number;
static HALF_PI: number;
static EPSILON: number;
constructor(): this;
static toDegrees(radians: number): number;
static isNearZero(value: number): boolean;
static vectorIsNearZero(inVector: Vector3): boolean;
static extractRotation(mtxTransform: Matrix): Matrix;
static rotationInverse(mtxRot: Matrix): Matrix;
static rigidInverse(mtxTransform: Matrix): Matrix;
static componentWiseMin(vLHS: Vector3, vRHS: Vector3): Vector3;
static componentWiseMax(vLHS: Vector3, vRHS: Vector3): Vector3;
static componentWiseScale(vLHS: Vector3, vRHS: Vector3): Vector3;
static componentWiseReciprocal(inVector: Vector3): Vector3;
static minComponent(inVector: Vector3): number;
static maxComponent(inVector: Vector3): number;
static heading(inVector: Vector3): number;
static elevation(inVector: Vector3): number;
static normalizeSpherical(vSpherical: Vector3): Vector3;
static cartesianToSpherical(vCartesian: Vector3): Vector3;
static sphericalToCartesian(vSpherical: Vector3): Vector3;
static clamp(inVal: number, minVal: number, maxVal: number): number;
static lerp(a: number, b: number, coefficient: number): number;
static lerpVector(vec1: Vector3, vec2: Vector3, coefficient: number): Vector3
}
	declare export class Controller mixins EventDispatcher {
frameHistory: Frame[];
connection: WebSocket;
_isConnected: boolean;
_isGesturesEnabled: boolean;
constructor(host?: string): this;
frame(history?: number): Frame;
setListener(listener: Listener): void;
enableGesture(type: number, enable?: boolean): void;
isGestureEnabled(type: number): boolean;
isConnected(): boolean
}
	declare export class Pointable  {
direction: Vector3;
frame: Frame;
hand: Hand;
id: number;
length: number;
width: number;
tipPosition: Vector3;
tipVelocity: Vector3;
isFinger: boolean;
isTool: boolean;
constructor(): this;
isValid(): boolean;
isEqualTo(other: Pointable): boolean;
static invalid(): Pointable;
toString(): string
}
	declare export class Gesture  {
static STATE_INVALID: number;
static STATE_START: number;
static STATE_UPDATE: number;
static STATE_STOP: number;
static TYPE_INVALID: number;
static TYPE_SWIPE: number;
static TYPE_CIRCLE: number;
static TYPE_SCREEN_TAP: number;
static TYPE_KEY_TAP: number;
duration: number;
durationSeconds: number;
frame: Frame;
hands: Hand[];
id: number;
pointables: Pointable[];
state: number;
type: number;
constructor(): this;
isEqualTo(other: Gesture): boolean;
isValid(): boolean;
static invalid(): Gesture;
toString(): string
}
	declare export class Finger mixins Pointable {
constructor(): this;
static invalid(): Finger
}
	declare export class Tool mixins Pointable {
constructor(): this;
static invalid(): Tool
}
	declare export class Hand  {
direction: Vector3;
fingers: Finger[];
frame: Frame;
id: number;
palmNormal: Vector3;
palmPosition: Vector3;
palmVelocity: Vector3;
pointables: Pointable[];
sphereCenter: Vector3;
sphereRadius: number;
tools: Tool[];
rotation: Matrix;
scaleFactorNumber: number;
translationVector: Vector3;
constructor(): this;
isValid(): boolean;
isEqualTo(other: Hand): boolean;
finger(id: number): Finger;
tool(id: number): Tool;
pointable(id: number): Pointable;
rotationAxis(sinceFrame: Frame): Vector3;
rotationAngle(sinceFrame: Frame, axis?: Vector3): number;
rotationMatrix(sinceFrame: Frame): Matrix;
scaleFactor(sinceFrame: Frame): number;
translation(sinceFrame: Frame): Vector3;
static invalid(): Hand
}
	declare export class Frame  {
fingers: Finger[];
hands: Hand[];
pointables: Pointable[];
_gestures: Gesture[];
id: number;
timestamp: number;
tools: Tool[];
rotation: Matrix;
scaleFactorNumber: number;
translationVector: Vector3;
controller: Controller;
constructor(): this;
hand(id: number): Hand;
finger(id: number): Finger;
tool(id: number): Tool;
pointable(id: number): Pointable;
gesture(id: number): Gesture;
gestures(sinceFrame?: Frame): Gesture[];
rotationAxis(sinceFrame: Frame): Vector3;
rotationAngle(sinceFrame: Frame, axis?: Vector3): number;
rotationMatrix(sinceFrame: Frame): Matrix;
scaleFactor(sinceFrame: Frame): number;
translation(sinceFrame: Frame): Vector3;
isEqualTo(other: Frame): boolean;
isValid(): boolean;
static invalid(): Frame
}
	declare export class Matrix  {
origin: Vector3;
xBasis: Vector3;
yBasis: Vector3;
zBasis: Vector3;
constructor(x: Vector3, y: Vector3, z: Vector3, _origin?: Vector3): this;
setRotation(_axis: Vector3, angleRadians: number): void;
transformPoint(inVector: Vector3): Vector3;
transformDirection(inVector: Vector3): Vector3;
rigidInverse(): Matrix;
multiply(other: Matrix): Matrix;
multiplyAssign(other: Matrix): Matrix;
isEqualTo(other: Matrix): boolean;
static identity(): Matrix;
toString(): string
}
	declare export class CircleGesture mixins Gesture {
static classType: number;
center: Vector3;
normal: Vector3;
pointable: Pointable;
progress: number;
radius: number;
constructor(): this
}
	declare export class KeyTapGesture mixins Gesture {
static classType: number;
direction: Vector3;
pointable: Pointable;
position: Vector3;
progress: number;
constructor(): this
}
	declare export class ScreenTapGesture mixins Gesture {
static classType: number;
direction: Vector3;
pointable: Pointable;
position: Vector3;
progress: number;
constructor(): this
}
	declare export class SwipeGesture mixins Gesture {
static classType: number;
direction: Vector3;
pointable: Pointable;
position: Vector3;
speed: number;
startPosition: Vector3;
constructor(): this
}
	declare export class Vector3  {
x: number;
y: number;
z: number;
constructor(x: number, y: number, z: number): this;
opposite(): Vector3;
plus(other: Vector3): Vector3;
plusAssign(other: Vector3): Vector3;
minus(other: Vector3): Vector3;
minusAssign(other: Vector3): Vector3;
multiply(scalar: number): Vector3;
multiplyAssign(scalar: number): Vector3;
divide(scalar: number): Vector3;
divideAssign(scalar: number): Vector3;
isEqualTo(other: Vector3): boolean;
angleTo(other: Vector3): number;
cross(other: Vector3): Vector3;
distanceTo(other: Vector3): number;
dot(other: Vector3): number;
isValid(): boolean;
static invalid(): Vector3;
magnitude(): number;
magnitudeSquared(): number;
normalized(): Vector3;
pitch: number;
yaw: number;
roll: number;
static zero(): Vector3;
static xAxis(): Vector3;
static yAxis(): Vector3;
static zAxis(): Vector3;
static left(): Vector3;
static right(): Vector3;
static down(): Vector3;
static up(): Vector3;
static forward(): Vector3;
static backward(): Vector3;
toString(): string
}
    }
