declare module 'redux-optimistic-ui' {
        import type {
          Reducer
        } from 'redux';

	
/**
 * Enhanced state by redux-optimistic-ui
 */
declare export interface OptimisticState<TState> {

/**
 * History list
 * List is Immutable.List<>
 */
history: any,

/**
 * Before state
 */
beforeState: TState,

/**
 * Current state
 */
current: TState
} 
	
/**
 * Enhances and wraps your root reducer into optimistic state
 */
declare export function optimistic<TState>(reducer: Reducer<TState>): Reducer<OptimisticState<TState>>

	
/**
 * Returns your current state or state if it wasn't enhanced yet
 */
declare export function ensureState<TState>(state: OptimisticState<TState> | TState): TState

	
/**
 * Optimistic action slice
 */
declare export interface OptimisticAction {
meta: {

/**
 * Optimistic information
 */
optimistic: {

/**
 * Type, BEGIN, COMMIT or REVERT
 * @type {string}
 */
type: string,

/**
 * Transaction id. Id should be unique for each optimistic action
 * @type {number}
 */
id: number
}
}
} 
	
/**
 * Start optimistic action
 */
declare export var BEGIN: ;
	
/**
 * Finish optimistic action and commit results
 */
declare export var COMMIT: ;
	
/**
 * Revert optimistic action
 */
declare export var REVERT: ;
    }
