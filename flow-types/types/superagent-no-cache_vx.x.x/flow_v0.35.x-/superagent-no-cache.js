declare module 'superagent-no-cache' {
        import typeof * as request from 'superagent';

	declare var plugin: request.Plugin;
	declare module.exports: typeof plugin

    }
