declare module 'vinyl-paths' {
        declare type paths$Paths = {
paths: string[]
} & NodeJS.ReadWriteStream


declare interface paths$PathsStatic {

/**
 * Use the file paths from a gulp pipeline in vanilla node module
 * @param callback The optionally supplied callback will get a file path for every file and is expected
to call the callback when done. An array of the file paths so far is available as a paths property
on the stream.
 */
(callback?: paths$Callback): paths$Paths
} 

declare interface paths$Callback {
(path: string): any
} 
	declare var paths: paths$paths$PathsStatic;
	declare module.exports: typeof paths

    }
