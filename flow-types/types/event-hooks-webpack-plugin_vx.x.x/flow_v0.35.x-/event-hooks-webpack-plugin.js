declare module 'event-hooks-webpack-plugin' {
        import type {
          Plugin
        } from 'webpack';

	declare module.exports: typeof EventHooksPlugin

	declare interface EventHooksPlugin$Options {
shouldEmit?: () => void,
done?: () => void,
additionalPass?: () => void,
beforeRun?: () => void,
run?: () => void,
emit?: () => void,
afterEmit?: () => void,
thisCompilation?: () => void,
compilation?: () => void,
normalModuleFactory?: () => void,
contextModuleFactory?: () => void,
beforeCompile?: () => void,
compile?: () => void,
make?: () => void,
afterCompile?: () => void,
watchRun?: () => void,
failed?: () => void,
invalid?: () => void,
watchClose?: () => void,
environment?: () => void,
afterEnvironment?: () => void,
afterPlugins?: () => void,
afterResolvers?: () => void,
entryOption?: () => void
} 
	declare class EventHooksPlugin mixins Plugin {
constructor(options?: EventHooksPlugin$EventHooksPlugin$Options): this
}
    }
