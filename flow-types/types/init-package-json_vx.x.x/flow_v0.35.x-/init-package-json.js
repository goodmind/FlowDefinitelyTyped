declare module 'init-package-json' {
        
      declare var npm$namespace$init_package_json: {
        yes: typeof init_package_json$yes,
        
      }
declare interface init_package_json$Config {
[key: string]: any,
get(k: string): any
} 

declare function init_package_json$yes(conf: init_package_json$Config): boolean

	declare function init_package_json(
dir: string,
input: string,
config: init_package_json$init_package_json$Config | {},
cb: (err: any, data: any) => void): void

	declare function init_package_json(dir: string, input: string, cb: (err: any, data: any) => void): void

	declare module.exports: typeof init_package_json

    }
