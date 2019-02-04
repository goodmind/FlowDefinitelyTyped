declare module 'assert-equal-jsx' {
        import typeof * as React from 'react';

	declare interface assertEqualJSX$AsssertOptions {
sanitize(str: string): string
} 
	declare function assertEqualJSX(
actual: JSX.Element,
expected: JSX.Element,
opts?: assertEqualJSX$assertEqualJSX$AsssertOptions): void

	declare module.exports: typeof assertEqualJSX

    }
