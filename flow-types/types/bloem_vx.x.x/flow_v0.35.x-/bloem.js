declare module 'bloem' {
        declare export function calculateSize(capacity: number, error_rate: number): number

	declare export function calculateSlices(size: number, capacity: number): number

	declare export class Bloem  {
constructor(size: number, slices: number, buffer: Buffer): this;
has(key: Buffer): boolean;
add(key: Buffer): void
}
	declare export class SafeBloem  {
constructor(capacity: number, error_rate: number, buffer: Buffer): this;
has(key: Buffer): boolean;
add(key: Buffer): boolean
}
	declare export class ScalingBloem  {
constructor(error_rate: number, options?: {
ratio?: number,
initial_capacity?: number,
scaling?: number
}): this;
has(key: Buffer): boolean;
add(key: Buffer): void
}
    }
