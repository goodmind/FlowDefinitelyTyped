declare module "vec3" {
  declare export class Vec3 {
    constructor(x: number, y: number, z: number): this;
    constructor(location: number[]): this;
    constructor(location: {
      x: number,
      y: number,
      z: number
    }): this;
    constructor(locationStr: string): this;
    set(x: number, y: number, z: number): Vec3;
    update(other: Vec3): Vec3;
    floored(): Vec3;
    floor(): Vec3;
    offset(dx: number, dy: number, dz: number): Vec3;
    translate(dx: number, dy: number, dz: number): Vec3;
    add(other: Vec3): Vec3;
    substract(other: Vec3): Vec3;
    plus(other: Vec3): Vec3;
    minus(other: Vec3): Vec3;
    scaled(scalar: number): Vec3;
    abs(): Vec3;
    volume(): number;
    modulus(): Vec3;
    distanceTo(other: Vec3): number;
    equals(other: Vec3): boolean;
    toString(): string;
    clone(): Vec3;
    min(other: Vec3): Vec3;
    max(other: Vec3): Vec3;
  }
}
