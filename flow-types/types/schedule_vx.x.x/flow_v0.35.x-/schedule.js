declare module 'schedule' {
        declare export interface Deadline {
timeRemaining(): number,
didTimeout: boolean
} 
	declare export type FrameCallbackType = (deadline: Deadline) => void;
	declare export interface CallbackNode {
callback: FrameCallbackType,
timesOutAt: number,
next: CallbackNode | null,
prev: CallbackNode | null
} 
	declare export function unstable_scheduleWork(callback: FrameCallbackType, options?: {
timeout: number
}): CallbackNode

	declare export function unstable_cancelScheduledWork(callbackNode: CallbackNode): void

	declare export function unstable_now(): number

    }
