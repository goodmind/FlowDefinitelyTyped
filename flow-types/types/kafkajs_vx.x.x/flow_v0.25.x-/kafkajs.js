declare module "kafkajs" {
  import typeof * as tls from "tls";

  declare export class Kafka {
    constructor(options: KafkaOptions): this;
    producer(options?: ProducerOptions): Producer;
    consumer(options?: ConsumerOptions): Consumer;
    admin(options?: AdminOptions): Admin;
  }
  declare export var PartitionAssigners: {
    roundRobin: PartitionAssigner
  };
  declare interface AssignerProtocol$MemberMetadataOptions {
    version: number;
    topics: string[];
    userData?: Buffer;
  }

  declare interface AssignerProtocol$MemberMetadata {
    encode(options: AssignerProtocol$MemberMetadataOptions): Buffer;
    decode(buffer: Buffer): AssignerProtocol$MemberMetadataOptions;
  }

  declare interface AssignerProtocol$MemberAssignmentOptions {
    version: number;
    assignment: {
      [key: string]: number[]
    };
    userData?: Buffer;
  }

  declare interface AssignerProtocol$MemberAssignment {
    encode(options: AssignerProtocol$MemberAssignmentOptions): Buffer;
    decode(buffer: Buffer): AssignerProtocol$MemberAssignmentOptions;
  }

  declare interface AssignerProtocol$AssignerProtocolStatic {
    MemberMetadata: AssignerProtocol$MemberMetadata;
    MemberAssignment: AssignerProtocol$MemberAssignment;
  }
  declare export var AssignerProtocol: AssignerProtocol$AssignerProtocolStatic;

  declare export var CompressionTypes: {|
    +None: 0, // 0
    +GZIP: 1, // 1
    +Snappy: 2, // 2
    +LZ4: 3, // 3
    +ZSTD: 4 // 4
  |};

  declare export var CompressionCodecs: $ObjMapi<
    { [k: $Values<typeof CompressionTypes>]: any },
    <key>(key) => () => any
  >;

  declare export var ResourceTypes: {|
    +UNKNOWN: 0, // 0
    +ANY: 1, // 1
    +TOPIC: 2, // 2
    +GROUP: 3, // 3
    +CLUSTER: 4, // 4
    +TRANSACTIONAL_ID: 5, // 5
    +DELEGATION_TOKEN: 6 // 6
  |};

  declare export interface KafkaOptions {
    clientId?: string;
    brokers: string[];
    ssl?: tls.ConnectionOptions;
    sasl?: SASLOptions;
    connectionTimeout?: number;
    requestTimeout?: number;
    retry?: RetryOptions;
    logLevel?: $Values<typeof logLevel>;
  }
  declare export interface SASLOptions {
    mechanism: "plain" | "scram-sha-256" | "scram-sha-512";
    username: string;
    password: string;
  }
  declare export interface RetryOptions {
    maxRetryTime?: number;
    initialRetryTime?: number;
    factor?: number;
    multiplier?: number;
    retries?: number;
    maxInFlightRequests?: number | null;
  }

  declare export var logLevel: {|
    +NOTHING: 0, // 0
    +ERROR: 1, // 1
    +WARN: 2, // 2
    +INFO: 4, // 4
    +DEBUG: 5 // 5
  |};

  declare export interface Producer {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    send(payload: MessagePayload): Promise<void>;
    sendBatch(payload: MessageBatchPayload): Promise<void>;
    transaction(): Promise<Transaction>;
    events: ProducerEvents;
    on(
      event: $ElementType<ProducerEvents, $Keys<ProducerEvents>>,
      cb: (e: InstrumentationEvent) => void
    ): () => Producer;
  }
  declare export interface ProducerOptions {
    createPartitioner?: () => (options: {
      topic: string,
      partitionMetadata: PartitionMetadata[],
      message: ProducerMessage
    }) => number;
    retry?: RetryOptions;
    metadataMaxAge?: number;
    allowAutoTopicCreation?: boolean;
    transactionTimeout?: number;
    idempotent?: boolean;
  }
  declare export interface PartitionerPartitionMetadata {
    partitionId: number;
    leader: number;
  }
  declare export interface PartitionMetadata {
    partitionId: number;
    leader: number;
    partitionErrorCode?: number;
    replicas?: number[];
    isr?: number[];
  }
  declare export interface MessagePayloadBase {
    acks?: $Values<typeof AcksBehaviour>;
    timeout?: number;
    compression?: $Values<typeof CompressionTypes>;
  }
  declare export type MessagePayload = {
    topic: string,
    messages: ProducerMessage[],
    transactionTimeout?: number,
    idempotent?: boolean
  } & MessagePayloadBase;

  declare export type MessageBatchPayload = {
    topicMessages: ProducerTopicMessage[]
  } & MessagePayloadBase;

  declare export interface ProducerMessage {
    partition?: number;
    key?: string;
    value: string | Buffer | ArrayBuffer;
    headers?: {
      [key: string]: string
    };
  }
  declare export interface ProducerTopicMessage {
    topic: string;
    messages: ProducerMessage[];
  }

  declare export var AcksBehaviour: {|
    +All: -1, // -1
    +No: 0, // 0
    +Leader: 1 // 1
  |};

  declare export interface Transaction {
    send(payload: MessagePayload): Promise<void>;
    sendBatch(payload: MessageBatchPayload): Promise<void>;
    sendOffsets(offsets: TransactionSendOffsets): Promise<void>;
    commit(): Promise<void>;
    abort(): Promise<void>;
  }
  declare export interface TransactionSendOffsets {
    consumerGroupId: string;
    topics: TransactionSendOffsetsTopic[];
  }
  declare export interface TransactionSendOffsetsTopic {
    topic: string;
    partitions: TransactionSendOffsetsTopicPartitions[];
  }
  declare export interface TransactionSendOffsetsTopicPartitions {
    partition: number;
    offset: string;
  }
  declare export interface Consumer {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    subscribe(options: ConsumerSubscribeOptions): Promise<void>;
    run(options: ConsumerRunOptions): Promise<void>;
    pause(
      topics: Array<{
        topic: string
      }>
    ): void;
    resume(
      topics: Array<{
        topic: string
      }>
    ): void;
    seek(options: ConsumerSeekOptions): void;
    describeGroup(): Promise<GroupMetadata>;
    events: ConsumerEvents;
    on(
      event: $ElementType<ConsumerEvents, $Keys<ConsumerEvents>>,
      cb: (e: InstrumentationEvent) => void
    ): () => Consumer;
  }
  declare export interface ConsumerOptions {
    groupId: string;
    partitionAssigners?: PartitionAssigner[];
    sessionTimeout?: number;
    heartbeatInterval?: number;
    metadataMaxAge?: number;
    allowAutoTopicCreation?: boolean;
    maxBytesPerPartition?: number;
    minBytes?: number;
    maxBytes?: number;
    maxWaitTimeInMs?: number;
    retry?: RetryOptions;
    readUncommitted?: boolean;
  }
  declare export interface PartitionAssigner {
    (x: {
      cluster: any
    }): {
      name: string,
      version: number,
      assign: (options: {
        members: Array<{
          memberId: string
        }>,
        topics: any[],
        userData?: Buffer
      }) => Promise<
        Array<{
          memberId: number,
          memberAssignment: Buffer
        }>
      >,
      protocol?: (options: {
        topics: any
      }) => {
        name: string,
        metadata: Buffer
      }
    };
  }
  declare export interface ConsumerRunOptions {
    eachMessage?: (payload: ConsumerEachMessagePayload) => Promise<void>;
    eachBatch?: (payload: ConsumerEachBatchPayload) => Promise<void>;
    eachBatchAutoResolve?: boolean;
    autoCommitInterval?: number;
    autoCommitThreshold?: number;
    autoCommit?: boolean;
  }
  declare export interface ConsumerSubscribeOptions {
    topic: string;
    fromBeginning?: boolean;
  }
  declare export interface ConsumerMessage {
    timestamp: number;
    key: string;
    value: Buffer;
    headers: {
      [key: string]: string
    };
    offset: number;
  }
  declare export interface ConsumerBatch {
    topic: string;
    partition: number;
    highWatermark: number;
    messages: ConsumerMessage[];
  }
  declare export interface ConsumerEachMessagePayload {
    topic: string;
    partition: number;
    message: ConsumerMessage;
  }
  declare export interface ConsumerEachBatchPayload {
    batch: ConsumerBatch;
    resolveOffset: (offset: number) => Promise<void>;
    heartbeat: () => Promise<void>;
    isRunning: () => boolean;
    commitOffsetsIfNecessary: (
      offsets?: OffsetsByTopicPartition
    ) => Promise<void>;
    uncommittedOffsets: () => OffsetsByTopicPartition;
  }
  declare export interface OffsetsByTopicPartition {
    topics: TopicOffsets[];
  }
  declare export interface TopicOffsets {
    partitions: PartitionOffset[];
  }
  declare export interface PartitionOffset {
    partition: string;
    offset: string;
  }
  declare export interface ConsumerSeekOptions {
    topic: string;
    partition: number;
    offset: number;
  }
  declare export interface GroupMemberMetadata {
    memberId: string;
    clientId: string;
    clientHost: string;
    memberMetadata: Buffer;
    memberAssignment: Buffer;
  }
  declare export interface GroupMetadata {
    errorCode: number;
    groupId: string;
    protocolType: string;
    protocol: string;
    members: GroupMemberMetadata[];
    state: string;
  }
  declare export interface Admin {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    createTopics(options: AdminCreateTopicsOptions): Promise<void>;
    deleteTopics(options: AdminDeleteTopicsOptions): Promise<void>;
    getTopicMetadata(options: {
      topics?: string[]
    }): Promise<{
      topics: TopicMetadata[]
    }>;
    fetchOffsets(
      options: AdminFetchOffsetsOptions
    ): Promise<AdminTopicOffset[]>;
    resetOffsets(options: AdminResetOffsetsOptions): Promise<void>;
    setOffsets(options: AdminSetOffsetsOptions): Promise<void>;
    describeConfigs(
      options: AdminDescribeConfigsOptions
    ): Promise<AdminConfigDescription>;
    alterConfigs(options: AdminAlterConfigsOptions): Promise<void>;
    events: AdminEvents;
    on(
      event: $ElementType<AdminEvents, $Keys<AdminEvents>>,
      cb: (e: InstrumentationEvent) => void
    ): () => Admin;
  }
  declare export interface AdminOptions {
    retry?: RetryOptions;
  }
  declare export interface AdminCreateTopicsOptions {
    validateOnly?: boolean;
    waitForLeaders?: boolean;
    timeout?: number;
    topics: AdminTopic[];
  }
  declare export interface AdminTopic {
    topic: string;
    numPartitions?: number;
    replicationFactor?: number;
    replicaAssignment?: AdminTopicReplicaAssignment[];
    configEntries?: AdminTopicConfigEntry[];
  }
  declare export interface AdminTopicReplicaAssignment {
    partition: number;
    replicas: number[];
  }
  declare export interface AdminTopicConfigEntry {
    name: string;
    value: string;
  }
  declare export interface AdminDeleteTopicsOptions {
    timeout?: number;
    topics: string[];
  }
  declare export interface AdminFetchOffsetsOptions {
    groupId: string;
    topic: string;
  }
  declare export interface AdminResetOffsetsOptions {
    groupId: string;
    topic: string;
    earliest?: boolean;
  }
  declare export interface TopicMetadata {
    name: string;
    partitions: PartitionMetadata[];
  }
  declare export interface AdminDescribeConfigsOptions {
    resources: ResourceConfigQuery[];
  }
  declare export interface ResourceConfigQuery {
    type: $Values<typeof ResourceTypes>;
    name: string;
    configNames?: string[];
    type: $Values<typeof ResourceTypes>;
    name: string;
    configEntries: ResourceConfigEntry[];
  }
  declare export interface AdminConfigDescription {
    resources: AdminConfigDescriptionResource[];
    throttleTime: number;
  }
  declare export interface AdminConfigDescriptionResource {
    configEntries: AdminConfigDescriptionResourceConfigEntry[];
    errorCode: number;
    errorMessage: string;
    resourceName: string;
    resourceType: $Values<typeof ResourceTypes>;
  }
  declare export interface AdminConfigDescriptionResourceConfigEntry {
    configName: string;
    configValue: string;
    isDefault: boolean;
    isSensitive: boolean;
    readOnly: boolean;
  }
  declare export interface AdminAlterConfigsOptions {
    validateOnly: boolean;
    resources: ResourceConfigQuery[];
  }
  declare export interface ResourceConfigEntry {
    name: string;
    value: string;
  }
  declare export interface AdminAlterConfigReturn {
    resources: AdminAlterConfigResource[];
    throttleTime: number;
  }
  declare export interface AdminAlterConfigResource {
    errorCode: number;
    errorMessage: string;
    resourceName: string;
    resourceType: $Values<typeof ResourceTypes>;
  }
  declare export interface AdminTopicOffset {
    partition: number;
    offset: string;
  }
  declare export interface AdminSetOffsetsSeekEntry {
    partition: number;
    offset: string;
  }
  declare export interface AdminSetOffsetsOptions {
    groupId: string;
    topic: string;
    partitions: AdminSetOffsetsSeekEntry[];
  }
  declare export interface InstrumentationEvent {
    id: number;
    type: string;
    timestamp: number;
    payload: {
      [key: string]: any
    };
  }
  declare export interface ConsumerEvents {
    HEARTBEAT: "consumer.heartbeat";
    COMMIT_OFFSETS: "consumer.commit_offsets";
    GROUP_JOIN: "consumer.group_join";
    FETCH: "consumer.fetch";
    START_BATCH_PROCESS: "consumer.start_batch_process";
    END_BATCH_PROCESS: "consumner.end_batch_process";
    CONNECT: "consumer.connect";
    DISCONNECT: "consumer.disconnect";
    STOP: "consumer.stop";
    CRASH: "consumer.crash";
    REQUEST: "consumer.request";
    REQUEST_TIMEOUT: "consumer.request_timeout";
    REQUEST_QUEUE_SIZE: "consumer.request_queue_size";
  }
  declare export interface ProducerEvents {
    CONNECT: "producer.connect";
    DISCONNECT: "producer.disconnect";
    REQUEST: "producer.request";
    REQUEST_TIMEOUT: "producer.request_timeout";
    REQUEST_QUEUE_SIZE: "producer.request_queue_size";
  }
  declare export interface AdminEvents {
    CONNECT: "admin.connect";
    DISCONNECT: "admin.disconnect";
    REQUEST: "admin.request";
    REQUEST_TIMEOUT: "admin.request_timeout";
    REQUEST_QUEUE_SIZE: "admin.request_queue_size";
  }
}
