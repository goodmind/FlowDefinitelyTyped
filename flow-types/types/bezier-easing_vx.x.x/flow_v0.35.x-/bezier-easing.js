declare module 'bezier-easing' {
        declare type BezierEasing$Easing = (x: number) => number;
	declare function BezierEasing(
mX1: number,
mY1: number,
mX2: number,
mY2: number): BezierEasing$BezierEasing$Easing

	declare module.exports: typeof BezierEasing

    }
