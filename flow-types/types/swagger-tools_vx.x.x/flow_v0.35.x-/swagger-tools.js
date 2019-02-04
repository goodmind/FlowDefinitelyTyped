declare module 'swagger-tools' {
        import type {
          NextHandleFunction
        } from 'connect';

	import type {
          IncomingMessage,ServerResponse
        } from 'http';

	declare export interface SwaggerParameterSchema {
allowMultiple?: boolean,
description?: string,
format?: string,
in?: string,
maximum?: string,
minimum?: string,
name: string,
paramType?: string,
required?: boolean,
type: string
} 
	declare export interface SwaggerRequestParameter<T> {
path: string[],
schema: SwaggerParameterSchema,
originalValue: any,
value: T
} 
	declare export interface SwaggerRequestParameters {
[paramName: string]: SwaggerRequestParameter<any> | void
} 
	declare export type Swagger12Request = {
swagger: {
api: any,
apiDeclaration: any,
apiIndex: number,
authorizations?: any,
operation?: any,
operationPath?: string[],
params: SwaggerRequestParameters,
resourceIndex: number,
resourceListing: any,
swaggerVersion: string,
useStubs?: boolean
}
} & IncomingMessage

	declare export type SwaggerRouter12HandlerFunction = (req: Swagger12Request, res: ServerResponse, next: (arg?: any) => void) => void;
	declare export interface SwaggerRouter12OptionsControllers {
[handlerName: string]: SwaggerRouter12HandlerFunction
} 
	declare export interface SwaggerRouter12Options {
controllers?: SwaggerRouter12OptionsControllers | string | string[],
ignoreMissingHandlers?: boolean,
useStubs?: boolean
} 
	declare export interface OperationParameter {
path: string[],
schema: SwaggerParameterSchema
} 
	declare export interface Swagger20Security {
[name: string]: any
} 
	declare export interface Swagger20Response {
description?: string,
schema?: any
} 
	declare export interface Swagger20Operation {
operationId?: string,
parameters?: SwaggerParameterSchema[],
responses: {
[code: string]: Swagger20Response
},
security?: Swagger20Security[],
summary?: string,
tags?: string[]
} 
	declare export type Swagger20Request<P: SwaggerRequestParameters> = {
swagger: {
apiPath: string,
operation?: Swagger20Operation,
operationPath?: string[],
operationParameters?: OperationParameter[],
path: any,
params: P,
security: any[],
swaggerObject: any,
swaggerVersion: string,
useStubs?: boolean
}
} & IncomingMessage

	declare export type SwaggerRouter20HandlerFunction = (
req: Swagger20Request<any>,
res: ServerResponse,
next: (arg?: any) => void) => void;
	declare export interface SwaggerRouter20OptionsControllers {
[handlerName: string]: SwaggerRouter20HandlerFunction
} 
	declare export interface SwaggerRouter20Options {
controllers?: SwaggerRouter20OptionsControllers | string | string[],
ignoreMissingHandlers?: boolean,
useStubs?: boolean
} 
	declare export interface SwaggerSecurityError {
code?: string,
message?: string,
state?: string,
statusCode?: number
} 
	declare export type SwaggerSecurityCallback = (err?: SwaggerSecurityError) => void;
	declare export type SwaggerSecurityHandler = (
request: IncomingMessage,
securityDefinition: any,
scopes: string | string[],
callback: SwaggerSecurityCallback) => void;
	declare export interface SwaggerSecurityOptions {
[securityDefinitionName: string]: SwaggerSecurityHandler
} 
	declare export interface SwaggerUi12ApiDeclarations {
[path: string]: any
} 
	declare export interface SwaggerUiOptions {
apiDocs?: string,
apiDocsPrefix?: string,
swaggerUi?: string,
swaggerUiDir?: string,
swaggerUiPrefix?: string
} 
	declare export interface SwaggerValidatorOptions {
validateResponse?: boolean
} 
	declare export interface Middleware {
swaggerMetadata(): NextHandleFunction,
swaggerSecurity(options?: SwaggerSecurityOptions): NextHandleFunction,
swaggerValidator(options?: SwaggerValidatorOptions): NextHandleFunction
} 
	declare export type Middleware12 = {
swaggerRouter(options?: SwaggerRouter12Options): NextHandleFunction,
swaggerUi(
apiDeclarations: SwaggerUi12ApiDeclarations,
options?: SwaggerUiOptions): NextHandleFunction
} & Middleware

	declare export type Middleware20 = {
swaggerRouter(options?: SwaggerRouter20Options): NextHandleFunction,
swaggerUi(options?: SwaggerUiOptions): NextHandleFunction
} & Middleware

	declare export type InitializeMiddlewareCallback12 = (middleware: Middleware12) => void;
	declare export type InitializeMiddlewareCallback20 = (middleware: Middleware20) => void;
	declare export interface Resource {
resourcePath: string
} 
	declare export function initializeMiddleware(swaggerObject: any, callback: InitializeMiddlewareCallback20): void

	declare export function initializeMiddleware(
swaggerObject: any,
resources: Resource[],
callback: InitializeMiddlewareCallback12): void

    }
