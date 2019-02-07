declare module 'jest-json-schema' {
        import typeof * as ajv from 'ajv';

	declare module 'global' {
        declare interface jest$Matchers<R> {
toMatchSchema(schema: {[key: string]: any}): R
} 
    }

	declare export var matchers: jest$ExpectExtendMap;
	declare export function matchersWithOptions(options: ajv.Options): jest$ExpectExtendMap

    }
