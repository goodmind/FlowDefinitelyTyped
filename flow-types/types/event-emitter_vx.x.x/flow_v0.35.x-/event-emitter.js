declare module 'event-emitter' {
        declare type ee$EventListener = (...args: any[]) => void;

declare type ee$EmitterMethod = (type: string, listener: ee$EventListener) => void;

declare interface ee$Emitter {
emit(type: string, ...args: any[]): void,
off: ee$EmitterMethod,
on: ee$EmitterMethod,
once: ee$EmitterMethod
} 
	declare function ee(obj?: any): ee$ee$Emitter

	declare module.exports: typeof ee

    }
