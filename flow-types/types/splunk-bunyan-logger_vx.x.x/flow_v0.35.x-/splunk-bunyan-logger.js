declare module 'splunk-bunyan-logger' {
        import type {
          BunyanStream
        } from 'bunyan';

	import type {
          Config,EventFormatter,SplunkLogger,SendContext
        } from 'splunk-logging';

	declare export type SplunkStream = {
logger: SplunkLogger
} & NodeJS.WritableStream

	declare export type SplunkBunyanStream = {
flush(callback?: (error: Error, req: any, res: any) => void): void,
on(event: string, callback: (err: Error, context: SendContext) => void): void,
setEventFormatter(eventFormatter: EventFormatter): void,
stream: SplunkStream
} & BunyanStream

	declare export function createStream(config: Config): SplunkBunyanStream

    }
