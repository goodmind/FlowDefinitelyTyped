declare module 'gulp-batch' {
        declare function batch(opts?: any, cb?: any, errorHandler?: any): (event: any) => void

	
	declare module.exports: typeof batch

    }
