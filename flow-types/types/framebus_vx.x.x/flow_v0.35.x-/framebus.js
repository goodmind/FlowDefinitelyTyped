declare module 'framebus' {
        declare export interface FrameBus {
publish(event: string, ...args: any[]): boolean,
pub(event: string, ...args: any[]): boolean,
trigger(event: string, ...args: any[]): boolean,
emit(event: string, ...args: any[]): boolean,
subscribe(event: string, fn: (...args: any[]) => any): boolean,
sub(event: string, fn: (...args: any[]) => any): boolean,
on(event: string, fn: (...args: any[]) => any): boolean,
unsubscribe(event: string, fn: (...args: any[]) => any): boolean,
unsub(event: string, fn: (...args: any[]) => any): boolean,
off(event: string, fn: (...args: any[]) => any): boolean
} 
	
/**
 * let popup = window.open('https://example.com');
 * framebus.include(popup);
 * framebus.emit('hello popup and friends!');
 */
declare export function include(popup: Window): boolean

	
/**
 * framebus.target('https://example.com').on('my cool event', function () {});
 * // will ignore all incoming 'my cool event' NOT from 'https://example.com'
 */
declare export function target(origin: string): FrameBus

	
/**
 * let callback = (data: any) => {
 *     console.log('Got back %s as a reply!', data)
 * }
 * framebus.publish('Marco!', callback, 'http://listener.example.com');
 * @param event The name of the event
 * @param args The data to give to subscribers
 * @param last Give subscribers a function for easy, direct replies
 */
declare export function publish(event: string, ...args: any[]): boolean

	
/**
 * publish = pub = trigger = emit
 * framebus.publish('Marco!', callback, 'http://listener.example.com');
 * @param event The name of the event
 * @param args The data to give to subscribers
 * @param last Give subscribers a function for easy, direct replies
 */
declare export function pub(event: string, ...args: any[]): boolean

	
/**
 * publish = pub = trigger = emit
 * @param event The name of the event
 * @param args The data to give to subscribers
 * @param last Give subscribers a function for easy, direct replies
 */
declare export function trigger(event: string, ...args: any[]): boolean

	
/**
 * publish = pub = trigger = emit
 * @param event The name of the event
 * @param args The data to give to subscribers
 * @param last Give subscribers a function for easy, direct replies
 */
declare export function emit(event: string, ...args: any[]): boolean

	
/**
 * **this** scope is the MessageEvent object from the underlying postMessage
 * @param event The name of the event
 * @param fn ([arg...] [, callback]) Event handler. Arguments are from the publish invocation
 */
declare export function subscribe(event: string, fn: (...args: any[]) => any): boolean

	
/**
 * **this** scope is the MessageEvent object from the underlying postMessage
 * @param event The name of the event
 * @param fn ([arg...] [, callback]) Event handler. Arguments are from the publish invocation
 */
declare export function sub(event: string, fn: (...args: any[]) => any): boolean

	
/**
 * **this** scope is the MessageEvent object from the underlying postMessage
 * @param event The name of the event
 * @param fn ([arg...] [, callback]) Event handler. Arguments are from the publish invocation
 */
declare export function on(event: string, fn: (...args: any[]) => any): boolean

	
/**
 * @param event The name of the event
 * @param fn The function that was subscribed
 */
declare export function unsubscribe(event: string, fn: (...args: any[]) => any): boolean

	
/**
 * @param event The name of the event
 * @param fn The function that was subscribed
 */
declare export function unsub(event: string, fn: (...args: any[]) => any): boolean

	
/**
 * @param event The name of the event
 * @param fn The function that was subscribed
 */
declare export function off(event: string, fn: (...args: any[]) => any): boolean

    }
