declare module 'egg-mock' {
        import type {
          Application,Context
        } from 'egg';

	declare type MockApplication = {
ready(): Promise<void>,
close(): Promise<void>,
callback(): any,

/**
 * mock Context
 */
mockContext(data?: any): Context,

/**
 * mock cookie session
 */
mockSession(data: any): MockApplication,
mockCookies(cookies: any): MockApplication,
mockHeaders(headers: any): MockApplication,

/**
 * Mock service
 */
mockService(service: string, methodName: string, fn: any): MockApplication,

/**
 * mock service that return error
 */
mockServiceError(service: string, methodName: string, err?: Error): MockApplication,
mockHttpclient(
mockUrl: string,
mockMethod: string | string[],
mockResult: {
data: Buffer | string | JSON,
status: number,
headers: any
}): MockApplication
} & Application

	declare interface MockOption {

/**
 * The directory of the application
 */
baseDir?: string,

/**
 * Custom you plugins
 */
plugins?: any,

/**
 * The directory of the egg framework
 */
framework?: string,

/**
 * Cache application based on baseDir
 */
cache?: boolean,

/**
 * Swtich on process coverage, but it'll be slower
 */
coverage?: boolean,

/**
 * Remove $baseDir/logs
 */
clean?: boolean
} 
	declare type EnvType = "default"
| "test"
| "prod"
| "local"
| "unittest";
	declare interface EggMock {

/**
 * Create a egg mocked application
 */
app(option?: MockOption): MockApplication,

/**
 * mock the serverEnv of Egg
 */
env(env: EnvType): void,

/**
 * mock console level
 */
consoleLevel(level: string): void,

/**
 * set EGG_HOME path
 */
home(homePath: string): void,

/**
 * restore mock
 */
restore(): void
} 
	declare var mm: EggMock;
	declare module.exports: typeof mm

    }
