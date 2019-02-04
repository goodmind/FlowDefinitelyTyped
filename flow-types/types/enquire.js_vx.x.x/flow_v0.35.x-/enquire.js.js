declare module 'enquire.js' {
        declare interface Options {

/**
 * If set to true, defers execution of the setup function until the first time the media query is matched
 */
deferSetup?: boolean,

/**
 * If supplied, triggered when a media query matches.
 */
match(): void,

/**
 * If supplied, triggered when the media query transitions from a matched state to an unmatched state.
 */
unmatch(): void,

/**
 * If supplied, triggered once, when the handler is registered.
 */
setup(): void,

/**
 * If supplied, triggered when handler is unregistered. Place cleanup code here
 */
destroy(): void
} 
	declare type Callback = () => void;
	declare interface EnquireJs {
register(
mediaQuery: string,
options: Options | Options[] | Callback,
shouldDegrade?: boolean): EnquireJs,
unregister(mediaQuery: string, handler?: Callback | Options): void
} 
	declare var enquire: EnquireJs;
	declare module.exports: typeof enquire

    }
