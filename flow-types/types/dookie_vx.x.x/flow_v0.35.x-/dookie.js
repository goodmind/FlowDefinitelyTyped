declare module 'dookie' {
        declare export interface PushOpts {
filename?: string,
dropDatabase: boolean
} 
	declare export function push(uri: string, data: any, opts?: PushOpts): Promise<any>

	declare export function pull(uri: string): Promise<any>

	declare export function pullToStream(uri: string, stream: any): Promise<any>

    }
