declare module "sqs-consumer" {
  import type { SQS } from "aws-sdk";

  declare export type Consumer$ConsumerDone = (error?: Error) => void;

  declare export interface Consumer$Options {
    queueUrl: string;
    handleMessage(message: SQS.Message, done: Consumer$ConsumerDone): any;
    region?: string;
    attributeNames?: string[];
    messageAttributeNames?: string[];
    batchSize?: number;
    visibilityTimeout?: number;
    terminateVisibilityTimeout?: boolean;
    waitTimeSeconds?: number;
    authenticationErrorTimeout?: number;
    sqs?: SQS;
  }
  declare class Consumer mixins NodeJS.EventEmitter {
    constructor(options: Consumer$Consumer$Options): this;
    start(): void;
    stop(): void;
    static create(options: Consumer$Consumer$Options): Consumer;
  }
  declare module.exports: typeof Consumer;
}
