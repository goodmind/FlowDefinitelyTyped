declare module 'aws-serverless-express' {
        import typeof * as http from 'http';

	import typeof * as lambda from 'aws-lambda';

	declare export interface Response {
statusCode: number,
body: string,
headers: {}
} 
	declare export interface ProxyResult {
promise: Promise<Response>
} 
	declare export function createServer(
requestListener: (request: http.IncomingMessage, response: http.ServerResponse) => void,
serverListenCallback?: () => any,
binaryMimeTypes?: string[]): http.Server

	declare export function proxy(server: http.Server, event: any, context: lambda.Context): http.Server

	declare export function proxy(
server: http.Server,
event: any,
context: lambda.Context,
resolutionMode: "CONTEXT_SUCCEED"): void

	declare export function proxy(
server: http.Server,
event: any,
context: lambda.Context,
resolutionMode: "PROMISE"): ProxyResult

	declare export function proxy(
server: http.Server,
event: any,
context: lambda.Context,
resolutionMode: "CALLBACK",
callback?: (error: any, response: Response) => void): void

    }
