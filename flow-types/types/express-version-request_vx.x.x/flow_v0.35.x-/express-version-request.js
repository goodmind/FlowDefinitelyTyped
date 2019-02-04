declare module 'express-version-request' {
        import type {
          Handler,Request
        } from 'express';

	declare export interface SetVersionByQueryParamOptions {
removeQueryParam: boolean
} 
	declare export type CustomParsingFunction = (header: $ElementType<$ElementType<Request, "headers">, "accept">) => string;
	declare export function setVersion(version: string): Handler

	declare export function setVersionByHeader(headerName?: string): Handler

	declare export function setVersionByQueryParam(queryParam?: string, options?: SetVersionByQueryParamOptions): Handler

	declare export function setVersionByAcceptHeader(customParsingFunction?: CustomParsingFunction): Handler

	declare export function formatVersion(version: {[key: string]: any} | string): string

    }
