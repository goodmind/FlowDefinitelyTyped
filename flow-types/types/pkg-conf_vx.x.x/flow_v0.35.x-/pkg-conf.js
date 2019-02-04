declare module 'pkg-conf' {
        
      declare var npm$namespace$pkgConf: {
        sync: typeof pkgConf$sync,
filepath: typeof pkgConf$filepath,
        
      }
declare type pkgConf$AnyJson = boolean
| number
| string
| null
| pkgConf$JsonArray
| pkgConf$JsonMap;

declare type pkgConf$JsonArray = {} & Array<pkgConf$AnyJson>


declare interface pkgConf$JsonMap {
[key: string]: pkgConf$AnyJson
} 

declare interface pkgConf$Options {
cwd?: string,
defaults?: {[key: string]: any},
skipOnFalse?: boolean
} 

declare function pkgConf$sync(namespace: string, options?: pkgConf$Options): pkgConf$JsonMap


declare function pkgConf$filepath(config: pkgConf$JsonMap): string | null

	declare function pkgConf(
namespace: string,
options?: pkgConf$pkgConf$Options): Promise<pkgConf$pkgConf$JsonMap>

	declare module.exports: typeof pkgConf

    }
