declare module 'jake' {
        
/**
 * Complets an asynchronous task, allowing Jake's execution to proceed to the next task
 * @param value A value to return from the task.
 */
declare function complete(value?: any): void

	
/**
 * Creates a description for a Jake Task (or FileTask, DirectoryTask). When invoked, the description that iscreated will be associated with whatever Task is created next.
 * @param description The description for the Task
 */
declare function desc(description: string): void

	
/**
 * Creates a Jake DirectoryTask. Can be used as a prerequisite for FileTasks, or for simply ensuring a directory exists for use with a Task's action.
 * @param name The name of the DiretoryTask
 */
declare function directory(name: string): jake$jake$DirectoryTask

	
/**
 * Causes Jake execution to abort with an error. Allows passing an optional error code, which will be used to set the exit-code of exiting process.
 * @param err The error to thow when aborting execution. If this argument is an Error object, it will simply be thrown. If a String, it will be used as the error-message. (If it is a multi-line String, the first line will be used as the Error message, and the remaining lines will be used as the error-stack.)
 */
declare function fail(...err: string[]): void

	declare function fail(...err: Error[]): void

	declare function fail(...err: any[]): void

	
/**
 * Creates a Jake FileTask.
 * @name name The name of the Task
 * @param prereqs Prerequisites to be run before this task
 * @param action The action to perform for this task
 * @param opts Perform this task asynchronously. If you flag a task with this option, you must call the global `complete` method inside the task's action, for execution to proceed to the next task.
 */
declare function file(
name: string,
prereqs?: string[],
action?: () => void,
opts?: jake$jake$FileTaskOptions): jake$jake$FileTask

	
/**
 * Creates Jake FileTask from regex patterns
 * @name name/pattern of the Task
 * @param source calculated from the name pattern
 * @param prereqs Prerequisites to be run before this task
 * @param action The action to perform for this task
 * @param opts Perform this task asynchronously. If you flag a task with this option, you must call the global `complete` method inside the task's action, for execution to proceed to the next task.
 */
declare function rule(
pattern: RegExp,
source: string | {
(name: string): string
},
prereqs?: string[],
action?: () => void,
opts?: jake$jake$TaskOptions): void

	
/**
 * Creates a namespace which allows logical grouping of tasks, and prevents name-collisions with task-names. Namespaces can be nested inside of other namespaces.
 * @param name The name of the namespace
 * @param scope The enclosing scope for the namespaced tasks
 */
declare function namespace(name: string, scope: () => void): void

	
/**
 * @param name The name of the Task
 * @param prereqs Prerequisites to be run before this task
 * @param action The action to perform for this task
 * @param opts
 */
declare function task(
name: string,
prereqs?: string[],
action?: (...params: any[]) => any,
opts?: jake$jake$TaskOptions): jake$jake$Task

	declare function task(
name: string,
action?: (...params: any[]) => any,
opts?: jake$jake$TaskOptions): jake$jake$Task

	declare function task(
name: string,
opts?: jake$jake$TaskOptions,
action?: (...params: any[]) => any): jake$jake$Task

	
/**
 * @param name The name of the NpmPublishTask
 * @param packageFiles The files to include in the package
 * @param definition A function that creates the package definition
 */
declare function npmPublishTask(name: string, packageFiles: string[]): jake$jake$NpmPublishTask

	declare function npmPublishTask(name: string, definition?: () => void): jake$jake$NpmPublishTask

	
      declare var npm$namespace$jake: {
        mkdirP: typeof jake$mkdirP,
cpR: typeof jake$cpR,
readdirR: typeof jake$readdirR,
rmRf: typeof jake$rmRf,
exec: typeof jake$exec,
createExec: typeof jake$createExec,
addListener: typeof jake$addListener,
on: typeof jake$on,
once: typeof jake$once,
removeListener: typeof jake$removeListener,
removeAllListener: typeof jake$removeAllListener,
setMaxListeners: typeof jake$setMaxListeners,
listeners: typeof jake$listeners,
emit: typeof jake$emit,
        logger: typeof jake$logger,
program: typeof jake$program,
      }
declare interface jake$UtilOptions {
silent?: boolean
} 


/**
 * The jake.mkdirP utility recursively creates a set of nested directories. It will not throw an error if any of the directories already exists.
 * https://github.com/substack/node-mkdirp
 */
declare export function jake$mkdirP(name: string, mode?: string, f?: (er: Error, made: any) => void): void


declare export function jake$mkdirP(name: string, f?: (er: Error, made: any) => void): void



/**
 * The jake.cpR utility does a recursive copy of a file or directory.
 * Note that this command can only copy files and directories; it does not perform globbing (so arguments like '*.txt' are not possible).
 * @param path the file/directory to copy,
 * @param destination the destination.
 */
declare export function jake$cpR(
path: string,
destination: string,
opts?: jake$UtilOptions,
callback?: () => void): void


declare export function jake$cpR(path: string, destination: string, callback?: (err: Error) => void): void



/**
 * The jake.readdirR utility gives you a recursive directory listing, giving you output somewhat similar to the Unix find command. It only works with a directory name, and does not perform filtering or globbing.
 * @return an array of filepaths for all files in the 'pkg' directory, and all its subdirectories.
 */
declare export function jake$readdirR(name: string, opts?: jake$UtilOptions): string[]



/**
 * The jake.rmRf utility recursively removes a directory and all its contents.
 */
declare export function jake$rmRf(name: string, opts?: jake$UtilOptions): void


declare interface jake$ExecOptions {

/**
 * print to stdout, default false
 */
printStdout?: boolean,

/**
 * print to stderr, default false
 */
printStderr?: boolean,

/**
 * stop execution on error, default true
 */
breakOnError?: boolean,

/**
 */
windowsVerbatimArguments?: boolean
} 

declare export function jake$exec(cmds: string[], callback?: () => void, opts?: jake$ExecOptions): void



/**
 * @event cmdStart When a new command begins to run. Passes one arg, the command being run.
 * @event cmdEnd When a command finishes. Passes one arg, the command being run.
 * @event stdout When the stdout for the child-process recieves data. This streams the stdout data. Passes one arg, the chunk of data.
 * @event stderr When the stderr for the child-process recieves data. This streams the stderr data. Passes one arg, the chunk of data.
 * @event error When a shell-command
 */
declare export type jake$Exec = {
append(cmd: string): void,
run(): void
} & NodeJS.EventEmitter


declare export function jake$createExec(cmds: string[], callback?: () => void, opts?: jake$ExecOptions): jake$Exec


declare export function jake$createExec(cmds: string[], opts?: jake$ExecOptions, callback?: () => void): jake$Exec


declare export function jake$createExec(cmds: string, callback?: () => void, opts?: jake$ExecOptions): jake$Exec


declare export function jake$createExec(cmds: string, opts?: jake$ExecOptions, callback?: () => void): jake$Exec


declare interface jake$Logger {
log(value: any): void,
error(value: any): void
} 

declare export var jake$logger: jake$Logger;

declare export var jake$program: {
opts: {
[name: string]: any,
quiet: boolean
},
taskNames: string[],
taskArgs: string[],
envVars: {
[key: string]: string
}
};

declare export interface jake$TaskOptions {

/**
 * Perform this task asynchronously. If you flag a task with this option, you must call the global `complete` method inside the task's action, for execution to proceed to the next task.
 * @default false
 */
async?: boolean,

/**
 * number of parllel async tasks
 */
parallelLimit?: number
} 


/**
 * A Jake Task
 * @event complete
 */
declare export class jake$Task mixins NodeJS.EventEmitter {

/**
 * @name name The name of the Task
 * @param prereqs Prerequisites to be run before this task
 * @param action The action to perform for this task
 * @param opts Perform this task asynchronously. If you flag a task with this option, you must call the global `complete` method inside the task's action, for execution to proceed to the next task.
 */
constructor(name: string, prereqs?: string[], action?: () => void, opts?: jake$TaskOptions): this;

/**
 * Runs prerequisites, then this task. If the task has already been run, will not run the task again.
 */
invoke(): void;

/**
 * Runs this task, without running any prerequisites. If the task has already been run, it will still run it again.
 */
reenable(): void;
addListener(event: string, listener: Function): this;
on(event: string, listener: Function): this;
once(event: string, listener: Function): this;
removeListener(event: string, listener: Function): this;
removeAllListeners(event?: string): this;
setMaxListeners(n: number): this;
getMaxListeners(): number;
listeners(event: string): Function[];
emit(event: string, ...args: any[]): boolean;
listenerCount(type: string): number;
complete(value?: any): void;
value: any;
name: string;
prereqs: string[];
action: (...params: any[]) => any;
taskStatus: string;
async: boolean;
description: string;
fullName: string
}

declare export class jake$DirectoryTask mixins jake$FileTask {

/**
 * @param name The name of the directory to create.
 */
constructor(name: string): this
}

declare export interface jake$FileTaskOptions {

/**
 * Perform this task asynchronously. If you flag a task with this option, you must call the global `complete` method inside the task's action, for execution to proceed to the next task.
 * @default false
 */
async?: boolean
} 

declare export class jake$FileTask mixins jake$Task {

/**
 * @param name The name of the Task
 * @param prereqs Prerequisites to be run before this task
 * @param action The action to perform to create this file
 * @param opts Perform this task asynchronously. If you flag a task with this option, you must call the global `complete` method inside the task's action, for execution to proceed to the next task.
 */
constructor(name: string, prereqs?: string[], action?: () => void, opts?: jake$FileTaskOptions): this
}

declare interface jake$FileFilter {
(filename: string): boolean
} 

declare export class jake$FileList  {
constructor(): this;

/**
 * Includes file-patterns in the FileList. Should be called with one or more
 * pattern for finding file to include in the list. Arguments should be strings
 * for either a glob-pattern or a specific file-name, or an array of them
 */
include(files: string[]): void;
include(...files: string[]): void;

/**
 * Indicates whether a particular file would be filtered out by the current
 * exclusion rules for this FileList.
 * @param name The filename to check
 * @return Whether or not the file should be excluded
 */
shouldExclude(name: string): boolean;

/**
 * Excludes file-patterns from the FileList. Should be called with one or more
 * pattern for finding file to include in the list. Arguments can be:
 * 1. Strings for either a glob-pattern or a specific file-name
 * 2. Regular expression literals
 * 3. Functions to be run on the filename that return a true/false
 */
exclude(file: string[]): void;
exclude(...file: string[]): void;
exclude(file: RegExp[]): void;
exclude(...file: RegExp[]): void;
exclude(file: jake$FileFilter[]): void;
exclude(...file: jake$FileFilter[]): void;

/**
 * Populates the FileList from the include/exclude rules with a list of
 * actual files
 */
resolve(): void;

/**
 * Convert to a plain-jane array
 */
toArray(): string[];

/**
 * Get rid of any current exclusion rules
 */
clearExclude(): void
}

declare export class jake$PackageTask  {

/**
 * Instantiating a PackageTask creates a number of Jake Tasks that make packaging and distributing your software easy.
 * @param name The name of the project
 * @param version The current project version (will be appended to the project-name in the package-archive
 * @param definition Defines the contents of the package, and format of the package-archive. Will be executed on the instantiated PackageTask (i.e., 'this', will be the PackageTask instance), to set the various instance-propertiess.
 */
constructor(name: string, version: string, definition: () => void): this;

/**
 * Equivalent to the '-C' command for the `tar` and `jar` commands. ("Change to this directory before adding files.")
 */
archiveChangeDir: string;

/**
 * Specifies the files and directories to include in the package-archive. If unset, this will default to the main package directory -- i.e., name + version.
 */
archiveContentDir: string;

/**
 * The shell-command to use for creating jar archives.
 */
jarCommand: string;

/**
 * Can be set to point the `jar` utility at a manifest file to use in a .jar archive. If unset, one will be automatically created by the `jar` utility. This path should be relative to the root of the package directory (this.packageDir above, likely 'pkg')
 */
manifestFile: string;

/**
 * The name of the project
 */
name: string;

/**
 * If set to true, uses the `jar` utility to create a .jar archive of the pagckage
 */
needJar: boolean;

/**
 * If set to true, uses the `tar` utility to create a gzip .tgz archive of the pagckage
 */
needTar: boolean;

/**
 * If set to true, uses the `tar` utility to create a bzip2 .bz2 archive of the pagckage
 */
needTarBz2: boolean;

/**
 * If set to true, uses the `zip` utility to create a .zip archive of the pagckage
 */
needZip: boolean;

/**
 * The list of files and directories to include in the package-archive
 */
packageFiles: jake$FileList;

/**
 * The shell-command to use for creating tar archives.
 */
tarCommand: string;

/**
 * The project version-string
 */
version: string;

/**
 * The shell-command to use for creating zip archives.
 */
zipCommand: string
}

declare export class jake$TestTask  {
constructor(name: string, definition?: () => void): this
}

declare export class jake$NpmPublishTask  {
constructor(name: string, packageFiles: string[]): this;
constructor(name: string, definition?: () => void): this
}

declare export function jake$addListener(event: string, listener: Function): NodeJS.EventEmitter


declare export function jake$on(event: string, listener: Function): NodeJS.EventEmitter


declare export function jake$once(event: string, listener: Function): NodeJS.EventEmitter


declare export function jake$removeListener(event: string, listener: Function): NodeJS.EventEmitter


declare export function jake$removeAllListener(event: string): NodeJS.EventEmitter


declare export function jake$setMaxListeners(n: number): void


declare export function jake$listeners(event: string): Function[]


declare export function jake$emit(event: string, ...args: any[]): boolean

    }
