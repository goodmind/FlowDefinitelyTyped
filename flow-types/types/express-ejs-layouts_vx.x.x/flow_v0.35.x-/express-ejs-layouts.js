declare module 'express-ejs-layouts' {
        import type {
          RequestHandler
        } from 'express';

	declare function expressEjsLayouts(): RequestHandler

	
	declare module.exports: typeof expressEjsLayouts

    }
