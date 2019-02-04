declare module 'flat' {
        declare var flatten: FlatTypes$FlatTypes$Flatten;
	declare module.exports: typeof flatten

	declare interface FlatTypes$FlattenOptions {
delimiter?: string,
safe?: boolean,
maxDepth?: number
} 

declare interface FlatTypes$Flatten {
(target: TTarget, options?: FlatTypes$FlattenOptions): TResult,
flatten: FlatTypes$Flatten,
unflatten: FlatTypes$Unflatten
} 

declare interface FlatTypes$UnflattenOptions {
delimiter?: string,
object?: boolean,
overwrite?: boolean
} 

declare interface FlatTypes$Unflatten {
(target: TTarget, options?: FlatTypes$UnflattenOptions): TResult
} 
    }
