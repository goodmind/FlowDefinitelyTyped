declare module 'lowdb' {
        import type {
          LoDashStatic
        } from 'lodash';

	declare var Lowdb: Lowdb$lowdb;
	declare export default typeof Lowdb

	declare interface Lowdb$AdapterOptions<SchemaT= any> {
defaultValue?: SchemaT,
serialize?: (data: SchemaT) => string,
deserialize?: (serializedData: string) => SchemaT
} 

declare type Lowdb$BaseAdapter<SchemaT= any> = {
+"@@reference": SchemaT,
new <SchemaT>(
source: string,
options?: Lowdb$AdapterOptions<SchemaT>): Lowdb$BaseAdapter<SchemaT>,
source: string
} & Lowdb$AdapterOptions<SchemaT>


declare type Lowdb$AdapterSync<SchemaT= any> = {
new <SchemaT>(
source: string,
options?: Lowdb$AdapterOptions<SchemaT>): Lowdb$AdapterSync<SchemaT>,
write(state: {[key: string]: any}): void
} & Lowdb$BaseAdapter<SchemaT>


declare type Lowdb$AdapterAsync<SchemaT= any> = {
new <SchemaT>(
source: string,
options?: Lowdb$AdapterOptions<SchemaT>): Lowdb$AdapterAsync<SchemaT>,
write(state: {[key: string]: any}): Promise<void>
} & Lowdb$BaseAdapter<SchemaT>


declare interface Lowdb$LowdbBase<SchemaT> {
getState: () => SchemaT,
setState: (state: SchemaT) => this
} 

declare type Lowdb$LowdbSync<SchemaT> = {
_: LoDashStatic,
read: () => this,

/**
 * @description Be careful: This function overwrites the whole database.
 */
write<T>(returnValue?: T): T
} & Lowdb$LowdbBase<SchemaT> & Lowdb$LoDashExplicitSyncWrapper<SchemaT>


declare type Lowdb$LowdbAsync<SchemaT> = {
_: LoDashStatic,
read: () => Promise<this>,

/**
 * @description Be careful: This function overwrites the whole database.
 */
write<T>(returnValue?: T): Promise<T>
} & Lowdb$LowdbBase<SchemaT> & Lowdb$LoDashExplicitAsyncWrapper<SchemaT>


declare type Lowdb$LowdbFpSync<SchemaT> = {

/**
 * @description Be careful: This function overwrites the whole database.
 */
write<T>(returnValue?: T): T,

/**
 * @description Returns a function that allows you to access/modify the database at a given path.
 * @example ```js
 *      *  const posts = db('posts')
 *      *  const firstPost = posts(all => all[0])
 *      *  posts.write((allPosts) => [...allPosts, {title: 'Yup!'}])
 *      * ```
 */
<TKey: $Keys<SchemaT>>(path: TKey | [TKey], defaultValue?: $ElementType<SchemaT, TKey>): Lowdb$FpReturnSync<$ElementType<SchemaT, TKey>>,
<TKey: $Keys<SchemaT>, TSubKey: $Keys<$ElementType<SchemaT, TKey>>>(path: [TKey, TSubKey], defaultValue?: $ElementType<$ElementType<SchemaT, TKey>, TSubKey>): Lowdb$FpReturnSync<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>>,
<TKey: $Keys<SchemaT>, TSubKey: $Keys<$ElementType<SchemaT, TKey>>, TSubKey2: $Keys<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>>>(path: [TKey, TSubKey, TSubKey2], defaultValue?: $ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>): Lowdb$FpReturnSync<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>>,
<TKey: $Keys<SchemaT>, TSubKey: $Keys<$ElementType<SchemaT, TKey>>, TSubKey2: $Keys<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>>, TSubKey3: $Keys<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>>>(path: [TKey, TSubKey, TSubKey2, TSubKey3], defaultValue?: $ElementType<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>, TSubKey3>): Lowdb$FpReturnSync<$ElementType<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>, TSubKey3>>,
<TKey: $Keys<SchemaT>, TSubKey: $Keys<$ElementType<SchemaT, TKey>>, TSubKey2: $Keys<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>>, TSubKey3: $Keys<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>>, TSubKey4: $Keys<$ElementType<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>, TSubKey3>>>(path: [TKey, TSubKey, TSubKey2, TSubKey3, TSubKey4], defaultValue?: $ElementType<$ElementType<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>, TSubKey3>, TSubKey4>): Lowdb$FpReturnSync<$ElementType<$ElementType<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>, TSubKey3>, TSubKey4>>,
<T>(path: string | string[], defaultValue?: T): Lowdb$FpReturnSync<T>
} & Lowdb$LowdbBase<SchemaT>


declare type Lowdb$LowdbFpAsync<SchemaT> = {

/**
 * @description Be careful: This function overwrites the whole database.
 */
write<T>(returnValue?: T): Promise<T>,

/**
 * @description Returns a function that allows you to access/modify the database at a given path.
 * @example ```js
 *      *  const posts = db('posts')
 *      *  const firstPost = posts(all => all[0])
 *      *  posts.write((allPosts) => [...allPosts, {title: 'Yup!'}])
 *      * ```
 */
<TKey: $Keys<SchemaT>>(path: TKey | [TKey], defaultValue?: $ElementType<SchemaT, TKey>): Lowdb$FpReturnAsync<$ElementType<SchemaT, TKey>>,
<TKey: $Keys<SchemaT>, TSubKey: $Keys<$ElementType<SchemaT, TKey>>>(path: [TKey, TSubKey], defaultValue?: $ElementType<$ElementType<SchemaT, TKey>, TSubKey>): Lowdb$FpReturnAsync<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>>,
<TKey: $Keys<SchemaT>, TSubKey: $Keys<$ElementType<SchemaT, TKey>>, TSubKey2: $Keys<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>>>(path: [TKey, TSubKey, TSubKey2], defaultValue?: $ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>): Lowdb$FpReturnAsync<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>>,
<TKey: $Keys<SchemaT>, TSubKey: $Keys<$ElementType<SchemaT, TKey>>, TSubKey2: $Keys<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>>, TSubKey3: $Keys<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>>>(path: [TKey, TSubKey, TSubKey2, TSubKey3], defaultValue?: $ElementType<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>, TSubKey3>): Lowdb$FpReturnAsync<$ElementType<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>, TSubKey3>>,
<TKey: $Keys<SchemaT>, TSubKey: $Keys<$ElementType<SchemaT, TKey>>, TSubKey2: $Keys<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>>, TSubKey3: $Keys<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>>, TSubKey4: $Keys<$ElementType<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>, TSubKey3>>>(path: [TKey, TSubKey, TSubKey2, TSubKey3, TSubKey4], defaultValue?: $ElementType<$ElementType<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>, TSubKey3>, TSubKey4>): Lowdb$FpReturnAsync<$ElementType<$ElementType<$ElementType<$ElementType<$ElementType<SchemaT, TKey>, TSubKey>, TSubKey2>, TSubKey3>, TSubKey4>>,
<T>(path: string | string[], defaultValue?: T): Lowdb$FpReturnAsync<T>
} & Lowdb$LowdbBase<SchemaT>


declare interface Lowdb$FpReturnBase<PathT> {

/**
 * Execute a series of functions on the data at a given path.
 * Result of previous function is the input of the next one.
 * Returns the result of the last function.
 */
<R1>(f1: (a1: PathT) => R1): R1,
<R1, R2>(f1: [(a1: PathT) => R1, (a: R1) => R2]): R2,
<R1, R2, R3>(f1: [(a1: PathT) => R1, (a: R1) => R2, (a: R2) => R3]): R3,
<R1, R2, R3, R4>(f1: [(a1: PathT) => R1, (a: R1) => R2, (a: R2) => R3, (a: R3) => R4]): R4,
<R1, R2, R3, R4, R5>(f1: [(a1: PathT) => R1, (a: R1) => R2, (a: R2) => R3, (a: R3) => R4, (a: R4) => R5]): R5,
<R1, R2, R3, R4, R5, R6>(f1: [(a1: PathT) => R1, (a: R1) => R2, (a: R2) => R3, (a: R3) => R4, (a: R4) => R5, (a: R5) => R6]): R6,
<R1, R2, R3, R4, R5, R6, R7>(f1: [(a1: PathT) => R1, (a: R1) => R2, (a: R2) => R3, (a: R3) => R4, (a: R4) => R5, (a: R5) => R6, (a: R6) => R7]): R7,
(funcs: Array<(a: any) => any>): any
} 

declare type Lowdb$FpReturnSync<PathT> = {

/**
 * @description Writes the change to the database, based on the callback's return value.
 * @example ```js
 *      *  posts.write((allPosts) => [...allPosts, {title: 'Yup!'}])
 *      * ```
 */
write<R1: PathT>(f1: (a1: PathT) => R1): R1
} & Lowdb$FpReturnBase<PathT>


declare type Lowdb$FpReturnAsync<PathT> = {

/**
 * @description Writes the change to the database, based on the callback's return value.
 * @example ```js
 *      *  posts.write((allPosts) => [...allPosts, {title: 'Yup!'}])
 *      * ```
 */
write<R1: PathT>(f1: (a1: PathT) => R1): Promise<R1>
} & Lowdb$FpReturnBase<PathT>


declare interface Lowdb$lowdb {
<AdapterT: Lowdb$AdapterAsync<>>(adapter: AdapterT): Promise<Lowdb$LowdbAsync<$ElementType<AdapterT, ReferenceProperty>>>,
<AdapterT: Lowdb$AdapterSync<>>(adapter: AdapterT): Lowdb$LowdbSync<$ElementType<AdapterT, ReferenceProperty>>
} 

declare interface Lowdb$lowdbFp {
<AdapterT: Lowdb$AdapterAsync<>>(adapter: AdapterT): Promise<Lowdb$LowdbFpAsync<$ElementType<AdapterT, ReferenceProperty>>>,
<AdapterT: Lowdb$AdapterSync<>>(adapter: AdapterT): Lowdb$LowdbFpSync<$ElementType<AdapterT, ReferenceProperty>>
} 

declare type Lowdb$LoDashExplicitSyncWrapper<TValue> = {
write(): TValue
} & _.LoDashWrapper<TValue>


declare type Lowdb$LoDashExplicitAsyncWrapper<TValue> = {
write(): Promise<TValue>
} & _.LoDashWrapper<TValue>

	declare type ReferenceProperty = "@@reference";
    }
