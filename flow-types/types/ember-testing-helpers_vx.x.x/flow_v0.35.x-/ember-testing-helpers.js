declare module 'ember-testing-helpers' {
        import typeof RSVP from 'rsvp';

	declare type KeyEventType = "keydown" | "keyup" | "keypress";
	declare type WaitResult<T> = RSVP.Promise<T>;
	declare module 'global' {
        declare function andThen<T>(callback: (...args: any[]) => T): RSVP.Promise<T>

	declare function click(selector: string, context?: Object): WaitResult<void>

	declare function currentPath(): string

	declare function currentRouteName(): string

	declare function currentURL(): string

	declare function fillIn(selector: string, context: Object, text: string): WaitResult<void>

	declare function fillIn(selector: string, text: string): WaitResult<void>

	declare function find(selector: string, context?: Object): JQuery<Node>

	declare function findWithAssert(selector: string, context?: Object): JQuery<Node>

	declare function keyEvent(selector: string, type: KeyEventType, keyCode: number): WaitResult<void>

	declare function pauseTest(): RSVP.Promise<{}>

	declare function resumeTest(): void

	declare function triggerEvent(
selector: string,
context: Object,
type: string,
options: Object): WaitResult<void>

	declare function triggerEvent(selector: string, context: Object, type: string): WaitResult<void>

	declare function triggerEvent(selector: string, type: string, options: Object): WaitResult<void>

	declare function triggerEvent(selector: string, type: string): WaitResult<void>

	declare function visit<T>(route: string): WaitResult<void>

	declare function wait<T>(value: T): WaitResult<T>

    }

	declare export {
          
        }

    }
