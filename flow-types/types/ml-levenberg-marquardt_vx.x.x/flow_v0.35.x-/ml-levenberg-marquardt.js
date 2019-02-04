declare module 'ml-levenberg-marquardt' {
        
/**
 * Function that receives an array of parameters and returns
 * a function with the independent variable as a parameter.
 */
declare type LM$FittedFunction = (parameters: number[]) => (x: number) => number;


/**
 * Coordinates of points to fit.
 */
declare interface LM$Data {
x: number[],
y: number[]
} 

declare interface LM$Options {

/**
 * The Levenberg-Marquardt lambda parameter.
 * Default value: 0
 */
damping: number,

/**
 * Initial guesses for the parameters.
 * Default value: Array(parameters.lengh).fill(1)
 */
initialValues: number[],

/**
 * Adjustment for decrease the damping parameter.
 * Default value: 10e-2
 */
gradientDifference: number,

/**
 * The maximum number of iterations before halting.
 * Default value: 100
 */
maxIterations: number,

/**
 * Minimum uncertainty allowed for each point.
 * Default value: 10e-3
 */
errorTolerance: number,

/**
 * Maximum values for the parameters.
 * Default value: Array(data.x.length).fill(MAX_SAFE_INTEGER)
 */
maxValue: number[],

/**
 * Minimum values for the parameters.
 * Default value: Array(data.x.length).fill(MIN_SAFE_INTEGER)
 */
minValue: number[]
} 

declare interface LM$Result {
iterations: number,
parameterError: number,
parameterValues: number[]
} 
	
/**
 * Implementation of the Levenberg-Marquardt curve fitting method.
 */
declare function LM(
d: LM$LM$Data,
fn: LM$LM$FittedFunction,
o?: $Shape<LM$LM$Options>): LM$LM$Result

	declare export default typeof LM

    }
