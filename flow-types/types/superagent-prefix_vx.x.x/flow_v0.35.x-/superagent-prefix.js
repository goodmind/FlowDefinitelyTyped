declare module 'superagent-prefix' {
        import typeof * as request from 'superagent';

	declare function plugin(prefix: string): request.Plugin

	
	declare module.exports: typeof plugin

    }
