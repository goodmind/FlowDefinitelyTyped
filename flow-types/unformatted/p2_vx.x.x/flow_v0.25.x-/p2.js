declare module 'p2' {
        declare module.exports: typeof p2

	declare export class p2$AABB  {
constructor(options?: {
upperBound?: number[],
lowerBound?: number[]
}): this;
setFromPoints(points: number[][], position: number[], angle: number, skinSize: number): void;
copy(aabb: p2$AABB): void;
extend(aabb: p2$AABB): void;
overlaps(aabb: p2$AABB): boolean
}

declare export class p2$Broadphase  {
static p2$AABB: number;
static BOUNDING_CIRCLE: number;
static NAIVE: number;
static SAP: number;
static boundingRadiusCheck(bodyA: p2$Body, bodyB: p2$Body): boolean;
static aabbCheck(bodyA: p2$Body, bodyB: p2$Body): boolean;
static canCollide(bodyA: p2$Body, bodyB: p2$Body): boolean;
constructor(type: number): this;
type: number;
result: p2$Body[];
world: p2$World;
boundingVolumeType: number;
setWorld(world: p2$World): void;
getCollisionPairs(world: p2$World): p2$Body[];
boundingVolumeCheck(bodyA: p2$Body, bodyB: p2$Body): boolean
}

declare export class p2$GridBroadphase mixins p2$Broadphase {
constructor(options?: {
xmin?: number,
xmax?: number,
ymin?: number,
ymax?: number,
nx?: number,
ny?: number
}): this;
xmin: number;
xmax: number;
ymin: number;
ymax: number;
nx: number;
ny: number;
binsizeX: number;
binsizeY: number
}

declare export class p2$NativeBroadphase mixins p2$Broadphase {}

declare export class p2$Narrowphase  {
contactEquations: p2$ContactEquation[];
frictionEquations: p2$FrictionEquation[];
enableFriction: boolean;
enableEquations: boolean;
slipForce: number;
frictionCoefficient: number;
surfaceVelocity: number;
reuseObjects: boolean;
resuableContactEquations: any[];
reusableFrictionEquations: any[];
restitution: number;
stiffness: number;
relaxation: number;
frictionStiffness: number;
frictionRelaxation: number;
enableFrictionReduction: boolean;
contactSkinSize: number;
collidedLastStep(bodyA: p2$Body, bodyB: p2$Body): boolean;
reset(): void;
createContactEquation(
bodyA: p2$Body,
bodyB: p2$Body,
shapeA: p2$Shape,
shapeB: p2$Shape): p2$ContactEquation;
createFrictionFromContact(c: p2$ContactEquation): p2$FrictionEquation
}

declare export class p2$SAPBroadphase mixins p2$Broadphase {
axisList: p2$Body[];
axisIndex: number
}

declare export class p2$Constraint  {
static DISTANCE: number;
static GEAR: number;
static LOCK: number;
static PRISMATIC: number;
static REVOLUTE: number;
constructor(bodyA: p2$Body, bodyB: p2$Body, type: number, options?: {
collideConnected?: boolean
}): this;
type: number;
equeations: p2$Equation[];
bodyA: p2$Body;
bodyB: p2$Body;
collideConnected: boolean;
update(): void;
setStiffness(stiffness: number): void;
setRelaxation(relaxation: number): void
}

declare export class p2$DistanceConstraint mixins p2$Constraint {
constructor(bodyA: p2$Body, bodyB: p2$Body, options?: {
distance?: number,
localAnchorA?: number[],
localAnchorB?: number[],
maxForce?: number
}): this;
localAnchorA: number[];
localAnchorB: number[];
distance: number;
maxForce: number;
upperLimitEnabled: boolean;
upperLimit: number;
lowerLimitEnabled: boolean;
lowerLimit: number;
position: number;
setMaxForce(f: number): void;
getMaxForce(): number
}

declare export class p2$GearConstraint mixins p2$Constraint {
constructor(bodyA: p2$Body, bodyB: p2$Body, options?: {
angle?: number,
ratio?: number,
maxTorque?: number
}): this;
ratio: number;
angle: number;
setMaxTorque(torque: number): void;
getMaxTorque(): number
}

declare export class p2$LockConstraint mixins p2$Constraint {
constructor(bodyA: p2$Body, bodyB: p2$Body, options?: {
localOffsetB?: number[],
localAngleB?: number,
maxForce?: number
}): this;
setMaxForce(force: number): void;
getMaxForce(): number
}

declare export class p2$PrismaticConstraint mixins p2$Constraint {
constructor(bodyA: p2$Body, bodyB: p2$Body, options?: {
maxForce?: number,
localAnchorA?: number[],
localAnchorB?: number[],
localAxisA?: number[],
disableRotationalLock?: boolean,
upperLimit?: number,
lowerLimit?: number
}): this;
localAnchorA: number[];
localAnchorB: number[];
localAxisA: number[];
position: number;
velocity: number;
lowerLimitEnabled: boolean;
upperLimitEnabled: boolean;
lowerLimit: number;
upperLimit: number;
upperLimitEquation: p2$ContactEquation;
lowerLimitEquation: p2$ContactEquation;
motorEquation: p2$Equation;
motorEnabled: boolean;
motorSpeed: number;
enableMotor(): void;
disableMotor(): void;
setLimits(lower: number, upper: number): void
}

declare export class p2$RevoluteConstraint mixins p2$Constraint {
constructor(bodyA: p2$Body, bodyB: p2$Body, options?: {
worldPivot?: number[],
localPivotA?: number[],
localPivotB?: number[],
maxForce?: number
}): this;
pivotA: number[];
pivotB: number[];
motorEquation: p2$RotationalVelocityEquation;
motorEnabled: boolean;
angle: number;
lowerLimitEnabled: boolean;
upperLimitEnabled: boolean;
lowerLimit: number;
upperLimit: number;
upperLimitEquation: p2$ContactEquation;
lowerLimitEquation: p2$ContactEquation;
enableMotor(): void;
disableMotor(): void;
motorIsEnabled(): boolean;
setLimits(lower: number, upper: number): void;
setMotorSpeed(speed: number): void;
getMotorSpeed(): number
}

declare export class p2$AngleLockEquation mixins p2$Equation {
constructor(bodyA: p2$Body, bodyB: p2$Body, options?: {
angle?: number,
ratio?: number
}): this;
computeGq(): number;
setRatio(ratio: number): number;
setMaxTorque(torque: number): number
}

declare export class p2$ContactEquation mixins p2$Equation {
constructor(bodyA: p2$Body, bodyB: p2$Body): this;
contactPointA: number[];
penetrationVec: number[];
contactPointB: number[];
normalA: number[];
restitution: number;
firstImpact: boolean;
shapeA: p2$Shape;
shapeB: p2$Shape;
computeB(a: number, b: number, h: number): number
}

declare export class p2$Equation  {
static DEFAULT_STIFFNESS: number;
static DEFAULT_RELAXATION: number;
constructor(bodyA: p2$Body, bodyB: p2$Body, minForce?: number, maxForce?: number): this;
minForce: number;
maxForce: number;
bodyA: p2$Body;
bodyB: p2$Body;
stiffness: number;
relaxation: number;
G: number[];
offset: number;
a: number;
b: number;
epsilon: number;
timeStep: number;
needsUpdate: boolean;
multiplier: number;
relativeVelocity: number;
enabled: boolean;
gmult(G: number[], vi: number[], wi: number[], vj: number[], wj: number[]): number;
computeB(a: number, b: number, h: number): number;
computeGq(): number;
computeGW(): number;
computeGWlambda(): number;
computeGiMf(): number;
computeGiMGt(): number;
addToWlambda(deltalambda: number): number;
computeInvC(eps: number): number
}

declare export class p2$FrictionEquation mixins p2$Equation {
constructor(bodyA: p2$Body, bodyB: p2$Body, slipForce: number): this;
contactPointA: number[];
contactPointB: number[];
t: number[];
shapeA: p2$Shape;
shapeB: p2$Shape;
frictionCoefficient: number;
setSlipForce(slipForce: number): number;
getSlipForce(): number;
computeB(a: number, b: number, h: number): number
}

declare export class p2$RotationalLockEquation mixins p2$Equation {
constructor(bodyA: p2$Body, bodyB: p2$Body, options?: {
angle?: number
}): this;
angle: number;
computeGq(): number
}

declare export class p2$RotationalVelocityEquation mixins p2$Equation {
constructor(bodyA: p2$Body, bodyB: p2$Body): this;
computeB(a: number, b: number, h: number): number
}

declare export class p2$EventEmitter  {
on(type: string, listener: Function, context: any): p2$EventEmitter;
has(type: string, listener: Function): boolean;
off(type: string, listener: Function): p2$EventEmitter;
emit(event: any): p2$EventEmitter
}

declare export class p2$ContactMaterialOptions  {
friction: number;
restitution: number;
stiffness: number;
relaxation: number;
frictionStiffness: number;
frictionRelaxation: number;
surfaceVelocity: number
}

declare export class p2$ContactMaterial  {
static idCounter: number;
constructor(materialA: p2$Material, materialB: p2$Material, options?: p2$ContactMaterialOptions): this;
id: number;
materialA: p2$Material;
materialB: p2$Material;
friction: number;
restitution: number;
stiffness: number;
relaxation: number;
frictionStiffness: number;
frictionRelaxation: number;
surfaceVelocity: number;
contactSkinSize: number
}

declare export class p2$Material  {
static idCounter: number;
constructor(id: number): this;
id: number
}

declare export class p2$vec2  {
static crossLength(a: number[], b: number[]): number;
static crossVZ(out: number[], vec: number[], zcomp: number): number;
static crossZV(out: number[], zcomp: number, vec: number[]): number;
static rotate(out: number[], a: number[], angle: number): void;
static rotate90cw(out: number[], a: number[]): number;
static centroid(out: number[], a: number[], b: number[], c: number[]): number[];
static create(): number[];
static clone(a: number[]): number[];
static fromValues(x: number, y: number): number[];
static copy(out: number[], a: number[]): number[];
static set(out: number[], x: number, y: number): number[];
static toLocalFrame(
out: number[],
worldPoint: number[],
framePosition: number[],
frameAngle: number): void;
static toGlobalFrame(
out: number[],
localPoint: number[],
framePosition: number[],
frameAngle: number): void;
static add(out: number[], a: number[], b: number[]): number[];
static subtract(out: number[], a: number[], b: number[]): number[];
static sub(out: number[], a: number[], b: number[]): number[];
static multiply(out: number[], a: number[], b: number[]): number[];
static mul(out: number[], a: number[], b: number[]): number[];
static divide(out: number[], a: number[], b: number[]): number[];
static div(out: number[], a: number[], b: number[]): number[];
static scale(out: number[], a: number[], b: number): number[];
static distance(a: number[], b: number[]): number;
static dist(a: number[], b: number[]): number;
static squaredDistance(a: number[], b: number[]): number;
static sqrDist(a: number[], b: number[]): number;
static length(a: number[]): number;
static len(a: number[]): number;
static squaredLength(a: number[]): number;
static sqrLen(a: number[]): number;
static negate(out: number[], a: number[]): number[];
static normalize(out: number[], a: number[]): number[];
static dot(a: number[], b: number[]): number;
static str(a: number[]): string
}

declare export interface p2$BodyOptions {
mass?: number,
position?: number[],
velocity?: number[],
angle?: number,
angularVelocity?: number,
force?: number[],
angularForce?: number,
fixedRotation?: boolean
} 

declare export class p2$Body mixins p2$EventEmitter {
sleepyEvent: {
type: string
};
sleepEvent: {
type: string
};
wakeUpEvent: {
type: string
};
static DYNAMIC: number;
static STATIC: number;
static KINEMATIC: number;
static AWAKE: number;
static SLEEPY: number;
static SLEEPING: number;
constructor(options?: p2$BodyOptions): this;
id: number;
world: p2$World;
shapes: p2$Shape[];
mass: number;
invMass: number;
inertia: number;
invInertia: number;
invMassSolve: number;
invInertiaSolve: number;
fixedRotation: number;
position: number[];
interpolatedPosition: number[];
interpolatedAngle: number;
previousPosition: number[];
previousAngle: number;
velocity: number[];
vlambda: number[];
wlambda: number[];
angle: number;
angularVelocity: number;
force: number[];
angularForce: number;
damping: number;
angularDamping: number;
type: number;
boundingRadius: number;
aabb: p2$AABB;
aabbNeedsUpdate: boolean;
allowSleep: boolean;
wantsToSleep: boolean;
sleepState: number;
sleepSpeedLimit: number;
sleepTimeLimit: number;
gravityScale: number;
collisionResponse: boolean;
updateSolveMassProperties(): void;
setDensity(density: number): void;
getArea(): number;
getAABB(): p2$AABB;
updateAABB(): void;
updateBoundingRadius(): void;
addShape(shape: p2$Shape, offset?: number[], angle?: number): void;
removeShape(shape: p2$Shape): boolean;
updateMassProperties(): void;
applyForce(force: number[], relativePoint?: number[]): void;
applyForceLocal(localforce: number[], localPoint?: number[]): void;
applyImpulse(impulse: number[], relativePoint?: number[]): void;
applyImpulseLocal(impulse: number[], localPoint?: number[]): void;
toLocalFrame(out: number[], worldPoint: number[]): void;
toWorldFrame(out: number[], localPoint: number[]): void;
fromPolygon(
path: number[][],
options?: {
optimalDecomp?: boolean,
skipSimpleCheck?: boolean,
removeCollinearPoints?: any
}): boolean;
adjustCenterOfMass(): void;
setZeroForce(): void;
resetConstraintVelocity(): void;
applyDamping(dy: number): void;
wakeUp(): void;
sleep(): void;
sleepTick(time: number, dontSleep: boolean, dt: number): void;
getVelocityFromPosition(story: number[], dt: number): number[];
getAngularVelocityFromPosition(timeStep: number): number;
overlaps(body: p2$Body): boolean
}

declare export class p2$Spring  {
constructor(bodyA: p2$Body, bodyB: p2$Body, options?: {
stiffness?: number,
damping?: number,
localAnchorA?: number[],
localAnchorB?: number[],
worldAnchorA?: number[],
worldAnchorB?: number[]
}): this;
stiffness: number;
damping: number;
bodyA: p2$Body;
bodyB: p2$Body;
applyForce(): void
}

declare export class p2$LinearSpring mixins p2$Spring {
localAnchorA: number[];
localAnchorB: number[];
restLength: number;
setWorldAnchorA(worldAnchorA: number[]): void;
setWorldAnchorB(worldAnchorB: number[]): void;
getWorldAnchorA(result: number[]): number[];
getWorldAnchorB(result: number[]): number[];
applyForce(): void
}

declare export class p2$RotationalSpring mixins p2$Spring {
constructor(bodyA: p2$Body, bodyB: p2$Body, options?: {
restAngle?: number,
stiffness?: number,
damping?: number
}): this;
restAngle: number
}

declare export type p2$CapsuleOptions = {
length?: number,
radius?: number
} & p2$SharedShapeOptions


declare export class p2$Capsule mixins p2$Shape {
constructor(options?: p2$CapsuleOptions): this;
length: number;
radius: number
}

declare export type p2$CircleOptions = {
radius?: number
} & p2$SharedShapeOptions


declare export class p2$Circle mixins p2$Shape {
constructor(options?: p2$CircleOptions): this;
radius: number
}

declare export type p2$ConvexOptions = {
vertices?: ArrayLike<number>[],
axes?: ArrayLike<number>[]
} & p2$SharedShapeOptions


declare export class p2$Convex mixins p2$Shape {
static triangleArea(a: number[], b: number[], c: number[]): number;
constructor(options?: p2$ConvexOptions): this;
vertices: number[][];
axes: number[][];
centerOfMass: number[];
triangles: number[];
boundingRadius: number;
projectOntoLocalAxis(localAxis: number[], result: number[]): void;
projectOntoWorldAxis(
localAxis: number[],
shapeOffset: number[],
shapeAngle: number,
result: number[]): void;
updateCenterOfMass(): void
}

declare export type p2$HeightfieldOptions = {
heights?: number[],
minValue?: number,
maxValue?: number,
elementWidth?: number
} & p2$SharedShapeOptions


declare export class p2$Heightfield mixins p2$Shape {
constructor(options?: p2$HeightfieldOptions): this;
data: number[];
maxValue: number;
minValue: number;
elementWidth: number
}

declare export interface p2$SharedShapeOptions {
position?: number[],
angle?: number,
collisionGroup?: number,
collisionResponse?: boolean,
collisionMask?: number,
sensor?: boolean
} 

declare export type p2$ShapeOptions = {
type?: number
} & p2$SharedShapeOptions


declare export class p2$Shape  {
static idCounter: number;
static CIRCLE: number;
static PARTICLE: number;
static PLANE: number;
static CONVEX: number;
static LINE: number;
static BOX: number;
static CAPSULE: number;
static HEIGHTFIELD: number;
constructor(options?: p2$ShapeOptions): this;
type: number;
id: number;
position: number[];
angle: number;
boundingRadius: number;
collisionGroup: number;
collisionResponse: boolean;
collisionMask: number;
material: p2$Material;
area: number;
sensor: boolean;
computeMomentOfInertia(mass: number): number;
updateBoundingRadius(): number;
updateArea(): void;
computeAABB(out: p2$AABB, position: number[], angle: number): void
}

declare export type p2$LineOptions = {
length?: number
} & p2$SharedShapeOptions


declare export class p2$Line mixins p2$Shape {
constructor(options?: p2$LineOptions): this;
length: number
}

declare export class p2$Particle mixins p2$Shape {
constructor(options?: p2$SharedShapeOptions): this
}

declare export class p2$Plane mixins p2$Shape {
constructor(options?: p2$SharedShapeOptions): this
}

declare export interface p2$BoxOptions {
width?: number,
height?: number
} 

declare export class p2$Box mixins p2$Shape {
constructor(options?: p2$BoxOptions): this;
width: number;
height: number
}

declare export class p2$Solver mixins p2$EventEmitter {
static GS: number;
static ISLAND: number;
constructor(options?: {}, type?: number): this;
type: number;
equations: p2$Equation[];
equationSortFunction: p2$Equation;
solve(dy: number, world: p2$World): void;
solveIsland(dy: number, island: p2$Island): void;
sortEquations(): void;
addEquation(eq: p2$Equation): void;
addEquations(eqs: p2$Equation[]): void;
removeEquation(eq: p2$Equation): void;
removeAllEquations(): void
}

declare export class p2$GSSolver mixins p2$Solver {
constructor(options?: {
iterations?: number,
tolerance?: number
}): this;
iterations: number;
tolerance: number;
useZeroRHS: boolean;
frictionIterations: number;
usedIterations: number;
solve(h: number, world: p2$World): void
}

declare export class p2$OverlapKeeper  {
constructor(bodyA: p2$Body, shapeA: p2$Shape, bodyB: p2$Body, shapeB: p2$Shape): this;
shapeA: p2$Shape;
shapeB: p2$Shape;
bodyA: p2$Body;
bodyB: p2$Body;
tick(): void;
setOverlapping(bodyA: p2$Body, shapeA: p2$Shape, bodyB: p2$Body, shapeB: p2$Body): void;
bodiesAreOverlapping(bodyA: p2$Body, bodyB: p2$Body): boolean;
set(bodyA: p2$Body, shapeA: p2$Shape, bodyB: p2$Body, shapeB: p2$Shape): void
}

declare export class p2$TupleDictionary  {
data: number[];
keys: number[];
getKey(id1: number, id2: number): string;
getByKey(key: number): number;
get(i: number, j: number): number;
set(i: number, j: number, value: number): number;
reset(): void;
copy(dict: p2$TupleDictionary): void
}

declare export class p2$Utils  {
static appendArray<T>(a: Array<T>, b: Array<T>): Array<T>;
static splice<T>(array: Array<T>, index: number, howMany: number): void;
static extend(a: any, b: any): void;
static defaults(options: any, defaults: any): any
}

declare export class p2$Island  {
equations: p2$Equation[];
bodies: p2$Body[];
reset(): void;
getBodies(result: any): p2$Body[];
wantsToSleep(): boolean;
sleep(): boolean
}

declare export class p2$IslandManager mixins p2$Solver {
static getUnvisitedNode(nodes: p2$IslandNode[]): p2$IslandNode;
equations: p2$Equation[];
islands: p2$Island[];
nodes: p2$IslandNode[];
visit(node: p2$IslandNode, bds: p2$Body[], eqs: p2$Equation[]): void;
bfs(root: p2$IslandNode, bds: p2$Body[], eqs: p2$Equation[]): void;
split(world: p2$World): p2$Island[]
}

declare export class p2$IslandNode  {
constructor(body: p2$Body): this;
body: p2$Body;
neighbors: p2$IslandNode[];
equations: p2$Equation[];
visited: boolean;
reset(): void
}

declare export class p2$World mixins p2$EventEmitter {
postStepEvent: {
type: string
};
addBodyEvent: {
type: string
};
removeBodyEvent: {
type: string
};
addSpringEvent: {
type: string
};
impactEvent: {
type: string,
bodyA: p2$Body,
bodyB: p2$Body,
shapeA: p2$Shape,
shapeB: p2$Shape,
contactEquation: p2$ContactEquation
};
postBroadphaseEvent: {
type: string,
pairs: p2$Body[]
};
beginContactEvent: {
type: string,
shapeA: p2$Shape,
shapeB: p2$Shape,
bodyA: p2$Body,
bodyB: p2$Body,
contactEquations: p2$ContactEquation[]
};
endContactEvent: {
type: string,
shapeA: p2$Shape,
shapeB: p2$Shape,
bodyA: p2$Body,
bodyB: p2$Body
};
preSolveEvent: {
type: string,
contactEquations: p2$ContactEquation[],
frictionEquations: p2$FrictionEquation[]
};
static NO_SLEEPING: number;
static BODY_SLEEPING: number;
static ISLAND_SLEEPING: number;
static integrateBody(body: p2$Body, dy: number): void;
constructor(options?: {
solver?: p2$Solver,
gravity?: number[],
broadphase?: p2$Broadphase,
islandSplit?: boolean,
doProfiling?: boolean
}): this;
springs: p2$Spring[];
bodies: p2$Body[];
solver: p2$Solver;
narrowphase: p2$Narrowphase;
islandManager: p2$IslandManager;
gravity: number[];
frictionGravity: number;
useWorldGravityAsFrictionGravity: boolean;
useFrictionGravityOnZeroGravity: boolean;
doProfiling: boolean;
lastStepTime: number;
broadphase: p2$Broadphase;
constraints: p2$Constraint[];
defaultMaterial: p2$Material;
defaultContactMaterial: p2$ContactMaterial;
lastTimeStep: number;
applySpringForces: boolean;
applyDamping: boolean;
applyGravity: boolean;
solveConstraints: boolean;
contactMaterials: p2$ContactMaterial[];
time: number;
stepping: boolean;
islandSplit: boolean;
emitImpactEvent: boolean;
sleepMode: number;
addConstraint(c: p2$Constraint): void;
addContactMaterial(contactMaterial: p2$ContactMaterial): void;
removeContactMaterial(cm: p2$ContactMaterial): void;
getContactMaterial(materialA: p2$Material, materialB: p2$Material): p2$ContactMaterial;
removeConstraint(c: p2$Constraint): void;
step(dy: number, timeSinceLastCalled?: number, maxSubSteps?: number): void;
runNarrowphase(
np: p2$Narrowphase,
bi: p2$Body,
si: p2$Shape,
xi: any[],
ai: number,
bj: p2$Body,
sj: p2$Shape,
xj: any[],
aj: number,
cm: number,
glen: number): void;
addSpring(s: p2$Spring): void;
removeSpring(s: p2$Spring): void;
addBody(body: p2$Body): void;
removeBody(body: p2$Body): void;
getBodyByID(id: number): p2$Body;
disableBodyCollision(bodyA: p2$Body, bodyB: p2$Body): void;
enableBodyCollision(bodyA: p2$Body, bodyB: p2$Body): void;
clear(): void;
clone(): p2$World;
hitTest(worldPoint: number[], bodies: p2$Body[], precision: number): p2$Body[];
setGlobalEquationParameters(parameters: {
relaxation?: number,
stiffness?: number
}): void;
setGlobalStiffness(stiffness: number): void;
setGlobalRelaxation(relaxation: number): void
}
    }
