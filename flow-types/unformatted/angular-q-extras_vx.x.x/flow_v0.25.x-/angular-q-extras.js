declare module 'angular' {
        declare type PromiseState = "fulfilled" | "rejected";
	declare interface PromiseValue<T> {
state: PromiseState,
value?: T,
reason?: any
} 
	declare interface IQService {
allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>, T8 | IPromise<T8>, T9 | IPromise<T9>, T10 | IPromise<T10>]): IPromise<[PromiseValue<T1>, PromiseValue<T2>, PromiseValue<T3>, PromiseValue<T4>, PromiseValue<T5>, PromiseValue<T6>, PromiseValue<T7>, PromiseValue<T8>, PromiseValue<T9>, PromiseValue<T10>]>,
allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>, T8 | IPromise<T8>, T9 | IPromise<T9>]): IPromise<[PromiseValue<T1>, PromiseValue<T2>, PromiseValue<T3>, PromiseValue<T4>, PromiseValue<T5>, PromiseValue<T6>, PromiseValue<T7>, PromiseValue<T8>, PromiseValue<T9>]>,
allSettled<T1, T2, T3, T4, T5, T6, T7, T8>(
values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>, T8 | IPromise<T8>]): IPromise<[PromiseValue<T1>, PromiseValue<T2>, PromiseValue<T3>, PromiseValue<T4>, PromiseValue<T5>, PromiseValue<T6>, PromiseValue<T7>, PromiseValue<T8>]>,
allSettled<T1, T2, T3, T4, T5, T6, T7>(
values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>, T6 | IPromise<T6>, T7 | IPromise<T7>]): IPromise<[PromiseValue<T1>, PromiseValue<T2>, PromiseValue<T3>, PromiseValue<T4>, PromiseValue<T5>, PromiseValue<T6>, PromiseValue<T7>]>,
allSettled<T1, T2, T3, T4, T5, T6>(
values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>, T6 | IPromise<T6>]): IPromise<[PromiseValue<T1>, PromiseValue<T2>, PromiseValue<T3>, PromiseValue<T4>, PromiseValue<T5>, PromiseValue<T6>]>,
allSettled<T1, T2, T3, T4, T5>(
values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>, T5 | IPromise<T5>]): IPromise<[PromiseValue<T1>, PromiseValue<T2>, PromiseValue<T3>, PromiseValue<T4>, PromiseValue<T5>]>,
allSettled<T1, T2, T3, T4>(
values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>, T4 | IPromise<T4>]): IPromise<[PromiseValue<T1>, PromiseValue<T2>, PromiseValue<T3>, PromiseValue<T4>]>,
allSettled<T1, T2, T3>(
values: [T1 | IPromise<T1>, T2 | IPromise<T2>, T3 | IPromise<T3>]): IPromise<[PromiseValue<T1>, PromiseValue<T2>, PromiseValue<T3>]>,
allSettled<T1, T2>(
values: [T1 | IPromise<T1>, T2 | IPromise<T2>]): IPromise<[PromiseValue<T1>, PromiseValue<T2>]>,
allSettled<TAll>(
promises: Array<TAll | IPromise<TAll>>): IPromise<Array<PromiseValue<TAll>>>,
allSettled<T>(
promises: $ObjMapi<T, <K>(K) => ($ElementType<T, K> | IPromise<$ElementType<T, K>>)>): IPromise<$ObjMapi<T, <K>(K) => PromiseValue<$ElementType<T, K>>>>,
isFulfilledState(promise: PromiseValue<any>): boolean,
isRejectedState(promise: PromiseValue<any>): boolean
} 
    }
declare module 'angular-q-extras' {
        declare var _: string;
	declare export default typeof _

	import typeof * as angular from 'angular';

    }
