declare module 'randoma' {
        declare module.exports: typeof Randoma

	declare class Randoma  {
static seed(): number;
constructor(options: Randoma$Randoma$Options): this;
integer(): number;
integerInRange(min: number, max: number): number;
float(): number;
floatInRange(min: number, max: number): number;
boolean(): boolean;
arrayItem<T>(array: T[]): T;
date(): Date;
dateInRange(startDate: Date, endDate: Date): Date;
color(saturation?: number): Color
}
	declare interface Randoma$Options {
seed: string | number
} 
    }
