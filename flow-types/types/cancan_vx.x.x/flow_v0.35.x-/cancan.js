declare module 'cancan' {
        declare interface CanCan$Option {
instanceOf?: (instance: any, model: any) => boolean,
createError?: () => any
} 
	declare class CanCan  {
constructor(options?: CanCan$CanCan$Option): this;
allow<T>(
model: any,
actions: string | $ReadOnlyArray<string>,
targets: T | $ReadOnlyArray<T> | string | $ReadOnlyArray<string>,
condition?: {[key: string]: any} | ((performer: any, target: any, options?: any) => boolean)): void;
can(performer: any, action: string, target: any, options?: any): boolean;
cannot(performer: any, action: string, target: any, options?: any): boolean;
authorize(performer: any, action: string, target: any, options?: any): void
}
	declare module.exports: typeof CanCan

    }
