declare module 'scheduler' {
        declare export type FrameCallbackType = () => FrameCallbackType | void;
	declare export interface CallbackNode {
callback: FrameCallbackType,
priorityLevel: number,
expirationTime: number,
next: CallbackNode | null,
prev: CallbackNode | null
} 
	declare export var unstable_ImmediatePriority: ;
	declare export var unstable_UserBlockingPriority: ;
	declare export var unstable_NormalPriority: ;
	declare export var unstable_IdlePriority: ;
	declare export var unstable_LowPriority: ;
	declare export function unstable_runWithPriority<T>(priorityLevel: number, eventHandler: () => T): T | void

	declare export function unstable_scheduleCallback(
callback: FrameCallbackType,
deprecated_options?: {
timeout: number
}): CallbackNode

	declare export function unstable_cancelCallback(callbackNode: CallbackNode): void

	declare export function unstable_wrapCallback(callback: FrameCallbackType): () => FrameCallbackType | void

	declare export function unstable_getCurrentPriorityLevel(): number

	declare export function unstable_shouldYield(): boolean

	declare export function unstable_continueExecution(): void

	declare export function unstable_pauseExecution(): void

	declare export function unstable_getFirstCallbackNode(): CallbackNode | null

	declare export function unstable_now(): number

    }
