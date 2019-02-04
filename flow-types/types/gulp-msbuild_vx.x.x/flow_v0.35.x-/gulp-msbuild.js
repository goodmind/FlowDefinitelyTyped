declare module 'gulp-msbuild' {
        declare type gulpMsBuild$GulpMsBuild = (options?: gulpMsBuild$Options) => NodeJS.ReadWriteStream;

declare interface gulpMsBuild$Options {
stdout?: boolean,
stderr?: boolean,
errorOnFail?: boolean,
logCommand?: boolean,
targets?: string[],
configuration?: string,
toolsVersion?: number,
architecture?: string,
properties?: any,
verbosity?: string,
maxcpucount?: number,
nodeReuse?: boolean,
nologo?: boolean,
fileLoggerParameters?: string,
consoleLoggerParameters?: string,
loggerParameters?: string,
emitEndEvent?: boolean
} 
	declare var gulpMsBuild: gulpMsBuild$gulpMsBuild$GulpMsBuild;
	declare module.exports: typeof gulpMsBuild

    }
