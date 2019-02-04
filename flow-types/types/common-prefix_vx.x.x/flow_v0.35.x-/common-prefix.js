declare module 'common-prefix' {
        declare function common(strings: $ReadOnlyArray<string>): string

	declare module.exports: typeof common

    }
