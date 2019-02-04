declare module 'just-debounce-it' {
        declare type ArgumentTypes<F: Function> = "There was Conditional Type, use $Call utility type";
	declare module.exports: typeof debounce

	declare function debounce<T: Function>(fn: T, wait?: 0, callFirst?: boolean): T

	declare function debounce<T: Function>(fn: T, wait: number, callFirst: true): T

	declare function debounce<T: Function>(
fn: T,
wait: number,
callFirst?: false): (...args: ArgumentTypes<T>) => void

    }
