declare module '@ember/engine' {
        import typeof EmberObject from '@ember/object';

	import typeof RegistryProxyMixin from '@ember/engine/-private/registry-proxy-mixin';

	import typeof Initializer from '@ember/engine/-private/types/initializer';

	import typeof EngineInstance from '@ember/engine/instance';

	import typeof Resolver from '@ember/engine/-private/resolver';

	
/**
 * The `Engine` class contains core functionality for both applications and
 * engines.
 */
declare export default class Engine mixins "NO PRINT IMPLEMENTED: CallExpression" {

/**
 * The goal of initializers should be to register dependencies and injections.
 * This phase runs once. Because these initializers may load code, they are
 * allowed to defer application readiness and advance it. If you need to access
 * the container or store you should use an InstanceInitializer that will be run
 * after all initializers and therefore after all code is loaded and the app is
 * ready.
 */
static initializer(initializer: Initializer<Engine>): void;

/**
 * Instance initializers run after all initializers have run. Because
 * instance initializers run after the app is fully set up. We have access
 * to the store, container, and other items. However, these initializers run
 * after code has loaded and are not allowed to defer readiness.
 */
static instanceInitializer(instanceInitializer: Initializer<EngineInstance>): void;

/**
 * Set this to provide an alternate class to `Ember.DefaultResolver`
 */
resolver: Resolver;

/**
 * Create an EngineInstance for this Engine.
 */
buildInstance(options?: {[key: string]: any}): EngineInstance
}
	
/**
 * `getEngineParent` retrieves an engine instance's parent instance.
 */
declare export function getEngineParent(engine: EngineInstance): EngineInstance

    }
