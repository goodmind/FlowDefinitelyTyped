declare module 'clear-require' {
        declare interface ClearRequire {
(moduleId: string): boolean,
all(): void,
match(regex: RegExp): void
} 
	declare var clear: ClearRequire;
	declare module.exports: typeof clear

    }
