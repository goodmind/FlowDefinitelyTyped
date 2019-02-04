declare module 'jest-each' {
        declare export default typeof JestEach

	declare function JestEach(parameters: any[][]): JestEach$JestEach$ReturnType

	declare type JestEach$SyncCallback = (...args: any[]) => void;

declare type JestEach$AsyncCallback = () => void;

declare type JestEach$TestCallback = JestEach$SyncCallback | JestEach$AsyncCallback;

declare type JestEach$TestFn = (name: string, fn: JestEach$TestCallback) => void;

declare type JestEach$DescribeFn = (name: string, fn: JestEach$SyncCallback) => void;

declare interface JestEach$TestObj {
(name: string, fn: JestEach$TestCallback): void,
only: JestEach$TestFn,
skip: JestEach$TestFn
} 

declare interface JestEach$DescribeObj {
(name: string, fn: JestEach$SyncCallback): void,
only: JestEach$DescribeFn,
skip: JestEach$DescribeFn
} 

declare interface JestEach$ReturnType {
test: JestEach$TestObj,
it: JestEach$TestObj,
fit: JestEach$TestFn,
xit: JestEach$TestFn,
xtest: JestEach$TestFn,
describe: JestEach$DescribeObj,
fdescribe: JestEach$DescribeFn,
xdescribe: JestEach$DescribeFn
} 
    }
