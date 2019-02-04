declare module 'webpack-validator' {
        import type {
          Configuration
        } from 'webpack';

	declare interface ValidationOptions {
"no-root-files-node-modules-nameclash"?: boolean,
"loader-enforce-include-or-exclude"?: boolean,
"loader-prefer-include"?: boolean
} 
	
/**
 * Validate your webpack configs with joi
 */
declare function Validate(config: Configuration): Configuration

	
/**
 * Validate your webpack configs with joi
 */
declare function Validate(config: Configuration, options: ValidationOptions): Configuration

	declare module.exports: typeof Validate

    }
