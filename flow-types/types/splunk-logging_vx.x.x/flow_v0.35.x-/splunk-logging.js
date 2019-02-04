declare module 'splunk-logging' {
        import type {
          RequestOptions
        } from 'request';

	declare export interface Config {
token: string,
name?: string,
host?: string,
maxRetries?: number,
path?: string,
protocol?: "http" | "https",
port?: number,
url?: string,
level?: string,
batchInterval?: number,
maxBatchSize?: number,
maxBatchCount?: number
} 
	declare export interface SendContextMetadata {
host?: string,
index?: string,
source?: string,
sourcetype?: string
} 
	declare export interface SendContext {
message: any,
severity?: string,
metadata?: SendContextMetadata
} 
	declare export type Callback = (error: Error | void, req: any, res: any) => void;
	declare export type EventFormatter = (message: any, severity: string) => any;
	declare export class Logger  {
error: (error: Error, context: SendContext) => void;
eventFormatter: EventFormatter;
requestOptions: RequestOptions;
serializedEventQueue: any[];
constructor(config: Config): this;
flush(callback?: Callback): void;
send(context: SendContext, callback?: Callback): void
}
    }
