declare module "splunk-bunyan-logger" {
  import type { Stream as BunyanStream } from "bunyan";

  import type {
    Config,
    EventFormatter,
    Logger as SplunkLogger,
    SendContext
  } from "splunk-logging";

  declare export type SplunkStream = {
    logger: SplunkLogger
  } & NodeJS.WritableStream;

  declare export type SplunkBunyanStream = {
    flush(callback?: (error: Error, req: any, res: any) => void): void,
    on(
      event: string,
      callback: (err: Error, context: SendContext) => void
    ): void,
    setEventFormatter(eventFormatter: EventFormatter): void,
    stream: SplunkStream
  } & BunyanStream;

  declare export function createStream(config: Config): SplunkBunyanStream;
}
