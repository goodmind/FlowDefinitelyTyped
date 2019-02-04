declare module 'jest-in-case' {
        declare var global: NodeJS.Global;
	declare interface Config {
name?: string,
only?: boolean,
skip?: boolean,
[key: string]: any
} 
	declare type Tester<Opts> = (opts: Opts, done: jest.DoneCallback) => any;
	declare type TestCases<Opts> = $ReadOnlyArray<Opts> | {
[name: string]: Opts
};
	declare function cases<Opts: Config>(
title: string,
tester: Tester<Opts>,
testCases: TestCases<Opts>): void

	declare module.exports: typeof cases

    }
