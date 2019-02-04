declare module '@ember/controller' {
        import typeof ActionHandler from '@ember/object/-private/action-handler';

	import typeof Mixin from '@ember/object/mixin';

	import typeof EmberObject from '@ember/object';

	import typeof ComputedProperty from '@ember/object/computed';

	declare type QueryParamTypes = "boolean" | "number" | "array" | "string";
	declare type QueryParamScopeTypes = "controller" | "model";
	
/**
 * Additional methods for the Controller.
 */
declare export type ControllerMixin = {
replaceRoute(name: string, ...args: any[]): void,
transitionToRoute(name: string, ...args: any[]): void,
model: any,
queryParams: string | string[] | Array<{
[key: string]: {
type?: QueryParamTypes,
scope?: QueryParamScopeTypes,
as?: string
}
}>,
target: {[key: string]: any}
} & ActionHandler

	declare export var ControllerMixin: Mixin<ControllerMixin>;
	declare export default class Controller mixins "NO PRINT IMPLEMENTED: CallExpression" {}
	declare export function inject<K: $Keys<Registry>>(name: K): ComputedProperty<$ElementType<Registry, K>>

	declare export interface Registry {} 
    }
