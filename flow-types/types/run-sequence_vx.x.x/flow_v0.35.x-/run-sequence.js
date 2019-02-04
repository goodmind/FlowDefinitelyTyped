declare module 'run-sequence' {
        declare interface IRunSequence {
(...streams: (string | string[] | gulp.TaskCallback)[]): NodeJS.ReadWriteStream,
use(gulp: gulp.Gulp): IRunSequence
} 
	declare var _tmp: IRunSequence;
	declare module.exports: typeof _tmp

    }
