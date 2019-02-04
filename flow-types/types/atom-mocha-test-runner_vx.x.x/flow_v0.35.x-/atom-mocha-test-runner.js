declare module 'atom-mocha-test-runner' {
        import type {
          TestRunner
        } from 'atom';

	declare interface AtomMochaOptions {

/**
 * Which reporter to use on the terminal.
 */
reporter?: string,

/**
 * Whether or not to assign the created Atom environment to `global.atom`.
 */
globalAtom?: boolean,

/**
 * File extensions that indicate that the file contains tests.
 */
testSuffixes?: string[],

/**
 * Whether or not to colorize output on the terminal.
 */
colors?: boolean,

/**
 * The string to use for the window title in the HTML reporter.
 */
htmlTitle?: string
} 
	declare type TestRunnerExport = {
createRunner(
options?: AtomMochaOptions,
mochaConfigFunction?: (mocha: Mocha) => void): TestRunner
} & TestRunner

	declare var runner: TestRunnerExport;
	declare module.exports: typeof runner

    }
