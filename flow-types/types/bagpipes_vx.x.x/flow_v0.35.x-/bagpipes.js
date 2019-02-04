declare module 'bagpipes' {
        declare export interface FittingContext {

/**
 * The input defined in the fitting definition
 * (string, number, object, array)
 */
input: any,

/**
 * Output to be delivered to the next fitting or client
 */
output: any,
[prop: string]: any
} 
	
/**
 * Fitting types has pre-defined fittings `system` and `user`
 * but can be any any string for custom types like `swagger` or `node-machine`
 */
declare export type FittingType = "system" | "user" | string;
	declare export interface FittingDef {

/**
 * If type is omitted (as it must be for in-line usage), Bagpipes will
 * first check the user fittings then the system fittings for the name and
 * use the first fitting found.
 * 
 * Thus be aware that if you define a fitting with the same name as a
 * system one, your fitting will override it.
 */
type?: FittingType,

/**
 * The name of the fitting of the type specified
 */
name?: string,

/**
 * Static values passed to the fitting during construction
 */
config?: any,

/**
 * Dynamic values passed to the fitting during execution
 */
input?: any,

/**
 * The name of the context key to which the output value is assigned
 */
output?: any,
[prop: string]: any
} 
	
/**
 * Fitting Execution Function
 * 
 * Will be called called when the `Pipe` it is contained it gets 'played'
 */
declare export type Fitting = (
context: FittingContext,
next: {
(err: Error | null | void, res?: any): void
}) => void;
	
/**
 * Fitting creation Function
 * 
 * Executed during parsing
 * @see {@link https://github.com/apigee-127/bagpipes#fittings|Docs}
 * @param fittingDef Fitting Definition
 */
declare export type FittingFactory = (fittingDef: FittingDef, bagpipes: any) => Fitting;
	
/**
 * Hashmap of `fittingType`s (the name of a fitting) and the
 * `FittingFactory` functions used to create them
 */
declare export interface FittingTypesMap {
[fittingType: string]: FittingFactory
} 
	
/**
 * The Pipe Definition
 */
declare export type PipeDef = any[] | string | FittingDef;
	
/**
 * Hashmap of Pipe Definitons
 */
declare export interface PipeDefMap {
[name: string]: PipeDef
} 
	
/**
 * Bagpipes Instance (a collection of pipes)
 * @see {@link https://github.com/apigee-127/bagpipes#pipes|Docs}
 */
declare export class Bagpipes  {

/**
 * Hashmap of `fittingType`s (the name of a fitting) and the
 * `FittingFactory` functions used to create them
 */
fittingTypes: FittingTypesMap;

/**
 * The pipes
 */
pipes: {
[name: string]: Pipe
};

/**
 * The `Bagpipes`' configuration
 */
config: Config;

/**
 * Creates a `Fitting`
 * @throws {Error} Throws error if an invalid (not defined) fitting typ is used
         (can't find argument `fittingType` in `Bagpipes.fittingTypes`)
 */
createFitting(fittingDef: FittingDef): Fitting;

/**
 * returns `pipeworks` Pipe instance
 */
createPipe(pipeDef: PipeDef): Pipe;
createPipeFromFitting(fitting: Fitting, fittingDef: FittingDef): Pipe;

/**
 * Finds and returns a `Pipe` by name and lazily creates if it is not defined
 * @throws {Error} Throws error if `pipeDef` pipe is not yet defined and `pipeDef` is
         not supplied
 */
getPipe(pipeName: string, pipeDef?: PipeDef): Pipe;

/**
 * Handler for errors that occure when a `Fitting` gets 'played'
 */
handleError(context: FittingContext, err: Error): void;

/**
 * Loads `FittingFactory`s from file-system and adds them to `Bagpipes.fittingTypes`
 */
loadFittingTypes(): FittingTypesMap;

/**
 * Builds a new (wrappend) `Fitting`
 * @throws {Error} Throws error if an invalid (not defined) fitting typ is used
         (can't find argument `fittingType` in `Bagpipes.fittingTypes`)
 */
newFitting(fittingType: string, fittingDef: FittingDef): Fitting;

/**
 * Run the pipeline
 */
play(pipe: Pipe, context: any): void;

/**
 * Wraps `Fitting` with debugging, `preflight`, `postflight`
 * and error handling functionality and returns as new Fitting
 */
wrapFitting(fitting: Fitting, fittingDef: FittingDef): Fitting | null
}
	
/**
 * Configuration object for `Bagpipes`
 */
declare export interface Config {
connectMiddlewareDirs?: string[],
userFittingsDirs?: string[],
userViewsDirs?: string[],
[name: string]: any
} 
	
/**
 * Creates `Bagpipes`
 */
declare export function create(pipesDefs: PipeDefMap, conf?: Config): Bagpipes

	declare export type Affinity = "hoist" | "sink";
	
/**
 * PipeDef used in `pipeworks` module
 */
declare export interface PipeworksOptions {

/**
 * Adds to the pre and post queues, respectively.
 * Ensures a pipe gets fitted before or after the main execution pipeline.
 */
affinity: Affinity
} 
	
/**
 * Instance of a `Pipeworks` pipeline (in `pipeworks` module) -
 * called 'pipe' in `Bagpipes`
 * 
 * _(simplified version)_
 */
declare export class Pipe  {

/**
 * add a new `Fitting` (piece) to the pipe (aka. pipeline)
 */
fit(pipe: Fitting): Pipe;

/**
 * add a new `Fitting` (piece) to the pipe (aka. pipeline)
 */
fit(options: PipeworksOptions, pipe: Fitting): Pipe;

/**
 * Redirect the flow to another pipe (aka. pipeline).
 */
siphon(pipe: Fitting): Pipe;

/**
 * Redirect the flow to another pipe (aka. pipeline).
 */
siphon(options: PipeworksOptions, pipe: Fitting): Pipe;

/**
 * Send something down the pipe (aka. pipeline)! Any number of arguments
 * can be sent, but often there's just a single `context` object.
 */
flow(...args: any[]): Pipe
}
    }
