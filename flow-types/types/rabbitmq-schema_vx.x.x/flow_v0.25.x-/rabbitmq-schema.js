declare module "rabbitmq-schema" {
  declare interface Binding {
    destination: Exchange | Queue;
    source: Exchange;
    args?: { [key: string]: any };
    routingPattern?: string;
  }
  declare type TopicBinding = {
    routingPattern: string
  } & Binding;

  declare type DirectBinding = {
    routingPattern: string
  } & Binding;

  declare interface Topology {
    options?: { [key: string]: any };
  }
  declare type Exchange = {
    exchange: string,
    type: string,
    bindings: Binding[]
  } & Topology;

  declare type FanoutExchange = {
    type: "fanout"
  } & Exchange;

  declare type TopicExchange = {
    type: "topic",
    bindings: TopicBinding[]
  } & Exchange;

  declare type DirectExchange = {
    type: "direct",
    bindings: DirectBinding[]
  } & Exchange;

  declare type Queue = {
    queue: string,
    messageSchema: { [key: string]: any }
  } & Topology;

  declare class RabbitMQSchema {
    constructor(schema: Topology | Topology[], parentPath?: string): this;
    getExchanges(): Exchange[];
    getBindings(): Binding[];
    getQueues(): Queue[];
    getDirectBindings(): DirectBinding[];
    validate(schema: Topology | Topology[], parentPath?: string): void;
    validateMessage<T>(
      exchangeName: string,
      routingPattern: string,
      message: T
    ): T;
    getQueueByName(name: string): Queue | void;
    getExchangeByName(name: string): Exchange | void;
  }
  declare module.exports: typeof RabbitMQSchema;
}
