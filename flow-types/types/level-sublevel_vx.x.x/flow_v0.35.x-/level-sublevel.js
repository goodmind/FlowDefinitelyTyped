declare module 'level-sublevel' {
        import typeof * as levelup from 'levelup';

	declare module.exports: typeof sublevel

	declare var sublevel: sublevel$sublevel$Constructor;
	declare interface sublevel$Hook {
(ch: any, add: (op: sublevel$Batch | boolean) => void): void
} 

declare type sublevel$Batch = {
prefix?: sublevel$Sublevel
} & levelup.sublevel$Batch


declare type sublevel$Sublevel = {
sublevel(key: string): sublevel$Sublevel,
pre(hook: sublevel$Hook): Function
} & levelup.LevelUpBase<sublevel$Batch>


declare type sublevel$Constructor = (levelup: levelup.LevelUp) => sublevel$Sublevel;
    }
