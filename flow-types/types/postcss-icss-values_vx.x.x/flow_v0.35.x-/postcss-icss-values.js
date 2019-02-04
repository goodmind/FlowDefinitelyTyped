declare module 'postcss-icss-values' {
        import type {
          Plugin
        } from 'postcss';

	declare var values: Plugin<{}>;
	declare module.exports: typeof values

    }
