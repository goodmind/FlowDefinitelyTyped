declare module 'ember-test-helpers' {
        import typeof Ember from 'ember';

	import type {
          TemplateFactory
        } from 'htmlbars-inline-precompile';

	import typeof RSVP from 'rsvp';

	declare interface ModuleCallbacks {
integration?: boolean,
unit?: boolean,
needs?: string[],
beforeSetup(assert?: any): void,
setup(assert?: any): void,
teardown(assert?: any): void,
afterTeardown(assert?: any): void,
[key: string]: any
} 
	declare interface TestContext {
get(key: string): any,
getProperties<K: string>(...keys: K[]): Pick<any, K>,
set<V>(key: string, value: V): V,
setProperties<P: {
[key: string]: any
}>(hash: P): P,
on(actionName: string, handler: (...args: any[]) => any): void,
send(actionName: string): void,
$: JQueryStatic,
subject(options?: {}): any,
render(template?: string | string[] | TemplateFactory): Promise<void>,
clearRender(): void,
registry: Ember.Registry,
container: Ember.Container,
dispatcher: Ember.EventDispatcher,
application: Ember.Application,
register(fullName: string, factory: any): void,
factory(fullName: string): any,
inject: {
controller(name: string, options?: {
as: string
}): any,
service(name: string, options?: {
as: string
}): any
},
owner: Ember.ApplicationInstance & {
factoryFor(fullName: string, options?: {}): any
},
pauseTest(): Promise<void>,
resumeTest(): void,
element: Element
} 
	declare class TestModule  {
constructor(name: string, callbacks?: ModuleCallbacks): this;
constructor(name: string, description?: string, callbacks?: ModuleCallbacks): this;
name: string;
subjectName: string;
description: string;
isIntegration: boolean;
callbacks: ModuleCallbacks;
context: TestContext;
resolver: Ember.Resolver;
setup(assert?: any): RSVP.Promise<void>;
teardown(assert?: any): RSVP.Promise<void>;
getContext(): TestContext;
setContext(context: TestContext): void
}
	declare class TestModuleForAcceptance mixins TestModule {}
	declare class TestModuleForIntegration mixins TestModule {}
	declare class TestModuleForComponent mixins TestModule {}
	declare class TestModuleForModel mixins TestModule {}
	declare function getContext(): TestContext | void

	declare function setContext(context: TestContext): void

	declare function unsetContext(): void

	declare function setResolver(resolver: Ember.Resolver): void

    }
declare module 'ember-test-helpers/wait' {
        import typeof RSVP from 'rsvp';

	declare interface WaitOptions {
waitForTimers?: boolean,
waitForAJAX?: boolean,
waitForWaiters?: boolean
} 
	declare export default function wait(options?: WaitOptions): RSVP.Promise<void>

    }
declare module 'ember-test-helpers/has-ember-version' {
        declare export default function hasEmberVersion(major: number, minor: number): boolean

    }
