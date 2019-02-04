declare module 'react-file-reader-input' {
        import typeof * as React from 'react';

	declare class FileInput mixins React.Component<FileInput$FileInput$Props> {}
	declare type FileInput$Format = "buffer" | "binary" | "url" | "text";

declare type FileInput$Result = [ProgressEvent, File];

declare interface FileInput$Props {

/**
 * what format the `FileReader` should read the file as
 * (i.e., `'buffer'`, `'binary'`, `'url'`, `'text'`).
 * 
 * Defaults to `'url'`.
 */
as?: FileInput$Format,

/**
 * Callback function called when the files are choosen by the user.
 * 
 * Results will be an array of arrays, the size of which depending
 * on how many files were selected.
 * 
 * Each result will be an array of two items:
 * 
 * `progressEvent`: `result[0]` is a `ProgressEvent` object.
 * You can retrieve the raw results at `progressEvent.target.result`
 * among other things.
 * 
 * `file`: `result[1]` is a `File` object. You can retrieve the file name
 * at file.name among other things.
 * @param event The event that triggered file changes
 * @param results The array of files
 */
onChange(event: React.SyntheticEvent<any>, results: FileInput$Result[]): void
} 
	declare module.exports: typeof FileInput

    }
