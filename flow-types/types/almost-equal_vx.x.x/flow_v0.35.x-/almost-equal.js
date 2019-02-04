declare module 'almost-equal' {
        declare function almostEqual(
value: number,
other: number,
absoluteTolerance?: number,
relativeTolerance?: number): boolean

	
      declare var npm$namespace$almostEqual: {
        
        FLT_EPSILON: typeof almostEqual$FLT_EPSILON,
DBL_EPSILON: typeof almostEqual$DBL_EPSILON,
      }
declare var almostEqual$FLT_EPSILON: number;

declare var almostEqual$DBL_EPSILON: number;
	declare module.exports: typeof almostEqual

    }
