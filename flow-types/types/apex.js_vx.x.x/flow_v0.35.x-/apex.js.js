declare module 'apex.js' {
        declare function λ(
fn: (event: any, context: AWSLambda.Context) => any): (event: any, context: AWSLambda.Context, callback: AWSLambda.Callback) => void

	
	declare module.exports: typeof λ

    }
