declare module 'javascript-state-machine' {
        declare export type StateMachineErrorCallback = (
eventName?: string,
from?: string,
to?: string,
args?: any[],
errorCode?: number,
errorMessage?: string,
ex?: Error) => void;
	declare export interface StateMachineEventDef {
name: string,
from: any,
to: string
} 
	declare export type StateMachineEvent = (...args: any[]) => void;
	declare export interface StateMachineConfig {
initial?: any,
events?: StateMachineEventDef[],
callbacks?: {
[s: string]: (event?: string, from?: string, to?: string, ...args: any[]) => any
},
target?: StateMachine,
error?: StateMachineErrorCallback
} 
	declare export type StateMachineIsFinished = (state: string) => boolean;
	declare export var VERSION: string;
	declare export var WILDCARD: string;
	declare export var ASYNC: string;
	declare export var Result: {
SUCCEEDED: number,
NOTRANSITION: number,
CANCELLED: number,
PENDING: number
};
	declare export var Error: {
INVALID_TRANSITION: number,
PENDING_TRANSITION: number,
INVALID_CALLBACK: number
};
	declare export function create(config: StateMachineConfig, target?: StateMachine): StateMachine

	declare export interface StateMachineTransition {
(): void,
cancel(): void
} 
	declare export type StateMachineIs = (state: string) => boolean;
	declare export type StateMachineCan = (evt: string) => boolean;
	declare export type StateMachineTransitions = () => string[];
	declare export interface StateMachine {
current: string,
is: StateMachineIs,
can: StateMachineCan,
cannot: StateMachineCan,
error: StateMachineErrorCallback,
isFinished: StateMachineIsFinished,
transition: StateMachineTransition,
transitions: StateMachineTransitions
} 
	
      declare var npm$namespace$StateMachine: {
        create: typeof StateMachine$create,
        VERSION: typeof StateMachine$VERSION,
WILDCARD: typeof StateMachine$WILDCARD,
ASYNC: typeof StateMachine$ASYNC,
Result: typeof StateMachine$Result,
Error: typeof StateMachine$Error,
      }
declare var StateMachine$VERSION: string;

declare var StateMachine$WILDCARD: string;

declare var StateMachine$ASYNC: string;

declare var StateMachine$Result: {
SUCCEEDED: number,
NOTRANSITION: number,
CANCELLED: number,
PENDING: number
};

declare var StateMachine$Error: {
INVALID_TRANSITION: number,
PENDING_TRANSITION: number,
INVALID_CALLBACK: number
};

declare function StateMachine$create(config: StateMachineConfig, target?: StateMachine): StateMachine

    }
