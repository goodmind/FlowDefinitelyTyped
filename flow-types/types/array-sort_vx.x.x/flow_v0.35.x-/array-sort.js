declare module 'array-sort' {
        declare type Comparator<T> = (a: T, b: T) => number;
	declare type ComparisonArg<T> = string | Comparator<T>;
	declare type ComparisonArgs<T> = ComparisonArg<T> | Array<ComparisonArg<T>>;
	declare interface Options {
+reverse: boolean
} 
	declare function arraySort<T>(arr: T[], props?: ComparisonArgs<T>, options?: Options): T[]

	declare export default typeof arraySort

    }
