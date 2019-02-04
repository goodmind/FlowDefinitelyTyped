declare module 'loadware' {
        declare type AnyFunction = Function;
	declare function loadware<F: AnyFunction>(
...loadable: Array<loadware$loadware$Loadable<F>>): $ReadOnlyArray<F>

	declare type loadware$Loadable<F: AnyFunction> = string | F | loadware$RecursiveLoadable<F>;

declare type loadware$RecursiveLoadable<F: AnyFunction> = {} & Array<F | loadware$Loadable<F>>

	declare module.exports: typeof loadware

    }
