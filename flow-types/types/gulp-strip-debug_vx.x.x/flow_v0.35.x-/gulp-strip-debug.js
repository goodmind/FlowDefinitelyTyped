declare module 'gulp-strip-debug' {
        declare var gulpStripDebug: () => NodeJS.ReadWriteStream;
	declare module.exports: typeof gulpStripDebug

    }
