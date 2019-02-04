declare module 'physijs' {
        
      declare var npm$namespace$Physijs: {
        noConflict: typeof Physijs$noConflict,
createMaterial: typeof Physijs$createMaterial,
        scripts: typeof Physijs$scripts,
      }
declare export function Physijs$noConflict(): Object


declare export function Physijs$createMaterial(
material: THREE.Physijs$Material,
friction?: number,
restitution?: number): Physijs$Material


declare export type Physijs$Material = {
_physijs: {
id: number,
friction: number,
restriction: number
}
} & THREE.Physijs$Material


declare export interface Physijs$Constraint {
getDefinition(): any
} 

declare export interface Physijs$PointConstraintDefinition {
type: string,
id: number,
objecta: THREE.Object3D,
objectb: THREE.Object3D,
positiona: THREE.Vector3,
positionb: THREE.Vector3
} 

declare export class Physijs$PointConstraint mixins Physijs$Constraint {
constructor(objecta: THREE.Object3D, objectb: THREE.Object3D, position?: THREE.Vector3): this;
getDefinition(): Physijs$PointConstraintDefinition
}

declare export interface Physijs$HingeConstraintDefinition {
type: string,
id: number,
objecta: THREE.Object3D,
objectb: THREE.Object3D,
positiona: THREE.Vector3,
positionb: THREE.Vector3,
axis: THREE.Vector3
} 

declare export class Physijs$HingeConstraint mixins Physijs$Constraint {
constructor(objecta: THREE.Object3D, objectb: THREE.Object3D, position: THREE.Vector3, axis?: THREE.Vector3): this;
getDefinition(): Physijs$HingeConstraintDefinition;
setLimits(
low: number,
high: number,
bias_factor: number,
relaxation_factor: number): void;
enableAngularMotor(velocity: number, acceleration: number): void;
disableMotor(): void
}

declare export interface Physijs$SliderConstraintDefinition {
type: string,
id: number,
objecta: THREE.Object3D,
objectb: THREE.Object3D,
positiona: THREE.Vector3,
positionb: THREE.Vector3,
axis: THREE.Vector3
} 

declare export class Physijs$SliderConstraint mixins Physijs$Constraint {
constructor(objecta: THREE.Object3D, objectb: THREE.Object3D, position: THREE.Vector3, axis?: THREE.Vector3): this;
getDefinition(): Physijs$SliderConstraintDefinition;
setLimits(
lin_lower: number,
lin_upper: number,
ang_lower: number,
ang_upper: number): void;
setRestitution(linear: number, angular: number): void;
enableLinearMotor(velocity: number, acceleration: number): void;
disableLinearMotor(): void;
enableAngularMotor(velocity: number, acceleration: number): void;
disableAngularMotor(): void
}

declare export interface Physijs$ConeTwistConstraintDefinition {
type: string,
id: number,
objecta: THREE.Object3D,
objectb: THREE.Object3D,
positiona: THREE.Vector3,
positionb: THREE.Vector3,
axisa: THREE.Vector3,
axisb: THREE.Vector3
} 

declare export class Physijs$ConeTwistConstraint mixins Physijs$Constraint {
constructor(objecta: THREE.Object3D, objectb: THREE.Object3D, position: THREE.Vector3): this;
getDefinition(): Physijs$ConeTwistConstraintDefinition;
setLimit(x: number, y: number, z: number): void;
enableMotor(): void;
setMaxMotorImpulse(max_impulse: number): void;
setMotorTarget(target: THREE.Vector3): void;
setMotorTarget(target: THREE.Euler): void;
setMotorTarget(target: THREE.Matrix4): void;
disableMotor(): void
}

declare export interface Physijs$DOFConstraintDefinition {
type: string,
id: number,
objecta: THREE.Object3D,
objectb: THREE.Object3D,
positiona: THREE.Vector3,
positionb: THREE.Vector3,
axisa: THREE.Vector3,
axisb: THREE.Vector3
} 

declare export class Physijs$DOFConstraint mixins Physijs$Constraint {
constructor(objecta: THREE.Object3D, objectb: THREE.Object3D, position?: THREE.Vector3): this;
getDefinition(): Physijs$DOFConstraintDefinition;
setLinearLowerLimit(limit: THREE.Vector3): void;
setLinearUpperLimit(limit: THREE.Vector3): void;
setAngularLowerLimit(limit: THREE.Vector3): void;
setAngularUpperLimit(limit: THREE.Vector3): void;
enableAngularMotor(which: number): void;
configureAngularMotor(
which: number,
low_angle: number,
high_angle: number,
velocity: number,
max_force: number): void;
disableAngularMotor(which: number): void
}

declare export var Physijs$scripts: {
worker: string,
ammo: string
};

declare export interface Physijs$SceneParameters {
ammo?: string,
fixedTimeStep?: number,
rateLimit?: boolean
} 

declare export class Physijs$Scene mixins THREE.Physijs$Scene {
constructor(param?: Physijs$SceneParameters): this;
addConstraint(constraint: Physijs$Constraint, show_marker?: boolean): void;
onSimulationResume(): void;
removeConstraint(constraint: Physijs$Constraint): void;
execute(cmd: string, params: any): void;
add(object: THREE.Object3D): this;
remove(object: THREE.Object3D): this;
setFixedTimeStep(fixedTimeStep: number): void;
setGravity(gravity: THREE.Vector3): void;
simulate(timeStep?: number, maxSubSteps?: number): boolean;
addEventListener(event_name: string, callback: (event: any) => void): void;
removeEventListener(event_name: string, callback: (event: any) => void): void;
dispatchEvent(event_name: string): void;
dispatchEvent(event: {
type: string,
target: any
}): void
}

declare export class Physijs$Mesh mixins THREE.Physijs$Mesh {
constructor(geometry: THREE.Geometry, material?: THREE.Physijs$Material, mass?: number): this;
applyCentralImpulse(force: THREE.Vector3): void;
applyImpulse(force: THREE.Vector3, offset: THREE.Vector3): void;
applyCentralForce(force: THREE.Vector3): void;
applyForce(force: THREE.Vector3, offset: THREE.Vector3): void;
getAngularVelocity(): THREE.Vector3;
setAngularVelocity(velocity: THREE.Vector3): void;
getLinearVelocity(): THREE.Vector3;
setLinearVelocity(velocity: THREE.Vector3): void;
setAngularFactor(factor: THREE.Vector3): void;
setLinearFactor(factor: THREE.Vector3): void;
setDamping(linear: number, angular: number): void;
setCcdMotionThreshold(threshold: number): void;
setCcdSweptSphereRadius(radius: number): void;
addEventListener(event_name: string, callback: (event: any) => void): void;
removeEventListener(event_name: string, callback: (event: any) => void): void;
dispatchEvent(event_name: string): void;
dispatchEvent(event: {
type: string,
target: any
}): void
}

declare export class Physijs$PlaneMesh mixins Physijs$Mesh {
constructor(geometry: THREE.Geometry, material: THREE.Physijs$Material, mass?: number): this
}

declare export class Physijs$HeightfieldMesh mixins Physijs$Mesh {
constructor(geometry: THREE.Geometry, material: THREE.Physijs$Material, mass?: number, xdiv?: number, ydiv?: number): this
}

declare export class Physijs$BoxMesh mixins Physijs$Mesh {
constructor(geometry: THREE.Geometry, material: THREE.Physijs$Material, mass?: number): this
}

declare export class Physijs$SphereMesh mixins Physijs$Mesh {
constructor(geometry: THREE.Geometry, material: THREE.Physijs$Material, mass?: number): this
}

declare export class Physijs$CylinderMesh mixins Physijs$Mesh {
constructor(geometry: THREE.Geometry, material: THREE.Physijs$Material, mass?: number): this
}

declare export class Physijs$CapsuleMesh mixins Physijs$Mesh {
constructor(geometry: THREE.Geometry, material: THREE.Physijs$Material, mass?: number): this
}

declare export class Physijs$ConeMesh mixins Physijs$Mesh {
constructor(geometry: THREE.Geometry, material: THREE.Physijs$Material, mass?: number): this
}

declare export class Physijs$ConcaveMesh mixins Physijs$Mesh {
constructor(geometry: THREE.Geometry, material: THREE.Physijs$Material, mass?: number): this
}

declare export class Physijs$ConvexMesh mixins Physijs$Mesh {
constructor(geometry: THREE.Geometry, material: THREE.Physijs$Material, mass?: number): this
}

declare export class Physijs$Vehicle  {
constructor(mesh: Physijs$Mesh, tuning?: Physijs$VehicleTuning): this;
mesh: THREE.Physijs$Mesh;
wheels: THREE.Physijs$Mesh[];
addWheel(
wheel_geometry: THREE.Geometry,
wheel_material: THREE.Physijs$Material,
connection_point: THREE.Vector3,
wheel_direction: THREE.Vector3,
wheel_axle: THREE.Vector3,
suspension_rest_length: number,
wheel_radius: number,
is_front_wheel: boolean,
tuning?: Physijs$VehicleTuning): void;
setSteering(amount: number, wheel?: THREE.Physijs$Mesh): void;
setBrake(amount: number, wheel?: THREE.Physijs$Mesh): void;
applyEngineForce(amount: number, wheel?: THREE.Physijs$Mesh): void
}

declare export class Physijs$VehicleTuning  {
constructor(suspension_stiffness?: number, suspension_compression?: number, suspension_damping?: number, max_suspension_travel?: number, friction_slip?: number, max_suspension_force?: number): this;
suspension_stiffness: number;
suspension_compression: number;
suspension_damping: number;
max_suspension_travel: number;
friction_slip: number;
max_suspension_force: number
}
    }
