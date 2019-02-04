declare module 'jasmine-data-provider' {
        declare function using<T: any[]>(
values: using$using$ValueType<T[]>,
func: (...data: Array<using$using$ArrayFuncArgType<T>>) => void): void

	declare function using<T>(values: using$using$ValueType<T[]>, func: (data: T) => void): void

	declare function using<T>(
values: using$using$ValueType<Record<string, T>>,
func: (data: T, description: string) => void): void

	declare type using$ValueType<T> = T | (() => T);

declare type using$ArrayFuncArgType<T> = "There was Conditional Type, use $Call utility type";
	declare module.exports: typeof using

    }
