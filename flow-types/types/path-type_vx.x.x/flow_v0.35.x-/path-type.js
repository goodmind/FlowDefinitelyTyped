declare module 'path-type' {
        declare export var file: PathTypeFn;
	declare export var dir: PathTypeFn;
	declare export var symlink: PathTypeFn;
	declare export var fileSync: PathTypeSyncFn;
	declare export var dirSync: PathTypeSyncFn;
	declare export var symlinkSync: PathTypeSyncFn;
	declare export type PathTypeFn = (path: string) => Promise<boolean>;
	declare export type PathTypeSyncFn = (path: string) => boolean;
    }
