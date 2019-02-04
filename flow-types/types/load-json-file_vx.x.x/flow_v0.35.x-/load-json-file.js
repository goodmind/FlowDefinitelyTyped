declare module 'load-json-file' {
        declare interface LoadJsonFile {

/**
 * Returns a promise for the parsed JSON.
 */
(filepath: string): Promise<any>,

/**
 * Returns the parsed JSON.
 */
sync(filepath: string): any
} 
	declare var loadJsonFile: LoadJsonFile;
	declare module.exports: typeof loadJsonFile

    }
