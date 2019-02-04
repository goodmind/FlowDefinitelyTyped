declare module 'parse-git-config' {
        declare module.exports: typeof parse

	
/**
 * Asynchronously parse a `.git/config` file. If only the callback is passed,
 * the `.git/config` file relative to `process.cwd()` is used.
 * @example ```js
 * parse((err, config) => {
 *   if (err) throw err;
 *   // do stuff with config
 * });
 *
 * // or, using async/await
 * (async () => {
 *   console.log(await parse());
 *   console.log(await parse({ cwd: 'foo' }));
 *   console.log(await parse({ cwd: 'foo', path: 'some/.git/config' }));
 * })();
 * ```
 * @param options Options with `cwd` or `path`, the cwd to use, or the callback function.
 * @param callback callback function if the first argument is options or cwd.
 */
declare function parse(cb: parse$parse$ParseCallback): void

	declare function parse(options?: parse$parse$Options | string): Promise<parse$parse$Config | null>

	declare function parse(options: parse$parse$Options | string, cb: parse$parse$ParseCallback): void

	
      declare var npm$namespace$parse: {
        promise: typeof parse$promise,
sync: typeof parse$sync,
expandKeys: typeof parse$expandKeys,
resolveConfigPath: typeof parse$resolveConfigPath,
        
      }

/**
 * Asynchronously parse a .git/config file. Returns a promise.
 * Resolves with `null` if unable to resolve path to the git config file.
 * If no arguments are passed, the .git/config file relative to process.cwd() is used.
 */
declare function parse$promise(options?: parse$Options | string): Promise<parse$Config | null>



/**
 * Synchronously parse a `.git/config` file. If no arguments are passed,
 * the `.git/config` file relative to `process.cwd()` is used.
 * @example ```js
     * console.log(parse.sync());
     * console.log(parse.sync({ cwd: 'foo' }));
     * console.log(parse.sync({ cwd: 'foo', path: 'some/.git/config' }));
     * ```
 * @param options Options with `cwd` or `path`, or the cwd to use.
 */
declare function parse$sync(options?: parse$Options | string): parse$Config



/**
 * Returns an object with only the properties that had ini-style keys
 * converted to objects.
 * @example ```js
     * const config = parse.sync({ path: '/path/to/.gitconfig' });
     * const obj = parse.expandKeys(config);
     * ```
 * @param config The parsed git config object.
 */
declare function parse$expandKeys(config: parse$Config): parse$Config



/**
 * Resolve the git config path
 */
declare function parse$resolveConfigPath(options: string | parse$ResolveConfigOptions): string | null


declare interface parse$ResolveConfigOptions {
type?: "global",
cwd?: string,
path?: string
} 

declare type parse$Options = {
include?: boolean,
parse$expandKeys?: boolean
} & parse$ResolveConfigOptions


declare type parse$ParseCallback = ((err: Error | null, config: parse$Config) => void);

declare interface parse$Config {
[key: string]: any
} 
    }
