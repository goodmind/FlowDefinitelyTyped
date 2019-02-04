declare module 'redux-saga-tester' {
        import type {
          Task
        } from 'redux-saga';

	import type {
          AnyAction,Middleware,Reducer,ReducersMapObject
        } from 'redux';

	declare export type SagaFunction = (...args: any[]) => any;
	declare export interface SagaTesterOptions<StateType> {
initialState?: StateType,
reducers?: ReducersMapObject | Reducer<StateType>,
middlewares?: Middleware[],
combineReducers?: (map: ReducersMapObject) => Reducer<StateType>,
ignoreReduxActions?: boolean,
options?: {[key: string]: any}
} 
	declare export default class SagaTester<StateType: {[key: string]: any}>  {
constructor(options?: SagaTesterOptions<StateType>): this;

/**
 * Starts execution of the provided saga.
 */
start(saga: SagaFunction, ...args: any[]): Task;

/**
 * Dispatches an action to the redux store.
 */
dispatch(action: AnyAction): void;

/**
 * Assigns the newState into the current state. (Only works with the default reducer.)
 */
updateState(state: StateType): void;

/**
 * Returns the state of the redux store.
 */
getState(): StateType;

/**
 * Returns a promise that will resolve if the specified action is dispatched to the store.
 * @param futureOnly Causes waitFor to only resolve if the action is called in the future.
 */
waitFor(actionType: string, futureOnly?: boolean): PromiseLike<void>;

/**
 * Returns whether the specified was dispatched in the past.
 */
wasCalled(actionType: string): boolean;

/**
 * Returns the number of times an action with the given type was dispatched.
 */
numCalled(actionType: string): number;

/**
 * Returns the last action dispatched to the store.
 */
getLatestCalledAction(): AnyAction;

/**
 * Returns an array of all actions dispatched.
 */
getCalledActions(): AnyAction[];

/**
 * Reset the store state back to initialState
 * @param clearActionList Clears the history of past actions (defaults to false).
 */
reset(clearActionList?: boolean): void
}
    }
