declare module 'karma-coverage' {
        import 'karma';

	import typeof * as istanbul from 'istanbul';

	declare module 'karma' {
        declare interface ConfigOptions {

/**
 * See https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
 */
coverageReporter?: KarmaCoverageReporter & {
reporters?: KarmaCoverageReporter[]
}
} 
	declare interface KarmaCoverageReporter {
type?: string,
dir?: string,
subdir?: string | ((browser: string) => string),
check?: any,
watermarks?: any,
includeAllSources?: boolean,
sourceStore?: istanbul.Store,
instrumenter?: any,
[moreSettings: string]: any
} 
    }

    }
