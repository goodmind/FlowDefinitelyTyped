declare module 'mock-fs' {
        declare function mock(config?: mock$mock$Config, options?: mock$mock$Options): void

	
      declare var npm$namespace$mock: {
        file: typeof mock$file,
directory: typeof mock$directory,
symlink: typeof mock$symlink,
restore: typeof mock$restore,
fs: typeof mock$fs,
        
      }
declare function mock$file(config: mock$FileConfig): mock$File


declare function mock$directory(config: mock$DirectoryConfig): mock$Directory


declare function mock$symlink(config: mock$SymlinkConfig): mock$Symlink


declare function mock$restore(): void


declare function mock$fs(config?: mock$Config, options?: mock$Options): typeof nodefs


declare interface mock$Config {
[path: string]: string
| Buffer
| mock$File
| mock$Directory
| mock$Symlink
| mock$Config
} 

declare interface mock$Options {
createCwd?: boolean,
createTmp?: boolean
} 

declare interface mock$CommonConfig {
mode?: number,
uid?: number,
git?: number,
atime?: Date,
ctime?: Date,
mtime?: Date,
birthtime?: Date
} 

declare type mock$FileConfig = {
content: string | Buffer
} & mock$CommonConfig


declare type mock$DirectoryConfig = {
items: mock$Config
} & mock$CommonConfig


declare type mock$SymlinkConfig = {
path: string
} & mock$CommonConfig


declare class mock$File  {}

declare class mock$Directory  {}

declare class mock$Symlink  {}
	declare module.exports: typeof mock

    }
