declare module 'express-routes-versioning' {
        import type {
          Handler
        } from 'express';

	declare interface routesVersioning$VersionOptions {
[versionKey: string]: Handler
} 

declare type routesVersioning$RoutesVersioningMiddleware = (args: routesVersioning$VersionOptions, notFoundMiddleware?: Handler) => Handler;
	declare function routesVersioning(): routesVersioning$routesVersioning$RoutesVersioningMiddleware

	declare module.exports: typeof routesVersioning

    }
