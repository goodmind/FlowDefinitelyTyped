declare module "sqs-producer" {
  import type { SQS } from "aws-sdk";

  declare export interface Options {
    queueUrl: string;
    region?: string;
    batchSize?: number;
    sqs?: SQS;
  }
  declare export type ProducerCallback<T> = (err?: Error, data?: T) => any;
  declare export interface ProducerMessageAttribute {
    DataType: "String" | "Binary";
    StringValue?: string;
    BinaryValue?: Buffer;
  }
  declare export interface ProducerMessage {
    id: string;
    body: string;
    messageAttributes?: {
      [key: string]: ProducerMessageAttribute
    };
    delaySeconds?: number;
  }
  declare export interface Producer {
    send(
      messages: string[] | ProducerMessage[],
      cb: ProducerCallback<void>
    ): void;
    queueSize(cb: ProducerCallback<number>): void;
  }
  declare export function create(opts: Options): Producer;
}
