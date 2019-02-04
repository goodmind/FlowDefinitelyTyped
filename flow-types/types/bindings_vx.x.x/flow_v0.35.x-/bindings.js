declare module 'bindings' {
        
/**
 * The main `bindings()` function loads the compiled bindings for a given module.
 * It uses V8's Error API to determine the parent filename that this function is
 * being invoked from, which is then used to find the root directory.
 */
declare function bindings(mod: string): any

	declare module.exports: typeof bindings

    }
