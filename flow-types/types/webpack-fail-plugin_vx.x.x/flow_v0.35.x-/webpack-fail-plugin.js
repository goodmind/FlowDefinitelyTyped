declare module 'webpack-fail-plugin' {
        import type {
          Plugin
        } from 'webpack';

	
/**
 * Webpack plugin that will make the process return status code 1 when it finishes with errors in single-run mode.
 */
declare function WebpackFailPlugin(): Plugin

	declare module.exports: typeof WebpackFailPlugin

    }
