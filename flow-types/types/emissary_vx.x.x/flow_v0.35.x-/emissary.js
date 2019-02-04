declare module 'emissary' {
        declare export type IEmitterStatic = {
new (): IEmitter
} & Mixto.IMixinStatic

	declare export interface IEmitter {
on(eventNames: string, handler: Function): any,
once(eventName: string, handler: Function): any,
signal(eventName: string): void,
behavior(eventName: string, initialValue: any): void,
emit(eventName: string, ...args: any[]): void,
off(eventNames: string, handler: Function): void,
pauseEvents(eventNames: string): void,
resumeEvents(eventNames: string): void,
incrementSubscriptionCount(eventName: string): number,
decrementSubscriptionCount(eventName: string): number,
getSubscriptionCount(eventName: string): number,
hasSubscriptions(eventName: string): boolean
} 
	declare export type ISubscriberStatic = {
new (): ISubscriber
} & Mixto.IMixinStatic

	declare export interface ISubscriber {
subscribeWith(eventEmitter: any, methodName: string, args: any): ISubscription,
addSubscription(subscription: any): ISubscription,
subscribe(eventEmitterOrSubscription: any, ...args: any[]): ISubscription,
subscribeToCommand(eventEmitter: any, ...args: any[]): ISubscription,
unsubscribe(object?: any): any
} 
	declare export interface ISubscriptionStatic {
new (emitter: any, eventNames: string, handler: Function): ISubscription
} 
	declare export type ISubscription = {
cancelled: boolean,
off(): any
} & IEmitter

	declare export var Emitter: IEmitterStatic;
	declare export var Subscriber: ISubscriberStatic;
	declare export var Signal: Function;
	declare export var Behavior: Function;
	declare export var combine: Function;
    }
