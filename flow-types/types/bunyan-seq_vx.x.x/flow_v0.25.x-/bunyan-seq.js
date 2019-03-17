declare module "bunyan-seq" {
  import typeof * as Logger from "bunyan";

  declare export interface Configuration {
    apiKey?: string;
    batchSizeLimit?: number;
    eventSizeLimit?: number;
    level?: string;
    maxBatchingTime?: number;
    name?: string;
    onError?: (e: Error) => void;
    reemitErrorEvents?: boolean;
    serverUrl?: string;
  }
  declare export function createStream(config: Configuration): Logger.Stream;
}
