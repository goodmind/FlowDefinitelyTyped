declare module "kafka-node" {
  declare export class Client {
    constructor(
      connectionString: string,
      clientId?: string,
      options?: ZKOptions,
      noBatchOptions?: AckBatchOptions,
      sslOptions?: any
    ): this;
    close(cb?: () => void): void;
    loadMetadataForTopics(
      topics: string[],
      cb: (error: TopicsNotExistError | any, data: any) => any
    ): void;
    topicExists(
      topics: string[],
      cb: (error?: TopicsNotExistError | any) => any
    ): void;
    refreshMetadata(topics: string[], cb?: (error?: any) => any): void;
    sendOffsetCommitV2Request(
      group: string,
      generationId: number,
      memberId: string,
      commits: OffsetCommitRequest[],
      cb: (error: any, data: any) => any
    ): void;
    on(
      eventName:
        | "brokersChanged"
        | "close"
        | "connect"
        | "ready"
        | "reconnect"
        | "zkReconnect",
      cb: () => any
    ): this;
    on(eventName: "error" | "socket_error", cb: (error: any) => any): this;
  }
  declare export class KafkaClient mixins Client {
    constructor(options?: KafkaClientOptions): this;
    connect(): void;
    getListGroups(cb: (error: any, data: any) => any): void;
    describeGroups(
      consumerGroups: any,
      cb: (error: any, data: any) => any
    ): void;
  }
  declare export class Producer {
    constructor(
      client: Client,
      options?: ProducerOptions,
      customPartitioner?: CustomPartitioner
    ): this;
    on(eventName: "ready", cb: () => any): void;
    on(eventName: "error", cb: (error: any) => any): void;
    send(payloads: ProduceRequest[], cb: (error: any, data: any) => any): void;
    createTopics(
      topics: string[],
      async: boolean,
      cb: (error: any, data: any) => any
    ): void;
    createTopics(topics: string[], cb: (error: any, data: any) => any): void;
    close(cb?: () => any): void;
  }
  declare export class HighLevelProducer mixins Producer {}
  declare export class Consumer {
    constructor(
      client: Client,
      fetchRequests: Array<OffsetFetchRequest | string>,
      options: ConsumerOptions
    ): this;
    client: Client;
    on(eventName: "message", cb: (message: Message) => any): void;
    on(eventName: "error" | "offsetOutOfRange", cb: (error: any) => any): void;
    addTopics(
      topics: string[] | Topic[],
      cb: (error: any, added: string[] | Topic[]) => any,
      fromOffset?: boolean
    ): void;
    removeTopics(
      topics: string | string[],
      cb: (error: any, removed: number) => any
    ): void;
    commit(cb: (error: any, data: any) => any): void;
    commit(force: boolean, cb: (error: any, data: any) => any): void;
    setOffset(topic: string, partition: number, offset: number): void;
    pause(): void;
    resume(): void;
    pauseTopics(topics: any[]): void;
    resumeTopics(topics: any[]): void;
    close(force: boolean, cb: () => any): void;
    close(cb: () => any): void;
  }
  declare export class HighLevelConsumer {
    constructor(
      client: Client,
      payloads: Topic[],
      options: HighLevelConsumerOptions
    ): this;
    client: Client;
    on(eventName: "message", cb: (message: Message) => any): void;
    on(eventName: "error" | "offsetOutOfRange", cb: (error: any) => any): void;
    on(eventName: "rebalancing" | "rebalanced", cb: () => any): void;
    addTopics(
      topics: string[] | Topic[],
      cb?: (error: any, added: string[] | Topic[]) => any
    ): void;
    removeTopics(
      topics: string | string[],
      cb: (error: any, removed: number) => any
    ): void;
    commit(cb: (error: any, data: any) => any): void;
    commit(force: boolean, cb: (error: any, data: any) => any): void;
    sendOffsetCommitRequest(
      commits: OffsetCommitRequest[],
      cb: (error: any, data: any) => any
    ): void;
    setOffset(topic: string, partition: number, offset: number): void;
    pause(): void;
    resume(): void;
    close(force: boolean, cb: (error: any) => any): void;
    close(cb: () => any): void;
  }
  declare export class ConsumerGroup mixins HighLevelConsumer {
    constructor(options: ConsumerGroupOptions, topics: string[] | string): this;
    generationId: number;
    memberId: string;
    client: KafkaClient & Client;
  }
  declare export class Offset {
    constructor(client: Client): this;
    on(eventName: "ready" | "connect", cb: () => any): void;
    on(eventName: "error", cb: (error: any) => any): void;
    fetch(payloads: OffsetRequest[], cb: (error: any, data: any) => any): void;
    commit(
      groupId: string,
      payloads: OffsetCommitRequest[],
      cb: (error: any, data: any) => any
    ): void;
    fetchCommits(
      groupId: string,
      payloads: OffsetFetchRequest[],
      cb: (error: any, data: any) => any
    ): void;
    fetchLatestOffsets(
      topics: string[],
      cb: (error: any, data: any) => any
    ): void;
    fetchEarliestOffsets(
      topics: string[],
      cb: (error: any, data: any) => any
    ): void;
  }
  declare export class KeyedMessage {
    constructor(key: string, value: string | Buffer): this;
  }
  declare export class Admin {
    constructor(kafkaClient: KafkaClient): this;
    listGroups(cb: (error: any, data: any) => any): void;
    describeGroups(
      consumerGroups: any,
      cb: (error: any, data: any) => any
    ): void;
  }
  declare export interface Message {
    topic: string;
    value: string | Buffer;
    offset?: number;
    partition?: number;
    highWaterOffset?: number;
    key?: string;
  }
  declare export interface ProducerOptions {
    requireAcks?: number;
    ackTimeoutMs?: number;
    partitionerType?: number;
  }
  declare export interface KafkaClientOptions {
    kafkaHost?: string;
    connectTimeout?: number;
    requestTimeout?: number;
    autoConnect?: boolean;
    connectRetryOptions?: RetryOptions;
    sslOptions?: any;
    clientId?: string;
  }
  declare export interface RetryOptions {
    retries?: number;
    factor?: number;
    minTimeout?: number;
    maxTimeout?: number;
    randomize?: boolean;
  }
  declare export interface AckBatchOptions {
    noAckBatchSize: number | null;
    noAckBatchAge: number | null;
  }
  declare export interface ZKOptions {
    sessionTimeout?: number;
    spinDelay?: number;
    retries?: number;
  }
  declare export interface ProduceRequest {
    topic: string;
    messages: any;
    key?: any;
    partition?: number;
    attributes?: number;
  }
  declare export interface ConsumerOptions {
    groupId?: string;
    autoCommit?: boolean;
    autoCommitIntervalMs?: number;
    fetchMaxWaitMs?: number;
    fetchMinBytes?: number;
    fetchMaxBytes?: number;
    fromOffset?: boolean;
    encoding?: string;
    keyEncoding?: string;
  }
  declare export type HighLevelConsumerOptions = {
    id?: string,
    maxNumSegments?: number,
    maxTickMessages?: number,
    rebalanceRetry?: RetryOptions
  } & ConsumerOptions;

  declare export interface CustomPartitionAssignmentProtocol {
    name: string;
    version: number;
    userData: {};
    assign(
      topicPattern: any,
      groupMembers: any,
      cb: (error: any, result: any) => void
    ): void;
  }
  declare export interface ConsumerGroupOptions {
    kafkaHost?: string;
    host?: string;
    zk?: ZKOptions;
    batch?: AckBatchOptions;
    ssl?: boolean;
    id?: string;
    groupId: string;
    sessionTimeout?: number;
    protocol?: Array<
      "roundrobin" | "range" | CustomPartitionAssignmentProtocol
    >;
    fromOffset?: "earliest" | "latest" | "none";
    outOfRangeOffset?: "earliest" | "latest" | "none";
    migrateHLC?: boolean;
    migrateRolling?: boolean;
    autoCommit?: boolean;
    autoCommitIntervalMs?: number;
    fetchMaxWaitMs?: number;
    maxNumSegments?: number;
    maxTickMessages?: number;
    fetchMinBytes?: number;
    fetchMaxBytes?: number;
    retries?: number;
    retryFactor?: number;
    retryMinTimeout?: number;
    connectOnReady?: boolean;
  }
  declare export interface Topic {
    topic: string;
    offset?: number;
    encoding?: string;
    autoCommit?: boolean;
  }
  declare export interface OffsetRequest {
    topic: string;
    partition?: number;
    time?: number;
    maxNum?: number;
  }
  declare export interface OffsetCommitRequest {
    topic: string;
    partition?: number;
    offset: number;
    metadata?: string;
  }
  declare export interface OffsetFetchRequest {
    topic: string;
    partition?: number;
    offset?: number;
  }
  declare export class TopicsNotExistError mixins Error {
    topics: string | string[];
  }
  declare export type CustomPartitioner = (
    partitions: number[],
    key: any
  ) => number;
}
